import { hoursEs, hoursEn, hoursPt } from '../locale/index';
import { isPastOrFuture } from '../types/is-past-or-future';
import { locale } from '../types/locale';
import { style } from '../types/style';

export const hours = ( hours: number, local: locale, isPastOrFuture: isPastOrFuture, style: style ): string => {

     hours = Math.round( hours );

     switch ( local ) {
          case 'es': return hoursEs( hours, isPastOrFuture, style );
          case 'en': return hoursEn( hours, isPastOrFuture, style );
          case 'pt': return hoursPt( hours, isPastOrFuture, style );
          default:   return hoursEn( hours, isPastOrFuture, style );
     }

};
