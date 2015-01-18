'use strict';

function getEstimates() {
    // Check if this is a O/N/P-object or individual arguments
    var estimates;
    if (isNaN(arguments[0]) && arguments[0].pessimistic) {
        estimates = arguments[0];
    } else {
        estimates = {
            optimistic: arguments[0],
            nominal: arguments[1],
            pessimistic: arguments[2]
        };
    }

    validateEstimates(estimates);
    return estimates;
}

function validateEstimates(estimates) {
    ['optimistic', 'nominal', 'pessimistic'].forEach(function validateEstimate(estimate) {
        if (isNaN(estimates[estimate])) {
            throw new TypeError(estimate + ' estimate must be a number');
        }
    });
}

function expectedDuration(optimistic, nominal, pessimistic) {
    var estimates = getEstimates(optimistic, nominal, pessimistic);

    // µ = (O + (4 * N) + P) / 6
    return (estimates.optimistic + (4 * estimates.nominal) + estimates.pessimistic) / 6;
}

function standardDeviation(optimistic, nominal, pessimistic) {
    var estimates = getEstimates(optimistic, nominal, pessimistic);

    // σ = (P - O) / 6
    return (estimates.pessimistic - estimates.optimistic) / 6;
}

exports.expectedDuration = expectedDuration;
exports.standardDeviation = standardDeviation;
