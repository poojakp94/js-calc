// This is the event listener
function onClickNum(value) {
  const inputValue = document.getElementById("inputBox").innerHTML; // accessing the div value
  document.getElementById("inputBox").innerHTML = inputValue + value;
}

function addClickEvent(button) {
  const value = button.value;
  button.addEventListener("click", function() {
    onClickNum(value);
  });
}

function evaluateExpression() {
  const expression = document.getElementById("inputBox").innerHTML;
  var result = eval(expression);
  document.getElementById("inputBox").innerHTML = result;
}

const buttons = document.getElementsByClassName("num-value"); // We get HTML collection of buttons (objects)
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(addClickEvent);

const equalButton = document.getElementById("equalId");
equalButton.addEventListener("click", evaluateExpression);

document.getElementById("clearButton").addEventListener("click", function() {
  document.getElementById("inputBox").innerHTML = "";
});
