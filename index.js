'use strict';

module.exports = function poltocar(theta, r) {
  var theta = parseFloat(theta) || 0;
  var r = parseFloat(r) || 1;

  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta)
  };
};
