// object creation approach one

const userOne = {
  name: "tim",
  score: 5,
  increment: () => {
    userOne.score++;
  },
};

// this is example of oops a function  associated with the data

// another way of creating an object is
const userTwo = {};
userTwo.name = "kim";
userTwo.score = 6;
userTwo.increment = () => {
  userTwo.score++;
};

// using buit in feature objeect.create will return an empty object

const userThree = Object.create(null);
userThree.name = "kimmed";
userThree.score = 16;
userThree.increment = () => {
  userThree.score++;
};

// the above way of defining a function will create a redundent code so let us use a function to reduce the problem

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = () => {
    newUser.score++;
  };
  return newUser;
}

const userFunc = userCreator("bunny", 34);
const userFuncOne = userCreator("baddy", 21);
console.log(userFunc, userFuncOne);
console.log(userOne);
// this code is bad practice since each function create a new separate copy of that variables

// let us solve the redundent code
function userCreatorOne(name, score) {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
}
const functionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("you are logged in");
  },
};

const userFour = userCreatorOne("baeb", 120);
const userFive = userCreatorOne("fun", 2323);


console.log(userTwo);

// let us see the object creation
var object = null;
// this must display the data type of the object as a null type rather than an object
// to fix this use strict equality to check the data type of the object
console.log(object === null);
