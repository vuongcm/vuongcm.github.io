// Khai báo hàm cập nhật số lượng và tổng giá

// Khai báo hàm xử lý chuỗi số
let spinalCase = function(str) {
    str = str.trim();
    for (let i=0; i <= str.length; i++) {
        if (str[i] == '.') {
            str = str.slice(0,i) + '' + str.slice(i+1);
        }
    }
    return str;
}
// Khai báo hàm thêm đơn vị và giá
let fixPrice = function(number) {
    let str = String(number);
    let subStr = 'đ';
    let x;
    if (str.length % 3 == 0) {
        x = str.length/3 -1;
    } else {
        x = Math.floor(str.length/3)
    }
    for (let i=0; i < x; i++) {
        subStr = '.' + str.slice(-3)  + subStr
        str = str.slice(0,-3);
    }
    subStr = str + subStr;
    return subStr;
}
/* Update số lượng */
let fadeTime = 300;
function updateQuantity(quantityInput) {
  let productRow = $(quantityInput).parent().parent();
  let getNumber = spinalCase(productRow.children('.price').text());
  let price = parseFloat(getNumber);
  let quantity = $(quantityInput).val();
  let linePrice = price * quantity;
   
  /* Update tổng giá mặt hàng*/
  productRow.children('.subTotal').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(fixPrice(linePrice));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}
 
/* Xóa mặt hàng */
function removeItem(removeButton) {
  let productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
/* Recalculate cart */
function recalculateCart(){
  let subtotal = 0;
   
  /* Sum up row totals */
  for (let i=0; i < $('.product').length; i++) {
    subtotal += parseFloat(spinalCase($('.product').eq(i).children('.subTotal').text()));
  }
  
  /* Calculate totals */
  let shipping = parseFloat(spinalCase($('tfoot .ship').text()));
  let total = subtotal + shipping;
  let discount = parseFloat(spinalCase($('#result div>p:nth-child(2) span').text()));
  /* Update totals display */
  $('#result div>p:first-child span').fadeOut(fadeTime, function() {
    $('#result div>p:first-child span').text(fixPrice(total))
    $('#result div>p:first-child span').fadeIn(fadeTime);
  });
  $('#result div>p:last-child span').fadeOut(fadeTime, function() {
    $('#result div>p:last-child span').text(fixPrice(total-discount))
    $('#result div>p:last-child span').fadeIn(fadeTime);
  });
} 
$(document).ready(function() {
    let a, b;
    $('.about').css('--height',`${$('.about img').height()}px`);

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
        $(this).children(".minus").toggle();
        $(this).children(".plus").toggle();
    });

    $('#box-pay select').height($('#box-pay input[type="text"]').height());
    $(window).bind('resize', function(){
        $('.about').css('--height',`${$('.about img').height()}px`);
        $('#box-pay select').height($('#box-pay input[type="text"]').height());
    });


    // ==== tự động update giỏ hàng=====


    $('#box-cart input').change( function() {
      updateQuantity(this);
    });
     
    $('#box-cart tbody button').click( function() {
      removeItem(this);
    });
     
// ========= sự kiện checked

    $('#checkBox').on('click', function () {
        if (this.checked){
            $('#infoShip input[name="nameReceiver"]').val($('#infoCustomer input[name="nameOder"]').val());
            $('#infoShip input[name="phoneReceiver"]').val($('#infoCustomer input[name="phoneOder"]').val());
            $('#infoShip input[name="addressReceiver"]').val($('#infoCustomer input[name="addressOder"]').val());
            $('#infoShip select').val($('#infoCustomer select').val());
            $('#infoShip input[type="text"], #infoShip input[type="tel"], #infoShip select').attr('disabled', 'disabled');
        } else {
            $('#infoShip input[type="text"], #infoShip input[type="tel"], #infoShip select').removeAttr('disabled');
            $('#infoShip input[name="nameReceiver"]').val('');
            $('#infoShip input[name="phoneReceiver"]').val('');
            $('#infoShip input[name="addressReceiver"]').val('');
            $('#infoShip select').val('');
        }
    });
// sự kiện submit
    let confirm = function() {
        let test = true;
        let input1 = $('#box-pay input[type="text"],#box-pay input[type="tel"],#box-pay input[type="email"], #box-pay select');
        let input2 = $('#box-pay input[type="radio"]');
        for (let i=0; i < input1.length; i++) {
            if (input1.eq(i).val() == '') {
                test = false;
                break;
            }
            if (input2.eq(0).prop('checked') == false && input2.eq(1).prop('checked') == false) {
                test = false;
                break;
            }
        }
        console.log(test);
        return test;
    }
     $('#ok').on('click', function() {
        let test2 = confirm();
        if (confirm() == true) {
            $('#box-pay').submit();
        } else {
            $('#confirmModal p').text('Bạn chưa điền đủ thông tin')
            $('#ok').attr('disabled','true');
            $('#ok').css({'background-color': '#5a5050','opacity':'1'});
        }
     });
     
     $('#submitButton').on('click',function() {
        $('#box-pay').one('submit', function(event){
            event.preventDefault();
        });
        $('#confirmModal p').text('Bạn chắc chắn muốn đặt đơn hàng này')
            $('#ok').removeAttr('disabled');
            $('#ok').removeAttr('style');
     });


});