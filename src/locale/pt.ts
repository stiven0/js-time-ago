import { isPastOrFuture } from "../types/is-past-or-future";
import { style } from "../types/style";

export const secondsPt = ( second: number, isPastOrFuture: isPastOrFuture, style: style ): string => {
    
    if ( +second === 0 ) {
        return style === 'mini' ? '0s' : 'justo agora';

    }
    else if ( +second === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1s' : '1 segundo atrás' 
        : style === 'mini' ? '1s' : 'em 1 segundo'

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ second }s` : `${ second } segundos atrás` 
        : style === 'mini' ? `${ second }s` : `em ${ second } segundos`;

    }

};

export const minutesPt = ( minute: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( minute === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1m' : '1 minuto atrás' 
        : style === 'mini' ? '1m' : 'em 1 minuto';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ minute }m` : `${ minute } minutos atrás` 
        : style === 'mini' ? `${ minute }m` : `em ${ minute } minutos`;

    }
    
};

export const hoursPt = ( hour: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( hour === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1h' : '1 hora atrás' 
        : style === 'mini' ? '1h' : 'em 1 hora';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ hour }h` : `${ hour } horas atrás` 
        : style === 'mini' ? `${ hour }h` : `em ${ hour } horas`;

    }
    
};

export const daysPt = ( day: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( day === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1d' : '1 dia atrás' 
        : style === 'mini' ? '1d' : 'em 1 dia';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ day }d` : `${ day } dias atrás` 
        : style === 'mini' ? `${ day }d` : `em ${ day } dias`;

    }
    
};

export const weeksPt = ( week: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( week === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1semana' : '1 semana atrás' 
        : style === 'mini' ? '1semana' : 'em 1 semana';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ week }semanas` : `${ week } semanas atrás` 
        : style === 'mini' ? `${ week }semanas` : `em ${ week } semanas`;
    }
    
};

export const monthsPt = ( month: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( month === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1mês' : '1 mês atrás' 
        : style === 'mini' ? '1mês' : 'em 1 mês';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ month }meses` : `${ month } meses atrás` 
        : style === 'mini' ? `${ month }meses` : `em ${ month } meses`;
    }
    
};

export const yearsPt = ( year: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( year === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1ano' : 'há 1 ano' 
        : style === 'mini' ? '1ano' : 'em 1 ano';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ year }anos` : `${ year } anos atrás` 
        : style === 'mini' ? `${ year }anos` : `em ${ year } anos`;  
    }
    
};
