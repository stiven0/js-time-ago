

export const secondsPt = ( second: number ): string => {
    
    if ( +second === 0 ) {
        return 'justo agora';

    }
    else if ( +second === 1 ) {
        return '1 segundo atrás';

    } else {
        return `${ second } segundos atrás`;

    }

};

export const minutesPt = ( minute: number ): string => {

    if ( minute === 1 ) {
        return '1 minuto atrás';

    } else {
        return `${ minute } minutos atrás`;

    }
    
};

export const hoursPt = ( hour: number ): string => {

    if ( hour === 1 ) {
        return '1 hora atrás';

    } else {
        return `${ hour } horas atrás`;

    }
    
};

export const daysPt = ( day: number ): string => {

    if ( day === 1 ) {
        return '1 dia atrás';

    } else {
        return `${ day } dias atrás`;

    }
    
};

export const weeksPt = ( week: number ): string => {

    if ( week === 1 ) {
        return '1 semana atrás';

    } else {
        return `${ week } semanas atrás`;
    }
    
};

export const monthsPt = ( month: number ): string => {

    if ( month === 1 ) {
        return '1 mês atrás';

    } else {
        return `${ month } meses atrás`;
    }
    
};

export const yearsPt = ( year: number ): string => {

    if ( year === 1 ) {
        return 'Há 1 ano';

    } else {
        return `${ year } anos atrás`;
    }
    
};
