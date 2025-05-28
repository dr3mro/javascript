const fruits1 = [
  { name: "apple", price: 1.5 },
  { name: "banana", price: 2.9 },
  { name: "orange", price: 3.99 },
];

const sortedFruits = fruits1.sort((left, right) => left.price - right.price);
sortedFruits.forEach((fruit) => console.log(fruit.name));
