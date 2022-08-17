import { format } from '../src/methods/index';

describe('format english-en', () => {

    const locale = 'en';

    test('should return true resolution', async () => {
        await expect( format( Date.now(), 'en' ) ).resolves.toBeTruthy();
    });

    test('locale english-en - style "round" by default', async () => {

        expect( await format( Date.now(), locale ) ).toEqual( 'right now' );
        expect( await format( Date.now() - 1 * 1000, locale, ) ).toEqual( '1 second ago' );
        expect( await format( Date.now() + 1 * 1000, locale ) ).toEqual( 'in 1 second' );
        expect( await format( Date.now() - 60 * 1000, locale ) ).toEqual( '1 minute ago' );
        expect( await format( Date.now() + 60 * 1000, locale ) ).toEqual( 'in 1 minute' );
        expect( await format( Date.now() - 60 * 60 * 1000, locale ) ).toEqual( '1 hour ago' );
        expect( await format( Date.now() + 60 * 60 * 1000, locale ) ).toEqual( 'in 1 hour' );
        expect( await format( Date.now() - 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 day ago' );
        expect( await format( Date.now() + 24 * 60 * 60 * 1000, locale ) ).toEqual( 'in 1 day' );
        expect( await format( Date.now() - 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 week ago' );
        expect( await format( Date.now() + 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'in 1 week' );
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 month ago' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'in 1 month' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( '1 year ago' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale ) ).toEqual( 'in 1 year' );

    });

    test('locale english-en - style "mini"', async () => {

        expect( await format( Date.now(), 'en', 'mini' ) ).toEqual( '0s' );
        expect( await format( Date.now() - 1 * 1000, locale, 'mini' ) ).toEqual( '1s' );
        expect( await format( Date.now() + 1 * 1000, locale, 'mini' ) ).toEqual( '1s' );
        expect( await format( Date.now() - 60 * 1000, locale, 'mini' ) ).toEqual( '1m' );
        expect( await format( Date.now() + 60 * 1000, locale, 'mini' ) ).toEqual( '1m' );
        expect( await format( Date.now() - 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1h' );
        expect( await format( Date.now() + 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1h' );
        expect( await format( Date.now() - 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1d' );
        expect( await format( Date.now() + 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1d' );
        expect( await format( Date.now() - 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1week' );
        expect( await format( Date.now() + 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1week' );
        expect( await format( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1month' );
        expect( await format( Date.now() + 1 * 4 * 7 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1month' );
        expect( await format( Date.now() - 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1year' );
        expect( await format( Date.now() + 365 * 24 * 60 * 60 * 1000, locale, 'mini' ) ).toEqual( '1year' );

    });

    test('should return a rejection containing - unsupported time', async () => {

        const time = '12233444';
        await expect( format( time as any, locale ) ).rejects.toEqual('unsupported time');

    });


});