const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

console.dir(textInput);

function changeName(event) {
  if (textInput.value != '' && textInput.value.trim()) {
    textOutput.innerHTML = textInput.value.trim();
  } else {
    textOutput.innerHTML = 'Anonymous';
  }
}
textInput.addEventListener('input', changeName);
