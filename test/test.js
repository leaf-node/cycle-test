#! /bin/env node

// Copyright 2016 Andrew Engelbrecht
//
// This program is released under CC0
//
// https://creativecommons.org/publicdomain/zero/1.0/
//
//
// This program is a part of cycle-test


var ct, result, assert;

assert = require('assert');

// normally: require('cycle-test');
ct = require('../lib/main.js');


result = ct.hasCycle([[1], [2], [0]]);
assert(result === true);

result = ct.hasCycle([[1, 2], [2], []]);
assert(result === false);

result = ct.hasCycle([[0]]);
assert(result === true);

result = ct.hasCycle([[1], [3], undefined, [0]]);
assert(result === true);

result = ct.hasCycle([[1, 2], [2], [0]]);
assert(result === true);

result = ct.hasCycle([[1, 2], [2], [2]]);
assert(result === true);

result = ct.hasCycle([[]]);
assert(result === false);

result = ct.hasCycle([]);
assert(result === false);

result = ct.hasCycle([[0], []]);
assert(result === true);

result = ct.hasCycle([[1], [2, 4], [0]]);
assert(result === true);

result = ct.hasCycle([[5, 3, 1, 10], [], [], [], [0, 7], [], [2, 8, 9], [], [11, 9], [], [6, 4], [5]]);
assert(result === true);

result = ct.hasCycle([[5, 3, 1], [], [], [], [0, 7], [], [2, 8, 9], [], [11, 9], [], [6, 4], [5]]);
assert(result === false);

result = ct.hasCycle([[1], [], [3], []]);
assert(result === false);

result = ct.hasCycle([[1], undefined, [3], undefined]);
assert(result === false);

result = ct.hasCycle([[1], [0], [3], []]);
assert(result === true);

result = ct.hasCycle([[1], [], [3], [2]]);
assert(result === true);

result = ct.hasCycle([[1], undefined, [3], [2]]);
assert(result === true);

result = ct.hasCycle([[1, 1, 1], [], [3, 3], []]);
assert(result === false);

result = ct.hasCycle([[1, 1, 1], [5], [3, 3], []]);
assert(result === false);

result = ct.hasCycle([[1, 1, 1], [], [3, 3], [2]]);
assert(result === true);

result = ct.hasCycle([[1, 1, 1], [5], [3, 3], [2]]);
assert(result === true);


console.log("all tests passed.");

