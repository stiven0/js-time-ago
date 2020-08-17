import { minutesEs, minutesEn } from '../locale/index';
import { locale } from '../types/locale';

export const minutes = ( minutes: number, local: locale ): string => {

    const minutesSplit = String( minutes ).split('.');

   if ( +minutesSplit[0] === 1 ) {
          return ( local === 'es' )
          ? minutesEs( 1 )
          : minutesEn( 1 )
   } else {
          return ( local === 'es' )
          ? minutesEs( +minutesSplit[0] )
          : minutesEn( +minutesSplit[0] )
   }    

};