function func1(callback) {
  console.log("func1");
  callback();
}

function func2() {
  console.log("func2");
}

func1(func2);
console.log("Hello World");
