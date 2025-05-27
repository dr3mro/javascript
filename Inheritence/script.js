class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }

  move() {
    console.log(`${this.name} is moving.`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  jump() {
    console.log(`${this.name} is jumping.`);
    super.move();
  }
}

const rabbit1 = new Rabbit("Bunny", 2, "white");
rabbit1.show();
rabbit1.eat();
rabbit1.jump();

class Hawk extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  fly() {
    console.log(`${this.name} is flying.`);
    super.move();
  }
}

const hawk1 = new Hawk("Hawk", 3, "brown");
hawk1.show();
hawk1.eat();
hawk1.fly();
