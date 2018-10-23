$("body").on("click",".btn-open-menu", function (){
	event.preventDefault();

	$('.btn-open-menu')
		.addClass('btn-open-menu-non-active');

	$('.btn-close-menu')
		.addClass('btn-close-menu-active');

	$('.header-menu')
		.removeClass('header-menu-off')
		.addClass('header-menu-on');


        $('body,html').animate({scrollTop:375 }, 1500);

});

$("body").on("click",".btn-close-menu", function (){
	event.preventDefault();

	$('.btn-close-menu')
		.removeClass('btn-close-menu-active');

	$('.btn-open-menu')
		.removeClass('btn-open-menu-non-active');

	$('.header-menu')
		.removeClass('header-menu-on')
		.addClass('header-menu-off');


    $('body,html').animate({scrollBottom:375 }, 1500);

});

$(function(){
	
    // Initialize the gallery
    $('#thumbs a').touchTouch();

});