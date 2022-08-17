# js-time-ago

[![npm version](https://img.shields.io/npm/v/js-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/js-time-ago)
[![npm downloads](https://img.shields.io/npm/dw/js-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/js-time-ago)

> A simple and easy library to determine how long ago an event occurred or will occur
## Language support

Currently there is support for three languages:
- en - English
- es - Spanish
- pt - Portuguese

you will get a result like this:

**English by fault**

- _right now_
- _10 seconds ago_
- _in 10 second_
- _1 minute ago_
- _in 1 minute_
- _1 hour ago_
- _in 1 hour_
- _1 day ago_
- _in 1 day_
- _1 week ago_
- _in 1 week_
- _1 month ago_
- _in 1 month_
- _1 year ago_
- _in 1 year_

## Installation 🔧

This package is available through [npm registration](https://www.npmjs.com/).

```
npm install js-time-ago
```


## Usage 🚀

```js

const { format } = require('js-time-ago');
//  or  //
import { format } from 'js-time-ago';

// we specify the date and the language in which we will receive the answer

format( Date.now(), 'en' )
    .then( console.log );
    // right now

// support async / await
(async () => {

    const response = await format( Date.now() + 2 * 60 * 1000, 'es' );
    console.log( response );
    // dentro de 2 minutos

})();


const getTime =  async (time, local) => {
    const response = await format( time, local ); 
    console.log( response );
    // 1 mês atrás
};

getTime( Date.now() - 1 * 4 * 7 * 24 * 60 * 60 * 1000, 'pt' );

// use with angular pipe

import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'js-time-ago';

@Pipe({
    name: 'jstimeago'
})

export class JsTimeAgoPipe implements PipeTransform {

    async transform(date: number | Date): Promise<string> {
        return await format( date, 'en' );
    }
}

// import pipe in declarations and use it in html component
<span>{{ date | jstimeago | async }}</span>


```

## Styles

List of supported "styles".

### Round

```js

format( Date.now(), 'en', 'round' ).then( console.log );
// right now

format( Date.now() - 1 * 1000, 'en', 'round' ).then( console.log );
// 1 second ago

format( Date.now() - 1 * 60 * 60 * 1000, 'en', 'round' ).then( console.log );
// 1 hour ago

format( Date.now() - 1 * 7 * 24 * 60 * 60 * 1000, 'en', 'round' ).then( console.log );
// 1 week ago

```

### Mini

```js

format( Date.now(), 'en', 'mini' ).then( console.log );
// 0s

format( Date.now() - 1 * 1000, 'en', 'mini' ).then( console.log );
// 1s

format( Date.now() - 1 * 60 * 60 * 1000, 'en', 'mini' ).then( console.log );
// 1h

format( Date.now() - 1 * 7 * 24 * 60 * 60 * 1000, 'en', 'mini' ).then( console.log );
// 1week

```

## License 📄

  [MIT](LICENSE)