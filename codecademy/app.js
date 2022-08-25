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

checkInventory(order).then(handleSuccess, handleFailure);
