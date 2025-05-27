const temperature = document.getElementById('temperature');
const toCelsius = document.getElementById('celsius');
const toFahrenheit = document.getElementById('fahrenheit');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.onclick = function() {
    if (temperature.value === '') {
        alert('Please enter a temperature');
    } else {
        if (toCelsius.checked) {
            result.textContent = Number((temperature.value - 32) * 5/9).toFixed(1) + '°C';
        } else {
            result.textContent = Number((temperature.value * 9/5) + 32).toFixed(1) + '°F';
        }
    }
}