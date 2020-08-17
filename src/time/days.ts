import { daysEs, daysEn } from '../locale/index';
import { locale } from '../types/locale';

export const days = ( days: number, local: locale ): string => {

    const daysSplit = String( days ).split('.');

    if ( +daysSplit[0] === 1 ) {
                return ( local === 'es' )
                ? daysEs( 1 )
                : daysEn( 1 )
    } else {
        return ( local === 'es' )
        ? daysEs( +daysSplit[0] )
        : daysEn( +daysSplit[0] )
    }

};