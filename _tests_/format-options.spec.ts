import { format, formatSync, formatToParts, formatToPartsSync } from '../src/index';

describe('format options api', () => {

    test('supports options object in sync format', () => {
        const now = 1713571200000;
        const oneHourAgo = now - 60 * 60 * 1000;

        const result = formatSync(oneHourAgo, {
            locale: 'en',
            style: 'round',
            now
        });

        expect(result).toEqual('1 hour ago');
    });

    test('supports options object in async format', async () => {
        const now = 1713571200000;
        const twoMinutesFuture = now + 2 * 60 * 1000;

        const result = await format(twoMinutesFuture, {
            locale: 'es',
            style: 'round',
            now
        });

        expect(result).toEqual('dentro de 2 minutos');
    });

    test('supports minUnit and maxUnit clamping', () => {
        const now = 1713571200000;
        const thirtySecondsAgo = now - 30 * 1000;
        const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000;

        const minUnitResult = formatSync(thirtySecondsAgo, {
            locale: 'en',
            now,
            minUnit: 'minute'
        });

        const maxUnitResult = formatSync(oneYearAgo, {
            locale: 'en',
            now,
            maxUnit: 'day'
        });

        expect(minUnitResult).toEqual('1 minute ago');
        expect(maxUnitResult).toEqual('365 days ago');
    });

    test('supports rounding mode', () => {
        const now = 1713571200000;
        const ninetySecondsAgo = now - 90 * 1000;

        const floorResult = formatSync(ninetySecondsAgo, {
            locale: 'en',
            now,
            rounding: 'floor'
        });

        const ceilResult = formatSync(ninetySecondsAgo, {
            locale: 'en',
            now,
            rounding: 'ceil'
        });

        expect(floorResult).toEqual('1 minute ago');
        expect(ceilResult).toEqual('2 minutes ago');
    });

    test('returns structured parts', async () => {
        const now = 1713571200000;
        const value = now + 3 * 60 * 60 * 1000;

        const syncParts = formatToPartsSync(value, {
            locale: 'pt',
            now,
            style: 'mini'
        });

        const asyncParts = await formatToParts(value, {
            locale: 'pt',
            now,
            style: 'mini'
        });

        expect(syncParts.unit).toEqual('hour');
        expect(syncParts.value).toEqual(3);
        expect(syncParts.tense).toEqual('future');
        expect(syncParts.formatted).toEqual('3h');
        expect(asyncParts).toEqual(syncParts);
    });

    test('throws error for invalid unit range', async () => {
        expect(() => formatSync(Date.now(), {
            minUnit: 'year',
            maxUnit: 'second'
        })).toThrow('unsupported options');

        await expect(format(Date.now(), {
            minUnit: 'year',
            maxUnit: 'second'
        })).rejects.toThrow('unsupported options');
    });

    test('throws error for invalid timeZone', async () => {
        expect(() => formatSync(Date.now(), {
            calendar: true,
            timeZone: 'Invalid/Zone'
        })).toThrow('unsupported options');

        await expect(format(Date.now(), {
            calendar: true,
            timeZone: 'Invalid/Zone'
        })).rejects.toThrow('unsupported options');
    });

});