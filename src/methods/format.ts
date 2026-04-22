import '../locale/index'; // registra los built-in locales
import { getLocaleDict } from '../locale/registry';
import { isPastOrFuture } from '../types/is-past-or-future';
import { formatOptions } from '../types/format-options';
import { formatParts } from '../types/format-parts';
import { locale } from '../types/locale';
import { rounding } from '../types/rounding';
import { style } from '../types/style';
import { unit, unitsOrder } from '../types/unit';

const INVALID_TIME_MESSAGE = 'unsupported time';
const INVALID_OPTIONS_MESSAGE = 'unsupported options';

type unitConfig = {
    name: unit;
    divisor: number;
};

const unitConfigs: unitConfig[] = [
    { name: 'second', divisor: 1000 },
    { name: 'minute', divisor: 1000 * 60 },
    { name: 'hour', divisor: 1000 * 60 * 60 },
    { name: 'day', divisor: 1000 * 60 * 60 * 24 },
    { name: 'week', divisor: 1000 * 60 * 60 * 24 * 7 },
    { name: 'month', divisor: 1000 * 60 * 60 * 24 * 7 * 4 },
    { name: 'year', divisor: 1000 * 60 * 60 * 24 * 365 }
];

type resolvedOptions = {
    locale: locale;
    style: style;
    now: number;
    rounding: rounding;
    minUnit: unit;
    maxUnit: unit;
    calendar: boolean;
    calendarThresholdDays: number;
};

const isOptionsObject = (value: unknown): value is formatOptions => {
    return typeof value === 'object' && value !== null;
};

const assertValidUnitRange = (minUnit: unit, maxUnit: unit): void => {
    if (unitsOrder.indexOf(minUnit) > unitsOrder.indexOf(maxUnit)) {
        throw new Error(INVALID_OPTIONS_MESSAGE);
    }
};

const normalizeNow = (now?: number | Date): number => {
    if (typeof now === 'undefined') {
        return Date.now();
    }

    return normalizeTime(now);
};

