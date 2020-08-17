import { seconds, minutes, hours, days, weeks, months, years } from '../time/index';
import { locale } from '../types/locale';

/**
 * This function allows to calculate the time since an event occurred
 * 
 * @param {number|Date} time - Refers to the time we want to calculate
 * @param {locale} local - It refers to a specific type of language, example spanish-es, english-en
 * @returns {Promise} returns a promise with the elapsed time from the event date (time) to the current moment
 */

export const format = ( time: number | Date, local: locale ): Promise<string> => {

    if ( typeof time === 'string' ) {
            return Promise.reject('unsupported time');
    }

    const currentDate: number = Date.now();
    const difference: number = currentDate - +time; 
    

    if ( time > currentDate ) {
            return Promise.reject('Error, date received incorrect');

    } else {
        
        if ( difference >= 0 && difference < 60000 ) {
            // soconds                     
            return Promise.resolve( seconds( difference / 1000, local ) );

        }
        else if ( difference >= 60000 && difference < 3600000 ) {
            // minutes
            return Promise.resolve( minutes( difference / ( 1000 * 60 ), local ) );

        }
        else if ( difference >= 3600000 && difference < 86400000 ) {
            // hours
            return Promise.resolve( hours( difference / ( 1000 * 60 * 60 ), local ) );
            
        }
        else if ( difference >= 86400000 && difference < 604800000 ) {
            // days
            return Promise.resolve( days( difference / ( 1000 * 60 * 60 * 24 ), local ) )

        }
        else if ( difference >= 604800000 && difference <= 2419000000 ) {
            // weeks
            return Promise.resolve( weeks( difference / ( 1000 * 60 * 60 * 24 * 7 ), local ) );

        }
        else if ( difference > 2419000000 && difference <= 28910000000 ) {
            // months            
            return Promise.resolve( months( difference / ( 1000 * 60 * 60 * 24 * 7 * 4 ), local ) )

        } else {
            // years
            return Promise.resolve( years( (difference / ( 1000 * 60 * 60 * 24 )) / 365, local ) )
        }
        
    }


};


