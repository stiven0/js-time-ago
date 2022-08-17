import { minutesEs, minutesEn, minutesPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const minutes = ( minutes: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

       minutes = Math.round( minutes );

       switch ( local ) {
              case 'es': return minutesEs( minutes, isPastOrFuture, style );
              case 'en': return minutesEn( minutes, isPastOrFuture, style );
              case 'pt': return minutesPt( minutes, isPastOrFuture, style );
              default:   return minutesEn( minutes, isPastOrFuture, style );
       }

};
