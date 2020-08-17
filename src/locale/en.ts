
export const secondsEn = ( second: number ): string => {
    
    if ( +second === 0 ) {
        return 'right now';

    }
    else if ( +second === 1 ) {
        return '1 second ago';

    } else {
        return `${ second } seconds ago`;

    }

};

export const minutesEn = ( minute: number ): string => {

    if ( minute === 1 ) {
        return '1 minute ago';

    } else {
        return `${ minute } minutes ago`;

    }
    
};

export const hoursEn = ( hour: number ): string => {

    if ( hour === 1 ) {
        return '1 hour ago ';

    } else {
        return `${ hour } hours ago`;

    }
    
};

export const daysEn = ( day: number ): string => {

    if ( day === 1 ) {
        return '1 day ago';

    } else {
        return `${ day } days ago`;

    }
    
};

export const weeksEn = ( week: number ): string => {

    if ( week === 1 ) {
        return '1 week ago';

    } else {
        return `${ week } weeks ago`;
    }
    
};

export const monthsEn = ( month: number ): string => {

    if ( month === 1 ) {
        return '1 month ago';

    } else {
        return `${ month } months ago`;
    }
    
};

export const yearsEn = ( year: number ): string => {

    if ( year === 1 ) {
        return '1 year ago';

    } else {
        return `${ year } years ago`;
    }

};

export const centurysEn = ( century: number ): string => {

    if ( century === 1 ) {
        return '1 century ago';

    } else {
        return `${ century } centuries ago`;
    }
    
};