$(document).ready(function() {
    let i, a, b, c;
    $('.about').css('--height',`${$('.about img').height()}px`);
    for (i=0; i < $('.about').length; i++) {
        b = '#lesson-' + (i+1);
        a = $('.about').eq(i);

        if ($(location).attr('hash') != b) {
            a.toggleClass('lego');
            a.children('.content').toggle();
        } /*else {
            c = $('.about h2').eq(i).text().slice(0,1) + $('.about h2').eq(i).text().slice(1).toLowerCase();
            $('.link a:last-child').text(c);
        }*/
    }
    for (i=0; i < $('.togg').length; i++) {
        a = $('.togg').eq(i);
        if (a.closest('.about').children('.content').css('display') == 'none') {
            a.children(".minus").css('display', 'block');
            a.children(".plus").css('display', 'none');
        } else {
            a.children(".minus").css('display', 'none');
            a.children(".plus").css('display', 'block');
        }
    }
    $('.togg').bind('click', function(){
        $(this).closest('.about').children('.content').slideToggle(600,'linear');
        $(this).closest('.about').toggleClass('lego');
        $(this).children(".minus").toggle();
        $(this).children(".plus").toggle();
    });
    $(window).bind('resize', function(){
        $('.about').css('--height',`${$('.about img').height()}px`);
    });

    // load dữ liệu từ JSON
    /*$.ajax({
        dataType: 'json',
        url: 'data/lesson/demo/language-page-2.json',
        success: function(response) {
            let data = JSON.parse(response);
            for (i=0; i < data['listLesson'].length; i++) {
                $('#lesson-1 .text').append(data['listLesson'][i]);
            }
            for (i=0; i < data['hotLesson'].length; i++) {
                $('#lesson-1 aside').append(data['hotLesson'][i])
            }
            
        },
        error: function() {
            alert('lỗi load dữ liệu');
        }
    });*/
});
$(document).ready(function () {
        var data;
        $.ajax({
            dataType: "json",
            url: 'data/lesson/demo/language-page-2.json',
            data: data,
            success: function (data) {
                // begin accessing JSON data here
                console.log(data.listLesson[0]);
            }
        });
    });