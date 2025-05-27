let numbers = [1, 2, 3, 4, 5];

function doubleNumbers(num) {
  return num * 2;
}

function tripleNumbers(num) {
  return num * 3;
}
function displayNumbers(num) {
  console.log(num);
}

let tripledNumbers = numbers.map(tripleNumbers);
tripledNumbers.forEach(displayNumbers);
