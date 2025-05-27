let counter = 0;

const counterLbl = document.getElementById("counterLbl");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

counterLbl.textContent = counter;
increaseBtn.onclick = function() {
    counterLbl.textContent = ++counter;
}

decreaseBtn.onclick = function() {
    counterLbl.textContent = --counter;
}

resetBtn.onclick = function() {
    counter = 0;
    counterLbl.textContent = counter;
}