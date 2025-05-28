import { PI, area, circumference, volume } from "./MathUtils.js";
import { Person } from "./people.js";

console.log(`PI: ${PI}`);
console.log(`Area: ${area(5).toFixed(2)} cm2`);
console.log(`Circumference: ${circumference(5).toFixed(2)} cm`);
console.log(`Volume: ${volume(5).toFixed(2)} cm3`);

const person = new Person("John Doe", 30);
person.greet();

console.log("Hello World");
