import { minutesEs, minutesEn, minutesPt } from '../locale/index';
import { locale } from '../types/locale';

export const minutes = ( minutes: number, local: locale ): string => {

    const minutesSplit = String( minutes ).split('.');

   if ( +minutesSplit[0] === 1 ) {

              switch ( local ) {

                     case 'es':
                            return minutesEs( 1 );

                     case 'en':
                            return minutesEn( 1 );

                     case 'pt':
                            return minutesPt( 1 );

                     default: return minutesEn( 1 );

              }   

   } else {
         
              switch ( local ) {

                     case 'es':
                            return minutesEs( +minutesSplit[0] );

                     case 'en':
                            return minutesEn( +minutesSplit[0] );

                     case 'pt':
                            return minutesPt( +minutesSplit[0] );
                     
                     default: return minutesEn(+ minutesSplit[0] );

              } 

   }    

};
