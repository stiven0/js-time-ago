import { format } from '../src/index';

describe('format Portuguese-pt', () => {

    const locale = 'pt';
    const now = 1713571200000;
    const at = (ms: number) => now + ms;

    test('should return true resolution', async () => {
        await expect( format( now, { locale: 'en', now } ) ).resolves.toBeTruthy();
    });

    test('locale Portuguese-pt - style "round" by default', async () => {

        expect( await format( at(0), { locale, now } ) ).toEqual( 'justo agora' );
        expect( await format( at(-1 * 1000), { locale, now } ) ).toEqual( '1 segundo atrás' );
        expect( await format( at(1 * 1000), { locale, now } ) ).toEqual( 'em 1 segundo' );
        expect( await format( at(-60 * 1000), { locale, now } ) ).toEqual( '1 minuto atrás' );
        expect( await format( at(60 * 1000), { locale, now } ) ).toEqual( 'em 1 minuto' );
        expect( await format( at(-60 * 60 * 1000), { locale, now } ) ).toEqual( '1 hora atrás' );
        expect( await format( at(60 * 60 * 1000), { locale, now } ) ).toEqual( 'em 1 hora' );
        expect( await format( at(-24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 dia atrás' );
        expect( await format( at(24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'em 1 dia' );
        expect( await format( at(-7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 semana atrás' );
        expect( await format( at(7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'em 1 semana' );
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 mês atrás' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'em 1 mês' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'há 1 ano' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'em 1 ano' );

    });

    test('locale Portuguese-pt - style "mini"', async () => {

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
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1mês' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1mês' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1ano' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1ano' );

    });

});