Romanify
===========

[![Version](http://img.shields.io/npm/v/classnamer.svg)](https://www.npmjs.org/package/romanify)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/classnamer.svg)](https://npmjs.org/package/romanify)
[![Downloads](http://img.shields.io/npm/dt/classnamer.svg)](https://npmjs.org/package/romanify)

This library helps with transliterating russian cyrillic names into the latin alphabet.
Supported transliteration methods:
- MID ORDER #4271

Install with npm:

```sh
npm install romanify
```

Using with node.js (TypeScript ES6 syntax):

```js
import { romanify } from "romanify";
```

## Usage
```js
let romanName = romanify("Василий Петрович Долговязов");
console.log(romanName); //Vasilii Petrovich Dolgoviazov
```js

## License

[MIT](LICENSE)