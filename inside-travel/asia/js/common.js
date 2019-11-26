$(document).ready(function() {
	//$('body').css('--bodyWidth',`${bodyWidth}px`);
	let bodyWidth = $('body').width();
	//===========header===================
	if(bodyWidth > 991){
		$('#menu-lv1-1').hover(function(){
			$('#menu-lv1-1').nextAll('.sub-menu-destinations').addClass('open-flex');
		},function(){
			$('#menu-lv1-1').nextAll('.sub-menu-destinations').removeClass('open-flex');
		});
		$('.sub-menu-destinations').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-1 a').addClass('open-opacity');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-1 a').removeClass('open-opacity');
		});

		$('#menu-lv1-2').hover(function(){
			$('#menu-lv1-2').nextAll('.sub-menu-travel').addClass('open-flex');
		},function(){
			$('#menu-lv1-2').nextAll('.sub-menu-travel').removeClass('open-flex');
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
	$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	$(window).bind('scroll', function(){
		if (bodyWidth > 991) {
			if($(this).scrollTop() > 250){
	        	$('header .menu-wrap').addClass('menu-wrap-scroll');
	        	$('.bg-parallax').css('background-position-y',`20px`);
	        	$('.fab-box').css('right','0');
	        } else{
	            $('header .menu-wrap').removeClass('menu-wrap-scroll');
	            $('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            $('.fab-box').css('right','-46px');
	        }
		} else if(bodyWidth > 520){
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','10%');
	        	//$('.bg-parallax').css('background-position-y',`20px`);
	        	$('.fab-box').css('bottom','0');
	        } else{
	            $('header .menu-wrap .brand').css('width','15%');
	            //$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            $('.fab-box').css('bottom','-50px');
	        }
		} else{
			if($(this).scrollTop() > 100){
	        	$('header .menu-wrap .brand').css('width','15%');
	        	//$('.bg-parallax').css('background-position-y',`20px`);
	        	$('.fab-box').css('bottom','0');
	        } else{
	            $('header .menu-wrap .brand').css('width','20%');
	            //$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            $('.fab-box').css('bottom','0');
	        }
		}
	});
	if (bodyWidth <= 991) {
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
				if(bodyWidth <= 520){
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
	let heightTrip = 91+$('.content-trip').height()+$('.trip a').height();
	$('.trip').height(heightTrip);
	if(bodyWidth < 1025){
    	$('.best-support article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','132px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('.wrap-slide-sp article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','132px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('.trip .content-trip').hover(function(){
	    	$(this).children('.paragraph').css('max-height','152px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
    }
	if (bodyWidth <= 520) {
		$('.menu-mobile-back button').click(function(){
			$('.main-menu').removeClass('main-menu-transform');
			$('.sub-menu').removeClass('open-flex');
		});
	}
//==============end header==============
	if($('.trip-st2').length > 0){
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
	$('.read-more-st1>a').click(function(){
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
    $('.select-st10').change(function(){
    	let selectValue1 = $(this).val();
    	if(selectValue1 == ''){
    		$(this).nextAll('span').text($(this).children('option').eq(0).text());
    	} else{
    		let textSelect1 = $(this).children(`option[value='${selectValue1}']`).text();
    		$(this).nextAll('span').html(textSelect1);
    	}
    	
    });
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
		$(`.wrap-gallery-img .gallery`).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
            fade: true,
			//lazyLoad: 'ondemand',
			infinite: true,
			adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-gallery-img .arrow-left`,
	        nextArrow: `.wrap-gallery-img .arrow-right`
	    });
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
		$('.modal, .modal-2,.video-modal').addClass('close-display');
		$('.modal').removeAttr('style');
		$('.wrap-gallery-img').removeAttr('style');
		if($('.video-modal').length){
			$('#playvideo').attr('src', $('#playvideo').attr('src').replace('autoplay=1', 'autoplay=0'));
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
				$('#creat-trip-modal .booking-step-where').children('select').html('');
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
					if($('.booking-step-cruise').length == 2){
						if(i<(number6/2)){
							$('.booking-step-cruise .btn-value').eq(number6/2 + i).addClass('checked');
						} else{
							$('.booking-step-cruise .btn-value').eq(i - number6/2).addClass('checked');
						}
					}
				}
				if($(this).closest('.value').find('.checked').length == 0){
					$('.booking-step-cruise').find('.text b').html(`Cruise name:`);
					$('#search-cruise-modal .booking-step-cruise').find('select option').val('');
				} else{
					$('.booking-step-cruise').find('.text b').html($(this).children('b').text());
					$('#search-cruise-modal .booking-step-cruise').find('select option').val($(this).children('b').text());
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
					if($('.booking-step-night').length == 2){
						if(i<(number7/2)){
							$('.booking-step-night .btn-value').eq(number7/2 + i).addClass('checked');
						} else{
							$('.booking-step-night .btn-value').eq(i - number7/2).addClass('checked');
						}
					}
				}
				if($(this).closest('.value').find('.checked').length == 0){
					$('.booking-step-night').find('.text b').html(`Night?`);
					$('#search-cruise-modal .booking-step-night').find('select option').val('');
				} else{
					$('.booking-step-night').find('.text b').html($(this).children('b').text());
					$('#search-cruise-modal .booking-step-night').find('select option').val($(this).children('b').text());
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
	/*===end search cruise =====*/

});
window.onload = function() {
	if($('body').width() > 767){
		$('.map-home').height($('.map-home>img').height());
	}
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());
	$('.trip .tooltip>span, .trip-st2 .tooltip>span').each(function(){
		$(this).css('left',`-${$(this).width()/2 -10}px`);
	});
	$('.wrap-coo .tooltip>a>span').each(function(){
		$(this).css('left',`-${$(this).width()/2 -8}px`);
	});
	$('.detail-location .tooltip>span').each(function(){
		$(this).css('left',`-${$(this).width()/2 - 14}px`);
	});
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
/*======================LOAD JSON============================*/
let loadJson = function(a,x,y) {
    $.ajax({
        dataType: 'json',
        url: `data/include-${a}.json`})
        .done(function(response) {
            // let response = JSON.parse(data);
            $(x).html(response[y]);
			/*$('.read-more-st1>a').click(function(){
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
			});*/
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