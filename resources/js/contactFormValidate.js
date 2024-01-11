function validateForm() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if name and email are both blank
    if (name.trim() === '' || mmail.trim() === '') {
        alert('Name and email must be completed');
        return;
    }

    // Check if name contains numbers
    if (/\d/.test(name)) {
        alert('Name cannot contain numbers');
        return;
    }

    // Check if email contains @
    if (!/@/.test(mail)) {
        alert('Invalid email format. Must contain @ symbol.');
        return;
    }

    // If both checks pass, the form is valid
    alert('Form is valid! Submitting...');
    // You can submit the form or perform additional actions here
}