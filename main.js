/**
 * Helps covert from polar
 * @module poltocar
 * @param {Number} a - Polar angle (azimuth)
 * @param {Number} r - Radial distance
 * @returns {Object} - Point like, contains corresponding cartesian coordinates
 * @example
 * poltocar(Math.PI);
 */
const poltocar = (a = 0, r = 1) => ({
  x: r * Math.cos(a),
  y: r * Math.sin(a),
})

export default poltocar
