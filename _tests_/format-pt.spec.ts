import { format } from '../src/methods/index';

describe('format Portuguese-pt', () => {

    const locale = 'pt';

    test('should return true resolution', async () => {
        await expect( format( Date.now(), 'en' ) ).resolves.toBeTruthy();
    });

    test('locale Portuguese-pt - style "round" by default', async () => {

        expect( await format( Date.now(), locale ) ).toEqual( 'justo agora' );
        expect( await format( Date.now() - 1 * 1000, locale, ) ).toEqual( '1 segundo atrás' );
        expect( await format( Date.now() + 1 * 1000, locale ) ).toEqual( 'em 1 segundo' );
        expect( await format( Date.now() - 60 * 1000, locale ) ).toEqual( '1 minuto atrás' );
        expect( await format( Date.now() + 60 * 1000, locale ) ).toEqual( 'em 1 minuto' );
        expect( await format( Date.now() - 60 * 60 * 1000, locale ) ).toEqual( '1 hora atrás' );
        expect( await format( Date.now() + 60 * 60 * 1000, locale ) ).toEqual( 'em 1 hora' );
        expect( await format( Date.now() - 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 dia atrás' );
        expect( await format( Date.now() + 24 * 60 * 60 * 1000, locale ) ).toEqual( 'em 1 dia' );
        expect( await format( Date.now() - 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 semana atrás' );
        expect( await format( Date.now() + 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'em 1 semana' );
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 mês atrás' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'em 1 mês' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'há 1 ano' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'em 1 ano' );

    });

    test('locale Portuguese-pt - style "mini"', async () => {

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
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1mês' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1mês' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1ano' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1ano' );

    });

});