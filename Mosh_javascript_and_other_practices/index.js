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
// function checkSpeed(speed){
//     let point = 0;
//     const SPEEDLIMIT = 70
// if (speed < SPEEDLIMIT){
//     return "ok";
// }else if(speed >= 75){
//    while(speed >= 75){
//     if(speed >= 75){
//         point +=1;
//     }
//     speed = speed -5;
//    }
// }
// return point < 12 ? `point : ${point} ` : 'Suspended License';
// }


// let result = checkSpeed(130);
// console.log(result);

// avoid using magic numbers for speed
// redundant code 
// unneccessary return statements and loops


function checkSpeedImproved(speed) {
    const SPEEDLIMTT = 70;
    const KMPERPOINT = 5;
    let point = 0;

    if (speed < (SPEEDLIMTT + KMPERPOINT)) {
        console.log('ok');
    } else {
        point = Math.floor((speed - SPEEDLIMTT) / KMPERPOINT);
    }
    return point >= 12 ? "License suspended" : `points: ${point}`;
}
//remove magic numbers 
console.log(checkSpeedImproved(180));


// display even and odd number
function showNumbers(limit) {
    let zero = 0;
    while (zero <= limit) {
        if (zero % 2 == 0) {
            console.log(`${zero} EVEN`);
        } else {
            console.log(`${zero} ODD`);
        }
        zero++;
    }
}
showNumbers(10);

// count truthy 
const list = [1, 2, 0, false, undefined];
function countTruthy(input) {
    let counter = 0;
    for (value of input) {
        value ? counter++ : value;
    }
    return counter;
}

console.log(countTruthy(list));

// display ky value pair of object entities that are string
const movies = {
    title: 't',
    releaseYear: 2024,
    rating: 8.5,
    director: 'zack snyder'
}
function showProperties(obj) {
    for (entity in obj) {
        console.log((typeof obj[entity]) === 'string' ? `${entity} : ${obj[`${entity}`]}` : 'it must be data tye other than string');
    }
    return 'finished for this function';
}

console.log(showProperties(movies));

// identify multiple of 3 and 5 , plus add them
function sum(limit) {
    let sum = 0;
    let checker = 1;
    while (checker <= limit) {
        if (checker % 3 === 0 || checker % 5 === 0) {
            sum += checker;
        }
        checker++
    }
    return sum;
}
console.log(sum(10));

// grade calculator
const marks = [80, 90, 90]
function calculateGrade(marks){
    let average = 0;
    let sum = 0;
    for (mark of marks){
        sum += mark;
    }
    average = sum / marks.length;
    return average <= 100 && average >= 90 ? "A" : average <= 89 && average >= 80 ? "B" : average <= 79 && average >= 70  ? "C" : average <= 69 && average >= 60 ? "D" : "F";
}
console.log(calculateGrade(marks));




