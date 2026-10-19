<script>

    function onButtonClick() {
        alert('You cklicked me!');

    }

    function onCheckboxChange() {
        const checkbox = document.getElementById('checkboxex');
        if (checkbox.checked) {
            alert('Checkbox is checked!');
        } else {
            alert('Why did you not you check the checkbox?');
        }
    }

    function onTextInputChange() {
        const textInput = document.getElementById('textinputex');
        const inputValue = textInput.value;
        alert(`You said: ${inputValue}`);
    }

</script>