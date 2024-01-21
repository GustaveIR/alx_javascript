#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Create an empty object if w or h is not a positive integer
        this.width = undefined;
        this.height = undefined;
      }
    }
  
    // Custom toString method
    toString() {
      if (this.width !== undefined && this.height !== undefined) {
        return `Rectangle { width: ${this.width}, height: ${this.height} }`;
      } else {
        return 'Rectangle {}';
      }
    }
  }
  
  module.exports = Rectangle;
  
  // Test cases
  const r1 = new Rectangle(3, 3);
  console.log(r1.toString());
  
  const r2 = new Rectangle(3, -3);
  console.log(r2.toString());
  
  const r3 = new Rectangle(3);
  console.log(r3.toString());
  
  const r4 = new Rectangle(undefined, 3);
  console.log(r4.toString());
  
  const r5 = new Rectangle();
  console.log(r5.toString());
  