function outerFunction() {
  const outerVariable = "outerVar";
  function innerFunction() {
    console.log(outerVariable + " called from innerFun");
  }
  innerFunction();
}

outerFunction();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();

function createGame() {
  let score = 0;
  function increment(pts) {
    score += pts;
  }
  function decrement(pts) {
    score -= pts;
  }
  function getScore() {
    return score;
  }
  return {
    increment,
    decrement,
    getScore,
  };
}
const game = createGame();
game.increment(10);
game.increment(5);
game.decrement(3);
console.log(game.getScore());
