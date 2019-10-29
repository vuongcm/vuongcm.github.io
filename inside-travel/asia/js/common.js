$(document).ready(function() {
	//$('body').css('--bodyWidth',`${$('body').width()}px`);
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
	let headerHeight = $('header').height();
	$('header').next('section').css('padding-top',`${headerHeight}px`);
	$('.banner-top .bg-parallax').css('background-position-y',`${headerHeight}px`);
	$(window).bind('scroll', function(){
		if ($('body').width() > 991) {
			if($(this).scrollTop() > 250){
	        	$('header .menu-wrap').addClass('menu-wrap-scroll');
	        	$('.banner-top .bg-parallax').css('background-position-y',`20px`);
	        } else{
	            $('header .menu-wrap').removeClass('menu-wrap-scroll');
	            $('.banner-top .bg-parallax').css('background-position-y',`${headerHeight}px`);
	        }
		} else if($('body').width() > 520){
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','10%');
	        	$('.banner-top .bg-parallax').css('background-position-y',`20px`);
	        } else{
	            $('header .menu-wrap .brand').css('width','15%');
	            $('.banner-top .bg-parallax').css('background-position-y',`${headerHeight}px`);
	        }
		} else{
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','15%');
	        	$('.banner-top .bg-parallax').css('background-position-y',`20px`);
	        } else{
	            $('header .menu-wrap .brand').css('width','20%');
	            $('.banner-top .bg-parallax').css('background-position-y',`${headerHeight}px`);
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
		$(this).css('left',`-${$(this).width()/2 -6}px`);
	});
	$('.tooltip>a>span').each(function(){
		$(this).css('left',`-${$(this).width()/2 -8}px`);
	});
	let heightTrip = 91+$('.content-trip').height()+$('.trip a').height();
	$('.trip').height(heightTrip);
	$('.content-trip').hover(function(){
		$(this).parent('.trip').toggleClass('trip-active');
	});

	/*// ==============vẽ canvas==============
	let context = document.getElementById('canvas').getContext('2d')
	context.beginPath();
	context.arc(250,250,200,Math.PI/4,0);
	context.strokeStyle = '#fff';
    context.stroke();
    context.beginPath();
    context.moveTo(450,250);
    context.lineTo(450,440);
    context.stroke();
    context.beginPath();
	context.arc(450,382,58,Math.PI/2,Math.PI/1.04);
    context.stroke();*/
	// slick map home
	if ($('#slick-slider-map').length > 0) {
		$(`#slick-slider-map .gallery`).slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true,
	        lazyLoad: 'ondemand',
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
			lazyLoad: 'ondemand',
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
			lazyLoad: 'ondemand',
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
	//================modal===================
	$('.btn-contact').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#contact-modal').removeClass('close-display');
		$('body').css('--modalWidth',`${$('#contact-modal').outerWidth()}px`);
	});
	$('.btn-create-trip').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#creat-trip-modal').removeClass('close-display');
		$('body').css('--modalWidth',`${$('#creat-trip-modal').outerWidth()}px`);
	});
	$('.modal-container').on('click',function(){
		$(this).addClass('close-display');
		$('.modal').addClass('close-display');
	});
	$('.btn-close').click(function(){
		$(this).closest('.modal').addClass('close-display');
		$('.modal-container').addClass('close-display');
	});

	//============search box=============
	$('.select-st1 .text').on('click',function(){
		$(this).next('.value').toggleClass('open-block');
	});
	$('.select-st2 .text').on('click',function(){
		$(this).next('.value').toggleClass('open-block');
	});
	$('body').click(function(e){
		if (!$('.booking-step-where .text,.booking-step-where .value').is(e.target) && $('.booking-step-where .text,.booking-step-where .value').has(e.target).length === 0) {
            $('.booking-step-where .value').removeClass('open-block');
        }
        if(!$('.booking-step-when .text,.booking-step-when .value').is(e.target) && $('.booking-step-when .text,.booking-step-when .value').has(e.target).length === 0){
        	$('.booking-step-when .value').removeClass('open-block');
        }
        if(!$('.booking-step-room .text,.booking-step-room .value').is(e.target) && $('.booking-step-room .text,.booking-step-room .value').has(e.target).length === 0){
        	$('.booking-step-room .value').removeClass('open-block');
        }
        if(!$('.booking-step-promo .text,.booking-step-promo .value').is(e.target) && $('.booking-step-promo .text,.booking-step-promo .value').has(e.target).length === 0){
        	$('.booking-step-promo .value').removeClass('open-block');
        }
        if(!$('.booking-step-time .text,.booking-step-time .value').is(e.target) && $('.booking-step-time .text,.booking-step-time .value').has(e.target).length === 0){
        	$('.booking-step-time .value').removeClass('open-block');
        }
        if(!$('.booking-step-plan .text,.booking-step-plan .value').is(e.target) && $('.booking-step-plan .text,.booking-step-plan .value').has(e.target).length === 0){
        	$('.booking-step-plan .value').removeClass('open-block');
        }
	});
	let number1 = $('.booking-step-room .btn-value').length;
	for (let i=0; i<number1; i++){
		$('.booking-step-room .btn-value').eq(i).click(function(){
			if($(this).attr('class').search('checked') != -1){
				$('.booking-step-room .btn-value').removeClass('checked');
			} else{
				$('.booking-step-room .btn-value').removeClass('checked');
				$(this).addClass('checked');
				if(i<(number1/2)){
					$('.booking-step-room .btn-value').eq(number1/2 + i).addClass('checked');
				} else{
					$('.booking-step-room .btn-value').eq(i - number1/2).addClass('checked');
				}
			}
			if($(this).closest('.value').find('.checked').length == 0){
				$('.booking-step-room').find('.text b').html(`No. of travelers`);
				$('#creat-trip-modal .booking-step-room').find('select option').val('');
			} else{
				$('.booking-step-room').find('.text b').html($(this).children('b').text());
				$('#creat-trip-modal .booking-step-room').find('select option').val($(this).children('b').text());
			}
			$(this).closest('.value').removeClass('open-block');
		});
	}
	let number2 = $('.booking-step-promo .btn-value').length;
	for (let i=0; i<number2; i++){
		$('.booking-step-promo .btn-value').eq(i).click(function(){
			if($(this).attr('class').search('checked') != -1){
				$('.booking-step-promo .btn-value').removeClass('checked');
			} else{
				$('.booking-step-promo .btn-value').removeClass('checked');
				$(this).addClass('checked');
				if(i<(number2/2)){
					$('.booking-step-promo .btn-value').eq(number2/2 + i).addClass('checked');
				} else{
					$('.booking-step-promo .btn-value').eq(i - number2/2).addClass('checked');
				}
			}
			if($(this).closest('.value').find('.checked').length == 0){
				$('.booking-step-promo').find('.text b').html(`Budget Per Person`);
				$('#creat-trip-modal .booking-step-promo').find('select option').val('');
			} else{
				$('.booking-step-promo').find('.text b').html($(this).children('b').text());
				$('#creat-trip-modal .booking-step-promo').find('select option').val($(this).children('b').text());
			}
			$(this).closest('.value').removeClass('open-block');
		});
	}
	let number3 = $('.booking-step-where .btn-value').length;
	for (let i=0; i<number3; i++){
		$('.booking-step-where .btn-value').eq(i).click(function(){
			$(this).toggleClass('checked');
			if(i<(number3/2)){
				$('.booking-step-where .btn-value').eq(number3/2 + i).toggleClass('checked');
			} else{
				$('.booking-step-where .btn-value').eq(i - number3/2).toggleClass('checked');
			}
			$('#creat-trip-modal .booking-step-where').children('select').html('');
			let numberValue = $('.booking-step-where .checked').length/2;
			for(let j=0; j < numberValue; j++){
				$('#creat-trip-modal .booking-step-where').children('select').append(`<option value="${$(this).closest('.value').find('.checked b').eq(j).text()}" selected></option>`);
			}
			if(numberValue == 0){
				$('.booking-step-where').find('.text b').html(`Where do you want to go?`);
			} else{
				$('.booking-step-where').find('.text b').html(`${numberValue} selected`);
			}

		});
	}
	let number4 = $('.booking-step-when .btn-value').length;
	for (let i=0; i<number4; i++){
		$('.booking-step-when .btn-value').eq(i).click(function(){
			$(this).toggleClass('checked');
			if(i<(number4/2)){
				$('.booking-step-when .btn-value').eq(number4/2 + i).toggleClass('checked');
			} else{
				$('.booking-step-when .btn-value').eq(i - number4/2).toggleClass('checked');
			}
			$('#creat-trip-modal .booking-step-when').children('select').html('');
			let numberValue = $('.booking-step-when .checked').length/2;
			for(let j=0; j < numberValue; j++){
				$('#creat-trip-modal .booking-step-when').children('select').append(`<option value="${$(this).closest('.value').find('.checked b').eq(j).text()}" selected></option>`);
			}
			if(numberValue == 0){
				$('.booking-step-when').find('.text b').html(`Your Interests?`);
			} else{
				$('.booking-step-when').find('.text b').html(`${numberValue} selected`);
			}

		});
	}
	$('.booking-step-time .btn-value').click(function(){
		if($(this).attr('class').search('checked') != -1){
			$(this).closest('.select-st2').find('.btn-value').removeClass('checked');
		} else {
			$(this).closest('.select-st2').find('.btn-value').removeClass('checked');
			$(this).addClass('checked');
		}
		if($(this).closest('.value').find('.checked').length == 0){
			$(this).closest('.select-st2').find('.text b').html(`When?`);
			$(this).closest('.select-st2').find('select option').val('');
		} else{
			$(this).closest('.select-st2').find('.text b').html($(this).children('b').text());
			$(this).closest('.select-st2').find('select option').val($(this).children('b').text());
		}
		$(this).closest('.value').removeClass('open-block');
	});
});
window.onload = function() {
	if($('body').width() > 767){
		$('.map-home').height($('.map-home img').height());
	}
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());
};
