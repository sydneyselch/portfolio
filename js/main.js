var currentColour = 0;
var colours = ['pink', 'blue', 'maroon', 'green', 'gray'];
var $btn = $('.colour-btn');

$btn.on('click', function () {
    $('.lb-nav li, .footer, .lb-close, colour-btn').removeClass(colours[currentColour]);
    
     currentColour++;
    
    if (currentColour >= colours.length) {
        currentColour = 0;    
    }
    
    $('.lb-nav li, .footer, .lb-close, colour-btn').addClass(colours[currentColour]);
});
