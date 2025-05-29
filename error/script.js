const divident = window.prompt("enter a number");
const divisor = window.prompt("enter a number");

try {
  if (Number(divisor) === 0) {
    throw new Error("divisor cannot be 0");
  }
  console.log(divident / divisor);
} catch (err) {
  console.error(err);
} finally {
  console.log("this will always run");
}
