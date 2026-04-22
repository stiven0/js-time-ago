import { createLiveFormat, format, formatSync, formatToPartsSync, registerLocale } from '../src/index';
import type { localeDict } from '../src/index';

// ── Locale custom (francés) registrado en runtime ─────────────────────────────
const fr: localeDict = {
    now: 'maintenant', nowMini: '0s',
    second: { past: (n) => `il y a ${n}s`,    future: (n) => `dans ${n}s`,    mini: (n) => `${n}s`   },
    minute: { past: (n) => `il y a ${n}m`,    future: (n) => `dans ${n}m`,    mini: (n) => `${n}m`   },
    hour:   { past: (n) => `il y a ${n}h`,    future: (n) => `dans ${n}h`,    mini: (n) => `${n}h`   },
    day:    { past: (n) => `il y a ${n}j`,    future: (n) => `dans ${n}j`,    mini: (n) => `${n}j`   },
    week:   { past: (n) => `il y a ${n}sem`,  future: (n) => `dans ${n}sem`,  mini: (n) => `${n}sem` },
    month:  { past: (n) => `il y a ${n}mois`, future: (n) => `dans ${n}mois`, mini: (n) => `${n}mois`},
    year:   { past: (n) => `il y a ${n}ans`,  future: (n) => `dans ${n}ans`,  mini: (n) => `${n}ans` }
};
registerLocale('fr', fr);
// ─────────────────────────────────────────────────────────────────────────────

const samples = [
    Date.now(),
    Date.now() - 90 * 1000,
    Date.now() + 2 * 60 * 60 * 1000,
    Date.now() - 2 * 24 * 60 * 60 * 1000,
    Date.now() + 2 * 24 * 60 * 60 * 1000,
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

        const frResult = formatSync(value, { locale: 'fr', now: fixedNow });
        const calendarEs = formatSync(value, { locale: 'es', now: fixedNow, calendar: true });
        const calendarEn = formatSync(value, { locale: 'en', now: fixedNow, calendar: true });

        console.log('time:', value);
        console.log(' async(es, round):', asyncResult);
        console.log(' sync(en, mini, floor):', syncResult);
        console.log(' parts(pt):', parts);
        console.log(' custom(fr):', frResult);
        console.log(' calendar(es):', calendarEs);
        console.log(' calendar(en):', calendarEn);
        console.log('---');
    }

    // Live formatter: ideal para chat/feed sin recalcular manualmente
    const live = createLiveFormat(Date.now() - 50 * 1000, {
        locale: 'en'
    });

    const unsubscribe = live.subscribe((snapshot) => {
        console.log(' live(en):', snapshot.formatted, `| next in ${snapshot.intervalMs}ms`);
    });

    live.start();

    setTimeout(() => {
        unsubscribe();
        live.stop();
        console.log(' live(en): stopped');
    }, 3200);
})();
