import { secondsEs, secondsEn } from '../locale/index';
import { locale } from '../types/locale';

export const seconds = ( seconds: number, local: locale ): string => {

    const secondsSplit = String( seconds ).split('.');

    if ( +secondsSplit[0] === 0 ) {
                return ( local === 'es' )
                ? secondsEs( 0 )
                : secondsEn( 0 )

    }
    else if ( +secondsSplit[0] === 1 ) {
                return ( local === 'es' )
                ? secondsEs( 1 )
                : secondsEn( 1 )

    } else {
        return ( local === 'es' )
        ? secondsEs( +secondsSplit[0] )
        : secondsEn( +secondsSplit[0] )
    }

};
