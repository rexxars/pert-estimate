'use strict';

var test = require('tape');
var pert = require('../');

test('it gives the correct expected duration', function testDuration(t) {
    var estimate = pert.expectedDuration(1, 5, 9);

    t.equal(estimate, 30, 'µ=(1+(4*5)+9)/6 should be 30');
    t.end();
});

test('it gives the correct standard deviation', function testDeviation(t) {
    var deviation = pert.standardDeviation(1, 5, 10);

    t.equal(deviation, 1.5, 'σ=(10-1)/6 should be 1.5');
    t.end();
});