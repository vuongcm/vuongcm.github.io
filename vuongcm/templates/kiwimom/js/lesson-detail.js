$(document).ready(function() {
// Hiệu ứng + - slide
	$('#detail-lesson').css('min-height','25vh');
	if ($('.togg').closest('.about').children('.content').css('display') == 'none') {
        $('.togg').children(".minus").css('display', 'block');
        $('.togg').children(".plus").css('display', 'none');
    } else {
        $('.togg').children(".minus").css('display', 'none');
        $('.togg').children(".plus").css('display', 'block');
    }
    
    $('.togg').bind('click', function(){
        $(this).closest('.about').children('.content').slideToggle(600,'linear');
        $(this).children(".minus").toggle();
        $(this).children(".plus").toggle();
    });

});