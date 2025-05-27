let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

function uselessFilter(numbers) {
  return numbers.filter(() => true);
}
console.log(evenNumbers(numbers));
console.log(uselessFilter(numbers));

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let vegetables = ["carrot", "broccoli", "spinach", "tomato", "potato"];

function filterFruits(array) {
  return array.filter((element) => fruits.includes(element));
}

function filterVegetables(array) {
  return array.filter((element) => vegetables.includes(element));
}

let busket = [
  "apple",
  "banana",
  "carrot",
  "cherry",
  "spinach",
  "date",
  "elderberry",
  "tomato",
  "potato",
];

let fruitsInBusket = filterFruits(busket);
let vegetablesInBusket = filterVegetables(busket);

console.log("fruits: " + fruitsInBusket);
console.log("vegetables: " + vegetablesInBusket);
