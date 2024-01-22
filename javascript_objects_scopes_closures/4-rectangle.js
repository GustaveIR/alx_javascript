// 4-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer or is equal to 0, create an empty object
        Object.create(null);
      }
    }
  
    print() {
      // Print the rectangle using the character X
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      // Exchange the width and height of the rectangle
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Multiply the width and height of the rectangle by 2
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  