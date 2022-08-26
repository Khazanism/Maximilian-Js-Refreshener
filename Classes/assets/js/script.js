//  Classes

/*
class person {
    name = 'Max' // property
    call = () => {...} // Method
}
*/

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // key word to execute the parent constructor too
    // to correctly initialize the parent class
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
