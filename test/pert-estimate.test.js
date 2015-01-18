'use strict';

var test = require('tape');
var pert = require('../');

test('expectedDuration handles individual arguments', function testDuration(t) {
    var estimate = pert.expectedDuration(1, 5, 9);

    t.equal(estimate, 5, 'µ=(1+(4*5)+9)/6 should be 5');
    t.end();
});

test('standardDeviation handles individual arguments', function testDeviation(t) {
    var deviation = pert.standardDeviation(1, 5, 10);

    t.equal(deviation, 1.5, 'σ=(10-1)/6 should be 1.5');
    t.end();
});

test('expectedDuration handles object argument', function testDurationWithObject(t) {
    var estimate = pert.expectedDuration({
        optimistic: 2,
        nominal: 8,
        pessimistic: 20
    });

    t.equal(estimate, 9, 'µ=(2+(4*8)+20)/6 should be 9');
    t.end();
});

test('standardDeviation handles object argument', function testDeviationWithObject(t) {
    var deviation = pert.standardDeviation({
        optimistic: 2,
        nominal: 8,
        pessimistic: 20
    });

    t.equal(deviation, 3, 'σ=(20-2)/6 should be 3');
    t.end();
});

test('expectedDuration throws on invalid args', function testDurationWithInvalidArgs(t) {
    t.throws(function testNonNumericOptimistic() {
        pert.expectedDuration({}, 1, 2);
    }, /TypeError/, 'non-numeric optimistic arg should throw TypeError');

    t.throws(function testNonNumericNominal() {
        pert.expectedDuration(1, {}, 3);
    }, /TypeError/, 'non-numeric nominal arg should throw TypeError');

    t.throws(function testNonNumericPessimistic() {
        pert.expectedDuration(1, 5, {});
    }, /TypeError/, 'non-numeric pessimistic arg should throw TypeError');

    t.end();
});

test('standardDeviation throws on invalid args', function testDeviationWithInvalidArgs(t) {
    t.throws(function testNonNumericOptimistic() {
        pert.standardDeviation({}, 1, 2);
    }, /TypeError/, 'non-numeric optimistic arg should throw TypeError');

    t.throws(function testNonNumericNominal() {
        pert.standardDeviation(1, {}, 3);
    }, /TypeError/, 'non-numeric nominal arg should throw TypeError');

    t.throws(function testNonNumericPessimistic() {
        pert.standardDeviation(1, 5, {});
    }, /TypeError/, 'non-numeric pessimistic arg should throw TypeError');

    t.end();
});