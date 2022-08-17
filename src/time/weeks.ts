import { weeksEs, weeksEn, weeksPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const weeks = ( week: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

    week = Math.round( week );

    switch ( local ) {
        case 'es': return weeksEs( week, isPastOrFuture, style );
        case 'en': return weeksEn( week, isPastOrFuture, style );
        case 'pt': return weeksPt( week, isPastOrFuture, style );
        default:   return weeksEn( week, isPastOrFuture, style );
    }

};