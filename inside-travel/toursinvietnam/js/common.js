function show_ajax_offer(id,more){
    check = $(".body-offer-"+more+' .content').length;
    if(check==0){
        $(".body-offer-"+more).html("<img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' />");
        $(".body-offer-"+more).css({"margin-bottom": "10px","border": "2px solid #ddd","padding": "10px"});
        $.ajax({
            type: "GET",
            url: SITE_URL+"/ajax-process.php?mod=special_offer&id="+id+"&more="+more,
            success: function(xml){
                $(".body-offer-"+more).html(xml);
                $('.body-offer-'+more).show(); 
                $('.title-offer span.up'+more).show();
                $('.title-offer span.down'+more).hide();
            },
            error: function(){
                //alert('Please try again!');
            }  
        });
    }else{
        if($('.body-offer-'+more).is(':visible')){ 
            $('.body-offer-'+more).hide();  
            $('.title-offer span.up'+more).hide();
            $('.title-offer span.down'+more).show();
        }else{      
            $('.body-offer-'+more).show(); 
            $('.title-offer span.up'+more).show();
            $('.title-offer span.down'+more).hide();
        }
    }
}
function show_more_offer(){
    if($('#offer-tour-new').is(':visible')){
        $('#offer-tour-new').hide();  

    }else{
        $('#offer-tour-new').show(); 
    }
}
function hotel_option(j){
    if($('.detail-hotel-'+j).is(':visible')){ 
     $('.detail-hotel-'+j).hide();
     //$('.option-hotel .fa-minus.tru'+j).hide();open-suplier
     //$('.option-hotel .fa-plus.cong'+j).show();   
     $('.open-suplier .fa-minus.tru'+j).hide();
     $('.open-suplier .fa-plus.cong'+j).show();   
    }else{ 
     $('.detail-hotel-'+j).show();
     //$('.option-hotel .fa-minus.tru'+j).show();
     //$('.option-hotel .fa-plus.cong'+j).hide();     
     $('.open-suplier .fa-minus.tru'+j).show();
     $('.open-suplier .fa-plus.cong'+j).hide();  
    }
        
}
function hotelOption(){ /*vuongcm thêm*/
    if($('#detail-hotel-togg').is(':visible')){ 
     $('#detail-hotel-togg').hide();
     $('.option-hotel .fa-minus.tru2').hide();
     $('.option-hotel .fa-plus.cong2').show();   
    }else{ 
     $('#detail-hotel-togg').show();
     $('.option-hotel .fa-minus.tru2').show();
     $('.option-hotel .fa-plus.cong2').hide();     
    }
        
}
$(document).ready(function(){
    
$("#preloader").fadeOut(1e3);    
if($('.mix-grid').length){
    page_gallery.init();
}
if($('.total_photo').length){
    $('.total_photo').click(function(){
      $('a.image_show3').trigger("click");
    });   
}
if($("#view_full_itinerary_tdetail").length){
    $("#view_full_itinerary_tdetail").click(function(){
       $('li#t_iti a').trigger("click");
       $('html,body').animate({scrollTop:$("#component-detail").offset().top - 125},'slow'); 
    });
}
if($("#day-tour #activities tr td.red a").length){
   $("#day-tour #activities tr td.red a").click(function(){
       $('li#t_iti a').trigger("click");
       $('html,body').animate({scrollTop:$("#component-detail").offset().top - 125},'slow'); 
   }); 
}
if($('.map-tour .close-photo-map .fa-times').length){
   $('.map-tour .close-photo-map .fa-times').click(function(){
        $('.photo-map-action').trigger("click"); 
   }); 
}

if($('.thumbnail .videolink').length){
	$('.thumbnail .videolink').click(function(){
		$('.modal#videolink').show();
		$("iframe#playvideo").attr("src", $("iframe#playvideo").attr("src").replace("autoplay=0", "autoplay=1"));
	});
}

if($('.view-des-tour').length){
    $('.view-des-tour').click(function(){
       $('.view-des-tour').addClass('active'); 
       $("html,body").animate({scrollTop:$("#viewmap-des").offset().top},1000); 
    });
}
if($('.modal-header > .close').length){
	$('.modal-header > .close').click(function(){
		$('.modal#videolink').hide();
		$("iframe#playvideo").attr("src", $("iframe#playvideo").attr("src").replace("autoplay=1", "autoplay=0"));
	});
}

if($('.sub-slider').length){
    var number = $('.sub-slider a:first-child').height();
    $('.sub-slider .mix-grid .mix-slide .thumbnail a img').css("height",number+"px");
    
}


$('.tab_content:not(:first)').hide();
$('.tabs li a').click(function(){
    $('.tabs li a').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();
    var activeTab=$(this).attr('href');
    $(activeTab).fadeIn();
    return false;
});

if($( "#tabs" ).length){
    $( "#tabs" ).tabs();
}

var text=$(location).attr('pathname');text=text.split("/");
if(text[1] == "why-book-with-us.html"){
    $("#why_book_link").trigger("click");
}else if(text[1] == "deposit-payment.html"){
    $("#deposit").trigger("click");
}else if(text[1] == "cancellation-amendaments.html"){
    $("#amendaments").trigger("click");
}else if(text[1] == "terms-and-conditions.html"){
    $("#terms").trigger("click");
}else if(text[1] == "privacy-policy.html"){ 
    $("#privacy_page").trigger("click");
}

if($(".owl-demo-testi").length){$(".owl-demo-testi").owlCarousel({navigation : true, slideSpeed : 300,paginationSpeed : 400,singleItem:true});var owl19 = $(".owl-demo-testi"); $(".next6").click(function(){owl19.trigger('owl.next');});$(".prev6").click(function(){owl19.trigger('owl.prev');});}	
if($('#search-bestcruise').length>0){$(function(){function split(val){return val.split(/,\s*/);}function extractLast(term){return split(term).pop();}$("#tags_des").bind("keydown",function(event){if(event.keyCode===$.ui.keyCode.TAB&&$(this).autocomplete("instance").menu.active){event.preventDefault();}}).autocomplete({minLength:0,source:function(request,response){response($.ui.autocomplete.filter(availableTags,extractLast(request.term)));},focus:function(){return false;},select:function(event,ui){var terms=split(this.value);terms.pop();terms.push(ui.item.value);terms.push("");this.value=terms.join(", ");return false;}});});}if($('#bot-head #menu .icon-menu').length>0){$('#bot-head #menu .icon-menu').click(function(){$('.main-menu').toggleClass('open');});}
if($('.chose-box').length>0){$(document).on('click','.chose-box',function(){var select_box=$(this).siblings('.select-box');select_box.toggleClass('open');});}
if($('.class_scoll').length>0){$(".class_scoll").click(function(){$('html,body').animate({scrollTop:$("#r-content-tour").offset().top-170},'slow');});}
if($('#tailormadetour').length>0){$('#tailormadetour').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});}
if($('.free_quotetour').length>0){$('.free_quotetour').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});}
if($('#phone').length>0){$("#phone").intlTelInput({preferredCountries:['us','gb','au'],});$("#phone").intlTelInput("setNumber","+1 ");var input=document.getElementById('phone');input.onclick=input.onkeydown=function(event){if(input.value.length<2||input.value=='+1 '){input.value='+';}
var key=event.keyCode||event.charCode;if(key==8){if(input.value.length<2||input.value=='+1 '){input.value='++';}}else if(key==46){if(input.value.length<2||input.value=='+1 '){input.value='+';}}};}
if($('#contact #contact_phone').length>0){$("#contact_phone").intlTelInput({preferredCountries:['us','gb','au'],});$("#contact_phone").intlTelInput("setNumber","+1 ");var input=document.getElementById('contact_phone');input.onclick=input.onkeydown=function(event){if(input.value.length<2||input.value=='+1 '){input.value='+';}
var key=event.keyCode||event.charCode;if(key==8){if(input.value.length<3||input.value=='+1 '){input.value='++';}}else if(key==46){if(input.value.length<2||input.value=='+1 '){input.value='+';}}}}
if($('.lazyload').length>0){jQuery(".lazyload").lazyload({effect:"fadeIn",placeholder:SITE_URL_IMG+"grey.gif"});}


