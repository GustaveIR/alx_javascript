#!/usr/bin/node
const Rectangle = require('./2-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1);
console.log(r1.w);
console.log(r1.h);

const r2 = new Rectangle(2, -3);
console.log(r2);
console.log(r2.w);
console.log(r2.h);

const r3 = new Rectangle(2);
console.log(r3);
console.log(r3.w);
console.log(r3.h);

const r4 = new Rectangle(2, 0);
console.log(r4);
console.log(r4.w);
console.log(r4.h);