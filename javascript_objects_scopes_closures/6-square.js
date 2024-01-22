// 6-square.js
const Square5 = require('./5-square');

class Square extends Square5 {
  charPrint(c) {
    // If c is undefined, use the character 'X'; otherwise, use the provided character
    const printChar = c || 'X';

    // Print the square using the specified character
    for (let i = 0; i < this.height; i++) {
      console.log(printChar.repeat(this.width));
    }
  }
}

module.exports = Square;