//=========== vuongcm
if($("#owl-demo19").length>0){
    $("#owl-demo19").owlCarousel({autoPlay:5000,items:5,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3]});
    var owl19=$("#owl-demo19");
    $(".next8").click(function(){owl19.trigger('owl.next');});
    $(".prev8").click(function(){owl19.trigger('owl.prev');
    });
}
if ($(".scroll-tours .owl-carousel").length > 0) {
    if ($('body').width() > 479) {
        $(".scroll-tours .owl-carousel").owlCarousel({
            autoPlay:5000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile:[479,1],
            loop: true
        });
        for (let i=3; i<=20; i++) {
            $(`.scroll-tours #owl-demo${30+i}`).closest('.scroll-tours').find('.customNavigation-home>a:last-child').click(function() {
                $(`.scroll-tours #owl-demo${30+i}`).trigger('owl.next');
            });
            $(`.scroll-tours #owl-demo${30+i}`).closest('.scroll-tours').find('.customNavigation-home>a:first-child').click(function() {
                $(`.scroll-tours #owl-demo${30+i}`).trigger('owl.prev');
            });
        }
    } else {
        $(".scroll-tours .owl-carousel").addClass('carousel-mobile');
        $('body').attr('style',`--bodyWidth:${$('body').width()}px`);
        for (let i=3; i<=20; i++) {
            $(`.scroll-tours #owl-demo${30+i}`).css('width',`calc(var(--bodyWidth) * 0.75 * ${$(`.scroll-tours #owl-demo${30+i} .item`).length})`);
        }
    }
}
window.onload = function() {
    let heightMax=0;
    for (let j=33; j<=50; j++) {
        for (let k=0; k < $(`.scroll-tours #owl-demo${j} .alink`).length; k++) {
            if ($(`.scroll-tours #owl-demo${j} .alink`).eq(k).height() > heightMax) {
                heightMax = $(`.scroll-tours #owl-demo${j} .alink`).eq(k).height();
            }
        }
        $(`.scroll-tours #owl-demo${j} .alink`).height(heightMax);
    }
};
if ($("#owl-demo34").length > 0) {
    if ($('body').width() > 479) {
        $("#owl-demo34").owlCarousel({
            autoPlay:5000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile:[479,1],
            loop: true
        });
        var owl34 = $("#owl-demo34");
        $(".next34").click(function() {
            owl34.trigger('owl.next');
        });
        $(".prev34").click(function() {
            owl34.trigger('owl.prev');
        });
    } else {
        $("#owl-demo34").addClass('carousel-mobile');
        $('body').attr('style',`--bodyWidth:${$('body').width()}px`);
     }
}
if ($("#owl-demo35").length > 0) {
        $("#owl-demo35").owlCarousel({
            autoPlay:5000,
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            itemsMobile:[479,1],
            loop: true
        });
        var owl35 = $("#owl-demo35");
        $(".next35").click(function() {
            owl35.trigger('owl.next');
        });
        $(".prev35").click(function() {
            owl35.trigger('owl.prev');
        });

}
$('#main-banner #slide-home').css ('margin-top', $('#main-head #bot-head').outerHeight()+'px');
let gridHeight = $('#most-read-articles').outerHeight()*0.7;
$('.toggleGrid').css({
        'height':gridHeight + 'px',
        'overflow': 'hidden'
    });
let toggleThingTo = function(number) {
    $(`#toggleGrid-${number}`).removeAttr('style');
    $(`#toggleGrid-${number}`).toggleClass('toggleGrid');
    $('.toggleGrid').css({
        'height':gridHeight + 'px',
        'overflow': 'hidden'
    });
    if ($(`#toggleGrid-${number}`).attr('style') == 'height: 84px; overflow: hidden;') {
        $(`#viewMore-${number} `).html('View More »');
        $(`#toggleGrid-${number}`).addClass('clearfix');
        $(`#toggleGrid-${number} #most-read-articles .articles`).addClass('gradient');
    } else {
        $(`#viewMore-${number} `).html('View Less »');
        $(`#toggleGrid-${number}`).removeClass('clearfix');
        $(`#toggleGrid-${number} #most-read-articles .articles`).removeClass('gradient');
    }
}
$('#viewMore-1').on('click', function(){
    toggleThingTo(1);
});
$('#viewMore-2').on('click', function(){
    toggleThingTo(2);
});
$('#viewMore-3').on('click', function() {
    $(this).parent('.view-all').prev('p').toggleClass('gradient');
    if ($(this).parent('.view-all').prev('p').attr('class') == 'gradient') {
        $(this).html('View More »');
    } else {
        $(this).html('View Less »');
    }
});

if ($('body').width() < 992) {
    $('ul.sub-menu').prev('a').on('click', function(){
        $(this).next('ul.sub-menu').toggleClass('open-1');
    });
    $('.colum-4 .title a').on('click', function(){
        $(this).parent('.title').nextAll('ul').toggleClass('open-1');
    });
} else {
    $('.colum-4 .title a').off('click');
    $('ul.sub-menu').prev('a').off('click');
}

if ($('body').width() < 768) {
    $('#search-bestcruise #find-tour-title').on('click', function(){
        $('#search-bestcruise .container-search-home').toggleClass('open-1');
        if ($('#search-bestcruise .container-search-home').css('display') == "none") {
            $('#search-bestcruise #icon-down a.view-us span').css('transform', 'rotateX(0deg)');
            $('#search-bestcruise').css('padding', '0');
        } else {
            $('#search-bestcruise #icon-down a.view-us span').css({
                'transform': 'rotateX(180deg)',
                '-webkit-transform': 'rotateX(180deg)',
                '-ms-transform': 'rotateX(180deg)',
                '-moz-transform': 'rotateX(180deg)'
            });
            $('#search-bestcruise').css('padding', '0 0 10px');
        }
        
    });
} else {
    $('#search-bestcruise #find-tour-title').off('click');
}
if ($('body').width() < 670) {
    $('.container-destination').one('touchstart',function(){
        $('.container-destination .row').css('transform','none');
    });
}
if ($('body').width() < 580) {
    $('.slider #title-slider-1').css({
        'top': `calc(35% - ${$('.slider #title-slider-1').height()/2}px`
    });
} else {
    $('.slider #title-slider-1').css({
        'top': `calc(50% - ${$('.slider #title-slider-1').height()/2}px`
    });
}
if ($('#title-top-tour').length > 0) {
    $('#bot-head').removeClass('fixed-class');
}
$(window).bind('resize', function(){
    $('#main-banner #slide-home').css ('margin-top', $('#main-head #bot-head').outerHeight()+'px');
    gridHeight = $('#most-read-articles').outerHeight()*0.7;
    $('.toggleGrid').css({
            'height':gridHeight + 'px',
            'overflow': 'hidden'
        });
    if ($('body').width() < 992) {
        $('ul.sub-menu').prev('a').on('click', function(){
            $(this).next('ul.sub-menu').toggleClass('open-1');
        });
        $('.colum-4 .title a').on('click', function(){
            $(this).parent('.title').nextAll('ul').toggleClass('open-1');
        });
    } else {
        $('.colum-4 .title a').off('click');
        $('ul.sub-menu').prev('a').off('click');
    }
    $('.slider #title-slider-1').css({
        'top': `calc(50% - ${$('.slider #title-slider-1').height()/2}px`
    });
    if ($('body').width() < 768) {
        $('#search-bestcruise #find-tour-title').on('click', function(){
            $('#search-bestcruise .container-search-home').toggleClass('open-1');
            if ($('#search-bestcruise .container-search-home').css('display') == "none") {
                $('#search-bestcruise #icon-down a.view-us span').css('transform', 'rotateX(0deg)');
                $('#search-bestcruise').css('padding', '0');
            } else {
                $('#search-bestcruise #icon-down a.view-us span').css({
                    'transform': 'rotateX(180deg)',
                    '-webkit-transform': 'rotateX(180deg)',
                    '-ms-transform': 'rotateX(180deg)',
                    '-moz-transform': 'rotateX(180deg)'
                });
                $('#search-bestcruise').css('padding', '0 0 10px');
            }
            
        });
    } else {
        $('#search-bestcruise #find-tour-title').off('click');
    }
});

//======================= end vuongcm



if(text[1]=="tours"&&text[2]!=""){
    width_menu = screen.width;
    check_tour = text[2].split(".");
}else{
    check_tour = '';
}

if((text[1]=="tours"&&check_tour[1]=="html")){ //&&width_menu>767
    jQuery(window).scroll(function(){
        var top = $(this).scrollTop();
        var scroll_pos_test = 108;
        var width_s = $( window ).width();
        if(top >= scroll_pos_test){ //alert(width_s);
			if(width_s <= 480){
				$("#title-top-tour").addClass("menu-top-detail");
				$("#title-top-tour").css({"bottom":"0","position":"fixed","z-index":"999"});
				$("#inquiry-topmenu").css({"display":"block"});
				$("#price-pk .price").css({"display":"none"});
                $("#price-pk #inquiry-topmenu-2").css({"display":"none"});
				$("#price-pk #special_offer").css({"display":"none"});
			}else{
				$("#title-top-tour").addClass("menu-top-detail");    
				$("#title-top-tour").css({"top":"0","position":"fixed","z-index":"999"});
				$("#inquiry-topmenu").css({"display":"block"});
				$("#price-pk .price").css({"display":"none"});
                $("#price-pk #inquiry-topmenu-2").css({"display":"none"});
				$("#price-pk #special_offer").css({"display":"none"});
			}
        }else{
            $("#title-top-tour").removeClass("menu-top-detail");    
            $("#title-top-tour").css({"position":"static","z-index":"0"});//"top":"0",
            $("#inquiry-topmenu").css({"display":"none"});
            $("#price-pk .price").css({"display":"block"});
            $("#price-pk #inquiry-topmenu-2").css({"display":"block"});
            $("#price-pk #special_offer").css({"display":"block"});
        }
		
        /*if(top>=650){
            $('.photomap-fix').show();
        }else{
            $('.photomap-fix').hide();
        }*/
    });
}else if(text[1]!="cruise"){
    var stickyOffset = $('#top-head-right').offset().top;
    jQuery(window).scroll(function(){
        var top=jQuery(window).scrollTop();
        if(top>stickyOffset){
            jQuery("#bot-head").css({"position":"fixed","z-index":"999"});
            jQuery("#bot-head").addClass("background-margin-top");
    		jQuery(".head-intro").css({"display":"none"});
            jQuery(".logo").css({"height":"36px"});
            jQuery(".logo").attr({"src":""+SITE_URL+"/images/inside-vietnam-travel-logo.png"});
            jQuery(".logo-noel").css({"left":"56px"});
            jQuery("#goTop").fadeIn(1000);
            jQuery("#main-head #bot-head #middle-head").css({"height":"67px","line-height":"67px","text-align":"center"});
        }else{
            jQuery("#bot-head").removeAttr("style");
    		jQuery(".head-intro").removeAttr("style");
            jQuery("#bot-head").removeClass("background-margin-top");
            jQuery(".logo").removeAttr("style");
            jQuery(".logo").attr({"src":""+SITE_URL+"/images/inside-vietnam-travel-logo.png"});
            jQuery(".logo-noel").removeAttr("style");
            jQuery("#goTop").fadeOut(1000);
            jQuery("#main-head #bot-head #middle-head").removeAttr("style");
        }
    });}


jQuery(window).scroll(function(){var top=jQuery(window).scrollTop();if(top>=50){jQuery("#advertise").css({"display":"none"});}else{jQuery("#advertise").removeAttr("style");}});$('#help-need').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});$('#goTop').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});
$(".pop-up-header").click(function(){
    $("#popup_license").css({"display":"block","margin-top":"-250px","margin-left":"-315px"});
    $("#mask_license").css({"display":"block"});
    $('html,body').animate({scrollTop:$("body").offset().top},'slow');
});
    $(".close").click(function(){$("#popup_license").css({"display":"none"});$("#mask_license").css({"display":"none"});});var modal=document.getElementById('popup_license');window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}
if($('.tooltip').length>0){$('.tooltip').tooltipster({offsetY:2,theme:'tooltipster-white',});}
if($(".view-map").length>0){$(".view-map").fancybox({'width':'75%','height':'96%','autoScale':false,'type':'iframe',fitToView: false});}
if($('#tailormadetour').length>0){$('#tailormadetour').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});}
if($(".view_map_detail").length>0){$(".view_map_detail").fancybox({'width':'70%','height':'80%','autoScale':false,'type':'iframe',fitToView: false});}
if($("#phone_contact").length>0){$("#phone_contact").intlTelInput({preferredCountries:['us','gb','au'],});$("#phone_contact").intlTelInput("setNumber","+1 ");var input=document.getElementById('phone_contact');input.onclick=input.onkeydown=function(event){if(input.value.length<2||input.value=='+1 '){input.value='+';}
var key=event.keyCode||event.charCode;if(key==8){if(input.value.length<3||input.value=='+1 '){input.value='++';}}else if(key==46){if(input.value.length<2||input.value=='+1 '){input.value='+';}}};}
if($("#phone_popup").length>0){
    $("#phone_popup").intlTelInput({preferredCountries:['us','gb','au'],});
    $("#phone_popup").intlTelInput("setNumber","+1 ");
    var input2=document.getElementById('phone_popup');
    input2.onclick=input2.onkeydown=function(event){
        if(input2.value.length<2||input2.value=='+1 '){
            input2.value='+';
            }
var key=event.keyCode||event.charCode;if(key==8){if(input2.value.length<3||input2.value=='+1 '){input2.value='++';}}else if(key==46){if(input2.value.length<2||input2.value=='+1 '){input2.value='+';}}};}
if($("#phone_popuptour").length>0){
    $("#phone_popuptour").intlTelInput({preferredCountries:['us','gb','au'],});
    $("#phone_popuptour").intlTelInput("setNumber","+1 ");
    var input2=document.getElementById('phone_popuptour');
    input2.onclick=input2.onkeydown=function(event){
        if(input2.value.length<2||input2.value=='+1 '){
            input2.value='+';
        }
var key=event.keyCode||event.charCode;if(key==8){if(input2.value.length<3||input2.value=='+1 '){input2.value='++';}}else if(key==46){if(input2.value.length<2||input2.value=='+1 '){input2.value='+';}}};}



