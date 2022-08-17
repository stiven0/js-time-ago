import { secondsEs, secondsEn, secondsPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const seconds = ( seconds: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

    seconds = Math.round( seconds );
    
    switch ( local ) {
        case 'es': return secondsEs( seconds, isPastOrFuture, style );
        case 'en': return secondsEn( seconds, isPastOrFuture, style );
        case 'pt': return secondsPt( seconds, isPastOrFuture, style );
        default:   return secondsEn( seconds, isPastOrFuture, style );
    }

};
