$(document).ready(function() {
	let bodyWidth = $('body').width();
	$('.btn-bar-toggle').click(function(){
		let mainMenuWidth = $('header').outerWidth() == 50 ?  '600px' : '50px';
		$('.menu-level-2').slideUp(300);
		$('.menu-level-3').slideUp(300);
		$('header').css('max-width', mainMenuWidth);
		$('.follow-top').fadeToggle(300);
	});
	$('.title-level-1>a').click(function(){
		$('header').css('max-width', '600px');
		$(this).parent('.title-level-1').siblings('.title-level-1').children('.menu-level-2').slideUp(300);
		$(this).next('.menu-level-2').slideToggle(300);
		$('.follow-top').fadeIn(300);
	});
});