if($('#btn').length>0){$('#btn').click(function(){$('html,body').animate({scrollTop:$("#main-head").offset().top},'slow');});}
if($("#tabs").length){$("#tabs").tabs();}if($("#tabs2").length){$("#tabs2").tabs();};
if($('#slide-home').length>0){$(window).load(function(){$('.flexslider').flexslider({animation:"slide",slideshowSpeed:4000,animationSpeed:900});});}
if($('.galpop-multiple').length>0){$('.galpop-multiple').galpop();}
if($('#need-help').length>0){$('#need-help').click(function(){$('html,body').animate({scrollTop:$("#inquiry").offset().top},'slow');});}
if($('#body-width-tour').length > 0){ $('#body-width-tour').click(function(){ $('html,body').animate({scrollTop:$("body").offset().top},'slow');});}
/*if($("#owl-demo4").length>0){var owl=$("#owl-demo4");owl.owlCarousel({items:10,itemsDesktop:[1000,7],itemsDesktopSmall:[900,6],itemsTablet:[600,3],itemsMobile:false});}
if($("#owl-demo2").length>0){$("#owl-demo2").owlCarousel({autoPlay:5000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsMobile:[479,1]});}
if($("#owl-demo6").length>0){$("#owl-demo6").owlCarousel({autoPlay:5000,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsMobile:[479,1]});}
if($("#owl-demo3").length>0){$("#owl-demo3").owlCarousel({autoPlay:5000,items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3]});}
if($("#owl-demo7").length>0){$("#owl-demo7").owlCarousel({autoPlay:5000,items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3]});}
if($("#owl-demo5").length>0){$("#owl-demo5").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true});}*/
/*if($("#owl-demo9").length>0){$("#owl-demo9").owlCarousel({autoPlay:5000,items:5,itemsDesktop:[1199,4],itemsDesktopSmall:[979,4],itemsMobile:[479,1]});}*/
if($("#owl-demo8").length>0){$("#owl-demo8").owlCarousel({autoPlay:5000,items:8,itemsDesktop:[1199,6],itemsDesktopSmall:[979,5],itemsTablet:[600,3],itemsMobile:[479,2]});}
/*var owl1=$("#owl-demo");var owl2=$("#owl-demo2");var owl3=$("#owl-demo3");var owl4=$("#owl-demo4");var owl5=$("#owl-demo5");var owl6=$("#owl-demo6");var owl7=$("#owl-demo7");var owl8=$("#owl-demo8");var owl9=$("#owl-demo9");if($("#owl-demo").length>0){$("#owl-demo").owlCarousel({autoPlay:3000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2]});$(".next").click(function(){owl1.trigger('owl.next');});$(".prev").click(function(){owl1.trigger('owl.prev');});}
if($("#owl-demo2").length>0){$(".next").click(function(){owl2.trigger('owl.next');});$(".prev").click(function(){owl2.trigger('owl.prev');});}
if($("#owl-demo3").length>0){$(".next").click(function(){owl3.trigger('owl.next');});$(".prev").click(function(){owl3.trigger('owl.prev');});}
if($("#owl-demo4").length>0){$(".next").click(function(){owl4.trigger('owl.next');});$(".prev").click(function(){owl4.trigger('owl.prev');});}
if($("#owl-demo5").length>0){$(".next").click(function(){owl5.trigger('owl.next');});$(".prev").click(function(){owl5.trigger('owl.prev');});}
if($("#owl-demo6").length>0){$(".next6").click(function(){owl6.trigger('owl.next');});$(".prev6").click(function(){owl6.trigger('owl.prev');});}
if($("#owl-demo7").length>0){$(".next").click(function(){owl7.trigger('owl.next');});$(".prev").click(function(){owl7.trigger('owl.prev');});}*/
var owl8=$("#owl-demo8");
if($("#owl-demo8").length>0){$(".next9").click(function(){owl8.trigger('owl.next');});$(".prev9").click(function(){owl8.trigger('owl.prev');});}
/*if($("#owl-demo9").length>0){$(".next9").click(function(){owl9.trigger('owl.next');});$(".prev9").click(function(){owl9.trigger('owl.prev');});}*/
if($('#datepicker').length>0){$('#datepicker').datepicker({minDate:new Date(),});}
if($('#main-infodes').length>0){if($("#main-infodes").height()>462){$('#show-more-des').show();$('#main-infodes').css({"height":"650px"});}
else{$('#show-more-des').hide();$('#hidden-more-des').hide();$('#main-infodes').css({"height":"100%"});}}
if(window.location.hash=='#Tours'){$("html,body").animate({scrollTop:$("#viewmap-des").offset().top},1000);}
if($("#month_picker").length>0){$("#month_picker").click(function(){$('#sub-menu-calendar').toggle();$(document).click(function(){$('#sub-menu-calendar').hide();});return false;});}
if($("#bottom-select-cruises .box-input").length>0){$("#bottom-select-cruises .box-input").click(function(){$(document).click(function(){if($('.box-hover').is(':visible')){$('.box-hover').hide();}});return false;});}});$(function(){$('[rel*=PopupVimass]').showPopup({top:80,closeButton:".close_popup",scroll:false,onClose:function(){}});});$(function(){$('[rel*=Popupbooking]').showPopup({top:60,closeButton:".close_popup",scroll:false,onClose:function(){}});});function criteria(slogan){var stt1="We can do it all. We're flexible and we know how to make planning easy for you. Our professional team will always listen and arrange everything as your desire.";var stt2="Everything is tailored to your exact needs and tastes. We're here to take the stress out of the holiday planning process. Private car, Private Guide It's absolutely flexible to your trip...";var stt3="You will have truly understanding about the history, culture and people of Vietnam and experience the real life of locals. Your travel experience with us is absolutely UNIQUE...";if(slogan==1){if($("#criteria_ple").html()==""){$("#criteria_ple").html(stt1);}
else{$("#criteria_ple").html("");}}
if(slogan==2){if($("#criteria_aut").html()==""){$("#criteria_aut").html(stt2);}
else{$("#criteria_aut").html("");}}
if(slogan==3){if($("#criteria_uni").html()==""){$("#criteria_uni").html(stt3);}
else{$("#criteria_uni").html("");}}}
function show_with_us(){
    if($("#with-us").is(':visible')){
		$("#with-us").hide();
	}else{
		$("#with-us").show();
        $("#with-us").html("<img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' />");
        $.ajax({
            type:"GET",
            url:SITE_URL+"/show-more-with-us.php",
            success:function(xml){
                $("#with-us").html(xml);
            },
            error:function(){}
        });
   }
}
function close_advertise(){$('#advertise').addClass('display-none');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=advertise",success:function(xml){}});}
function submit_sort(){document.form_sort.submit();}
function submit_filter(){document.form_filter.submit();}
function show_map_cruise_home(){$("#best-main").toggle();}
function show_all_tours_cruise(){$("#all_cruise_home").toggle();}
function show_search(){$(".container-search-home").toggle();}
function show_full_text(){$(".text_short").hide();$(".text_full").show();}
function show_hide_text(){$(".text_short").show();$(".text_full").hide();}
function check_empty(obj){ $("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if($("#"+obj).val()==""||$("#"+obj).val()=="Name"||$("#"+obj).val()=="Phone"||$("#"+obj).val()=="Other Request"){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_date(obj){$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if($("#"+obj).val()=="MM/DD/YYYY"){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_email(obj){var filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if(!filter.test($("#"+obj).val())){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_flexible(obj){$("#"+obj).css("border","1px solid #e3e2de");$("#err_"+obj).hide();if($("#"+obj).val()==""){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function submit_booking(){ 
    if(document.getElementById("checkdate").checked==true){
        var err1=check_flexible("dateinput");
    }else{
        var err1=check_date("datepicker");
    }
if($("#adult").val()==0){
    $("#adult").css("border","1px solid #ff6600");err0=false;
}else{
    $("#adult").css("border","1px solid #ccc");err0=true;
}
var err2=check_empty("phone");
var err3=check_email("email");
var err4=check_empty("name");
var err5=check_empty("country");
if(err0!=false&&err1!=false&&err3!=false&&err4!=false&&err5!=false){
    $('#submit_book').hide();
    $('#processing_tour').show();
    document.form_booking.submit();
}else{
    $('html,body').animate({scrollTop:$("#info-booking").offset().top},'slow');
}

}
function submit_booking_hore(){var err1=check_date("check_in");var err3=check_email("email");var err4=check_empty("fullname");var err5=check_date("check_out");var err6=true;$("#err_room").hide();if($("#single").val()==0&&$("#double").val()==0&&$("#twin").val()==0){err6=false;$("#err_room").show();}
if(err1!=false&&err3!=false&&err4!=false&&err5!=false&&err6!=false){document.form_booking.submit();}else{$("#fullname").focus();}}
/*function open_popup(mod,title){$("#load_offer_top").show();$("#content_offer").html("Loading...<img src='"+SITE_URL_IMG+"loading.gif' />");for(var i=1;i<14;i++){$('#tab_offer_'+i).removeClass('current');}
$('#tab_offer_'+mod).addClass('current');$("#tl").html('');var check_offer=false;if(check_offer==false){$.ajax({type:"GET",url:SITE_URL+"/ajax-offer.php?&mod=0",success:function(xml){$("#main-bottom").append(xml);check_offer=true;},error:function(){}});}
$.ajax({type:"GET",url:SITE_URL+"/ajax-offer.php?mod=popup_offer&mod="+mod,success:function(xml){$("#load_offer_top").hide();$("#tl").html(title);$("#content_offer").html(xml);$("#popup_offer").show();},error:function(){}});}
function close_popup(){$("#popup_offer").hide();}*/
function submit_confirm(){document.form_confirm.submit();}
function display_error(obj){$("#"+obj).css("border","1px solid #FF6600");}
function search_go(url){
    var cate = document.form_search_t.cate.value;
    var length_tour=document.form_search_t.tourday.value;
    var arr_dest=document.form_search_t.tags_des.value
    var keyword=document.form_search_t.text_search.value;
    if(cate==0&&length_tour==0&&arr_dest==0&&keyword==""){alert("Please choose which you are searching for...Thanks!");return;}
document.form_search_t.action=url+'/tours/search-'+cate+'-'+length_tour+'-'+arr_dest+'-'+keyword;document.getElementById('tourday').disabled=true;document.getElementById('cate').disabled=true;for(var i=0;i<arr_dest.length;i++){if(arr_dest[i].checked==true){document.getElementById('dest_'+i).disabled=true;}}
document.form_search_t.submit();}
function enter_go(evt,url){var k=evt.keyCode||evt.which;if(k==13)
{search_go_quick(url);return k!=13;}}
function search_go_h(url){var keyword=document.form_search_h.keyword_hotel.value;var great=document.form_search_h.great_h.value;var dest=document.form_search_h.desti_h.value;keyword=keyword.replace(/\//g,'+');keyword=keyword.replace(/\\/g,'+');keyword=keyword.replace(/\"/g,'');keyword=keyword.replace(/\s+/g,'+');document.form_search_h.action=url+'/hotels/search-'+keyword+'-'+great+'-'+dest;document.form_search_h.keyword_hotel.disabled=true;document.form_search_h.price_per.disabled=true;document.form_search_h.desti_h.disabled=true;document.form_search_h.submit();}
function search_go_holiday(url){var expediency=document.form_search_holiday.tran_holiday.value;var dest=document.form_search_holiday.tags_holiday.value;var night=document.form_search_holiday.nights.value;var grade=document.form_search_holiday.grade_search.value;if(expediency==0&&dest==""&&night==0&&grade==0){alert("Please choose which you are searching for...Thanks!");return;}
document.form_search_holiday.action=url+'/packages/search-'+expediency+'-'+dest+'-'+night+'-'+grade;document.form_search_holiday.tran_holiday.disabled;document.form_search_holiday.tags_holiday.disabled;document.form_search_holiday.nights.disabled;document.form_search_holiday.grade_search.disabled;document.form_search_holiday.submit();}
function show_box_sear(mode){$('#div_form_t').slideUp(500);$('#div_form_h').slideUp(500);$('#div_form_r').slideUp(500);var bto=document.getElementById('bt');var bho=document.getElementById('bh');var bro=document.getElementById('br');bto.className="bmax";bho.className="bmax";bro.className="bmax";switch(mode){case 1:$('#div_form_t').slideDown(500);bto.className="bmin";break;case 2:$('#div_form_h').slideDown(500);bho.className="bmin";break;case 3:$('#div_form_r').slideDown(500);bro.className="bmin";break;}}
function show_box_sear_init(mode){$('#div_form_t').hide();$('#div_form_h').hide();$('#div_form_r').hide();var bto=document.getElementById('bt');var bho=document.getElementById('bh');var bro=document.getElementById('br');bto.className="bmax";bho.className="bmax";bro.className="bmax";switch(mode){case 1:$('#div_form_t').show();bto.className="bmin";break;case 2:$('#div_form_h').show();bho.className="bmin";break;case 3:$('#div_form_r').show();bro.className="bmin";break;}}
function show_sub_mn(mode){$('#sub_tour').hide();$('#sub_hotel').hide();$('#sub_resort').hide();$('#sub_togo').hide();var ahome=document.getElementById('a_home');var atour=document.getElementById('a_tour');var ahotel=document.getElementById('a_hotel');var aresort=document.getElementById('a_resort');var atogo=document.getElementById('a_togo');switch(mode){case 1:$('#sub_tour').show();atour.className="aover";break;case 2:$('#sub_hotel').show();ahotel.className="aover";break;case 3:$('#sub_resort').show();aresort.className="aover";break;case 4:$('#sub_togo').show();atogo.className="aover";break;}
$('#menu-overlay').show();}
function hide_sub_mn(){var ahome=document.getElementById('a_home');var atour=document.getElementById('a_tour');var ahotel=document.getElementById('a_hotel');var aresort=document.getElementById('a_resort');var atogo=document.getElementById('a_togo');if(ahome.className!="current"){ahome.className="";}
if(atour.className!="current"){atour.className="";}
if(ahotel.className!="current"){ahotel.className="";}
if(aresort.className!="current"){aresort.className="";}
if(atogo.className!="current"){atogo.className="";}
$('#sub_tour').hide();$('#sub_hotel').hide();$('#sub_resort').hide();$('#sub_togo').hide();$('#menu-overlay').hide();}
function close_sub_hotel(){$('#close_sub').hide(500);$('#show_sub').show();}
function show_sub_hotel(){$('#close_sub').show(500);$('#show_sub').hide();}
function show_mn_hotel(mode){$('#mn_nor').hide();$('#mn_cen').hide();$('#mn_sou').hide();if(mode==1){$('#mn_nor').fadeIn('slow');}else if(mode==2){$('#mn_cen').fadeIn('slow');}else{$('#mn_sou').fadeIn('slow');}}
var map_show=false;function show_tab_detail(tab){$('#tab_ful').hide();$('#tab_map').hide();var atab1=document.getElementById('a_ful');var atab2=document.getElementById('a_map');atab1.className='';atab2.className='';switch(tab)
{case 1:atab1.className='current';$('#tab_ful').show();break;case 2:atab2.className='current';$('#tab_map').show();if(map_show==false){initialize();map_show=true;}break;}}
function show_full_day(tday){$('#activities').hide();$('#con_iti_d').show();document.getElementById('a_full_day').className='current';for(var i=0;i<tday;i++){$('#div_day_'+i).show();document.getElementById('aday_'+i).className='';if(i!=tday){$('#next_d_'+i).hide();}}}
var map_show=false;function show_full_day_c(tday,map,id){if(map==1){$('.div_highlight_'+id).hide();if($('.tab_map_'+id).is(':visible')){$('.tab_map_'+id).hide();}else{$('.tab_map_'+id).show();}
document.getElementById('a_full_day_'+id).className='';document.getElementById('aday_'+i+id).className='';$('.g_map_'+id).addClass('active');if(map_show==false){initialize();map_show=true;}}else{$('.div_highlight_'+id).show();$('.tab_map_'+id).hide();document.getElementById('a_full_day_'+id).className='active';$('.g_map_'+id).removeClass('active');for(var i=0;i<tday;i++){$('#div_day_'+i+id).hide();document.getElementById('aday_'+i+id).className='';}}}
function show_day_c(d,tday,id){$('.div_highlight_'+id).hide();$('.tab_map_'+id).hide();document.getElementById('a_full_day_'+id).className='';$('.g_map_'+id).removeClass('active');for(var i=0;i<tday;i++){if(i==d){$('#div_day_'+d+id).show();document.getElementById('aday_'+d+id).className='active';}else{$('#div_day_'+i+id).hide();document.getElementById('aday_'+i+id).className='';}}}
function show_day(d,tday){$('#activities').hide();$('#con_iti_d').show();document.getElementById('a_full_day').className='first';for(var i=0;i<tday;i++){if(i==d){$('#div_day_'+d).show();document.getElementById('aday_'+d).className='current';}else{$('#div_day_'+i).hide();document.getElementById('aday_'+i).className='';}}}
function show_map_detail_t(){if($('#tab_map').is(':visible')){$('#tab_map').hide("fold",1000);$('#view_dest').html('View map');$('#t_map').removeClass('active');}else{$('#tab_map').show("fold",1000);if(map_show==false){initialize();map_show=true;}
$('#view_dest').html("Close map");$('#t_map').addClass('active');}}
function show_map_detail_des(){$('#tab_map').show("fold",1000);if(map_show==false){initialize();map_show=true;}
$('#view_dest').html("Close map");$('#t_map').addClass('active');}
function close_map_detail_t(){$('#tab_map').hide();}
function close_map_detail_h(){$('#tab_map').hide();}
var map_show_hotel=false;function show_map_hotel(){if($('#tab_map').is(':visible')){$('#tab_map').hide();}else{$('#tab_map').show();}
if(map_show_hotel==false){load();map_show_hotel=true;}}
function createMarker(map,latlng,name,url,img,desc,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL_IMG+"gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='"+url+"' target='_blank' title='"+name+"' style='text-decoration:none;color:#008fbb;'>"+name+"</a></span><br />";myHtml+="<a href='"+url+"' target='_blank' title='"+name+"' style=\"float:left;\"><img style=\"float:left;height:175px;width:255px;\" src='"+img+"' border='0' alt='"+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454;float:left;text-align: justify;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarker1(map,latlng,name,url,img,desc,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL_IMG+"gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='javascript:;' title='"+name+"' style='text-decoration:none;color:#008fbb;'>"+name+"</a></span><br />";myHtml+="<a href='javascript:;' title='"+name+"' style=\"float:right;\"><img style=\"float:right;margin-left: 8px;margin-top: 8px;\" src='"+img+"' border='0' alt='"+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454;text-align: justify;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarker2(map,latlng,name,url,img,address,grade,price,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=icon;markIcon.iconSize=new GSize(14,24);markIcon.shadowSize=new GSize(22,20);markIcon.iconAnchor=new GPoint(6,20);markIcon.infoWindowAnchor=new GPoint(5,1);var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:240px; margin:2px;\">";myHtml+="<span style=\"font-weight:bold;font-size:14px;color:#333;\">"+name+"</span><br />";myHtml+="<p style=\"font-size:12px;color:#FF6600;width:100%;\"><b style=\"font-size:11px;color:#545454\">Grade : </b>"+grade+" Stars</p>";myHtml+="<p style=\"font-size:12px;color:#545454;width:100%;\"><b style=\"font-size:11px;\">Address</b> : "+address+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarker3(map,latlng,name,url,img,address,grade,price,icon)
{var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=icon;markIcon.iconSize=new GSize(14,24);markIcon.shadowSize=new GSize(22,20);markIcon.iconAnchor=new GPoint(6,20);markIcon.infoWindowAnchor=new GPoint(5,1);var marker=new GMarker(latlng,markIcon);var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:240px; margin:2px;\">";myHtml+="<span style=\"font-weight:bold;font-size:14px;color:blue\">"+name+"</span><br />";myHtml+="<img src='"+img+"' border='0' alt='"+name+"' style=\"float:right;display:inline;margin-top:5px;\" />";myHtml+="<p style=\"font-size:12px;color:#FF6600\"><b style=\"font-size:11px;color:#545454\">Grade : </b>"+grade+" Stars</p>";myHtml+="<p style=\"font-size:12px;color:#545454\"><b style=\"font-size:11px;\">Address</b> : "+address+"</p>";myHtml+="<p style=\"font-size:12px;color:#C31F41\"><b style=\"font-size:11px;color:#545454\">Price from : </b> $"+price+"</p>";myHtml+="<span style=\"font-size:12px;\"><a href='"+url+"' title='"+name+"' target='_blank'>Book this resort</a></span><br />";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);return marker;}
function createMarker_crusie(map,latlng,name,url,img,desc,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL_IMG+"gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:240px; margin:2px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;\"><a href='javascript:void(0);' style='color:#895a36;text-decoration:none;' title='tours to "+name+"' onclick=godestination('"+url+"')>"+name+"</a></span><br />";myHtml+="<a href='javascript:void(0);' onclick=godestination('"+url+"') title='tours to "+name+"'style=\"float:right;\"><img src='"+img+"' border='0' alt='tours to "+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}

function submit_cusomize(){
    var err1=check_email("email");
    var err2=check_empty("fullname");
    var err3=check_empty("phone");
    if(err1!=false&&err2!=false&&err3!=false){
        document.form_customize.submit();
    }else{
        $("#fullname").focus();
    }
}
function submit_contact(){var err1=check_email("contact_email");var err2=check_empty("contact_name");var err4=check_empty("contact_request");var err5=check_empty("contact_phone");if(err1!=false&&err2!=false&&err4!=false&&err5!=false){document.form_contact.submit();}}
function godestination(deslink){var urlImage=SITE_URL+'/'+deslink;var width=706;var height=660;var left=(screen.width-width)/1;var top=(screen.height-height)*2;var settings="width="+width+",height="+height+",scrollbars=yes,top="+top+",left="+left;newwindow=window.open(urlImage,'mywindow',settings);if(window.focus){newwindow.focus()}
return false;}
function show_more(){$("#more_cat_tour_con").toggle("500");}
function slideSwitch(){var $active=$('#slideshow DIV.active');if($active.length==0)$active=$('#slideshow DIV:last');var $next=$active.next().length?$active.next():$('#slideshow DIV:first');$active.addClass('last-active');$next.css({opacity:0.0}).addClass('active').animate({opacity:1.0},1000,function(){$active.removeClass('active last-active');});}
function slideSwitch2(){var $active=$('#slideshow2 DIV.active');if($active.length==0)$active=$('#slideshow2 DIV:last');var $next=$active.next().length?$active.next():$('#slideshow2 DIV:first');$active.addClass('last-active');$next.css({opacity:0.0}).addClass('active').animate({opacity:1.0},1000,function(){$active.removeClass('active last-active');});}
function ft001(link,url){var tg = -new Date().getTimezoneOffset()*810000;var postData={"fz":tg,"link":link,"url":url};$.ajax({type:"POST",data:postData,url:SITE_URL+"/fz.php",success:function(xml){},error:function(){}});}
function loadphotodetail(url,name){$('#load_photo').show();document.getElementById('tour_photo').src=url;document.getElementById('name_photo').innerHTML=name;setTimeout("closeObj('load_photo')",1200);}
function loadphoto(pho_name,pho_url,tour_name,tour_url){document.getElementById('load_box_photo').innerHTML="<a href='"+tour_url+"' title='"+tour_name+"'><img src='"+pho_url+"' width='200px' height='133px' /></a><a href='"+tour_url+"' title='"+tour_name+"'>"+pho_name+"</a>";document.getElementById('load_tour_name').innerHTML="Tour: <a href='"+tour_url+"' title='"+tour_name+"'>"+tour_name+"</a>";}
function onclick_obj(obj,message){var vobj=document.getElementById(obj).value;if(vobj==message){document.getElementById(obj).value="";}}
function onblur_obj(obj,message){var vobj=document.getElementById(obj).value;if(vobj==""){document.getElementById(obj).value=message;}}
function closeObj(obj){$("#"+obj).hide();}
function add_wish(tid){$("#wl").html("<img src='"+SITE_URL_IMG+"loading1.gif' />");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=addwish&tid="+tid,success:function(xml){var arr_html=xml.split('|');$("#wl"+tid).html(arr_html[0]);$("#c_wl").html(arr_html[1]);},error:function(){}});}
function show_more_tours(cond,page,love_t){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-tours.php?cond="+cond+"&p="+page+"&love_t="+love_t,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_desti_tours(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax_show_more_desti_tour.php?cond="+cond+"&p="+page,success:function(xml){$("#show"+page).html(xml);$("#show"+page+" .tooltip").tooltipster({offsetY:2,theme:"tooltipster-white"});},error:function(){}});}
function show_more_desti_tours2(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax_show_more_desti_tour2.php?cond="+cond+"&p="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_desti_tours3(cond,page){$("#showdes"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax_show_more_desti_tour.php?cond="+cond+"&p="+page+"&type_des=multi",success:function(xml){$("#showdes"+page).html(xml);},error:function(){}});}
function show_more_travelguide(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-travelguide.php?cond="+cond+"&p="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_des_tours(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax_show_more_des_tour.php?cond="+cond+"&p="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_hotels(location,page,star){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?location="+location+"&p="+page+"&star="+star,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_tab_hotel(linh,mode,tab){$.ajax({type:"GET",url:SITE_URL+"/ajax-tab_hotel_detail.php?link="+linh+"&mod="+mode,success:function(xml){$("#"+tab).html(xml);},error:function(){}});}
function show_tab_cus(mode){if(mode==1){$('#box_des').hide();$('#box_ideal').hide();$('#p_sim').show();$('#cus_recom').show();$('#a_sim').addClass('current');$('#a_adv').removeClass('current');$('#are_req').css({'height':'200px','width':'420px'});$('#lf1').css({'width':'100px'});$('#lf2').css({'width':'420px'});}else{$('#box_des').show();$('#box_ideal').show();$('#p_sim').hide();$('#cus_recom').hide();$('#a_adv').addClass('current');$('#a_sim').removeClass('current');$('#are_req').css({'height':'100px','width':'400px'});$('#lf1').css({'width':'160px'});$('#lf2').css({'width':'515px'});}}
function show_hotel_tour(star,tab){star=star.replace(/#/g,';');$('.tab').removeClass('ui-tabs-active');$("#"+tab).addClass('ui-tabs-active');$.ajax({type:"GET",url:SITE_URL+"/ajax-hotel-tour.php?star="+star,success:function(xml){$(".tab_content").html(xml);},error:function(){}});}
var tabcal=0;function show_tab_home(cid,tab){tabcal=tabcal+cid;if(tabcal<16){$("#"+tab).html("<div style='float:left; width:100%; text-align:center'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");}
$.ajax({type:"GET",url:SITE_URL+"/ajax-tab_home.php?cid="+cid,success:function(xml){$("#"+tab).html(xml);},error:function(){}});}
function show_more_testi(page,i){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-testi.php?p="+page+"&i="+i,success:function(xml){$("#show"+page).html(xml);}});}
function add_letter(){$("#relet").html("<img src='"+SITE_URL_IMG+"loading1.gif' />");email=document.getElementById('email_let').value;if(email==""){$("#relet").html("<font style='color:#FF3300; font-size:12px;'>Please type your email.Thanks!</font>");return;}
$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=letter&email="+email,success:function(xml){var arr_html=xml.split('|');$("#relet").html(arr_html[0]);if(arr_html[1]=="ok"){document.getElementById('email_let').value='';}},error:function(){}});}
function view_office(){$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=address",success:function(xml){$("#addfoot").hide();$("#addfoot").html(xml);$("#addfoot").fadeIn('slow');},error:function(){}});}
function gowishlist(){var urlImage=SITE_URL+'/wish-list/';var width=560;var height=660;var left=(screen.width-width)/1;var top=(screen.height-height)*2;var settings="width="+width+",height="+height+",scrollbars=yes,top="+top+",left="+left;newwindow=window.open(urlImage,'mywindow',settings);if(window.focus){newwindow.focus()}
return false;}
function goselectedlist(){var urlImage=SITE_URL+'/viewed-list/';var width=560;var height=660;var left=(screen.width-width)/1;var top=(screen.height-height)*2;var settings="width="+width+",height="+height+",scrollbars=yes,top="+top+",left="+left;newwindows=window.open(urlImage,'mywindow',settings);if(window.focus){newwindows.focus()}
return false;}
function gobooking(){document.form_booking.submit();}
function gocustomize(){document.form_customize.submit();}
function inquiry_package(){var id_t=[];$(':checkbox:checked').each(function(i){id_t[i]=$(this).val();});$('#id_tours').val(id_t);document.form_package.submit();}
function quickcontq(){quest=document.getElementById('quickinq').value;name=document.getElementById('quicknameq').value;email=document.getElementById('quickemailq').value;phone=document.getElementById('quickphoneq').value;questext="It is simple and free; just tell us what you want to do and where you want to go, whatever about your group and we will get back to you with an itinerary, best offers...";if(quest==""||quest==questext){$("#quickconmesq").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>question</b>.Thanks!</font>");return;}
if(name==""||name=="Name"){$("#quickconmesq").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>name</b>.Thanks!</font>");return;}
if(email==""||email=="Email"){$("#quickconmesq").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>email</b>.Thanks!</font>");return;}
if(phone==""){$("#quickconmesq").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>phone</b>.Thanks!</font>");return;}
fullname=document.getElementById('quicknameq').value;$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=quickcont&name="+name+"&email="+email+"&phone="+phone+"&info="+quest,success:function(xml){var arr_html=xml.split('|');$("#quickconmesq").html(arr_html[0]);if(arr_html[1]=="ok"){document.getElementById('quickinq').value='';document.getElementById('quicknameq').value='';document.getElementById('quickemailq').value='';document.getElementById('quickphoneq').value='';}},error:function(){}});}
function cancelquick(){$("#quickconmesq").html("&nbsp;");questext="It is simple and free; just tell us what you want to do and where you want to go, whatever about your group and we will get back to you with an itinerary, best offers...";document.getElementById('quickinq').value=questext;document.getElementById('quicknameq').value="Name";document.getElementById('quickemailq').value="Email";document.getElementById('quickphoneq').value="Phone";}
function show_tab_default(id){$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=gettabh&tab="+id,success:function(xml){$("#tab_tour_h").html(xml);},error:function(){}});}
function goToByScroll(id){$('html,body').animate({scrollTop:$("#"+id).offset().top},1000);}
scrollStep=1;timerLeft="";timerRight="";function scrollDivLeft(id){clearTimeout(timerRight);document.getElementById(id).scrollLeft+=scrollStep;timerRight=setTimeout("scrollDivLeft('"+id+"')",8);}
function scrollDivRight(id){clearTimeout(timerLeft);document.getElementById(id).scrollLeft-=scrollStep;timerLeft=setTimeout("scrollDivRight('"+id+"')",8);}
function toLeft(id){document.getElementById(id).scrollLeft=0}
function toRight(id){document.getElementById(id).scrollLeft=document.getElementById(id).scrollWidth}
function stopMe(){clearTimeout(timerRight);clearTimeout(timerLeft);}
kt=false;function show_day_ajax(params)
{if(kt==false){$("#activities").hide();$(".ajax_intinerary").fadeIn(400).html('Loading....');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=intinerary&params="+params,cache:false,success:function(result){$(".ajax_intinerary").html(result);kt=true;}});}}
function ajax_cabin(id,i,text)
{$("#updating").show();$(".removeactive").removeClass("active");$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=ajax_cabin&id="+id+"&i="+i,cache:false,success:function(result){$(".content-tab").html(result);$("#updating").hide();goToByScroll("markers");}});}
function ajax_tour(id,i,c_id,text,check_old){
    $(".removeactive").removeClass("active");
    $('#'+text).addClass('active');
    $('html,body').animate({scrollTop:$("#content-tab").offset().top-60},'slow');
    switch(i){
        case 1:{
            $('#loading-tour').show();
            $(".tab-detail-tour").hide();
            $(".tour-summary").show();
            $("#t_map").removeClass("active");
            $("#tab_map").hide();
            $("#loading-tour").hide('slow');
            break;
        }case 2:{ 
            $('.top-photo-map').addClass("photomap-fix");
            if(c_id==5||c_id==12||check_old=="no"||c_id=="no_cat"){
                $('#loading-tour').show();
                check = $(".full-tour .detail-itinerary").length;
                if(check==0){
                    $(".tour-summary").hide();
                    $('.inclisions').hide();
                    $("#t_map").removeClass("active");
                    $("#tab_map").hide();
                    $(".full-tour").html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
                    $(".tab-detail-tour").hide();
                    $.ajax({type:"GET",url:SITE_URL+"/ajax-tour.php?mod=ajax_itinerary&id="+id+"&c_id="+c_id,
                        success:function(result){
                            $('#loading-tour').hide();
                            $(".full-tour").html(result);
                            $(".full-tour").show();
                        }
                    });
                }else{
                    $(".tab-detail-tour").hide();
                    $("#t_map").removeClass("active");
                    $("#tab_map").hide();
                    $("#loading-tour").hide('slow');
                    $(".full-tour").show();
                }
            }else{
                $(".tab-detail-tour").hide();
                $(".full-tour").show();
                $("#t_map").removeClass("active");
                $("#tab_map").hide();
                $("#loading-tour").hide('slow');
            }
            break;
        }case 3:{
            $('#loading-tour').show();
            $(".tab-detail-tour").hide();
            $(".accommodation").show();
            $("#t_map").removeClass("active");
            $("#tab_map").hide();
            $("#loading-tour").hide('slow');
            break;
        }case 4:{ 
            $('#loading-tour').show();
            $(".tab-detail-tour").hide();
            $(".inclisions").show();
            $("#t_map").removeClass("active");
            $("#tab_map").hide();
            $("#loading-tour").hide('slow');
            break;
        }case 5:{
            $('#loading-tour').show();
            $(".tab-detail-tour").hide();
            $(".experience").show();
            $(".tab-photo").hide();
            $("#t_map").removeClass("active");
            $("#tab_map").hide();
            $("#loading-tour").hide('slow');
            break;
        }
        case 6:{
            $('#loading-tour').show();
            $(".tab-detail-tour").hide();
            $(".tab-photo").show();
            $("#t_map").removeClass("active");
            $("#tab_map").hide();
            $("#loading-tour").hide('slow');
            break;
        }
    }
}
function q_answers(text,id){
    $(".removeactive").removeClass("active");
    $("#"+text).addClass("active");
    $(".tab-detail-tour").hide();
    $(".tab-question-tour").show();
    $('html,body').animate({scrollTop:$("#content-tab").offset().top-60},'slow');
    $(".tab-question-tour").html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=q_answers&id="+id,
        success:function(xml){
            $(".tab-question-tour").html(xml);
        }
    });
}
function review_tour(text,id){
    $(".removeactive").removeClass("active");
    $("#"+text).addClass("active");
    $(".tab-detail-tour").hide();
    $(".tab-review-tour").show();
	$('html,body').animate({scrollTop:$("#content-tab").offset().top-60},'slow');
    $(".tab-review-tour").html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=review_tour&id="+id,
        success:function(xml){
            $(".tab-review-tour").html(xml);
        }
    });
}
function showreview(id,page){
    $('#show'+page).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=showreview&page="+page+"&id="+id,
        success:function(xml){
            $("#show"+page).html(xml);
        }
    });
}
function showfaq(id,page){
    $('#show'+page).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=showfaq&page="+page+"&id="+id,
        success:function(xml){
            $("#show"+page).html(xml);
        }
    });
}
function show_offer_top(i){
    if($('.show_offer_top'+i).is(':visible')){
        $('.show_offer_top'+i).hide();
    }else{ 
        $('.show_offer_top'+i).show();
    }
}
function show_full_day(text,text1){$(".hide_ajax").hide();$(".remo_day").removeClass('active');$("#"+text1).addClass('active');$("."+text).show();}
function tab_day(text,text1)
{$(".content-daytrip").hide();$(".remo_tab").removeClass('active');$("#"+text1).addClass('active');$("."+text).show();}
function inc_event(tab,text)
{$('.tab_in').removeClass('active');$('.hide_in').hide();$('#'+tab).addClass('active');$('.'+text).show();}
function ajax_day_tour(i,name_link,text,cat_id)
{$('.day_tour').removeClass('active');$('#'+text).addClass('active');if(cat_id==14){$('#activities').hide();$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=ajax_day_tour&i="+i+"&name_link="+name_link,cache:false,success:function(result){$(".day_tours").html(result);}});}else{$('#activities').hide();$('.day_detail_tour').hide();$('#day_detail_tour_'+i).show();}}
function hotel_room_ajax(i,id,text)
{$('#hotel_6').removeClass('active');$('.good_to_know').hide();$('.hol_room').removeClass('active');$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=hotel_room_ajax&i="+i+"&id="+id,cache:false,success:function(result){$(".content-tab").html(result);$(".content-tab").show();}});}
function cruise_room_ajax(i,params,text)
{$('#loading-mk').show();$('.crui_room').removeClass('active');$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=cruise_room_ajax&i="+i+"&params="+params,cache:false,success:function(result){$(".content-tab").html(result);$('#loading-mk').hide();}});}
function show_tab_iti_ajax(c_link,i_link,num_iti,chon){for(var t=0;t<num_iti;t++){if(t==chon){$('#iti_'+t).addClass('active');$('.itinerary_'+t).addClass('active');}else{$('#iti_'+t).removeClass('active');$('.itinerary_'+t).removeClass('active');}}
$("#load_iti").show();if($("#con_re_iti_"+chon).html()==''){$('#loading-iti'+chon).show();$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=showiti&c_link="+c_link+"&i_link="+i_link+"&chon="+chon,success:function(xml){$("#con_re_iti_"+chon).html(xml);$('#loading-iti'+chon).hide();},error:function(){}});}else{$("#con_re_iti_"+chon).html('');}}
function chackdate(){if(document.getElementById("checkdate").checked==true){$('.input_time').show();$('.date_time').hide();}else{$('.input_time').hide();$('.date_time').show();}}
function checkoption(id_text,cl_text)
{document.getElementById(""+id_text).checked=true;$(".radio_people").removeClass('active');$("."+cl_text).addClass('active');$('.family_box').hide();$('.group_box').hide();}
function select_box(id_text,act_text,show_text)
{document.getElementById(""+id_text).checked=true;$(".radio_people").removeClass('active');$("."+act_text).addClass('active');$('.box-sl-people').hide();$('.'+show_text).show();}
function search_go_quick(url){var keyword=document.form_quick_sear.keysearch.value;if(keyword=="Enter Search"||keyword==""){alert("Please type something to search. Thanks!");return;}
keyword=keyword.replace(/\//g,'+');keyword=keyword.replace(/\\/g,'+');keyword=keyword.replace(/\"/g,'');keyword=keyword.replace(/\s+/g,'+');keyword=keyword.replace(/\./g,'');document.form_quick_sear.action=url+'/tours/search-0-0-0-'+keyword;document.getElementById('keysearch').disabled=true;document.form_quick_sear.submit();}
function tab_package(i,name_link,tab_active)
{$(".content-tab").fadeIn(400).html('<div style="margin:0 auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');$('.tab_pack').removeClass('active');$('#'+tab_active).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=tab_package&i="+i+"&name_link="+name_link,cache:false,success:function(result){$(".content-tab").html(result);}});}
function radio_box(text_id)
{$('.radio_box').removeClass('active');$('#'+text_id).addClass('active');}
function radio_box_chi(text_id)
{$('.radio_box_chi').removeClass('active');$('#'+text_id).addClass('active');}
function add_inquiry(){var value_adult=$("input[type='radio'].css-checkbox:checked").val();var value_chi=$("input[type='radio'].css-checkbox-chi:checked").val();var date=$('#datepicker').val();if(date==""||date=="MM/DD/YYYY"){$("#boxmessage").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>name</b>.Thanks!</font>");return;}}
function special(spa_id,link){if($("#show_special_"+spa_id).is(":visible")!=true){$("#show_special_"+spa_id).fadeIn(400).html('Loading....');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=special&link="+link+"&spa_id="+spa_id,cache:false,success:function(result){$("#show_special_"+spa_id).html(result);}});}else{$("#show_special_"+spa_id).hide();}}
function dest_tab(i,route,text_id)
{$(".content-tab").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');$('.dest_tab').removeClass('active');$('#'+text_id).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=dest_tab&i="+i+"&route="+route,cache:false,success:function(result){$('.content-tab').html(result);}});}
function jquery_add_sub(text_show,class_span,text)
{if($("."+text_show).is(":visible")==false){$("#"+class_span).removeClass('nav-cong');$("#"+class_span).addClass('nav-tru');$('.'+text_show).show();}else{$("#"+class_span).removeClass('nav-tru');$("#"+class_span).addClass('nav-cong');$('.'+text_show).hide();}}
function quickcontq_popup(){
    sub=document.getElementById('subname').value;
    name=document.getElementById('name_pop').value;
    mail=document.getElementById('mail').value;
    ques=document.getElementById('question').value;
    ques=ques.replace(/\n/gi,'<br />');
    numphone=document.getElementById('phone_popup').value;
    numphone=encodeURIComponent(numphone);
    country=document.getElementById('country_pop').value;
    if(ques==""||ques=="Type your question here..."){
        $("#message_popup").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Please type your <b>question</b>.Thanks!</font>");return;
    }
    
if(name==""||name=="Name"){
    $("#message_popup").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Please type your <b>name</b>.Thanks!</font>");return;
}
if(mail==""||mail=="Email"){
    $("#message_popup").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Please type your <b>email</b>.Thanks!</font>");return;
}
emai=check_email('mail');if(emai==false){return;}
if(country==""){ 
    $("#message_popup").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Please select your <b>Country</b>.Thanks!</font>");return;
}
if(numphone==""||numphone=="%2B1%20Phone%20Number"||numphone=="%2B"){$("#message_popup").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Please type your <b>phone</b>.Thanks!</font>");return;}
$("#message_popup").html(" ");
$('.signin').html("<div id='images-load' style='height: 180px;margin-top:100px;'><img style='display: table;margin: 0 auto;' src='"+SITE_URL_IMG+"ajax-request.gif' /></div>");
$.ajax({
    type:"GET",
    url:SITE_URL+"/ajax-process.php?mod=popup&name="+name+"&mail="+mail+"&ques="+ques+"&numphone="+numphone+"&country="+country+"&sub="+sub,
    success:function(xml){
        var arr_html=xml.split('|');
        if(arr_html[1]=="ok"){
            /*$('.signin').html(arr_html[0]);*/
			window.location = SITE_URL+'/success.html';
        }else{
            $("#message_popup").html(arr_html[0]);
        }},
        error:function(){
            
        }
});
}

function booking_tour(){
    var check_t = true;
    var checkdate = $('#checkdate').val();
    if(document.getElementById("checkdate").checked==true){
        var datepicker = check_flexible("dateinput");
        if(datepicker != false){
            datepicker = $('#dateinput').val();
        }else{
            check_t = false;
        }
    }else{
        var datepicker = check_date("datepicker");
        
        if(datepicker != false){
            datepicker = $('#datepicker').val();
        }else{
            check_t = false;
        }
    }
    
    var class_tour = $('#class_tour').val();
    if($("#adult").val()==0){
        $("#adult").css("border","1px solid #ff6600");
        check_t = false;
    }else{
        $("#adult").css("border","1px solid #ccc");
        var adult = $('#adult').val();
    }
    var child = $('#child').val();
    var infant = $('#infant').val();
    var sub = $('#subname_tour').val();
    var name = $('#name_poptour').val();
    if(name == "Name" || name == ""){
        $('#name_poptour').css("border","1px solid #ff6600");
        check_t = false;
    }else{
        $('#name_poptour').css("border","1px solid #ccc");
    }
    var mail_t = check_email('mail_tour');
    if(mail_t!=false){
        mail_t = $('#mail_tour').val();
    }else{
        check_t = false;
    }
    var phone = $('#phone_popuptour').val();
    var country = $('#country_poptour').val();
    if(country == ""){
        $('#country_poptour').css("border","1px solid #ff6600");
        check_t = false;
    }else{
        $('#country_poptour').css("border","1px solid #ccc");
    }
    var question = $('#question_tour').val();
    if(check_t==true){
        $('#inquiry_booking #images-load').show();
        $('#tour_booking').hide();
        document.form_booking.submit();
    }else{
        return false;
    }
}


$(document).ready(function(){for(i=0;i<7;i++){$('.login-window'+i).click(function(){var loginBox=$(this).attr('href');$(loginBox).fadeIn(300);var popMargTop=($(loginBox).height()+24)/2;var popMargLeft=($(loginBox).width()+24)/2;$(loginBox).css({'margin-top':-popMargTop,'margin-left':-popMargLeft});$('body').append('<div id="mask"></div>');$('#mask').fadeIn(300);return false;});$('.close').click(function(){$('.login-popup').fadeOut(300,function(){$('#mask').remove();});});}});$(document).ready(function(){var data=false;var hover_data=true;$('.drop_1').hover(function(){if(hover_data){hover_data=false;}
else{hover_data=true;$(".drop_1").removeClass("active");$("#sub-menu").hide();return false;}
if(!data){$(".link").removeClass("active");$(".drop_1").addClass("active");$(".sub-menu").hide();$("#sub-menu").show();data=true;}else{$(".sub-menu").hide();$("#sub-menu").show();$(".drop_1").addClass("active");}});var is_sub=true;$('#sub-menu').hover(function(){if(is_sub){is_sub=false;$(".sub-menu").hide();$("#sub-menu").show();$(".drop_1").addClass('active');}else{is_sub=true;$("#sub-menu").hide();$(".drop_1").removeClass('active');}});var data_2=false;var hover_data_2=true;$('.drop_2').hover(function(){if(hover_data_2){hover_data_2=false;}
else{hover_data_2=true;$(".drop_2").removeClass("active");$("#sub-menu-2").hide();return false;}
if(!data_2){$(".link").removeClass("active");$(".drop_2").addClass("active");$(".sub-menu").hide();$("#sub-menu-2").show();data_2=true;}else{$(".sub-menu").hide();$("#sub-menu-2").show();$(".drop_2").addClass("active");}});var is_sub_2=true;$('#sub-menu-2').hover(function(){if(is_sub_2){is_sub_2=false;$(".sub-menu").hide();$("#sub-menu-2").show();$(".drop_2").addClass('active');}else{is_sub_2=true;$("#sub-menu-2").hide();$(".drop_2").removeClass('active');}});var data_3=false;var hover_data_3=true;$('.drop_3').hover(function(){if(hover_data_3){hover_data_3=false;}
else{hover_data_3=true;$(".drop_3").removeClass("active");$("#sub-menu-3").hide();return false;}
if(!data_3){$(".link").removeClass("active");$(".drop_3").addClass("active");$(".sub-menu").hide();$("#sub-menu-3").show();data_3=true;}else{$(".sub-menu").hide();$("#sub-menu-3").show();$(".drop_3").addClass("active");}});var is_sub_3=true;$('#sub-menu-3').hover(function(){if(is_sub_3){is_sub_3=false;$(".sub-menu").hide();$("#sub-menu-3").show();$(".drop_3").addClass('active');}else{is_sub_3=true;$("#sub-menu-3").hide();$(".drop_3").removeClass('active');}});var data_4=false;var hover_data_4=true;$('.drop_4').hover(function(){if(hover_data_4){hover_data_4=false;}
else{hover_data_4=true;$(".drop_4").removeClass("active");$("#sub-menu-4").hide();return false;}
if(!data_4){$(".link").removeClass("active");$(".drop_4").addClass("active");$(".sub-menu").hide();$("#sub-menu-4").show();data_4=true;}else{$(".sub-menu").hide();$("#sub-menu-4").show();$(".drop_3").addClass("active");}});var is_sub_4=true;$('#sub-menu-4').hover(function(){if(is_sub_4){is_sub_4=false;$(".sub-menu").hide();$("#sub-menu-4").show();$(".drop_4").addClass('active');}else{is_sub_4=true;$("#sub-menu-4").hide();$(".drop_4").removeClass('active');}});});function ajaxdocking(i,location,star)
{$('.component-packages').fadeIn(400).html('Loading....');$('.cat_hotel_box a').removeClass('active');$('#star_'+i).addClass('active');p=1;$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?i="+i+"&location="+location+"&star="+star+"&p="+p,cache:false,success:function(result){$('.component-packages').html(result);}});}
function change_cruise(value)
{if(value!=0){$(location).attr('href',value);}else{return false;}}
function show_off_ajax(mod,id,stt){if($("#promo_view_"+stt+"_"+id).is(":visible")!=true&&$("#close_"+stt+"_"+id).is(":visible")!=true){$(".show_promo").hide();$(".icon-m").hide()
$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod="+mod+"&id="+id+"&stt="+stt,success:function(xml){$("#promo_view_"+stt+"_"+id).html(xml);$("#promo_view_"+stt+"_"+id).show();$("#icon-m_"+stt+"_"+id).show();$("#close_"+stt+"_"+id).click(function(){$("#promo_view_"+stt+"_"+id).hide();$(".icon-m").hide();});},error:function(){}});}else{$("#promo_view_"+stt+"_"+id).hide();$(".icon-m").hide();}}
function show_off_group(mod,id,stt,id_s){if($("#promo_view_"+id_s+"_"+stt).is(":visible")!=true&&$("#close_"+id_s+"_"+stt).is(":visible")!=true){$(".show_promo").hide();$(".icon-m").hide()
$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod="+mod+"&id="+id+"&stt="+stt+"&id_s="+id_s,success:function(xml){$("#promo_view_"+id_s+"_"+stt).html(xml);$("#promo_view_"+id_s+"_"+stt).show();$("#icon-m_"+id_s+"_"+stt).show();$("#close_"+id_s+"_"+stt).click(function(){$("#promo_view_"+id_s+"_"+stt).hide();$(".icon-m").hide();});},error:function(){}});}else{$("#promo_view_"+id_s+"_"+stt).hide();$(".icon-m").hide();}}
function showfice(i){if($('#fice_'+i).is(":visible")){$('#text_'+i).html('+');$('#fice_'+i).hide();}else{$('#text_'+i).html('-');$('#fice_'+i).show();}}
function show_pack(i)
{if($('.pack_'+i).is(":visible")){$('#tag_pack_'+i).removeClass('nav-tru');$('#tag_pack_'+i).addClass('nav-cong');$('.pack_'+i).hide();}else{$('#tag_pack_'+i).removeClass('nav-cong');$('#tag_pack_'+i).addClass('nav-tru');$('.pack_'+i).show();}}
function pack_offer(i,id){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=pack_offer&id="+id+"&i="+i,success:function(xml){$('#pack_offer_'+i+'_'+id).html(xml);$('#pack_offer_'+i+'_'+id).show();$('#close_offer_'+i+'_'+id).click(function(){$('#pack_offer_'+i+'_'+id).hide();});}});}
function month_ajax(i,text,check_tag){$('.destinations_month').fadeIn(400).html('<img src="/images/load_vtc.gif" />');$('.month').removeClass('active');$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=month_ajax&check_tag="+check_tag+"&i="+i,success:function(xml){$('.destinations_month').html(xml);}});}
function tab_route(text_id,i){$(".tab_r").removeClass('active');$("#tab_route_"+i).addClass('active');$('.tab_route').hide();$('#'+text_id).show();}
function ajax_search_tour_day(group_id,duration,div) {
    $('.main-group').fadeIn(1000).html('<div style="margin:10px auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');
    $('#about-me #filter-tours button').removeClass('active');
    $(div).addClass('active');
    $.ajax({
        type: "GET",
        url: SITE_URL + "/ajax-process.php?mod=ajax_search_tour_day&group_id="+group_id+"&duration=" + duration,
        success: function(xml) {
            //$('.main-group').addClass('grid-1');
            $('.main-group').html(xml);
        }
    });
}
function ajax_search_tour()
{
route=$("#tags_des").val();
group_id=$("#cate option:selected").val();
duration=$("#tourday option:selected").val();
keyword=$("#text_search").val();
if(route==""&&group_id==0&&duration==0&&keyword==""){
    $("#tags_des").css("border","1px solid rgb(255, 102, 0)");
    return false;
}else{
    $("#tags_des").css("border","0px solid #e5e5e5");
}
loading();$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=ajax_search_tour&route="+route+"&group_id="+group_id+"&duration="+duration+"&keyword="+keyword,success:function(xml){$('.about-me-top').remove();$('.main-group').html(xml);$('html,body').animate({scrollTop:$(".main-group").offset().top - 125},'slow');loading();}});}
function ajax_search_hotel(){contry=$('#desti_h').val();type=$('#type_search_h').val();star=$('#star_h').val();if(contry==0&&type==""&&star==0){$("#type_search_h").css("border","1px solid rgb(255, 102, 0)");return false;}else{$("#type_search_h").css("border","0px solid #e5e5e5");}
$(".main-group").fadeIn(400).html('<div style="margin:0 auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=ajax_search_hotel&contry="+contry+"&type="+type+"&star="+star,success:function(xml){$('.main-group').addClass('grid-1');$(".main-group").html(xml);},error:function(){}});}
function ajax_search_cruise(){contry=$('#desti_c').val();type=$('#cruise').val();keyword=$('#text_search').val();duration=$('#tourday').val();if(contry==0&&type==0&&duration==0){$("#desti_c").css("border","1px solid rgb(255, 102, 0)");return false;}else{$("#desti_c").css("border","0px solid #e5e5e5");}
$(".main-group").fadeIn(400).html('<div style="margin:0 auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=ajax_search_cruise&contry="+contry+"&type="+type+"&keyword="+keyword+"&duration="+duration,success:function(xml){$('.main-group').addClass('grid-1');$(".main-group").html(xml);},error:function(){}});}
function show_more_search(route,group_id,duration,page)
{$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_search&route="+route+"&group_id="+group_id+"&duration="+duration+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_cruise(cond,page,limit)
{$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_page_cruise&cond="+cond+"&page="+page+"&limit="+limit,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function check_available(){name=$("#tags").val();if(name!=""){day=$("#nights_cruise").val();no_cabin=$('#cabin_no').val();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=search_cruise_ajax&name="+name+"&day="+day+"&no_cabin="+no_cabin,success:function(xml){$('.ajax_search').html(xml);},error:function(){}});}else{$("#tags").css("border","1px solid #FF6600");}}
function show_more_package(tran,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package&tran="+tran+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function more_text(text)
{
    $('#hide').show();
    $('#more').hide();
    $('#'+text).css("height","auto");
    $('#'+text).css("overflow","inherit");
    $('#hidden-more-des').css("display","block");
    $('#show-more-des').css("display","none");
}
function hide_text_des(text,wrap)
{$('#hide').hide();$('#more').show();$('#'+text).css("height","650px");$('#'+wrap).css("display","block");$('#'+text).css("overflow","hidden");$('#show-more-des').css("display","block");$('#hidden-more-des').css("display","none");}
function hide_text(text,number)
{$('#more').show();$('#hide').hide();$('#'+text).css("height",number+"px");$('#'+text).css("overflow","hidden");}
function more_text_1(text,i)
{$('#hide_'+i).show();$('#more_'+i).hide();$('#'+text).css("height","auto");$('#'+text).css("overflow","inherit");}
function hide_text_1(text,number,i)
{$('#more_'+i).show();$('#hide_'+i).hide();$('#'+text).css("height",number+"px");$('#'+text).css("overflow","hidden");}
function show_group_package(pack_id,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_group_package&pack_id="+pack_id+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_search_package(route,nights,grade,type,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_search_package&route="+route+"&nights="+nights+"&grade="+grade+"&type="+type+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function ajax_package(cond,text,type){$(".component-packages").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');$('.pk').removeClass('active');$('#type_search').val(type);$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+'/ajax-package.php?mod=ajax_package&cond='+cond+'&type='+type,success:function(xml){$(".component-packages").html(xml);},error:function(){}});}
function ajax_search_package(text,type){$('.pk').removeClass('active');$('#'+text).addClass('active');$('#type_search').val(type);}
function search_package(){$(".component-packages").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');route=$("#tags_des").val();nights=$("#nights option:selected").val();grade=$("#grade option:selected").val();type=$("#type_search").val();if(route==""&&nights==0&&grade==0){$("#tags_des").css("border","1px solid rgb(255, 102, 0)");return false;}else{$("#tags_des").css("border","0px solid #e5e5e5");}
$.ajax({type:"GET",url:SITE_URL+'/ajax-package.php?mod=search_package&route='+route+"&nights="+nights+"&grade="+grade+"&type="+type,success:function(xml){$(".component-packages").html(xml);}});}
function show_more_destination(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_destination&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_deshotel(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_deshotel&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_ajax_package(cruise_id,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_ajax_package&cruise_id="+cruise_id+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_tour_package(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_tour_package&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_pack_hotel(id,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_pack_hotel&id="+id+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_tours_hotel(route,page){$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_tours_hotel&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}

function helpful(id,text,ip,session){if(session!=id){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=helpful&id="+id+"&text="+text+"&ip="+ip,success:function(xml){$("#box-helpful-guide ul li").hide();$("#message_c").html(xml);}});}else{alert('You have already voted!');return false;}}
function arrange_hotel(value,route){if(value!=0){if(value=='asc'){check='ASC';}else if(value=='des'){check='DESC';}
$('.component-packages').html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?check="+check+"&location="+route,cache:false,success:function(result){$('.component-packages').html(result);}});}else{return false;}}
function like_package(id,total)
{$('#like_pac_'+id).addClass('active');var number=parseInt($("#total_like").text());if(isNaN(number)==true){number=0;}
total=number+1;$('#like_pac_home').addClass('active');$('#like_pac_home').attr("href",SITE_URL+'/packages/like/');var st=total.toString();$("#total_like").text(""+st);$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=like_package&id="+id,success:function(xml){$('#fontajax_'+id).html(xml);$('#like_pac_'+id).attr('onclick','').unbind('click');$('#like_pac_'+id).attr("href",SITE_URL+'/packages/like/');}});}
data_hotel=false;function hotels_des(id){if($('.deshotel_ajax').is(':visible')){$('.deshotel_ajax').hide();$(".hotel_des").show();$('#show_more_hotel').text('Show more');}else{$(".hotel_des").hide();$('#show_more_hotel').text('Hide less');if(data_hotel==false){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=hotels_des&id="+id,success:function(xml){$(".deshotel_ajax").html(xml);data_hotel=true;}});}else{$('.deshotel_ajax').show();}}}
function show_more_tours_serach(cat_id,tour_length,str_dest,keyword,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_tours_serach&cat_id="+cat_id+"&tour_length="+tour_length+"&str_dest="+str_dest+"&keyword="+keyword+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_hotels_search(star,str_cat,keyword,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_hotels_search&star="+star+"&str_cat="+str_cat+"&keyword="+keyword+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_package_search(expediency,dest,night,grade,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package_search&expediency="+expediency+"&dest="+dest+"&night="+night+"&grade="+grade+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_iti(mod,page,sort){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-group.php?mod="+mod+"&p="+page+"&sort="+sort,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function hotel_onclick_ajax(){$('.hol_room').removeClass('active');$('#hotel_6').addClass('active');$('.content-tab').hide();$('.good_to_know').show();}
function jquery_show(i,text,tag,tag2,tab_home){if(i==1){$('#'+tab_home).text(text);$('#'+tag).hide();$('#'+tag2).show();}else{$('#'+tab_home).text(text);$('#'+tag).hide();$('#'+tag2).show();}}
function show_more_package_like(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package_like&cond="+cond+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
$(document).ready(function(){$('.hotel_tab li #text a').click(function(){$('.hotel_tab li #text a').removeClass('active');$(this).addClass('active');$('.component-tour').hide();var activeTab=$(this).attr('href');$(activeTab).fadeIn();return false;});});function family(text){document.getElementById(""+text).checked=true;document.getElementById("iam_2").checked=true;$('.people').removeClass("active");$("#family").addClass("active");$('.group_number').hide();$("#sl-number").show();$("#content-slider-1 .rsOverflow").css('height','400px');$("#content-slider-1 .rsOverflow").css('background','#f5f5f5');$("#content-slider-1 .rsSlide").css('height','400px');$("#content-slider-1 .rsSlide").css('background','#f5f5f5');}
function unfamily(text,text1){document.getElementById(""+text1).checked=true;document.getElementById("iam_2").checked=false;$('.people').removeClass("active");$("#"+text).addClass("active");$("#content-slider-1 .rsOverflow").css('height','400px');$("#content-slider-1 .rsOverflow").css('background','#ffffff');$("#content-slider-1 .rsSlide").css('height','400px');$("#content-slider-1 .rsSlide").css('background','#ffffff');$("#sl-number").hide();$('.group_number').hide();}
function group(text){document.getElementById(""+text).checked=true;if(document.getElementById("iam_3").checked=true){$('.people').removeClass("active");$('#group').addClass("active");$("#sl-number").hide();$('.group_number').show();$("#content-slider-1 .rsOverflow").css('height','400px');$("#content-slider-1 .rsOverflow").css('background','#f5f5f5');$("#content-slider-1 .rsSlide").css('height','400px');$("#content-slider-1 .rsSlide").css('background','#f5f5f5');}}
function sub_contact(){arr_cat=new Array();arr_tour=new Array();des_vn=new Array();des_cam=new Array();des_lao=new Array();i=0;j=0;vn=0;cam=0;lao=0;$('.checkbox_cat:checked').each(function(){arr_cat[i]=$(this).val();i++;});$('.checkbox_tour:checked').each(function(){if(j>0){arr_tour=arr_tour+","+$(this).val();}else{arr_tour=$(this).val();}
j++;});destination=document.getElementById('other_destination').value;arr_cat=arr_cat+","+destination;interests=document.getElementById('other_interests').value;arr_tour=arr_tour+","+interests;quest=document.getElementById('info_contact').value;name=document.getElementById('name_contact').value;email=document.getElementById('email_contact').value;phone=document.getElementById('phone_contact').value;text_name=document.getElementById('text_name').value;country=document.getElementById('country').value;adults=document.getElementById('adults').value;childrens=document.getElementById('childrens').value;date=document.getElementById('datepicker').value;tour_sel=document.getElementById('tour_sel').value;option=$("input[type='radio']:checked").val();adult="";children="";infant="";questext="Any notes or special requests?";if(name==""||name=="Full Name *"){$('#name_contact').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>name</b>.Thanks!</font>");return;}else{$('#name_contact').css("border","2px solid #C8C9C0");}
if(email==""||email=="Email Address *"){$('#email_contact').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>email</b>.Thanks!</font>");return;}else{var filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;if(!filter.test($("#email_contact").val())){$("#email_contact").css("border","1px solid red");return;}else{$('#email_contact').css("border","2px solid #C8C9C0");}}
if(country==0){$('#country').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>country</b>.Thanks!</font>");return;}else{$('#country').css("border","2px solid #C8C9C0");}
if($('#adults').is(":visible")){if(adults==1000){$('#adults').css("border","1px solid red");return;}else{$('#adults').css("border","2px solid #C8C9C0");}}
if(text_name==""||text_name=="Enter # Your Trip Length"){$("#text_name").css("border","1px solid red");$("#quickconmesq").html("<font style='color:red;font-size:12px;float:right; margin-top:13px;'>Please type your <b>Enter # Your Trip Length</b>.Thanks!</font>");return;}else{$("#text_name").css("border","2px solid #C8C9C0");}
if(date==""||date==questext){$('#datepicker').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>date</b>.Thanks!</font>");return;}else{$('#datepicker').css("border","2px solid #C8C9C0");}
$("#step-form").html("<div id='images-load' style='height: 345px;'><img style='display: table;margin: 0 auto;margin-top: 150px;' src='"+SITE_URL_IMG+"ajax-request.gif' /></div>");$('.bt-finish').hide();$('.bt-prev').hide();$("#quickconmesq").html(" ");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=sub_step&name="+name+"&email="+email+"&info="+quest+"&text_name="+text_name+"&country="+country+"&adult="+adults+"&children="+childrens+"&date="+date+"&tour_sel="+tour_sel+"&phone="+phone+"&type_group="+option+"&arr_cat="+arr_cat+"&arr_tour="+arr_tour,success:function(xml){var arr_html=xml.split('|');if(arr_html[1]=="ok"){window.location = SITE_URL+'/success.html';/*$("#step-form").html(arr_html[0]);*/}else{$("#quickconmesq").html(arr_html[0]);}},error:function(){}});}
function available(date){dmy=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();if($.inArray(dmy,avaidate)!=-1){return[true,"","Available"];}else{return[false,"","unAvailable"];}}
function show_depar(){$('#table-depart').toggle();}
function select_departure(data){$('#table-depart td a').removeClass('current');$('#datepicker').val(data);$('#table-depart').toggle();gobooking();}
function change_select_iti(id){$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=get_dep&id="+id,success:function(xml){$("#re_depart_sel").html(xml);},error:function(){}});gobooking();}
function check_booking(id){var d=document.form_booking.depart_date.value;if(document.form_booking.youriti.value=="0"){show_mess_check_detail("<b style='color:#9f093f'>Please choose your itinerary. Thanks!</b>");$(".box-youriti").css("border","1px solid #ff6600");return;}else{$(".box-youriti").css("border","1px solid #ddd");}
if(d=="mm/dd/yyyy"||d==""){show_mess_check_detail("<b style='color:#9f093f'>Please choose your departure date. Thanks!</b>");$("#re_depart_sel #input-sl").css("border","1px solid #ff6600");return;}else{$("#re_depart_sel #input-sl").css("border","1px solid #ddd");}
if(document.form_booking.nocabin_check.value=="0"){show_mess_check_detail("<b style='color:#9f093f'>Please Select cabin. Thanks!</b>");$(".box-cabin").css("border","1px solid #ff6600");return;}else{$(".box-cabin").css("border","1px solid #ddd");}
gobooking();}
function ajax_booking(id,select_cabin){var cabin=1;var d=document.form_booking.depart_date.value;var iti=document.form_booking.youriti.value;$("#load_form").show();$("#loading-popup").show();$.ajax({type:"GET",url:SITE_URL+"/ajax-popup-booking.php?date="+d+"&iti="+iti+"&id="+id+"&cabin="+cabin+"&select_cabin="+select_cabin,success:function(xml){$("#info_popup").html(xml);$('html,body').animate({scrollTop:$("#popup_booking").offset().top},'slow');$("#loading-popup").hide();},error:function(){}});$("#load_form").hide();}
function gobooking(){var cabin=document.form_booking.nocabin_check.value;var d=$("#datepicker").val();if(document.form_booking.youriti.value=="0"){show_mess_check_detail("<b style='color:#9f093f'>Please choose your itinerary. Thanks!</b>");$(".box-youriti").css("border","1px solid #ff6600");return;}else{$(".box-youriti").css("border","1px solid #ddd");}
if(d=="mm/dd/yyyy"||d==""){show_mess_check_detail("<b style='color:#9f093f'>Please choose your departure date. Thanks!</b>");$("#re_depart_sel #input-sl").css("border","1px solid #ff6600");return;}else{$("#re_depart_sel #input-sl").css("border","1px solid #ddd");}
if(document.form_booking.nocabin_check.value=="0"){show_mess_check_detail("<b style='color:#9f093f'>Please Select cabin. Thanks!</b>");$(".box-cabin").css("border","1px solid #ff6600");return;}else{$(".box-cabin").css("border","1px solid #ddd");}
if(cabin<=0){$("#btn1").show();$("#btn2").hide();return;}else{$("#btn1").hide();$("#btn2").show();show_mess_check_detail("We will send you the best offers quickly.");}}
function show_mess_check(mes){$("#box_mess_check").show();$("#box_mess_check").html(mes);}
function show_mess_check_detail(mes){$(".box_mess_check_detail").show();$(".box_mess_check_detail").html(mes);}
function select_iti(id){$("#ui-datepicker-div").html('');$.ajax({type:"GET",url:SITE_URL+"/ajax-booking.php?mod=depart&id="+id,success:function(xml){$("#re_departure").html(xml);document.form_booking.nocabin.value=1;show_guest_cabin(1);},error:function(){}});}
function show_guest_cabin(cabin){$("#load_book").show();$.ajax({type:"GET",url:SITE_URL+"/ajax-booking.php?mod=cabin&cabin="+cabin,success:function(xml){$("#cabin_no_guest").html(xml);$("#load_book").hide();},error:function(){}});}
function submit_booking_cruise(){var num_cabin=document.getElementById('sel_cabin').value;$('#loading-submit').show();$('#loading-submit').hide(1000);for(var nc=1;nc<=num_cabin;nc++){var adult=0;var child=0;var infant=0;var typecab=0;var totalnum=0;adult=document.getElementById('adult'+nc).value;child=document.getElementById('child'+nc).value;infant=document.getElementById('infant'+nc).value;totalnum=Number(adult)+Number(child)+Number(infant);if(totalnum>3){show_mess_check('<font style="color:#9f093f; font-size:12px;font-weight:bold;">Please note that each cabin/suite can accommodate a maximum of 03 persons.</font>');$('html,body').animate({scrollTop:$("#info_popup").offset().top},'slow');return;}
if(Number(adult)==0&&Number(child)==0){show_mess_check('<font style="color:#9f093f; font-size:12px;font-weight:bold;">Please fill in number of persons in each cabin.</font>');$('html,body').animate({scrollTop:$("#info_popup").offset().top},'slow');return;}
if(totalnum<1){show_mess_check('<font style="color:#9f093f; font-size:12px;font-weight:bold;">Please fill in number of persons in each cabin.</font>');$('html,body').animate({scrollTop:$("#info_popup").offset().top},'slow');return;}
if(num_cabin<1){show_mess_check('<font style="color:#9f093f; font-size:12px;font-weight:bold;">No cabin available for this date. Please kindly choose another date. Thanks!');$('html,body').animate({scrollTop:$("#info_popup").offset().top},'slow');return;}}
show_mess_check('<b> * </b> Required Information');var err1=check_date("departure_date");var err2=check_email("email");var err3=check_empty("fullname");var err4=check_empty("phone");$('#processing').show();if(err1!=false&&err2!=false&&err3!=false&&err4!=false){document.form_booking.submit();}else{$("#fullname").focus();$("#processing").fadeOut(500);}}
function submit_charter_cruise(){var noguest=document.form_booking.noguest.value;var adult=document.form_booking.adult.value;var child=document.form_booking.child.value;var infant=document.form_booking.infant.value;if(Number(adult)+Number(child)!=Number(noguest)){if(Number(adult)+Number(child)+Number(infant)>Number(noguest)){show_mess_check('<font style="color:#FF3300; font-size:12px;">Total of adults, children are out of range or not equal with Total of guests...</font>');return;}
if(Number(adult)+Number(child)+Number(infant)==0){show_mess_check('<font style="color:#FF3300; font-size:12px;">Please fill in number of Adult, Child and Infants...</font>');return;}}
show_mess_check('<b> * </b> Required Information');var err1=check_date("departure_date");var err2=check_empty("fullname");var err3=check_email("email");var err4=check_empty("phone");$('#processing').show();if(err1!=false&&err2!=false&&err3!=false&&err4!=false){document.form_booking.submit();}else{$("#fullname").focus();$("#processing").fadeOut(500);}}
function show_overview(){$("#markers").css("height","100%");$(".text_overview_show").hide();$(".text_overview_hide").show();}
function hide_overview(){$("#markers").css("height","");$(".text_overview_show").show();$(".text_overview_hide").hide();}
function show_review(i){$("#more-review").css("height","100%");$('.text_review_show_'+i).hide();$('.text_review_hide_'+i).show();}
function hide_review(i){$("#more-review").css("height","");$('.text_review_show_'+i).show();$('.text_review_hide_'+i).hide();}
function next_slide(id,data){$("#slider_"+id).html('<img src="'+data+'">');}
function show_dest(){$("#select_dest").toggle();}
function get_dest(id,data){$('#select_dest ul li a').removeClass('current');$('#check_dest_'+id).addClass('current');$('#cruisein').val(id);$('#text_cruisein').val(data);$("#select_dest").hide();}
function show_cat(){$("#select_cat").toggle();}
function get_cat(id,data){$('#select_cat ul li a').removeClass('current');$('#check_cat_'+id).addClass('current');$('#levelc').val(id);$('#text_levelc').val(data);$("#select_cat").hide();}
function show_dura(){$("#select_dura").toggle();}
function get_dura(id){$('#select_dura ul li a').removeClass('current');$('#check_dura_'+id).addClass('current');if(id>0){$('#text_duration').val(id+" Days");}else{$('#text_duration').val("Duration");}
$('#duration').val(id);$("#select_dura").hide();}
function hide_select(div){$("#"+div).hide();}
function select_month(data,div){$("#month_picker").val(data);$("#sub-menu-calendar ul li a").children("span").removeClass('d3');$("#sub-menu-calendar ul li a").children("span").addClass('d2');$("#"+div).children("span").removeClass('d2');$("#"+div).children("span").addClass('d3');}
function search_cruises(){var sear=Number(document.form_sear.cruisein.value+document.form_sear.duration.value);var date=document.form_sear.departure.value;if(sear==0&&date=="Select departure date"){alert("Please select which you are searching... Thanks!");return;}else{$("#updating").show();document.form_sear.submit();}}
var show_cab_0=false;var show_cab_1=false;var show_cab_2=false;var show_cab_3=false;var show_cab_4=false;var check_show_cab=5;function cab_detail_0(st,id){$(".sub-info-cabin").hide();if(check_show_cab==st){check_show_cab=5;return;}else{if(show_cab_0==false){$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cab_detail&st="+st+"&id="+id,success:function(xml){$("#sub_info_cabin_"+st).html(xml);$("#sub_info_cabin_"+st).show();show_cab_0=true;check_show_cab=st;$("#loading").hide();$('#loading-cab').hide();},error:function(){}});}else{$("#sub_info_cabin_"+st).show();check_show_cab=st;}}}
function cab_detail_1(st,id){$(".sub-info-cabin").hide();if(check_show_cab==st){check_show_cab=5;return;}else{if(show_cab_1==false){$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cab_detail&st="+st+"&id="+id,success:function(xml){$("#sub_info_cabin_"+st).html(xml);$("#sub_info_cabin_"+st).show();show_cab_1=true;check_show_cab=st;$("#loading").hide();$('#loading-cab').hide();},error:function(){}});}else{$("#sub_info_cabin_"+st).show();check_show_cab=st;}}}
function cab_detail_2(st,id){$(".sub-info-cabin").hide();if(check_show_cab==st){check_show_cab=5;return;}else{if(show_cab_2==false){$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cab_detail&st="+st+"&id="+id,success:function(xml){$("#sub_info_cabin_"+st).html(xml);$("#sub_info_cabin_"+st).show();show_cab_2=true;check_show_cab=st;$("#loading").hide();$('#loading-cab').hide();},error:function(){}});}else{$("#sub_info_cabin_"+st).show();check_show_cab=st;}}}
function cab_detail_3(st,id){$(".sub-info-cabin").hide();if(check_show_cab==st){check_show_cab=5;return;}else{if(show_cab_3==false){$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cab_detail&st="+st+"&id="+id,success:function(xml){$("#sub_info_cabin_"+st).html(xml);$("#sub_info_cabin_"+st).show();show_cab_3=true;check_show_cab=st;$("#loading").hide();$('#loading-cab').hide();},error:function(){}});}else{$("#sub_info_cabin_"+st).show();check_show_cab=st;}}}
function cab_detail_4(st,id){$(".sub-info-cabin").hide();if(check_show_cab==st){check_show_cab=5;return;}else{if(show_cab_4==false){$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cab_detail&st="+st+"&id="+id,success:function(xml){$("#sub_info_cabin_"+st).html(xml);$("#sub_info_cabin_"+st).show();show_cab_4=true;check_show_cab=st;$("#loading").hide();$('#loading-cab').hide();},error:function(){}});}else{$("#sub_info_cabin_"+st).show();check_show_cab=st;}}}
function close_cab_detail(){$(".sub-info-cabin").hide();}
function select_departure(data){$('#table-depart td a').removeClass('current');$('#depart_date').val(data);}
function check_iti(){if($("#text_youriti").val()==0){$("#text_youriti").addClass("err");$("#sub-menu-calendar").html('');return;}else{$('#loading-depar').show();$('#loading-depar').hide('slow');}}
function get_iti(id){if($('#text_youriti').length){$("#depart_date").val('Departure Date');}
$('#text_youriti').removeClass("err");$("#sub-menu-calendar").html('');if(id>0){$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=get_dep&id="+id,success:function(xml){$("#sub-menu-calendar").html(xml);},error:function(){}});}}
function check_rate(nocabin){if($("#depart_date").val()=='Departure Date'){$("#depart_date").addClass("err");return;}else{$("#depart_date").removeClass("err");$("html,body").animate({scrollTop:$("#box-title-cabin").position().top},700);}
id=$("#text_youriti").val();date=$("#depart_date").val();$('#loading-cab').show();$.ajax({type:"GET",url:SITE_URL+"/ajax-booking.php?mod=check_rate&id="+id+"&date="+date+"&nocabin="+nocabin+"&i="+1,success:function(xml){$("#left-table").html(xml);},error:function(){}});$.ajax({type:"GET",url:SITE_URL+"/ajax-booking.php?mod=check_rate&id="+id+"&date="+date+"&nocabin="+nocabin+"&i="+2,success:function(xml){$("#right-table").html(xml);$('#loading-cab').hide();},error:function(){}});}
var check_show_secret=5;function show_secret(id){$(".promo_detail").hide();if(check_show_secret!=id){$(".secret_"+id).show();$(".show_secret").show();check_show_secret=id;}else{check_show_secret=5;}}
function show_tap_iti(id,mod){if(mod!='iti'){$("#loading").show();}
$("#left-allitinerary ul li").removeClass('current');$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=iti_detail&id="+id,success:function(xml){$(".detail-itinerary").html(xml);$("#list_iti_"+id).addClass('current');if(mod!='iti'){goToByScroll('bot-table');$("#loading").hide();}},error:function(){}});}
function open_link(url_trip){ 
    window.open(url_trip, "mywindow","menubar=1,resizable=1,top=50,left=350,width=700,height=600");
}
function love_tour(id){
    var number=parseInt($("#total_like").text());
    if(isNaN(number)==true){
        number=0;
    }
    total=number+1;
    $('#like_pac_home').addClass('active');
    $('#like_pac_home').attr("href",SITE_URL+'/tours/like/');
    var st=total.toString();
    $("#total_like").text(""+st);
    if($("#like_pac_home i.fa-heart-o").length){
        $("#like_pac_home i.fa").removeClass("fa-heart-o");
        $("#like_pac_home i.fa").addClass("fa-heart");
    }
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=love_tour&id="+id,
        success:function(xml){
            //arr_l = xml.split("#");
            $('#love_tour'+id).html(xml);
            $('#love_tour'+id).attr('onclick','').unbind('click');
            $('#love_tour'+id).attr("href",SITE_URL+'/tours/like/');
            /*if($('#tour_sumlove').length){
                $('#tour_sumlove').text("Tours ("+arr_l[1]+")");
            }*/
        }
    });
}
function unlove_tour(id){
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=unlove_tour&id="+id,
        success:function(xml){
            $(".list_love"+id).html(xml);
            $(".list_love"+id).hide(1000);
        }
    });
}
function more_text_40(text,more,less)
{
    $('.'+more).hide();
    $('.'+less).show();
    $('.'+text).css("height","auto");
    $('.'+text).css("overflow","inherit");
}
function hide_text_40(text,more,less)
{
    $('.'+less).hide();
    $('.'+more).show();
    $('.'+text).css("height","40px");
    $('.'+text).css("overflow","hidden");
}
function faqlike(id,session){ 
    if(session!=id){
        $.ajax({
            type:"GET",
            url:SITE_URL+"/ajax-tour.php?mod=faqlike&id="+id,
            success:function(xml){
                $("#answer-info"+id).html(xml);
                $(".faqlike"+id).show();
            }
        });
    }else{
        alert('You have already voted!');return false;
    }
}
function show_more_top_10(cond,page){
    $("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    cond=cond.replace(/%/g,'*');
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=show_more_top_10&cond="+cond+"&p="+page,
        success:function(xml){
            $("#show"+page).html(xml);
        },
        error:function(){
            
        }
    });
}

function findter_top(name_link){
    $('.findter-top-tour ul li a').removeClass('active');
    $(".findter-ajax-top").html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({
       type: "GET",
       url: SITE_URL+"/ajax-tour.php?mod=findter_top&name_link="+name_link,
       success:function(xml){
           $(".findter-ajax-top").html(xml);   
       },
       error:function(){
        
       } 
    });
}
// thêm
function loading(){
    $('.loading').toggle();
}
function show_more_desti_tours_search(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");cond=cond.replace(/%/g,'*');$.ajax({type:"GET",url:SITE_URL+"/ajax_show_more_desti_tour.php?cond="+cond+"&p="+page+"&type_des=group",success:function(xml){$("#show"+page).html(xml);$("#show"+page+" .tooltip").tooltipster({offsetY:2,theme:"tooltipster-white"});},error:function(){}});}
function ajax_search_tour_day_desti(desti,duration,div) {
    $('.main-group').fadeIn(1000).html('<div style="margin:10px auto;width: 31px;"><img width="70" src="/images/load_vtc.gif" /><div>');
    $('#best-month-tour #filter-tours button').removeClass('active');
    $(div).addClass('active');
    $.ajax({
        type: "GET",
        url: SITE_URL + "/ajax-process.php?mod=ajax_search_tour_day_desti&desti="+desti+"&duration=" + duration,
        success: function(xml) {
            $('.main-group').html(xml);
            $('.main-group .tooltip').tooltipster({
                offsetY: 2,
                theme: 'tooltipster-white',
            });
        }
    });
}

function quickcontq_popup_g(){
    name=document.getElementById('name_request').value;
    mail=document.getElementById('email_request').value;
    ques=document.getElementById('info_request').value;
    //ques=ques.replace(/\n/gi,'<br />');

if(name==""){
    $('#name_request').css("border", "2px solid red");
    return;
}else {
    $('#name_request').css("border", "2px solid #ececec");
}
emai=check_email('email_request');
if(emai==false){
    $('#email_request').css("border", "2px solid red");
    return;
}else {
    $('#email_request').css("border", "2px solid #ececec");
}
if(ques==""){
    $('#info_request').css("border", "2px solid red");
    return;
}else {
    $('#info_request').css("border", "2px solid #ececec");
}
$('#send-request').html("<div style='width: 40px;height: 40px;margin: auto; border-right: 3px solid #59c45a;border-bottom: 3px solid transparent;border-radius: 100%;-webkit-animation: spin .9s linear infinite;-moz-animation: spin .9s linear infinite;-o-animation: spin .9s linear infinite;animation: spin .9s linear infinite;'></div><div style='width:100%;float: left;text-align: center;'><p>Processing...</p></div>");
$.ajax({
    type:"GET",
    url:SITE_URL+"/ajax-process.php?mod=g_popup&name="+name+"&mail="+mail+"&ques="+ques,
    success:function(xml){
        var arr_html=xml.split('|');
        if(arr_html[1]=="ok"){
            /*$('.signin').html(arr_html[0]);*/
            window.location = SITE_URL+'/success.html';
        }else{
            $("#message_popup").html(arr_html[0]);
        }},
        error:function(){
            
        }
});
}