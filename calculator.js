function onClickNum(value) {
  console.log(value);
}

function addClickEvent(button) {
  const value = button.value;
  button.addEventListener('click', function() {
    onClickNum(value);
  });
}

const buttons = document.getElementsByClassName('num-value'); // We get HTML collection of buttons (objects)
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(addClickEvent);
