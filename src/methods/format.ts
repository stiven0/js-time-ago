import { seconds, minutes, hours, days, weeks, months, years } from '../time/index';
import { calculateMinutes, calculateSeconds, calculateHours, calculateDays, calculateWeeks, calculateMonths, calculateYears } from '../utils/time-calculations';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

const INVALID_TIME_MESSAGE = 'unsupported time';

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

export const formatSync = (time: number | Date, local: locale, style: style = 'round'): string => {

    const normalizedTime = normalizeTime(time);
    const currentDate = Date.now();
    const difference = currentDate - normalizedTime;
    const isPastOrFuture: isPastOrFuture = normalizedTime > currentDate ? 'future' : 'past';

    if ((isPastOrFuture === 'future' && difference > -60000) || (difference >= 0 && difference < 60000)) {
        return seconds(calculateSeconds(difference), local, isPastOrFuture, style);
    }

    if ((difference <= -60000 && difference > -3600000) || (difference >= 60000 && difference < 3600000)) {
        return minutes(calculateMinutes(difference), local, isPastOrFuture, style);
    }

    if ((difference <= -3600000 && difference > -86400000) || (difference >= 3600000 && difference < 86400000)) {
        return hours(calculateHours(difference), local, isPastOrFuture, style);
    }

    if ((difference <= -86400000 && difference > -604800000) || (difference >= 86400000 && difference < 604800000)) {
        return days(calculateDays(difference), local, isPastOrFuture, style);
    }

    if ((difference <= -604800000 && difference >= -2419000000) || (difference >= 604800000 && difference <= 2419000000)) {
        return weeks(calculateWeeks(difference), local, isPastOrFuture, style);
    }

    if ((difference < -2419000000 && difference >= -28910000000) || (difference > 2419000000 && difference <= 28910000000)) {
        return months(calculateMonths(difference), local, isPastOrFuture, style);
    }

    return years(calculateYears(difference), local, isPastOrFuture, style);
};

export const format = (time: number | Date, local: locale, style: style = 'round'): Promise<string> => {
    try {
        return Promise.resolve(formatSync(time, local, style));
    } catch (error: unknown) {
        return Promise.reject(error instanceof Error ? error : new Error(INVALID_TIME_MESSAGE));
    }
};