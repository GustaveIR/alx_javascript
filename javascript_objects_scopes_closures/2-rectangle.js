#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Create an empty object if width or height is not a positive integer
        this.width = undefined;
        this.height = undefined;
      }
    }
  
    // Add a toString method to format the output
    toString() {
      return `Rectangle { width: ${this.width}, height: ${this.height} }`;
    }
  }
  
  module.exports = Rectangle;
  