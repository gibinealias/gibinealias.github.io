$(document).ready(function(){
	$('.header .hamburger-icon').on('click', function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('open');
	});

	$('#whyUsCarousel').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true
	});
});