$(document).ready(function() {
	//$('body').css('--bodyWidth',`${bodyWidth}px`);
	let bodyWidth = $('body').width();
	//===========header===================
	$('.promo-close').click(function(){
		$(this).parent('.promo-crisis').addClass('close-display');
		$('header').next('section').css('padding-top',`${$('header').height()}px`);
	});
	$('.login-top-st2>a').click(function(){
		$(this).next('.login-menu').toggleClass('open-block');
	});
	let headerHeight = $('header').height();
	$('header').next('section').css('padding-top',`${headerHeight}px`);
	$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	$(window).bind('scroll', function(){
		if (bodyWidth > 991) {
			if($(this).scrollTop() > 250){
				$('.promo-crisis').slideUp(250);
	        	$('header .menu-wrap-st2').addClass('menu-wrap-scroll');
	        	$('.bg-parallax').css('background-position-y',`20px`);
	        	$('.fab-box').css('right','0');
	        } else{
	        	$('.promo-crisis').slideDown(250);
	            $('header .menu-wrap-st2').removeClass('menu-wrap-scroll');
	            $('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            $('.fab-box').css('right','-46px');
	        }
		} else if(bodyWidth > 520){
			if($(this).scrollTop() > 100){
				$('.promo-crisis').slideUp(250);
	        	$('.fab-box').css('bottom','0');
	        } else{
	        	$('.promo-crisis').slideDown(250);
	            $('.fab-box').css('bottom','-50px');
	        }
		} else{
			if($(this).scrollTop() > 100){
				$('.promo-crisis').slideUp(250);
	        	$('.fab-box').css('bottom','0');
	        } else{
	        	$('.promo-crisis').slideDown(250);
	            $('.fab-box').css('bottom','0');
	        }
		}
	});
	if (bodyWidth <= 1199) {
		$('.btn-menu').click(function(){
			$('.main-menu-st2').toggleClass('open-block');
		});
		$('body').click(function(e){
			if (!$('.main-menu-st2,.btn-menu').is(e.target) && $('.main-menu-st2,.btn-menu').has(e.target).length === 0) {
	            $('.main-menu-st2').removeClass('open-block');
	        }
		});
		$('.title-sub-menu>a').click(function(){
			$(this).nextAll('.sub-menu-lv1').removeClass('main-menu-transform-1');
		});
		$('.sub-menu-lv1>button').click(function(){
			$(this).parent('.sub-menu-lv1').addClass('main-menu-transform-1');
		});
		$('.title-sub-travel-st2>.sub-menu-lv1>li>a').click(function(){
			$(this).nextAll('.sub-menu-lv2').removeClass('main-menu-transform-1');
		});
		$('.sub-menu-lv2>button').click(function(){
			$(this).parent('.sub-menu-lv2').addClass('main-menu-transform-1');
		});
	}
	if(bodyWidth < 1025){
    	$('.best-support article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','132px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('.wrap-slide-sp article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','500px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('body').delegate('.trip .content-trip','hover',function(){
	    	$(this).children('.paragraph').css('max-height','400px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    if($('.experience-container').length){
	    	$('.experience-container .col-xlg-4 article').hover(function(){
		    	$(this).css('max-height','400px');
		    },function(){
		    	$(this).css('max-height','152px');
		    });
	    }
	    if(bodyWidth > 479){
	    	$('.wrap-guide-step article').hover(function(){
		    	$(this).css('max-height','500px');
		    },function(){
		    	$(this).removeAttr('style');
		    });
	    }
    }
//==============end header==============
	if($('.trip-st2').length){
		/*$('.trip-st2').each(function(){
			let maxHeightCtTrip2 = $(this).find('.right-trip').outerHeight() - $(this).find('.head-trip').outerHeight() - $(this).find('.price-trip-box').outerHeight() - 22 + 'px';
			$(this).find('.paragraph').css('max-height',maxHeightCtTrip2);
		});*/
		$('.right-trip').each(function(){
			let priceTripheight = $(this).children('.price-trip-box').outerHeight();
			let heightTrip2 = $(this).children('.head-trip').outerHeight() + priceTripheight + $(this).children('.content-trip').outerHeight();
			$(this).height(heightTrip2);
			$(this).children('.content-trip').css('bottom',priceTripheight + 'px');
		});
		$('.trip-st2 .content-trip').hover(function(){
	    	$(this).children('.paragraph').css('max-height','210px');
	    },function(){
	    	//$(this).parent('.right-trip').outerHeight() - $(this).prev('.head-trip').outerHeight() - $(this).next('.price-trip-box').outerHeight() - 22 + 'px';
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	}
	$('body').delegate('.read-more-st1>a','click',function(){
		let paraHide = $(this).parent('.read-more-st1').prev('.paragraph-hide');
		paraHide.toggleClass('paragraph-show');
		if(paraHide.css('max-height') == 'none'){
			$(this).text('Less ...');
		} else{
			$(this).text('Read More ...');
		}
		if($(this).closest('.pull-up').length > 0){
			if(bodyWidth < 1200 && bodyWidth > 991){
				$('.pull-up').height($('.foreground').outerHeight()-190);
			} else if(bodyWidth <= 991){
				$('.pull-up').height($('.foreground').outerHeight()-120);
			} else{
				$('.pull-up').height($('.foreground').outerHeight()-220);
			}
		}
	});
	$('.read-more-st2>a').click(function(){
		let boxHide = $(this).parent('.read-more-st2').prev('.box-hidden');
		boxHide.toggleClass('paragraph-show');
		if(boxHide.css('max-height') == 'none'){
			$(this).text('... Less');
		} else{
			$(this).text('... More');
		}
	});
	if($('.hide-exp-wrap').length){
		$('.togg-wrap>a').click(function(){
			//$(this).parent('.togg-wrap').prev('.hide-exp-wrap').css('max-height','none');
			let boxHide = $(this).parent('.togg-wrap').prev('.hide-exp-wrap');
			boxHide.toggleClass('paragraph-show');
			if(boxHide.css('max-height') == 'none'){
				$(this).parent('.togg-wrap').children('.arrow-radius').addClass('rotage180');
				$(this).parent('.togg-wrap').children('.link-st3').text('Less');
			} else{
				$(this).parent('.togg-wrap').children('.arrow-radius').removeClass('rotage180');
				$(this).parent('.togg-wrap').children('.link-st3.btn-more-ex').text('Click to view more experiences');
				$(this).parent('.togg-wrap').children('.link-st3.btn-more-food').text('Click to view more Vietnamese Foods');
			}
		});
	}
	if($('.content-hl-tour').length){
		let heightHlTour = Number($('.content-hl-tour').css('--heightHlTour').slice(0,-2));
		let divHidden = $('.content-hl-tour div:nth-child(2)>div:first-child');
		if(divHidden.height() > heightHlTour){
			divHidden.addClass('div-hidden');
			$('.content-hl-tour div:nth-child(2)').append(`<div class="read-more-st3"><a href="javascript:" class="link-st3">Read More ...</a></div>`);
			$('.content-hl-tour .read-more-st3>a').click(function(){
				let boxHide = $(this).parent('.read-more-st3').prev('.div-hidden');
				boxHide.toggleClass('paragraph-show');
				if(boxHide.css('max-height') == 'none'){
					$(this).text('Less ...');
				} else{
					$(this).text('Read More ...');
				}
			});
		}
	}
	
	$('.order-day>a:first-child').click(function(){
		$(this).next('.panel').slideToggle(500);
		$(this).toggleClass('active');
	});
	$('.best-offer .col-xlg-12>a:first-child').click(function(){
		$(this).next('.panel-st2').slideToggle(500);
		$(this).toggleClass('active');
	});
	$('.accordion>a:first-child').click(function(){
		$(this).nextAll('.row').toggleClass('open-flex');
		$(this).toggleClass('active');
	});
	$('#open-all-1').click(function(){
		$('.order-day>a:first-child').addClass('active');
		$('.panel').slideDown(500);
	});
	$('#close-all-1').click(function(){
		$('.order-day>a:first-child').removeClass('active');
		$('.panel').slideUp(500);
	});
	if(bodyWidth < 1200 && bodyWidth > 991){
		$('.pull-up').height($('.foreground').outerHeight()-190);
	} else if(bodyWidth <= 991){
		$('.pull-up').height($('.foreground').outerHeight()-120);
	} else{
		$('.pull-up').height($('.foreground').outerHeight()-220);
	}
	if(bodyWidth > 991){
		if($('.wrap-map-loca').length > 0){
			//$('.left-daybyday li>a').height($('.wrap-map-loca').height()/$('.left-daybyday ul li').length);
			$('.left-daybyday li>a').click(function(){
				$(this).closest('ul').children('li').removeClass('active');
				$(this).parent('li').addClass('active');
			});
			$('.left-daybyday li>a').hover(function(){
				$(this).next('.triagle-st1').css('visibility','visible');
			},function(){
				$(this).next('.triagle-st1').css('visibility','hidden');
			});
			let mapLocaLength = $('.left-daybyday ul>li').length - 1;
			let locaScrollMaxTop = (mapLocaLength - 14)*50;
			if(mapLocaLength > 14){
				$('.left-daybyday ul').bind('scroll', function(){
					if($(this).scrollTop() > 1){
						$('.btn-day-up').css('display','inline-flex');
					} else{
						$('.btn-day-up').css('display','none');
					}
					if($(this).scrollTop() >= locaScrollMaxTop){
						$('.btn-day-down').css('display','none');
					} else{
						$('.btn-day-down').css('display','inline-flex');
					}
				});
				$('.btn-day-up').click(function(){
					$('.left-daybyday ul').animate({ scrollTop: '-=50' }, 300);
	        		return false; 
				});
				$('.btn-day-down').click(function(){
					$('.left-daybyday ul').animate({ scrollTop: '+=50' }, 300);
	        		return false; 
				});
			} else{
				$('.btn-day').css('display','none');
			}
		}
	} else{
		if($('.wrap-map-loca').length > 0){
			$('.left-daybyday li>a').click(function(){
				$(this).closest('ul').children('li').removeClass('active');
				$(this).parent('li').addClass('active');
			});
			let mapLocaLength = $('.left-daybyday ul>li').length - 1;
			let leftDayByDayWidth = $('.wrap-map-loca .left-daybyday').width();
			if(mapLocaLength*250 > leftDayByDayWidth){
				let locaScrollMaxLeft = mapLocaLength*250 - leftDayByDayWidth - 1;
				$('.left-daybyday ul').bind('scroll', function(){
					if($(this).scrollLeft() > 1){
						$('.btn-day-up').css('display','inline-flex');
					} else{
						$('.btn-day-up').css('display','none');
					}
					if($(this).scrollLeft() >= locaScrollMaxLeft){
						$('.btn-day-down').css('display','none');
					} else{
						$('.btn-day-down').css('display','inline-flex');
					}
				});
				$('.btn-day-up').click(function(){
					$('.left-daybyday ul').animate({ scrollLeft: '-=250' }, 300);
	        		return false; 
				});
				$('.btn-day-down').click(function(){
					$('.left-daybyday ul').animate({ scrollLeft: '+=250' }, 300);
	        		return false; 
				});
			} else {
				$('.btn-day').css('display','none');
			}

		}
	}
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
			//adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-slide-st1 .arrow-left`,
	        nextArrow: `.wrap-slide-st1 .arrow-right`
	    });
	    $('.wrap-slide-st1 .item>a:first-child').height($('.wrap-slide-st1 .img-origin').height());
	}
	//carousel-st2
	if ($('.wrap-slide-st2').length > 0) {
		$(`.wrap-slide-st2 .gallery`).slick({
			slidesToShow: 3,
			lazyLoad: 'ondemand',
			infinite: true,
			centerMode: true,
			centerPadding: '0',
			//adaptiveHeight: false,
			useTransform: true,
			initialSlide: 1,
			//swipeToSlide: true,
			//mobileFirst: true,
			//cssEase: "linear",
			//easing: "none",
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
	//carousel-st4
	if ($('.wrap-slide-st4').length > 0) {
		$(`.wrap-slide-st4 .gallery`).slick({
			//lazyLoad: 'ondemand',
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			//adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-slide-st4 .arrow-left`,
	        nextArrow: `.wrap-slide-st4 .arrow-right`,
	        responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		      	slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		      	slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 2
		      }
		  	},
		  	{
		      breakpoint: 376,
		      settings: {
		      	slidesToShow: 1
		      }
		  	}
		  ]
		});
	}
	//carousel-st5
	if ($('.wrap-slide-st5').length > 0) {
		$('.btn-open-cr-info').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.modal-cr-info-room').css({
				'z-index':'210',
				'visibility':'visible'
			});
			$(`.modal-cr-info-room .gallery`).slick("slickGoTo", 0);
		});
		$('.modal-cr-info-room .btn-close').click(function(){
			$('.modal-cr-info-room').css({
				'z-index':'-3',
				'visibility':'hidden'
			});
		});
		$(`.wrap-slide-st5 .gallery`).slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			//infinite: true,
			adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-slide-st5 .arrow-left`,
	        nextArrow: `.wrap-slide-st5 .arrow-right`
		});
		$('.wrap-slide-st5 .item>a:first-child').height($('.wrap-slide-st5 .img-origin').height());
	}
	//carousel-st6
	if ($('.wrap-slide-st6').length > 0) {
		$(`.wrap-slide-st6 .gallery`).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			//lazyLoad: 'ondemand',
			adaptiveHeight: true,
			infinite: false,
			useTransform: false,
	        prevArrow: `.wrap-slide-st6 .arrow-left`,
	        nextArrow: `.wrap-slide-st6 .arrow-right`,
	        responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 2,
		      	infinite: true,
		      	centerMode: true,
		        centerPadding: `${bodyWidth/7.5}px`
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	slidesToShow: 1,
		      	infinite: true,
		      	centerMode: true,
		        centerPadding: `${bodyWidth/4.5}px`
		      }
		    }
		  ]
		});
	}
	//carousel-sp
	if ($('.wrap-slide-sp').length > 0) {
		$(`.wrap-slide-sp .gallery`).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			//lazyLoad: 'ondemand',
			infinite: true,
			useTransform: true,
	        prevArrow: `.wrap-slide-sp .arrow-left`,
	        nextArrow: `.wrap-slide-sp .arrow-right`,
	        responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 2,
		      	centerMode: true,
		        centerPadding: `${bodyWidth/7.5}px`
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	slidesToShow: 1,
		      	centerMode: true,
		        centerPadding: `${bodyWidth/4.5}px`
		      }
		    }
		  ]
		});
	}
	//gallery-img
	if ($('.wrap-gallery-img').length > 0) {
		$('.open-img').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.wrap-gallery-img').css({
				'z-index':'210',
				'visibility':'visible'
			});
			$(`.wrap-gallery-img .gallery`).slick("slickGoTo", 0);
		});
		$('.wrap-gallery-img .btn-close').click(function(){
			$('.wrap-gallery-img').css({
				'z-index':'-5',
				'visibility':'hidden'
			});
		});
		$(`.wrap-gallery-img .gallery`).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
            fade: true,
			lazyLoad: 'ondemand',
			infinite: true,
			adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-gallery-img .arrow-left`,
	        nextArrow: `.wrap-gallery-img .arrow-right`
	    });
	}

	if ($('.wrap-slide-team').length > 0) {
		if(bodyWidth >479){
			$(`.wrap-slide-team .gallery`).slick({
				slidesToShow: 6,
				slidesToScroll: 4,
				rows: 2,
				infinite: true,
				useTransform: false,
		        prevArrow: `.wrap-slide-team .nav-arrows>a:first-child`,
		        nextArrow: `.wrap-slide-team .nav-arrows>a:last-child`,
		        responsive: [
				    {
				      breakpoint: 992,
				      settings: {
				      	slidesToShow: 3,
				      	centerMode: true,
				        centerPadding: `${bodyWidth/11.5}px`
				      }
				    }
				]
		    });
		} else{
			$(`.wrap-slide-team .gallery`).slick({
				slidesToShow: 1,
				infinite: true,
				useTransform: false,
				centerMode: true,
				centerPadding: `${bodyWidth/5.5}px`,
		        prevArrow: `.wrap-slide-team .nav-arrows>a:first-child`,
		        nextArrow: `.wrap-slide-team .nav-arrows>a:last-child`,
		    });
		}
		
	}
	//================modal===================
	$('.btn-include-1').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-include-1').removeClass('close-display');
	});
	$('.btn-include-2').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-include-2').removeClass('close-display');
	});
	$('.btn-contact').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#contact-modal').removeClass('close-display');
		$('#contact-modal').css('top',`${$(window).scrollTop()+15}px`);
	});
	$('.btn-create-trip').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#creat-trip-modal').removeClass('close-display');
		$('#creat-trip-modal').css('top',`${$(window).scrollTop()+15}px`);
	});
	$('.btn-create-detail').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#creat-detail-modal').removeClass('close-display');
		$('#creat-detail-modal').css('top',`${$(window).scrollTop()+15}px`);
	});
	$('.btn-search-cruise').click(function(){
		$('.modal-container').removeClass('close-display');
		$('#search-cruise-modal').removeClass('close-display');
		$('#search-cruise-modal').css('top',`${$(window).scrollTop()+15}px`);
	});
	$('.btn-modal-tour').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-tour').removeClass('close-display');
	});
	$('.modal-container').on('click',function(){
		$(this).addClass('close-display');
		$(this).removeClass('open-block');
		$('.modal, .modal-2,.video-modal').addClass('close-display');
		$('.modal').removeAttr('style');
		$('.wrap-gallery-img').removeAttr('style');
		if($('.video-modal').length){
			$('#playvideo').attr('src', $('#playvideo').attr('src').replace('autoplay=1', 'autoplay=0'));
	    }
	    if($('.modal-cr-info-room').length){
	    	$('.modal-cr-info-room').css({
	    		'z-index':'-3',
	    		'visibility':'hidden'
	    	});
	    }
	});
	$('.btn-close').click(function(){
		$(this).closest('.modal, .modal-2, .video-modal').addClass('close-display');
		$(this).closest('.modal').removeAttr('style');
		$('.modal-container').addClass('close-display');
		if($('.video-modal').length){
			$('#playvideo').attr('src', $('#playvideo').attr('src').replace('autoplay=1', 'autoplay=0'));
	    }
	});
	if($('.video-box').length > 0){
		$('.video-box').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.video-modal').removeClass('close-display');
			$('#playvideo').attr('src', $('#playvideo').attr('src').replace('autoplay=0', 'autoplay=1'));
		});
	}
	if($('.modal-cr-like').length > 0){
		$('.btn-open-cr-like').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.modal-cr-like').removeClass('close-display');
		});
	}
	if($('.modal-cr-overview').length > 0){
		$('.btn-open-cr-overview').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.modal-cr-overview').removeClass('close-display');
		});
	}
	if($('.modal-cr-info-room').length > 0){
		$('.btn-open-cr-info').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.modal-cr-info-room').removeClass('close-display');
		});
	}
	$('.btn-cr-desti').click(function(){
		$('.modal-container').addClass('open-block');
		$('.modal-cr-desti').removeClass('close-display');
	});
	if($('.modal-cr-desti').length){
		$('.btn-cr-desti').click(function(){
			$('.modal-container').addClass('open-block');
			$('.modal-cr-desti').removeClass('close-display');
		});
		$('.modal-cr-desti .btn-close').click(function(){
			$('.modal-container').removeClass('open-block');
		});
	}
	for(let i=1; i<=$('.phone-wrap').length; i++){
		$(`#cb-p-${i}`).click(function(){
			if (this.checked){
	            $(`#pw-${i}`).addClass('open-flex');
	        }
	        else{
	            $(`#pw-${i}`).removeClass('open-flex');
	        }
		});
		let input = document.querySelector(`#phonenumber-${i}`);
		window.intlTelInput(input, {
	      preferredCountries: ['us','gb','au'],
	    });
	    input.value = '+1 ';
	    input.onclick=input.onkeydown=function(event){
	    	if(input.value.length<2||input.value=='+1 '){
	        	input.value='+';
	    	}
			var key=event.keyCode||event.charCode;
			if(key==8){
				if(input.value.length<3||input.value=='+1 '){
					input.value='++';
				}
			}else if(key==46){
				if(input.value.length<2||input.value=='+1 '){
					input.value='+';
				}
			}
		};
	}
	$('.wrap-more-inclusions>a').click(function(){
		$(this).parent('.wrap-more-inclusions').next('.hidden-mobile').slideToggle('slow');
		$(this).next('.icon-font').toggleClass('plus').toggleClass('minus');
	});
	if($('.wrap-cruise-media').length){
		let mediaHeight = ($('.wrap-cruise-media .wrap-media').height() - 4)/2;
		$('.box-divi-row a').height(mediaHeight);
	}
	//============search box=============
	$('.select-st1 .text').on('click',function(){
		$(this).next('.value').toggleClass('open-block');
	});
	$('.select-st2 .text').on('click',function(){
		$(this).next('.value').toggleClass('open-block');
	});
	$('.booking-st1 .text').on('click',function(){
		$(this).next('.value-2').toggleClass('open-block');
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
        if(!$('.booking-step-class .text,.booking-step-class .value').is(e.target) && $('.booking-step-class .text,.booking-step-class .value').has(e.target).length === 0){
        	$('.booking-step-class .value').removeClass('open-block');
        }
        if(!$('.booking-step-time .text,.booking-step-time .value').is(e.target) && $('.booking-step-time .text,.booking-step-time .value').has(e.target).length === 0){
        	$('.booking-step-time .value').removeClass('open-block');
        }
        if(!$('.booking-step-plan .text,.booking-step-plan .value').is(e.target) && $('.booking-step-plan .text,.booking-step-plan .value').has(e.target).length === 0){
        	$('.booking-step-plan .value').removeClass('open-block');
        }
        if(!$('.booking-st1  .text,.booking-st1  .value-2').is(e.target) && $('.booking-st1  .text,.booking-st1  .value-2').has(e.target).length === 0){
        	$('.booking-st1  .value-2').removeClass('open-block');
        }
        if(!$('.booking-step-cruise .text,.booking-step-cruise  .value').is(e.target) && $('.booking-step-cruise  .text,.booking-step-cruise .value').has(e.target).length === 0){
        	$('.booking-step-cruise .value').removeClass('open-block');
        }
        if(!$('.booking-step-night .text,.booking-step-night .value').is(e.target) && $('.booking-step-night .text,.booking-step-night .value').has(e.target).length === 0){
        	$('.booking-step-night .value').removeClass('open-block');
        }
        if(!$('.filter-des').is(e.target) && $('.filter-des').has(e.target).length === 0){
        	$('.filter-des .value').removeClass('open-block');
        }
        if(!$('.filter-who').is(e.target) && $('.filter-who').has(e.target).length === 0){
        	$('.filter-who .value').removeClass('open-block');
        }
        if(!$('.filter-price').is(e.target) && $('.filter-price').has(e.target).length === 0){
        	$('.filter-price .value').removeClass('open-block');
        }
        if(!$('.blog-des-list').is(e.target) && $('.blog-des-list').has(e.target).length === 0 && bodyWidth < 992){
        	$('.blog-des-list ul').slideUp(500);
        }
        
        if(!$('.filter-desti-2').is(e.target) && $('.filter-desti-2').has(e.target).length === 0){
        	$('.filter-desti-2 .value').removeClass('open-block');
        }
        if(!$('.filter-who-2').is(e.target) && $('.filter-who-2').has(e.target).length === 0){
        	$('.filter-who-2 .value').removeClass('open-block');
        }
        if(!$('.filter-price-2').is(e.target) && $('.filter-price-2').has(e.target).length === 0){
        	$('.filter-price-2 .value').removeClass('open-block');
        }
        if(!$('.login-top-st2').is(e.target) && $('.login-top-st2').has(e.target).length === 0){
        	$('.login-top-st2 .login-menu').removeClass('open-block');
        }
	});
	if($('.booking-step-room').length){
		$('.wrap-infant-number .btn-down').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			if(number1 > 0){
				$('.wrap-infant-number input').val(`${number1-1}`);
			}
			$('.infant-number').text($('.wrap-infant-number input').val());
			if($('.wrap-infant-number input').val() == 0){
				$('.wrap-infant-number .btn-down').addClass('btn-disabled');
			}
		});
		$('.wrap-infant-number .btn-up').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			$('.wrap-infant-number input').val(`${number1+1}`);
			$('.infant-number').text($('.wrap-infant-number input').val());
			$('.wrap-infant-number .btn-down').removeClass('btn-disabled');
		});
		$('.wrap-adult-number .btn-down').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			if(number1 > 0){
				$('.wrap-adult-number input').val(`${number1-1}`);
			}
			$('.adult-number').text($('.wrap-adult-number input').val());
			if($('.wrap-adult-number input').val() == 0){
				$('.wrap-adult-number .btn-down').addClass('btn-disabled');
			}
		});
		$('.wrap-adult-number .btn-up').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			$('.wrap-adult-number input').val(`${number1+1}`);
			$('.adult-number').text($('.wrap-adult-number input').val());
			$('.wrap-adult-number .btn-down').removeClass('btn-disabled');
		});
		$('.wrap-child-number .btn-down').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			if(number1 > 0){
				$('.wrap-child-number input').val(`${number1-1}`);
			}
			$('.child-number').text($('.wrap-child-number input').val());
			if($('.wrap-child-number input').val() == 0){
				$('.wrap-child-number .btn-down').addClass('btn-disabled');
			}
		});
		$('.wrap-child-number .btn-up').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			$('.wrap-child-number input').val(`${number1+1}`);
			$('.child-number').text($('.wrap-child-number input').val());
			$('.wrap-child-number .btn-down').removeClass('btn-disabled');
		});
	}
	if($('.booking-step-calendar').length){
		$('.booking-step-calendar input').datepicker({
			//inline: true,
			minDate:new Date(),
			showOtherMonths: true
		});
		$('.booking-step-calendar input').change(function(){
			$(this).next('.text').children('b').text($(this).val());
		});
	}

	if($('.booking-step-promo').length){
		let number2 = $('.booking-step-promo .btn-value').length;
		for (let i=0; i<number2; i++){
			$('.booking-step-promo .btn-value').eq(i).click(function(){
				if($(this).attr('class').search('checked') != -1){
					$('.booking-step-promo .btn-value').removeClass('checked');
				} else{
					$('.booking-step-promo .btn-value').removeClass('checked');
					$(this).addClass('checked');
					if($('.booking-step-promo').length == 2){
						if(i<(number2/2)){
							$('.booking-step-promo .btn-value').eq(number2/2 + i).addClass('checked');
						} else{
							$('.booking-step-promo .btn-value').eq(i - number2/2).addClass('checked');
						}
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
	}
	if($('.booking-step-where').length){
		let number3 = $('.booking-step-where .btn-value').length;
		for (let i=0; i<number3; i++){
			$('.booking-step-where .btn-value').eq(i).click(function(){
				$(this).toggleClass('checked');
				let numberValue;
				if($('.booking-step-where').length == 1){
					numberValue = $('.booking-step-where .checked').length;
				} else{
					if(i<(number3/2)){
						$('.booking-step-where .btn-value').eq(number3/2 + i).toggleClass('checked');
					} else{
						$('.booking-step-where .btn-value').eq(i - number3/2).toggleClass('checked');
					}
					numberValue = $('.booking-step-where .checked').length/2;
				}
				$('.booking-step-where').children('select').html('');
				for(let j=0; j < numberValue; j++){
					$('.booking-step-where').children('select').append(`<option value="${$(this).closest('.value').find('.checked b').eq(j).text()}" selected></option>`);
				}
				if(numberValue == 0){
					$('.booking-step-where').find('.text b').html(`Where do you want to go?`);
				} else{
					$('.booking-step-where').find('.text b').html(`${numberValue} selected`);
				}
			});
		}
	}
	if($('.booking-step-when').length){
		let number4 = $('.booking-step-when .btn-value').length;
		for (let i=0; i<number4; i++){
			$('.booking-step-when .btn-value').eq(i).click(function(){
				$(this).toggleClass('checked');
				let numberValue;
				if($('.booking-step-when').length == 1){
					numberValue = $('.booking-step-when .checked').length;
				} else{
					if(i<(number4/2)){
						$('.booking-step-when .btn-value').eq(number4/2 + i).toggleClass('checked');
					} else{
						$('.booking-step-when .btn-value').eq(i - number4/2).toggleClass('checked');
					}
					numberValue = $('.booking-step-when .checked').length/2;
				}
				$('#creat-trip-modal .booking-step-when').children('select').html('');
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
	}
	if($('.booking-step-time').length){
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
	}
	if($('.booking-step-class').length){
		let number5 = $('.booking-step-class .btn-value').length;
		for (let i=0; i<number5; i++){
			$('.booking-step-class .btn-value').eq(i).click(function(){
				if($(this).attr('class').search('checked') != -1){
					$('.booking-step-class .btn-value').removeClass('checked');
				} else{
					$('.booking-step-class .btn-value').removeClass('checked');
					$(this).addClass('checked');
					if($('.booking-step-class').length == 2){
						if(i<(number5/2)){
							$('.booking-step-class .btn-value').eq(number5/2 + i).addClass('checked');
						} else{
							$('.booking-step-class .btn-value').eq(i - number5/2).addClass('checked');
						}
					}
				}
				if($(this).closest('.value').find('.checked').length == 0){
					$('.booking-step-class').find('.text b').html(`Approx Start Date`);
					$('#creat-detail-modal .booking-step-class').find('select option').val('');
				} else{
					$('.booking-step-class').find('.text b').html($(this).children('b').text());
					$('#creat-detail-modal .booking-step-class').find('select option').val($(this).children('b').text());
				}
				$(this).closest('.value').removeClass('open-block');
			});
		}
	}
	/*===search cruise=====*/
	if($('.booking-step-cruise').length){
		let number6 = $('.booking-step-cruise .btn-value').length;
		for (let i=0; i<number6; i++){
			$('.booking-step-cruise .btn-value').eq(i).click(function(){
				if($(this).attr('class').search('checked') != -1){
					$('.booking-step-cruise .btn-value').removeClass('checked');
				} else{
					$('.booking-step-cruise .btn-value').removeClass('checked');
					$(this).addClass('checked');
				}
				if($(this).closest('.value').find('.checked').length == 0){
					$('.booking-step-cruise').find('.text b').html(`Cruise name:`);
					$('.booking-step-cruise').find('select option').val('');
				} else{
					$('.booking-step-cruise').find('.text b').html($(this).children('b').text());
					$('.booking-step-cruise').find('select option').val($(this).children('b').text());
				}
				$(this).closest('.value').removeClass('open-block');
			});
		}
	}
	if($('.booking-step-night').length){
		let number7 = $('.booking-step-night .btn-value').length;
		for (let i=0; i<number7; i++){
			$('.booking-step-night .btn-value').eq(i).click(function(){
				if($(this).attr('class').search('checked') != -1){
					$('.booking-step-night .btn-value').removeClass('checked');
				} else{
					$('.booking-step-night .btn-value').removeClass('checked');
					$(this).addClass('checked');
				}
				if($(this).closest('.value').find('.checked').length == 0){
					$('.booking-step-night').find('.text b').html(`No. Night`);
					$('.booking-step-night').find('select option').val('');
				} else{
					$('.booking-step-night').find('.text b').html($(this).children('b').text());
					$('.booking-step-night').find('select option').val($(this).children('b').text());
				}
				$(this).closest('.value').removeClass('open-block');
			});
		}
	}
	if($('.booking-step-depature').length){
		$('.booking-step-depature input').datepicker({
			//inline: true,
			minDate:new Date(),
			showOtherMonths: true
		});
		$('.booking-step-depature input').change(function(){
			$('.booking-step-depature .text').children('b').text($(this).val());
			$('#search-cruise-modal .booking-step-depature input').val($(this).val());
		});
	}
	if($('.booking-step-room-cruise').length){
		$('.wrap-room-number .btn-down').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			let adultSum = Number($('.adult-number-sum').html());
			let childSum = Number($('.child-number-sum').html());
			let infantSum = Number($('.infant-number-sum').html());
			let elementRemo = $(`.value-2 .room-cruise-${number1}`);
			if(number1 > 1){
				$('.wrap-room-number input').val(`${number1-1}`);
				$('.adult-number-sum').html(`${adultSum - elementRemo.find('.wrap-adult-number input').val()}`);
				$('.child-number-sum').html(`${childSum - elementRemo.find('.wrap-child-number input').val()}`);
				$('.infant-number-sum').html(`${infantSum - elementRemo.find('.wrap-infant-number input').val()}`);
				elementRemo.remove();
				$('.room-number').text(`${number1-1}`);
				$('.wrap-room-number .btn-up').removeClass('btn-disabled');
			}
			if($('.wrap-room-number input').val() == 1){
				$('.wrap-room-number .btn-down').addClass('btn-disabled');
			}
		});
		$('.wrap-room-number .btn-up').click(function(){
			let number1 = Number($(this).nextAll('input').val());
			let adultSum = Number($('.adult-number-sum').html());
			if(number1 < 5){
				$('.wrap-room-number input').val(`${number1+1}`);
				$('.booking-step-room-cruise .value-2').append(`<div class="room-cruise room-cruise-${number1+1}">
							<b>Room ${number1+1}:</b>
							<div class="room-type">
								<select class="select-st9" onchange="selectChange(this,'.room-cruise-${number1+1}')">
									<option value="1" selected>Double</option>
									<option value="2">Twin</option>
									<option value="3">Single</option>
								</select>
							</div>
							<div class="room-element">
								<div class="wrap-adult-number">
									<button class="btn-down" type="button" onclick="btnDownClick(this,'.adult-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="adult-number">2</strong>&nbsp;Adult(>12)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.adult-number-sum','.room-cruise-${number1+1}',4)">+</button>
									<input type="text" name="" value="2">
								</div>
								<div class="wrap-child-number">
									<button class="btn-down btn-disabled" type="button" onclick="btnDownClick(this,'.child-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="child-number">0</strong>&nbsp;Child(4-12)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.child-number-sum','.room-cruise-${number1+1}',2)">+</button>
									<input type="text" name="" value="0">
								</div>
								<div class="wrap-infant-number">
									<button class="btn-down btn-disabled" type="button" onclick="btnDownClick(this,'.infant-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="infant-number">0</strong>&nbsp;Infant(<3)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.infant-number-sum','.room-cruise-${number1+1}',2)">+</button>
									<input type="text" name="" value="0">
								</div>
							</div>
						</div>`);
				$('.room-number').text(`${number1+1}`);
				$('.adult-number-sum').text(`${adultSum+2}`);
				$('.wrap-room-number .btn-down').removeClass('btn-disabled');
			}
			if($('.wrap-room-number input').val() == 5){
				$('.wrap-room-number .btn-up').addClass('btn-disabled');
			}
		});
	}
	if($('.booking-step-m-time').length){
		let now = new Date();
		let monthNow = now.getUTCMonth();
		let yearNow = now.getUTCFullYear();
		let liDis = $('.box-mon-time>div:first-child li');
		let btnMonth = $('.box-mon-time ul button');
		$('body').click(function(e){
			if(!$('.booking-step-m-time').is(e.target) && $('.booking-step-m-time').has(e.target).length === 0){
	        	$('.box-mon-time').removeClass('open-flex');
	        }
	    });
		$('.booking-step-m-time>input').click(function(){
			$('.box-mon-time>div:first-child font, .box-mon-time>div:first-child>span').html(yearNow);
			$('.box-mon-time>div:last-child font, .box-mon-time>div:last-child>span').html(yearNow+1);
			for(let i=0; i<monthNow; i++){
				liDis.eq(i).children('button').attr('disabled','disabled');
			}
			$(this).nextAll('.box-mon-time').toggleClass('open-flex');
		});
		btnMonth.click(function(){
			let thisText = $(this).text();
			btnMonth.removeClass('active');
			$(this).addClass('active');
			$(this).closest('.booking-step-m-time').children('input').val(thisText);
			$(this).closest('.booking-step-m-time').find('.text>b').html(thisText);
			$('.box-mon-time').removeClass('open-flex');
		});
	}
	/*===end search cruise =====*/
	/*====== search box st2 =======*/
	if($('.search-container-st2').length){
		let inputWhere = $('#where-auto');
		let valueWhere = inputWhere.nextAll('.value').html();
		let widthWhere = Math.floor(inputWhere.outerWidth());
		let setWhereY = inputWhere.offset().top + inputWhere.outerHeight();
		let setWhereX = inputWhere.offset().left;
		let inputWhen = $('#when-auto');
		let valueWhen = inputWhen.nextAll('.box-mon-time').html();
		let setWhenY = inputWhen.offset().top + inputWhen.outerHeight();
		let setWhenX = inputWhen.offset().left;
		$('body').append(`<ul id="value-where" class="value value-tool" style="top:${setWhereY}px;left:${setWhereX}px;z-index: 9;width:${widthWhere}px">${valueWhere}</ul>`);
		$('body').append(`<div id="box-mon-time" class="box-mon-time" style="top:${setWhenY}px;left:${setWhenX}px;z-index: 9">${valueWhen}</div>`);
		inputWhere.click(function(){
			$('#value-where').addClass('open-block');
			$(this).prevAll('label').css('bottom','37px');
		
		});
		inputWhen.click(function(){
			$('#box-mon-time').toggleClass('open-flex');
			$(this).prevAll('label').css('bottom','37px');
		});
		$('body').click(function(e){
			if (!$('#value-where,#where-auto').is(e.target) && $('#value-where,#where-auto').has(e.target).length === 0) {
	            $('#value-where').removeClass('open-block');
	            if(inputWhere.val() != ''){
					inputWhere.prevAll('label').css('bottom','37px');
				} else{
					inputWhere.prevAll('label').removeAttr('style');
				}
	        }
	        if (!$('#box-mon-time,#when-auto').is(e.target) && $('#box-mon-time,#when-auto').has(e.target).length === 0) {
	            $('#box-mon-time').removeClass('open-flex');
	            if(inputWhen.val() != ''){
					inputWhen.prevAll('label').css('bottom','37px');
				} else{
					inputWhen.prevAll('label').removeAttr('style');
				}
	        }
		});
		$('body').delegate('#value-where .btn-value','click',function(){
			inputWhere.val($(this).children('b').text());
			$('#value-where').removeClass('open-block');
		});
		$('body').delegate('#box-mon-time ul button','click',function(){
			inputWhen.val($(this).text());
			$('#box-mon-time').removeClass('open-flex');
		});
	}
	/*===filter 2=====*/
	if($('.wrap-filter-st2').length){
		$('.filter-desti-2 .btn-value').click(function(){
			$(this).toggleClass('checked');
			let numberValue = $('.filter-desti-2 .checked').length;
			$('.filter-desti-2').children('select').html('');
			for(let j=0; j < numberValue; j++){
				$('.filter-desti-2>select').append(`<option value="${$(this).closest('.value').find('.checked b').eq(j).text()}" selected></option>`);
			}
			if(numberValue == 0){
				$('.filter-desti-2 .text b').html(`Destinations`);
			} else{
				$('.filter-desti-2 .text b').html(`${numberValue} selected`);
			}
		});
		/*$('.filter-who-2 .btn-value').click(function(){
			if($(this).attr('class').search('checked') != -1){
				$('.filter-who-2 .btn-value').removeClass('checked');
				$('.filter-who-2 .text b').html(`Who`);
				$('.filter-who-2>input').val('');
			} else{
				let thisValue = $(this).children('b').text();
				$('.filter-who-2 .btn-value').removeClass('checked');
				$(this).addClass('checked');
				$('.filter-who-2 .text b').html(thisValue);
				$('.filter-who-2>input').val(thisValue);
			}
			$('.filter-who-2 .value').removeClass('open-block');
		});*/
		$('.filter-who-2 .btn-value').click(function(){
			$(this).toggleClass('checked');
			let numberValue = $('.filter-who-2 .checked').length;
			$('.filter-who-2>select').html('');
			for(let j=0; j < numberValue; j++){
				$('.filter-who-2>select').append(`<option value="${$(this).closest('.value').find('.checked b').eq(j).text()}" selected></option>`);
			}
			if(numberValue == 0){
				$('.filter-who-2 .text b').html(`Destinations`);
			} else{
				$('.filter-who-2 .text b').html(`${numberValue} selected`);
			}
		});
		$('.filter-price-2 .btn-value').click(function(){
			if($(this).attr('class').search('checked') != -1){
				$('.filter-price-2 .btn-value').removeClass('checked');
				$('.filter-price-2 .text b').html(`Price`);
				$('.filter-price-2>input').val('');
			} else{
				let thisValue = $(this).children('b').text();
				$('.filter-price-2 .btn-value').removeClass('checked');
				$(this).addClass('checked');
				$('.filter-price-2 .text b').html(thisValue);
				$('.filter-price-2>input').val(thisValue);
			}
			$('.filter-price-2 .value').removeClass('open-block');
		});
	}
	
	/*===end filter 2=====*/
	$('body').delegate('.filter-box>a','click',function(){
		$(this).next('.value').toggleClass('open-block');
	});
	$('body').delegate('.filter-box .btn-value','click',function(){
		$(this).closest('.filter-box').find('.text-2').html($(this).children('span').text());
		$(this).closest('.value').removeClass('open-block');
	});
	if($('.blog-des-list').length && bodyWidth < 992){
		$('.blog-des-list>a').click(function(){
			let desUl = $(this).next('ul');
			let des = $(this).parent('.blog-des-list');
			desUl.slideToggle(500);
		});
	}
	/*====setting to offset=======*/
	if($('.navbar-cruise').length){
		$('.to-offset-desti').click(function(){
			goToOffset('#cruise-desti');
		});
		$('.to-offset-high').click(function(){
			goToOffset('#cruise-highlight');
		});
		$('.to-offset-review').click(function(){
			goToOffset('#cruise-review');
		});
		$('.to-offset-iti').click(function(){
			goToOffset('#cruise-iti');
		});
		$('.to-offset-cabins').click(function(){
			goToOffset('#cruise-cabins');
		});
		$('.to-offset-offer').click(function(){
			goToOffset('#cruise-offer');
		});
		$('.to-offset-overview').click(function(){
			goToOffset('#cruise-overview');
		});
	}
	if($('.navbar-booking').length){
		$('.to-offset-check').click(function(){
			goToOffset('#booking-widget-cruisepage');
		});
		$('.to-offset-select').click(function(){
			goToOffset('#select-room');
		});
		$('.to-offset-submit').click(function(){
			goToOffset('#confirm-submit');
		});
	}
	$('body').delegate('.input-radio-st1 label','click',function(){
		let inputName = $(this).prev('input').attr('name');
		$(`input[name=${inputName}]`).next('label').removeClass('active');
		$(this).addClass('active');
	});
	$('body').delegate('.input-checkbox-st1 input','click',function(){
		if(this.checked){
			$(this).next('label').addClass('active');
		} else{
			$(this).next('label').removeClass('active');
		}
	});
	/*======booking=======*/
	if($('.room-booking-wrap').length){
		$('.room-booking-wrap').delegate(`.select-cabin input[type="radio"]`,'click',function(){
			if (this.checked){
				let valueR = $(this).val().split(';');
				let roomNumber = valueR[0].slice(5);
				let pax = valueR[1].slice(4);
				let del = valueR[2].slice(4);
				let price = valueR[3].slice(6);
				let rowParent = $(this).closest('tr');
				$(`#room-${roomNumber} img`).attr('src',rowParent.find('.info-cabins img').attr('src'));
				$(`#room-${roomNumber} .room-name`).html(rowParent.find('.item-listcabin h3').text());
				$(`#room-${roomNumber} .pax-number`).html(pax);
				$(`#room-${roomNumber} .price-trip-box del`).text('$'+del);
				$(`#room-${roomNumber} .price-trip-box strong`).text('$'+price);
				$(`.box-summary,#room-${roomNumber}`).removeClass('close-display');
				$(this).closest('tbody').children('tr').removeClass('active');
				$(this).closest('tr').addClass('active');
	            goToOffset('#room-option');
	        }
		});
		$('.room-booking-wrap').delegate('.service-check','click',function(){
			let valueS = $(this).val();
			if (this.checked){
				$(valueS).removeClass('close-display');
				$('#sum-serv').removeClass('close-display');
			} else{
				$(valueS).addClass('close-display');
				if($('#sum-serv li.close-display').length == $('#sum-serv li').length - 1){
					$('#sum-serv').addClass('close-display');
				}
			}
		});
		$('.room-booking-wrap').delegate(`#service-seaplane`,'click',function(){
			//let valueS = $(this).val();
			if (this.checked){
	            $(this).closest('li').children('.box-seaplanes').removeClass('close-display');
	            $('#sum-service-seaplane').removeClass('close-display');
				$('#sum-serv').removeClass('close-display');
	        } else{
	        	$(this).closest('li').children('.box-seaplanes').addClass('close-display');
	        	$('#sum-service-seaplane').addClass('close-display');
				if($('#sum-serv li.close-display').length == $('#sum-serv li').length - 1){
					$('#sum-serv').addClass('close-display');
				}
	        }
		});
		$('.room-booking-wrap').delegate(`.box-seaplanes select`,'change',function(){
			let adult = ($('#adult-seaplane').val() > 0) ? (', ' + $('#adult-seaplane').val() + ' Adult') : '';
			let child = ($('#child-seaplane').val() > 0) ? (', ' + $('#child-seaplane').val() + ' Child') : '';
			let infant = ($('#infant-seaplane').val() > 0) ? (', ' + $('#infant-seaplane').val() + ' Infant') : '';
			let depature = ($('#time-seaplane').val() != 0) ? `, Depature: ${$('#time-seaplane').val()}` : '';
			$('#sum-service-seaplane span').text(`Seaplane 25’ Scenic Flight ${depature}${adult}${child}${infant}`);
			$('#sum-service-seaplane font').html(`$${$('#adult-seaplane').val()*99 + $('#child-seaplane').val()*75 + $('#infant-seaplane').val()*10}`)
		});
		$('.room-booking-wrap').delegate(`.radio-trans`,'click',function(){
			let valueT = $(this).val().split(';');
			$('.transpick').addClass('close-display');
			$('.pick-up-checkbox').each(function(){
				$(this)[0].checked = false;
				$(this).parent('.input-checkbox-st1').children('label').removeClass('active');
			});
			$('.airport-drop-checkbox').each(function(){
				$(this)[0].checked = false;
				$(this).parent('.input-checkbox-st1').children('label').removeClass('active');
			});
			if (this.checked){
				$('#sum-pick-up').addClass('close-display');
				$('#sum-airport-drop').addClass('close-display');
				$('#type-trans span').html(`${valueT[0]} Roundtrip transfers Hanoi - Halong bay - Hanoi`);
				$('#sum-pri-trans font').html(`$${valueT[1]}`);
	            $(this).closest('li').children('.transpick').removeClass('close-display');
	            $('#sum-trans').removeClass('close-display');
	        }
		});
		$('.room-booking-wrap').delegate(`.transpick>input`,'change',function(){
			$('#pick-address').html($(this).val());
		});
		$('.room-booking-wrap').delegate(`.pick-up-checkbox`,'click',function(){
			if (this.checked){
				$('#sum-pick-up font').html(`$${$(this).val()}`)
				$('#sum-pick-up').removeClass('close-display');
			} else{
				$('#sum-pick-up').addClass('close-display');
			}
		});
		$('.room-booking-wrap').delegate(`.airport-drop-checkbox`,'click',function(){
			if (this.checked){
				$('#sum-airport-drop font').html(`$${$(this).val()}`)
				$('#sum-airport-drop').removeClass('close-display');
			} else{
				$('#sum-airport-drop').addClass('close-display');
			}
		});
	}
	/*=======cruise-2=========*/
	if($('.trip-cruise').length){
		$('.box-schedule').outerWidth($('.trip-cruise').outerWidth());
		$('.open-schedule-1').click(function(){
			$(this).toggleClass('active');
			$(this).closest('.left-trip').children('.box-schedule-1').slideToggle(500);
		});
		$('.open-schedule-2').click(function(){
			$(this).toggleClass('active');
			$(this).closest('.left-trip').children('.box-schedule-2').slideToggle(500);
		});
		$('.facilities>a').click(function(){
			$(this).next('ul').toggleClass('open-flex');
		});
	}
});
window.onload = function() {
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());

	/*let heightTrip = 91+$('.content-trip').height()+$('.trip a').height();
	$('.trip').height(heightTrip);*/

	//$('#preloader').delay(500).fadeOut(300);
    /*setTimeout(function(){
	    $('body').removeClass('preloading-bd');
	}, 800);*/
};
let btnUpClick = function(a,b,c,d){
	let number1 = Number($(a).nextAll('input').val());
	let numberSum = Number($(b).html());
	let wrap = $(a).parent('div').attr('class');
	if(number1 < d){
		$(c).find(`.${wrap} input`).val(`${number1+1}`);
		$(b).html(`${numberSum+1}`);
		$(c).find(`.${wrap} span>strong`).html(`${number1+1}`);
		$(c).find(`.${wrap} .btn-down`).removeClass('btn-disabled');
	}
	if((number1+1) == d){
		$(c).find(`.${wrap} .btn-up`).addClass('btn-disabled');
	}
	//alert(`.${wrap} input`);
}
let btnDownClick = function(a,b,c){
	let number1 = Number($(a).nextAll('input').val());
	let numberSum = Number($(b).html());
	let wrap = $(a).parent('div').attr('class');
	if(number1 > 0){
		$(c).find(`.${wrap} input`).val(`${number1-1}`);
		$(b).html(`${numberSum-1}`);
		$(c).find(`.${wrap} span>strong`).html(`${number1-1}`);
		$(c).find(`.${wrap} .btn-up`).removeClass('btn-disabled');
	}
	if((number1-1) == 0){
		$(c).find(`.${wrap} .btn-down`).addClass('btn-disabled');
	}
}
let selectChange = function(a,b){
	let optionVal = $(a).val();
	$(b).find('.room-type option').removeAttr('selected');
	$(b).find(`.room-type option[value=${optionVal}]`).attr('selected','selected');
}
let goToOffset = function(id){
	$('html, body').animate({ scrollTop:$(id).offset().top - 120}, 'slow');
}
/*======================LOAD JSON============================*/
let loadJson = function(a,x,y) {
    $.ajax({
        dataType: 'json',
        url: `data/include-${a}.json`})
        .done(function(response) {
            // let response = JSON.parse(data);
            $(x).html(response[y]);
        })
        .fail(function() {
            alert('lỗi load dữ liệu');
        });
    return false; 
};
$('#btn-accommodation').click(function(){
	loadJson(1,'.modal-include-1 .modal-content','accommodation');
});
$('#btn-experience').click(function(){
	loadJson(1,'.modal-include-1 .modal-content','experience');
});
$('#btn-transport').click(function(){
	loadJson(2,'.modal-include-2 .modal-content','transport');
});
$('#btn-team').click(function(){
	loadJson(2,'.modal-include-2 .modal-content','team');
});
$('#btn-meal').click(function(){
	loadJson(2,'.modal-include-2 .modal-content','meal');
});
$('#btn-service').click(function(){
	loadJson(2,'.modal-include-2 .modal-content','services');
});
/*======================END JSON============================*/