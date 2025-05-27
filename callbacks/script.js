hello(goodbye);

function hello(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 3000);
}

function goodbye() {
  console.log("goodbye");
}
