import { localeDict } from '../types/locale-dict';

export const es: localeDict = {
    now: 'justo ahora',
    nowMini: '0s',
    second: {
        past:   (n) => n === 1 ? 'hace 1 segundo'      : `hace ${n} segundos`,
        future: (n) => n === 1 ? 'dentro de 1 segundo' : `dentro de ${n} segundos`,
        mini:   (n) => `${n}s`
    },
    minute: {
        past:   (n) => n === 1 ? 'hace 1 minuto'       : `hace ${n} minutos`,
        future: (n) => n === 1 ? 'dentro de 1 minuto'  : `dentro de ${n} minutos`,
        mini:   (n) => `${n}m`
    },
    hour: {
        past:   (n) => n === 1 ? 'hace 1 hora'         : `hace ${n} horas`,
        future: (n) => n === 1 ? 'dentro de 1 hora'    : `dentro de ${n} horas`,
        mini:   (n) => `${n}h`
    },
    day: {
        past:   (n) => n === 1 ? 'hace 1 día'          : `hace ${n} días`,
        future: (n) => n === 1 ? 'dentro de 1 día'     : `dentro de ${n} días`,
        mini:   (n) => `${n}d`
    },
    week: {
        past:   (n) => n === 1 ? 'hace 1 semana'       : `hace ${n} semanas`,
        future: (n) => n === 1 ? 'dentro de 1 semana'  : `dentro de ${n} semanas`,
        mini:   (n) => n === 1 ? '1semana' : `${n}semanas`
    },
    month: {
        past:   (n) => n === 1 ? 'hace 1 mes'          : `hace ${n} meses`,
        future: (n) => n === 1 ? 'dentro de 1 mes'     : `dentro de ${n} meses`,
        mini:   (n) => n === 1 ? '1mes' : `${n}meses`
    },
    year: {
        past:   (n) => n === 1 ? 'hace 1 año'          : `hace ${n} años`,
        future: (n) => n === 1 ? 'dentro de 1 año'     : `dentro de ${n} años`,
        mini:   (n) => n === 1 ? '1año' : `${n}años`
    }
};

// --- Legacy exports (kept for backward compatibility) ---
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
