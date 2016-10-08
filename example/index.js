'use strict';

const poltocar = require('../');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let i = input.split(' ');
  let theta = i[0];
  let r = i[1];

  console.log(poltocar(r, theta));
});

