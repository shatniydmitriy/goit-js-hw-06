const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange (event) {

spanRef.textContent = event.currentTarget.value;
console.log(event.currentTarget.value);
if (event.currentTarget.value === '') {
    spanRef.textContent = 'Anonymous';
} 
}