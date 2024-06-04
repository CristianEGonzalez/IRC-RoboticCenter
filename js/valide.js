document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var charla = document.getElementById('charla').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var email = document.getElementById('email').value;
    var observaciones = document.getElementById('observaciones').value;
    var messageElement = document.getElementById('message');

    if (charla === '' || fecha === '' || hora === '' || email === '') {
      messageElement.innerHTML = '<p class="error">Please fill out all required fields.</p>';
    } else {
      messageElement.innerHTML = '<p class="success">Attendance reserved successfully.</p>';
      document.getElementById('registrationForm').reset();
    }
  });