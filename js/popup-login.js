RESX = screen.width;
RESY = screen.height;
ANCHO = 300;
ALTO = 200;
POSX = (RESX - ANCHO) / 2;
POSY = (RESY - ALTO) / 2;

function popup(Link, Nombre) {

    open(Link, Nombre, "height=" + ALTO + ", width=" + ANCHO + ", top=" + POSY + ", left=" + POSX + ", resizable")

}