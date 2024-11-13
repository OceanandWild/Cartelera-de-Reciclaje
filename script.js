let paginaActual = 0;
const paginas = document.querySelectorAll('.pagina');

function cambiarPagina(direccion) {
    paginas[paginaActual].classList.remove('pagina-activa');

    paginaActual += direccion;
    if (paginaActual < 0) paginaActual = paginas.length - 1;
    if (paginaActual >= paginas.length) paginaActual = 0;

    paginas[paginaActual].classList.add('pagina-activa');
}
