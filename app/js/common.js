$( document ).ready(function() {

	$('#main-carousel').owlCarousel({
		loop:true,
		nav:true,
		items: 1,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout:4000
	})

	
	catalogItem();

	function catalogItem(url) {
		var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=Dt3U9e8PE8Ui9to0ediMZBvSOtcgJYbW&limit=5");

		xhr.done(function(response) { 
			var gifs = response.data;
			for(i in gifs) {
				$('.catalog').append('<a class="catalog-item" href=""><div class="catalog-item-img"><img src="'+ gifs[i].images.original.url +'"></div><p class="catalog-item-text">Самый клевый чайник, который надо купить!</p><p class="price">1 900 р.</p><i class="icon fas fa-cart-plus"></i></a>');
			}
		});
	}
});


window.onload = function(){
	// POP UP
	var popupBtn = document.querySelector('[data-btn-popup]');
	var popup = document.querySelector('[data-popup]');
	var popupClose = document.querySelector('[data-popup-close]');

	popupBtn.onclick = function(){
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';

	}
	popupClose.onclick = function() {
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0';
	}
	// END POP UP

	// PRELOADER
	setTimeout(function(){
		var load = document.querySelector('.preloader');
		if (!load.classList.contains('done')){
			load.classList.add('done');
		}
	}, 2000)
};


