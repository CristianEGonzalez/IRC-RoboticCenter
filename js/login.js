
    var urlParams = new URLSearchParams(window.location.search);
    var user = urlParams.get('username');
    var nombre = urlParams.get('name');

    document.addEventListener('DOMContentLoaded', function() {
        if (user) {
            document.getElementById('bienvenida').textContent = '¡Welcome, ' + user + '!';
            document.getElementById('legajo').textContent = nombre;
        } else {
            document.getElementById('bienvenida').textContent = 'User null';
        }
    });
