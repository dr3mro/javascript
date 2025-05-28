function createTimer() {
  let count = 0;
  const timerView = document.getElementById("timer");
  function increment() {
    count++;
    timerView.innerHTML = count;
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

function stopTimer(timeoutid) {
  clearTimeout(timeoutid);
}

const timer = createTimer();
let timeoutid;

document.getElementById("start").onclick = () => {
  intervalId = setInterval(timer.increment, 1000);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 100000);
};
document.getElementById("stop").onclick = () => {
  stopTimer(intervalId);
};
