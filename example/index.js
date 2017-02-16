'use strict';

const fs = require('fs');
const pol2car = require('../');

const size = 360;
const halfSize = size * 0.5;
const radius = size * 0.325;
const filepath = './example/dial.svg';

const toRad = deg => deg * (Math.PI / 180);
const toSvg = points => {
  // http://stackoverflow.com/questions/17455436/is-there-a-way-to-convert-json-to-an-svg-object
  const node = point => `<circle cx="${point.x}" cy="${point.y}" r="2" fill="blue"/>`;
  const body = points.map(node).reduce((acc, val) => acc + val, '');
  const head = `<svg width="${size}px" height="${size}px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n`;
  const foot = `</svg>\n`;

  return head + body + foot;
};

const createPoint = i => {
  const rad = toRad(i);
  const car = pol2car(rad, radius);

  return {
    x: halfSize + car.x,
    y: halfSize + car.y,
  };
};

const total = 36;
const step = 360 / Math.max(total, 1);
const points = Array.from(Array(total)).map((v, i) => i * step).map(createPoint);

fs.writeFile(filepath, toSvg(points), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Done writing ${filepath}`);
  }

  process.exit();
});

