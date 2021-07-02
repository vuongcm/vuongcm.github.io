$(document).ready(function(){
    //vuongcm thêm
	$('.view-more-ex a').on('click',function(){
        if ($(this).parent('.view-more-ex').prev().css('overflow') == 'hidden') {
            $(this).parent('.view-more-ex').prev().css({
                'overflow':'visible',
                'height':'auto'
            });
            $(this).html('... Thu Gọn');
        } else {
            $(this).parent('.view-more-ex').prev().removeAttr('style');
            $(this).html('... Xem Thêm');
        }
    });
    $('.view-more-trip>a').on('click', function(){
        $(this).parent('.view-more-trip').prev('div').toggleClass('hide-trip');
        if ($(this).parent('.view-more-trip').prev('div').attr('class') == 'coutry-trip hide-trip') {
            $(this).parent('.view-more-trip').removeAttr('style');
            $(this).html('Click Để Xem Thêm... &#8631;');
        } else {
            $(this).parent('.view-more-trip').css('box-shadow','none');
            $(this).html('Ẩn Nội dung &#8630;');
        }


    });

    $('#open-myPopUp').click();
	//Map
	var id_ct_map_desti  = $("#map_desti").val();
    if (id_ct_map_desti!=undefined) {
        setTimeout(function(){
            $.ajax({
                type: "GET",
                url:SITE_URL+"/ajax-map-desti.php?mod=map&id="+id_ct_map_desti,
                success: function(xml){
                    $("#map-desti").html(xml);
                },
                error: function() {}
            });
        },2000);
    }
    // slick slide
    for (let c=0; c<=10; c++) {
        $(`.image-galery-${c}, .wrap-galery .total_photo`).on('click',function(){
            $('.wrap-slick').css({
                'z-index':'10',
                'visibility':'visible'
            });
            $(`.synch-carousels`).css({
                'z-index':'11',
                'visibility':'visible'
            });

            if($("#grouptoastr").val()>0){
                var cc = c-1;
            }else{
                var cc = c;
            }
            //let $left = $(".left-slick");
            //$(`.wrap-slick .gallery`).attr('class',`gallery play-${c}1`);
            //$(`.wrap-slick .gallery2`).attr('class',`gallery2 play-${c}2`);
            let $gl = $(`.gallery`);
            let $gl2 = $(`.gallery2`);
            $gl.slick({
				lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                initialSlide: cc,//c-1
                useTransform: false,
                prevArrow: ".arrow-left",
                nextArrow: ".arrow-right",
                asNavFor: '.gallery2'
            });

            $gl2.slick({
				lazyLoad: 'ondemand',
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.gallery',
                dots: false,
                initialSlide: cc,//c-1
                arrows: false,
                centerMode: true,
                focusOnSelect: true
            });
            //$(`.gallery`).slick("slickGoTo", 6);

            $(".gallery .item").on("click", function() {
              const index = $(this).attr("data-slick-index");
              $gl2.slick("slickGoTo", index);
            });
        });
    }

    $('.wrap-slick').click(function (e) {
        if (!$(".wrap-slick .left-slick,.wrap-slick .right-slick").is(e.target) && $(".wrap-slick .left-slick,.wrap-slick .right-slick").has(e.target).length === 0) {
            $('.wrap-slick').css({
                'z-index':'-1',
                'visibility':'hidden'
            });
            $(`.synch-carousels`).css({
                'z-index':'-1',
                'visibility':'hidden'
            });
        }
    });

    if ($(".slick-content .slick-scroll").length > 0) {
        $(".slick-content .slick-scroll").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            variableWidth: true,
            useTransform: false,
            swipeToSlide: true,
            touchMove: true,
            prevArrow: ".slick-content .left",
            nextArrow: ".slick-content .right"
        });
        $(".slick-content .slick-scroll .item>a").on('click',function(){
            $(this).closest('.slick-scroll').find('.item').removeClass('pa-active');
            $(this).parent('.item').addClass('pa-active');
        });
    }
    //khách đoàn
    let bodyWidth = $('body').width();
    let tendency = $(".owl-tendency").length;
    if (tendency > 0 && bodyWidth < 480) {
        $('body').attr('style',`--bodyWidth:${bodyWidth}px`);
        $(".owl-tendency.carousel-mobile").each(function(){
            $(this).css('width',`calc(var(--bodyWidth) * 0.75 * ${$(this).find('.item').length})`);
        });
    }

    //==========end-vuongcm
    if($("#off-toastr").length){

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "positionClass": "toast-bottom-right",
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "15000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "slideDown",
          "hideMethod": "slideUp",
          "tapToDismiss": false
        }

        var check_toop = false;
        var check_toopp = false;
        jQuery(window).scroll(function(){
            var toop = $(this).scrollTop();

            /*if($('#detailtoastr').length){
                if(toop>=300 && check_toopp==false){
                    check_toopp = true;
                    var code_off = $('#detailtoastr').val();
                    var code_arr = code_off.split("|");
                    toastr.success("","CONGRATULATIONS! <br> <span style='font-size:11px;font-weight:normal'>You are rewarded with this promo code:</span><br>"+code_arr[0]+"<br><span style='font-size:11px;font-weight:normal'>Saving up to $<span style='font-size:14px;'>"+code_arr[1]+" </span> - Don't miss out...</span>");
                }
            }*/

            if($('#grouptoastr').length){
                if(toop>=300 && check_toop==false){
                    check_toop = true;
                    var so_t = $('#grouptoastr').val();
                    toastr.info("",so_t+" người khác cũng đang xem!");
                }
            }

        });
    }

    if($('.galpop-multiple').length>0){$('.galpop-multiple').galpop();}
    if($('#view_full_itinerary_tdetail').length>0){
        $('#view_full_itinerary_tdetail').click(function(){
           $('.tabs-head li#sect2 a').trigger('click');
           $('html,body').animate({scrollTop:$(".tabs-head.nav-tabs-one").offset().top - 125},'slow');
        });
    }

    if($('#show_review_detail .noreview > a').length){
        $('#show_review_detail .noreview > a').click(function(){
           $('#review-detail ul li.tab-4 > a').trigger('click');
        });
    }

    if($('.supplier_view_map').length){
        $('.supplier_view_map').click(function(){
            $('html,body').animate({scrollTop:$(".review-detail").offset().top - 125},'slow');
            $('.tab-7 a').trigger("click");
        });
    }

    if($('.total_photo').length){
        $('.total_photo').click(function(){
          $('a.image_show3').trigger("click");
        });
    }

    if($('#box-info-destination .total_photo').length){
        $('#box-info-destination .total_photo').click(function(){
            $('a.image_destination1').trigger("click");
        });
    }

    if($('#day-tour #activities td.red a').length>0){
        $('#day-tour #activities td.red a').click(function(){
            $('.tabs-head li#sect2 a').trigger('click');
            $('html,body').animate({scrollTop:$(".tabs-head.nav-tabs-one").offset().top - 125},'slow');
        });
    }

    if($('.sub-slider').length){
        var number = $('.sub-slider a').height();
        if(screen.width > 1199){
            $('.sub-slider .mix-grid .mix-slide .thumbnail a > img').css("height","148px");
        }else{
            $('.sub-slider .mix-grid .mix-slide .thumbnail a > img').css("height",number+"px");
        }
    }

    var text=$(location).attr('pathname');text=text.split("/");
    if((text[1]=="tours"&&text[2]!="")||(text[1]=="du-thuyen"&&text[2]!="")||(text[1]=="khach-san"&&text[2]!="")){
        width_menu = screen.width;
        check_tour = text[2].split(".");
    }else{
        check_tour = '';
    }

    if((text[1]=="tours"&&check_tour[1]=="html")||(text[1]=="du-thuyen"&&check_tour[1]=="html"&&check_tour[0]!="search")||(text[1]=="khach-san"&&check_tour[1]=="html")){
        jQuery(window).scroll(function(){
            var top = $(this).scrollTop();
            if(top>=650){
                $('.photomap-fix').show();
            }else{
                $('.photomap-fix').hide();
            }

            if(top >= 150){
                $('header#header').hide();
                $('#menu-top-detail').show();
                $('#top-booking-supplier').show();
            }else{
                $('header#header').show();
                $('#menu-top-detail').hide();
                $('#top-booking-supplier').hide();
            }

        });
    }else if(text[1]=="cruise"&&text[3]=="booking.html"){
        jQuery(window).scroll(function(){
            var top = $(this).scrollTop();
            if(top >= 150 && top < 770 ){
                $('header#header').hide();
                $('#top-booking-supplier').hide();
                $('#menu-top-detail').show();
            }else if(top >= 770){
                $('header#header').hide();
                $('#menu-top-detail').hide();
                $('#top-booking-supplier').show();
            }else{
                $('header#header').show();
                $('#menu-top-detail').hide();
                $('#top-booking-supplier').hide();
            }
        });
    }

    if($('.free_quotetour').length>0){$('.free_quotetour').click(function(){$('html,body').animate({scrollTop:$(".main.main-dt").offset().top},'slow');});}
    if($(".view_map_detail").length>0){$(".view_map_detail").fancybox({'width':'70%','height':'80%','autoScale':false,'type':'iframe',fitToView: false});}

    if($('.cd-sub-close').length){
        $('.cd-sub-close').click(function(){
    		$('.cd-sub-room').hide();
    		textroom();
    	});
    }
	$('#ip-room,.cd-sub-room').click(function(event){
		event.stopPropagation();
	});
    if($("#ip-room").length){
        $("#ip-room").click(function(){
            if($('.cd-sub-room').is(':visible')){
                $(".cd-sub-room").hide();
            }else{
                $(".cd-sub-room").show();
        		$(".cd-sub-duration").hide();
        		$(".cd-sub-room ul li").click(function(){
        			$("#ip-room").val($(this).text());
        			$(".cd-sub-room").hide();
        		});
            }
    	});
    }
	$('body').click(function(){
		$(".cd-sub-room").hide();
	});

    if($('.edit_info').length){
        $('.edit_info').click(function(){
            $('html,body').animate({scrollTop:$(".form-search").offset().top - 120},'slow');
            $("#ip-room").trigger("click");
        });
    }

    if($('.room-one').length){
        $('.room-one').click(function(){
            $('html,body').animate({scrollTop:$(".form-search").offset().top - 120},'slow');
        });
    }

    if($('.room-two').length){
        $('.room-two').click(function(){
            $('html,body').animate({scrollTop:$(".table-room-one").offset().top - 160},'slow');
        });
    }

    if($('.room-summary').length){
        $('.room-summary').click(function(){
            $('html,body').animate({scrollTop:$(".table-room-summary").offset().top - 120},'slow');
        });
    }

    if($('#videolink').length){
        $('#videolink').on('hide.bs.modal', function () {
        	$("iframe#playvideo").attr("src", $("iframe#playvideo").attr("src").replace("autoplay=1", "autoplay=0"));
        });
        $('#videolink').on('show.bs.modal', function () {
        	$("iframe#playvideo").attr("src", $("iframe#playvideo").attr("src").replace("autoplay=0", "autoplay=1"));
        });
    }

    if($('.mix-grid').length){
        page_gallery.init();
    }


    if (navigator.platform == "iPad") return;
    if(jQuery(".lazyload").length){
        jQuery(".lazyload").lazyload({
            effect:"fadeIn",
            placeholder: SITE_URL+"/images/grey.gif"
        });
    }
    /*if(jQuery(".col-md-3 img").length){
        jQuery(".col-md-3 img").lazyload({
            effect:"fadeIn",
            placeholder: SITE_URL+"/images/grey.gif"
        });
    }*/

    if(jQuery(".col-sm-3 img").length){
        jQuery(".col-sm-3 img").lazyload({
            effect:"fadeIn",
            placeholder: SITE_URL+"/images/grey.gif"
        });
    }

    /*if($("#form_booking #phone").length || $("#contact #phone").length){

        $("#phone").intlTelInput({
            preferredCountries: ['us', 'gb','au'],
        });
        $("#phone").intlTelInput("setNumber", "+1");//Phone Number
        var input = document.getElementById('phone');
        input.onclick = input.onkeydown = function(event) {
            if(input.value.length<2 || input.value=='+1'){
                  input.value='+';
            }
            var key = event.keyCode || event.charCode;
            if( key == 8){
                if(input.value.length<2 || input.value=='+1'){
                   input.value='++';
                }
            }else if(key == 46 ){
                if(input.value.length<2 || input.value=='+1'){
                   input.value='+';
                }
            }
        };
    }*/


    if(text[1]=="tai-sao-chon-chung-toi.html"){
        $( "#why_book_link" ).trigger( "click" );
    }else if(text[1]=="chinh-sach-gia-tot.html"){
        $( "#price_guarantee" ).trigger( "click" );
    }else if(text[1]=="dieu-khoan-va-dieu-kien.html"){
        $( "#term_and_condition" ).trigger( "click" );
    }else if(text[1]=="hinh-thuc-thanh-toan.html"){
        $( "#payment_guideline" ).trigger( "click" );
    }else if(text[1]=="chinh-sach-hoan-huy.html"){
        $( "#condition_porice" ).trigger( "click" );
    }else if (text[1] == "chinh-sach-rieng-tu.html") {
        $("#privacy_policy").trigger("click");
    }

    if($('.why-book .fa-star-o').length){
        $('.why-book .fa-star-o').click(function(){
           $('.why-book .international-tour').trigger("click");
        });
    }
    if($('.why-book .fa-check-square-o').length){
        $('.why-book .fa-check-square-o').click(function(){
           $('.why-book .pata-member').trigger("click");
        });
    }
    if($('.why-book .fa-tripadvisor').length){
        $('.why-book .fa-tripadvisor').click(function(){
           $('.why-book .certificate-excellence').trigger("click");
        });
    }
    if($('.why-book .fa-money').length){
        $('.why-book .fa-money').click(function(){
           $('.why-book .guaratee-policy').trigger("click");
        });
    }
    if($('.why-book .fa-heart-o').length){
        $('.why-book .fa-heart-o').click(function(){
           $('.why-book .best-support').trigger("click");
        });
    }
});
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
function more_text_84(text,more,less)
{
    $('.'+more).hide();
    $('.'+less).show();
    $('.'+text).css("height","auto");
    $('.'+text).css("overflow","inherit");
}
function hide_text_84(text,more,less)
{
    $('.'+less).hide();
    $('.'+more).show();
    $('.'+text).css("height","84px");
    $('.'+text).css("overflow","hidden");
}
function view_full_iti(){
    $('#full-tour-iti').trigger('click');
}
function more_text_good(text,more,less)
{
    var t=$('#'+text).height();

    if(t<140){
        $('.'+more).hide();
    }else{
        $('.'+less).show();
        $('.'+more).hide();
        $('#'+text).css("height","auto");
        $('#'+text).css("overflow","inherit");
    }
}
function hide_text_good(text,more,less)
{
    $('.'+less).hide();
    $('.'+more).show();
    $('#'+text).css("height","140px");
    $('#'+text).css("overflow","hidden");
}
function more_text_promo(text,more,less)
{

    $('.'+less).show();
    $('.'+more).hide();
    $('.'+text).css("height","auto");
    $('.'+text).css("overflow","inherit");

}
function hide_text_promo(text,more,less)
{
    $('.'+less).hide();
    $('.'+more).show();
    $('.'+text).css("height","52px");
    $('.'+text).css("overflow","hidden");
}
function show_full_tour_iti()
{
    if($('.tour-itinerary').is(':visible')){
        $('.tour-itinerary').hide();
        $('.plus-fa').show();
        $('.minus-fa').hide();

    }else{
        $('.tour-itinerary').show();
        $('.plus-fa').hide();
        $('.minus-fa').show();
    }
}
function show_full_in_ex()
{
    if($('#include-exclude').is(':visible')){
        $('#include-exclude').hide();
        $('.plus-fa-ie').show();
        $('.minus-fa-ie').hide();

    }else{
        $('#include-exclude').show();
        $('.plus-fa-ie').hide();
        $('.minus-fa-ie').show();
    }
}
function show_tab_day(tab)
{
    $("#"+tab).trigger( "click" );
    //$("html,body").animate({scrollTop: $("#"+tab).position().top}, 700);

}
function hide_price(){
    $("#show_info_cabin").html('');
    $(".show_cabin").hide();
}
/* Depart Itinerary */
function get_iti(id){
    if($('#text_youriti').length){//check detail & book
        $("#depart_date").val('Departure Date');
    }
    $('#text_youriti').removeClass("err");
    $("#sub-menu-calendar").html('');
    if(id>0){
        $.ajax({
            type: "GET",
            url: SITE_URL + "/ajax-suplier.php?mod=get_dep&id=" + id,
            success: function (xml) {
                $("#sub-menu-calendar").html(xml);
            },
            error: function () {}
        });
    }
}
function check_iti() {
    if ($("#text_youriti").val()==0){
        //$("#text_youriti").addClass("err");
        $(".div_package").addClass("err");
        $("#sub-menu-calendar").html('');
        return;
    }else{
      $(".div_package").removeClass("err");
      $('#sub-menu-calendar').toggle();
      $('#loading-depar').show();
      $('#loading-depar').hide('slow');

    }
}
function select_departure(data){
    $('#table-depart td a').removeClass('current');
    $('#check_in').val(data);
    $('#sub-menu-calendar').toggle();
}
/* End Depart Itinerary */

