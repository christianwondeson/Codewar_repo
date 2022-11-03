// queue implementation
// fifo princple sis usind in queue
function Queue() {
  collection = [];
  this.print = function () {
    console.log(JSON.stringify(collection));
  };
  // this is a helper method to display our collection
  // we are adding an element from the ;ast index of our array
  this.enqueue = function (element) {
    collection.push(element);
  };
  //   we are removing an element from the first index of the collection
  this.dequeue = function () {
    return collection.shift();
  };
  //   this is wquivalent to peack in stack but it locates the first index address and value(dereferencing)
  this.front = function () {
    return collection[0];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  //   checking whether the collection is empty or not
}
// let create our own instance of the function queue(or object) every thing in js is object

let PL = new Queue();
PL.enqueue("ARSENAL");
PL.enqueue("MAN CITY");
PL.enqueue("LIVERPOOL");
PL.enqueue("MAN UTD");

// WE ARE ADDING ELEMENTS INTO OUR COLLECTION

// LET US PRINT OUR COLLECTION THROUGH THE HELP OF PRINT FUNCTION
PL.print();

// LET US REMOVE FROM THE COLLECTION
// WE ALREADY KNOW WHICH ELEMENT TO REMOVE FROM THE COLLECTION

let CL = PL.dequeue();
console.log("first place removed with dequeue method : " + CL);
PL.print();
console.log("second place is held by : " + PL.front());

isEMpty = PL.isEmpty();
console.log("is collection empty : " + isEMpty);

// let move on priorityQueue

function priorityQueue() {
  var collectionOne = [];
  this.printCollection = function () {
    console.log(JSON.stringify(collectionOne));
  };
  // we are passing an array for our element
  this.enqueue = function (elementArray) {
    if (this.isEmpty()) {
      collectionOne.push(elementArray);
    } else {
      let added = false;
      for (let i = 0; i < collectionOne.length; i++) {
        if (elementArray[1] < collectionOne[i][1]) {
          collectionOne.splice(i, 0, elementArray);
          added = true;
          break;
        }
      }
      if (added) {
        collectionOne.push(elementArray);
      }
    }
  };
  this.dequeue = function () {
    let remove = collectionOne.shift();
    return remove[0];
  };
  this.front = function () {
    return collectionOne[0];
  };
  this.isEmpty = function () {
    return collectionOne.length === 0;
  };
  //   checking whether the collection is empty or not
}

studentReg = new priorityQueue();

studentReg.enqueue(["abebe", 2]);
studentReg.enqueue(["lemma", 3]);
studentReg.enqueue(["bersi", 1]);
// studentReg.enqueue(["miki", 1]);

// we are adding our data to the collection

// our prioprity is handeled on the enqueue method

// lets print our data
studentReg.printCollection();
console.log(studentReg.front());
// studentReg.dequeue();
// studentReg.printCollection();
// studentReg.dequeue();
