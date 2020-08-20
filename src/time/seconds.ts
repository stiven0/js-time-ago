import { secondsEs, secondsEn, secondsPt } from '../locale/index';
import { locale } from '../types/locale';

export const seconds = ( seconds: number, local: locale ): string => {

    const secondsSplit = String( seconds ).split('.');

    if ( +secondsSplit[0] === 0 ) {

                switch ( local ) {

                    case 'es':
                        return secondsEs( 0 );

                    case 'en':
                        return secondsEn( 0 );

                    case 'pt':
                        return secondsPt( 0 );

                    default: return secondsEn( 0 );

                }
    }
    else if ( +secondsSplit[0] === 1 ) {

                switch ( local ) {

                    case 'es':
                        return secondsEs( 1 );

                    case 'en':
                        return secondsEn( 1 );

                    case 'pt':
                        return secondsPt( 1 );

                    default: return secondsEn( 1 );

                }

    } else {

                switch ( local ) {

                    case 'es':
                        return secondsEs( +secondsSplit[0] );

                    case 'en':
                        return secondsEn( +secondsSplit[0] );

                    case 'pt':
                        return secondsPt( +secondsSplit[0] );

                    default: return secondsEn( +secondsSplit[0] );

                }
    }

};
