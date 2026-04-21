import { formatSync, registerLocale } from '../src/index';
import type { localeDict } from '../src/index';

describe('registerLocale', () => {

    const now = 1713571200000;
    const at = (ms: number) => now + ms;

    test('registra un locale custom y lo usa en formatSync', () => {
        const fr: localeDict = {
            now: 'maintenant',
            nowMini: '0s',
            second: {
                past:   (n) => n === 1 ? 'il y a 1 seconde'  : `il y a ${n} secondes`,
                future: (n) => n === 1 ? 'dans 1 seconde'    : `dans ${n} secondes`,
                mini:   (n) => `${n}s`
            },
            minute: {
                past:   (n) => n === 1 ? 'il y a 1 minute'   : `il y a ${n} minutes`,
                future: (n) => n === 1 ? 'dans 1 minute'      : `dans ${n} minutes`,
                mini:   (n) => `${n}m`
            },
            hour: {
                past:   (n) => n === 1 ? 'il y a 1 heure'    : `il y a ${n} heures`,
                future: (n) => n === 1 ? 'dans 1 heure'       : `dans ${n} heures`,
                mini:   (n) => `${n}h`
            },
            day: {
                past:   (n) => n === 1 ? 'il y a 1 jour'     : `il y a ${n} jours`,
                future: (n) => n === 1 ? 'dans 1 jour'        : `dans ${n} jours`,
                mini:   (n) => `${n}j`
            },
            week: {
                past:   (n) => n === 1 ? 'il y a 1 semaine'  : `il y a ${n} semaines`,
                future: (n) => n === 1 ? 'dans 1 semaine'     : `dans ${n} semaines`,
                mini:   (n) => `${n}sem`
            },
            month: {
                past:   (n) => n === 1 ? 'il y a 1 mois'     : `il y a ${n} mois`,
                future: (n) => n === 1 ? 'dans 1 mois'        : `dans ${n} mois`,
                mini:   (n) => `${n}mois`
            },
            year: {
                past:   (n) => n === 1 ? 'il y a 1 an'       : `il y a ${n} ans`,
                future: (n) => n === 1 ? 'dans 1 an'          : `dans ${n} ans`,
                mini:   (n) => `${n}ans`
            }
        };

        registerLocale('fr', fr);

        expect( formatSync(at(0),               { locale: 'fr', now }) ).toEqual('maintenant');
        expect( formatSync(at(-1 * 1000),       { locale: 'fr', now }) ).toEqual('il y a 1 seconde');
        expect( formatSync(at(-60 * 1000),      { locale: 'fr', now }) ).toEqual('il y a 1 minute');
        expect( formatSync(at(60 * 60 * 1000),  { locale: 'fr', now }) ).toEqual('dans 1 heure');
        expect( formatSync(at(-2 * 24 * 60 * 60 * 1000), { locale: 'fr', now }) ).toEqual('il y a 2 jours');
    });

    test('fallback a en cuando el locale no existe', () => {
        expect( formatSync(at(-60 * 1000), { locale: 'xyz', now }) ).toEqual('1 minute ago');
    });

});
