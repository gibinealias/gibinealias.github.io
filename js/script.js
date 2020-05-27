$(document).ready(function(){
	$('.header .hamburger-icon').on('click', function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('open');
	});

	$('.menu-item.has-sub-menu > .menu-link').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});
});