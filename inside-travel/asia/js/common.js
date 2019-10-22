$(document).ready(function() {
	//===========header
	if($('body').width() > 991){
		$('#menu-lv1-1').hover(function(){
			$('#menu-lv1-1').nextAll('.sub-menu-destinations').toggleClass('open-flex');
		});
		$('.sub-menu-destinations').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-1 a').addClass('open-opacity');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-1 a').removeClass('open-opacity');
		});

		$('#menu-lv1-2').hover(function(){
			$('#menu-lv1-2').nextAll('.sub-menu-travel').toggleClass('open-flex');
		});
		$('.sub-menu-travel').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-2 a').addClass('open-opacity');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-2 a').removeClass('open-opacity');
		});

		$('#menu-lv1-3').hover(function(){
			$('#menu-lv1-3').nextAll('.sub-menu-cruises').addClass('open-flex');
		},function(){
			setTimeout(function(){
				$('.sub-menu-cruises').removeClass('open-flex');
			}, 100);
		});
		$('.sub-menu-cruises').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-3 a').addClass('open-opacity');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-3 a').removeClass('open-opacity');
		});
	}
	$('header').next('section').css('margin-top',`${$('header').height()}px`);
	$(window).bind('scroll', function(){
		if ($('body').width() > 991) {
			if($(this).scrollTop() > 200){
	        	$('header .menu-wrap').addClass('menu-wrap-scroll');
	        } else{
	            $('header .menu-wrap').removeClass('menu-wrap-scroll');
	        }
		} else if($('body').width() > 520){
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','5%');
	        } else{
	            $('header .menu-wrap .brand').css('width','10%');
	        }
		} else{
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','15%');
	        } else{
	            $('header .menu-wrap .brand').css('width','20%');
	        }
		}
	});
	if ($('body').width() <= 991) {
		$('.search-nav button').click(function(){
			$('.main-menu').toggleClass('open-flex');
		});
		$('body').click(function(e){
			if (!$('.main-menu,.search-nav button').is(e.target) && $('.main-menu,.search-nav button').has(e.target).length === 0) {
	            $('.main-menu').removeClass('open-flex');
	        }
		});
		for(let i=0; i<3; i++){
			$('.sub-menu-title a').eq(i).click(function(){
				if($('.sub-menu').eq(i).attr('class').indexOf('open-flex') == -1){
					$('.sub-menu').removeClass('open-flex');
					$('.sub-menu-title a').removeClass('open-opacity');
					$('.sub-menu').eq(i).addClass('open-flex');
					$('.sub-menu-title a').eq(i).addClass('open-opacity');
				}
				else {
					$('.sub-menu').removeClass('open-flex');
					$('.sub-menu-title a').removeClass('open-opacity');
				}
				if($('body').width() <= 520){
					$('.main-menu').addClass('main-menu-transform');
				}
			});
		}
		$('.sub-menu-destinations li>a:first-child').click(function(){
			if($(this).nextAll('.menu-lv-3').attr('class').indexOf('open-block') == -1){
				$('.sub-menu-destinations li>a:first-child').nextAll('div').removeClass('open-block');
				$(this).nextAll('div').addClass('open-block');
			} else{
				$('.sub-menu-destinations li>a:first-child').nextAll('div').removeClass('open-block');
			}
		});
	}
	if ($('body').width() <= 520) {
		$('.menu-mobile-back button').click(function(){
			$('.main-menu').removeClass('main-menu-transform');
			$('.sub-menu').removeClass('open-flex');
		});
	}
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
	let bodyWidth = $('body').width();
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
	        nextArrow: `.wrap-slide-st2 .arrow-right`,
	        responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		      	slidesToShow: 1,
		        centerPadding: `${bodyWidth/4.5}px`
		      }
		    }
		  ]
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
	if($('body').width() > 767){
		$('.map-home').height($('.map-home img').height());
	}
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());
};