Romanization of russian names
===========

[![Version](http://img.shields.io/npm/v/@hexarc/romanify-russian-names.svg)](https://www.npmjs.org/package/@hexarc/romanify-russian-names)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/@hexarc/romanify-russian-names.svg)](https://npmjs.org/package/@hexarc/romanify-russian-names)
[![Downloads](http://img.shields.io/npm/dt/@hexarc/romanify-russian-names.svg)](https://npmjs.org/package/@hexarc/romanify-russian-names)

This library helps with transliterating russian cyrillic names into the latin script.

Supported transliteration methods:
- MID ORDER #4271


## Setup
Install with npm:

```sh
npm install @hexarc/romanify-russian-names
```

Using with node.js (ES6 syntax):

```js
import { romanify } from "@hexarc/romanify-russian-names";
```

Or using the CommonJS module syntax:

```js
const { romanify } = require("@hexarch/romanify-russian-names");
```

## Usage
```js
let romanName = romanify("Василий Петрович Долговязов");
console.log(romanName); //Vasilii Petrovich Dolgoviazov
```

## License

[MIT](LICENSE)