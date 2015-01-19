# pert-estimate

[![Version npm](http://img.shields.io/npm/v/pert-estimate.svg?style=flat-square)](http://browsenpm.org/package/pert-estimate)[![Build Status](http://img.shields.io/travis/rexxars/pert-estimate/master.svg?style=flat-square)](https://travis-ci.org/rexxars/pert-estimate)[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/rexxars/pert-estimate.svg?style=flat-square)](https://codeclimate.com/github/rexxars/pert-estimate)[![Code Climate](http://img.shields.io/codeclimate/github/rexxars/pert-estimate.svg?style=flat-square)](https://codeclimate.com/github/rexxars/pert-estimate/)

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
