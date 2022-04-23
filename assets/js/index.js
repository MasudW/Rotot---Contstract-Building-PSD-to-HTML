$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar-nav').toggleClass('navshow');
    });
    $('.nav-link').click(function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar-nav').removeClass('navshow');
    });
    $('.btn, button, input[type="button"]').click(function () { 
        alert('Working')
    });
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        SpeedAsDuration: true,
    });
});