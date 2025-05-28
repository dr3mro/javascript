const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayofweek = date.getDay();
console.log(year, month, day, hour, minute, second, dayofweek);

console.log(date.toString());
