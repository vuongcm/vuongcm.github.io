let nav1Height;
let header = `<nav id="nav-1">
            <div class="loginBar">
                <button type="button" class="btn btn-light">Đăng nhập</button>
                <a href="#" id="signUp" class="btn btn-light">Đăng ký</a>
            </div>
            <div class="content-menu">
                <div class="logo-menu">
                    <img src="img/logo-head.png" class="img-responsive">
                </div>
                <ul class="ca-menu clr">
                    <li>
                        <a href="https://fontawesome.com/cheatsheet#use">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">TRANG CHỦ</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">GIỚI THIỆU</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ca-icon" id="heart"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">BÀI HỌC</h2>
                            </div>
                        </a>
                        <ul class="sub-menu sub-menu-1">
                            <li><a href="#">NGÔN NGỮ <br>&<br> NHẬN THỨC</a></li>
                            <li><a href="#">LOGIC <br>&<br> TOÁN HỌC</a></li>
                            <li><a href="#">VẬN ĐỘNG</a></li>
                            <li><a href="#">ÂM NHẠC <br>&<br> NGHỆ THUẬT</a></li>
                            <li><a href="#">KỸ NĂNG<br> SỐNG</a></li>
                            <li><a href="#">KHOA HỌC</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">VIDEOS</h2>
                            </div>
                        </a>
                        <ul class="sub-menu sub-menu-2">
                            <li><a href="#">NGÔN NGỮ <br>&<br> NHẬN THỨC</a></li>
                            <li><a href="#">LOGIC <br>&<br> TOÁN HỌC</a></li>
                            <li><a href="#">VẬN ĐỘNG</a></li>
                            <li><a href="#">ÂM NHẠC <br>&<br> NGHỆ THUẬT</a></li>
                            <li><a href="#">KỸ NĂNG<br> SỐNG</a></li>
                            <li><a href="#">KHOA HỌC</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">CỬA HÀNG</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">CHIA SẺ</h2>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-light navbar-expand-md navigation-clean" id="nav-2">
            <div id="test">
            <div class="loginBar">
                <button type="button" class="btn btn-light">Đăng nhập</button>
                <a href="#" id="signUp" class="btn btn-light">Đăng ký</a>
            </div>
            <div class="content-menu">
                <div class="logo-menu" class="navbar-brand">
                    <img src="img/logo-head.png" class="img-responsive">
                </div>
                
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">TRANG CHỦ</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">GIỚI THIỆU</a></li>
                        <li class="dropdown nav-item">
                            <a class="nav-link" aria-expanded="false" href="#">BÀI HỌC</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="https://thachpham.com/web-development/html-css/huong-dan-css3-flexbox-toan-tap.html">NGÔN NGỮ & NHẬN THỨC</a>
                                <a class="dropdown-item" role="presentation" href="#">LOGIC & TOÁN HỌC</a>
                                <a class="dropdown-item" role="presentation" href="#">VẬN ĐỘNG</a>
                                <a class="dropdown-item" role="presentation" href="https://thachpham.com/web-development/html-css/huong-dan-css3-flexbox-toan-tap.html">ÂM NHẠC & NGHỆ THUẬT</a>
                                <a class="dropdown-item" role="presentation" href="#">KỸ NĂNG SỐNG</a>
                                <a class="dropdown-item" role="presentation" href="#">KHOA HỌC</a>
                            </div>
                        </li>
                        <li class="dropdown nav-item">
                            <a class="nav-link" aria-expanded="false" href="#">VIDEOS</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="https://thachpham.com/web-development/html-css/huong-dan-css3-flexbox-toan-tap.html">NGÔN NGỮ & NHẬN THỨC</a>
                                <a class="dropdown-item" role="presentation" href="#">LOGIC & TOÁN HỌC</a>
                                <a class="dropdown-item" role="presentation" href="#">VẬN ĐỘNG</a>
                                <a class="dropdown-item" role="presentation" href="https://thachpham.com/web-development/html-css/huong-dan-css3-flexbox-toan-tap.html">ÂM NHẠC & NGHỆ THUẬT</a>
                                <a class="dropdown-item" role="presentation" href="#">KỸ NĂNG SỐNG</a>
                                <a class="dropdown-item" role="presentation" href="#">KHOA HỌC</a>
                            </div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">CỬA HÀNG</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">CHIA SẺ</a></li>
                    </ul>
                </div>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        </nav>`;
let footer = ``;
$(document).ready(function() {
	$('.ca-menu>li').height($('.ca-menu>li').width());
	$('.sub-menu').width($('.ca-menu').width() * 0.9);
	$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
	if ($('body').width() > 767) {
		$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').removeClass('dropdown-toggle').removeAttr('data-toggle');
		$('.navbar-nav > li a, .nav-item').height($('body').width() * 0.105 * 448 /1357);
		$(window).bind('scroll', function(){
			nav1Height = $('#nav-1').height() + 100;
	        if($(this).scrollTop() > nav1Height){
	        	$('#nav-2').css({
	        		'display':'block',
	        		'-webkit-animation':'moveFromTop 800ms ease',
	        		'-moz-animation':'moveFromTop 800ms ease',
	        		'-ms-animation':'moveFromTop 800ms ease'
	        	});
	        } else{
	            $('#nav-2').css('display','none');
	        }
    	});
	} else {
		$('.nav-item, #nav-2, .navbar-nav > li a').removeAttr('style');
		$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
		$(window).unbind('scroll');
	}
	
	$(window).bind('resize', function(){
		$('.ca-menu>li').height($('.ca-menu>li').width());
		$('.sub-menu').width($('.ca-menu').width() * 0.9);
		$('.sub-menu>li').height($('.ca-menu').width() * 0.9 * 0.19);
		if ($('body').width() > 767) {
			$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').removeClass('dropdown-toggle').removeAttr('data-toggle');
			$('.navbar-nav > li a, .nav-item').height($('body').width() * 0.105 * 448 /1357);
			$(window).bind('scroll', function(){
				nav1Height = $('#nav-1').height() + 100;
		        if($(this).scrollTop() > nav1Height){
		        	$('#nav-2').css({
		        		'display':'block',
		        		'-webkit-animation':'moveFromTop 800ms ease',
		        		'-moz-animation':'moveFromTop 800ms ease',
		        		'-ms-animation':'moveFromTop 800ms ease'
		        	});
		        } else{
		            $('#nav-2').css('display','none');
		        }
	    	});
		} else {
			$('.nav-item, #nav-2, .navbar-nav > li a').removeAttr('style');
			$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
			$(window).unbind('scroll');
		}
	});
});

