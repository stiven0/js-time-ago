import { monthsEs, monthsEn, monthsPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const months = ( month: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

    month = Math.round( month );
    
    switch ( local ) {
        case 'es': return monthsEs( month, isPastOrFuture, style );
        case 'en': return monthsEn( month, isPastOrFuture, style );
        case 'pt': return monthsPt( month, isPastOrFuture, style );
        default:   return monthsEn( month, isPastOrFuture, style );
    }

};