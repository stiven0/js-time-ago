import { weeksEs, weeksEn } from '../locale/index';
import { locale } from '../types/locale';

export const weeks = ( week: number, local: locale ): string => {

    const weeksSplit = String( week ).split('.');

    if ( +weeksSplit[0] === 1 ) {
                return ( local === 'es' )
                ? weeksEs( 1 )
                : weeksEn( 1 )
    } else {
        return ( local === 'es' )
        ? weeksEs( +weeksSplit[0] )
        : weeksEn( +weeksSplit[0] )
    }

};