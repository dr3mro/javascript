let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

const colors = ["red", "green", "blue"];
console.log(colors);

[colors[0], colors[1]] = [colors[1], colors[0]];
console.log(colors);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = numbers;
console.log(...rest);

const person1 = {
  name: "John",
  age: 25,
  job: "Developer",
};

const person2 = {
  name: "Patrick",
  age: 40,
  job: "Unemployed",
};

const { name, age, job, address = "none" } = person1;
console.log(name, age, job, address);

function printPerson({ name, age, job }) {
  console.log(name, age, job);
}
printPerson(person1);
