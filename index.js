'use strict';

module.exports = function poltocar(r, theta) {
  if (arguments.length === 1) {
    theta = r;
    r = 1;
  }

  var r = parseFloat(r) || 1;
  var theta = parseFloat(theta) || 0;

  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta)
  };
};
