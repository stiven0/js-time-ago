export interface localeUnitDict {
    past: (n: number) => string;
    future: (n: number) => string;
    mini: (n: number) => string;
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
}
//# sourceMappingURL=locale-dict.d.ts.map