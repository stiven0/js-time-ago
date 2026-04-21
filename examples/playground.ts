import { format, formatSync, formatToPartsSync } from '../src/index';

const samples = [
    Date.now(),
    Date.now() - 90 * 1000,
    Date.now() + 2 * 60 * 60 * 1000,
    new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
];

(async () => {
    const fixedNow = Date.now();

    for (const value of samples) {
        const asyncResult = await format(value, {
            locale: 'es',
            style: 'round',
            now: fixedNow
        });

        const syncResult = formatSync(value, {
            locale: 'en',
            style: 'mini',
            rounding: 'floor',
            now: fixedNow
        });

        const parts = formatToPartsSync(value, {
            locale: 'pt',
            style: 'round',
            now: fixedNow
        });

        console.log('time:', value);
        console.log(' async(es, round):', asyncResult);
        console.log(' sync(en, mini, floor):', syncResult);
        console.log(' parts(pt):', parts);
        console.log('---');
    }
})();
