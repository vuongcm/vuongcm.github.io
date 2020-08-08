jQuery(function($) {
	var win = $(window), body = $('body'), doc = $(document);

	var FU = {
		get_Ytid: function(url){
			var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
		    if(url) var arr = url.match(rx);
		    if(arr) return arr[1];
		},
		get_currency: function(str){
			if(str) return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		animate: function(elems){
	        var animEndEv = 'webkitAnimationEnd animationend';
	        elems.each(function () {
	            var $this = $(this),
	            $animationType = $this.data('animation');
	            $this.addClass($animationType).one(animEndEv, function() {
	                $this.removeClass($animationType);
	            });
	        });
		},
	};

	var UI = {
		menu: function(){
		    var nav = $('.main-nav'), open = $('.nav-open');

		    nav.children('.nav-ct').append($('.top-nav').clone());

			var mnav_open = function(){
				nav.addClass('active');
				body.append('<div class="nav-over"></div>').css('overflow', 'hidden');
				open.addClass('active');
				setTimeout(function(){
					body.children('.nav-over').addClass('act');
				},1)
				if(win.width() > 1024) $('header').css('padding-right', '17px');
			}
			var mnav_close = function(){
				nav.removeClass('active');
				body.children('.nav-over').remove();
				body.css('overflow', '');
				open.removeClass('active');
				if(win.width() > 1024) $('header').css('padding-right', '');
			}

			doc.on('click', '.nav-open', function(e) {
		    	e.preventDefault();
		    	if(nav.hasClass('active')){
		    		mnav_close();
		    	}
		    	else{
		    		mnav_open();
		    	}
		    }).on('click', '.nav-over', function(e) {
				e.preventDefault();
				mnav_close();
			});

            nav.find('a').click(function(e) {
				let ul = $(this).nextAll('ul');
				if(ul.find('li').length > 0){
					e.preventDefault();
					if(ul.is(":hidden") === true){
						ul.parent('li').parent('ul').children('li').children('ul').slideUp(180);
						ul.parent('li').parent('ul').children('li').children('.active').removeClass("active");
						$(this).addClass("active");
						ul.slideDown(180);
					}
					else{
						$(this).removeClass("active");
						ul.slideUp(180);
					}
				}
            });

        },

		scrollbar: function(){
			if(win.width() > 1024){
				if($.fn.mCustomScrollbar){
					$('.scrollbar').mCustomScrollbar({
		                theme: "scrollbar",
		                scrollInertia: 400,
		                advanced:{  
		                    updateOnContentResize:true,   
		                    updateOnBrowserResize:true   
		                } 
		            });
	            }
			}
		},

		header: function(){
			var elm = $('header'), h = elm.innerHeight(), offset = 0;
			var fixed = function(){
				elm.addClass('fixed');
				$('.nav-open').addClass('fixed');
				if (win.width() < 992) body.css('margin-top', h);
			}
			var unfixed = function(){
				elm.removeClass('fixed');
				$('.nav-open').removeClass('fixed');
				body.css('margin-top', '');
			}

			win.scrollTop()> offset ? fixed() : unfixed();
			win.scroll(function(e) {
				win.scrollTop()> offset ? fixed() : unfixed();
			});
			win.resize(function(e) {
				win.scrollTop()> offset ? fixed() : unfixed();
			});
		},
		backTop: function(){
			var back_top = $('.back-to-top'), offset = 800;

			back_top.click(function(){
	            $("html, body").animate({ scrollTop: 0 }, 800 );
	            return false;
	        });

	        if(win.scrollTop() > offset){ 
	        	back_top.fadeIn(200);
	        }

	        win.scroll(function() {
	            if(win.scrollTop() > offset ) back_top.fadeIn(200); 
	            else back_top.fadeOut(200);
	        });
		},
		slider: function(){
			$('.h-post-cas').owlCarousel({
			    loop: false,
			    margin: 30,
			    responsiveClass:true,
			    nav: true,
			    dots: true,
			    smartSpeed: 600,
			    navText: ["<span class='smooth arrow-cas prev'></span>", "<span class='smooth arrow-cas next'></span>"],
			    responsive:{
			    	1750:{
			            items: 4,
			        },
			        1200:{
			            items: 3,
			        },
			        575:{
			            items: 2,
			        },
			        0:{
			            items: 1,
			        }
			    }
			});

			var prj = $('.prj-cas').owlCarousel({
			    responsiveClass:true,
			    nav: false,
			    smartSpeed: 600,
			    items: 1,
			    responsive:{
			        992:{
			            margin: 0,
			            loop: false,
			            autoplay: false,
			            mouseDrag: false,
			            touchDrag: false,
			            pullDrag: false,
			            freeDrag: false,
			        },
			        0:{
			            margin: 2,
			        }
			    }
			});

			$('.prj-list .list .item').hover(function(e) {
				e.preventDefault();
				$('.prj-list .list .item.active').removeClass('active');
				$(this).addClass('active');
				let href = $(this).find('a').attr('href');
				var index = $(this).index();
				prj.trigger('to.owl.carousel',[index,600]);
                $('.prj-cas .item').addClass('show');
			});
			
			if($.fn.slick){
				$('.pro-img').slick({
                    autoplay:true,
                    autoplaySpeed: 4000,
		            arrows: false,
		            swipeToSlide: true,
		            asNavFor: '.pro-thumb',
		        });
				let list_thumb = $('.pro-img');
                $('.pro-thumb').slick({
		            slidesToShow: 4,
		            slidesToScroll: 1,
		            nextArrow: '<i class="fa fa-angle-right smooth next"></i>',
		            prevArrow: '<i class="fa fa-angle-left smooth prev"></i>',
		            swipeToSlide: true,
		            autoplaySpeed: 4000,
		            asNavFor: '.pro-img',
		            focusOnSelect: true,
		            responsive: [
		            {
		                breakpoint: 1199,
		                settings: {
		                    slidesToShow: 5,
		                }
		            },
		            {
		                breakpoint: 767,
		                settings: {
		                    slidesToShow: 4,
		                }
		            },
		            {
		                breakpoint: 450,
		                settings: {
		                    slidesToShow: 3,
		                }
		            },
		            ],
		        });
                list_thumb.on("afterChange",function(event, slick, currentSlide){
                    // Remove current class from second slider
                    $('.pro-thumb').find(".slick-current").removeClass("slick-current");

                    // Add current class to the current slide
                    $('.pro-thumb').find(".slick-slide").eq(currentSlide).addClass("slick-current");
                });
		    }
	        $('.cloudzoom').each(function(index, el) {
	            $(el).attr({
	                'data-cloudzoom': "autoInside: 767, zoomWidth: 200,zoomHeight: 200, zoomImage: '"+$(el).attr('data-zoom')+"',disableZoom: 'auto'",
	            });
	        });
	        if(typeof CloudZoom == 'function') CloudZoom.quickStart();


	        $('.pro-dt-cas').owlCarousel({
	            loop: false,
	            margin: 20,
	            responsiveClass:true,
	            nav: true,
	            smartSpeed: 800,
	            navText: ["<span class='smooth arrow-pro prev'></span>", "<span class='smooth arrow-pro next'></span>"],
	            responsive:{
	                1550:{
	                    items: 4,
	                },
	                768:{
	                    items: 3,
	                },
	                576:{
	                    items: 2,
	                },
	                0:{
	                    items: 1,
	                }
	            }
	        });

	        $('.watch-cas').owlCarousel({
	            loop: false,
	            margin: 26,
	            responsiveClass:true,
	            nav: true,
	            smartSpeed: 800,
	            navText: ["<span class='smooth arrow-pro prev'></span>", "<span class='smooth arrow-pro next'></span>"],
	            responsive:{
	                1550:{
	                    items: 5,
	                },
	                1200:{
	                    items: 4,
	                },
	                768:{
	                    items: 3,
	                },
	                576:{
	                    items: 2,
	                },
	                0:{
	                    items: 2,
	                    margin: 16,
	                }
	            }
	        });
			
			$('.sb-cas').owlCarousel({
			    items: 1,
	        	loop: true,
		        nav: true,
		        navText: ["<span class='smooth sb-arrow prev'></span>", "<span class='smooth sb-arrow next'></span>"],
		        smartSpeed: 800,
			});

			$('.project-cas').owlCarousel({
	        	items: 1,
	        	loop: true,
		        nav: true,
		        dots: true,
		        navText: ["<span class='smooth prev'><i class='fa fa-long-arrow-left'></i> Prev</span>", "<span class='smooth next'>Next <i class='fa fa-long-arrow-right'></i></span>"],
		        smartSpeed: 800,
	        })
		},

		scroll: function(){
			win.scroll(function(e) {
				$('.cir-ring').each(function(index, el) {
					var he = $(el).innerHeight(), vtop = $(el).offset().top, top = win.scrollTop();
					var tran = - (top + win.innerHeight() - vtop)*0.1;
					if(top + win.innerHeight() > vtop ){
						$(el).css({
							transform: 'translateY('+tran+'px)',
						});
					}
				});
			});
		},

		collapse: function(){
			var ui = $('.hc-collapse');
	        ui.find('ul>li').each(function(index, el) {
	            if($(el).find("ul>li").length > 0){
	                var cl = $(el).children("ul").is(':hidden') ? '' : 'active';
	                $(el).prepend('<button type="button" class="cls-drop '+cl+'"></button>');
	            }
	        });

	        $(".cls-drop").click(function(){
	            var ul = $(this).nextAll("ul");
	            if(ul.is(":hidden") === true){
	                ul.parent('li').parent().children().children('ul').slideUp(200);
	                ul.parent('li').parent().children().children('.cls-drop').removeClass("active");
	                $(this).addClass("active");
	                ul.slideDown(200);
	            }
	            else{
	                ul.slideUp(200);
	                $(this).removeClass("active");
	            }
	        });
		},

		sticky: function(){
			stick_act();
	        win.resize(function(e) {
	            stick_act();
	        });

	        function stick(){
	            $('.stick-scroll').stick_in_parent({
	                offset_top: 68,
	            });
	        }
	        function un_stick(){
	            $('.stick-scroll').trigger("sticky_kit:detach");
	        }
	        function stick_act(){
	            (win.width() < 992) ? un_stick() : stick();
	        }
	    },

	    uiExpand: function(){
	        $('.expand-box').each(function(index, el) {
	            var btn = $(el).parent().find('.expand-btn');
	            if($(el).children().innerHeight() > $(el).innerHeight()){
	                $(el).addClass('hide');
	                btn.removeClass('hidden');
	            }
	            btn.click(function(event) {
	                if($(el).hasClass('expand')){
	                    $(el).removeClass('expand');
	                    $(this).text('Hiá»ƒn thá»‹ thĂªm');
	                }
	                else{
	                    $(el).addClass('expand');
	                    $(this).text('Thu gá»n');
	                }
	            });
	        });
	    },

		input_number: function(){
			doc.on('keydown', '.numberic', function(event) {
			    if (!(!event.shiftKey
			        && !(event.keyCode < 48 || event.keyCode > 57)
			        || !(event.keyCode < 96 || event.keyCode > 105)
			        || event.keyCode == 46
			        || event.keyCode == 8
			        || event.keyCode == 190
			        || event.keyCode == 9
			        || event.keyCode == 116
			        || (event.keyCode >= 35 && event.keyCode <= 39)
			        )) {
			        event.preventDefault();
				}
			});
			doc.on('click', '.i-number .up', function(e) {
			    e.preventDefault();
			    var input = $(this).parents('.i-number').children('input');
			    var max = Number(input.attr('max')), val = Number(input.val());
			    if(!isNaN(val)) {      
			        if(!isNaN(max) && input.attr('max').trim()!='') { 
			            if(val >= max){
			                return false;
			            }
			        }
			        input.val(val + 1);
			        input.trigger('number.up');
			    }
			});
			doc.on('click', '.i-number .down', function(e) {
			    e.preventDefault();
			    var input = $(this).parents('.i-number').children('input');
			    var min = Number(input.attr('min')), val = Number(input.val());
			    if(!isNaN(val)){
			        if(!isNaN(min) && input.attr('max').trim()!=''){ 
			            if(val <= min){
			                return false;
			            }
			        }
			        input.val(val - 1);
			        input.trigger('number.down');
			    }
			});
		},
		yt_play: function(){
			doc.on('click', '.yt-box .play', function(e) {
		        var id = FU.get_Ytid($(this).closest('.yt-box').attr('data-url'));
		        $(this).closest('.yt-box iframe').remove();
		        $(this).closest('.yt-box').append('<iframe src="https://www.youtube.com/embed/'+id+'?rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		    });
		},
		psy: function(){
			var btn = '.psy-btn', sec = $('.psy-section'), pane = '.psy-pane';
			doc.on('click', btn, function(e) {
				e.preventDefault();
				$(this).closest(pane).find(btn).removeClass('active');
				$(this).addClass('active');
				$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 40 }, 600 );
			});

			var section_act = function(){
				sec.each(function(index, el) {
	                if(win.scrollTop() + (win.height()/2) >= $(el).offset().top){
	                    var id = $(el).attr('id');
	                    $(pane).find(btn).removeClass('active');
	                    $(pane).find(btn+'[href="#'+id+'"]').addClass('active');
	                }
	            });
	        }
	        section_act();
	        win.scroll(function(){
	            section_act();
	        });
		},
		toggle: function(){
			var ani = 100;
	        $('[data-show]').each(function(index, el) {
	            var ct = $($(el).attr('data-show'));
	            $(el).click(function(e) {
	                e.preventDefault();
	                ct.fadeToggle(ani);
	            });
	        });
	        win.click(function(e){
                $('[data-show]').each(function(index, el){
                    var ct = $($(el).attr('data-show'));
                    if(ct.has(e.target).length == 0 && !ct.is(e.target) && $(el).has(e.target).length == 0 && !$(el).is(e.target)){
                        ct.fadeOut(ani);
                    }
                });
	        });
		},
		uiCounterup: function(){
	        var item = $('.hc-couter'), flag = true;
	        if(item.length > 0){
	            run(item);
	            win.scroll(function() {
	                if(flag == true){
	                    run(item);
	                }
	            });

	            function run(item){
	            	if(win.scrollTop() + 70 < item.offset().top && item.offset().top + item.innerHeight() < win.scrollTop() + win.height()){
		                count(item);
		                flag = false;
		            }
	            }

	            function count(item){
	                item.each(function(){
	                    var this_ = $(this);
	                    var num = Number(this_.text().replace(".", ""));
	                    var incre = num/80;
	                    function start(counter){
	                        if(counter <= num){
	                            setTimeout(function(){
	                                this_.text(FU.get_currency(Math.ceil(counter)));
	                                counter = counter + incre;
	                                start(counter);
	                            }, 20);
	                        }
	                        else{
	                        	this_.text(FU.get_currency(num));
	                        }
	                    }
	                    start(0);
	                });
	            }

	        }
		},

		init: function(){
			UI.menu();
			UI.toggle();
			UI.slider();
			UI.scrollbar();
			UI.scroll();
			UI.header();
			UI.collapse();
			UI.sticky();
			UI.uiExpand();
		},
	}


	UI.init();

	var wow = new WOW({offset:50,mobile:false}); wow.init();

    /*rating*/
    $('.star-rating').each(function(index, el) {
        var base = $(el).find('.star-base');
        var rate = $(el).find('.star-rate');
        base.hover(function() {
            starw = rate.width();
        }, function() { });
        base.mousemove(function(e) {
            rate.width(e.pageX - $(this).offset().left);
        });
    });
    /*end rate*/

    /*comment*/
    var fr = $('.comment-fr');
    var frInput = fr.find('.form-input2'), reply = fr.find('.replys');

    fr.on('change', '.push-img input', function(event) {
        var arr = event.target.files;
        for(var i = 0; i< arr.length; i ++){
            var tmppath = URL.createObjectURL(arr[i]), photos = $(this).closest('.form-input').find('.fr-photo');
            photos.append('<div class="item">'
                +'<img src="'+tmppath+'"/>'
                +'<input type="hidden" name="photo[]" data-path="'+tmppath+'" data-name="'+arr[i].name+'" data-size="'+arr[i].size+'" data-type="'+arr[i].type+'">'
                +'<button class="pt-remove" type="button">&times;</button>'
                +'</div>');
        }
    });
    fr.on('click', '.fr-photo .pt-remove', function(e) {
        e.preventDefault();
        $(this).parent('.item').remove();
    });
    fr.find('.cmt-focus').focus(function(e) {
        fr.find('.hc-comment .form-input').remove();
        fr.find('.form-input textarea').focus();
    });

    $('.turn-up').click(function(e) {
        let this_ = $(this);
        e.preventDefault();
        this_.addClass('act');
        setTimeout(function(){
            $('.intro').fadeOut(500);
        },700);
        setTimeout(function(){
            $('body').css('overflow', '');
        },900);
    });
    if(win.width()>1024){
        var page = $('#fullpage');
        var scroll = false;
        if(win.innerHeight() < 900)  scroll = true;
        if($.fn.fullpage && page.length > 0){
            page.fullpage({
                navigation: true,
                scrollOverflow: scroll,
                scrollOverflowReset: true,
                responsiveWidth: 1024,
                scrollingSpeed: 1000,

                onLeave: function(index, nextIndex, direction){
                    if(win.width() > 1024){
                        page.children().find(".animation").each(function(index, el) {
                            $(el).removeClass('run');
                        });

                        var elm = page.children().eq(nextIndex-1).find(".animation");
                        elm.addClass('run');

                        if(index >= 1){
                            $('header').addClass('fixed');
                            $('.nav-open').addClass('fixed');
                        }
                        if(nextIndex == 1){
                            $('header').removeClass('fixed');
                            $('.nav-open').removeClass('fixed');
                        }

                        page.children().removeClass('animation');
                        page.children().eq(nextIndex-1).addClass('animation');
                    }
                }
            });
            page.find('.section:first-child .animation').addClass('run');
        }
    }
    if($('.slider').length){
	    $('.slider').owlCarousel({
		    loop: true,
		    responsiveClass:true,
		    nav: false,
		    dots: true,
		    smartSpeed: 800,
		    items: 1,
	        autoplay: true,
		    // onInitialized: slider_load,
	    	onChanged: slider_change,
		});
		$('.slider').find('.owl-dots .owl-dot').each(function(index, el) {
			let num = index < 9 ? '0' + (index+1) : index + 1;
			$(el).find('span').text(num);
		});
		function slider_change(e){
			var aniElm = $('.slider .item').eq(e.item['index']).find("[data-animation ^= 'animated']");
			FU.animate(aniElm);
		}
    }
    if($('.range-pro-cas').length){
    	$('.range-pro-cas').owlCarousel({
		    loop: true,
		    responsiveClass:true,
		    dots: true,
		    nav: true,
		    smartSpeed: 600,
		    navText: ["<span class='smooth arrow_left'></span>", "<span class='smooth arrow_right'></span>"],
		    responsive:{
		        768:{
		            items: 2,
		        },
		        0:{
		            items: 1,
		        }
		    }
		});
    }
    if($('.google-search-box').length){
        $('.search-fr button').click(function(){
            let value = $('.search-fr input').val();
            $('.google-search-box input[name="search"]').val(value);
            $('.gsc-search-button').click();
        });
        $('.search-fr input').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                event.preventDefault();
                if($(this).val() != ''){
                    let value = $(this).val();
                    $('.google-search-box input[name="search"]').val(value);
                    $('.gsc-search-button').click();
                }
                
            }
        });
    }
})

window.onload = function() {
    $("#loading").delay(500).fadeOut(500);
}
