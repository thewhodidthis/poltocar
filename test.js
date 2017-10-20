'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const pol2car = require('./')

equal(typeof pol2car(), 'object', 'should be equal', 'return value is of type and contains')
deepEqual(pol2car(0), { x: 1, y: 0 }, 'should be equivalent')

/* eslint no-restricted-properties: [1, { "object": "Math", "property": "pow" }] */
const expected = Math.pow(2, -53)
const { x } = pol2car(Math.PI / 6)
const t1 = x - (Math.sqrt(3) / 2)

equal(t1, expected, 'should be equal', 'return value compares with known result')

const { y } = pol2car((7 * Math.PI) / 4)
const t2 = (Math.sqrt(2) / -2) - y

equal(t2, expected, 'should be equal')

try {
  pol2car(undefined, Infinity)
  ok(true, 'should not throw', 'will not throw if misconfigured')
} catch (e) {
  fail()
}
