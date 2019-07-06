$(document).ready(function() {
    let i, a, b, c,z, j=0;

    $('#shop').css('min-height','25vh');
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

    // load dữ liệu từ JSON
    let dataListProduct = ['product-page-1','product-page-2'];
    let loadJsonProduct = function(y) {
            $.ajax({
                dataType: 'json',
                url: `data/demo/shop/${y}.json`})
                .done(function(response) {
                    // let response = JSON.parse(data);
                    $(`.product .row`).html('');
                    $(`#shop aside`).html('<h5>SẢN PHẨM BÁN CHẠY</h5>');
                    for (i=0; i < response.product.length; i++) {
                        $(`.product .row`).append(`
                            <div class="col-lg-3 col-sm-4 col-xs-6">
                                <a href="${response.product[i].href}">
                                    <div class="thumbnail">
                                        <div>
                                            <img src="${response.product[i].src}" alt="Ảnh sản phẩm">
                                            <button>THÊM VÀO GIỎ</button>
                                        </div>
                                        <div class="caption">
                                            <h3>${response.product[i].h3}</h3>
                                            <p><span class="lineThrough">${response.product[i].price}</span><span class="textColor">${response.product[i].sale}</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `);
                    }
                    for (i=0; i < response.hot.length; i++) {
                        $(`#shop aside`).append(`
                            <div class="hot-product">
                                <a href="${response.hot[i].href}">
                                    <div class="thumbnail">
                                        <div>
                                            <img src="${response.hot[i].src}" alt="Ảnh sản phẩm">
                                            <button>THÊM VÀO GIỎ</button>
                                        </div>
                                        <div class="caption">
                                            <h3>${response.hot[i].h3}</h3>
                                            <p><span class="lineThrough">${response.hot[i].price}</span><span class="textColor">${response.hot[i].sale}</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `);
                    }
                    $(`#shop aside`).append(`<div>...</div>`);
                })
                .fail(function() {
                    alert('lỗi load dữ liệu');
                });
        };

    loadJsonProduct(dataListProduct[0]);

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
    $($('.number a')[0]).on('click', function() {
        loadJsonProduct(dataListProduct[0]);
    });
    $($('.number a')[1]).on('click', function() {
        loadJsonProduct(dataListProduct[1]);
    });
    $('.content ul li:first-child a').on('click', function() {
        $(this).closest('ul').children('.number').removeClass("active");
        $(this).parent('.page-item').next().addClass("active");
    });
    $('.content ul li:last-child a').on('click', function() {
        $(this).closest('ul').children('.number').removeClass("active");
        $(this).parent('.page-item').prev().addClass("active");
    });
    
    $('#shop ul li:first-child a').on('click', function() {
        loadJsonProduct(dataListProduct[0]);
    });
    $('#shop ul li:last-child a').on('click', function() {
        loadJsonProduct(dataListProduct[1]);
    });
    
});
