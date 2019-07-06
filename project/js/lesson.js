$(document).ready(function() {
    let i, a, b, c,z, j=0;
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
                    for (i=0; i < response.user.length; i++) {
                        $(`#lesson-${x} .text`).append(`<div><a href="${response.user[i].a}"><h5>${response.user[i].h5}</h5></a><p>${response.user[i].p}<a href="${response.user[i].a}">xem thêm.</a></p>`);
                    }
                    for (i=0; i < response.hot.length; i++) {
                        $(`#lesson-${x} aside`).append(`<div class="hot-pic"><a href="${response.hot[i].a}"><h6>${response.hot[i].h6}</h6></a><div class="view"><p><span></span> ${response.hot[i].seen}</p><p><span></span> ${response.hot[i].cmt}</p></div></div>`);
                    }
                    $(`#lesson-${x} aside`).append(`<div>...</div>`);
                })
                .fail(function() {
                    alert('lỗi load dữ liệu');
                });
        }
    function clickPageNumber(x) {
        $('.number').eq(x).closest('ul').children('.number').removeClass('active');
        $('.number').eq(x).addClass('active');
    };
    loadJson(1,dataList.jsonLanguage[0]);
    loadJson(2,dataList.jsonLogic[0]);
    loadJson(3,dataList.jsonMotor[0]);
    loadJson(4,dataList.jsonMusic[0]);
    loadJson(5,dataList.jsonSkill[0]);
    loadJson(6,dataList.jsonScience[0]);

    for (i=0; i < $('.number a').length; i++) {
        $($('.number a')[i]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.number').addClass("active");
        });
    }

    /*for (j=0; j < $('#lesson-1 .number a').length; j++) {
        $($('#lesson-1 .number a')[j]).on('click', function() {
            loadJson(1, dataList.jsonLanguage[j]);
        });
    }*/
    $($('#lesson-1 .number a')[0]).on('click', function() {
        loadJson(1, dataList[jsonListName[0]][0]);
    });
    $($('#lesson-1 .number a')[1]).on('click', function() {
        loadJson(1, dataList[jsonListName[0]][1]);
    });
    $($('#lesson-2 .number a')[0]).on('click', function() {
        loadJson(2, dataList[jsonListName[1]][0]);
    });
    $($('#lesson-2 .number a')[1]).on('click', function() {
        loadJson(2, dataList[jsonListName[1]][1]);
    });
    $($('#lesson-3 .number a')[0]).on('click', function() {
        loadJson(3, dataList[jsonListName[2]][0]);
    });
    $($('#lesson-3 .number a')[1]).on('click', function() {
        loadJson(3, dataList[jsonListName[2]][1]);
    });
    $($('#lesson-4 .number a')[0]).on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $($('#lesson-4 .number a')[1]).on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $($('#lesson-5 .number a')[0]).on('click', function() {
        loadJson(5, dataList[jsonListName[4]][0]);
    });
    $($('#lesson-5 .number a')[1]).on('click', function() {
        loadJson(5, dataList[jsonListName[4]][1]);
    });
    $($('#lesson-6 .number a')[0]).on('click', function() {
        loadJson(6, dataList[jsonListName[5]][0]);
    });
    $($('#lesson-6 .number a')[1]).on('click', function() {
        loadJson(6, dataList.jsonScience[1]);
    });
    for (j=0; j<6; j++) {
        $($('.content ul li:first-child a')[j]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.page-item').next().addClass("active");
        });
        $($('.content ul li:last-child a')[j]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.page-item').prev().addClass("active");
        });
    }
    $('#lesson-1 ul li:first-child a').on('click', function() {
        loadJson(1, dataList[jsonListName[0]][0]);
    });
    $('#lesson-1 ul li:last-child a').on('click', function() {
        loadJson(1, dataList[jsonListName[0]][1]);
    });
    $('#lesson-2 ul li:first-child a').on('click', function() {
        loadJson(2, dataList[jsonListName[1]][0]);
    });
    $('#lesson-2 ul li:last-child a').on('click', function() {
        loadJson(2, dataList[jsonListName[1]][1]);
    });
    $('#lesson-3 ul li:first-child a').on('click', function() {
        loadJson(3, dataList[jsonListName[2]][0]);
    });
    $('#lesson-3 ul li:last-child a').on('click', function() {
        loadJson(3, dataList[jsonListName[2]][1]);
    });
    $('#lesson-4 ul li:first-child a').on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $('#lesson-4 ul li:last-child a').on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $('#lesson-5 ul li:first-child a').on('click', function() {
        loadJson(5, dataList[jsonListName[4]][0]);
    });
    $('#lesson-5 ul li:last-child a').on('click', function() {
        loadJson(5, dataList[jsonListName[4]][1]);
    });
    $('#lesson-6 ul li:first-child a').on('click', function() {
        loadJson(6, dataList[jsonListName[5]][0]);
    });
    $('#lesson-6 ul li:last-child a').on('click', function() {
        loadJson(6, dataList.jsonScience[1]);
    });
});
