const person1 = {
  name: "John",
  age: 30,
  city: "New York",
  isEmployed: true,
  hobbies: ["reading", "swimming", "cooking"],

  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
  eat: () => console.log("I am eating pizza!"),
};

const person2 = {
  name: "Jane",
  age: 25,
  city: "London",
  isEmployed: false,
  hobbies: ["painting", "dancing", "singing"],

  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },

  eat: () => console.log("I am eating patty"),
};

console.log(person1);
console.log(person2);

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();
