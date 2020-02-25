$(function () {
    'use strict'
    /*jslint browser: true */
    /*global window */
    var nav1Height;
    $('.ca-menu>li').height($('.ca-menu>li').width());
    $('.sub-menu').width($('.ca-menu').width() * 0.9);
    $('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
    if ($('body').width() > 767) {
        //$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').removeClass('dropdown-toggle').removeAttr('data-toggle');
        $('.navbar-nav > li a, .nav-item').height($('body').width() * 0.105 * 448 / 1357);
        $(window).bind('scroll', function () {
            nav1Height = $('#nav-1').height() + 100;
            if ($(this).scrollTop() > nav1Height) {
                $('#nav-2').css({
                    'display': 'block',
                    '-webkit-animation': 'moveFromTop 800ms ease',
                    '-moz-animation': 'moveFromTop 800ms ease',
                    '-ms-animation': 'moveFromTop 800ms ease'
                });
            } else {
                $('#nav-2').css('display', 'none');
            }
        });
    } else {
        $('.nav-item, #nav-2, .navbar-nav > li a').removeAttr('style');
        $('#fixed-nav2').height($('#nav-2').outerHeight());
        $('#navcol-1 .dropdown>.nav-link, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle');
        $(window).unbind('scroll');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    let thisUrl = location.href;
    if(thisUrl.search('login') != -1){
        $('.btn-login').click();
    } else if ($('#loginErrorMsg').length && !$('.error-regis').length) {
        $('.btn-login').click();
    }
    $('.box-logined .dropdown-toggle').click(function(){
        $(this).next('ul').toggle(300);
    });
    if ($('body').width() <= 767) {
        $('.navbar-toggler').click(function(){
            $('#navcol-1').slideToggle(300);
        });
        $('body').click(function(e){
            if (!$('#navcol-1,.navbar-toggler').is(e.target) && $('#navcol-1,.navbar-toggler').has(e.target).length === 0) {
                $('#navcol-1').slideUp(300);
            }
        });
        $('#navcol-1 .dropdown>.nav-link').click(function(){
            $(this).next('.dropdown-menu').slideToggle(300);
        });
    }
    $('body').click(function(e){
        if (!$('.box-logined').is(e.target) && $('.box-logined').has(e.target).length === 0) {
            $('.box-logined ul').hide(300);
        }
    });
});

