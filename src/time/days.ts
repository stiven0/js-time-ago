import { daysEs, daysEn, daysPt } from '../locale/index';
import { locale } from '../types/locale';

export const days = ( days: number, local: locale ): string => {

    const daysSplit = String( days ).split('.');

    if ( +daysSplit[0] === 1 ) {

            switch ( local ) {

                    case 'es':
                        return daysEs( 1 );

                    case 'en':
                        return daysEn( 1 );

                    case 'pt':
                        return daysPt( 1 );

                    default: return daysEn( 1 );

            }

    } else {

            switch ( local ) {

                case 'es':
                    return daysEs( +daysSplit[0] );

                case 'en':
                    return daysEn( +daysSplit[0] );

                case 'pt':
                    return daysPt( +daysSplit[0] );

                default: return daysEn( +daysSplit[0] );

        }

    }

};