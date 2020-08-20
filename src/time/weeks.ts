import { weeksEs, weeksEn, weeksPt } from '../locale/index';
import { locale } from '../types/locale';

export const weeks = ( week: number, local: locale ): string => {

    const weeksSplit = String( week ).split('.');

    if ( +weeksSplit[0] === 1 ) {

            switch ( local ) {

                    case 'es':
                        return weeksEs( 1 );

                    case 'en':
                        return weeksEn( 1 );

                    case 'pt':
                        return weeksPt( 1 );

                    default: return weeksEn( 1 );

            }

    } else {

         switch ( local ) {

                case 'es':
                    return weeksEs( +weeksSplit[0] );

                case 'en':
                    return weeksEn( +weeksSplit[0] );

                case 'pt':
                    return weeksPt( +weeksSplit[0] );

                default: return weeksEn( +weeksSplit[0] );

        }

    }

};