/**
 * Tests for compose-await
 */
const test = require('tape');
const compose = require('./index.js');

test('exports a function', t => {
    t.plan(1);
    t.equals(typeof compose, 'function');
    t.end();
});

test('returns a function', t => {
    t.plan(1);

    const fn = compose(() => {}, () => {}, () => {});

    t.equals(typeof fn, 'function');

    t.end();
});

test('invokes functions in order', async t => {
    const genTest = expected => actual => {
        t.equals(actual, expected);
        return actual + 1;
    };

    t.plan(5);

    const fn = compose(genTest(3), genTest(2), genTest(1), genTest(0));
    const result = await fn(0);

    t.equals(result, 4);
    t.end();
});

test('invokes functions in order with promises', async t => {
    const genTest = expected => actual => {
        t.equals(actual, expected);
        return Promise.resolve(actual + 1);
    };

    t.plan(5);

    const fn = compose(genTest(3), genTest(2), genTest(1), genTest(0));
    const result = await fn(0);

    t.equals(result, 4);
    t.end();
});
