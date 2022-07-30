// Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

// circleArea(radiusLength).
// squareArea(sideLength).
// You may create these as either named functions or anonymous function expressions.

module.exports.circleArea = (radius) => {
  return PI * radius * radius;
};

module.exports.squareArea = (side) => {
  return side * side;
};

module.exports.RectangleArea = (length, width) => {
  return length * width;
};

//   Complete the program, app.js.

// First, import the shape-area.js module using the require() function (shape-area.js is in the same folder as app.js). Choose one of the two options below for storing the returned module.exports object:

// A) Store the entire module.exports object in the variable areaFunctions.
// B) Use object destructuring to extract the .circleArea() and .squareArea() methods into their own variables, circleArea and squareArea.
// Next, call the circleArea() function with the provided variable radius as an input. Assign the returned value to the variable areaOfCircle.

// Then, call the squareArea() function with the provided variable sideLength as an input. Assign the returned value to the variable areaOfSquare.

// You may print the values of areaOfCircle and areaOfSquare to the console to see your code work!

/* app.js */

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js");

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);

console.log(areaOfCircle, areaOfSquare);