function show_tab_iti_ajax(id, c_id, c_link, i_link, num_iti, chon) {
    for (var t = 0; t < num_iti; t++) {
        if (t == chon) {
            $('#iti_' + t).addClass('active');
            $('.itinerary_' + t).addClass('active');
        } else {
            $('#iti_' + t).removeClass('active');
            $('.itinerary_' + t).removeClass('active');
        }
    }

    if($("#con_re_iti_"+chon).is(":visible")){
        $('.suplier-title').removeClass("curent");
        $('.suplier-title'+id+" > a span.fa").removeClass('fa-minus');
        $('.suplier-title'+id+" > a span.fa").addClass('fa-plus');
        $("#con_re_iti_"+chon).hide();
    }else{
        $('.suplier-title').removeClass("curent");
        $('.suplier-title'+id).addClass("curent");
        $('.suplier-title'+id+" > a span.fa").removeClass('fa-plus');
        $('.suplier-title'+id+" > a span.fa").addClass('fa-minus');
        $("#con_re_iti_"+chon).show();
        $("#con_re_iti_"+chon+" .tab-content").children().removeAttr("style");
        $("#con_re_iti_"+chon).html("<img width='70' class='loading-ajax' src='"+SITE_URL+"/images/load_vtc.gif' />");
        $.ajax({
           type: "GET",
           url: SITE_URL + "/ajax-suplier.php?mod=showiti&c_link=" + c_link + "&c_id=" + c_id + "&i_link=" + i_link + "&chon=" + chon,
           success: function (xml) {
               $("#con_re_iti_"+chon).html(xml);
           },
           error: function () {}
        });
    }
}
function submit_sort(){document.form_sort.submit();}
function submit_filter(){document.form_filter.submit();}
function check_empty(obj){$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if($("#"+obj).val()==""){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_date(obj){$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if($("#"+obj).val()==""){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_email(obj){var filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if(!filter.test($("#"+obj).val())){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function check_email2(obj){var filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;$("#"+obj).css("border","1px solid #D1D1D1");$("#err_"+obj).hide();if(!filter.test($("#"+obj).val())){$("#err_"+obj).show();return false;}}
function check_flexible(obj){$("#"+obj).css("border","1px solid #e3e2de");$("#err_"+obj).hide();if($("#"+obj).val()==""){$("#"+obj).css("border","1px solid #FF6600");$("#err_"+obj).show();return false;}}
function submit_booking(){if(document.getElementById("flexible").checked==true){var err1=check_flexible("dateinput");}else{var err1=check_date("datepicker");}
var err2=check_empty("phone");var err3=check_email("email");var err4=check_empty("name");if(err1!=false&&err2!=false&&err3!=false&&err4!=false){$('#submit_book').hide();$('#processing_tour').show();document.form_booking.submit();}else{$('html,body').animate({scrollTop:$(".payment-form").offset().top},'slow');}}
function show_special_offer(){if($('#offer-tour-new').is(':visible')){$('#offer-tour-new').hide();  }else{$('#offer-tour-new').show(); }}
function close_special_offer(){$('.speaaaa').hide();}
function submit_booking_hore(){var err1=check_date("check_in");var err3=check_email("email");var err4=check_empty("fullname");var err5=check_date("check_out");var err6=true;$("#err_room").hide();if($("#single").val()==0&&$("#double").val()==0&&$("#twin").val()==0){err6=false;$("#err_room").show();}
if(err1!=false&&err3!=false&&err4!=false&&err5!=false&&err6!=false){document.form_booking.submit();}else{$("#fullname").focus();}}
function submit_confirm(){document.form_confirm.submit();}
function display_error(obj){$("#"+obj).css("border","1px solid #FF6600");}
function search_go(url){var cate=document.form_search_t.cate.value;var length_tour=document.form_search_t.tourday.value;var arr_dest=document.form_search_t.tags_tour.value
var keyword=document.form_search_t.keyword_search.value;if(cate==0&&length_tour==0&&arr_dest==0&&keyword==""){alert("Please choose which you are searching for...Thanks!");return;}
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
function show_day(d,tday){$('#activities').hide();$('#con_iti_d').show();document.getElementById('a_full_day').className='first';for(var i=0;i<tday;i++){if(i==d){$('#div_day_'+d).show();document.getElementById('aday_'+d).className='current';}else{$('#div_day_'+i).hide();document.getElementById('aday_'+i).className='';}}}
function show_map_detail_t(){if($('#tab_map').is(':visible')){$('#tab_map').hide();$('#view_dest').html('View map');$('#t_map').removeClass('active');}else{$('#tab_map').show();if(map_show==false){initialize();map_show=true;}
$('#view_dest').html("Close map");$('#t_map').addClass('active');}}
function show_full_iti(){$('.title_days').removeClass('collapsed');$('.detail_days').addClass('in');}
function show_hide_iti(){$('.title_days').addClass('collapsed');$('.detail_days').removeClass('in');}
function day_details(){$('#sect1').removeClass('active');$('#sect2').addClass('active');}
function close_map_detail_t(){$('#tab_map').hide();}
function close_map_detail_h(){$('#tab_map').hide();}
var map_show_hotel=false;function show_map_hotel(){if($('#tab_map').is(':visible')){$('#tab_map').hide();}else{$('#tab_map').show();}
if(map_show_hotel==false){load();map_show_hotel=true;}}

function createMarker(map,latlng,name,url,img,desc,icon){ var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL+"/images/gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='"+url+"' target='_blank' title='"+name+"' style='text-decoration:none;color:#25ab4b;'>"+name+"</a></span><br />";myHtml+="<a href='"+url+"' target='_blank' title='"+name+"' style=\"float:left;\"><img style=\"float:left;\" src='"+img+"' border='0' alt='"+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454;float:left;text-align: justify;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarkerdes(map,latlng,name,url,img,desc,icon){
    var markIcon=new GIcon(G_DEFAULT_ICON);
    markIcon.image=SITE_URL_IMG+"gIcon"+icon+".png";
    var marker=new GMarker(latlng,markIcon);
    //GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='"+url+"' target='_blank' title='"+name+"' style='text-decoration:none;color:#008fbb;'>"+name+"</a></span><br />";myHtml+="<a href='"+url+"' target='_blank' title='"+name+"' style=\"float:left;\"><img style=\"float:left;\" src='"+img+"' border='0' alt='"+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454;float:left;text-align: justify;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});
    return marker;}
//function createMarker1(map,latlng,name,url,img,desc,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL+"/images/gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='javascript:;' title='"+name+"' style='text-decoration:none;color:#25ab4b;'>"+name+"</a></span><br />";myHtml+="<p style=\"font-size:11px;color:#545454;float: none;line-height: 16px;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarker1(map,latlng,name,url,img,desc,icon){var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=SITE_URL+"/images/gIcon"+icon+".png";var marker=new GMarker(latlng,markIcon);GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:250px;\">";myHtml+="<span style=\"font-weight:bold;font-size:18px;margin-bottom:3px;float:left;width:93%;\"><a href='javascript:;' title='"+name+"' style='text-decoration:none;color:#008fbb;'>"+name+"</a></span><br />";myHtml+="<a href='javascript:;' title='"+name+"' style=\"float:right;\"><img style=\"float:right;margin-left: 8px;margin-top: 8px;\" src='"+img+"' border='0' alt='"+name+"'/></a>";myHtml+="<p style=\"font-size:11px;color:#545454;float: none;line-height: 16px;\">"+desc+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});return marker;}
function createMarker2(map,latlng,name,url,img,address,grade,price,icon){
    var markIcon=new GIcon(G_DEFAULT_ICON);
    markIcon.image=icon;
    markIcon.iconSize=new GSize(14,24);
    markIcon.shadowSize=new GSize(22,20);
    markIcon.iconAnchor=new GPoint(6,20);
    markIcon.infoWindowAnchor=new GPoint(5,1);
    var marker=new GMarker(latlng,markIcon);
    //GEvent.addListener(marker,"mouseover",function(){var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:240px; margin:2px;\">";myHtml+="<span style=\"font-weight:bold;font-size:14px;color:#333;\">"+name+"</span><br />";myHtml+="<img src='"+img+"' border='0' alt='"+name+"' style=\"float:right;display:inline;margin-top:5px;\" />";myHtml+="<p style=\"font-size:12px;color:#FF6600;width:100%;\"><b style=\"font-size:11px;color:#545454\">Grade : </b>"+grade+" Stars</p>";myHtml+="<p style=\"font-size:12px;color:#545454;width:100%;\"><b style=\"font-size:11px;\">Address</b> : "+address+"</p>";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);});
    return marker;}
function createMarker3(map,latlng,name,url,img,address,grade,price,icon)
{var markIcon=new GIcon(G_DEFAULT_ICON);markIcon.image=icon;markIcon.iconSize=new GSize(14,24);markIcon.shadowSize=new GSize(22,20);markIcon.iconAnchor=new GPoint(6,20);markIcon.infoWindowAnchor=new GPoint(5,1);var marker=new GMarker(latlng,markIcon);var myHtml="<div style=\"float:left;border:1px; width:250px; solid #1484D0; font-size:11px; font-family:tahoma; line-height:18px\">";myHtml+="<div style=\"float:left; width:240px; margin:2px;\">";myHtml+="<span style=\"font-weight:bold;font-size:14px;color:blue\">"+name+"</span><br />";myHtml+="<img src='"+img+"' border='0' alt='"+name+"' style=\"float:right;display:inline;margin-top:5px;\" />";myHtml+="<p style=\"font-size:12px;color:#FF6600\"><b style=\"font-size:11px;color:#545454\">Grade : </b>"+grade+" Stars</p>";myHtml+="<p style=\"font-size:12px;color:#545454\"><b style=\"font-size:11px;\">Address</b> : "+address+"</p>";myHtml+="<p style=\"font-size:12px;color:#C31F41\"><b style=\"font-size:11px;color:#545454\">Price from : </b> $"+price+"</p>";myHtml+="<span style=\"font-size:12px;\"><a href='"+url+"' title='"+name+"' target='_blank'>Book this resort</a></span><br />";myHtml+="</div>";myHtml+="</div>";map.openInfoWindowHtml(latlng,myHtml);return marker;}
function show_date_cusomize(tab)
{$('#date_fixed').hide();$('#date_flexible').hide();switch(tab)
{case 1:$('#date_fixed').show();break;case 2:$('#date_flexible').show();break;}}
function submit_cusomize(){var err1=check_email("email");var err2=check_empty("fullname");var err3=check_empty("phone");if(err1!=false&&err2!=false&&err3!=false){document.form_customize.submit();}else{$("#fullname").focus();}}
function submit_contact(){var err1=check_email("email");var err2=check_empty("name");var err4=check_empty("request");var err5=check_empty("phone");if(err1!=false&&err2!=false&&err4!=false&&err5!=false){$('.id-bottom-book').hide();$('#processing').show();document.form_contact.submit();}}
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
function show_more_tours(page){$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-tours.php?p="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_hotels(page,star,order){$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?&p="+page+"&star="+star+"&order="+order,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_hotels_grid(cat_id,page)
{$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=show_more_hotels_grid&p="+page+"&cat_id="+cat_id,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_tab_hotel(linh,mode,tab){$.ajax({type:"GET",url:SITE_URL+"/ajax-tab_hotel_detail.php?link="+linh+"&mod="+mode,success:function(xml){$("#"+tab).html(xml);},error:function(){}});}
function show_tab_cus(mode){if(mode==1){$('#box_des').hide();$('#box_ideal').hide();$('#p_sim').show();$('#cus_recom').show();$('#a_sim').addClass('current');$('#a_adv').removeClass('current');$('#are_req').css({'height':'200px','width':'420px'});$('#lf1').css({'width':'100px'});$('#lf2').css({'width':'420px'});}else{$('#box_des').show();$('#box_ideal').show();$('#p_sim').hide();$('#cus_recom').hide();$('#a_adv').addClass('current');$('#a_sim').removeClass('current');$('#are_req').css({'height':'100px','width':'400px'});$('#lf1').css({'width':'160px'});$('#lf2').css({'width':'515px'});}}
function show_hotel_tour(star,tab){star=star.replace(/#/g,';');$('.tab').removeClass('ui-tabs-active');$("#"+tab).addClass('ui-tabs-active');$.ajax({type:"GET",url:SITE_URL+"/ajax-hotel-tour.php?star="+star,success:function(xml){$(".tab_content").html(xml);},error:function(){}});}
var tabcal=0;function show_tab_home(cid,tab){tabcal=tabcal+cid;if(tabcal<16){$("#"+tab).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");}
$.ajax({type:"GET",url:SITE_URL+"/ajax-tab_home.php?cid="+cid,success:function(xml){$("#"+tab).html(xml);},error:function(){}});}
function add_letter(){$("#relet").html("<img src='"+SITE_URL_IMG+"loading1.gif' />");email=document.getElementById('email_let').value;if(email==""){$("#relet").html("<font style='color:#FF3300; font-size:12px;'>Xin vui lòng nhập địa chỉ email.</font>");return;}
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
function goToByScroll(id){$('html,body').animate({scrollTop:$("#"+id).offset().top},'slow');}
scrollStep=1;timerLeft="";timerRight="";function scrollDivLeft(id){clearTimeout(timerRight);document.getElementById(id).scrollLeft+=scrollStep;timerRight=setTimeout("scrollDivLeft('"+id+"')",8);}
function scrollDivRight(id){clearTimeout(timerLeft);document.getElementById(id).scrollLeft-=scrollStep;timerLeft=setTimeout("scrollDivRight('"+id+"')",8);}
function toLeft(id){document.getElementById(id).scrollLeft=0}
function toRight(id){document.getElementById(id).scrollLeft=document.getElementById(id).scrollWidth}
function stopMe(){clearTimeout(timerRight);clearTimeout(timerLeft);}
kt=false;function show_day_ajax(params)
{if(kt==false){$("#activities").hide();$(".ajax_intinerary").fadeIn(400).html('Loading....');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=intinerary&params="+params,cache:false,success:function(result){$(".ajax_intinerary").html(result);kt=true;}});}}
function ajax_cabin(id,i,text)
{$("#updating").show();$(".removeactive").removeClass("active");$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=ajax_cabin&id="+id+"&i="+i,cache:false,success:function(result){$(".content-tab").html(result);$("#updating").hide();goToByScroll("markers");}});}
var check_full = true;
var check_icl = true;
var check_acc = true;
var check_exp = true;
function ajax_tour(id,i,check_old)
{
    screenWidth = window.screen.width;
    if(i==2 && $('.full-tour .tour-itinerary').length){
        check_full = false;
    }
    if(i==3 && $('.include-exclude #include-exclude').length){
        check_icl = false;
    }
    if(i==4 && $('.accommodation #tab-accommodation').length){
        check_acc = false;
    }
    if(i==5 && $('.experience #tab-experience').length){
        check_exp = false;
    }
    $('.tab-detail-tour').hide();
    $('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');
    if(i==1){
        $('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');
        $('.'+check_old).show();
    }else{
        if((i==2 && check_full==true) || (i==3 && check_icl==true) || (i==4 && check_acc == true) || (i==5 && check_exp == true)){
            $('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');
            $("."+check_old).show();
            $("."+check_old).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
            $.ajax({
                type:"GET",
                url:SITE_URL+"/ajax-tour.php?mod=ajax_tour&id="+id+"&i="+i+"&screenWidth="+screenWidth,
                cache:false,
                success:function(result){
                    $("."+check_old).html(result);
                }
            });
        }else{
            $('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');
            $('.'+check_old).show();
        }
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
{$(".content-tab").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img src="/images/loader-tab.gif" /><div>');$('#hotel_6').removeClass('active');$('.good_to_know').hide();$('.hol_room').removeClass('active');$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=hotel_room_ajax&i="+i+"&id="+id,cache:false,success:function(result){$(".content-tab").html(result);$(".content-tab").show();}});}
function chackdate(){if(document.getElementById("flexible").checked==true){$('.datepicker-date').hide();$('.input-custom').show();document.getElementById("datepicker").disabled=true;}else{$('.input-custom').hide();$('.datepicker-date').show();document.getElementById("datepicker").disabled=false;}}
function checkoption(id_text,cl_text)
{document.getElementById(""+id_text).checked=true;$(".radio_people").removeClass('active');$("."+cl_text).addClass('active');$('.select-family').hide();$('.select-group').hide();}
function select_box(id_text,act_text,show_text)
{document.getElementById(""+id_text).checked=true;$(".radio_people").removeClass('active');$("."+act_text).addClass('active');$('.select-form').hide();$('.'+show_text).show();}
function search_go_quick(url){var keyword=document.form_quick_sear.keysearch.value;if(keyword=="Enter Search"||keyword==""){alert("Please type something to search. Thanks!");return;}
keyword=keyword.replace(/\//g,'+');keyword=keyword.replace(/\\/g,'+');keyword=keyword.replace(/\"/g,'');keyword=keyword.replace(/\s+/g,'+');keyword=keyword.replace(/\./g,'');document.form_quick_sear.action=url+'/tours/search-0-0-0-'+keyword;document.getElementById('keysearch').disabled=true;document.form_quick_sear.submit();}
function tab_package(i,name_link,tab_active)
{$(".content-tab").fadeIn(400).html('<div style="margin:0 auto;width: 31px;"><img src="/images/loader-tab.gif" /><div>');$('.tab_pack').removeClass('active');$('#'+tab_active).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=tab_package&i="+i+"&name_link="+name_link,cache:false,success:function(result){$(".content-tab").html(result);}});}
function radio_box(text_id)
{$('.radio_box').removeClass('active');$('#'+text_id).addClass('active');}
function radio_box_chi(text_id)
{$('.radio_box_chi').removeClass('active');$('#'+text_id).addClass('active');}
function close_advertise(){$('#advertise').addClass('display-none');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=advertise",success:function(xml){}});}
function close_promo(){$('#promo-code').addClass('display-none');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=promo-code",success:function(xml){}});}
function add_inquiry(){var value_adult=$("input[type='radio'].css-checkbox:checked").val();var value_chi=$("input[type='radio'].css-checkbox-chi:checked").val();var date=$('#datepicker').val();if(date==""||date=="MM/DD/YYYY"){$("#boxmessage").html("<font style='color:#FF3300; font-size:12px;'>Please type your <b>name</b>.Thanks!</font>");return;}}
function special(spa_id,special){$("#show_special_"+spa_id).toggle();$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=special&special="+special+"&spa_id="+spa_id,cache:false,success:function(result){$("#show_special_"+spa_id).html(result);}});}
function dest_tab(i,route,text_id)
{$(".content-tab").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img src="/images/loader-tab.gif" /><div>');$('.dest_tab').removeClass('active');$('#'+text_id).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=dest_tab&i="+i+"&route="+route,cache:false,success:function(result){$('.content-tab').html(result);}});}
function jquery_add_sub(text_show,class_span,text)
{if($("."+text_show).is(":visible")==false){$("#"+class_span).removeClass('nav-cong');$("#"+class_span).addClass('nav-tru');$('.'+text_show).show();}else{$("#"+class_span).removeClass('nav-tru');$("#"+class_span).addClass('nav-cong');$('.'+text_show).hide();}}
function quickcontq_popup(){
	name=document.getElementById('f_name').value;
	if($('#f_mail').val()!=undefined){
		email=$('#f_mail').val();
	}else{
		email = "";
	}
    phone=document.getElementById('f_phone').value;
	ques=document.getElementById('f_question').value;
	ques = encodeURIComponent(ques);
	check_letter=document.getElementById('f_dang_ky').checked;
	//country=document.getElementById('f_country').value;
	if(ques==""||ques=="Nhập yêu cầu..."){
		$('#f_question').css("border", "1px solid red");
		//$("#message").html("<font style='color:red; font-size:12px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Yêu cầu</b>!</font>");
		return;
	}else {
        $('#f_question').css("border", "1px solid #dceaea");
    }
	if(name==""||name=="Tên du khách..."){
		$('#f_name').css("border", "1px solid red");
		//$("#message").html("<font style='color:red; font-size:12px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Tên</b>!</font>");
		return;
	}else {
        $('#f_name').css("border", "1px solid #dceaea");
    }
    if(phone==""||phone=="Số điện thoại..."){
		$('#f_phone').css("border", "1px solid red");
		//$("#message").html("<font style='color:red; font-size:12px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Số Điện Thoại</b>!</font>");
		return;
	}else {
        $('#f_phone').css("border", "1px solid #dceaea");
    }
	if(check_letter==true){
		check_letter = 1;
	}else{
		check_letter = 0;
	}
	/*mail=check_email2('f_mail');
	if(mail==false){
		$("#message").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>email</b>!</font>");
		return;
	}*/
$(".signin").html("<div style='width: 40px;height: 40px;margin: auto; border-right: 3px solid #59c45a;border-bottom: 3px solid transparent;border-radius: 100%;-webkit-animation: spin .9s linear infinite;-moz-animation: spin .9s linear infinite;-o-animation: spin .9s linear infinite;animation: spin .9s linear infinite;'></div><div style='width:100%;float: left;text-align: center;'><p>Vui lòng đợi trong giây lát...</p></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=popup&fullname="+name+"&phone="+phone+"&email="+email+"&ques="+ques+"&check_letter="+check_letter,success:function(xml){var arr_html=xml.split('|');if(arr_html[1]=="ok"){window.location = SITE_URL+'/success.html';/*$(".signin").html(arr_html[0]);*/}else{$("#message").html(arr_html[0]);}},error:function(){}});}
$(document).ready(function(){for(i=0;i<7;i++){$('.login-window'+i).click(function(){var loginBox=$(this).attr('href');$(loginBox).fadeIn(300);var popMargTop=($(loginBox).height()+24)/2;var popMargLeft=($(loginBox).width()+24)/2;$(loginBox).css({'margin-top':-popMargTop,'margin-left':-popMargLeft});$('body').append('<div id="mask"></div>');$('#mask').fadeIn(300);return false;});$('.close').click(function(){$('.login-popup').fadeOut(300,function(){$('#mask').remove();});});}});$(document).ready(function(){var data=false;var hover_data=true;$('.drop_1').hover(function(){if(hover_data){hover_data=false;}
else{hover_data=true;$(".drop_1").removeClass("active");$("#sub-menu").hide();return false;}
if(!data){$(".link").removeClass("active");$(".drop_1").addClass("active");$(".sub-menu").hide();$("#sub-menu").show();data=true;}else{$(".sub-menu").hide();$("#sub-menu").show();$(".drop_1").addClass("active");}});var is_sub=true;$('#sub-menu').hover(function(){if(is_sub){is_sub=false;$(".sub-menu").hide();$("#sub-menu").show();$(".drop_1").addClass('active');}else{is_sub=true;$("#sub-menu").hide();$(".drop_1").removeClass('active');}});var data_2=false;var hover_data_2=true;$('.drop_2').hover(function(){if(hover_data_2){hover_data_2=false;}
else{hover_data_2=true;$(".drop_2").removeClass("active");$("#sub-menu-2").hide();return false;}
if(!data_2){$(".link").removeClass("active");$(".drop_2").addClass("active");$(".sub-menu").hide();$("#sub-menu-2").show();data_2=true;}else{$(".sub-menu").hide();$("#sub-menu-2").show();$(".drop_2").addClass("active");}});var is_sub_2=true;$('#sub-menu-2').hover(function(){if(is_sub_2){is_sub_2=false;$(".sub-menu").hide();$("#sub-menu-2").show();$(".drop_2").addClass('active');}else{is_sub_2=true;$("#sub-menu-2").hide();$(".drop_2").removeClass('active');}});var data_3=false;var hover_data_3=true;$('.drop_3').hover(function(){if(hover_data_3){hover_data_3=false;}
else{hover_data_3=true;$(".drop_3").removeClass("active");$("#sub-menu-3").hide();return false;}
if(!data_3){$(".link").removeClass("active");$(".drop_3").addClass("active");$(".sub-menu").hide();$("#sub-menu-3").fadeIn(400).html('Loading.... ');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=submenu",cache:false,success:function(result){$("#sub-menu-3").html(result);$("#sub-menu-3").show();data_3=true;}});}else{$(".sub-menu").hide();$("#sub-menu-3").show();$(".drop_3").addClass("active");}});var is_sub_3=true;$('#sub-menu-3').hover(function(){if(is_sub_3){is_sub_3=false;$(".sub-menu").hide();$("#sub-menu-3").show();$(".drop_3").addClass('active');}else{is_sub_3=true;$("#sub-menu-3").hide();$(".drop_3").removeClass('active');}});var data_4=false;var hover_data_4=true;$('.drop_4').hover(function(){if(hover_data_4){hover_data_4=false;}
else{hover_data_4=true;$(".drop_4").removeClass("active");$("#sub-menu-4").hide();return false;}
if(!data_4){$(".link").removeClass("active");$(".drop_4").addClass("active");$(".sub-menu").hide();$("#sub-menu-4").show();data_4=true;}else{$(".sub-menu").hide();$("#sub-menu-4").show();$(".drop_3").addClass("active");}});var is_sub_4=true;$('#sub-menu-4').hover(function(){if(is_sub_4){is_sub_4=false;$(".sub-menu").hide();$("#sub-menu-4").show();$(".drop_4").addClass('active');}else{is_sub_4=true;$("#sub-menu-4").hide();$(".drop_4").removeClass('active');}});});function ajaxdocking(i,location,star)
{$('.component-packages').fadeIn(400).html('Loading....');$('.cat_hotel_box a').removeClass('active');$('#star_'+i).addClass('active');p=1;$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?i="+i+"&location="+location+"&star="+star+"&p="+p,cache:false,success:function(result){$('.component-packages').html(result);}});}
function change_cruise(value)
{if(value!=0){$(location).attr('href',value);}else{return false;}}
function show_off_ajax(mod,id,stt){if($("#promo_view_"+stt+"_"+id).is(":visible")!=true&&$("#close_"+stt+"_"+id).is(":visible")!=true){$(".show_promo").hide();$(".icon-m").hide()
$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod="+mod+"&id="+id+"&stt="+stt,success:function(xml){$("#promo_view_"+stt+"_"+id).html(xml);$("#promo_view_"+stt+"_"+id).show();$("#icon-m_"+stt+"_"+id).show();$("#close_"+stt+"_"+id).click(function(){$("#promo_view_"+stt+"_"+id).hide();$(".icon-m").hide();});},error:function(){}});}else{$("#promo_view_"+stt+"_"+id).hide();$(".icon-m").hide();}}
function showfice(i){
    if($('#fice_'+i).is(":visible")){
        $('#text_'+i).removeClass('fa-minus');
        $('#text_'+i).addClass('fa-plus');
        $('#fice_'+i).hide();
    }else{
        $('#text_'+i).removeClass('fa-plus');
        $('#text_'+i).addClass('fa-minus');
        $('#fice_'+i).show();
    }
}
function show_pack(i)
{if($('.pack_'+i).is(":visible")){$('#tag_pack_'+i).removeClass('nav-tru');$('#tag_pack_'+i).addClass('nav-cong');$('.pack_'+i).hide();}else{$('#tag_pack_'+i).removeClass('nav-cong');$('#tag_pack_'+i).addClass('nav-tru');$('.pack_'+i).show();}}
function pack_offer(i,id){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=pack_offer&id="+id+"&i="+i,success:function(xml){$('#pack_offer_'+i+'_'+id).html(xml);$('#pack_offer_'+i+'_'+id).show();$('#close_offer_'+i+'_'+id).click(function(){$('#pack_offer_'+i+'_'+id).hide();});}});}
function month_ajax(i,text,check_tag){$('.destinations_month').fadeIn(400).html('<img src="/images/load_vtc.gif" />');$('.month').removeClass('active');$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=month_ajax&check_tag="+check_tag+"&i="+i,success:function(xml){$('.destinations_month').html(xml);}});}
function tab_route(text_id,i){$(".tab_r").removeClass('active');$("#tab_route_"+i).addClass('active');$('.tab_route').hide();$('#'+text_id).show();}
function show_more_search(route,group_id,duration,page)
{$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_search&route="+route+"&group_id="+group_id+"&duration="+duration+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function showreview(id,page){$('#show'+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-suplier.php?mod=showreview&page="+page+"&id="+id,success:function(xml){$("#show"+page).html(xml);}});}
function show_more_suplier(page,limit,order,type,bestcruise,group_id)
{$("#"+type+"show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-suplier.php?mod=show_page_suplier&page="+page+"&limit="+limit+"&order="+order+"&type="+type+"&bestcruise="+bestcruise+"&group_id="+group_id,success:function(xml){$("#"+type+"show"+page).html(xml);},error:function(){}});}
function show_more_cruise_sort(page,limit,order)
{$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_more_cruise_sort&page="+page+"&limit="+limit+"&order="+order,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function check_available(){name=$("#tags").val();if(name!=""){day=$("#nights_cruise").val();no_cabin=$('#cabin_no').val();$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=search_cruise_ajax&name="+name+"&day="+day+"&no_cabin="+no_cabin,success:function(xml){$('.ajax_search').html(xml);},error:function(){}});}else{$("#tags").css("border","1px solid #FF6600");}}
function show_more_package(tran,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package&tran="+tran+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function more_text(text)
{$('#hide').show();$('#more').hide();$('#'+text).css("height","auto");$('#'+text).css("overflow","inherit");}
function hide_text(text,number)
{$('#more').show();$('#hide').hide();$('#'+text).css("height",number+"px");$('#'+text).css("overflow","hidden");}
function more_text_1(text,i)
{$('#hide_'+i).show();$('#more_'+i).hide();$('#'+text).css("height","auto");$('#'+text).css("overflow","inherit");}
function hide_text_1(text,number,i)
{$('#more_'+i).show();$('#hide_'+i).hide();$('#'+text).css("height",number+"px");$('#'+text).css("overflow","hidden");}
function criteria(slogan){var stt1="Customer's satisfaction is the biggest goal and inspiration in our career. We always try our best to deliver as much pleasure as possible to every single tourist. Therefore, you'll always get much more what you pay for. Best Services, Best Support, Local Experiences are our promise.";var stt2="We have an excellent relationship with our suppliers to ensure that we get the best rate and best service for our clients. In addition, we always catch promotional rate from our supplier and inform to our clients to make sure that they pay for the services at lowest price.";var stt3="Fast response is vital question in tourism industry and therefore one of our principle is getting back to every inquiry the same day or at the most within 48 hours. You always have our 24/7 hotline support in case you need any urgent assistance. And we are always at your disposal since the first contact by email until your last day travelling and even afterwards.";if(slogan==1){if($("#text_home").html()=="Customer's satisfaction is the biggest goal and inspiration in our career. We always try our best to"){$("#text_home").html(stt1);$('#hide').show();$('#more').hide();}
else{$("#text_home").html("Customer's satisfaction is the biggest goal and inspiration in our career. We always try our best to");$('#hide').hide();$('#more').show();}}
if(slogan==2){if($("#text_home_1").html()=="We have an excellent relationship with our suppliers to ensure that we get the best rate and best service for"){$("#text_home_1").html(stt2);$('#hide_1').show();$('#more_1').hide();}
else{$("#text_home_1").html("We have an excellent relationship with our suppliers to ensure that we get the best rate and best service for");$('#hide_1').hide();$('#more_1').show();}}
if(slogan==3){if($("#text_home_2").html()=="Fast response is vital question in tourism industry and therefore one of our principle is getting back to every"){$("#text_home_2").html(stt3);$('#hide_2').show();$('#more_2').hide();}
else{$("#text_home_2").html("Fast response is vital question in tourism industry and therefore one of our principle is getting back to every");$('#hide_2').hide();$('#more_2').show();}}}
function show_group_package(page,order){$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_group_package&page="+page+"&order="+order,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_search_package(route,nights,grade,type,page){$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_search_package&route="+route+"&nights="+nights+"&grade="+grade+"&type="+type+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function ajax_package(cond,text,type){$(".component-packages").fadeIn(400).html('<div style="margin:10px auto;width: 31px;"><img src="/images/loader-tab.gif" /><div>');$('.pk').removeClass('active');$('#type_search').val(type);$('#'+text).addClass('active');$.ajax({type:"GET",url:SITE_URL+'/ajax-package.php?mod=ajax_package&cond='+cond+'&type='+type,success:function(xml){$(".component-packages").html(xml);},error:function(){}});}
function ajax_search_package(text,type){$('.pk').removeClass('active');$('#'+text).addClass('active');$('#type_search').val(type);}
function show_more_destination(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_destination&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_deshotel(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_deshotel&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_ajax_package(cruise_id,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_ajax_package&cruise_id="+cruise_id+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_tour_package(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=show_tour_package&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_pack_hotel(id,page){$("#show_p"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_pack_hotel&id="+id+"&page="+page,success:function(xml){$("#show_p"+page).html(xml);},error:function(){}});}
function show_pack_des(route,page){$("#show_p"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_pack_des&route="+route+"&page="+page,success:function(xml){$("#show_p"+page).html(xml);},error:function(){}});}
function show_tours_hotel(route,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_tours_hotel&route="+route+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
$(document).ready(function(){$('.tab_content:not(:first)').hide();$('.tabs li a').click(function(){$('.tabs li a').removeClass('active');$(this).addClass('active');$('.tab_content').hide();var activeTab=$(this).attr('href');$(activeTab).fadeIn();return false;});});function helpful(id,text,ip,session){if(session!=id){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=helpful&id="+id+"&text="+text+"&ip="+ip,success:function(xml){$("#box-helpful-guide ul li").hide();$("#message_c").html(xml);}});}else{alert('You have already voted!');return false;}}
function arrange_hotel(value,route){if(value!=0){if(value=='asc'){check='ASC';}else if(value=='des'){check='DESC';}
$('.component-packages').html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-show-more-hotels.php?check="+check+"&location="+route,cache:false,success:function(result){$('.component-packages').html(result);}});}else{return false;}}
function like_package(id)
{$('#like_pac_'+id).addClass('active');var number=parseInt($("#total_like").text());if(isNaN(number)==true){number=0;}
total=number+1;$('#like_pac_home').addClass('active');$('#like_pac_home').attr("href",SITE_URL+'/packages/like/');var st=total.toString();$("#total_like").text(""+st);$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=like_package&id="+id,success:function(xml){$('#fontajax_'+id).html(xml);$('#like_pac_'+id).attr('onclick','').unbind('click');$('#like_pac_'+id).attr("href",SITE_URL+'/packages/like/');}});}
function like_suplier(id,type)
{
    $('#like_pac_'+id).addClass('active');
    var number=parseInt($("#total_like").text());
    if(isNaN(number)==true){
        number=0;
    }
    total=number+1;
    $('#like_pac_home').addClass('active');
    $('#like_pac_home').attr("href",SITE_URL+'/'+type+'/like/');
    var st=total.toString();
    $("#total_like").text(""+st);
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-suplier.php?mod=like_suplier&id="+id+"&type="+type,
        success:function(xml){
            $('#fontajax_'+id).html(xml);
            $('#like_pac_'+id).attr('onclick','').unbind('click');
            $('#like_pac_'+id).attr("href",SITE_URL+'/'+type+'/like/');
        }
    });
}
function like_suplier_new(id,type){
    $('#like_pac_'+id).addClass('active');
    var number=parseInt($("#total_like").text());
    if(isNaN(number)==true){
        number=0;
    }
    total=number+1;
	if(type=='cruise'){link_like='du-thuyen';}
    $('#like_pac_home').addClass('active');
    $('#like_pac_home').attr("href",SITE_URL+'/'+link_like+'/like/');
    var st=total.toString();
    $("#total_like").text(""+st);
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-suplier.php?mod=like_suplier_new&id="+id+"&type="+type,
        success:function(xml){
            arr_c = xml.split("#");
            $('#like_pac_'+id).html(arr_c[0]);
            $('#like_pac_'+id).attr('onclick','').unbind('click');
            //$('#like_pac_'+id).attr("href",SITE_URL+'/'+type+'/like/');
			$('#like_pac_'+id).attr("href",SITE_URL+'/du-thuyen/like/');
            if($('#'+type+'_sumlove').length){
                $('#'+type+'_sumlove').text(type+" ("+arr_c[1]+")");
            }
        }
    });
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
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=love_tour&id="+id,
        success:function(xml){
            arr_l = xml.split("#");
            $('#love_tour'+id).html(arr_l[0]);
            $('#love_tour'+id).attr('onclick','').unbind('click');
            $('#love_tour'+id).attr("href",SITE_URL+'/tours/like/');
            if($('#tour_sumlove').length){
                $('#tour_sumlove').text("Tours ("+arr_l[1]+")");
            }
        }
    });
}
function unlike_supplier(id,type){
    var number=parseInt($("#total_like").text());
    total=number-1;
    var st=total.toString();
    $.ajax({
       type:"GET",
       url:SITE_URL+"/ajax-suplier.php?mod=unlike_supplier&id="+id+"&type="+type,
       success:function(xml){
          $('#list_supplier_like'+id).hide(1000);
          if($('#'+type+'_sumlove').length){
            if(xml > 0){
                $('#'+type+'_sumlove').text(type+" ("+xml+")");
            }else{
                $('#'+type+'_sumlove').hide();
            }
          }
          if(total > 0){
            $("#total_like").text(""+st);
          }else{
            $(".like_header #love-pk > a").removeClass('active');
            $("#total_like").text("");
          }
       }
    });
}
function unlove_tour(id){
    var number=parseInt($("#total_like").text());
    total=number-1;
    var st=total.toString();
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=unlove_tour&id="+id,
        success:function(xml){
            $("#list_love"+id).hide(1000);
            if($('#tour_sumlove').length){
                if(xml>0){
                    $('#tour_sumlove').text("Tours ("+xml+")");
                }else{
                    $('#tour_sumlove').hide();
                }
            }
            if(total > 0){
                $("#total_like").text(""+st);
            }else{
                $(".like_header #love-pk > a").removeClass('active');
                $("#total_like").text("");
            }
        }
    });
}

data_hotel=false;function hotels_des(id){if($('.deshotel_ajax').is(':visible')){$('.deshotel_ajax').hide();$(".hotel_des").show();$('#show_more_hotel').text('Show more');}else{$(".hotel_des").hide();$('#show_more_hotel').text('Hide less');if(data_hotel==false){$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=hotels_des&id="+id,success:function(xml){$(".deshotel_ajax").html(xml);data_hotel=true;}});}else{$('.deshotel_ajax').show();}}}
function show_more_tours_serach(cat_id,tour_length,str_dest,keyword,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_tours_serach&cat_id="+cat_id+"&tour_length="+tour_length+"&str_dest="+str_dest+"&keyword="+keyword+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_hotels_search(str_price,str_cat,keyword,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_hotels_search&str_price="+str_price+"&str_cat="+str_cat+"&keyword="+keyword+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function show_more_package_search(expediency,dest,night,grade,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package_search&expediency="+expediency+"&dest="+dest+"&night="+night+"&grade="+grade+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function hotel_onclick_ajax(){$('.hol_room').removeClass('active');$('#hotel_6').addClass('active');$('.content-tab').hide();$('.good_to_know').show();}
function ajax_search_hotel(){
    keyword=$('#keyword-hotel').val();
    star=$('#guest-hotel').val();
    price=$('#price-hotel').val();
    if(keyword==""&&star==0&&price==0){
    $("#keyword-hotel").css("border-bottom","1px solid rgb(255, 102, 0)");return false;
    }else{$("#keyword-hotel").css("border-bottom","1px dashed #4da981");}
    $('html,body').animate({
    scrollTop:$("#wrap").offset().top},'slow');
    $(".list_search").html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({type:"GET",
    url:SITE_URL+"/ajax-process.php?mod=ajax_search_hotel&keyword="+keyword+"&star="+star+"&price="+price,
    success:function(xml){
        $(".list_search").html(xml);},
        error:function(){}
    });
}
function ajax_search_cruise(){
    keyword=$('#con_sel_cruise').val();
    star=$('#guest-cruise').val();
    price=$('#price-cruise').val();
    if(keyword==""&&star==0&&price==0){
    $("#keyword-cruise").css("border-bottom","1px solid rgb(255, 102, 0)");return false;
    }else{$("#keyword-cruise").css("border-bottom","1px dashed #4da981");}
    $('html,body').animate({
    scrollTop:$("#wrap").offset().top},'slow');
    $(".list_search").html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({type:"GET",
    url:SITE_URL+"/ajax-process.php?mod=ajax_search_cruise&keyword="+keyword+"&star="+star+"&price="+price,
    success:function(xml){
        $(".list_search").html(xml);},
        error:function(){}
    });
}
function jquery_show(i,text,tag,tag2,tab_home){if(i==1){$('#'+tab_home).text(text);$('#'+tag).hide();$('#'+tag2).show();}else{$('#'+tab_home).text(text);$('#'+tag).hide();$('#'+tag2).show();}}
function show_more_package_like(cond,page){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=show_more_package_like&cond="+cond+"&page="+page,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function list_cruise(type,group,destination,text){

    if(text=="list"){
        $('.supplier-ajax').hide();
        $('.hotels-cat ul li a').removeClass('current');
        $('.list-hotel').addClass('current');
        $('.cruise-list-ajax').show();
    }else{

        $('.supplier-ajax').hide();
        $('.hotels-cat ul li a').removeClass('current');
        $('.grid-hotel').addClass('current');
        if($('.hotel-grid-cn').length){
            $('.cruise-grid-ajax').show();
        }else{
            $('.cruise-grid-ajax').html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
            $.ajax({
                type:"GET",
                url:SITE_URL+"/ajax-suplier.php?mod=list_cruise&group="+group+"&text="+text+"&destination="+destination+"&type="+type,
                success:function(xml){
                    $('.cruise-grid-ajax').html(xml);
                    $('.cruise-grid-ajax').show();
                }
            });
        }
    }

    /*if(text=="grid"){

    }else{

    }
    $('.cruise-list-ajax').html("<div style='float:left; width:100%; text-align:center'><img src='"+SITE_URL_IMG+"loading.gif' /></div>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-suplier.php?mod=list_cruise&group="+group+"&text="+text+"&destination="+destination+"&type="+type,
        success:function(xml){
            $('.cruise-list-ajax').html(xml);
        }
    });*/
}
function list_hotel(cat_id,text){if(text=="grid"){$('.hotels-list ul li a').removeClass('current');$('.grid-hotel').addClass('current');}else{$('.hotels-list ul li a').removeClass('current');$('.list-hotel').addClass('current');}
$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=list_hotel&cat_id="+cat_id+"&text="+text,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function sort_start_hotel(cat_id,text){stars=$("#"+text).val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
if($('#'+text).is(":checked")){check_dk="uncheck";}else{check_dk="check";}
price=$('#price_filter').val();name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=sort_start_hotel&cat_id="+cat_id+"&stars="+stars+"&rating2="+rating2+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&check_dk="+check_dk+"&price="+price+"&name="+name,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function order_sort(id,type,group,destination,order,besttour){sort=$("#"+id).val();if(typeof besttour=="undefined"){besttour = "";}$('.supplier-ajax').hide();$('.hotels-cat ul li a').removeClass('current');$('.list-hotel').addClass('current');$('.cruise-list-ajax').show();if(sort==0){return}$('.cruise-list-ajax').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-suplier.php?mod=order_sort&group="+group+"&sort="+sort+"&destination="+destination+"&type="+type+"&order="+order+"&besttour="+besttour,success:function(xml){$('.cruise-list-ajax').html(xml);}});}
function quick_search_package()
{name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=quick_search_package&name="+name,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function package_sort(trans){
stars=$("#hotel-sort").val();
if(stars==0){return;}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=package_sort&stars="+stars+"&trans="+trans,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function duration_pack(trans){
stars=$("#duration-pack").val();
if(stars==0){return;}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=duration_pack&stars="+stars+"&trans="+trans,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function price_pack_sort(trans){
stars=$("#price_hotels").val();
if(stars==0){return;}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=price_pack_sort&stars="+stars+"&trans="+trans,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function sort_start_package(text)
{arr_location="";name=$('#hotel-search-cat').val();cat_g=$('#cat_info_check').val();price=$('#price_filter').val();if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
text_valu=$('#'+text).val();if($('#'+text).is(":checked"))
{check="uncheck";}else{check="check";}
if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
total=$('#total_area').val();j=0;for(i=1;i<total+1;i++){if($('#area-'+i).is(":checked"))
{j++;if(j==1){arr_location=$('#area-'+i).val();}else{arr_location=arr_location+","+$('#area-'+i).val();}}else{arr_location=arr_location;}}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=sort_start_package&name="+name+"&cat_g="+cat_g+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&price="+price+"&arr_location="+arr_location+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&check="+check+"&text_valu="+text_valu,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function price_filter_package()
{arr_location="";name=$('#hotel-search-cat').val();cat_g=$('#cat_info_check').val();price=$('#price_filter').val();if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
total=$('#total_area').val();j=0;for(i=1;i<total+1;i++){if($('#area-'+i).is(":checked"))
{j++;if(j==1){arr_location=$('#area-'+i).val();}else{arr_location=arr_location+","+$('#area-'+i).val();}}else{arr_location=arr_location;}}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=price_filter_package&name="+name+"&cat_g="+cat_g+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&price="+price+"&arr_location="+arr_location+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function service_fac(text)
{arr_location="";name=$('#hotel-search-cat').val();cat_g=$('#cat_info_check').val();price=$('#price_filter').val();if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
text_value=$('#'+text).val();if($('#'+text).is(":checked"))
{check="uncheck";}else{check="check";}
if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
total=$('#total_area').val();j=0;for(i=1;i<total+1;i++){if($('#area-'+i).is(":checked"))
{j++;if(j==1){arr_location=$('#area-'+i).val();}else{arr_location=arr_location+","+$('#area-'+i).val();}}else{arr_location=arr_location;}}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=service_fac&name="+name+"&cat_g="+cat_g+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&price="+price+"&arr_location="+arr_location+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&check="+check+"&text_value="+text_value,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function locations_pack(text){arr_location="";name=$('#hotel-search-cat').val();cat_g=$('#cat_info_check').val();price=$('#price_filter').val();if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
text_value=$('#'+text).val();if($('#'+text).is(":checked"))
{check="uncheck";}else{check="check";}
if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
total=$('#total_area').val();j=0;for(i=1;i<total+1;i++){if($('#area-'+i).is(":checked"))
{j++;if(j==1){arr_location=$('#area-'+i).val();}else{arr_location=arr_location+","+$('#area-'+i).val();}}else{arr_location=arr_location;}}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-package.php?mod=locations_pack&name="+name+"&cat_g="+cat_g+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&price="+price+"&arr_location="+arr_location+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&check="+check+"&text_value="+text_value,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function quick_search_hotel()
{name=$('#hotel-search-cat').val();cat_id=$('#cat_info_check').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();if(name==""){return}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=quick_search_hotel&name="+name+"&cat_id="+cat_id+"&rating5="+rating5+"&rating4="+rating4+"&rating3="+rating3+"&rating2="+rating2+"&price="+price,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function hotel_sort()
{stars=$("#hotel-sort").val();if(stars==0){return}
cat_id=$('#cat_info_check').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=hotel_sort&cat_id="+cat_id+"&rating5="+rating5+"&rating4="+rating4+"&rating3="+rating3+"&rating2="+rating2+"&stars="+stars+"&price="+price+"&name="+name,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function hotel_sort1(type,destination)
{stars=$("#hotel-sort").val();if(stars==0){return}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.cruise-list-ajax').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-suplier.php?mod=hotel_sort1&destination="+destination+"&stars="+stars,success:function(xml){$('.cruise-list-ajax').html(xml);}});}
function price_sort()
{stars=$("#price_hotels").val();if(stars==0){return}
cat_id=$('#cat_info_check').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=price_sort&cat_id="+cat_id+"&rating5="+rating5+"&rating4="+rating4+"&rating3="+rating3+"&rating2="+rating2+"&stars="+stars+"&price="+price+"&name="+name,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function package_hotel_sort(){packag=$("#package_hotel").val();if(packag==0){return}
cat_id=$('#cat_info_check').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=package_hotel_sort&cat_id="+cat_id+"&rating5="+rating5+"&rating4="+rating4+"&rating3="+rating3+"&rating2="+rating2+"&packag="+packag+"&price="+price+"&name="+name,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function show_more_hotels_sort(page,star,order){$("#show"+page).html("<div style='float:left; width:100%; text-align:center'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=show_more_hotels_sort&p="+page+"&star="+star+"&order="+order,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function facilities(text)
{text_check=$('#'+text).val();if($('#'+text).is(":checked")){check_dk="uncheck";}else{check_dk="check";}
if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
if($('#facilities-5').is(":checked"))
{facilities5=$('#facilities-5').val();}else{facilities5="";}
if($('#facilities-6').is(":checked"))
{facilities6=$('#facilities-6').val();}else{facilities6="";}
if($('#facilities-7').is(":checked"))
{facilities7=$('#facilities-7').val();}else{facilities7="";}
if($('#facilities-8').is(":checked"))
{facilities8=$('#facilities-8').val();}else{facilities8="";}
if($('#facilities-9').is(":checked"))
{facilities9=$('#facilities-9').val();}else{facilities9="";}
if($('#facilities-10').is(":checked"))
{facilities10=$('#facilities-10').val();}else{facilities10="";}
cat_id=$('#cat_info_check').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();name=$('#hotel-search-cat').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.list-hotel-cat').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-hotels.php?mod=facilities&cat_id="+cat_id+"&rating5="+rating5+"&rating4="+rating4+"&rating3="+rating3+"&rating2="+rating2+"&price="+price+"&name="+name+"&text_check="+text_check+"&check_dk="+check_dk+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&facilities5="+facilities5+"&facilities6="+facilities6+"&facilities7="+facilities7+"&facilities8="+facilities8+"&facilities9="+facilities9+"&facilities10="+facilities10,success:function(xml){$('.list-hotel-cat').html(xml);}});}
function facilities_cruise(text){text_value=$('#'+text).val();if(text_value=="Spa & Massage"){text_value=text_value.replace('&','-');}
if($('#'+text).is(":checked")){check="uncheck";}else{check="check";}
if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();facilities4=facilities4.replace("&",'-');}else{facilities4="";}
if($('#facilities-5').is(":checked"))
{facilities5=$('#facilities-5').val();}else{facilities5="";}
if($('#facilities-6').is(":checked"))
{facilities6=$('#facilities-6').val();}else{facilities6="";}
if($('#facilities-7').is(":checked"))
{facilities7=$('#facilities-7').val();}else{facilities7="";}
if($('#facilities-8').is(":checked"))
{facilities8=$('#facilities-8').val();}else{facilities8="";}
if($('#facilities-9').is(":checked"))
{facilities9=$('#facilities-9').val();}else{facilities9="";}
name=$('#text_quick_search').val();if($('#rating-5').is(":checked"))
{rating5=$('#rating-5').val();}else{rating5="";}
if($('#rating-4').is(":checked"))
{rating4=$('#rating-4').val();}else{rating4="";}
if($('#rating-3').is(":checked"))
{rating3=$('#rating-3').val();}else{rating3="";}
if($('#rating-2').is(":checked"))
{rating2=$('#rating-2').val();}else{rating2="";}
price=$('#price_filter').val();$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.cruise-list-ajax').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-suplier.php?mod=facilities_cruise&text_value="+text_value+"&rating2="+rating2+"&rating3="+rating3+"&rating4="+rating4+"&rating5="+rating5+"&check="+check+"&price="+price+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&facilities5="+facilities5+"&facilities6="+facilities6+"&facilities7="+facilities7+"&facilities8="+facilities8+"&facilities9="+facilities9+"&name="+name,success:function(xml){$('.cruise-list-ajax').html(xml);}});}
function experience(cat_id,text){text_check=$('#'+text).val();if($('#'+text).is(":checked")){check="uncheck";}else{check="check";}
if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
if($('#facilities-5').is(":checked"))
{facilities5=$('#facilities-5').val();}else{facilities5="";}
if($('#facilities-6').is(":checked"))
{facilities6=$('#facilities-6').val();}else{facilities6="";}
if($('#facilities-7').is(":checked"))
{facilities7=$('#facilities-7').val();}else{facilities7="";}
if($('#facilities-8').is(":checked"))
{facilities8=$('#facilities-8').val();}else{facilities8="";}
if($('#facilities-9').is(":checked"))
{facilities9=$('#facilities-9').val();}else{facilities9="";}
if($('#facilities-10').is(":checked"))
{facilities10=$('#facilities-10').val();}else{facilities10="";}
if($('#facilities-11').is(":checked"))
{facilities11=$('#facilities-11').val();}else{facilities11="";}
if($('#facilities-12').is(":checked"))
{facilities12=$('#facilities-12').val();}else{facilities12="";}
if($('#facilities-13').is(":checked"))
{facilities13=$('#facilities-13').val();}else{facilities13="";}
if($('#facilities-14').is(":checked"))
{facilities14=$('#facilities-14').val();}else{facilities14="";}
name=$('#text_quick_search').val();$('.list-tours').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=experience&cat_id="+cat_id+"&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&facilities5="+facilities5+"&facilities6="+facilities6+"&facilities7="+facilities7+"&facilities8="+facilities8+"&facilities9="+facilities9+"&facilities10="+facilities10+"&facilities11="+facilities11+"&facilities12="+facilities12+"&facilities13="+facilities13+"&facilities14="+facilities14+"&text_check="+text_check+"&check="+check+"&name="+name,success:function(xml){$('.list-tours').html(xml);}});}
function destinations(cat_id,text){text_check=$('#'+text).val();if($('#'+text).is(":checked")){check="uncheck";}else{check="check";}
if($('#destinations-1').is(":checked"))
{destinations1=$('#destinations-1').val();}else{destinations1="";}
if($('#destinations-2').is(":checked"))
{destinations2=$('#destinations-2').val();}else{destinations2="";}
if($('#destinations-3').is(":checked"))
{destinations3=$('#destinations-3').val();}else{destinations3="";}
if($('#destinations-4').is(":checked"))
{destinations4=$('#destinations-4').val();}else{destinations4="";}
if($('#destinations-5').is(":checked"))
{destinations5=$('#destinations-5').val();}else{destinations5="";}
if($('#destinations-6').is(":checked"))
{destinations6=$('#destinations-6').val();}else{destinations6="";}
if($('#destinations-7').is(":checked"))
{destinations7=$('#destinations-7').val();}else{destinations7="";}
if($('#destinations-8').is(":checked"))
{destinations8=$('#destinations-8').val();}else{destinations8="";}
if($('#destinations-9').is(":checked"))
{destinations9=$('#destinations-9').val();}else{destinations9="";}
if($('#destinations-10').is(":checked"))
{destinations10=$('#destinations-10').val();}else{destinations10="";}
if($('#destinations-11').is(":checked"))
{destinations11=$('#destinations-11').val();}else{destinations11="";}
if($('#destinations-12').is(":checked"))
{destinations12=$('#destinations-12').val();}else{destinations12="";}
if($('#destinations-13').is(":checked"))
{destinations13=$('#destinations-13').val();}else{destinations13="";}
if($('#destinations-14').is(":checked"))
{destinations14=$('#destinations-14').val();}else{destinations14="";}
name=$('#text_quick_search').val();$('.list-tours').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=destinations&cat_id="+cat_id+"&destinations1="+destinations1+"&destinations2="+destinations2+"&destinations3="+destinations3+"&destinations4="+destinations4+"&destinations5="+destinations5+"&destinations6="+destinations6+"&destinations7="+destinations7+"&destinations8="+destinations8+"&destinations9="+destinations9+"&destinations10="+destinations10+"&destinations11="+destinations11+"&destinations12="+destinations12+"&destinations13="+destinations13+"&destinations14="+destinations14+"&text_check="+text_check+"&check="+check+"&name="+name,success:function(xml){$('.list-tours').html(xml);}});}
function quick_search_tour(){name=$('#text_quick_search').val();if($('#facilities-1').is(":checked"))
{facilities1=$('#facilities-1').val();}else{facilities1="";}
if($('#facilities-2').is(":checked"))
{facilities2=$('#facilities-2').val();}else{facilities2="";}
if($('#facilities-3').is(":checked"))
{facilities3=$('#facilities-3').val();}else{facilities3="";}
if($('#facilities-4').is(":checked"))
{facilities4=$('#facilities-4').val();}else{facilities4="";}
if($('#facilities-5').is(":checked"))
{facilities5=$('#facilities-5').val();}else{facilities5="";}
if($('#facilities-6').is(":checked"))
{facilities6=$('#facilities-6').val();}else{facilities6="";}
if($('#facilities-7').is(":checked"))
{facilities7=$('#facilities-7').val();}else{facilities7="";}
if($('#facilities-8').is(":checked"))
{facilities8=$('#facilities-8').val();}else{facilities8="";}
if($('#facilities-9').is(":checked"))
{facilities9=$('#facilities-9').val();}else{facilities9="";}
if($('#facilities-10').is(":checked"))
{facilities10=$('#facilities-10').val();}else{facilities10="";}
if($('#facilities-11').is(":checked"))
{facilities11=$('#facilities-11').val();}else{facilities11="";}
if($('#facilities-12').is(":checked"))
{facilities12=$('#facilities-12').val();}else{facilities12="";}
if($('#facilities-13').is(":checked"))
{facilities13=$('#facilities-13').val();}else{facilities13="";}
if($('#facilities-14').is(":checked"))
{facilities14=$('#facilities-14').val();}else{facilities14="";}
$('.list-tours').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=quick_search_tour&facilities1="+facilities1+"&facilities2="+facilities2+"&facilities3="+facilities3+"&facilities4="+facilities4+"&facilities5="+facilities5+"&facilities6="+facilities6+"&facilities7="+facilities7+"&facilities8="+facilities8+"&facilities9="+facilities9+"&facilities10="+facilities10+"&facilities11="+facilities11+"&facilities12="+facilities12+"&facilities13="+facilities13+"&facilities14="+facilities14+"&name="+name,success:function(xml){$('.list-tours').html(xml);}});}
function duration_tour(cat_id){
check=$('#duration_tour').val();if(check==0){return}
$('.list-tours').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=duration_tour&check="+check+"&cat_id="+cat_id,success:function(xml){$('.list-tours').html(xml);}});}
function pricing_tour(cat_id){
check=$('#pricing_tour').val();if(check==0){return}
$('.list-tours').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=pricing_tour&check="+check+"&cat_id="+cat_id,success:function(xml){$('.list-tours').html(xml);}});}
function cruise_line(text){text_value=$('#'+text).val();if($('#'+text).is(":checked")){check="uncheck";}else{check="check";}
if($('#area-1').is(":checked"))
{cruise_line1=$('#area-1').val();}else{cruise_line1="";}
if($('#area-2').is(":checked"))
{cruise_line2=$('#area-2').val();}else{cruise_line2="";}
if($('#area-3').is(":checked"))
{cruise_line3=$('#area-3').val();}else{cruise_line3="";}
if($('#area-4').is(":checked"))
{cruise_line4=$('#area-4').val();}else{cruise_line4="";}
if($('#area-5').is(":checked"))
{cruise_line5=$('#area-5').val();}else{cruise_line5="";}
if($('#area-6').is(":checked"))
{cruise_line6=$('#area-6').val();}else{cruise_line6="";}
if($('#area-7').is(":checked"))
{cruise_line7=$('#area-7').val();}else{cruise_line7="";}
if($('#area-8').is(":checked"))
{cruise_line8=$('#area-8').val();}else{cruise_line8="";}
if($('#area-9').is(":checked"))
{cruise_line9=$('#area-9').val();}else{cruise_line9="";}
if($('#area-10').is(":checked"))
{cruise_line10=$('#area-10').val();}else{cruise_line10="";}
if($('#area-11').is(":checked"))
{cruise_line11=$('#area-11').val();}else{cruise_line11="";}
if($('#area-12').is(":checked"))
{cruise_line12=$('#area-12').val();}else{cruise_line12="";}
if($('#area-13').is(":checked"))
{cruise_line13=$('#area-13').val();}else{cruise_line13="";}
if($('#area-14').is(":checked"))
{cruise_line14=$('#area-14').val();}else{cruise_line14="";}
if($('#area-15').is(":checked"))
{cruise_line15=$('#area-15').val();}else{cruise_line15="";}
$('html,body').animate({scrollTop:$("#wrap").offset().top},'slow');$('.cruise-list-ajax').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-cruise.php?mod=cruise_line&text_value="+text_value+"&cruise_line1="+cruise_line1+"&cruise_line2="+cruise_line2+"&cruise_line3="+cruise_line3+"&cruise_line5="+cruise_line5+"&cruise_line6="+cruise_line6+"&cruise_line7="+cruise_line7+"&cruise_line8="+cruise_line8+"&cruise_line9="+cruise_line9+"&cruise_line10="+cruise_line10+"&cruise_line11="+cruise_line11+"&cruise_line12="+cruise_line12+"&cruise_line13="+cruise_line13+"&cruise_line14="+cruise_line14+"&cruise_line15="+cruise_line15+"&check="+check,success:function(xml){$('.cruise-list-ajax').html(xml);}});}
function ajax_search_tour(){
    route=$("#tags_des").val();
    group_id=$("#cate option:selected").val();
    duration=$("#tourday option:selected").val();
    keyword=$("#text_search").val();
    if(route==""&&group_id==0&&duration==0&&keyword==""){
        $("#tags_des").css("border-bottom","1px solid rgb(255, 102, 0)");
            return false;
        }else{
            $("#tags_des").css("border-bottom","1px dashed #4da981");
        }
        $('.list_search').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
        $.ajax({
            type:"GET",
            url:SITE_URL+"/ajax-process.php?mod=ajax_search_tour&route="+route+"&group_id="+group_id+"&duration="+duration+"&keyword="+keyword,
            success:function(xml){
            $('.list_search').html(xml);
            }
        });
}

function show_more_tours_sort(page,order){$("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=show_more_tours_sort&page="+page+"&order="+order,success:function(xml){$("#show"+page).html(xml);},error:function(){}});}
function scroll_cruise_menu()
{$("html,body").animate({scrollTop:$("#review-detail").position().top - 82 },1000);}
function scroll_cruise()
{$("html,body").animate({scrollTop:$("#review-detail").position().top - 155 },1000);}
//$(document).ready(function(){$('.book-cruise').click(function(){$("html,body").animate({scrollTop:$("#check-rates").position().top-80},2000);});$('#review-faci').click(function(){$("html,body").animate({scrollTop:$("#review-detail").position().top-80},1000);});});
function search_package(){
    type_p = $("#style_pack option:selected").val();
    route=$("#destination_pack").val();
    nights=$("#night_pack option:selected").val();
    grade=$("#grade_pack option:selected").val();
    if(type_p==0&&route==""&&nights==0&&grade==0){
        $("#destination_pack").css("border-bottom","1px solid rgb(255, 102, 0)");
            return false;
        }
        else{$("#destination_pack").css("border-bottom","1px dashed #4da981");}
    $('.list_search').html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({
        type:"GET",
        url:SITE_URL+'/ajax-package.php?mod=search_package&route='+route+"&nights="+nights+"&grade="+grade+"&type_p="+type_p,
        success:function(xml){
            $('.list_search').html(xml);
        }
    });
}
function tab_cruise(id,text){

    check = false;
    if(text=="tab-overview" && $('#tab-overview').length){
        check = true;
    }

    if(text=="tab-highlight" && $('.tab-highlight').length){
        check = true;
    }
    if(text=="tab-itinerarie" && $('.itinerarie-supplier').length){
        check = true;
    }
    if(text=="tab-deckplan" && $('.deckplan-content').length){
        check = true;
    }
    if(text=="tab-review" && $('.review-suplier').length){
        check = true;
    }
    if(text=="tab-deckplan" && $('.deckplan-content').length){
        check = true;
    }
    if(text=="tab-tour-supplier" && $('.hotel-tour-content').length){
        check = true;
    }
    if(text=="tab-des"){
        check = true;
    }
    if(text=="tab-share"){
        check = true;
    }

    if(check==true){
        $(".tab-cruise-detal .tab-pane").hide();
        $('#'+text).show();
    }else{
        $(".tab-cruise-detal .tab-pane").hide();
        $('#'+text).show();
        $('#'+text).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
        $.ajax({
            type:"GET",
            url:SITE_URL+'/ajax-suplier.php?mod=tab_cruise&id='+id+"&text="+text,
            success:function(xml){
                $('#'+text).html(xml);
            }
        });
    }
}
function show_off(id)
{if($('.class_'+id).is(':visible')){$('.class_'+id).hide();}else{$('.class_'+id).show();}}
function show_map_h()
{if($('#map-hotel').is(':visible')){$('#map-hotel').hide();}else{$('#map-hotel').show();}}
function close_off(id)
{$('.class_'+id).hide();}
function text_start(text,text1){$('.star').removeClass("active");document.getElementById(""+text1).checked=true;$("#"+text).addClass("active");}
$(document).ready(function(){$('#offer-cruise-detail').click(function(){if($('.special_offer_detail').is(':visible')){$('.special_offer_detail').hide();}else{$('.special_offer_detail').show();}});$('.offer-pack').click(function(){if($('.tab-pack').is(':visible')){$('.tab-pack').hide();}else{$('.tab-pack').show();}});$('.offer-tours').click(function(){if($('.tab-pack').is(':visible')){$('.tab-pack').hide();}else{$('.tab-pack').show();}});});function tripadv()
{$.ajax({type:"GET",url:SITE_URL+'/ajax-process.php?mod=tripadv',success:function(xml){$('#content-ajax-header').html(xml);}});}
function bestprice()
{$.ajax({type:"GET",url:SITE_URL+'/ajax-process.php?mod=bestprice',success:function(xml){$('#content-ajax-header').html(xml);}});}
function chatluong()
{$.ajax({type:"GET",url:SITE_URL+'/ajax-process.php?mod=chatluong',success:function(xml){$('#content-ajax-header-box').html(xml);}});}
function fully_bonded()
{$.ajax({type:"GET",url:SITE_URL+'/ajax-process.php?mod=fully_bonded',success:function(xml){$('#content-ajax-header').html(xml);}});}
function license()
{$.ajax({type:"GET",url:SITE_URL+'/ajax-process.php?mod=license',success:function(xml){$('#content-ajax-header').html(xml);}});}
function visaapplicable(){$.ajax({type: "GET",url: SITE_URL+'/ajax-process.php?mod=visaapplicable',success:function(xml){$('#content-ajax-header').html(xml);} });}
function q_answers_des(des,text){
    $('.'+text).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=q_answers_des&des="+des,
        success:function(xml){
            $('.'+text).html(xml);
        }
    });
}
function showfaqdes(des,page){
    $('#showdes'+page).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=showfaqdes&page="+page+"&des="+des,
        success:function(xml){
            $("#showdes"+page).html(xml);
        }
    });
}
function overview_cruise(id)
{$.ajax({type:"GET",url:SITE_URL+'/ajax-cruise.php?mod=overview_cruise&id='+id,success:function(xml){$('#overview_cruise').html(xml);}});}
function click_tab_m(chon){$('#tab_map' + chon).show();}
function click_tab_m2(){$('#tab_map2').show();}
function show_more()
{$('.quote-sidebar #show_more_r').hide();$('.quote-sidebar #info-review').css({"height":"auto","overflow":"inherit"});$('.quote-sidebar #hide_more_r').show();}
function hide_more()
{$('.quote-sidebar #hide_more_r').hide();$('.quote-sidebar #info-review').css({"height":"100px","overflow":"hidden"});$('.quote-sidebar #show_more_r').show();}
function show_overview()
{$('.policies-item #show_overview').hide();$('.policies-item #overview_cruise').css({"height":"auto","overflow":"inherit"});$('.policies-item #hide_overview').show();}
function hide_overview()
{$('.policies-item #hide_overview').hide();$('.policies-item #overview_cruise').css({"height":"105px","overflow":"hidden"});$('.policies-item #show_overview').show();}
function sub_contact(){arr_cat=new Array();arr_tour=new Array();des_vn=new Array();des_cam=new Array();des_lao=new Array();i=0;j=0;vn=0;cam=0;lao=0;$('.checkbox_cat:checked').each(function(){arr_cat[i]=$(this).val();i++;});$('.checkbox_tour:checked').each(function(){if(j>0){arr_tour=arr_tour+","+$(this).val();}else{arr_tour=$(this).val();}
j++;});destination=document.getElementById('other_destination').value;arr_cat=arr_cat+","+destination;interests=document.getElementById('other_interests').value;arr_tour=arr_tour+","+interests;quest=document.getElementById('info_contact').value;name=document.getElementById('name_contact').value;email=document.getElementById('email_contact').value;phone=document.getElementById('phone_contact').value;phone=encodeURIComponent(phone);text_name=document.getElementById('text_name').value;country=document.getElementById('country_step').value;adults=document.getElementById('adults').value;childrens=document.getElementById('childrens').value;date=document.getElementById('datepicker').value;tour_sel=document.getElementById('tour_sel').value;option=$("input[type='radio']:checked").val();adult="";children="";infant="";questext="Any notes or special requests?";if(name==""||name=="Full Name *"){$('#name_contact').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>name</b>.Thanks!</font>");return;}else{$('#name_contact').css("border","2px solid #C8C9C0");}
if(email==""||email=="Email Address *"){$('#email_contact').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>email</b>.Thanks!</font>");return;}else{var filter=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;if(!filter.test($("#email_contact").val())){$("#email_contact").css("border","1px solid red");return;}else{$('#email_contact').css("border","2px solid #C8C9C0");}}
if(country==0){$('#country_step').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>country</b>.Thanks!</font>");return;}else{$('#country_step').css("border","2px solid #C8C9C0");}
if($('#adults').is(":visible")){if(adults==1000){$('#adults').css("border","1px solid red");return;}else{$('#adults').css("border","2px solid #C8C9C0");}}
if(text_name==""||text_name=="Enter # Your Trip Length"){$("#text_name").css("border","1px solid red");$("#quickconmesq").html("<font style='color:red;font-size:12px;float:right; margin-top:13px;'>Please type your <b>Enter # Your Trip Length</b>.Thanks!</font>");return;}else{$("#text_name").css("border","2px solid #C8C9C0");}
if(date==""||date==questext){$('#datepicker').css("border","1px solid red");$("#quickconmesq").html("<font style='color:red; font-size:12px;float:right; margin-top:13px;'>Please type your <b>date</b>.Thanks!</font>");return;}else{$('#datepicker').css("border","2px solid #C8C9C0");}
$("#step-form").html("<div id='images-load' style='height: 345px;'><img style='display: table;margin: 0 auto;margin-top: 150px;width: 70px' src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");$('.bt-finish').hide();$('.bt-prev').hide();$("#quickconmesq").html(" ");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=sub_step&name="+name+"&email="+email+"&info="+quest+"&text_name="+text_name+"&country="+country+"&adult="+adults+"&children="+childrens+"&date="+date+"&tour_sel="+tour_sel+"&phone="+phone+"&type_group="+option+"&arr_cat="+arr_cat+"&arr_tour="+arr_tour,success:function(xml){var arr_html=xml.split('|');if(arr_html[1]=="ok"){$("#step-form").html(arr_html[0]);}else{$("#quickconmesq").html(arr_html[0]);}},error:function(){}});}
function tour_search(){if(document.form_search_tour.destination.value==""&&document.form_search_tour.cate.value<1&&document.form_search_tour.tourday.value<1&&document.form_search_tour.text_search.value==""){$("#tags_des").css("border","1px solid rgb(255, 102, 0)");return;}else{$("#tags_des").css("border","0px solid #e5e5e5");}
document.form_search_tour.submit();}
function hotel_search(){document.form_search_hotel.submit();}
function package_search(){if(document.form_search_package.style_pack.value<1&&document.form_search_package.destination_pack.value==""&&document.form_search_package.night_pack.value<1&&document.form_search_package.grade_pack.value<1){$("#destination_pack").css("border","1px solid rgb(255, 102, 0)");return false;}else{$("#destination_pack").css("border","0px solid #e5e5e5");}
document.form_search_package.submit();}
function open_offer_home1(){$('.offer_home_1').toggle();}
function open_offer_home2(){$('.offer_home_2').toggle();}
function open_offer_home3(){$('.offer_home_3').toggle();}
function open_offer_home4(){$('.offer_home_4').toggle();}
function open_offer_home5(){$('.offer_home_5').toggle();}
function open_offer_home6(){$('.offer_home_6').toggle();}
function close_offer_home1(){$('.offer_home_1').hide();}
function close_offer_home2(){$('.detail_offer_home').hide();}
function close_offer_home3(){$('.detail_offer_home').hide();}
function close_offer_home4(){$('.detail_offer_home').hide();}
function close_offer_home5(){$('.detail_offer_home').hide();}
function close_offer_home6(){$('.detail_offer_home').hide();}
$(document).ready(function(){if($("#promo-code").length>0){var stickyOffset = $('#promo-code').offset().top;jQuery(window).scroll(function(){var top=jQuery(window).scrollTop();if(top > stickyOffset){jQuery("#promo-code").css({"display":"none"});}else{jQuery("#promo-code").removeAttr("style");}});}
if($("#advertise").length>0){jQuery(window).scroll(function(){var top=jQuery(window).scrollTop();if(top>=50){jQuery("#advertise").css({"display":"none"});}else{jQuery("#advertise").removeAttr("style");}});}
if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip();}
if($(".lazyload").length>0){jQuery(document).ready(function($){jQuery(".lazyload").lazyload({effect:"fadeIn",placeholder:SITE_URL+"/images/grey.gif"});});}
if($(".view-map").length>0){$(".view-map").fancybox({'width':'75%','height':'96%','autoScale':false,'type':'iframe'});}
if($('#datepicker').length>0){$('#datepicker').datepicker({minDate:new Date(),});}
if($("#phone_contact").length>0){$("#phone_contact").intlTelInput({preferredCountries:['us','gb','au'],});$("#phone_contact").intlTelInput("setNumber","+1");var input=document.getElementById('phone_contact');input.onclick=input.onkeydown=function(event){if(input.value.length<2||input.value=='+1'){input.value='+';}
var key=event.keyCode||event.charCode;if(key==8){if(input.value.length<3||input.value=='+1'){input.value='++';}}else if(key==46){if(input.value.length<2||input.value=='+1'){input.value='+';}}};}

if($("#owl-demo1").length>0){$("#owl-demo1").owlCarousel({autoPlay:5000,items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1]});var owl1=$("#owl-demo1");$(".next1").click(function(){owl1.trigger('owl.next');});$(".prev1").click(function(){owl1.trigger('owl.prev');});}
if($("#owl-demo6").length>0){$("#owl-demo6").owlCarousel({autoPlay:5000,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsMobile:[479,1]});var owl6=$("#owl-demo6");$(".next6").click(function(){owl6.trigger('owl.next');});$(".prev6").click(function(){owl6.trigger('owl.prev');});}
if($("#owl-demo8").length>0){$("#owl-demo8").owlCarousel({items:5,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3]});var owl8=$("#owl-demo8");$(".next8").click(function(){owl8.trigger('owl.next');});$(".prev8").click(function(){owl8.trigger('owl.prev');});}
if($("#owl-demo11").length>0){$("#owl-demo11").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],loop:true});var owl11=$("#owl-demo11");$(".next11").click(function(){owl11.trigger('owl.next');});$(".prev11").click(function(){owl11.trigger('owl.prev');});}
if($("#owl-demo12").length>0){$("#owl-demo12").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],loop:true});var owl12=$("#owl-demo12");$(".next12").click(function(){owl12.trigger('owl.next');});$(".prev12").click(function(){owl12.trigger('owl.prev');});}
if($("#owl-demo13").length>0){$("#owl-demo13").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],loop:true});var owl13=$("#owl-demo13");$(".next13").click(function(){owl13.trigger('owl.next');});$(".prev13").click(function(){owl13.trigger('owl.prev');});}
if($("#owl-demo19").length>0){$("#owl-demo19").owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,1],loop:true});var owl19=$("#owl-demo19");$(".next19").click(function(){owl19.trigger('owl.next');});$(".prev19").click(function(){owl19.trigger('owl.prev');});}
//vuongcm thêm
if ($(".scroll-cruises .owl-carousel").length > 0) {
    if ($('body').width() > 479) {
        $(".scroll-cruises .owl-carousel").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile:[479,1],
            loop: true,
            margin: 50
        });
        for (let i=33; i<=50; i++) {
            $(`#owl-${i}`).closest('.scroll-cruises').find('.customNavigation-cruises>a:last-child').click(function() {
                $(`#owl-${i}`).trigger('owl.next');
            });
            $(`#owl-${i}`).closest('.scroll-cruises').find('.customNavigation-cruises>a:first-child').click(function() {
                $(`#owl-${i}`).trigger('owl.prev');
            });
        }
    } else {
        $(".scroll-cruises .owl-carousel").addClass('carousel-mobile');
        $('body').attr('style',`--bodyWidth:${$('body').width()}px`);
        for (let i=33; i<=50; i++) {
            $(`.scroll-cruises #owl-${i}`).css('width',`calc(var(--bodyWidth) * 0.75 * ${$(`.scroll-cruises #owl-${i} .item`).length})`);
        }
    }
}
window.onload = function() {
    let heightMax=0;
    for (let j=33; j<=50; j++) {
        for (let k=0; k < $(`.scroll-cruises #owl-${j} .hotel-item`).length; k++) {
            if ($(`.scroll-cruises #owl-${j} .hotel-item`).eq(k).height() > heightMax) {
                heightMax = $(`.scroll-cruises #owl-${j} .hotel-item`).eq(k).height();
            }
        }
        $(`.scroll-cruises #owl-${j} .hotel-item`).height(heightMax);
        heightMax=0;
    }
};
//end vuongcm
/*Autocomplete Destination*/
if($("#form-tour").length>0){

function split(val){
    return val.split(/,\s*/);
}
function extractLast(term){
    return split(term).pop();
}
$(".tags_des").autocomplete({

    source: function( request, response ) {
      // delegate back to autocomplete, but extract the last term
      response( $.ui.autocomplete.filter(
        des_arr_sea, extractLast( request.term ) ) );
    },
    focus: function() {
        // prevent value inserted on focus
        return false;
    },
    select: function (event, ui) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( ui.item.value );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( ", " );
        return false;
    }
    }).data("autocomplete")._renderItem = function (ul, item) {
        return $("<li>")
        .data("item.autocomplete", item)
        .append("<a>" + "<span>" + item.name + "</span>" + "<span class='country'>" + item.destination +  "</span>" + "</a>")
        .appendTo(ul);
    };

}

/*Autocomplete Cruise*/
if($("#con_sel_cruise").length>0){
    $("#con_sel_cruise").autocomplete({
        source: cruise_arr,
        focus: function() {
            return false;
        },
        select: function (e, ui) {
        }
    }).data("autocomplete")._renderItem = function (ul, item) {
        return $("<li>")
        .data("item.autocomplete", item)
        .append("<a>" + "<span>" + item.name + "</span>" + "<span class='country'>" + item.destination +  "</span>" + "</a>")
        .appendTo(ul);
    };

}

/*Autocomplete Hotel*/
if($("#keyword-hotel").length>0){
    $("#keyword-hotel").autocomplete({
       source: hotel_arr,
       focus: function() {
       return false;
    },
    select: function (e, ui) {
    }
    }).data("autocomplete")._renderItem = function (ul, item) {
         return $("<li>")
              .data("item.autocomplete", item)
              .append("<a>" + "<span>" + item.name + "</span>" + "<span class='country'>" + item.destination +  "</span>" + "</a>")
              .appendTo(ul);
      };

    }

});

function show_ajax_offer(id,more){
    check = $(".body-offer-"+more+' .content').length;
    if(check==0){
        $(".body-offer-"+more).show();
        $(".body-offer-"+more).html("<img width='70' class='img-loading' src='"+SITE_URL_IMG+"load_vtc.gif' />");
        $.ajax({
            type: "GET",
            url: SITE_URL+"/ajax-process.php?mod=special_offer&id="+id+"&more="+more,
            success: function(xml){
                $(".body-offer-"+more).html(xml);
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
function show_offer_top(i){
    if($('.show_offer_top'+i).is(':visible')){
        $('.show_offer_top'+i).hide();
    }else{
        $('.show_offer_top'+i).show();
    }
}
function open_link(url_trip){
    window.open(url_trip, "mywindow","menubar=1,resizable=1,top=50,left=350,width=700,height=600");
}
//check cabin

var label_child = "Child's Age *";
var strRoom='<div class="room-chose" id="tblroom1">'
	+'<p class="text-bold z_16 room-tit">Phòng 1</p>'
	+'<div class="">'
        +'<div class="col-ms-3 form-group">'
            +'<label class="control-label-sm">Loại</label>'
            +'<select class="form-control form-control-angle-down type-cruise" name="typecab1" id="typecab1">'
                +'<option value="0" selected="selected">giường đôi</option>'
				+'<option value="1">2 giường đơn</option>'
				+'<option value="2">giường đơn</option>'
            +'</select>'
        +'</div>'

		+'<div class="col-ms-3 form-group">'
			+'<label class="control-label-sm">Người lớn (> 10)</label>'
			+'<select class="form-control" name="adult1" rel="adult" id="adult1">'
				+'<option value="0">0</option>'
				+'<option value="1">1</option>'
				+'<option value="2" SELECTED>2</option>'
				+'<option value="3">3</option>'
				+'<option value="4">4</option>'
			+'</select>'
		+'</div>'

		+'<div class="col-ms-3 form-group">'
			+'<label class="control-label-sm">Trẻ em (4 - 10)</label>'
			+'<select class="form-control" name="child1" rel="child" id="child1">'//onchange="if($(this).val()==\'0\'){$(\'#conchild1s_1\').hide();$(\'#conchild2s_1\').hide();$(\'#conchild3s_1\').hide();$(\'#infant1s_1\').val(\'0\');$(\'#infant2s_1\').val(\'0\');$(\'#infant3s_1\').val(\'0\');$(\'#label_child_1\').text(\'Child 1 Age *\');}if($(this).val()==\'1\'){$(\'#conchild1s_1\').show();$(\'#conchild2s_1\').hide();$(\'#conchild3s_1\').hide();$(\'#infant2s_1\').val(\'0\');$(\'#infant3s_1\').val(\'0\');$(\'#label_child_1\').text(label_child);}if($(this).val()==\'2\'){$(\'#conchild1s_1\').show();$(\'#conchild2s_1\').show();$(\'#conchild3s_1\').hide();$(\'#infant3s_1\').val(\'0\');$(\'#label_child_1\').text(\'Child 1 Age *\');}if($(this).val()==\'3\'){$(\'#conchild1s_1\').show();$(\'#conchild2s_1\').show();$(\'#conchild3s_1\').show();$(\'#label_child_1\').text(\'Child 1 Age *\');}"
				+'<option value="0">0</option>'
				+'<option value="1">1</option>'
				+'<option value="2">2</option>'
			+'</select>'
		+'</div>'

        +'<div class="col-ms-3 form-group">'
            +'<label class="control-label-sm">Em bé (0 - 3)</label>'
            +'<select class="form-control form-control-angle-down" name="infant1" rel="infant" id="infant1" onchange="hide_price();">'
				+'<option value="0">0</option>'
				+'<option value="1">1</option>'
				+'<option value="2">2</option>'
			+'</select>'
        +'</div>'

	+'</div>'
	//+'<input type="hidden" name="types[]" id="types_1" value="Double">'
	+'<p id="lblerror_1" class="roomerror" style="display:none"></p>'
+'</div>'
;
function textroom(){
	var rooms=$('#rooms').val();
	var adults=0;var children=0;var infant=0;
	var str='';
    $("select[rel='adult']").each(function() {
        adults += parseInt($(this).val());
    });
	$("select[rel='child']").each(function() {
        children += parseInt($(this).val());
    });
	$("select[rel='infant']").each(function() {
        infant += parseInt($(this).val());
    });
	str= rooms+" Phòng: "+adults+" Người lớn";
	if(children>0){
		str=str+" ,"+children+" Trẻ em";
	}
	if(infant>0){
		str=str+" ,"+infant+" Em bé";
	}
	$('#ip-room').val(str);
	$('#mbnumroomtxt').text(rooms+' room');
    hide_price();
}
function room(min_age,max_age) {
	$('.item-last').hide();
	$('.roomerror').hide();
	var count = $('#count').val();
	var room = $('#rooms').val();
	if(count < room) {
		var ci =count;
		for(i=0;i<room-count;i++) {
			ci++;
			var des = strRoom;
			des = des.replace("tblroom1","tblroom"+ci);
			des = des.replace("Phòng 1","Phòng "+ci);
			//des = des.replace("types_1","types_"+ci);
            des = des.replace(/typecab1/gi,"typecab"+ci);
            des = des.replace(/infant1/gi,"infant"+ci);
			des = des.replace(/adult1/gi,"adult"+ci);
			des = des.replace(/child1/gi,"child"+ci);
            if(min_age!=undefined&&max_age!=undefined){
                infant_age = Number(min_age)-1;
                des = des.replace("> 10","> "+max_age);
                des = des.replace("4 - 10",min_age+" - "+max_age);
                des = des.replace("0 - 3","0 - "+infant_age);
            }
			//des = des.replace(/infant1s_1/g,"infant1s_"+ci);
			//des = des.replace(/infant2s_1/g,"infant2s_"+ci);
			//des = des.replace(/infant3s_1/g,"infant3s_"+ci);
			//des = des.replace(/conchild1s_1/g,"conchild1s_"+ci);
			//des = des.replace(/conchild2s_1/g,"conchild2s_"+ci);
			//des = des.replace(/conchild3s_1/g,"conchild3s_"+ci);
			des = des.replace("lblerror_1","lblerror_"+ci);
			//des = des.replace(/label_child_1/g,"label_child_"+ci);
			//var str = '<span id="tblRoom'+ci+'">'+des+'</span>';
			$('#listRoom').append(des);
			$("select[rel='adult']").change(function() {
		        textroom();
		    });
			$("select[rel='child']").change(function() {
		        textroom();
		    });
			$("select[rel='infant']").change(function() {
		        textroom();
		    });
		}
	}
	else if(count > room) {
		for(i=0;i<count-room;i++) {
			var roomid = count - i;
			$('#tblroom'+roomid).remove();
		}
	}
	$('#count').val(room);
}
function click_popup(z){
    $('#click_popup'+z).trigger("click");
}
function show_r(){
   $('.show-more-rv #show_r').hide();
   $('.customer-like > ul').css({"height":"auto","overflow":"inherit"});
   $('.show-more-rv #hide_r').show();
}
function hide_r(){
   $('.show-more-rv #show_r').show();
   $('.customer-like > ul').css({"height":"200px","overflow":"hidden"});
   $('.show-more-rv #hide_r').hide();
}
function show_hl(){
   $('.show-more-rv #show_r').hide();
   $('.content-halong-info').css({"height":"auto","overflow":"inherit"});
   $('.show-more-rv #hide_r').show();
}
function hide_hl(){
   $('.show-more-rv #show_r').show();
   $('.content-halong-info').css({"height":"292px","overflow":"hidden"});
   $('.show-more-rv #hide_r').hide();
}
function tab_desti(id){
    $("html,body").animate({scrollTop: $("#"+id).offset().top-100},5000);
}
function review_tour(text,id){
    $('.tab-detail-tour').hide();
    $('.nav-tabs-one li').removeClass('active');
    $('#'+text).addClass('active');
    $('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');
    $('.tab-review-tour').show();
    $('.tab-review-tour').html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
       type: "GET",
       url:SITE_URL+"/ajax-tour.php?mod=review_tour&id="+id,
       cache: false,
       success:function(xml){
            $('.tab-review-tour').html(xml);
       }
    });
}
function showmorereview(id,page){
    $('#show'+page).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=showreview&page="+page+"&id="+id,
        success:function(xml){
            $("#show"+page).html(xml);
        }
    });
}
function q_answers(text,id,show_id){
    $('.nav-tabs-one li').removeClass('active');
    $("#"+text).addClass("active");
    $(".tab-detail-tour").hide();
    $(".tab-pane.fade").hide();
    /*$('html,body').animate({scrollTop:$(".tab-content").offset().top-60},'slow');*/
    $("."+show_id).show();
    $("."+show_id).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=q_answers&id="+id+"&text="+text,
        success:function(xml){
            $("."+show_id).html(xml);
        }
    });
}
function showfaq(text,id,page){
    $('#show'+page).html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=showfaq&page="+page+"&id="+id+"&text="+text,
        success:function(xml){
            $("#show"+page).html(xml);
        }
    });
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
function seaplane(){
    $.ajax({
        type: "GET",
        url: SITE_URL+'/ajax-process.php?mod=seaplane',
        success:function(xml){
            $('#content-ajax-header').html(xml);
        }
    });
}
function foodietour(){
    $.ajax({
        type: "GET",
        url: SITE_URL+'/ajax-process.php?mod=foodietour',
        success:function(xml){
            $('#content-ajax-header').html(xml);
        }
    });
}
function ajax_best_selling(name_link){
    $('.check-best-selling li a').removeClass('active');
    $('.ajax-best-selling').html("<p style='width: 100%;float: left;text-align: center;'><img width='70' src='"+SITE_URL_IMG+"load_vtc.gif' /></p>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-suplier.php?mod=ajax_best_selling&name_link="+name_link,
        success:function(xml){
            $('.ajax-best-selling').html(xml);
        }
    });
}
function show_more_blog(cat_id,page){
    $("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-process.php?mod=show_more_blog&cat_id="+cat_id+"&page="+page,
        success:function(xml){
            $("#show"+page).html(xml);
        },error:function(){

        }
    });
}
function show_more_tours_top_10(page){
    $("#show"+page).html("<div style='width: 70px;margin: auto;'><img src='"+SITE_URL_IMG+"load_vtc.gif' /></div>");
    $.ajax({
        type:"GET",
        url:SITE_URL+"/ajax-tour.php?mod=show_more_tours_top_10&p="+page,
        success:function(xml){
            $("#show"+page).html(xml);
        },error:function(){

        }
    });
}
//New
function gui_yeu_cau(room_name){
	if($(".calendar-input").val()==""){
		$(".calendar-input").datepicker('setDate', '+1d');//+1 ngay neu khong chon ngay
	}
    iti       = $(".div_package span").html();
	depar     = $("#check_in").val();
	check_out = $("#check_out").val();
	person    = $("#ip-room").val();
	str       = "";
	if(iti!="Các lịch trình của du thuyền"&&iti!=undefined){
		str = iti+ "\n";
	}
	if(room_name!=''){
	    str = str + room_name + "\n";
	}
	str = str+person;
	str = str + "\n----------\n";
	if(check_out==undefined){
		str = str + "Ngày khởi hành: " + depar;
	}else{//Neu la khach san
		str = str + "Ngày đặt phòng: " + depar + " Đến "+check_out;
	}
	$("#f_question").val(str);
	setTimeout(function (){
	$("#f_question").focus();
	}, 1000);

}
function gui_yeu_cau_tour(t_name){
	if($(".calendar-input").val()==""){
		$(".calendar-input").datepicker('setDate', '+1d');//+1 ngay neu khong chon ngay
	}
	depar  = $("#check_in").val();
	adult  = $("#adult1").val();
	child  = $("#child1").val();
	infant = $("#infant1").val();

	dura = $("#tour_duration").val();
	str = t_name + " - " + dura + " Ngày\n";
	str=str+ adult+" Người lớn";
	if(child>0){
		str=str+" ,"+child+" Trẻ em";
	}
	if(infant>0){
		str=str+" ,"+infant+" Em bé";
	}

	str = str + "\n----------\n";
	str = str + "Ngày khởi hành: " + depar;

	$("#f_question").val(str);
	setTimeout(function (){
	$("#f_question").focus();
	}, 1000);

}
function more_the_act(){
    if($(".the-act").length){
        $("#the-act").removeClass("the-act");
        $(".view-the-act a").html("Ẩn Hoạt Động &#8630;");
        $('.view-the-act a').prop('title', 'Ẩn Hoạt Động Du Thuyền Hạ Long');
    }else{
        $("#the-act").addClass("the-act");
        $(".view-the-act a").html("Click Để Xem Thêm... &#8631;");
        $('.view-the-act a').prop('title', 'Xem Thêm Các Hoạt Động Du Thuyền');
    }
}
function more_the_why(){
    if($(".the-why").length){
        $("#the-why").removeClass("the-why");
        $(".view-the-why a").html("Ẩn Nội Dung... &#8630;");
        $('.view-the-why a').prop('title', 'Ẩn Nội Dung');
    }else{
        $("#the-why").addClass("the-why");
        $(".view-the-why a").html("Click Để Xem Thêm... &#8631;");
        $('.view-the-why a').prop('title', 'Xem Thêm');
    }
}
function quickcontq_popup_g(){
    name=document.getElementById('g_name').value;
    //email=document.getElementById('g_mail').value;
    email = "";
    phone=document.getElementById('g_phone').value;
    ques=document.getElementById('g_question').value;
    ques = encodeURIComponent(ques);
    //check_letter=document.getElementById('g_dang_ky').checked;
    //country=document.getElementById('g_country').value;
    if(ques==""||ques=="Type your request here..."){
        $("#g_message").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Yêu cầu</b>!</font>");
        return;
    }
    if(name==""||name=="Name"){
        $('#g_name').css("border", "1px solid red");
        //$("#g_message").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Tên</b>!</font>");
        return;
    }else {
        $('#g_name').css("border", "1px solid #dceaea");
    }
    if(phone==""||phone=="Phone"){
        $('#g_phone').css("border", "1px solid red");
        //$("#g_message").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>Số Điện Thoại</b>!</font>");
        return;
    }else {
        $('#g_phone').css("border", "1px solid #dceaea");
    }
    /*if(check_letter==true){
        check_letter = 1;
    }else{
        check_letter = 0;
    }*/
    check_letter = 1
    /*mail=check_email2('g_mail');
    if(mail==false){
        $("#message").html("<font style='color:red; font-size:14px;'>&nbsp;&nbsp;&nbsp;Vui lòng nhập <b>email</b>!</font>");
        return;
    }*/
$("#g_process").html("<div style='width: 40px;height: 40px;margin: auto; border-right: 3px solid #59c45a;border-bottom: 3px solid transparent;border-radius: 100%;-webkit-animation: spin .9s linear infinite;-moz-animation: spin .9s linear infinite;-o-animation: spin .9s linear infinite;animation: spin .9s linear infinite;'></div><div style='width:100%;float: left;text-align: center;'><p>Vui lòng đợi trong giây lát...</p></div>");$.ajax({type:"GET",url:SITE_URL+"/ajax-process.php?mod=g_popup&fullname="+name+"&phone="+phone+"&email="+email+"&ques="+ques+"&check_letter="+check_letter,success:function(xml){var arr_html=xml.split('|');if(arr_html[1]=="ok"){window.location = SITE_URL+'/success.html';/*$(".g_signin").html(arr_html[0]);*/}else{$("#message").html(arr_html[0]);}},error:function(){}});}
//***Lazy
var check_scroll = false;
$(document).mouseover(function(){
	if(check_scroll==false){
		check_scroll = true;
		if($('img').length>0){
			let i_lazy = $('img').length;
			for (let i=0; i<i_lazy; i++){
				if($('img').eq(i).attr('src') == '#'){
					$('img').eq(i).attr('src',$('img').eq(i).attr('data-img'));
				}
			}
		}
	}
});
$(document).scroll(function(){
	if(check_scroll==false){
		check_scroll = true;
		if($('img').length>0){
			let i_lazy = $('img').length;
			for (let i=0; i<i_lazy; i++){
				if($('img').eq(i).attr('src') == '#'){
					$('img').eq(i).attr('src',$('img').eq(i).attr('data-img'));
				}
			}
		}
	}
});