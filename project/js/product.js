 // ========Khởi tạo hiệu ứng zoom ảnh ===========
		let Magnify = function (element, options) {        
		this.init('magnify', element, options)    
		}
		    
		Magnify.prototype = {
			constructor: Magnify, 
			init: function (type, element, options) {            
				let event = 'mousemove', eventOut = 'mouseleave';
				             
				this.type = type            
				this.$element = $(element)            
				this.options = this.getOptions(options)            
				this.nativeWidth = 0            
				this.nativeHeight = 0
				             
				this.$element.wrap('<div class="magnify" \>');            
				this.$element.parent('.magnify').append('<div class="magnify-large" \>');            
				this.$element.siblings(".magnify-large").css("background","url('" + this.$element.attr("src") + "') no-repeat");
				 
				             
				this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));            
				this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));        
			},
			getOptions: function (options) {            
				options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());
				if (options.delay && typeof options.delay == 'number') {                
					options.delay = {                    
					show: options.delay,
					hide: options.delay                
					}            
				}
				return options;       
			},
			check: function (e) {           
				let container = $(e.currentTarget);            
				let self = container.children('img');            
				let mag = container.children(".magnify-large");               
				if(!this.nativeWidth && !this.nativeHeight) {                
					let image = new Image();                
					image.src = self.attr("src");
			                 
					this.nativeWidth = image.width;                
					this.nativeHeight = image.height;
			             
				} else {
			                 
					let magnifyOffset = container.offset();                
					let mx = e.pageX - magnifyOffset.left;                
					let my = e.pageY - magnifyOffset.top;
			                 
					if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {                   
			 			mag.fadeIn(100);                
					} else {                    
						mag.fadeOut(100);                
					}
			                 
					if(mag.is(":visible")) {                    
						let rx = Math.round(mx/container.width()*this.nativeWidth - mag.width()/2)*-1;                    
						let ry = Math.round(my/container.height()*this.nativeHeight - mag.height()/2)*-1;                    
						let bgp = rx + "px " + ry + "px";
			                     
						let px = mx - mag.width()/2;                    
						let py = my - mag.height()/2;
			                     
						mag.css({left: px, top: py, backgroundPosition: bgp});                
					}           
				}
			         
			}    
		}
		    
		$.fn.magnify = function ( option ) {        
			return this.each(function () {            
				let $this = $(this), data = $this.data('magnify'), options = typeof option == 'object' && option            
				if (!data) $this.data('tooltip', (data = new Magnify(this, options)))            
				if (typeof option == 'string') data[option]()        
			});   
		}
		$.fn.magnify.Constructor = Magnify
		     
		$.fn.magnify.defaults = {        
		delay: 0    
		}
