$(document).ready(function(){
	$('.header .hamburger-icon').on('click', function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('open');
	});

	$('.hero-banner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true
	});

	$('#testimonialCarousel').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true
	});
});