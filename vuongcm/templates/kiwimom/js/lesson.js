$(document).ready(function() {
    let a, b, c,z;
    $('.about').css('--height',`${$('.about img').height()}px`);
    for (let i=0; i < $('.about').length; i++) {
        b = '#banner-lesson-' + (i+1);
        a = $('.about').eq(i);

        if ($(location).attr('hash') != b) {
            a.toggleClass('lego');
            a.children('.content').toggle();
        } /*else {
            c = $('.about h2').eq(i).text().slice(0,1) + $('.about h2').eq(i).text().slice(1).toLowerCase();
            $('.link a:last-child').text(c);
        }*/
        if ($(location).attr('hash') == '#banner-lesson-3') {
            $("html, body").animate({ scrollTop: 300 }, 0);
        } else if ($(location).attr('hash') == '#banner-lesson-2') {
            $("html, body").animate({ scrollTop: 200 }, 0);
        } else if ($(location).attr('hash') == '#banner-lesson-4') {
            $("html, body").animate({ scrollTop: 400 }, 0);
        }
    }
    for (let i=0; i < $('.togg').length; i++) {
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
    let dataList = {
        jsonLanguage: ['language-page-1','language-page-2'],
        jsonLogic: ['logic-page-1','logic-page-2'],
        jsonMotor: ['motor-page-1','motor-page-2'],
        jsonMusic: ['music-page-1','music-page-2'],
        jsonSkill: ['skill-page-1','skill-page-2'],
        jsonScience: ['science-page-1','science-page-2']
    };
    let jsonListName = ['jsonLanguage','jsonLogic','jsonMotor','jsonMusic','jsonSkill','jsonScience'];
    let loadJson = function(x, y) {
            $.ajax({
                dataType: 'json',
                url: `data/demo/lesson/${y}.json`})
                .done(function(response) {
                    //let response = JSON.parse(data);
                    $(`#lesson-${x} .text`).html('');
                    $(`#lesson-${x} aside`).html('<h5>NHIỀU LƯỢT XEM NHẤT</h5>');
                    for (let i=0; i < response.user.length; i++) {
                        $(`#lesson-${x} .text`).append(`<div><a href="${response.user[i].a}"><h5>${response.user[i].h5}</h5></a><p>${response.user[i].p}<a href="${response.user[i].a}">xem thêm.</a></p>`);
                    }
                    for (let i=0; i < response.hot.length; i++) {
                        $(`#lesson-${x} aside`).append(`<div class="hot-pic"><a href="${response.hot[i].a}"><h6>${response.hot[i].h6}</h6></a><div class="view"><p><span></span> ${response.hot[i].seen}</p><p><span></span> ${response.hot[i].cmt}</p></div></div>`);
                    }
                    $(`#lesson-${x} aside`).append(`<div>...</div>`);
                })
                .fail(function() {
                    alert('lỗi load dữ liệu');
                });
        }

    loadJson(1,dataList.jsonLanguage[0]);
    loadJson(2,dataList.jsonLogic[0]);
    loadJson(3,dataList.jsonMotor[0]);
    loadJson(4,dataList.jsonMusic[0]);
    loadJson(5,dataList.jsonSkill[0]);
    loadJson(6,dataList.jsonScience[0]);

    for (let i=0; i < $('.number a').length; i++) {
        $($('.number a')[i]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.number').addClass("active");
        });
    }

    for (let j=0; j < $('#lesson-1 .number a').length; j++) {
        $($('#lesson-1 .number a')[j]).on('click', function() {
            loadJson(1, dataList[jsonListName[0]][j]);
        });
    }

    for (let j=0; j < $('#lesson-2 .number a').length; j++) {
        $($('#lesson-2 .number a')[j]).on('click', function() {
            loadJson(2, dataList[jsonListName[1]][j]);
        });
    }

    for (let j=0; j < $('#lesson-3 .number a').length; j++) {
        $($('#lesson-3 .number a')[j]).on('click', function() {
            loadJson(3, dataList[jsonListName[2]][j]);
        });
    }

    for (let j=0; j < $('#lesson-4 .number a').length; j++) {
        $($('#lesson-4 .number a')[j]).on('click', function() {
            loadJson(4, dataList[jsonListName[3]][j]);
        });
    }

    for (let j=0; j < $('#lesson-5 .number a').length; j++) {
        $($('#lesson-5 .number a')[j]).on('click', function() {
            loadJson(5, dataList[jsonListName[4]][j]);
        });
    }

    for (let j=0; j < $('#lesson-6 .number a').length; j++) {
        $($('#lesson-6 .number a')[j]).on('click', function() {
            loadJson(6, dataList[jsonListName[5]][j]);
        });
    }


    for (let j=0; j<6; j++) {
        $($('.content ul li:first-child a')[j]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.page-item').next().addClass("active");
        });
        $($('.content ul li:last-child a')[j]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.page-item').prev().addClass("active");
        });
    }

    for (let j=0; j < 6; j++) {
        $(`#lesson-${j+1} ul li:first-child a`).on('click', function() {
            loadJson((j+1), dataList[jsonListName[j]][0]);
        });
    }

    let amountPage;
    for (let j=0; j < 6; j++) {
        amountPage = $(`#lesson-${j+1} .number`).length - 1;
        $(`#lesson-${j+1} ul li:last-child a`).on('click', function() {
            loadJson((j+1), dataList[jsonListName[j]][amountPage]);
        });
    }

    // =====
    for (let i=0; i < 6; i++){
        if (window.location.href.indexOf('lesson.html') != -1) {
            $('.sub-menu-1 a').eq(i).attr('target', '_blank');
            $('#navcol-1 .dropdown-menu a').eq(i).attr('target', '_blank');
        }

    }

});
