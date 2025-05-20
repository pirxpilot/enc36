[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]

# enc36

Encode/decode array of Numbers into shorter String representation.

## Install

```sh
$ npm install --save enc36
```

## Usage

```js
import { encode, decode } from 'enc36';

encode(array_of_ll);
decode(encoded_string);
```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/enc36
[npm-url]: https://npmjs.org/package/enc36

[build-url]: https://github.com/pirxpilot/enc36/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/enc36/check.yaml?branch=main
