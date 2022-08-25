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
