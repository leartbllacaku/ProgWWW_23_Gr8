document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event){
        var name = document.getElementById('name').value;
        var mail = document.getElementById('mail').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var errors = [];
      if (!name || !mail || !subject || !message) {
        errors.push('Please fill in all fields');
      } else {
        if (!isValidName(name)) {
          errors.push('Invalid name. Please enter only letters for the name.');
        }
        if (!isValidPhone(mail)) {
          errors.push('Invalid phone number. Please enter a valid email address scontaining a @.');
        }
      }
      if (errors.length > 0) {
        alert(errors.join('\n'));
        event.preventDefault(); 
      }
    });

    function isValidName(name) {
      return /^[a-zA-Z\s]+$/.test(name);
    }

    function isValidPhone(mail) {
        return /@/.test(mail);
    }
  });