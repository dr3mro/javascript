const display = document.getElementById("display");

let timer = null;

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  display.textContent = "00:00:00";
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  timer = null;
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor(elapsedTime % 100)
    .toString()
    .padStart(2, "0");
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
