import { assert, report } from "tapeless"
import bender from "./main.js"

const { equal, ok } = assert

equal
  .describe("should be equal")
  .test(typeof bender(), "object")

equal
  .describe("should be equivalent", "return value is of type and contains")
  .test(JSON.stringify(bender(0)), JSON.stringify({ x: 1, y: 0 }))

const expected = Math.pow(2, -53)
const { x } = bender(Math.PI / 6)
const t1 = x - (Math.sqrt(3) / 2)

equal
  .describe("should be equal", "return value compares with known result")
  .test(t1, expected)

const { y } = bender((7 * Math.PI) / 4)
const t2 = (Math.sqrt(2) / -2) - y

equal
  .describe("should be equal")
  .test(t2, expected)

try {
  bender(undefined, Infinity)
  ok
    .describe("should not throw", "will not throw if misconfigured")
    .test(true)
} catch (e) {
  throw e
}

report()
