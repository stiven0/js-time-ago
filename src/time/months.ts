import { monthsEs, monthsEn } from '../locale/index';
import { locale } from '../types/locale';

export const months = ( month: number, local: locale ): string => {

    const monthsSplit = String( month ).split('.');

    if ( +monthsSplit[0] === 1 ) {
                return ( local === 'es' )
                ? monthsEs( 1 )
                : monthsEn( 1 )
    } else {
        return ( local === 'es' )
        ? monthsEs( +monthsSplit[0] )
        : monthsEn( +monthsSplit[0] )
    }

};