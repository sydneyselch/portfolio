var $btn = $('.colour-btn');
var $pink = $('.pink');
var $green = $('.green');
var $blue = $('.blue');
var $maroon = $('.maroon');
var $gray = $('.gray');


$btn.on('click', function () {
    $pink.toggleClass({
        '.green'
        '.maroon'
        '.blue'
        '.gray'
    });
});





var $lightbox = $('.lightbox');
var $body = $('.body'); 
var $scrollOff = $('.scrolloff');
var $work = $('.work');

$work.on('click', function () {
    $body.addClass('.scrolloff');  
});