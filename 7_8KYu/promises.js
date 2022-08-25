const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
}

function myPantsExe(resolve, reject) {
  switch (inventory.pants) {
    case 1088:
      resolve("adequate pants are avaliable");
      break;
    case 1000:
      reject("insufficent pants");
      break;
    case Default:
      console.log("no working");
      break;
  }
}
function orderPants() {
  return new Promise(myPantsExe);
}

const resultPants = orderPants();
console.log(resultPants);

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise);

/////using set timeout to effciently use our promises

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

function usingSTO() {
  console.log("this the async function");
}

setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
