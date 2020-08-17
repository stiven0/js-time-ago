import { hoursEs, hoursEn } from '../locale/index';
import { locale } from '../types/locale';

export const hours = ( hours: number, local: locale ): string => {

   const hourSplit = String( hours ).split('.');

   if ( +hourSplit[0] === 1 ) {
        return ( local === 'es' )
        ? hoursEs( 1 )
        : hoursEn( 1 )
   } else {
        return ( local === 'es' )
        ? hoursEs( +hourSplit[0] )
        : hoursEn( +hourSplit[0] )
   }

};
