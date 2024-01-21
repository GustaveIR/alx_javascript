#!/usr/bin/node

const Rectangle = require('./2-rectangle');

// Test case - Instance width: 3 - height: 3
const r1 = new Rectangle(3, 3);
console.log(r1.toString());
console.log(r1.width);
console.log(r1.height);

// Test case - Instance width: 3 - height: -3
const r2 = new Rectangle(3, -3);
console.log(r2.toString());
console.log(r2.width);
console.log(r2.height);

// Test case - Instance width: 3
const r3 = new Rectangle(3);
console.log(r3.toString());
console.log(r3.width);
console.log(r3.height);

// Test case - Instance width: undefined - height: 3
const r4 = new Rectangle(undefined, 3);
console.log(r4.toString());
console.log(r4.width);
console.log(r4.height);

// Test case - Instance no argument
const r5 = new Rectangle();
console.log(r5.toString());
console.log(r5.width);
console.log(r5.height);
