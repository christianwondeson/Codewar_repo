// the set data structure
// let us store unique element in the form of unordered list  it can store primitive and non-primitive datatypes
// let us understand the implemintation of set DS

function mySet() {
  var collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  //   this is going to check if the elment is in the collection

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  //   when working with 2 different sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      union.add(e);
    });
    return unionSet;
  };
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = thie.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subSet = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();

var setB = new mySet();

setA.add("a");
setA.add("b");
setB.add("b");
setB.add("c");
setB.add("d");
setB.add("a");

console.log(setA.subSet(setB));
console.log(setA.intersection(setB).values());
console.log(setB.has("s"));
console.log(setB.add("q"));
console.log(setB.values());
