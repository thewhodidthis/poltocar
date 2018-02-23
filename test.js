'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const bender = require('./')

equal(typeof bender(), 'object', 'should be equal', 'return value is of type and contains')
deepEqual(bender(0), { x: 1, y: 0 }, 'should be equivalent')

/* eslint no-restricted-properties: [1, { "object": "Math", "property": "pow" }] */
const expected = Math.pow(2, -53)
const { x } = bender(Math.PI / 6)
const t1 = x - (Math.sqrt(3) / 2)

equal(t1, expected, 'should be equal', 'return value compares with known result')

const { y } = bender((7 * Math.PI) / 4)
const t2 = (Math.sqrt(2) / -2) - y

equal(t2, expected, 'should be equal')

try {
  bender(undefined, Infinity)
  ok(true, 'should not throw', 'will not throw if misconfigured')
} catch (e) {
  fail()
}
