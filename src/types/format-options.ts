import { locale } from './locale';
import { rounding } from './rounding';
import { style } from './style';
import { unit } from './unit';

export interface formatOptions {
    locale?: locale;
    style?: style;
    now?: number | Date;
    timeZone?: string;
    rounding?: rounding;
    minUnit?: unit;
    maxUnit?: unit;
    calendar?: boolean;
    calendarThresholdDays?: number;
}
