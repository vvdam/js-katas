"use strict";
/*
Create a methods which returns the sum of all odd values contained in an integer array.

If the array is empty or null, return zero.

*/

// Your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 1);
assert.strictEqual(min.toString().includes("Math.min"), false);
assert.deepStrictEqual(min([]), []);
assert.deepStrictEqual(min(null), []);
assert.deepStrictEqual(min([0]), 0);
assert.deepStrictEqual(min([1]), 1);
assert.deepStrictEqual(min([-1]), -1);
assert.deepStrictEqual(min([0, -1, 1]), -1);
assert.deepStrictEqual(min([-2, -1, -3]), -3);
assert.deepStrictEqual(min([2, 1, 3]), 1);
// End of tests