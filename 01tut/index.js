// difference between nodejs and vanilla js
// node js runs on server side where as vanilla js run in our web browser
// node js use global js than windows
// console.log(global);
// common core modules only on nodes js
//

const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
// console.log(JSON.stringify(__filename));
// this is an object that contain all of those file infos

// let import math

const math = require("./math");

console.log(math.add(4, 5), math.sub(5, 4));

//we are import our math js file and the function in it to disply on our terminal

// other way

const { add, sub } = require("./math");

console.log(add(4, 5));
console.log(sub(5, 4));

//we used destructuring to reduce redundencey

//node js has some missing apis like fetch
