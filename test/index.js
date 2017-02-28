const test = require('tape');
const pol2car = require('../');

test('return value is of type and contains', (t) => {
  t.plan(2);

  t.equal(typeof pol2car(), 'object');
  t.deepEqual(pol2car(0), { x: 1, y: 0 });
});

test('return value compares with known result', (t) => {
  const theta = Math.pow(2, -53);

  t.plan(2);
  t.equals(pol2car(Math.PI / 6).x - (Math.sqrt(3) / 2), theta);
  t.equals((Math.sqrt(2) / -2) - pol2car(7 * Math.PI / 4).y, theta);
});

test('will not throw if misconfigured', (t) => {
  try {
    pol2car(undefined, Infinity);
    t.pass('should not throw');
  } catch (e) {
    t.fail();
  }

  t.end();
});
