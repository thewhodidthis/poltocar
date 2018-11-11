'use strict'

const { equal, ok, deepEqual, fail } = require('tapeless')
const bender = require('./')

equal
  .describe('should be equal')
  .test(typeof bender(), 'object')

deepEqual
  .describe('should be equivalent', 'return value is of type and contains')
  .test(bender(0), { x: 1, y: 0 })

/* eslint no-restricted-properties: [1, { "object": "Math", "property": "pow" }] */
const expected = Math.pow(2, -53)
const { x } = bender(Math.PI / 6)
const t1 = x - (Math.sqrt(3) / 2)

equal
  .describe('should be equal', 'return value compares with known result')
  .test(t1, expected)

const { y } = bender((7 * Math.PI) / 4)
const t2 = (Math.sqrt(2) / -2) - y

equal
  .describe('should be equal')
  .test(t2, expected)

try {
  bender(undefined, Infinity)
  ok
    .describe('should not throw', 'will not throw if misconfigured')
    .test(true)
} catch (e) {
  fail()
}
