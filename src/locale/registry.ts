import { localeDict } from '../types/locale-dict';

const registry = new Map<string, localeDict>();

export const registerLocale = (key: string, dict: localeDict): void => {
    registry.set(key, dict);
};

export const getLocaleDict = (key: string): localeDict | undefined => {
    return registry.get(key) ?? registry.get('en');
};
