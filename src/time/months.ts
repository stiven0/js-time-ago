import { monthsEs, monthsEn, monthsPt } from '../locale/index';
import { locale } from '../types/locale';

export const months = ( month: number, local: locale ): string => {

    const monthsSplit = String( month ).split('.');

    if ( +monthsSplit[0] === 1 ) {

        switch ( local ) {

                case 'es':
                    return monthsEs( 1 );

                case 'en':
                    return monthsEn( 1 );

                case 'pt':
                    return monthsPt( 1 );

                default: return monthsEn( 1 );

        }

    } else {

        switch ( local ) {

                case 'es':
                    return monthsEs( +monthsSplit[0] );

                case 'en':
                    return monthsEn( +monthsSplit[0] );

                case 'pt':
                    return monthsPt( +monthsSplit[0] );

                default: return monthsEn( +monthsSplit[0] );

        }

    }

};