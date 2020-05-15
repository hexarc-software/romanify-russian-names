Romanization of russian names
===========

[![Version](http://img.shields.io/npm/v/romanify-russian-names.svg)](https://www.npmjs.org/package/romanify-russian-names)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/romanify-russian-names.svg)](https://npmjs.org/package/romanify-russian-names)
[![Downloads](http://img.shields.io/npm/dt/romanify-russian-names.svg)](https://npmjs.org/package/romanify-russian-names)

This library helps with transliterating russian cyrillic names into the latin script.

Supported transliteration methods:
- MID ORDER #4271


## Setup
Install with npm:

```sh
npm install romanify-russian-names
```

Using with node.js (ES6 syntax):

```js
import { romanify } from "romanify-russian-names";
```

Or using the CommonJS module syntax:

```js
const { romanify } = require("romanify-russian-names");
```

## Usage
```js
let romanName = romanify("Василий Петрович Долговязов");
console.log(romanName); //Vasilii Petrovich Dolgoviazov
```

## License

[MIT](LICENSE)