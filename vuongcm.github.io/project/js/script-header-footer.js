$(document).ready(function() {
	$('.ca-menu>li').height($('.ca-menu>li').width());
	$('.sub-menu').width($('.ca-menu').width() * 0.9);
	$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
	/*$('.navbar-nav > li a').height($('#nav-2 .logo-menu').height());
	$('.nav-item').height($('#nav-2 .logo-menu').height());*/
	// màn hình 768
	$(window).resize(function(){
		$('.ca-menu>li').height($('.ca-menu>li').width());
		$('.sub-menu').width($('.ca-menu').width() * 0.9);
		$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
	});
});