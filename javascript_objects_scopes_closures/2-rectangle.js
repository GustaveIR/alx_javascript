#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
        // If width or height is not a positive integer, set them to undefined
        this.width = undefined;
        this.height = undefined;
      } else {
        // Initialize the instance attributes width and height
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  