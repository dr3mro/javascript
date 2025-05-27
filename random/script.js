const numberLabel = document.getElementById('randomNum');
const rollBtn = document.getElementById('rollBtn');

rollBtn.addEventListener('click', function () {
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
    const randomNum2 = Math.floor(Math.random() * 6) + 1;
    dice1.textContent = randomNum1;
    dice2.textContent = randomNum2;
});