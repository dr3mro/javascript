const display = document.getElementById("display");

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  display.value += value;
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
