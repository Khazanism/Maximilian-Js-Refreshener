//  Ref.& Primitive Types

const number = 1;
const num2 = number;

console.log(num2);

// ====
const person = {
  name: "MAx",
};

// const secondPerson = person;
const secondPerson = {
  ...person,
};

person.name = "Manu";

console.log(secondPerson);
