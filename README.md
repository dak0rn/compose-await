# compose-await
`compose` for async functions

Composes async functions, `await`ing each of them.
Please keep in mind that functions are applied from right to left and only
may take one argument.

## Installation

```bash
yarn add compose-await
```

## Usage

```js
const compose = require('compose-await');

const first = async function(a) {
    // ...
};

const second = async function(b) {
    // ...
};

const third = async function(c) {
    // ...
};

const together = compose(third, second, first);
const result = await together(42);
```
