import { formatSync } from '../src/index';

describe('calendar mode', () => {

    const now = new Date('2026-04-21T12:00:00.000Z').getTime();
    const at = (days: number) => now + days * 24 * 60 * 60 * 1000;

    test('returns today/yesterday/tomorrow in english', () => {
        expect(formatSync(at(0), { locale: 'en', now, calendar: true })).toEqual('today');
        expect(formatSync(at(-1), { locale: 'en', now, calendar: true })).toEqual('yesterday');
        expect(formatSync(at(1), { locale: 'en', now, calendar: true })).toEqual('tomorrow');
    });

    test('returns week labels in spanish', () => {
        expect(formatSync(at(-3), { locale: 'es', now, calendar: true })).toEqual('la semana pasada');
        expect(formatSync(at(3), { locale: 'es', now, calendar: true })).toEqual('la próxima semana');
    });

    test('falls back to relative when outside threshold', () => {
        expect(formatSync(at(-20), { locale: 'en', now, calendar: true })).toEqual('3 weeks ago');
        expect(formatSync(at(20), { locale: 'en', now, calendar: true })).toEqual('in 3 weeks');
    });

    test('custom threshold works', () => {
        expect(formatSync(at(-3), { locale: 'en', now, calendar: true, calendarThresholdDays: 2 })).toEqual('3 days ago');
        expect(formatSync(at(3), { locale: 'en', now, calendar: true, calendarThresholdDays: 2 })).toEqual('in 3 days');
    });

    test('calendar ignored for mini style', () => {
        expect(formatSync(at(-1), { locale: 'en', now, calendar: true, style: 'mini' })).toEqual('1d');
    });

    test('resolves calendar labels using provided timeZone', () => {
        const tzNow = new Date('2026-04-21T01:30:00.000Z').getTime();
        const tzTime = new Date('2026-04-20T23:30:00.000Z').getTime();

        expect(formatSync(tzTime, {
            locale: 'en',
            now: tzNow,
            calendar: true,
            timeZone: 'UTC'
        })).toEqual('yesterday');

        expect(formatSync(tzTime, {
            locale: 'en',
            now: tzNow,
            calendar: true,
            timeZone: 'America/Bogota'
        })).toEqual('today');
    });

});
