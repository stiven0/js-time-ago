import { daysEs, daysEn, daysPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const days = ( days: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

    days = Math.round( days );

    switch ( local ) {
        case 'es': return daysEs( days, isPastOrFuture, style );
        case 'en': return daysEn( days, isPastOrFuture, style );
        case 'pt': return daysPt( days, isPastOrFuture, style );
        default:   return daysEn( days, isPastOrFuture, style );
    }

};