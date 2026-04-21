import { format } from '../src/index';

describe('format spanish-es', () => {

    const locale = 'es';
    const now = 1713571200000;
    const at = (ms: number) => now + ms;

    test('should return true resolution', async () => {
        await expect( format( now, { locale: 'en', now } ) ).resolves.toBeTruthy();
    });

    test('locale spanish-es - style "round" by default', async () => {

        expect( await format( at(0), { locale, now } ) ).toEqual( 'justo ahora' );
        expect( await format( at(-1 * 1000), { locale, now } ) ).toEqual( 'hace 1 segundo' );
        expect( await format( at(1 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 segundo' );
        expect( await format( at(-60 * 1000), { locale, now } ) ).toEqual( 'hace 1 minuto' );
        expect( await format( at(60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 minuto' );
        expect( await format( at(-60 * 60 * 1000), { locale, now } ) ).toEqual( 'hace 1 hora' );
        expect( await format( at(60 * 60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 hora' );
        expect( await format( at(-24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'hace 1 día' );
        expect( await format( at(24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 día' );
        expect( await format( at(-7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'hace 1 semana' );
        expect( await format( at(7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 semana' );
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'hace 1 mes' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 mes' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'hace 1 año' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'dentro de 1 año' );

    });

    test('locale spanish-es - style "mini"', async () => {

        expect( await format( at(0), { locale: 'en', style: 'mini', now } ) ).toEqual( '0s' );
        expect( await format( at(-1 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1s' );
        expect( await format( at(1 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1s' );
        expect( await format( at(-60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1m' );
        expect( await format( at(60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1m' );
        expect( await format( at(-60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1h' );
        expect( await format( at(60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1h' );
        expect( await format( at(-24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1d' );
        expect( await format( at(24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1d' );
        expect( await format( at(-7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1semana' );
        expect( await format( at(7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1semana' );
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1mes' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1mes' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1año' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1año' );

    });


});