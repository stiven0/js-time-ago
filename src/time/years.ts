import { yearsEs, yearsEn, yearsPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const years = ( year: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

    year = Math.round( year );

    switch ( local ) {
        case 'es': return yearsEs( year, isPastOrFuture, style );
        case 'en': return yearsEn( year, isPastOrFuture, style );
        case 'pt': return yearsPt( year, isPastOrFuture, style );
        default:   return yearsEn( year, isPastOrFuture, style );
    }

};