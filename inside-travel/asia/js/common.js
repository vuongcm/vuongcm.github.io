$(document).ready(function() {
	//$('body').css('--bodyWidth',`${bodyWidth}px`);
	let bodyWidth = $('body').width();
	if($('.lazyload').length>0){jQuery(".lazyload").lazyload({effect:"fadeIn"});}
	//===========header===================
	if(bodyWidth > 991){
		$('#menu-lv1-1').hover(function(){
			$('#menu-lv1-1').nextAll('.sub-menu-destinations').addClass('open-flex');
			$('header').css('z-index','103');
		},function(){
			$('#menu-lv1-1').nextAll('.sub-menu-destinations').removeClass('open-flex');
			$('header').css('z-index','101');
		});
		$('.sub-menu-destinations').hover(function(){
	        $(this).css('display','flex');
	        $('header').css('z-index','103');
	        $('#menu-lv1-1 a').addClass('open-opacity');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-1 a').removeClass('open-opacity');
	        $('header').css('z-index','101');
		});

		$('#menu-lv1-2').hover(function(){
			$('#menu-lv1-2').nextAll('.sub-menu-travel').addClass('open-flex');
			$('header').css('z-index','103');
		},function(){
			$('#menu-lv1-2').nextAll('.sub-menu-travel').removeClass('open-flex');
			$('header').css('z-index','101');
		});
		$('.sub-menu-travel').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-2 a').addClass('open-opacity');
	        $('header').css('z-index','103');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-2 a').removeClass('open-opacity');
	        $('header').css('z-index','101');
		});

		$('#menu-lv1-3').hover(function(){
			$('#menu-lv1-3').nextAll('.sub-menu-cruises').addClass('open-flex');
			$('header').css('z-index','103');
		},function(){
			$('header').css('z-index','101');
			setTimeout(function(){
				$('.sub-menu-cruises').removeClass('open-flex');
			}, 100);
		});
		$('.sub-menu-cruises').hover(function(){
	        $(this).css('display','flex');
	        $('#menu-lv1-3 a').addClass('open-opacity');
	        $('header').css('z-index','103');
	    },function(){
	        $(this).css('display','none');
	        $('#menu-lv1-3 a').removeClass('open-opacity');
	        $('header').css('z-index','101');
		});
	}
	let headerHeight = $('header').height();
	$('header').next('section').css('padding-top',`${headerHeight}px`);
	let activeParallax = $('.bg-parallax').length ? $('.bg-parallax').attr('class').search('bg-about') == -1 : false;
	if(activeParallax){
		$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	}
	let pageScroll = 0;
	let gridCt4 = 460;
	$(window).bind('scroll', function(){
		if(bodyWidth >= 1350){
			if($(this).scrollTop() > 250){
	        	$('header .menu-wrap').addClass('menu-wrap-scroll');
	        	if($('.navbar-tour').length){
	        		$('.navbar-tour').css('top','0');
	        	}
	        	if(activeParallax){
	            	$('.bg-parallax').css('background-position-y',`20px`);
	            }
	        	$('.fab-box').css('right','0');
	        } else{
	            $('header .menu-wrap').removeClass('menu-wrap-scroll');
	            if($('.navbar-tour').length){
	        		$('.navbar-tour').css('top','-100px');
	        	}
	            if(activeParallax){
	            	$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            }
	            $('.fab-box').css('right','-46px');
	        }
	        if($('.section-grid-dt3').length){
	        	if($(this).scrollTop() > ($('.grid-ct5').offset().top + 30)){
	        		$('.grid-ct3').css({
	        			'top':'60px'
	        		});
	        		$('.grid-ct4').css({
	        			'top':`${gridCt4}px`
	        		}).addClass('scroll-active');
	        	} else{
	        		$('.grid-ct3').removeAttr('style');
	        		$('.grid-ct4').removeAttr('style').removeClass('scroll-active');
	        	}
	        }
	        if($('.section-grid-dt4').length){
	        	if($(this).scrollTop() > $('.grid-ct3').offset().top){
	        		$('.grid-ct2').css({
	        			'top':'60px'
	        		});
	        	} else{
	        		$('.grid-ct2').removeAttr('style');
	        	}
	        }
		} else if (bodyWidth > 991) {
			if($(this).scrollTop() > 250){
	        	$('header .menu-wrap').addClass('menu-wrap-scroll');
	        	if(activeParallax){
	            	$('.bg-parallax').css('background-position-y',`20px`);
	            }
	        	$('.fab-box').css('right','0');
	        } else{
	            $('header .menu-wrap').removeClass('menu-wrap-scroll');
	            if(activeParallax){
	            	$('.bg-parallax').css('background-position-y',`${headerHeight}px`);
	            }
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
			if($(this).scrollTop() > 200){
				$('.fab-box').css('bottom','0');
				if($(this).scrollTop() > pageScroll && $('.main-menu').css('display') == 'none'){
		        	$('header').css('top','-100px');
		        	$('.lang-menu,.login-menu').removeClass('open-block');
		        	$('#search-nav-top').slideUp(100);
		        	pageScroll = $(this).scrollTop();
		        } else{
		            $('header').css('top','0');
		            pageScroll = $(this).scrollTop();
		        }
			} else{
				$('.fab-box').css('bottom','-50px');
				$('header').css('top','0');
				pageScroll = 0;
			}
			
		}
	});
	if (bodyWidth <= 991) {
		$('.search-nav .btn-collep-mobi').click(function(){
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
	if(bodyWidth < 1025){
    	$('.best-support article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','400px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('.wrap-slide-sp article').hover(function(){
	    	$(this).children('.paragraph').css('max-height','500px');
	    },function(){
	    	$(this).children('.paragraph').removeAttr('style');
	    });
	    $('body').delegate('.trip .content-trip .paragraph','click',function(){
	    	$(this).css('max-height','400px');
	    });
	    $('body').click(function(e){
			if (!$('.trip .content-trip .paragraph').is(e.target) && $('.trip .content-trip .paragraph').has(e.target).length === 0) {
	            $('.trip .content-trip .paragraph').removeAttr('style');
	        }
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
	if (bodyWidth <= 520) {
		$('.menu-mobile-back button').click(function(){
			$('.main-menu').removeClass('main-menu-transform');
			$('.sub-menu').removeClass('open-flex');
		});
	}
	$('.login-top>a').click(function(){
		$(this).next('.login-menu').toggleClass('open-block');
		$(this).toggleClass('active');
	});
	$('.lang-top>a').click(function(){
		$(this).next('.lang-menu').toggleClass('open-block');
		$(this).toggleClass('active');
	});
	if (bodyWidth <= 767) {
		$('.lang-menu>li>a').click(function(){
			$('.lang-top>a>font').text($(this).text().slice(0,2));
			$('.lang-menu').removeClass('open-block');
		});
		$('.lang-top>a>font').text($('.lang-top>a>font').text().slice(0,2));
	} else{
		$('.lang-menu>li>a').click(function(){
			$('.lang-top>a>font').text($(this).text());
			$('.lang-menu').removeClass('open-block');
		});
	}
	$('.open-search-top').click(function(){
		$('#search-nav-top').slideToggle(300);
	});
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
				$(this).parent('.togg-wrap').css('z-index','0');
			} else{
				$(this).parent('.togg-wrap').children('.arrow-radius').removeClass('rotage180');
				$(this).parent('.togg-wrap').children('.link-st3.btn-more-ex').text('Click to view more experiences');
				$(this).parent('.togg-wrap').children('.link-st3.btn-more-food').text('Click to view more Vietnamese Foods');
				$(this).parent('.togg-wrap').css('z-index','3');
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
	/*=======cruise-4=========*/
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
	/*============end cruise -4=====*/
	if($('.section-grid-dt3, .section-grid-dt4').length){
		$('.group-head').click(function(){
			let thisHidden = $(this).next('.hidden-tablet');
			thisHidden.slideToggle(300);
			$(this).toggleClass('active');
			/*if(thisHidden.find('.wrap-slide-st9').length){
				thisHidden.find('.wrap-slide-st9 .gallery').slick('unslick');
				if($(this).attr('class').search('active') == -1){
					for(let i=1; i<=thisHidden.find('.wrap-slide-st9').length; i++){
						thisHidden.find('.wrap-slide-st9 .gallery').slick({
							dots: true,
							dotsClass: 'wrap-dots',
							infinite: false,
							slidesToShow: 1,
							useTransform: false,
							//adaptiveHeight: true,
							prevArrow: `#slide-st9-${i} .arrow-left`,
					        nextArrow: `#slide-st9-${i} .arrow-right`
						});
					}
					
				}
			}*/
		});
		$('.group-ct1-1 .read-more-st3>.link-st3').click(function(){
			let boxHide = $(this).parent('.read-more-st3').prev('.div-hidden');
			boxHide.toggleClass('paragraph-show');
			if(boxHide.css('max-height') == 'none'){
				$(this).text('Less ...');
				$(this).parent('.read-more-st3').css('z-index','0');
			} else{
				$(this).text('Read More ...');
				$(this).parent('.read-more-st3').css('z-index','5');
			}
		});
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
		let thistogg = $(this).closest('.wrap-detail-day,.box-ct1-itine,.box-modal-intine');
		thistogg.find('.order-day>a:first-child').addClass('active');
		thistogg.find('.panel').slideDown(500);
	});
	$('#close-all-1').click(function(){
		let thistogg = $(this).closest('.wrap-detail-day,.box-ct1-itine,.box-modal-intine');
		thistogg.find('.order-day>a:first-child').removeClass('active');
		thistogg.find('.panel').slideUp(500);
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
    if($('.fab-box-tablet').length){
    	$('.fab-box-tablet .enqui-tablet').click(function(){
    		goToOffset('#enquiry-offset');
    	});
    }
    for(let i=0; i<$('.box-hidden-st3').length; i++){
    	let paraText = $('.box-hidden-st3 .paragraph span').eq(i).text();
    	$('.box-hidden-st3').eq(i).append(`<p class="text-hidden">${paraText}</p>`);
    	$('.cruise-box-st3 .box-hidden-st3 .paragraph span').eq(i).text(paraText.substr(0, 200));
    	if(bodyWidth < 991){
    		$('.wrap-slide-st3 .box-hidden-st3 .paragraph span').eq(i).text(paraText.substr(0, 240));
    	} else{
    		$('.wrap-slide-st3 .box-hidden-st3 .paragraph span').eq(i).text(paraText.substr(0, 480));
    	}
    	$('.box-hidden-st3 .link-st3').eq(i).click(function(){
    		let temText = $('.box-hidden-st3 .paragraph span').eq(i).text();
    		$('.box-hidden-st3 .paragraph span').eq(i).text($('.text-hidden').eq(i).text());
    		$('.text-hidden').eq(i).text(temText);
    		let clickText = $('.box-hidden-st3 .link-st3').eq(i);
    		if(clickText.text() == '...More'){
    			clickText.text('...Less');
    		} else{
    			clickText.text('...More');
    		}
    	});
    }
    $('.box-table>a').click(function(){
		$(this).parent('.box-table').children('div').animate({ scrollLeft: '+=100' }, 100);
		return false; 
	});
    $('.special-offer-box').click(function(){
    	$(this).parent('.foot-cruise-st3').nextAll('.hidden-offer-box').slideToggle(500);
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
	if($('.wrap-map').length){
		$('.map-home .map-coo').click(function(){
			$('.map-home .map-coo').removeClass('map-coo-active');
			$(this).addClass('map-coo-active');
		});
		$('body').click(function(e){
			if (!$('.map-coo').is(e.target) && $('.map-coo').has(e.target).length === 0) {
	            $('.map-coo').removeClass('map-coo-active');
	        }
	    });
	    $('.map-home-mobile .col-sm-6').on('touchstart',function(){
	    	$(this).addClass('active-hover');
	    });
	   	$('.map-home-mobile .col-sm-6').on('touchend',function(){
	    	$(this).removeClass('active-hover');
	    });
	}
	//carousel-st1
	if ($('.wrap-slide-st1').length > 0) {
		$(`.wrap-slide-st1 .gallery`).slick({
			//lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			//adaptiveHeight: true,
			useTransform: false,
	        prevArrow: `.wrap-slide-st1 .arrow-left`,
	        nextArrow: `.wrap-slide-st1 .arrow-right`
	    });
	    $(`.wrap-slide-st1 .synch-carousels`).one('mousedown',function(){
		    $(`.wrap-slide-st1 .item img`).each(function(){
		    	if($(this).attr('src') == '#'){
		    		$(this).attr('src',$(this).attr('data-img'));
		    	}
		    });
		});
		if(bodyWidth <= 1199){
            $(`.wrap-slide-st1 .synch-carousels`).one("swipe", function(e) {
                $(`.wrap-slide-st1 .item img`).each(function(){
			    	if($(this).attr('src') == '#'){
			    		$(this).attr('src',$(this).attr('data-img'));
			    	}
			    });
            });
        }
	}
	//carousel-st2
	if ($('.wrap-slide-st2').length > 0) {
		$(`.wrap-slide-st2 .gallery`).slick({
			slidesToShow: 3,
			lazyLoad: 'ondemand',
			//infinite: false,
			centerMode: true,
			centerPadding: '0',
			//adaptiveHeight: false,
			//fade: true,
			useTransform: false,
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
			lazyLoad: 'ondemand',
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
	//carousel-st8
	if ($('.wrap-slide-st8').length > 0 && bodyWidth < 992) {
		$(`.wrap-slide-st8 .gallery`).slick({
			dots: true,
			dotsClass: 'wrap-dots',
			infinite: false,
			slidesToShow: 1,
			infinite: true,
			arrows: false
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
	//carousel-sp2
	if ($('.wrap-slide-sp2').length && bodyWidth < 768) {
		$(`.wrap-slide-sp2 .gallery`).slick({
			slidesToShow: 1,
			centerMode: true,
			centerPadding: `${bodyWidth/5.5}px`,
			useTransform: false,
			initialSlide: 1,
			arrows: false
		});
	}
	//carousel-modal
	if($('.wrap-slide-modal').length){
		$('.btn-create-trip').click(function(){
			$('.wrap-slide-modal .gallery').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				useTransform: false,
				dots: true,
				dotsClass: 'wrap-dots',
				// adaptiveHeight: true,
		        prevArrow: `.wrap-slide-modal .arrow-left`,
		        nextArrow: `.wrap-slide-modal .arrow-right`,
		        responsive: [
		        	{
		        		breakpoint: 992,
					    settings: {
					      	slidesToShow: 3
					    }
		        	},
		        	{
		        		breakpoint: 480,
					    settings: {
					      	slidesToShow: 2
					    }
		        	}
		        ]
			});
		});
		$('#creat-trip-modal .btn-close').click(function(){
			$('.wrap-slide-modal .gallery').slick('unslick');
		});
		/*$('body').click(function(e){
			if (!$('#creat-trip-modal').is(e.target) && $('#creat-trip-modal').has(e.target).length === 0) {
	            $('.wrap-slide-modal .gallery').slick('unslick');
	        }
	    });*/
	}
	//gallery-img
	/*if ($('.wrap-gallery-img').length > 0) {
		$('.open-img').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.wrap-gallery-img').css({
				'z-index':'210',
				'visibility':'visible'
			});
			$(`.wrap-gallery-img .gallery`).slick("slickGoTo", 0);
		});
		$('.wrap-gallery-img .synch-carousels').eq(0).addClass('open-relative');
		if($(`.open-exp-gallery-0`).length){
			for(let i=0; i<$('.open-img').length; i++){
				$(`.open-exp-gallery-${i}`).click(function(){
					$(`#synch-exp-${i}`).css({
						'z-index':'210',
						'visibility':'visible'
					});
				});
				$(`#synch-exp-${i} .gallery`).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
		            fade: true,
					lazyLoad: 'ondemand',
					infinite: true,
					adaptiveHeight: true,
					useTransform: false,
			        prevArrow: `#synch-exp-${i} .arrow-left`,
			        nextArrow: `#synch-exp-${i} .arrow-right`
			    });
			    $(`.open-acc-gallery-${i}`).click(function(){
					$(`#synch-acc-${i}`).css({
						'z-index':'210',
						'visibility':'visible'
					});
				});
				$(`#synch-acc-${i} .gallery`).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
		            fade: true,
					lazyLoad: 'ondemand',
					infinite: true,
					adaptiveHeight: true,
					useTransform: false,
			        prevArrow: `#synch-acc-${i} .arrow-left`,
			        nextArrow: `#synch-acc-${i} .arrow-right`
			    });
			}
		} else{
			$('.open-img').click(function(){
				$(`.wrap-gallery-img .synch-carousels`).css({
					'z-index':'210',
					'visibility':'visible'
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
		
		$('.wrap-gallery-img .btn-close').click(function(){
			$('.wrap-gallery-img, .wrap-gallery-img .synch-carousels').css({
				'z-index':'-5',
				'visibility':'hidden'
			});
		});
	}*/
	if($('.wrap-gallery-img').length){
		for(let i=0; i<$('.synch-desti').length; i++){
			$(`.open-gallery-des-${i}`).click(function(){
				$('.modal-container').removeClass('close-display');
				$('.wrap-gallery-img').css({
					'z-index':'210',
					'visibility':'visible'
				});
				$(`.wrap-gallery-img .synch-carousels`).removeClass('open-block');
				$(`#synch-desti-${i}`).addClass('open-block');
				//$(`#synch-desti-${i} .gallery`).slick("slickGoTo", 0);
				$(`#synch-desti-${i} .gallery`).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
		            fade: true,
					lazyLoad: 'ondemand',
					infinite: true,
					adaptiveHeight: true,
					useTransform: false,
			        prevArrow: `#synch-desti-${i} .arrow-left`,
			        nextArrow: `#synch-desti-${i} .arrow-right`
				});
			});
		}
		
	}
	$('.wrap-gallery-img .btn-close').click(function(){
		$('.wrap-gallery-img').css({
			'z-index':'-5',
			'visibility':'hidden'
		});
		$(this).addClass('close-display');
		$(`.synch-desti .gallery .slick-track`).closest('.gallery').slick('unslick');

	});
	if ($('.wrap-gallery-img #carousel-img-cr').length > 0) {
		$('.open-img').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.wrap-gallery-img').css({
				'z-index':'210',
				'visibility':'visible'
			});
			$(`.wrap-gallery-img .synch-carousels`).removeClass('open-block');
			$(`#carousel-img-cr`).addClass('open-block');
			//$(`#carousel-img-cr .gallery`).slick("slickGoTo", 0);
			$(`#carousel-img-cr .gallery`).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
	            fade: true,
				lazyLoad: 'ondemand',
				infinite: true,
				adaptiveHeight: true,
				useTransform: false,
		        prevArrow: `#carousel-img-cr .arrow-left`,
		        nextArrow: `#carousel-img-cr .arrow-right`
		    });
		});
		$('.open-img-modal').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.wrap-gallery-img .btn-close').removeClass('close-display');
			$('.wrap-gallery-img').css({
				'z-index':'210',
				'visibility':'visible'
			});
			$(`.wrap-gallery-img .synch-carousels`).removeClass('open-block');
			$(`#carousel-img-cr`).addClass('open-block');
			//$(`#carousel-img-cr .gallery`).slick("slickGoTo", 0);
			$(`#carousel-img-cr .gallery`).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
	            fade: true,
				lazyLoad: 'ondemand',
				infinite: true,
				adaptiveHeight: true,
				useTransform: false,
		        prevArrow: `#carousel-img-cr .arrow-left`,
		        nextArrow: `#carousel-img-cr .arrow-right`
		    });
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
	$('.btn-modal-tour-2').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-tour-st2').removeClass('close-display');
	});
	$('.btn-close').click(function(){
		$(this).closest('.modal, .modal-2, .video-modal').addClass('close-display');
		$(this).closest('.modal').removeAttr('style');
		if(!$(this).parent('.wrap-gallery-img,.video-modal').length){
			$('.modal-container').addClass('close-display');
		}
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
	if($('.modal-map').length){
		$('.open-map-box').click(function(){
			$('.modal-container').removeClass('close-display');
			$('.modal-map').removeClass('close-display');
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
	// modal-team
	if($('.modal-info-team').length){
		$('.open-info-modal').click(function(){
			$('.modal-container').addClass('open-block');
			$('.modal-info-team').removeClass('close-display');

			$('.modal-info-team .wrap-slide-st10 .gallery').slick({
				dots: true,
				dotsClass: 'wrap-dots',
				infinite: false,
				slidesToShow: 1,
				useTransform: false,
				//adaptiveHeight: true,
				prevArrow: `.wrap-slide-st10 .arrow-left`,
		        nextArrow: `.wrap-slide-st10 .arrow-right`
			});			
			$(`.wrap-slide-st10 .slick-track`).height($(`.wrap-slide-st10 .item`).eq(0).height());
			$(`.wrap-slide-st10`).one('mousedown',function(){
			    $(`.wrap-slide-st10 .item img`).each(function(){
			    	if($(this).attr('src') == '#'){
			    		$(this).attr('src',$(this).attr('data-img'));
			    	}
			    });
			});
			if(bodyWidth <= 1199){
	            $(`.wrap-slide-st10`).one("swipe", function(e) {
	                $(`.wrap-slide-st10 .item img`).each(function(){
				    	if($(this).attr('src') == '#'){
				    		$(this).attr('src',$(this).attr('data-img'));
				    	}
				    });
	            });
	        }
			$('.modal-info-team .btn-close').click(function(){
				$('.wrap-slide-st10 .gallery').slick('unslick');
				$('.modal-container').removeClass('open-block');
			});
		});
	}
	$('.modal-container').on('click',function(){
		$(this).addClass('close-display');
		$(this).removeClass('open-block');
		$('.modal, .modal-2,.video-modal').addClass('close-display');
		$('.modal').removeAttr('style');
		$('.wrap-gallery-img, .wrap-gallery-img .synch-carousels').removeAttr('style');
		if($('.video-modal').length){
			$('#playvideo').attr('src', $('#playvideo').attr('src').replace('autoplay=1', 'autoplay=0'));
	    }
	    if($('.modal-cr-info-room').length){
	    	$('.modal-cr-info-room').css({
	    		'z-index':'-3',
	    		'visibility':'hidden'
	    	});
	    }
	    if($('.wrap-slide-modal .slick-track').length){
	    	$('.wrap-slide-modal .gallery').slick('unslick');
	    }
	    if($('.wrap-slide-st10 .slick-track').length){
	    	$('.wrap-slide-st10 .gallery').slick('unslick');
	    }
	    if($('.wrap-gallery-img .slick-track').length){
	    	$('.wrap-gallery-img .slick-track').closest('.gallery').slick('unslick');
	    }
	});
	$('.wrap-more-inclusions>a').click(function(){
		$(this).parent('.wrap-more-inclusions').next('.hidden-mobile').slideToggle('slow');
		$(this).next('.icon-font').toggleClass('plus').toggleClass('minus');
	});
	if($('.wrap-cruise-media').length){
		let mediaHeight = ($('.wrap-cruise-media .wrap-media').height() - 4)/2;
		$('.box-divi-row a').height(mediaHeight);
	}
	if($('.wrap-content-tab').length){
		$('.btn-tab-itinerary').click(function(){
			$('.detail-tour-content>div').addClass('close-display');
			$('.wrap-full-itinerary').removeClass('close-display');
			$('.wrap-content-tab .blogs-tab a').removeClass('active');
			$(this).addClass('active');
		});
		$('.btn-tab-experience').click(function(){
			$('.detail-tour-content>div').addClass('close-display');
			$('.experience-wrap').removeClass('close-display');
			$('.wrap-content-tab .blogs-tab a').removeClass('active');
			$(this).addClass('active');
		});
		$('.btn-tab-accmmo').click(function(){
			$('.detail-tour-content>div').addClass('close-display');
			$('.accommodation-wrap').removeClass('close-display');
			$('.wrap-content-tab .blogs-tab a').removeClass('active');
			$(this).addClass('active');
		});
		$('.btn-tab-inclusion').click(function(){
			$('.detail-tour-content>div').addClass('close-display');
			$('.wrap-inclusion').removeClass('close-display');
			$('.wrap-content-tab .blogs-tab a').removeClass('active');
			$(this).addClass('active');
		});
		$('.btn-tab-map').click(function(){
			$('.detail-tour-content>div').addClass('close-display');
			$('.wrap-map-loca').removeClass('close-display');
			$('.wrap-content-tab .blogs-tab a').removeClass('active');
			$(this).addClass('active');
		});
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
		if (!$('.booking-step-where,.booking-step-where .value').is(e.target) && $('.booking-step-where,.booking-step-where .value').has(e.target).length === 0) {
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
        if(!$('.booking-step-m-time').is(e.target) && $('.booking-step-m-time').has(e.target).length === 0){
        	$('.box-mon-time').removeClass('open-flex');
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
        if(!$('#account-top').is(e.target) && $('#account-top').has(e.target).length === 0){
        	$('#account-top .login-menu').removeClass('open-block');
        	$('#account-top>a').removeClass('active');
        }
        if(!$('.lang-top').is(e.target) && $('.lang-top').has(e.target).length === 0){
        	$('.lang-top .lang-menu').removeClass('open-block');
        	$('.lang-top>a').removeClass('active');
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
/*	if($('.booking-step-where').length){
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
	}*/
	if($('.booking-step-where').length){
		$('#creat-trip-modal .booking-step-where .btn-value').click(function(){
			$(this).toggleClass('active');
			let valueActive = $(this).children('b').text();
			let getBtn = $('#booking-widget-homepage .booking-step-where .btn-value');
			for(let i=0; i < getBtn.length; i++){
				if(getBtn.eq(i).children('b').text() == valueActive){
					getBtn.eq(i).toggleClass('checked');
				}
			}
			$('#creat-trip-modal .booking-step-where>select').html('');
			let btnActive = $('#creat-trip-modal .booking-step-where .active');
			for(let i=0; i < btnActive.length; i++){
				$('#creat-trip-modal .booking-step-where>select').append(`<option value="${btnActive.children('b').eq(i).text()}" selected></option>`);
			}
			if(btnActive.length == 0){
				$('#booking-widget-homepage .booking-step-where .text b').html(`Where do you want to go?`);
			} else{
				$('#booking-widget-homepage .booking-step-where .text b').html(`${btnActive.length} selected`);
			}
		});
		$('#booking-widget-homepage .booking-step-where .btn-value').click(function(){
			let valueChecked = $(this).children('b').text();
			let getBtn2 = $('#creat-trip-modal .booking-step-where .btn-value');
			for(let i=0; i < getBtn2.length; i++){
				if(getBtn2.eq(i).children('b').text() == valueChecked){
					getBtn2.eq(i).click();
				}
			}
		});
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
		$('.booking-step-class .btn-value').click(function(){
			if($(this).attr('class').search('checked') != -1){
				$(this).closest('.select-st2').find('.btn-value').removeClass('checked');
			} else {
				$(this).closest('.select-st2').find('.btn-value').removeClass('checked');
				$(this).addClass('checked');
			}
			if($('.order-choose').length){
				let valueActive = $(this).children('b').text().toLowerCase();
				let getBtn = $('.order-choose .row-choose');
				for(let i=0; i < getBtn.length; i++){
					if(getBtn.eq(i).find('.order-choose-info>div:first-child').text().toLowerCase() == valueActive){
						if(getBtn.eq(i).find('.service-check-2')[0].checked){
							getBtn.eq(i).removeClass('choosed');
							getBtn.eq(i).find('.service-check-2')[0].checked = false;
							getBtn.eq(i).find('label').removeClass('active');
						} else{
							getBtn.eq(i).addClass('choosed');
							getBtn.eq(i).find('.service-check-2')[0].checked = true;
							getBtn.eq(i).find('label').addClass('active');
						}
					} else{
						getBtn.eq(i).removeClass('choosed');
						getBtn.eq(i).find('.service-check-2')[0].checked = false;
						getBtn.eq(i).find('label').removeClass('active');
					}
				}
			}
			let btnActive = $('.booking-step-class .btn-value.checked');
			if(btnActive.length == 0){
				$('.booking-step-class .text b').html(`Tour Class`);
				$('.booking-step-class select').html('');
			} else{
				$('.booking-step-class .text b').html($(this).children('b').text());
				$('.booking-step-class select').html(`<option value="${$(this).children('b').text()}" selected></option>`);
			}
			$(this).closest('.value').removeClass('open-block');
		});
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
	if($('.booking-step-depa').length){
		$('.booking-step-depa .text').click(function(){
			$(this).nextAll('.value-3').toggleClass('open-block');
		});
		$('.booking-step-depa .value-3 .btn-value').click(function(){
			$('.booking-step-depa .value-3 .btn-value').removeClass('active');
			$(this).addClass('active');
			$('.booking-step-depa>input').val($(this).attr('data-value'));
			$('.booking-step-depa .text b').text($(this).attr('data-value'));
			$('.booking-step-depa .value-3').removeClass('open-block');
			
		});
		$('body').click(function(e){
			if (!$('.booking-step-depa').is(e.target) && $('.booking-step-depa').has(e.target).length === 0) {
	            $('.booking-step-depa .value-3').removeClass('open-block');
	        }
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
								<select id="typecab${number1+1}" name="typecab${number1+1}" class="select-st9" onchange="selectChange(this,'.room-cruise-${number1+1}')">
									<option value="0" selected>Double</option>
									<option value="1">Twin</option>
									<option value="2">Single</option>
								</select>
							</div>
							<div class="room-element">
								<div class="wrap-adult-number">
									<button class="btn-down" type="button" onclick="btnDownClick(this,'.adult-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="adult-number">2</strong>&nbsp;Adult(>12)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.adult-number-sum','.room-cruise-${number1+1}',4)">+</button>
									<input type="text" id="adult${number1+1}" name="adult${number1+1}" value="2">
								</div>
								<div class="wrap-child-number">
									<button class="btn-down btn-disabled" type="button" onclick="btnDownClick(this,'.child-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="child-number">0</strong>&nbsp;Child(4-12)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.child-number-sum','.room-cruise-${number1+1}',2)">+</button>
									<input type="text" id="child${number1+1}" name="child${number1+1}" value="0">
								</div>
								<div class="wrap-infant-number">
									<button class="btn-down btn-disabled" type="button" onclick="btnDownClick(this,'.infant-number-sum','.room-cruise-${number1+1}')">-</button>
									<span><strong class="infant-number">0</strong>&nbsp;Infant(<3)</span>
									<button class="btn-up" type="button" onclick="btnUpClick(this,'.infant-number-sum','.room-cruise-${number1+1}',2)">+</button>
									<input type="text" id="infant${number1+1}" name="infant${number1+1}" value="0">
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
	/*===search-top=====*/
	$('body').click(function(e){
		if (!$('.search-nav-where').is(e.target) && $('.search-nav-where').has(e.target).length === 0) {
            $('.search-nav-where .value').removeClass('open-block');
        }
        if (!$('.search-nav-exp').is(e.target) && $('.search-nav-exp').has(e.target).length === 0) {
            $('.search-nav-exp .value').removeClass('open-block');
        }
        if (!$('.search-nav-days').is(e.target) && $('.search-nav-days').has(e.target).length === 0) {
            $('.search-nav-days .value').removeClass('open-block');
        }
        if (!$('.search-nav-price').is(e.target) && $('.search-nav-price').has(e.target).length === 0) {
            $('.search-nav-price .value').removeClass('open-block');
        }
    });
    $('.search-nav-where .btn-value').click(function(){
    	if($(this).attr('class').search('checked') != -1){
    		$(this).removeClass('checked');
    	} else{
    		$(this).addClass('checked');
    	}
    	let numCheck = $('.search-nav-where .btn-value.checked');
    	$('.search-nav-where>select').html('');
    	if(numCheck.length == 0){
    		$('.search-nav-where .text b').text('Where do you want to go?');
    	} else{
    		for(let i=0; i<numCheck.length ; i++){
    			$('.search-nav-where>select').append(`<option value="${numCheck.eq(i).children('b').text()}" selected></option>`);
    		}
    		$('.search-nav-where .text b').text(`${numCheck.length} selected`);
    	}
    });
    $('.search-nav-exp .btn-value').click(function(){
    	if($(this).attr('class').search('checked') != -1){
    		$(this).removeClass('checked');
    	} else{
    		$(this).addClass('checked');
    	}
    	let numCheck = $('.search-nav-exp .btn-value.checked');
    	$('.search-nav-exp>select').html('');
    	if(numCheck.length == 0){
    		$('.search-nav-exp .text b').text('Experiences');
    	} else{
    		for(let i=0; i<numCheck.length ; i++){
    			$('.search-nav-exp>select').append(`<option value="${numCheck.eq(i).children('b').text()}" selected></option>`);
    		}
    		$('.search-nav-exp .text b').text(`${numCheck.length} selected`);
    	}
    });
    $('.search-nav-days .btn-value').click(function(){
    	if($(this).attr('class').search('checked') != -1){
    		$(this).removeClass('checked');
    		$('.search-nav-days>input').val('');
    		$('.search-nav-days .text b').text('Departure');
    	} else{
    		$('.search-nav-days .btn-value').removeClass('checked');
    		$(this).addClass('checked');
    		$('.search-nav-days>input').val($(this).children('b').text());
    		$('.search-nav-days .text b').text($(this).children('b').text());
    	}
    	$('.search-nav-days .value').removeClass('open-block');
    });
    $('.search-nav-price .btn-value').click(function(){
    	if($(this).attr('class').search('checked') != -1){
    		$(this).removeClass('checked');
    		$('.search-nav-price>input').val('');
    		$('.search-nav-price .text b').text('Departure');
    	} else{
    		$('.search-nav-price .btn-value').removeClass('checked');
    		$(this).addClass('checked');
    		$('.search-nav-price>input').val($(this).children('b').text());
    		$('.search-nav-price .text b').text($(this).children('b').text());
    	}
    	$('.search-nav-price .value').removeClass('open-block');
    });
    /*===end search-top =====*/
	/*===filter 2=====*/
	if($('.wrap-filter-st2, .trip-request-box').length){
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
				$('.filter-who-2 .text b').html(`Experiences`);
			} else{
				$('.filter-who-2 .text b').html(`${numberValue} selected`);
			}
		});
		$('.filter-price-2 .btn-value').click(function(){
			if($(this).attr('class').search('checked') != -1){
				$('.filter-price-2 .btn-value').removeClass('checked');
				if($(this).closest('.trip-request-box').length){
					$('.filter-price-2 .text b').html(`Country *`);
				} else{
					$('.filter-price-2 .text b').html(`Duration`);
				}
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
	//============inquery-cruise-3=============
	$('.open-cruise-inquiry').on('click',function(){
		$('.modal-container').removeClass('close-display');
		$('#modal-inquery-cruise').removeClass('close-display');
		$('#modal-inquery-cruise').css('top',`${$(window).scrollTop()+15}px`);
	});
	if($('.booking-step-itinerary').length){
		$('#modal-inquery-cruise .booking-step-itinerary .btn-value').click(function(){
			let thisVal = $(this).children('b').text();
			let parentItine = $(this).closest('.booking-step-itinerary');
			parentItine.children('select').html(`<option value="${thisVal}" selected></option>`);
			parentItine.find('.text b').text(thisVal);
			parentItine.children('.value').removeClass('open-block');
			if($('.box-check-rates .booking-step-itinerary').length){
				$('.box-check-rates .booking-step-itinerary .text b').text(thisVal);
			}
		});
		$('.box-check-rates .booking-step-itinerary .btn-value').click(function(){
			let thisVal = $(this).children('b').text();
			let btnValue = $('#modal-inquery-cruise .booking-step-itinerary .btn-value');
			$(this).closest('.value').removeClass('open-block');
			for(let i=0; i<btnValue.length; i++){
				if(btnValue.eq(i).children('b').text() == thisVal){
					btnValue.eq(i).click();
				}
			}
		});
		$('body').click(function(e){
			if (!$('.booking-step-itinerary').is(e.target) && $('.booking-step-itinerary').has(e.target).length === 0) {
	            $('.booking-step-itinerary .value').removeClass('open-block');
	        }
	    });
	}
	if($('.booking-step-nocabin').length){
		$('body').click(function(e){
			if (!$('.booking-step-nocabin').is(e.target) && $('.booking-step-nocabin').has(e.target).length === 0) {
	            $('.booking-step-nocabin .value').removeClass('open-block');
	        }
	    });
	    $('#modal-inquery-cruise .booking-step-nocabin .btn-value').click(function(){
	    	let thisVal = $(this).children('b').text();
	    	let parentItine = $(this).closest('.booking-step-nocabin');
	    	parentItine.children('select').html(`<option value="${thisVal}" selected></option>`);
			parentItine.find('.text b').text(`No.of cabin(s): ${thisVal}`);
			if($('.box-check-rates .booking-step-nocabin').length){
				$('.box-check-rates .booking-step-nocabin .text b').text(`No.of cabin(s): ${thisVal}`);
			}
			$('.booking-step-nocabin .value').removeClass('open-block');
			$('#modal-inquery-cruise .wrap-list-cabins').html('');
			for(let i=0; i<thisVal; i++){
				$('#modal-inquery-cruise .wrap-list-cabins').append(`
					<div class="box-cabin-st2">
		            	<div class="col-xlg-12">Cabin ${i + 1}:</div>
		            	<div class="half">
		            		<div class="form-field col-xlg-6 col-xsm-12">
								<div class="booking-step-cabin-name select-st1">
				            		<select name="">
				            			<option value="Superior Stateroom" selected>Superior Stateroom</option>
				            		</select>
									<span class="text">
										<b>Superior Stateroom</b>
										<i class="icon-font bed"></i>
									</span>
									<ul class="value">
										<li>
											<a href="javascript:" class="btn-value checked">
												<b>Superior Stateroom</b>
												<i class="icon-font checkmark"></i>
											</a>
										</li>
										<li>
											<a href="javascript:" class="btn-value">
												<b>Deluxe Stateroom</b>
												<i class="icon-font checkmark"></i>
											</a>
										</li>
										<li>
											<a href="javascript:" class="btn-value">
												<b>Signature Suite</b>
												<i class="icon-font checkmark"></i>
											</a>
										</li>
										<li>
											<a href="javascript:" class="btn-value">
												<b>The Taj Suite</b>
												<i class="icon-font checkmark"></i>
											</a>
										</li>
										<li>
											<a href="javascript:" class="btn-value">
												<b>Lord Byrons Suite</b>
												<i class="icon-font checkmark"></i>
											</a>
										</li>
									</ul>
								</div>
			            	</div>
			            	<div class="form-field col-xlg-6 col-xsm-12">
			            		<div class="booking-step-cabin booking-st1">
									<span class="text">
										<b>
											<i class="icon-font icon-users"></i>&nbsp;
											<strong class="adult-number">2</strong>&nbsp;Adult(s),&nbsp;<strong class="child-number">0</strong>&nbsp;Children,&nbsp;<strong class="infant-number">0</strong>&nbsp;Infant
										</b>
										<i class="icon-font select-arrow-thin"></i>
									</span>
									<div class="value-2">
										<div class="room-cruise">
											<div class="room-type">
												<select class="select-st9">
													<option value="1" selected="">Double</option>
													<option value="2">Twin</option>
													<option value="3">Single</option>
												</select>
											</div>
											<div class="room-element">
												<div class="wrap-adult-number">
													<button class="btn-down" type="button">-</button>
													<span><strong class="adult-number">2</strong>&nbsp;Adult(&gt;12)</span>
													<button class="btn-up" type="button">+</button>
													<input type="text" name="" value="2">
												</div>
												<div class="wrap-child-number">
													<button class="btn-down btn-disabled" type="button">-</button>
													<span><strong class="child-number">0</strong>&nbsp;Child(4-12)</span>
													<button class="btn-up" type="button">+</button>
													<input type="text" name="" value="0">
												</div>
												<div class="wrap-infant-number">
													<button class="btn-down btn-disabled" type="button">-</button>
													<span><strong class="infant-number">0</strong>&nbsp;Infant(&lt;3)</span>
													<button class="btn-up" type="button">+</button>
													<input type="text" name="" value="0">
												</div>
											</div>
										</div>
									</div>
								</div>
			            	</div>
		            	</div>
		            </div>`);
			}
	    });
		$('.box-check-rates .booking-step-nocabin .btn-value').click(function(){
			let thisVal = $(this).children('b').text();
			let btnValue = $('#modal-inquery-cruise .booking-step-nocabin .btn-value');
			for(let i=0; i<btnValue.length; i++){
				if(btnValue.eq(i).children('b').text() == thisVal){
					btnValue.eq(i).click();
				}
			}
		});
	}
	if($('.booking-step-cabin-name').length){
		$('.booking-step-cabin-name .text').off('click');
		$('.wrap-list-cabins').delegate('.booking-step-cabin-name','click',function(){
			$(this).children('.value').toggleClass('open-block');
		});
		$('body').click(function(e){
			if (!$('.booking-step-cabin-name').is(e.target) && $('.booking-step-cabin-name').has(e.target).length === 0) {
	            $('.booking-step-cabin-name .value').removeClass('open-block');
	        }
	    });
	    $('.wrap-list-cabins').delegate('.booking-step-cabin-name .btn-value','click',function(){
	    	let thisVal = $(this).children('b').text();
	    	let parentCabin = $(this).closest('.booking-step-cabin-name');
	    	parentCabin.find('.btn-value').removeClass('checked');
	    	$(this).addClass('checked');
	    	parentCabin.children('select').html(`<option value="${thisVal}" selected></option>`);
	    	parentCabin.find('.text b').text(thisVal);
	    });
	}
	if($('.booking-step-cabin').length){
		$('.booking-step-cabin .text').off('click');
		$('.wrap-list-cabins').delegate('.booking-step-cabin .text','click',function(){
			$(this).next('.value-2').toggleClass('open-block');
		});
		$('body').click(function(e){
			if (!$('.booking-step-cabin').is(e.target) && $('.booking-step-cabin').has(e.target).length === 0) {
	            $('.booking-step-cabin .value-2').removeClass('open-block');
	        }
	    });
	    $('.wrap-list-cabins').delegate('.wrap-adult-number .btn-down','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).nextAll('.btn-up').removeClass('btn-disabled');
	    	if(thisVal > 0){
	    		thisWrap.find('.adult-number').text(thisVal - 1);
	    		$(this).nextAll('input').val(thisVal - 1);
	    		if(thisVal == 1){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	    $('.wrap-list-cabins').delegate('.wrap-adult-number .btn-up','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).prevAll('.btn-down').removeClass('btn-disabled');
	    	if(thisVal < 4){
	    		thisWrap.find('.adult-number').text(thisVal + 1);
	    		$(this).nextAll('input').val(thisVal + 1);
	    		if(thisVal == 4){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	    $('.wrap-list-cabins').delegate('.wrap-child-number .btn-down','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).nextAll('.btn-up').removeClass('btn-disabled');
	    	if(thisVal > 0){
	    		thisWrap.find('.child-number').text(thisVal - 1);
	    		$(this).nextAll('input').val(thisVal - 1);
	    		if(thisVal == 1){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	    $('.wrap-list-cabins').delegate('.wrap-child-number .btn-up','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).prevAll('.btn-down').removeClass('btn-disabled');
	    	if(thisVal < 4){
	    		thisWrap.find('.child-number').text(thisVal + 1);
	    		$(this).nextAll('input').val(thisVal + 1);
	    		if(thisVal == 4){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	    $('.wrap-list-cabins').delegate('.wrap-infant-number .btn-down','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).nextAll('.btn-up').removeClass('btn-disabled');
	    	if(thisVal > 0){
	    		thisWrap.find('.infant-number').text(thisVal - 1);
	    		$(this).nextAll('input').val(thisVal - 1);
	    		if(thisVal == 1){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	    $('.wrap-list-cabins').delegate('.wrap-infant-number .btn-up','click',function(){
	    	let thisVal = Number($(this).nextAll('input').val());
	    	let thisWrap = $(this).closest('.booking-step-cabin');
	    	$(this).prevAll('.btn-down').removeClass('btn-disabled');
	    	if(thisVal < 4){
	    		thisWrap.find('.infant-number').text(thisVal + 1);
	    		$(this).nextAll('input').val(thisVal + 1);
	    		if(thisVal == 4){
	    			$(this).addClass('btn-disabled');
	    		}
	    	}
	    });
	}
	
	/*============end-inquery-cruise-3=============*/
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
	/*============detail-grid===============*/
	if($('.order-box').length){
		$('.row-choose').click(function(){
			let btnValue = $(this).find('.order-choose-info>div:first-child').text().toLowerCase();
			let getBtn = $('.booking-step-class .btn-value');
			for(let i=0; i<getBtn.length; i++){
				if(getBtn.eq(i).children('b').text().toLowerCase() == btnValue){
					getBtn.eq(i).click();
				}
			}
		});
	}
	$('.open-cruise-itine').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-cruise-st2').removeClass('close-display');
	});
	$('.open-mess').click(function(){
		$('.modal-container').removeClass('close-display');
		$('.modal-messenger').removeClass('close-display');
	});
	$('#upload-img').change(function(){
		$(this).next('.fake-upload').find('.name-upload span').text($(this).prop('files')[0].name);
	});
	/*======booking=======*/
	if($('.room-booking-wrap').length){
		/*$('.room-booking-wrap').delegate(`.select-cabin input[type="radio"]`,'click',function(){
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
		});*/
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
	$('.btn-close-st2').click(function(){
		$(this).parent().hide(0);
	});
	/* ====== travel guide========*/
	if($('.travel-guide-container').length){
		$(window).bind('scroll', function(){
			if(bodyWidth >= 1350){
				if($(this).scrollTop() > ($('.banner-posts').offset().top)){
					$('.sticky-box').css({
		        			'top':'70px'
		        		});
				} else{
					$('.sticky-box').removeAttr('style');
				}
			}
		});
	}
	
	/* ====== end travel guide========*/
	/*====== hiệu ứng load more img =======*/
	if($('.crowd-container').length){
		if(bodyWidth >= 1351){
			for(let i=0; i<8; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-1');
			}
			for(let i=8; i<16; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-2');
			}
			for(let i=16; i<$('.crowd-box').length; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-3');
			}
			$('.crowd-row-1').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-2').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-3').wrapAll('<div class="row-crowd"></div>');
		} else if(bodyWidth >= 1024){
			for(let i=0; i<6; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-1');
			}
			for(let i=6; i<12; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-2');
			}
			for(let i=12; i<18; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-3');
			}
			for(let i=18; i<$('.crowd-box').length; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-4');
			}
			$('.crowd-row-1').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-2').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-3').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-4').wrapAll('<div class="row-crowd"></div>');
		} else if(bodyWidth >= 992){
			for(let i=0; i<5; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-1');
			}
			for(let i=5; i<10; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-2');
			}
			for(let i=10; i<15; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-3');
			}
			for(let i=15; i<20; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-4');
			}
			for(let i=20; i<$('.crowd-box').length; i++){
				$('.crowd-box').eq(i).addClass('crowd-row-5');
			}
			$('.crowd-row-1').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-2').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-3').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-4').wrapAll('<div class="row-crowd"></div>');
			$('.crowd-row-5').wrapAll('<div class="row-crowd"></div>');
		} else{
			for (var i = 0; i<$('.crowd-box').length;i+=3){
				if(i==6 || i==14){
					$('.crowd-box').filter(':eq('+i+'),:eq('+(i+1)+')').wrapAll('<div class="row-crowd"></div>');
					i--;
				} else{
			      $('.crowd-box').filter(':eq('+i+'),:eq('+(i+1)+'),:eq('+(i+2)+')').wrapAll('<div class="row-crowd"></div>');
				}
			}
		}
		$('.crowd-container .view-more-wrap .link-st4').click(function(){
			$('.row-crowd').addClass('open-flex');
			$(this).remove();
		});
	}
});
window.onload = function() {
	$(`.wrap-slide-st2 .gallery`).height($('.wrap-slide-st2 .slick-center').height());
	//$('.row-crowd').css('--maxHeight',$('.crow-size-1 img').height());
	/*let heightTrip = 91+$('.content-trip').height()+$('.trip a').height();
	$('.trip').height(heightTrip);*/

	//$('#preloader').delay(500).fadeOut(300);
    /*setTimeout(function(){
	    $('body').removeClass('preloading-bd');
	}, 800);*/
		//carousel-st9
	if($('.wrap-slide-st1').length){
		$('.wrap-slide-st1 .item>a:first-child').height($('.wrap-slide-st1 .img-origin').height());
	}
	if ($('.wrap-slide-st9').length > 0) {
		for(let i=0; i<$('.wrap-slide-st9 .synch-carousels').length; i++){
			$(`#slide-st9-${i} .gallery`).slick({
				dots: true,
				dotsClass: 'wrap-dots',
				infinite: false,
				slidesToShow: 1,
				useTransform: false,
				//adaptiveHeight: true,
				prevArrow: `#slide-st9-${i} .arrow-left`,
		        nextArrow: `#slide-st9-${i} .arrow-right`
			});
			$(`#slide-st9-${i} .slick-track`).height($(`#slide-st9-${i} .item`).eq(0).height());
			$(`#slide-st9-${i}`).one('mousedown',function(){
			    $(`#slide-st9-${i} .item img`).each(function(){
			    	if($(this).attr('src') == '#'){
			    		$(this).attr('src',$(this).attr('data-img'));
			    	}
			    });
			});
			if($('body').width() <= 1199){
	            $(`#slide-st9-${i}`).one("swipe", function(e) {
	                $(`#slide-st9-${i} .item img`).each(function(){
				    	if($(this).attr('src') == '#'){
				    		$(this).attr('src',$(this).attr('data-img'));
				    	}
				    });
	            });
	        }
		}
	}
};
let btnUpClick = function(a,b,c,d){
	let number13 = Number($(a).nextAll('input').val());
	let numberSum = Number($(b).html());
	let wrap = $(a).parent('div').attr('class');
	if(number13 < d){
		$(a).nextAll('input').val(`${number13 +1 }`);
		$(b).html(`${numberSum+1}`);
		$(c).find(`.${wrap} span>strong`).html(`${number13 + 1}`);
		$(c).find(`.${wrap} .btn-down`).removeClass('btn-disabled');
	}
	if((number13 + 1) == d){
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
/*let loadJson = function(a,x,y) {
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
});*/
/*======================END JSON============================*/