// end phần khởi tạo zoom ảnh
// Khởi tạo hàm Load data
	let loadJson = function(y) {
        $.ajax({
            dataType: 'json',
            url: `data/product/pr-id${y}.json`})
            .done(function(response) {
                //let response = JSON.parse(data);
                $(`#detail-product .main-product .row`).html(`
                	<div class="wrapper">
	                    <div class="preview"> 
	                        <div class="preview-pic tab-content mag">
	                            <div class="tab-pane active magnify" id="pic-1">
	                                <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[0]}" data-toggle="magnify">
	                                <div class="magnify-large" style="background: url(${response.product.imgSrc[0]}) no-repeat;"></div>
	                            </div>
	                            
	                            <div class="tab-pane magnify" id="pic-2">
	                                <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[1]}" data-toggle="magnify">
	                                <div class="magnify-large" style="background: url('${response.product.imgSrc[1]}') no-repeat;"></div>
	                            </div> 
	                            <div class="tab-pane magnify" id="pic-3">
	                                <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[2]}" data-toggle="magnify">
	                                <div class="magnify-large" style="background: url('${response.product.imgSrc[2]}') no-repeat;"></div>
	                            </div> 
	                        </div> 
	                        <ul class="preview-thumbnail nav nav-tabs">
	                            <li class="active">
	                                <a data-toggle="tab" data-target="#pic-1">
	                                    <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[0]}">
	                                </a>
	                            </li> 
	                            <li>
	                                <a data-toggle="tab" data-target="#pic-2">
	                                    <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[1]}">
	                                </a>
	                            </li> 
	                            <li>
	                                <a data-toggle="tab" data-target="#pic-3">
	                                    <img alt="Ảnh sản phẩm" src="${response.product.imgSrc[2]}">
	                                </a>
	                            </li> 
	                        </ul> 
	                    </div> 
	                    <div class="product-title">
	                        <h3>${response.product.name}</h3>
	                        <h4>Thương hiệu: <span class="color">${response.product.brand}</span></h4>
	                        <h4>MSP: <span class="color">${response.product.msp}</span></h4>
	                        <div class="rating"> 
	                            <div class="stars"> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> 
	                            </div>
	                            <span class="review-no">Có ${response.product.reviewNumber} người dùng đánh giá</span> 
	                        </div>
	                    </div>
	                    <div class="details">
	                        <div class="product-description">
	                            <div class="icon-details"><img src="img/icon-baby.png"></div>
	                            <p>${response.product.description}</p> 
	                        </div>
	                        <h3 class="price"><span class="textColor">${response.product.price[0]}</span><span class="lineThrough">${response.product.price[1]}</span></h3> 
	                        <h4>Tiết kiệm <span class="color">${response.product.discount}</span></h4>
	                        <h4>Free ship nội thành với đơn hàng trên 300.000đ</h4>
	                        <h4>Đã có ${response.product.buyNumber} người mua</h4>
	                        <form class="action" action="">
	                            <h4>Số lượng 
	                                <select name="quantity-product">
	                                    <option value="1">1</option>
	                                    <option value="2">2</option>
	                                    <option value="3">3</option>
	                                    <option value="4">4</option>
	                                    <option value="5">5</option>
	                                    <option value="6">6</option>
	                                    <option value="7">8</option>
	                                    <option value="9">9</option>
	                                </select>
	                            </h4>
	                            <div>
	                                <button type="submit" class="btn btn-light">CHỌN MUA</button>
	                                <button type="submit" class="btn btn-light">ĐẶT GIỮ HÀNG</button>
	                            </div>
	                        </form>
	                    </div> 
	                </div>
                `);
				
				$('#detail-product .info-content>div:first-child').html(response.product.info);
                $(`#detail-product aside`).html('<h5>SẢN PHẨM TƯƠNG TỰ</h5>');

                for (let i=0; i < response.same.length; i++) {
                	$(`#detail-product aside`).append(`
                            <div class="hot-product">
                                <a href="product.html#${response.same[i].id}" target="_blank">
                                    <div class="thumbnail">
                                        <div>
                                            <img src="${response.same[i].src}" alt="Ảnh sản phẩm">
                                            <button>THÊM VÀO GIỎ</button>
                                        </div>
                                        <div class="caption">
                                            <h3>${response.same[i].h3}</h3>
                                            <p><span class="lineThrough">${response.same[i].price}</span><span class="textColor">${response.same[i].sale}</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `);
                }
                $(`#detail-product aside`).append(`<div>...</div>`);
                $('[data-toggle="magnify"]').each(function () {            
					$(this).magnify()        
				});
				$('.icon-tuti').append(`<img src="img/icon-tuti.png">`);
            })
            .fail(function() {
                alert('lỗi load dữ liệu');
            });
    }
$(document).ready(function() {
	let heightDetails = $('.content .preview').height() - $('.content .product-title').height();
	$('.content .details').css('min-height',heightDetails + 'px');
	$('.comment-container form .avatar').height($('.comment-container form .avatar').width());
	$('.comment-container .comment .avatar').height($('.comment-container .comment .avatar').width());
	$('.comment-container #inputCmt').outerHeight($('.comment-container form .avatar').height());
	$(window).bind('resize', function(){
        heightDetails = $('.content .preview').height() - $('.content .product-title').height();
		$('.content .details').css('min-height',heightDetails + 'px');
		$('.comment-container .avatar').height($('.comment-container .avatar').width());
		$('.comment-container #inputCmt').outerHeight($('.comment-container .avatar').height());
		$('.comment-container .comment .avatar').height($('.comment-container .comment .avatar').width());
    });
	

	for (let i=1; i <= 4; i++) {
		$(`.info-tab>a:nth-child(${i})`).on('click', function(){
			$('.info-tab>a').removeClass('color');
			$(`.info-tab>a:nth-child(${i}`).addClass('color');
			for (let j=1; j <= 4; j++) {
				if (j == i) {
					$(`.info-content>div:nth-child(${j})`).css('display','block');
				} else {
					$(`.info-content>div:nth-child(${j})`).css('display','none');
				}
			}
		});
	}
// Hiệu ứng + - slide
	$('#detail-product').css('min-height','25vh');
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


    let idProduct = $(location).attr('hash').slice(1);
    loadJson(idProduct);

});
