let hour = new Date().getHours();;
function greetingOfTheDate(inputHour) {
    const greetings = {
        morning: "Good Morning",
        afternoon: "Good Afternoon",
        evening: "Good Evening"
    }
    return parseInt(inputHour) >= 6 && parseInt(inputHour) < 12 ? greetings.morning : parseInt(inputHour) >= 12 && parseInt(inputHour) <= 17 ? greetings.afternoon : greetings.evening
}
console.log(greetingOfTheDate(hour));

// simple ternary operater for displaying greetings based on the current time
// let try switch statement

let status = 'employed';

// switch (status) {
//     case 'employed':
//         console.log("you are good for the loan");
//         break;
//     case 'unemployed':
//         console.log("you loan is dismissed");
//         break;
//     default:
//         console.log("please enter your status properly");
//         break;
// }
// exercise the above switch statement using ternary operators

let approval = status === 'employed' ? 'you are good for the loan' : status === 'unemployed' ? 'you are good for the loan' : 'please enter your status properly';
console.log(approval);

// loops in javascript
// loop to display even numbers
let initalNumbers = 1;
let initalNumber = 1;

while (initalNumber < 10) {
    //we can  write a one liner if we are comparing a single line experssion like the below example
    if (initalNumber % 2 === 0) console.log(initalNumber);
    initalNumber++;
}

do {
    if (initalNumbers % 3 == 0) console.log(`this is an odd number : ${initalNumbers}`)
    initalNumbers++;
} while (initalNumbers <= 10);

// learnt for , while, do while
//net for in loop and es6 improve loop for of
// using break and continue on loop statements
// for in  loop is use mainly for objects
// for of is use on arrays 

// after some views lets exercise on a function that takes two numbers as an argument and compare then to return the maximum value
// the senario are when comparing the two numbers either they are equal or they are different in which one is the maximum and the other is the minimum
function compareNumbers(num1, num2) {
    // method one return Math.max(num1, num2);
    return num1 < num2 ? `The maximum number is ${num2}` : num1 === num2 ? "they are equal" : `The maximum number is ${num1}`;
}

console.log(compareNumbers(10, 15)); // expected output: 10

// the net challenge wii be testing the ratio of an image based on the width and height

function isLandscape(width, height) {
    return width > height ? true : width === height ? "they are square ratio" : false;
    // the above code is poorly written code improve the code by changing it like 
    return (width > height);
    //the above like of code return a boolean value
}
console.log(isLandscape(1220, 1220));

// next challenge the fizzBuzz algorithm let dive into it

function fizzBuzz(input) {
    return typeof input !== 'number' ? NaN : input % 3 === 0 && input % 5 === 0 ? "FizzBuzz" : input % 5 === 0 ? 'Buzz' : input % 3 === 0 ? 'Fizz' : `This number is not divisible by 3 and 5 : ${input}`;
    // this code primarily works based on order of conditionally rendering from firstly checking if it is a number or not ....
}
console.log(fizzBuzz(false));


// net challenge 





