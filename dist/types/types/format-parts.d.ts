import { isPastOrFuture } from './is-past-or-future';
import { locale } from './locale';
import { style } from './style';
import { unit } from './unit';
export interface formatParts {
    value: number;
    unit: unit;
    tense: isPastOrFuture;
    locale: locale;
    style: style;
    formatted: string;
}
//# sourceMappingURL=format-parts.d.ts.map