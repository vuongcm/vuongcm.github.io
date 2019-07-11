$(document).ready(function() {
    let a, b, c,z;

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
    let loadJson = function(y) {
            $.ajax({
                dataType: 'json',
                url: `data/demo/shop/${y}.json`})
                .done(function(response) {
                    // let response = JSON.parse(data);
                    $(`.product .row`).html('');
                    $(`#shop aside`).html('<h5>SẢN PHẨM BÁN CHẠY</h5>');
                    for (let i=0; i < response.product.length; i++) {
                        $(`.product .row`).append(`
                            <div class="col-lg-3 col-sm-4 col-xs-6">
                                <a href="product.html#${response.product[i].id}">
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
                    for (let i=0; i < response.hot.length; i++) {
                        $(`#shop aside`).append(`
                            <div class="hot-product">
                                <a href="product.html#${response.hot[i].id}">
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
                    // thêm vào giỏ
                    $('.thumbnail button').click(function(event){
                        event.preventDefault();
                        $('.cart-no').text(Number($('.cart-no').text())+1);
                    });
                })
                .fail(function() {
                    alert('lỗi load dữ liệu');
                });
        };

    loadJson(dataListProduct[0]);

    for (let i=0; i < $('.number a').length; i++) {
        $($('.number a')[i]).on('click', function() {
            $(this).closest('ul').children('.number').removeClass("active");
            $(this).parent('.number').addClass("active");
        });
    }

    for (let j=0; j < $('#shop .number a').length; j++) {
        $($('#shop .number a')[j]).on('click', function() {
            loadJson(dataListProduct[j]);
        });
    }

    $('.content ul li:first-child a').on('click', function() {
        $(this).closest('ul').children('.number').removeClass("active");
        $(this).parent('.page-item').next().addClass("active");
    });
    $('.content ul li:last-child a').on('click', function() {
        $(this).closest('ul').children('.number').removeClass("active");
        $(this).parent('.page-item').prev().addClass("active");
    });
    
    $('#shop ul li:first-child a').on('click', function() {
        loadJson(dataListProduct[0]);
    });

    let amountPage = $(`#shop .number`).length - 1;
    $('#shop ul li:last-child a').on('click', function() {
        loadJson(dataListProduct[amountPage]);
    });

});
