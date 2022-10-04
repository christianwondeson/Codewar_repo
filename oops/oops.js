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

student.school();
studentOne.naming();

// this may reduce the code redundency but there are some short comings
