$(document).ready(function() {
	$('.ca-menu>li').height($('.ca-menu>li').width());
	$('.sub-menu').width($('.ca-menu').width() * 0.9);
	$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
	if ($('body').width() > 767) {
		$('.navbar-nav > li a').height($('#nav-2 .logo-menu').height());
		$('.nav-item').height($('#nav-2 .logo-menu').height());
		$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').removeClass('dropdown-toggle').removeAttr('data-toggle');
	} else {
		$('.navbar-nav > li a').removeAttr('style');
		$('.nav-item').removeAttr('style');
		$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
	}
	$(window).resize(function(){
		$('.ca-menu>li').height($('.ca-menu>li').width());
		$('.sub-menu').width($('.ca-menu').width() * 0.9);
		$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
		if ($('body').width() > 767) {
			$('.navbar-nav > li a').height($('#nav-2 .logo-menu').height());
			$('.nav-item').height($('#nav-2 .logo-menu').height());
			$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').removeClass('dropdown-toggle').removeAttr('data-toggle');
		} else {
			$('.navbar-nav > li a').removeAttr('style');
			$('.nav-item').removeAttr('style');
			$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
		}
	});
});