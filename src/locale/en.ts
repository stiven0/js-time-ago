import { isPastOrFuture } from "../types/is-past-or-future";
import { style } from "../types/style";

export const secondsEn = ( second: number, isPastOrFuture: isPastOrFuture, style: style ): string => {
    
    if ( +second === 0 ) {
        return style === 'mini' ? '0s' : 'right now';

    }
    else if ( +second === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1s' : '1 second ago' 
        : style === 'mini' ? '1s' : 'in 1 second'

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ second }s` : `${ second } seconds ago` 
        : style === 'mini' ? `${ second }s` : `in ${ second } seconds`

    }

};

export const minutesEn = ( minute: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( minute === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1m' : '1 minute ago' 
        : style === 'mini' ? '1m' : 'in 1 minute';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ minute }m` : `${ minute } minutes ago` 
        : style === 'mini' ? `${ minute }m` : `in ${ minute } minutes`;

    }
    
};

export const hoursEn = ( hour: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( hour === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1h' : '1 hour ago' 
        : style === 'mini' ? '1h' : 'in 1 hour';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ hour }h` : `${ hour } hours ago` 
        : style === 'mini' ? `${ hour }h` : `in ${ hour } hours`;

    }
    
};

export const daysEn = ( day: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( day === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1d' : '1 day ago' 
        : style === 'mini' ? '1d' : 'in 1 day';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ day }d` : `${ day } days ago` 
        : style === 'mini' ? `${ day }d` : `in ${ day } days`;

    }
    
};

export const weeksEn = ( week: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( week === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1week' : '1 week ago' 
        : style === 'mini' ? '1week' : 'in 1 week';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ week }weeks` : `${ week } weeks ago` 
        : style === 'mini' ? `${ week }weeks` : `in ${ week } weeks`;
    }
    
};

export const monthsEn = ( month: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( month === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1month' : '1 month ago' 
        : style === 'mini' ? '1month' : 'in 1 month';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ month }months` : `${ month } months ago` 
        : style === 'mini' ? `${ month }months` : `in ${ month } months`;
    }
    
};

export const yearsEn = ( year: number, isPastOrFuture: isPastOrFuture, style: style ): string => {

    if ( year === 1 ) {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? '1year' : '1 year ago' 
        : style === 'mini' ? '1year' : 'in 1 year';

    } else {
        return isPastOrFuture === 'past' 
        ? style === 'mini' ? `${ year }years` : `${ year } years ago` 
        : style === 'mini' ? `${ year }years` : `in ${ year } years`;
    }

};