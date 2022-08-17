import { format } from '../src/methods/index';

describe('format spanish-es', () => {

    const locale = 'es';

    test('should return true resolution', async () => {
        await expect( format( Date.now(), 'en' ) ).resolves.toBeTruthy();
    });

    test('locale spanish-es - style "round" by default', async () => {

        expect( await format( Date.now(), locale ) ).toEqual( 'justo ahora' );
        expect( await format( Date.now() - 1 * 1000, locale, ) ).toEqual( 'hace 1 segundo' );
        expect( await format( Date.now() + 1 * 1000, locale ) ).toEqual( 'dentro de 1 segundo' );
        expect( await format( Date.now() - 60 * 1000, locale ) ).toEqual( 'hace 1 minuto' );
        expect( await format( Date.now() + 60 * 1000, locale ) ).toEqual( 'dentro de 1 minuto' );
        expect( await format( Date.now() - 60 * 60 * 1000, locale ) ).toEqual( 'hace 1 hora' );
        expect( await format( Date.now() + 60 * 60 * 1000, locale ) ).toEqual( 'dentro de 1 hora' );
        expect( await format( Date.now() - 24 * 60 * 60 * 1000, locale ) ).toEqual( 'hace 1 día' );
        expect( await format( Date.now() + 24 * 60 * 60 * 1000, locale ) ).toEqual( 'dentro de 1 día' );
        expect( await format( Date.now() - 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'hace 1 semana' );
        expect( await format( Date.now() + 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'dentro de 1 semana' );
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'hace 1 mes' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'dentro de 1 mes' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'hace 1 año' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'dentro de 1 año' );

    });

    test('locale spanish-es - style "mini"', async () => {

        expect( await format( Date.now(), 'en', 'mini' ) ).toEqual( '0s' );
        expect( await format( Date.now() - 1 * 1000, locale, 'mini' ) ).toEqual( '1s' );
        expect( await format( Date.now() + 1 * 1000, locale, 'mini' ) ).toEqual( '1s' );
        expect( await format( Date.now() - 60 * 1000, locale, 'mini' ) ).toEqual( '1m' );
        expect( await format( Date.now() + 60 * 1000, locale, 'mini' ) ).toEqual( '1m' );
        expect( await format( Date.now() - 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1h' );
        expect( await format( Date.now() + 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1h' );
        expect( await format( Date.now() - 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1d' );
        expect( await format( Date.now() + 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1d' );
        expect( await format( Date.now() - 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1semana' );
        expect( await format( Date.now() + 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1semana' );
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1mes' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1mes' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1año' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1año' );

    });


});