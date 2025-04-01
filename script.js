function increaseValue(button) {
    let input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decreaseValue(button) {
    let input = button.nextElementSibling;
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}