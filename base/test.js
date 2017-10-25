'use strict';

const assert = require('assert');
const vocabs = require('.');

const obj = {};
const ns = 'tag:abc#';
const pfx = 'xyz';
const terms = ['a', 'b', 'c'];

vocabs(obj, ns, pfx, terms);

assert.strictEqual(obj.ns, ns);
assert.strictEqual(obj.prefix, pfx);

terms.forEach((i) => assert.strictEqual(obj[i], ns + i));
