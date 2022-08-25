const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// Write your code below:
function handleSuccess(onFulFilled) {
  console.log(onFulFilled);
}
function handleFailure(onRejected) {
  console.log(onRejected);
}

//using then to handle success and faliure 
checkInventory(order).then(handleSuccess, handleFailure);

///using catch to handle failure on our settled promises
checkInventory(order).then(handleSuccess).catch(handleFailure);
