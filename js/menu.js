$(function () {
    var boton = $('#btn-menu');
    var fondo_enlace = $('#fondo-enlace');
    var barra_lateral = $('#barra-lateral-izquierda');

    boton.on('click', function (e) {
        fondo_enlace.toggleClass('active');
        barra_lateral.toggleClass('active');
        e.preventDefault();
    })

    fondo_enlace.on('click', function (e) {
        fondo_enlace.toggleClass('active');
        barra_lateral.toggleClass('active');
        e.preventDefault();
    })

}())