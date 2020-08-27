

export const secondsEs = ( second: number ): string => {
    
    if ( +second === 0 ) {
        return 'Justo ahora';

    }
    else if ( +second === 1 ) {
        return 'Hace 1 segundo';

    } else {
        return `Hace ${ second } segundos`;

    }

};

export const minutesEs = ( minute: number ): string => {

    if ( minute === 1 ) {
        return 'Hace 1 minuto';

    } else {
        return `Hace ${ minute } minutos`;

    }
    
};

export const hoursEs = ( hour: number ): string => {

    if ( hour === 1 ) {
        return 'Hace 1 hora';

    } else {
        return `Hace ${ hour } horas`;

    }
    
};

export const daysEs = ( day: number ): string => {

    if ( day === 1 ) {
        return 'Hace 1 dia';

    } else {
        return `Hace ${ day } dias`;

    }
    
};

export const weeksEs = ( week: number ): string => {

    if ( week === 1 ) {
        return 'Hace 1 semana';

    } else {
        return `Hace ${ week } semanas`;
    }
    
};

export const monthsEs = ( month: number ): string => {

    if ( month === 1 ) {
        return 'Hace 1 mes';

    } else {
        return `Hace ${ month } meses`;
    }
    
};

export const yearsEs = ( year: number ): string => {

    if ( year === 1 ) {
        return 'Hace 1 año';

    } else {
        return `Hace ${ year } años`;
    }
    
};
