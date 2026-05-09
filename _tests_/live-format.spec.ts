import { createLiveFormat } from '../src/index';
import * as formatModule from '../src/methods/format';

describe('createLiveFormat', () => {
    let now = 1713571200000;

    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(Date, 'now').mockImplementation(() => now);
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    test('subscribes with immediate snapshot by default', () => {
        const controller = createLiveFormat(now - 45 * 1000, { locale: 'en' });
        const listener = jest.fn();

        controller.subscribe(listener);

        expect(listener).toHaveBeenCalledTimes(1);
        const first = listener.mock.calls[0][0];
        expect(first.formatted).toEqual('45 seconds ago');
        expect(first.intervalMs).toEqual(1000);
    });

    test('uses fixed interval when intervalMs is provided', () => {
        const controller = createLiveFormat(now - 45 * 1000, { locale: 'en', intervalMs: 5000 });
        const snapshot = controller.get();

        expect(snapshot.intervalMs).toEqual(5000);
    });

    test('updates over time with adaptive interval', () => {
        const controller = createLiveFormat(now - 45 * 1000, { locale: 'en' });
        const listener = jest.fn();

        controller.subscribe(listener);
        controller.start();

        now += 1000;
        jest.advanceTimersByTime(1000);

        expect(listener).toHaveBeenCalledTimes(2);
        expect(listener.mock.calls[1][0].formatted).toEqual('46 seconds ago');

        controller.stop();
        expect(controller.isRunning()).toEqual(false);
    });

    test('updateTime emits new snapshot immediately', () => {
        const controller = createLiveFormat(now - 2 * 60 * 60 * 1000, { locale: 'es' });
        const listener = jest.fn();

        controller.subscribe(listener);
        controller.updateTime(now + 60 * 1000);

        expect(listener).toHaveBeenCalledTimes(2);
        expect(listener.mock.calls[1][0].formatted).toEqual('dentro de 1 minuto');
    });

    test('immediate false skips first emission', () => {
        const listener = jest.fn();
        const controller = createLiveFormat(now - 60 * 1000, {
            locale: 'en',
            immediate: false,
            onUpdate: listener
        });

        expect(listener).toHaveBeenCalledTimes(0);

        controller.start();
        now += 30000;
        jest.advanceTimersByTime(30000);

        expect(listener).toHaveBeenCalledTimes(1);
    });

    test('onError is called when buildSnapshot throws, timer keeps running', () => {
        const errorHandler = jest.fn();
        const controller = createLiveFormat(now - 45 * 1000, {
            locale: 'en',
            onError: errorHandler
        });

        // simula que el siguiente tick falla (ej. locale desregistrado en runtime)
        jest.spyOn(formatModule, 'formatToPartsSync').mockImplementationOnce(() => {
            throw new Error('locale not found');
        });

        controller.start();
        jest.advanceTimersByTime(1000);

        expect(errorHandler).toHaveBeenCalledTimes(1);
        expect(errorHandler.mock.calls[0][0]).toBeInstanceOf(Error);
        expect(controller.isRunning()).toEqual(true);

        controller.stop();
    });

    test('destroy stops timer and clears all listeners', () => {
        const controller = createLiveFormat(now - 45 * 1000, { locale: 'en' });
        const listenerA = jest.fn();
        const listenerB = jest.fn();

        controller.subscribe(listenerA);
        controller.subscribe(listenerB);
        controller.start();

        expect(controller.isRunning()).toEqual(true);

        controller.destroy();

        expect(controller.isRunning()).toEqual(false);

        now += 1000;
        jest.advanceTimersByTime(1000);

        // solo el snapshot inmediato de subscribe, nada después de destroy
        expect(listenerA).toHaveBeenCalledTimes(1);
        expect(listenerB).toHaveBeenCalledTimes(1);
    });
});
