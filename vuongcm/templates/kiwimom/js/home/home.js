+function ($) {
    'use strict';
    $('#myCarousel').carousel({
        interval: 3000
    });

    $('#myCarousel-product').carousel({
        interval: 5000
    });

    $('.search-container select').outerHeight($('.search-container input').outerHeight());

    $('#article-3 .banner .icon:nth-child(2)').css('top', 'calc(46% - ${0.5 * $("#article-3 .banner .icon:nth-child(2)").outerHeight()}px)');

    $('iframe').height($('iframe').width() * 2 / 3);

    $(window).bind('resize', function () {
        $('.search-container select').outerHeight($('.search-container input').outerHeight());

        $('#article-3 .banner .icon:nth-child(2)').css('top', 'calc(46% - ${0.5 * $("#article-3 .banner .icon:nth-child(2)").outerHeight()}px)');
        $('iframe').height($('iframe').width() * 2 / 3);
    });
}(jQuery);
