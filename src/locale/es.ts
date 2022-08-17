import { isPastOrFuture } from "../types/is-past-or-future";
import { style } from "../types/style";

export const secondsEs = ( second: number, isPastOrFuture: isPastOrFuture, style: style ): string => {
    
    if ( +second === 0 ) {
        return style === 'mini' ? '0s' : 'justo ahora';

    }
    else if ( +second === 1 ) {
        return isPastOrFuture === 'past'  
        ? style === 'mini' ? '1s' : 'hace 1 segundo'  
        : style === 'mini' ? '1s' : 'dentro de 1 segundo'

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ second }s` : `hace ${ second } segundos` 
        : style === 'mini' ? `${ second }s` : `dentro de ${ second } segundos`;

    }

};

export const minutesEs = ( minute: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( minute === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1m' : 'hace 1 minuto'
        : style === 'mini' ? '1m' : 'dentro de 1 minuto' 

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ minute }m` : `hace ${ minute } minutos` 
        : style === 'mini' ? `${ minute }m` : `dentro de ${ minute } minutos`

    }
    
};

export const hoursEs = ( hour: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( hour === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1h' : 'hace 1 hora' 
        : style === 'mini' ? '1h' : 'dentro de 1 hora';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ hour }h` : `hace ${ hour } horas` 
        : style === 'mini' ? `${ hour }h` : `dentro de ${ hour } horas`

    }
    
};

export const daysEs = ( day: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( day === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1d' : 'hace 1 día' 
        : style === 'mini' ? '1d' : 'dentro de 1 día';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ day }d` : `hace ${ day } días` 
        : style === 'mini' ? `${ day }d` : `dentro de ${ day } días`;

    }
    
};

export const weeksEs = ( week: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( week === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1semana' : 'hace 1 semana' 
        : style === 'mini' ? '1semana' : 'dentro de 1 semana';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ week }semanas` : `hace ${ week } semanas` 
        : style === 'mini' ? `${ week }semanas` : `dentro de ${ week } semanas`;
    }
    
};

export const monthsEs = ( month: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( month === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1mes' : 'hace 1 mes' 
        : style === 'mini' ? '1mes' : 'dentro de 1 mes';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ month }meses` : `hace ${ month } meses` 
        : style === 'mini' ? `${ month }meses` : `dentro de ${ month } meses`;
    }
    
};

export const yearsEs = ( year: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( year === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1año' : 'hace 1 año' 
        : style === 'mini' ? '1año' : 'dentro de 1 año';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ year }años` : `hace ${ year } años` 
        : style === 'mini' ? `${ year }años` : `dentro de ${ year } años`;
    }
    
};
