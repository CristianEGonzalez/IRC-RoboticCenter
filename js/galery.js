        fotos = new Array("./media/foto1.png", "./media/foto2.png", "./media/foto3.png", "./media/foto4.png");
        cont = 0;
        llamada = "";

        function galeria(boton) {
            img = document.getElementById("imagen");
            clearTimeout(llamada)
            cont += boton;
            img.src = fotos[cont]
            if (cont > fotos.length - 1) {
                cont = 0
                img.src = fotos[cont]
            }
            else {
                if (cont < 0) {
                    cont = fotos.length - 1;
                    img.src = fotos[cont]
                }
            }
        }

        function auto() {
            clearTimeout(llamada);
            cont += 1;
            img = document.getElementById("imagen");
            if (cont > fotos.length - 1) {
                cont = 0;
            }
            img.src = fotos[cont]
            llamada = setTimeout("auto()", 1000)
        }
