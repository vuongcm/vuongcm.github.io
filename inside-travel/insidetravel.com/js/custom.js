/*
Template Name: Flourish
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.0
*/

	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		"use strict";
	
		//Scrolling feature 

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});


		//Owl-carousels
		/*if ($("#owl-demo13").length > 0) {
	        $("#owl-demo13").owlCarousel({
	            items: 8,
	            itemsDesktop: [1199, 6],
	            itemsDesktopSmall: [979, 5],
	            itemsTablet: [600, 3],
	            itemsMobile: [479, 2]
	        });
	        $(".next13").click(function() {
	            $("#owl-demo13").trigger('owl.next');
	        });
	        $(".prev13").click(function() {
	            $("#owl-demo13").trigger('owl.prev');
	        });
	    }*/
		
		if ($("#owl-services").length > 0) {
        	$("#owl-services").slick({
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            //infinite: false,
	            //arrows: true,
	            dots: true,
	            responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: true
			      }
			    }

			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
	            //prevArrow: ".slick-content .left",
	            //nextArrow: ".slick-content .right"
        	});
        	$("#owl-services .slick-prev").html(`<i class="fa fa-chevron-left"></i>`);
        	$("#owl-services .slick-next").html(`<i class="fa fa-chevron-right"></i>`);
        	$("#owl-services .slick-dots>li>button").html(``);
    	}
    	if ($("#owl-team").length > 0) {
        	$("#owl-team").slick({
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            //infinite: false,
	            //arrows: true,
	            dots: true,
	            responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 479,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: true
			      }
			    }

			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
	            //prevArrow: ".slick-content .left",
	            //nextArrow: ".slick-content .right"
        	});
        	$("#owl-team .slick-prev").html(`<i class="fa fa-chevron-left"></i>`);
        	$("#owl-team .slick-next").html(`<i class="fa fa-chevron-right"></i>`);
        	$("#owl-team .slick-dots>li>button").html(``);
    	}
    	if ($("#owl-testimonial").length > 0) {
        	$("#owl-testimonial").slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            arrows:false,
	            //infinite: false,
	            //arrows: true,
	            dots: true,
	            //prevArrow: ".slick-content .left",
	            //nextArrow: ".slick-content .right"
        	});
        	$("#owl-testimonial .slick-prev").html(`<i class="fa fa-chevron-left"></i>`);
        	$("#owl-testimonial .slick-next").html(`<i class="fa fa-chevron-right"></i>`);
        	$("#owl-testimonial .slick-dots>li>button").html(``);
    	}
		/*$('#owl-testimonial').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: false,
			autoplayHoverPause: true,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				991: {
					items: 1,
				},

			}
		});*/
		
		/*$("#owl-team").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			margin: 10,
			loop: true,
			autoplay: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1200: {
					items: 3,
				},

			}
		});*/

		
		
	}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).load(function () {
	"use strict";


		// Page Preloader 	

		$("#preloader").fadeOut("slow");

		//Gallery Isotope 

		var $container = $('#gallery-isotope');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
				layoutMode: 'masonry'
			}


		});
		$(window).smartresize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});
		
	   // Magnific Popup

		$('#gallery').magnificPopup({
			delegate: '.gallery-thumb a', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		
		//Gallery Nav Filter

		$('.cat a').on('click', function () {
			$('.cat .active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
		if ($('body').width() > 991) {
			$('.about-fixed #new-sticky-header').css('right',`${$('#aboutus').width() - $('.sub-banner').outerWidth()}px`);
		}
		
	
		
	}); // end window load function
