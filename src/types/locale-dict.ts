export interface localeUnitDict {
    past: (n: number) => string;
    future: (n: number) => string;
    mini: (n: number) => string;
}

export interface localeCalendarDict {
    yesterday: string;
    today: string;
    tomorrow: string;
    lastWeek: string;
    nextWeek: string;
}

export interface localeDict {
    now: string;
    nowMini: string;
    second: localeUnitDict;
    minute: localeUnitDict;
    hour: localeUnitDict;
    day: localeUnitDict;
    week: localeUnitDict;
    month: localeUnitDict;
    year: localeUnitDict;
    calendar?: localeCalendarDict;
}
