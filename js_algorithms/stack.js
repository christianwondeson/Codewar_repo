// stack impliementation

var Stack = function () {
  this.counter = 0;
  this.Storage = {};

  this.push = function (value) {
    this.Storage[this.counter] = value;
    this.counter++;
  };

  this.pop = function () {
    if (this.counter === 0) {
      return undefined;
    }
    this.counter--;
    let result = this.Storage[this.counter];
    delete this.Storage[this.counter];
    return result;
  };
  this.size = function () {
    return this.counter;
  };
  this.peek = function () {
    return this.Storage[this.counter - 1];
  };
};

let footballStack = new Stack();
footballStack.push("man city");
footballStack.push("arsenal");
footballStack.push("liverpool");
footballStack.push("chelsea");
footballStack.push("man utd");

console.log(footballStack.size());
console.log(footballStack.pop());
console.log(footballStack.peek());

/* another stack emplimimtaion */

class cart {
  constructor() {
    this.counter = 0;
    this.storage = {};

    this.peek = function () {
      return this.storage[this.counter - 1];
    };
    this.size = function () {
      return this.counter;
    };
    this.pop = function () {
      if (this.counter === 0) {
        return undefined;
      }
      this.counter--;
      let result = this.storage[this.counter];
      delete this.storage[this.counter];
      return result;
    };
    this.push = function (value) {
      this.storage[this.counter] = value;
      this.counter++;
    };
  }
}

let cartOne = new cart();
cartOne.push("veggies");
cartOne.push("beef");
cartOne.push("blankets");
cartOne.push("batteries");

console.log(cartOne.peek());
console.log(cartOne.pop());
console.log(cartOne.peek());
cartOne.push("glooves");
console.log(cartOne.peek());
console.log(JSON.stringify(cartOne.storage));
