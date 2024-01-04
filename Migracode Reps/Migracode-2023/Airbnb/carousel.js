$(document).ready(function(){
    $('#carousel').slick({
        slidesToShow: 7, // Muestra el máximo posible, dependiendo del ancho
        slidesToScroll: 5, // Desplaza 4 elementos a la vez
        variableWidth: true, // Ancho variable para mostrar todos los elementos
        prevArrow: $('#prevButton'),
        nextArrow: $('#nextButton'),
    });
});