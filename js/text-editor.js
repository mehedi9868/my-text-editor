document.getElementById('make-default').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.fontWeight = 'normal';
    textField.style.fontStyle = 'normal';
    textField.style.textDecoration = 'none';
    textField.style.textAlign = 'left';
    textField.style.fontSize = '16' + 'px';
    textField.value = textField.value.toLowerCase();
    textField.style.color = 'black';
})
document.getElementById('make-bold').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.fontWeight = 'bold';
})
document.getElementById('make-italic').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.fontStyle = 'italic';
})
document.getElementById('make-underlined').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.textDecoration = 'underline';
})

document.getElementById('text-left').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.textAlign = 'left';
})
document.getElementById('text-right').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.textAlign = 'right';
})
document.getElementById('text-center').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.textAlign = 'center';
})
document.getElementById('text-justify').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.style.textAlign = 'justify';
})

document.getElementById('text-size').addEventListener('click', function () {
    const textField = getElement('text-field');
    const textSize = document.getElementById('text-size').value;
    textField.style.fontSize = textSize + 'px';
})
document.getElementById('toggle').addEventListener('click', function () {
    const textField = getElement('text-field');
    textField.value = textField.value.toUpperCase();
})
document.getElementById('text-color').addEventListener('input', function () {
    const textField = getElement('text-field');
    const hexColor = document.getElementById('text-color').value;
    textField.style.color = hexColor;
})
