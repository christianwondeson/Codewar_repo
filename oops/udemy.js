var studentIds = [30, 10, 20, 5, 100];
studentIds.sort((num_1, num_2) => {
  return num_1 - num_2;
});

console.log(studentIds);

function evenOrOdd(num) {
  console.log(num);
  arguments[3];
  console.log(arguments[3]);
  let result = num % 2 === 0 ? "even" : "odd";
  return result;
}

var compute = evenOrOdd;
console.log(compute(11, 12, 13, 10));

// js will accept more the 1 arugemnts or parameters but only use the first element
// inorder to use the rest we have to specifiy the arguments as an array element

// function overloading means using the same function with different parameters

function add() {
  if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  }
}
let sum = add(3, 4, 5);
console.log(sum);
// we overcome js function overloading problem with arguments DS method

// next let us create an object method

function clubDisplay() {
  let clubNames = [
    "arsenal",
    "man city",
    "man utd",
    "liverpool",
    "leeds united",
  ];
  console.log("English Preimre League");
  for (let i = 0; i < this.rank.length; i++) {
    console.log(this.rank[i] + "," + "\t" + clubNames[i]);
  }
}

let englishPremireLeague = {
  rank: [1, 2, 3, 4, 5],
  //   clubs: clubDisplay,
};

// englishPremireLeague.clubs();
// one example of object methods

clubDisplay.call(englishPremireLeague);
// this is function call
//
//
//
let student = {
  name: "christian",
  age: 23,
  id: "13,161/19",
  location: "Addis Abeba",
};

console.log(student.id);

// to check if student id is in  student class using in operator
console.log("id" in student);
console.log("toString" in student);
console.log(student.hasOwnProperty("age"));

//  adding and removing property

// delete student.location;
console.log(student);
// to get all properties from our object

let allProps = Object.keys(student);
console.log(allProps)
let i = 0;

while( i < allProps.length){
  console.log(allProps[i]);
  i++;
}