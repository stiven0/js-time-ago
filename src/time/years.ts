import { yearsEs, yearsEn, yearsPt } from '../locale/index';
import { locale } from '../types/locale';

export const years = ( year: number, local: locale ): string => {

    const yearsSplit = String( year ).split('.');

    if ( +yearsSplit[0] === 0 || +yearsSplit[0] === 1) {
        
            switch ( local ) {

                    case 'es':
                        return yearsEs( 1 );

                    case 'en':
                        return yearsEn( 1 );

                    case 'pt':
                        return yearsPt( 1 );

                    default: return yearsEn( 1 );

            }

    } else {
        
        switch ( local ) {

                case 'es':
                    return yearsEs( +yearsSplit[0] );

                case 'en':
                    return yearsEn( +yearsSplit[0] );

                case 'pt':
                    return yearsPt( +yearsSplit[0] );

                default: return yearsEn( +yearsSplit[0] );

        }

    }

};