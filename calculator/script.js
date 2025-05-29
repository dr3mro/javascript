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
  if (display.value === "Error") {
    display.value = "";
  }
  const lastChar = display.value.charAt(display.value.length - 1);

  if (isNaN(lastChar) && isNaN(value) && value !== ".") {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
