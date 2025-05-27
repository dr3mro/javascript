const prices = [100, 200, 300, 400, 500];

const total = prices.reduce(sum, 0);

function sum(acc, price) {
  return acc + price;
}

console.log(total);

const grades = [75, 40, 30, 20, 10];
const maxGrade = grades.reduce(max, 0);
function max(acc, grade) {
  return Math.max(acc, grade);
}
console.log(maxGrade);

function min(acc, grade) {
  return Math.min(acc, grade);
}

const minGrade = grades.reduce(min, 100);
console.log(minGrade);
