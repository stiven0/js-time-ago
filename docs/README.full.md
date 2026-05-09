# js-time-ago

[![npm version](https://img.shields.io/npm/v/js-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/js-time-ago)
[![npm downloads](https://img.shields.io/npm/dw/js-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/js-time-ago)

A lightweight library to format relative time for past and future dates.

## Features

- Sync and async APIs.
- Relative formatting in two styles: round and mini.
- Structured output with formatToParts and formatToPartsSync.
- Calendar mode: yesterday, today, tomorrow, last week, next week.
- Time zone aware calendar mode using Intl.DateTimeFormat.
- Live formatter for auto-updating labels in UI.
- Built-in locales: en, es, pt.
- Runtime locale registration.

## Installation

```bash
npm install js-time-ago
```

## Quick Start

```ts
import { formatSync, format } from 'js-time-ago';

const now = Date.now();

console.log(formatSync(now - 90_000, { locale: 'en' }));
// 2 minutes ago

const text = await format(now + 2 * 60_000, { locale: 'es' });
console.log(text);
// dentro de 2 minutos
```

## Core API

### formatSync

```ts
import { formatSync } from 'js-time-ago';

const result = formatSync(Date.now() - 60_000, {
    locale: 'en',
    style: 'round',
    rounding: 'round'
});

console.log(result);
// 1 minute ago
```

### format

```ts
import { format } from 'js-time-ago';

const result = await format(Date.now() + 60_000, {
    locale: 'pt',
    style: 'round'
});

console.log(result);
// em 1 minuto
```

### formatToPartsSync

```ts
import { formatToPartsSync } from 'js-time-ago';

const parts = formatToPartsSync(Date.now() - 3 * 60 * 60 * 1000, {
    locale: 'en',
    style: 'mini'
});

console.log(parts);
// {
//   value: 3,
//   unit: 'hour',
//   tense: 'past',
//   locale: 'en',
//   style: 'mini',
//   formatted: '3h'
// }
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| locale | locale | en | Output locale. |
| style | style | round | round or mini. |
| now | number \| Date | Date.now() | Reference time for deterministic output. |
| timeZone | string | undefined | IANA zone for calendar mode, for example UTC or America/Bogota. |
| rounding | rounding | round | round, floor, or ceil. |
| minUnit | unit | second | Lower clamp unit. |
| maxUnit | unit | year | Upper clamp unit. |
| calendar | boolean | false | Enables calendar text where available. |
| calendarThresholdDays | number | 7 | Threshold for last week and next week labels. |

## Calendar Mode

```ts
import { formatSync } from 'js-time-ago';

const now = new Date('2026-04-21T01:30:00.000Z').getTime();
const value = new Date('2026-04-20T23:30:00.000Z').getTime();

console.log(formatSync(value, { locale: 'en', now, calendar: true, timeZone: 'UTC' }));
// yesterday

console.log(formatSync(value, { locale: 'en', now, calendar: true, timeZone: 'America/Bogota' }));
// today
```

## Live Formatter

```ts
import { createLiveFormat } from 'js-time-ago';

const live = createLiveFormat(Date.now() - 45_000, {
    locale: 'en',
    onError: (error) => console.error('live format error:', error.message)
});

const unsubscribe = live.subscribe((snapshot) => {
    console.log(snapshot.formatted, snapshot.intervalMs);
});

live.start();

setTimeout(() => {
    unsubscribe();
    live.destroy();
}, 5000);
```

### Live API Notes

- start begins polling with adaptive interval.
- stop pauses polling.
- destroy stops polling and clears all listeners.
- updateTime replaces the target timestamp and emits immediately.
- onError is called when a timer tick fails and the loop keeps running.

## Register a Custom Locale

```ts
import { registerLocale, formatSync } from 'js-time-ago';
import type { localeDict } from 'js-time-ago';

const fr: localeDict = {
    now: 'maintenant',
    nowMini: '0s',
    second: { past: (n) => `il y a ${n}s`, future: (n) => `dans ${n}s`, mini: (n) => `${n}s` },
    minute: { past: (n) => `il y a ${n}m`, future: (n) => `dans ${n}m`, mini: (n) => `${n}m` },
    hour: { past: (n) => `il y a ${n}h`, future: (n) => `dans ${n}h`, mini: (n) => `${n}h` },
    day: { past: (n) => `il y a ${n}j`, future: (n) => `dans ${n}j`, mini: (n) => `${n}j` },
    week: { past: (n) => `il y a ${n}sem`, future: (n) => `dans ${n}sem`, mini: (n) => `${n}sem` },
    month: { past: (n) => `il y a ${n}mois`, future: (n) => `dans ${n}mois`, mini: (n) => `${n}mois` },
    year: { past: (n) => `il y a ${n}ans`, future: (n) => `dans ${n}ans`, mini: (n) => `${n}ans` }
};

registerLocale('fr', fr);

console.log(formatSync(Date.now() - 120_000, { locale: 'fr' }));
// il y a 2m
```

## Framework Guides

### React

```tsx
import { useEffect, useMemo, useState } from 'react';
import { createLiveFormat } from 'js-time-ago';

type Props = { value: number | Date };

export function TimeAgoLabel({ value }: Props) {
    const [text, setText] = useState('');

    const live = useMemo(
        () => createLiveFormat(value, {
            locale: 'en',
            onError: (e) => console.error(e.message)
        }),
        [value]
    );

    useEffect(() => {
        const unsubscribe = live.subscribe((snapshot) => setText(snapshot.formatted));
        live.start();

        return () => {
            unsubscribe();
            live.destroy();
        };
    }, [live]);

    return <span>{text}</span>;
}
```

### Vue 3

```ts
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { createLiveFormat } from 'js-time-ago';

const props = defineProps<{ value: number | Date }>();
const text = ref('');

const live = createLiveFormat(props.value, {
    locale: 'es',
    onError: (e) => console.error(e.message)
});

onMounted(() => {
    live.subscribe((snapshot) => {
        text.value = snapshot.formatted;
    });
    live.start();
});

onUnmounted(() => {
    live.destroy();
});
</script>

<template>
  <span>{{ text }}</span>
</template>
```

### Node.js

```ts
import { formatSync } from 'js-time-ago';

const createdAt = Date.now() - 2 * 60 * 60 * 1000;

const text = formatSync(createdAt, {
    locale: 'en',
    calendar: true,
    timeZone: 'UTC'
});

console.log(text);
```

### Angular

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { createLiveFormat, formatSync } from 'js-time-ago';

@Pipe({
    name: 'jstimeago',
    standalone: true,
    pure: false
})
export class JsTimeAgoPipe implements PipeTransform {
    private live: ReturnType<typeof createLiveFormat> | null = null;
    private text = '';

    transform(value: number | Date): string {
        if (!this.live) {
            this.live = createLiveFormat(value, {
                locale: 'en',
                onError: (e) => console.error(e.message)
            });

            this.text = formatSync(value, { locale: 'en' });
            this.live.subscribe((snapshot) => {
                this.text = snapshot.formatted;
            });
            this.live.start();
        }

        return this.text;
    }

    ngOnDestroy(): void {
        this.live?.destroy();
    }
}
```

## TypeScript DX

All major types are exported from the package entrypoint.

```ts
import type {
    formatOptions,
    formatParts,
    locale,
    unit,
    style,
    rounding,
    isPastOrFuture
} from 'js-time-ago';
```

## Built-in Locales

- en
- es
- pt

## License

[MIT](LICENSE)