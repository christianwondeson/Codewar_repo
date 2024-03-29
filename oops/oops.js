var customer = {
  name: "chris",
  speak: function () {
    return "my name is " + this.name;
  },
  address: {
    street: "Atena Tera",
    city: "ADDIS ABABA",
    state: "ADDIS ABEBA",
  },
}; 
// this obj with some attributes , with speak method bind to it

function person(name, street) {
  this.name = name;
  this.street = street;

  this.info = function () {
    return "my name is " + this.name + " and i live on " + this.street;
  };
}
// this function will create the method info, and intialize parameters
var bobSmith = new person(customer.name, customer.address.street);
console.log(bobSmith.info());
customer.address.country = "ETHIOPIA";
console.log(bobSmith instanceof person);
customer.name = "sue smith";

let changeName = (person) => {
  person.name = "sue Smith";
};

changeName(bobSmith);
console.log(bobSmith.name);

////////////////////////////// session two ///////////////////////
class student {
  constructor(name, stream, school) {
    this.name = name;
    this.stream = stream;
    this.school = school;
  }

  naming() {
    console.log(
      "this is " +
        this.name +
        " my stream is " +
        this.stream +
        " i go to " +
        this.school
    );
  }
  //   A static method

  static school() {
    console.log("my school is nearby");
  }
}

const studentOne = new student(
  "yeabkal wondeson",
  "natural Science",
  "bashwam academy"
);
// when object is created we will use the new keyword

student.school();
studentOne.naming();

console.log(
  "is studentOne is instacnce of student class " +
    (studentOne instanceof student)
);
// this may reduce the code redundency but there are some short comings

// class inheritance

class media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

// let us create a child class
class song extends media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
    this.production = songData.production;
  }
}
// we used the super keyword to inherit from the parent class
const mySong = new song({
  artist: "queen",
  name: "Bohemain Rhapsody",
  publishDate: 1975,
  production: "7 star",
 });

console.log(mySong.production);


console.log(number);
number = 6;