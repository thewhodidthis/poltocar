'use strict';

function poltocar() {
  var theta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta)
  };
}

module.exports = poltocar;
