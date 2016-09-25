'use strict';

const poltocar = require('../');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let i = input.split(' ');
  let a = parseInt(i[0]);
  let r = parseInt(i[1]) || a;

  console.log(poltocar(a, r));
});

