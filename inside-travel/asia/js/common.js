$(document).ready(function() {
	//===========header
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

	$('#menu-lv1-3 a').hover(function(){
		$('#menu-lv1-3').nextAll('.sub-menu-cruises').toggleClass('open-flex');
	});
	$('.sub-menu-cruises').hover(function(){
        $(this).css('display','flex');
        $('#menu-lv1-3 a').addClass('open-opacity');
    },function(){
        $(this).css('display','none');
        $('#menu-lv1-3 a').removeClass('open-opacity');
	});
	$('header').next('section').css('margin-top',`${$('header').height()}px`);
	$(window).bind('scroll', function(){
			nav1Height = $('#nav-1').height() + 100;
	        if($(this).scrollTop() > 100){
	        	$('.main-menu').css('order','2');
	        	$('.brand').css('display','none');
	        } else{
	            $('#nav-2').css('display','none');
	        }
        });
//==============end header==============
	$('.tooltip>span').each(function(){
		$(this).css('left',`-${$(this).width()/2 -7}px`);
	});
	// slick map home
	if ($('#slick-slider-map').length > 0) {
		$(`#slick-slider-map .gallery`).slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true,
	        //initialSlide: c,
	        useTransform: false,
	        prevArrow: `#slick-slider-map .arrow-left`,
	        nextArrow: `#slick-slider-map .arrow-right`
	    });
		for (let i=0; i < $('#slick-slider-map .item').length; i++){
			$('.map-home .map-coo').eq(i).on('click',function(){
				$(`#slick-slider-map .gallery`).slick("slickGoTo", i);
				$('.map-home .map-coo').removeClass('map-coo-active');
				$(this).addClass('map-coo-active');
			});
		}
		$(`#slick-slider-map .gallery`).on('afterChange',function(event, slick, currentSlide){
			$(`#slick-slider-map .nav-arrows strong`).text(`${slick.currentSlide + 1}`);
			$('.map-home .map-coo').removeClass('map-coo-active');
			$('.map-home .map-coo').eq(slick.currentSlide).addClass('map-coo-active');
		});
	}
	//carousel-st1
	if ($('.wrap-slide-st1').length > 0) {
		$(`.wrap-slide-st1 .gallery`).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-slide-st1 .arrow-left`,
	        nextArrow: `.wrap-slide-st1 .arrow-right`
	    });
	}
	//carousel-st2
	if ($('.wrap-slide-st2').length > 0) {
		$(`.wrap-slide-st2 .gallery`).slick({
			slidesToShow: 3,
			infinite: true,
			centerMode: true,
			centerPadding: '0',
			adaptiveHeight: false,
			useTransform: false,
			initialSlide: 2,
	        prevArrow: `.wrap-slide-st2 .arrow-left`,
	        nextArrow: `.wrap-slide-st2 .arrow-right`
	    });
	}
	//carousel-st3
	if ($('.wrap-slide-st3').length > 0) {
		$(`.wrap-slide-st3 .gallery`).slick({
			dots: true,
			dotsClass: 'wrap-dots',
			infinite: false,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 7000,
			arrows: false
		});
	}
});
window.onload = function() {
	$('.map-home').height($('.map-home img').height());
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());
};