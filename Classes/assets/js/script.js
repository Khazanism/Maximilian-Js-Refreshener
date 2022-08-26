//  Classes

/*
class person {
    name = 'Max' // property
    call = () => {...} // Method
}
*/

class person {
  constructor() {
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new person();
person.printMyName();
