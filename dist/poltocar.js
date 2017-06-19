var poltocar = (function () {
'use strict';

/**
 * Helps covert from polar
 * @module poltocar
 * @param {Number} t - Angle (theta)
 * @param {Number} r - Radius
 * @returns {Object} - Vector
 * @example
 * poltocar(Math.PI);
 */
var poltocar = function poltocar() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    x: r * Math.cos(t),
    y: r * Math.sin(t)
  };
};

return poltocar;

}());
