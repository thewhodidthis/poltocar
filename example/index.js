'use strict';

const poltocar = require('../');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let i = input.split(' ');

  // Angle
  let a = i[0];

  // Vector size
  let r = i[1];

  console.log(poltocar(a, r));
});

