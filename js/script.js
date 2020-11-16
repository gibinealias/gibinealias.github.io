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

	$('.tab-header').on('click', function(){
		$('.tab-header').removeClass('selected');
		$(this).addClass('selected');
		$('.tab-content').addClass('d-none');
		$('#'+$(this).data('tab')).removeClass('d-none');
		this.scrollIntoView({behavior: "smooth"});
	});
});