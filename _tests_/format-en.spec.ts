import { format } from '../src/index';

describe('format english-en', () => {

    const locale = 'en';
    const now = 1713571200000;
    const at = (ms: number) => now + ms;

    test('should return true resolution', async () => {
        await expect( format( now, { locale: 'en', now } ) ).resolves.toBeTruthy();
    });

    test('locale english-en - style "round" by default', async () => {

        expect( await format( at(0), { locale, now } ) ).toEqual( 'right now' );
        expect( await format( at(-1 * 1000), { locale, now } ) ).toEqual( '1 second ago' );
        expect( await format( at(1 * 1000), { locale, now } ) ).toEqual( 'in 1 second' );
        expect( await format( at(-60 * 1000), { locale, now } ) ).toEqual( '1 minute ago' );
        expect( await format( at(60 * 1000), { locale, now } ) ).toEqual( 'in 1 minute' );
        expect( await format( at(-60 * 60 * 1000), { locale, now } ) ).toEqual( '1 hour ago' );
        expect( await format( at(60 * 60 * 1000), { locale, now } ) ).toEqual( 'in 1 hour' );
        expect( await format( at(-24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 day ago' );
        expect( await format( at(24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'in 1 day' );
        expect( await format( at(-7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 week ago' );
        expect( await format( at(7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'in 1 week' );
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 month ago' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'in 1 month' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( '1 year ago' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, now } ) ).toEqual( 'in 1 year' );

    });

    test('locale english-en - style "mini"', async () => {

        expect( await format( at(0), { locale: 'en', style: 'mini', now } ) ).toEqual( '0s' );
        expect( await format( at(-1 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1s' );
        expect( await format( at(1 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1s' );
        expect( await format( at(-60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1m' );
        expect( await format( at(60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1m' );
        expect( await format( at(-60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1h' );
        expect( await format( at(60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1h' );
        expect( await format( at(-24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1d' );
        expect( await format( at(24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1d' );
        expect( await format( at(-7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1week' );
        expect( await format( at(7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1week' );
        expect( await format( at(-1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1month' );
        expect( await format( at(1 * 4 * 7 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1month' );
        expect( await format( at(-365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1year' );
        expect( await format( at(365 * 24 * 60 * 60 * 1000), { locale, style: 'mini', now } ) ).toEqual( '1year' );

    });

    test('should return a rejection containing - unsupported time', async () => {

        const time = '12233444';
        await expect( format( time as any, locale ) ).rejects.toThrow('unsupported time');

    });


});