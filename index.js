'use strict';

/**
 * Helps covert from polar
 * @module poltocar
 * @param {Number} a - Polar angle (azimuth)
 * @param {Number} r - Radial distance
 * @returns {Object} - Point like, contains corresponding cartesian coordinates
 * @example
 * poltocar(Math.PI);
 */
var poltocar = function (a, r) {
  if ( a === void 0 ) a = 0;
  if ( r === void 0 ) r = 1;

  return ({
  x: r * Math.cos(a),
  y: r * Math.sin(a)
});
};

module.exports = poltocar;
