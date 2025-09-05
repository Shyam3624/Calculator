const display = document.forms["calcForm"]["display"];

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
  try {
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch (e) {
    display.value = "Error";
  }
}
