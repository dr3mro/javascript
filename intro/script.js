/*
console.log("Hello World");
console.log("I like Pizza!");
window.alert("Hello World");
window.alert("I like Pizza!");


// This is a comment

document.getElementById("Title").textContent = "Hello World";
document.getElementById("Text").textContent = "I like Pizza!";


let x = 10;
let y = 20;

console.log(x + y);

let age = 40;
let price = 19.99;
let GPA = 3.5;
let firstName = "Amr";
let lastName = "Osman";

document.getElementById("Text").innerHTML = `Hello  ${firstName} ${lastName}  ,Your are ${age} years old`;

console.log("Hello " + firstName + " " + lastName);
console.log("Your are " + age + " years old");
console.log("Your GPA is " + GPA);
console.log("Your price is " + price);

console.log(typeof age);
console.log(typeof price);
console.log(typeof GPA);
console.log(typeof firstName);

let online = true;
let loggedIn = false;

console.log(typeof online);



let fullname = "Amr Osman";
let age = 40;
let isStudent = true;
let enrolled = false;

document.getElementById("pageTitle").innerHTML = `Hello ${fullname} , Your are ${age} years old`;
document.getElementById("p1").innerHTML = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
document.getElementById("p2").innerHTML = `Is student: ${isStudent}`;
document.getElementById("p3").innerHTML = `Is enrolled: ${enrolled}`;

let x = 10;
x**= 2;
console.log(x);

let y = 20 -x ;
let z = x + y
let a = x * y;
let b = x / y;
let c = x % y;
let d = x ** y;

d++;
d--;
console.log(d);

let username = window.prompt("What is your name?");
console.log(username);

*/

document.getElementById("btn").onclick = function () {
    let myName = document.getElementById("input").value;
    console.log(myName);
    document.getElementById("title").innerHTML = `Hello ${myName}.`;
}

document.getElementById("rst").onclick = function () {
    document.getElementById("title").innerHTML = "Hello World!";
    document.getElementById("input").value = "";
}