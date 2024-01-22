#!/usr/bin/node
const Rectangle = require('./2-rectangle');

const r1 = new Rectangle(2, 3);
console.log(`Correct output - Instance width: ${r1.width} - height: ${r1.height}`);
console.log(`[Got]\n${JSON.stringify(r1)}`);
console.log(r1.width);
console.log(r1.height);

const r2 = new Rectangle(2, -3);
console.log('Correct output - Instance {}');
console.log(`[Got]\n${JSON.stringify(r2)}`);
console.log(r2.width);
console.log(r2.height);

const r3 = new Rectangle(2);
console.log('Correct output - Instance {}');
console.log(`[Got]\n${JSON.stringify(r3)}`);
console.log(r3.width);
console.log(r3.height);

const r4 = new Rectangle(2, 0);
console.log('Correct output - Instance {}');
console.log(`[Got]\n${JSON.stringify(r4)}`);
console.log(r4.width);
console.log(r4.height);
