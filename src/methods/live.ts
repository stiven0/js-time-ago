import { formatOptions } from '../types/format-options';
import { formatParts } from '../types/format-parts';
import { unit } from '../types/unit';
import { formatToPartsSync } from './format';

export interface liveFormatSnapshot {
    formatted: string;
    parts: formatParts;
    intervalMs: number;
}

export interface createLiveFormatOptions extends formatOptions {
    intervalMs?: number;
    immediate?: boolean;
    onUpdate?: (snapshot: liveFormatSnapshot) => void;
}

export interface liveFormatController {
    get: () => liveFormatSnapshot;
    subscribe: (listener: (snapshot: liveFormatSnapshot) => void) => () => void;
    start: () => void;
    stop: () => void;
    updateTime: (time: number | Date) => void;
    isRunning: () => boolean;
}

const resolveAdaptiveInterval = (selectedUnit: unit): number => {
    if (selectedUnit === 'second') return 1000;
    if (selectedUnit === 'minute') return 30000;
    if (selectedUnit === 'hour') return 5 * 60 * 1000;
    return 60 * 60 * 1000;
};

const sanitizeInterval = (intervalMs?: number): number | undefined => {
    if (!Number.isFinite(intervalMs)) return undefined;
    return Math.max(250, Math.floor(intervalMs as number));
};

export const createLiveFormat = (
    time: number | Date,
    options: createLiveFormatOptions = {}
): liveFormatController => {
    let targetTime = +time;
    if (!Number.isFinite(targetTime)) {
        throw new Error('unsupported time');
    }

    const listeners = new Set<(snapshot: liveFormatSnapshot) => void>();
    const fixedInterval = sanitizeInterval(options.intervalMs);
    const immediate = options.immediate !== false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const buildSnapshot = (): liveFormatSnapshot => {
        const parts = formatToPartsSync(targetTime, {
            ...options,
            now: Date.now()
        });

        return {
            formatted: parts.formatted,
            parts,
            intervalMs: fixedInterval ?? resolveAdaptiveInterval(parts.unit)
        };
    };

    let current = buildSnapshot();

    const notify = (): void => {
        for (const listener of listeners) {
            listener(current);
        }

        if (options.onUpdate) {
            options.onUpdate(current);
        }
    };

    const scheduleNext = (): void => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            current = buildSnapshot();
            notify();
            scheduleNext();
        }, current.intervalMs);
    };

    if (options.onUpdate && immediate) {
        options.onUpdate(current);
    }

    return {
        get: () => current,
        subscribe: (listener) => {
            listeners.add(listener);
            if (immediate) {
                listener(current);
            }

            return () => {
                listeners.delete(listener);
            };
        },
        start: () => {
            if (timer) return;
            scheduleNext();
        },
        stop: () => {
            if (!timer) return;
            clearTimeout(timer);
            timer = null;
        },
        updateTime: (nextTime: number | Date) => {
            const normalizedTime = +nextTime;
            if (!Number.isFinite(normalizedTime)) {
                throw new Error('unsupported time');
            }

            targetTime = normalizedTime;
            current = buildSnapshot();
            notify();

            if (timer) {
                scheduleNext();
            }
        },
        isRunning: () => timer !== null
    };
};
