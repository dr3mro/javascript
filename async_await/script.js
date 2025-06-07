function func1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("func1");
    }, 3000);
  });
}
function func2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("func2");
    }, 1000);
  });
}

function func3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("func3");
    }, 1500);
  });
}

async function func_async() {
  const f1_result = await func1();
  const f2_result = await func2();
  const f3_result = await func3();

  console.log(f2_result);
  console.log(f1_result);
  console.log(f3_result);
}
func_async();
