console.log("Hello World");

let string = "  Hello World  ";
console.log(string.trim());
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.lastIndexOf("o"));
console.log(string.indexOf("o"));
console.log(string.slice(0, 5));
console.log(string.slice(6));
console.log(string.slice(-5));
console.log(string.startsWith("Hello"));
console.log(string.endsWith("World"));
console.log(string.includes("World"));
console.log(string.replace("World", "Universe"));
string = "Hello World";
console.log(string.padEnd(20, "."));
console.log(string.padStart(20, "."));
console.log(string.concat("!"));

let phoneNumber = "052-1234567";
console.log(phoneNumber.replace("-", ""));

let fullname = "John Doe";
let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);

let email = "john.doe@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(domain);
console.log(email.trimEnd().trimStart());
console.log(firstname.trim().charAt(0).toLocaleUpperCase() + firstname.trim().slice(1));