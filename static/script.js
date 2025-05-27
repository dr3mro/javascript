class User {
  static users = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.users++;
  }

  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  static usersCount() {
    console.log(`Users: ${User.users}`);
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user1 = new User("John", 30);
user1.show();
user1.sayHello();
User.usersCount();
