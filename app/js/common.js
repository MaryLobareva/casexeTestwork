$( document ).ready(function() {

    $('#main-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
		autoplayTimeout:4000
    })
});