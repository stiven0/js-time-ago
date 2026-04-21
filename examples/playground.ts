import { format, formatSync } from '../src/index';

const samples = [
    Date.now(),
    Date.now() - 90 * 1000,
    Date.now() + 2 * 60 * 60 * 1000,
    new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
];

(async () => {
    for (const value of samples) {
        const asyncResult = await format(value, 'es', 'round');
        const syncResult = formatSync(value, 'en', 'mini');

        console.log('time:', value);
        console.log(' async(es, round):', asyncResult);
        console.log(' sync(en, mini):', syncResult);
        console.log('---');
    }
})();
