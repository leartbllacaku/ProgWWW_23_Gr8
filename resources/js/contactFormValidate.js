function validateForm() {
    var name = document.getElementById('name').value;
    var mmail = document.getElementById('mail').value;

    // Check if name contains numbers
    if (/\d/.test(name)) {
        alert('Name cannot contain numbers');
        return;
    }

    // Check if email contains @
    if (!/@/.test(mmail)) {
        alert('Invalid email format. Must contain @ symbol.');
        return;
    }

    // If both checks pass, the form is valid
    alert('Form is valid! Submitting...');
    // You can submit the form or perform additional actions here
}