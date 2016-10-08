'use strict';

module.exports = function poltocar(r, theta) {
  var r = parseFloat(r) || 1;
  var theta = (typeof theta !== 'undefined') ? parseFloat(theta) : r;

  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta)
  };
};
