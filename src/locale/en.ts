import { localeDict } from '../types/locale-dict';

export const en: localeDict = {
    now: 'right now',
    nowMini: '0s',
    calendar: {
        yesterday: 'yesterday',
        today: 'today',
        tomorrow: 'tomorrow',
        lastWeek: 'last week',
        nextWeek: 'next week'
    },
    second: {
        past:   (n) => n === 1 ? '1 second ago'  : `${n} seconds ago`,
        future: (n) => n === 1 ? 'in 1 second'   : `in ${n} seconds`,
        mini:   (n) => `${n}s`
    },
    minute: {
        past:   (n) => n === 1 ? '1 minute ago'  : `${n} minutes ago`,
        future: (n) => n === 1 ? 'in 1 minute'   : `in ${n} minutes`,
        mini:   (n) => `${n}m`
    },
    hour: {
        past:   (n) => n === 1 ? '1 hour ago'    : `${n} hours ago`,
        future: (n) => n === 1 ? 'in 1 hour'     : `in ${n} hours`,
        mini:   (n) => `${n}h`
    },
    day: {
        past:   (n) => n === 1 ? '1 day ago'     : `${n} days ago`,
        future: (n) => n === 1 ? 'in 1 day'      : `in ${n} days`,
        mini:   (n) => `${n}d`
    },
    week: {
        past:   (n) => n === 1 ? '1 week ago'    : `${n} weeks ago`,
        future: (n) => n === 1 ? 'in 1 week'     : `in ${n} weeks`,
        mini:   (n) => n === 1 ? '1week' : `${n}weeks`
    },
    month: {
        past:   (n) => n === 1 ? '1 month ago'   : `${n} months ago`,
        future: (n) => n === 1 ? 'in 1 month'    : `in ${n} months`,
        mini:   (n) => n === 1 ? '1month' : `${n}months`
    },
    year: {
        past:   (n) => n === 1 ? '1 year ago'    : `${n} years ago`,
        future: (n) => n === 1 ? 'in 1 year'     : `in ${n} years`,
        mini:   (n) => n === 1 ? '1year' : `${n}years`
    }
};

// --- Legacy exports (kept for backward compatibility) ---
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