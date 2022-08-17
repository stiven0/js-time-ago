import { seconds, minutes, hours, days, weeks, months, years } from '../time/index';
import { calculateMinutes, calculateSeconds, calculateHours, calculateDays, calculateWeeks, calculateMonths, calculateYears } from '../utils/time-calculations';
import { isPastOrFuture } from '../types/is-past-or-future';
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

export const format = ( time: number | Date, local: locale, style: style = 'round' ): Promise<string> => {

    return new Promise( (resolve, reject) => {

        if ( typeof time === 'string' || typeof time === 'boolean' ) reject('unsupported time');

        const currentDate = Date.now();
        const difference  = currentDate - +time;
        let isPastOrFuture: isPastOrFuture;
        isPastOrFuture = time > currentDate ? 'future' : 'past';

        if ( (isPastOrFuture === 'future' && difference > -60000) || (difference >= 0 && difference < 60000) ) {
            resolve( seconds( calculateSeconds( difference ), local, isPastOrFuture, style ) );

        } else if ( (difference <= -60000 && difference > -3600000) || (difference >= 60000 && difference < 3600000) ) {
            resolve( minutes( calculateMinutes( difference ), local, isPastOrFuture, style ) );

        } else if ( (difference <= -3600000 && difference > -86400000) || ( difference >= 3600000 && difference < 86400000 ) ) {
            resolve( hours( calculateHours( difference ), local, isPastOrFuture, style ) );

        } else if ( (difference <= -86400000 && difference > -604800000) || (difference >= 86400000 && difference < 604800000) ) {
            resolve( days( calculateDays( difference ), local, isPastOrFuture, style ) );

        } else if ( (difference <= -604800000 && difference >= -2419000000) || (difference >= 604800000 && difference <= 2419000000) ) {
            resolve( weeks( calculateWeeks( difference ), local, isPastOrFuture, style ) );

        } else if ( (difference < -2419000000 && difference >= -28910000000) || (difference > 2419000000 && difference <= 28910000000) ) {
            resolve( months( calculateMonths( difference ), local, isPastOrFuture, style ) );

        } else {
            resolve( years( calculateYears( difference ), local, isPastOrFuture, style ) );

        }

    });

};