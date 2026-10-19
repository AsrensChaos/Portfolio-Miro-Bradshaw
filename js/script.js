function onButtonClick() {
    alert('You clicked me!')
}

function onCheckboxChange() {
    let checkbox = document.getElementById('checkboxex');
    if (checkbox.checked) {
        alert('Checkbox is checked!')
    }
    else {
    } 
}

function onTextInputChange() {
    let textInput = document.getElementById('textinputex');
    let inputValue = textInput.value;
    alert(`You said: ${inputValue}`)
}