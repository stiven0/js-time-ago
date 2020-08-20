
import { format } from '../src/methods/index';

describe('format - english', () => {

    test('should return a resolve', async () => {

        await expect( format( Date.now(), 'en' ) ).resolves.toBeTruthy();

    });

    test('should return a resolve that contains - right now', async () => {

        const response = await format( Date.now(), 'en' );
        expect( response ).toContain( 'right now' );

    });

    test('should return a resolve theat contains - 1 seconds ago', async () => {

        const response = await format( Date.now() - 1 * 1000, 'en' );
        expect( response ).toContain('1 second ago');

    });

    test('should return a resolve theat contains - 1 minute ago', async () => {

        const response = await format( Date.now() - 60 * 1000, 'en' );
        expect( response ).toContain('1 minute ago');

    });

    test('should return a resolve theat contains - 1 hour ago', async () => {

        const response = await format( Date.now() - 60 * 60 * 1000, 'en' );
        expect( response ).toContain('1 hour ago');

    });

    test('should return a resolve theat contains - 1 day ago', async () => {

        const response = await format( Date.now() - 24 * 60 * 60 * 1000, 'en' );
        expect( response ).toContain('1 day ago');

    });

    test('should return a resolve theat contains - 1 week ago', async () => {

        const response = await format( Date.now() - 7 * 24 * 60 * 60 * 1000, 'en' );
        expect( response ).toContain('1 week ago');

    });

    test('should return a resolve theat contains - 1 month ago', async () => {

        const response = await format( Date.now() - 30.44 * 24 * 60 * 60 * 1000, 'en' );
        expect( response ).toContain('1 month ago');

    });

    test('should return a resolve theat contains - 1 year ago', async () => {

        const response = await format( Date.now() - 365 * 24 * 60 * 60 * 1000, 'en' );
        expect( response ).toContain('1 year ago');

    });   

    test('should return a resolve of type string', async () => {

        const response = await format(Date.now() - 60 * 1000, 'en');
        expect(typeof response).toBe('string');

    });

    test('should return a rejection containing - Error, date received incorrect', async () => {

        await expect( format( Date.now() + 60 * 1000, 'en' )  ).rejects.toEqual('Error, date received incorrect');

    });

    test('should return a reject', async () => {

        await expect( format( Date.now() + 60 * 1000, 'en' )  ).rejects.toBeTruthy();

    });

    test('should return a rejection containing - unsupported time', async () => {

        const time = '12233444';
        await expect( format( time as any, 'en' ) ).rejects.toEqual('unsupported time');

    });

});

describe('format - spanish', () => {

    test('should return a resolve', async () => {

        await expect( format( Date.now(), 'es' ) ).resolves.toBeTruthy();

    });

    test('should return a resolve that contains - justo ahora', async () => {

        const response = await format( Date.now(), 'es' );
        expect( response ).toContain( 'justo ahora' );

    });

    test('should return a resolve theat contains - Hace 1 segundo', async () => {

        const response = await format( Date.now() - 1 * 1000, 'es' );
        expect( response ).toContain('Hace 1 segundo');

    });

    test('should return a resolve theat contains - Hace 1 minuto', async () => {

        const response = await format( Date.now() - 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 minuto');

    });

    test('should return a resolve theat contains - Hace 1 hora', async () => {

        const response = await format( Date.now() - 60 * 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 hora');

    });

    test('should return a resolve theat contains - Hace 1 dia', async () => {

        const response = await format( Date.now() - 24 * 60 * 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 dia');

    });

    test('should return a resolve theat contains - Hace 1 semana', async () => {

        const response = await format( Date.now() - 7 * 24 * 60 * 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 semana');

    });

    test('should return a resolve theat contains - Hace 1 mes', async () => {

        const response = await format( Date.now() - 30.44 * 24 * 60 * 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 mes');

    });

    test('should return a resolve theat contains - Hace 1 año', async () => {

        const response = await format( Date.now() - 365 * 24 * 60 * 60 * 1000, 'es' );
        expect( response ).toContain('Hace 1 año');

    });   

    test('should return a resolve of type string', async () => {

        const response = await format(Date.now() - 60 * 1000, 'es');
        expect(typeof response).toBe('string');

    });

    test('should return a rejection containing - Error, date received incorrect', async () => {

        await expect( format( Date.now() + 60 * 1000, 'es' )  ).rejects.toContain('Error, date received incorrect');

    });

    test('should return a reject', async () => {

        await expect( format( Date.now() + 60 * 1000, 'es' )  ).rejects.toBeTruthy();

    });

    test('should return a rejection containing - unsupported time', async () => {

        const time = '12233444';
        await expect( format( time as any, 'es' ) ).rejects.toEqual('unsupported time');

    });

});

describe('format - portuguese', () => {

    test('should return a resolve', async () => {

        await expect( format( Date.now(), 'pt' ) ).resolves.toBeTruthy();

    });

    test('should return a resolve that contains - justo agora', async () => {

        const response = await format( Date.now(), 'pt' );
        expect( response ).toContain( 'justo agora' );

    });

    test('should return a resolve theat contains - 1 segundo atrás', async () => {

        const response = await format( Date.now() - 1 * 1000, 'pt' );
        expect( response ).toContain('1 segundo atrás');

    });

    test('should return a resolve theat contains - 1 minuto atrás', async () => {

        const response = await format( Date.now() - 60 * 1000, 'pt' );
        expect( response ).toContain('1 minuto atrás');

    });

    test('should return a resolve theat contains - 1 hora atrás', async () => {

        const response = await format( Date.now() - 60 * 60 * 1000, 'pt' );
        expect( response ).toContain('1 hora atrás');

    });

    test('should return a resolve theat contains - 1 dia atrás', async () => {

        const response = await format( Date.now() - 24 * 60 * 60 * 1000, 'pt' );
        expect( response ).toContain('1 dia atrás');

    });

    test('should return a resolve theat contains - 1 semana atrás', async () => {

        const response = await format( Date.now() - 7 * 24 * 60 * 60 * 1000, 'pt' );
        expect( response ).toContain('1 semana atrás');

    });

    test('should return a resolve theat contains - 1 mês atrás', async () => {

        const response = await format( Date.now() - 30.44 * 24 * 60 * 60 * 1000, 'pt' );
        expect( response ).toContain('1 mês atrás');

    });

    test('should return a resolve theat contains - Há 1 ano', async () => {

        const response = await format( Date.now() - 365 * 24 * 60 * 60 * 1000, 'pt' );
        expect( response ).toContain('Há 1 ano');

    });   

    test('should return a resolve of type string', async () => {

        const response = await format(Date.now() - 60 * 1000, 'pt');
        expect(typeof response).toBe('string');

    });

    test('should return a rejection containing - Error, date received incorrect', async () => {

        await expect( format( Date.now() + 60 * 1000, 'pt' )  ).rejects.toContain('Error, date received incorrect');

    });

    test('should return a reject', async () => {

        await expect( format( Date.now() + 60 * 1000, 'pt' )  ).rejects.toBeTruthy();

    });

    test('should return a rejection containing - unsupported time', async () => {

        const time = '12233444';
        await expect( format( time as any, 'pt' ) ).rejects.toEqual('unsupported time');

    });

});

