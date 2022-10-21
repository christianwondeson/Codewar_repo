class Department {
  constructor(dep) {
    this.dep = dep;
    console.log("i am dep constructor");
   }

  getDep() {
    return this.dep;
  }
}

class Student extends Department {
  constructor(id, name, section, dep) {
    super(dep);
    (this.id = id),
      (this.name = name),
      (this.section = section),
      (this.dep = dep);
  }

  getInfo() {
    return this.id, this.name, this.section, this.dep;
  }

  displayInfo() {
    console.log("your data is :" + this.id, this.name, this.section, this.dep);
  }

  checking() {
    if (this.dep === "CS") {
      console.log("you are CS student");
    } else if (this.dep === "CE") {
      console.log("you are CE student");
    } else {
      console.log("unkown dep");
    }
  }
}

student_1 = new Student(1, "ab", "B22", "CE");
student_1.displayInfo();
student_1.checking();
