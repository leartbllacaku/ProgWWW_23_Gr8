document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var partySize = document.getElementById("partySize").value;
    var errors = [];
    if (!date || !time || !name || !phone || !partySize) {
      errors.push("Please fill in all fields");
    } else {
      if (!isValidName(name)) {
        errors.push("Invalid name. Please enter only letters for the name.");
      }
      if (!isValidPhone(phone)) {
        errors.push(
          "Invalid phone number. Please enter a valid phone number starting with a + and containing only numbers."
        );
      }
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      event.preventDefault();
    }
  });

  function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }

  function isValidPhone(phone) {
    return /^\+\d+$/.test(phone);
  }
});
