class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
  }

  showAge() {
    const currentYear = new Date().getFullYear();
    console.log(
      "This car has been in market for " + (currentYear - this.year) + " years"
    );
  }
}

const bmw = new Car("BMW", "X5", 2022);
bmw.display();
bmw.showAge();
