import { yearsEs, yearsEn } from '../locale/index';
import { locale } from '../types/locale';

export const years = ( year: number, local: locale ): string => {

    const yearsSplit = String( year ).split('.');

    if ( +yearsSplit[0] === 0 || +yearsSplit[0] === 1) {
                return ( local === 'es' )
                ? yearsEs( 1 )
                : yearsEn( 1 )
    } else {
        return ( local === 'es' )
        ? yearsEs( +yearsSplit[0] )
        : yearsEn( +yearsSplit[0] )
    }

};