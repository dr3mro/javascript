function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.start = function () {
    console.log(`Starting ${model}.`);
  };
}

const bmw = new Car("BMW", "X5", 2019, "black");
const audi = new Car("Audi", "A4", 2018, "white");
const mercedes = new Car("Mercedes", "C-Class", 2017, "silver");
console.log(bmw);
console.log(audi);
console.log(mercedes);

console.log(bmw.start());
console.log(audi.start());
console.log(mercedes.start());
