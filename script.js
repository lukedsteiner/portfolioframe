function smoothScroll() {
$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});
}

function mobileMenu() {
$('nav').click(function(event) {
    const hamburger = $(event.currentTarget);
    const menu = $('#myLinks');
    const pressedBool = $(hamburger).attr('aria-pressed') === 'true';
    menu.toggleClass('hidden');
    hamburger.attr('aria-pressed', !pressedBool);
})
}

$(smoothScroll);
$(mobileMenu);