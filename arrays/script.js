let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[0]);

fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);

console.log(fruits.length);
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("mango"));

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numbers = [1, 2, 3, 4, 5];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

let string = "Hello!";
console.log([...string].join(","));

let groupA = ["A", "B", "C", "D", "E"];
let groupB = ["F", "G", "H", "I", "J"];
let groupC = ["K", "L", "M", "N", "O"];

let groupX = [
  ...groupA,
  ...groupB,
  ...groupC,
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

console.log(groupX);

function sum(...n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
}

function average(...n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total / n.length;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5));

function combineStrings(...str) {
  let string = "";
  for (let s of str) {
    string += " " + s;
  }
  return string;
}

let string1 = combineStrings("Hello", "World", "!");
console.log(string1);

const fruits1 = [
  { name: "apple", price: 1.5 },
  { name: "banana", price: 2.9 },
  { name: "orange", price: 3.99 },
];

const cheapestFruit = fruits1.reduce((min, fruit) => {
  return fruit.price < min.price ? fruit : min;
});

const mostExpensiveFruit = fruits1.reduce((max, fruit) => {
  return fruit.price > max.price ? fruit : max;
});

console.log(mostExpensiveFruit);
console.log(cheapestFruit);
