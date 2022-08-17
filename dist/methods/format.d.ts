import { locale } from '../types/locale';
import { style } from '../types/style';
/**
 * This function allows you to calculate the time since an event occurred or will occur (valid for past and future dates)
 *
 * @param {number|Date} time - Refers to the time we want to calculate in milliseconds
 * @param {locale} local - It refers to a specific type of language, example spanish-es, english-en, portuguese-pt
 * @param {style} [style] - (Optional) Refers to the output format of text can be 'round' or 'mini', by default it is 'round'
 * @returns {Promise} returns a promise with the elapsed time or that will elapse from the event date (time) to the current moment
 */
export declare const format: (time: number | Date, local: locale, style?: style) => Promise<string>;
//# sourceMappingURL=format.d.ts.map