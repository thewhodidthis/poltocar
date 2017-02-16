'use strict';

const fs = require('fs');
const pol2car = require('../');

const toRad = deg => deg * (Math.PI / 180);
const concat = (acc, val) => acc + val;

const size = 360;
const halfSize = size * 0.5;
const radius = size * 0.325;
const filepath = './example/dial.svg';

const svg = points => {
  // http://stackoverflow.com/questions/17455436/is-there-a-way-to-convert-json-to-an-svg-object
  const node = point => `<circle cx="${point.x}" cy="${point.y}" r="2" fill="blue"/>`;
  const head = `<svg width="${size}px" height="${size}px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n`;
  const body = points.map(node).reduce(concat, '');
  const foot = `</svg>\n`;

  return head + body + foot;
};

const createPoint = i => {
  const rad = toRad(i);
  const car = pol2car(rad);

  return {
    x: halfSize + (car.x * radius),
    y: halfSize + (car.y * radius),
  };
};

const totalPoints = 36;
const pointStep = 360 / totalPoints;
const points = [];

for (let i = 0; i < totalPoints; i += 1) {
  points.push(createPoint(i * pointStep));
}

fs.writeFile(filepath, svg(points), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Done writing ${filepath}`);
  }

  process.exit();
});

