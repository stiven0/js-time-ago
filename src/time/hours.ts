import { hoursEs, hoursEn, hoursPt } from '../locale/index';
import { locale } from '../types/locale';

export const hours = ( hours: number, local: locale ): string => {

   const hourSplit = String( hours ).split('.');

   if ( +hourSplit[0] === 1 ) {
          
          switch ( local ) {

               case 'es':
                    return hoursEs( 1 );

               case 'en':
                    return hoursEn( 1 );

               case 'pt':
                    return hoursPt( 1 );

               default: return hoursEn( 1 );

          }


   } else {

          switch ( local ) {

               case 'es':
                    return hoursEs( +hourSplit[0] );

               case 'en':
                    return hoursEn( +hourSplit[0] );

               case 'pt':
                    return hoursPt( +hourSplit[0] );

               default: return hoursEn( +hourSplit[0] );

          }

   }

};
