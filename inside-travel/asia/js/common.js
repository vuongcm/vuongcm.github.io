$(document).ready(function() {
	$('#menu-lv1-1 a').hover(function(){
		$('#menu-lv1-1').nextAll('.sub-menu-destinations').toggleClass('open-flex');
	});
	$('.sub-menu-destinations').hover(function(){
        $(this).css('display','flex');
        $('#menu-lv1-1 a').addClass('open-opacity');
    },function(){
        $(this).css('display','none');
        $('#menu-lv1-1 a').removeClass('open-opacity');
	});

	$('#menu-lv1-2 a').hover(function(){
		$('#menu-lv1-2').nextAll('.sub-menu-travel').toggleClass('open-flex');
	});
	$('.sub-menu-travel').hover(function(){
        $(this).css('display','flex');
        $('#menu-lv1-2 a').addClass('open-opacity');
    },function(){
        $(this).css('display','none');
        $('#menu-lv1-2 a').removeClass('open-opacity');
	});

});
window.onload = function() {
	$('.map-home').height($('.map-home img').height());
};