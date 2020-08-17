# js-time-ago

[![npm version](https://img.shields.io/npm/v/js-time-ago.svg?style=flat-square)](https://www.npmjs.com/package/js-time-ago)

Easily determine how long ago an event occurred, only for past dates


you will get a result like this:

**English**

- _right now_
- _10 seconds ago_
- _1 minute ago_
- _1 hour ago_
- _1 day ago_
- _1 week ago_
- _1 month ago_
- _1 year ago_
- _2 years ago_

**Spanish**

- _justo ahora_
- _hace 10 segundos_
- _hace 1 minuto_
- _hace 1 dia_
- _hace 1 semana_
- _hace 1 mes_
- _hace 1 año_
- _hace 2 años_


## Installation

This package is available through [npm registration](https://www.npmjs.com/).

```
npm install js-time-ago
npm i js-time-ago
```


## Usage

```

import { format } from 'js-time-ago';

// we specify the date and the language in which we will receive the answer

format( Date.now(), 'en' )
    .then( console.log );
    // right now

// support async / await
(async () => {

    const response = await format( Date.now() - 60 * 1000, 'es' );
    // Hace 1 minuto

})();


const getTime =  async (time, local) => {
    const response = await format( time, local ); 
    // 1 hour ago
};

getTime( Date.now() - 60 * 60 * 1000, 'en' ); 

```

## Local

Actualmente se tiene soporte para dos idiomas:
- en - English
- es - Spanish

**Feel free to clone or download the code and add new languages ​​or try whatever you want.**




## License

  [MIT](LICENSE)