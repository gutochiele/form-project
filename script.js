function check() {
    var input = document.getElementById('confirm-password');
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('The passwords don\'t match.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}