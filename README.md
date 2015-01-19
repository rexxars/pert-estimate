# pert-estimate

Calculate estimate(s) based on the PERT method by using "most likely time", "optimistic time", and "pessimistic time".

# Installation

```bash
$ npm install --save pert-estimate
```

# Usage

```js
var pert = require('pert-estimate');

/**
 * Expected duration
 *
 * Two different ways of specifying arguments;
 * individual arguments or as an object.
 *
 * Order: optimistic, nominal, pessimistic
 */
console.log(pert.expectedDuration(1, 3, 14)); // 4.5
console.log(pert.expectedDuration({
    optimistic: 1,
    nominal: 3,
    pessimistic: 14
}));

/**
 * Standard deviation
 */
console.log(pert.standardDeviation(1, 3, 14)); // 2.16
console.log(pert.standardDeviation({
    optimistic: 1,
    nominal: 3,
    pessimistic: 14
}));
```

# License

MIT-licensed. See LICENSE.