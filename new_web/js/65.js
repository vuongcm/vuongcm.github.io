jQuery(document).ready(function() {
	var bodyWidth = jQuery('body').width();
	if(bodyWidth >= 768){
		
		jQuery(window).bind('scroll', function(){
			if(jQuery(this).scrollTop() > 200){
				jQuery('#masthead .storefront-primary-navigation').addClass('header-fixed');
			} else{
				jQuery('#masthead .storefront-primary-navigation').removeClass('header-fixed');
			}
		});
	} else{
		jQuery('#menu-menu-mobile .menu-item-has-children>a').click(function(){
			var thisToggle = jQuery(this).nextAll('.dropdown-toggle');
			thisToggle.click();
			if(thisToggle.attr('aria-expanded') == 'true'){
				jQuery(this).addClass('f-flip-arrow');
			} else{
				jQuery(this).removeClass('f-flip-arrow');
			}
		});
	}
	

	jQuery('.f-faq-box>a').click(function(){
		var thisA = jQuery(this).next('.f-panel');
		if(thisA.attr('data-fopen') == 'true'){
			thisA.slideUp(300);
			thisA.attr('data-fopen','false');
			jQuery(this).removeClass('active');
		} else{
			thisA.slideDown(300);
			thisA.attr('data-fopen','true');
			jQuery(this).addClass('active');
		}
	});

	jQuery('body').delegate('.woocommerce-form__label-for-checkbox, .login-remember label','click',function(){
		var thisCheckbox = jQuery(this).children('input[type="checkbox"]');
		if(thisCheckbox[0].checked == true){
			jQuery(this).addClass('f-checked').removeClass('f-unchecked');
		} else{
			jQuery(this).addClass('f-unchecked').removeClass('f-checked');
		}
	});
	jQuery('.bbp-remember-me label, .comment-form-cookies-consent label').click(function(){
		var thisCheckbox2 = jQuery(this).prev('input[type="checkbox"]');
		if(thisCheckbox2[0].checked == true){
			jQuery(this).addClass('f-unchecked').removeClass('f-checked');
		} else{
			
			jQuery(this).addClass('f-checked').removeClass('f-unchecked');
		}
	});
	if (jQuery('.f-content-why-choose .three-reasons').length) {
		jQuery('.f-content-why-choose').delegate('.f-view-more','click',function(){
			let fullHtml = jQuery(this).closest('.three-reasons').find('.f-para-hide').html();
			jQuery(this).parent('p').html(fullHtml);
			
		});
		jQuery('.f-content-why-choose').delegate('.f-view-less','click',function(){
			let sortHtml = jQuery(this).parent('p').html().substr(0,80);;
			jQuery(this).parent('p').html(sortHtml + '...<a class="f-link-more f-view-more" href="javascript:;">xem thêm &raquo;</a>');
			
		});
	}
	if(jQuery('.f-short-box').length){
		jQuery('.f-show-down').click(function(){
			let thisKick = jQuery(this).parent('.f-show-more-wrap').prev('.f-short-box');
			if(thisKick.attr('data-short') == "true"){
				thisKick.css('max-height','none');
				thisKick.attr('data-short','false');
				jQuery(this).html('&laquo; thu gọn');
			} else{
				thisKick.removeAttr('style');
				thisKick.attr('data-short','true');
				jQuery(this).html('xem thêm &raquo;');
			}
		});
	}
});
window.onload = function() {
    jQuery("#loading").delay(500).fadeOut(500);
}
