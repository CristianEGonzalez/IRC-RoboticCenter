
    const formulario = document.getElementById("formlogin");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        var user = document.getElementById('usuario').value;
        var pass = document.getElementById('password').value;

        if (user === 'agustina' && pass==='123') {
            var url = "alumno.html?username=" + user + "&name=Agustina Ledesma";
            window.location.href = url;
        } else if (user === 'rodrigo' && pass==='123'){
            var url = "docente.html?username=" + user + "&name=Rodrigo Cianciulli";
            window.location.href = url;
        }
        else {
            alert("Usuario incorrecto.");
        }
    });