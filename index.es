/**
 * Polar to cartesian conversion
 * @module poltocar
 * @param {Number} t - Angle (theta)
 * @param {Number} r - Radius
 * @returns {Object} - Vector
 * @example
 * poltocar(Math.PI);
 */
const poltocar = (t = 0, r = 1) => ({
  x: r * Math.cos(t),
  y: r * Math.sin(t)
});

export default poltocar;
