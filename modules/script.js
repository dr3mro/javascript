import * as MathUtils from "./mathutils.mjs";
import * as People from "./people.mjs";

console.log(`PI: ${MathUtils.PI}`);
console.log(`Area: ${MathUtils.area(5).toFixed(2)} cm2`);
console.log(`Circumference: ${MathUtils.circumference(5).toFixed(2)} cm`);
console.log(`Volume: ${MathUtils.volume(5).toFixed(2)} cm3`);

const person = new People.Person("John Doe", 30);
person.greet();

console.log("Hello World");
