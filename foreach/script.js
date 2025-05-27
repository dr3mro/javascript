let numbers = [1, 2, 3, 4, 5];

function displayNumbers(num) {
  console.log(num);
}

function doubleNumbers(num, index, array) {
  array[index] = num * 2;
}

function tripleNumbers(num, index, array) {
  array[index] = num * 3;
}

function squareNumbers(num, index, array) {
  array[index] = Math.pow(num, 2);
}

function cubeNumbers(num, index, array) {
  array[index] = Math.pow(num, 3);
}

function toUpperCase(num, index, array) {
  array[index] = num.toUpperCase();
}

numbers.forEach(cubeNumbers);
numbers.forEach(displayNumbers);

let chars = ["a", "b", "c", "d", "e"];
chars.forEach(toUpperCase);
chars.forEach(displayNumbers);

let fruits = ["apple", "banana", "cherry", "date"];
function capitalizeFruits(fruit, index, array) {
  array[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
}

fruits.forEach(capitalizeFruits);
fruits.forEach(displayNumbers);
