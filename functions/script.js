function hello1() {
  console.log("hello world!");
}

const hello2 = function () {
  console.log("hello world!");
};

const hello3 = () => {
  console.log("hello world!");
};

// hello1();
// hello2();
// hello3();

setTimeout(hello1, 1000);
setTimeout(hello2, 2000);
setTimeout(hello3, 3000);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => console.log(number));

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const sumNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sumNumbers);

const maxNumbers = numbers.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue);
});
console.log(maxNumbers);

const names = ["john", "jane", "bob", "alice", "mike"];
console.log(names);
const capitalized_names = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized_names);
