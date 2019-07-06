$(document).ready(function() {
    let i, a, b, c,z, j=0;
    $('.about').css('--height',`${$('.about img').height()}px`);
    for (i=0; i < $('.about').length; i++) {
        b = '#videos-' + (i+1);
        a = $('.about').eq(i);

        if ($(location).attr('hash') != b) {
            a.toggleClass('lego');
            a.children('.content').toggle();
        }
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
                // dataType: 'json',
                url: `data/demo/videos/${y}.json`})
                .done(function(data) {
                    let response = JSON.parse(data);
                    $(`#videos-${x} .media .articles`).html('');
                    $(`#videos-${x} aside`).html('<h5>NHIỀU LƯỢT XEM NHẤT</h5>');
                    for (i=0; i < response.link.length; i++) {
                        $(`#videos-${x} .media .articles`).append(`
                            <div class="col-sm-6 col-md-4 item">
                                <iframe width="100%" src="${response.link[i].src}" frameborder="0" allowfullscreen></iframe>
                                <a target="_blank" href="${response.link[i].src}"><h3 class="name">${response.link[i].h3}</h3></a>
                                <div class="interactive">
                                    <div class="date">${response.link[i].date}</div>
                                    <div class="view">
                                        <p><span></span> ${response.link[i].seen}</p>
                                        <p><span></span> ${response.link[i].cmt}</p>
                                    </div>
                                </div>
                            </div>
                            `);
                    }
                    for (i=0; i < response.hot.length; i++) {
                        $(`#videos-${x} aside`).append(`
                            <div class="hot-pic">
                                <a target="_blank" href="${response.hot[i].src}"><h6>${response.hot[i].h6}</h6></a>
                                <div class="view">
                                    <p><span></span> ${response.hot[i].seen}</p>
                                    <p><span></span> ${response.hot[i].cmt}</p>
                                </div>
                            </div>
                            `);
                    }
                    $(`#videos-${x} aside`).append(`<div>...</div>`);
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

    for (i=0; i < $('.number a').length; i++) {
        $($('.number a')[i]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.number').addClass("active");
        });
    }

    /*for (j=0; j < $('#videos-1 .number a').length; j++) {
        $($('#videos-1 .number a')[j]).on('click', function() {
            loadJson(1, dataList.jsonLanguage[j]);
        });
    }*/
    $($('#videos-1 .number a')[0]).on('click', function() {
        loadJson(1, dataList[jsonListName[0]][0]);
    });
    $($('#videos-1 .number a')[1]).on('click', function() {
        loadJson(1, dataList[jsonListName[0]][1]);
    });
    $($('#videos-2 .number a')[0]).on('click', function() {
        loadJson(2, dataList[jsonListName[1]][0]);
    });
    $($('#videos-2 .number a')[1]).on('click', function() {
        loadJson(2, dataList[jsonListName[1]][1]);
    });
    $($('#videos-3 .number a')[0]).on('click', function() {
        loadJson(3, dataList[jsonListName[2]][0]);
    });
    $($('#videos-3 .number a')[1]).on('click', function() {
        loadJson(3, dataList[jsonListName[2]][1]);
    });
    $($('#videos-4 .number a')[0]).on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $($('#videos-4 .number a')[1]).on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $($('#videos-5 .number a')[0]).on('click', function() {
        loadJson(5, dataList[jsonListName[4]][0]);
    });
    $($('#videos-5 .number a')[1]).on('click', function() {
        loadJson(5, dataList[jsonListName[4]][1]);
    });
    $($('#videos-6 .number a')[0]).on('click', function() {
        loadJson(6, dataList[jsonListName[5]][0]);
    });
    $($('#videos-6 .number a')[1]).on('click', function() {
        loadJson(6, dataList[jsonListName[5]][1]);
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
    $('#videos-1 ul li:first-child a').on('click', function() {
        loadJson(1, dataList[jsonListName[0]][0]);
    });
    $('#videos-1 ul li:last-child a').on('click', function() {
        loadJson(1, dataList[jsonListName[0]][1]);
    });
    $('#videos-2 ul li:first-child a').on('click', function() {
        loadJson(2, dataList[jsonListName[1]][0]);
    });
    $('#videos-2 ul li:last-child a').on('click', function() {
        loadJson(2, dataList[jsonListName[1]][1]);
    });
    $('#videos-3 ul li:first-child a').on('click', function() {
        loadJson(3, dataList[jsonListName[2]][0]);
    });
    $('#videos-3 ul li:last-child a').on('click', function() {
        loadJson(3, dataList[jsonListName[2]][1]);
    });
    $('#videos-4 ul li:first-child a').on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $('#videos-4 ul li:last-child a').on('click', function() {
        loadJson(4, dataList[jsonListName[3]][1]);
    });
    $('#videos-5 ul li:first-child a').on('click', function() {
        loadJson(5, dataList[jsonListName[4]][0]);
    });
    $('#videos-5 ul li:last-child a').on('click', function() {
        loadJson(5, dataList[jsonListName[4]][1]);
    });
    $('#videos-6 ul li:first-child a').on('click', function() {
        loadJson(6, dataList[jsonListName[5]][0]);
    });
    $('#videos-6 ul li:last-child a').on('click', function() {
        loadJson(6, dataList.jsonScience[1]);
    });
});
