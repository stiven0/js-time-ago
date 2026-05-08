# js-time-ago

A lightweight library to format relative time for past and future dates.

Looking for advanced docs and deep examples? See the full guide: [docs/README.full.md](https://github.com/stiven0/js-time-ago/blob/main/docs/README.full.md)

## What It Does

- Formats relative time in past and future.
- Supports two styles: `round` and `mini`.
- Supports `calendar` labels: `yesterday`, `today`, `tomorrow`, `last week`, `next week`.
- Supports `timeZone` in calendar mode using `Intl.DateTimeFormat`.
- Provides a live formatter for auto-updating UI labels.
- Includes built-in locales: `en`, `es`, `pt`.
- Allows runtime custom locales.

## Install

```bash
npm install js-time-ago
```

## Quick Start

```ts
import { formatSync, format } from 'js-time-ago';

const now = Date.now();

console.log(formatSync(now - 90_000, { locale: 'en' }));
// 2 minutes ago

const next = await format(now + 2 * 60_000, { locale: 'es' });
console.log(next);
// dentro de 2 minutos
```

## Main API

- `formatSync(time, options)` -> `string`
- `format(time, options)` -> `Promise<string>`
- `formatToPartsSync(time, options)` -> structured parts
- `formatToParts(time, options)` -> `Promise<parts>`
- `createLiveFormat(time, options)` -> live controller
- `registerLocale(name, dict)` -> add custom locale

## Important Options

- `locale`: output language (`en`, `es`, `pt`, or custom)
- `style`: `round` or `mini`
- `now`: deterministic reference time
- `timeZone`: IANA zone for calendar mode, for example `UTC`, `America/Bogota`
- `rounding`: `round`, `floor`, `ceil`
- `calendar`: enables calendar labels
- `calendarThresholdDays`: threshold for week labels
- `minUnit` / `maxUnit`: clamp output unit range

## Calendar + Time Zone Example

```ts
import { formatSync } from 'js-time-ago';

const now = new Date('2026-04-21T01:30:00.000Z').getTime();
const value = new Date('2026-04-20T23:30:00.000Z').getTime();

console.log(formatSync(value, { locale: 'en', now, calendar: true, timeZone: 'UTC' }));
// yesterday

console.log(formatSync(value, { locale: 'en', now, calendar: true, timeZone: 'America/Bogota' }));
// today
```

## Live Formatter Example

```ts
import { createLiveFormat } from 'js-time-ago';

const live = createLiveFormat(Date.now() - 45_000, {
  locale: 'en',
  onError: (error) => console.error(error.message)
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

## Framework Snippets

### React

```tsx
import { useEffect, useMemo, useState } from 'react';
import { createLiveFormat } from 'js-time-ago';

export function TimeAgo({ value }: { value: number | Date }) {
  const [text, setText] = useState('');
  const live = useMemo(() => createLiveFormat(value, { locale: 'en' }), [value]);

  useEffect(() => {
    const off = live.subscribe((s) => setText(s.formatted));
    live.start();
    return () => {
      off();
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
const live = createLiveFormat(props.value, { locale: 'es' });

onMounted(() => {
  live.subscribe((s) => { text.value = s.formatted; });
  live.start();
});

onUnmounted(() => live.destroy());
</script>

<template>
  <span>{{ text }}</span>
</template>
```

### Node.js

```ts
import { formatSync } from 'js-time-ago';

console.log(formatSync(Date.now() - 3 * 60 * 60 * 1000, {
  locale: 'en',
  calendar: true,
  timeZone: 'UTC'
}));
```

### Angular

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { createLiveFormat } from 'js-time-ago';

@Pipe({ name: 'jstimeago', standalone: true, pure: false })
export class JsTimeAgoPipe implements PipeTransform {
  private text = '';
  private live: ReturnType<typeof createLiveFormat> | null = null;

  transform(value: number | Date): string {
    if (!this.live) {
      this.live = createLiveFormat(value, { locale: 'en' });
      this.live.subscribe((s) => { this.text = s.formatted; });
      this.live.start();
    }
    return this.text;
  }

  ngOnDestroy(): void {
    this.live?.destroy();
  }
}
```

## TypeScript Exports

You can import main types directly from the package:

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

## License

MIT
