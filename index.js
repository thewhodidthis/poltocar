'use strict';

module.exports = function poltocar(a, r) {
  var r = (r === undefined) ? 1 : r;

  return {
    x: r * Math.cos(a),
    y: r * Math.sin(a)
  };
};