const resolveOptions = (
    localOrOptions?: locale | formatOptions,
    styleOrOptions?: style | formatOptions
): resolvedOptions => {
    if (isOptionsObject(localOrOptions)) {
        const merged = localOrOptions;
        const minUnit = merged.minUnit ?? 'second';
        const maxUnit = merged.maxUnit ?? 'year';

        assertValidUnitRange(minUnit, maxUnit);

        return {
            locale: merged.locale ?? 'en',
            style: merged.style ?? 'round',
            now: normalizeNow(merged.now),
            rounding: merged.rounding ?? 'round',
            minUnit,
            maxUnit,
            calendar: merged.calendar ?? false,
            calendarThresholdDays: Number.isFinite(merged.calendarThresholdDays)
                ? Math.max(2, Math.floor(merged.calendarThresholdDays as number))
                : 7
        };
    }

    const mergedFromLegacy = isOptionsObject(styleOrOptions) ? styleOrOptions : {};
    const minUnit = mergedFromLegacy.minUnit ?? 'second';
    const maxUnit = mergedFromLegacy.maxUnit ?? 'year';

    assertValidUnitRange(minUnit, maxUnit);

    return {
        locale: (localOrOptions as locale | undefined) ?? mergedFromLegacy.locale ?? 'en',
        style: (styleOrOptions as style | undefined) ?? mergedFromLegacy.style ?? 'round',
        now: normalizeNow(mergedFromLegacy.now),
        rounding: mergedFromLegacy.rounding ?? 'round',
        minUnit,
        maxUnit,
        calendar: mergedFromLegacy.calendar ?? false,
        calendarThresholdDays: Number.isFinite(mergedFromLegacy.calendarThresholdDays)
            ? Math.max(2, Math.floor(mergedFromLegacy.calendarThresholdDays as number))
            : 7
    };
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const startOfDay = (value: number): number => {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
};

const resolveCalendarText = (
    time: number,
    now: number,
    local: locale,
    thresholdDays: number,
    selectedStyle: style
): string | undefined => {
    if (selectedStyle !== 'round') {
        return undefined;
    }

    const dict = getLocaleDict(local);
    if (!dict || !dict.calendar) {
        return undefined;
    }

    const diffDays = (startOfDay(time) - startOfDay(now)) / DAY_IN_MS;

    if (diffDays === -1) return dict.calendar.yesterday;
    if (diffDays === 0) return dict.calendar.today;
    if (diffDays === 1) return dict.calendar.tomorrow;

    if (diffDays < -1 && diffDays >= -thresholdDays) return dict.calendar.lastWeek;
    if (diffDays > 1 && diffDays <= thresholdDays) return dict.calendar.nextWeek;

    return undefined;
};

const applyRounding = (value: number, mode: rounding): number => {
    if (mode === 'floor') {
        return Math.floor(value);
    }

    if (mode === 'ceil') {
        return Math.ceil(value);
    }

    return Math.round(value);
};

const resolveUnit = (difference: number): unit => {
    const absolute = Math.abs(difference);

    if (absolute < 60000) return 'second';
    if (absolute < 3600000) return 'minute';
    if (absolute < 86400000) return 'hour';
    if (absolute < 604800000) return 'day';
    if (absolute <= 2419000000) return 'week';
    if (absolute <= 28910000000) return 'month';
    return 'year';
};

const clampUnit = (resolvedUnit: unit, minUnit: unit, maxUnit: unit): unit => {
    const resolvedIndex = unitsOrder.indexOf(resolvedUnit);
    const minIndex = unitsOrder.indexOf(minUnit);
    const maxIndex = unitsOrder.indexOf(maxUnit);

    if (resolvedIndex < minIndex) return minUnit;
    if (resolvedIndex > maxIndex) return maxUnit;

    return resolvedUnit;
};

const unitToNumber = (difference: number, selectedUnit: unit, mode: rounding): number => {
    const config = unitConfigs.find((item) => item.name === selectedUnit);
    if (!config) {
        return 0;
    }

    return applyRounding(Math.abs(difference / config.divisor), mode);
};

const render = (value: number, selectedUnit: unit, local: locale, tense: isPastOrFuture, selectedStyle: style): string => {
    const dict = getLocaleDict(local);
    if (!dict) {
        throw new Error(`locale '${local}' is not registered`);
    }

    if (selectedUnit === 'second' && value === 0) {
        return selectedStyle === 'mini' ? dict.nowMini : dict.now;
    }

    const unitDict = dict[selectedUnit];
    if (selectedStyle === 'mini') return unitDict.mini(value);
    return tense === 'past' ? unitDict.past(value) : unitDict.future(value);
};

const normalizeTime = (time: number | Date): number => {
    if (typeof time === 'boolean' || typeof time === 'string') {
        throw new Error(INVALID_TIME_MESSAGE);
    }

    const normalized = +time;
    if (!Number.isFinite(normalized)) {
        throw new Error(INVALID_TIME_MESSAGE);
    }

    return normalized;
};

/**
 * This function allows you to calculate the time since an event occurred or will occur (valid for past and future dates)
 * 
 * @param {number|Date} time - Refers to the time we want to calculate in milliseconds
 * @param {locale} local - It refers to a specific type of language, example spanish-es, english-en, portuguese-pt
 * @param {style} [style] - (Optional) Refers to the output format of text can be 'round' or 'mini', by default it is 'round'
 * @returns {Promise} returns a promise with the elapsed time or that will elapse from the event date (time) to the current moment
 */

export const formatToPartsSync = (
    time: number | Date,
    localOrOptions?: locale | formatOptions,
    styleOrOptions?: style | formatOptions
): formatParts => {
    const normalizedTime = normalizeTime(time);
    const options = resolveOptions(localOrOptions, styleOrOptions);
    const difference = options.now - normalizedTime;
    const tense: isPastOrFuture = normalizedTime > options.now ? 'future' : 'past';
    const selectedUnit = clampUnit(resolveUnit(difference), options.minUnit, options.maxUnit);
    const value = unitToNumber(difference, selectedUnit, options.rounding);
    const calendarText = options.calendar
        ? resolveCalendarText(normalizedTime, options.now, options.locale, options.calendarThresholdDays, options.style)
        : undefined;
    const formatted = calendarText ?? render(value, selectedUnit, options.locale, tense, options.style);

    return {
        value,
        unit: selectedUnit,
        tense,
        locale: options.locale,
        style: options.style,
        formatted
    };
};

export const formatSync = (
    time: number | Date,
    localOrOptions?: locale | formatOptions,
    styleOrOptions?: style | formatOptions
): string => {
    return formatToPartsSync(time, localOrOptions, styleOrOptions).formatted;
};

export const formatToParts = (
    time: number | Date,
    localOrOptions?: locale | formatOptions,
    styleOrOptions?: style | formatOptions
): Promise<formatParts> => {
    try {
        return Promise.resolve(formatToPartsSync(time, localOrOptions, styleOrOptions));
    } catch (error: unknown) {
        return Promise.reject(error instanceof Error ? error : new Error(INVALID_TIME_MESSAGE));
    }
};

export const format = (
    time: number | Date,
    localOrOptions?: locale | formatOptions,
    styleOrOptions?: style | formatOptions
): Promise<string> => {
    try {
        return Promise.resolve(formatSync(time, localOrOptions, styleOrOptions));
    } catch (error: unknown) {
        return Promise.reject(error instanceof Error ? error : new Error(INVALID_TIME_MESSAGE));
    }
};