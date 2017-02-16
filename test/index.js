const test = require('tape');
const poltocar = require('../');

test('return value is of type and contains', (t) => {
  t.plan(2);

  t.equal(typeof poltocar(), 'object');
  t.deepEqual(poltocar(0), { x: 1, y: 0 });
});

test('return value compares with known result', (t) => {
  t.plan(2);

  const theta = Math.pow(2, -53);

  t.equals(poltocar(Math.PI / 6).x - (Math.sqrt(3) / 2), theta);
  t.equals((Math.sqrt(2) / -2) - poltocar(7 * Math.PI / 4).y, theta);
});
