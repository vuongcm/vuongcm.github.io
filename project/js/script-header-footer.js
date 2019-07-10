let nav1Height;
let header = `<nav id="nav-1">
            <div class="loginBar">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal">Đăng nhập</button>
                <a href="#" id="signUp" class="btn btn-light">Đăng ký</a>
            </div>
            <div class="content-menu">
                <div class="logo-menu">
                    <img src="img/logo-head.png" class="img-responsive">
                </div>
                <ul class="ca-menu clr">
                    <li>
                        <a href="index.html">
                            <span class="ca-icon"></span>
                            <div class="ca-content">
                                <h2 class="ca-main">TRANG CHỦ</h2>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="about.html">
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
                            <li><a href="lesson.html#banner-lesson-1">NGÔN NGỮ <br>&<br> NHẬN THỨC</a></li>
                            <li><a href="lesson.html#banner-lesson-2">LOGIC <br>&<br> TOÁN HỌC</a></li>
                            <li><a href="lesson.html#banner-lesson-3">VẬN ĐỘNG</a></li>
                            <li><a href="lesson.html#banner-lesson-4">ÂM NHẠC <br>&<br> NGHỆ THUẬT</a></li>
                            <li><a href="lesson.html#banner-lesson-5">KỸ NĂNG<br> SỐNG</a></li>
                            <li><a href="lesson.html#banner-lesson-6">KHOA HỌC</a></li>
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
                            <li><a href="videos.html#videos-1">NGÔN NGỮ <br>&<br> NHẬN THỨC</a></li>
                            <li><a href="videos.html#videos-2">LOGIC <br>&<br> TOÁN HỌC</a></li>
                            <li><a href="videos.html#videos-3">VẬN ĐỘNG</a></li>
                            <li><a href="videos.html#videos-4">ÂM NHẠC <br>&<br> NGHỆ THUẬT</a></li>
                            <li><a href="videos.html#videos-5">KỸ NĂNG<br> SỐNG</a></li>
                            <li><a href="videos.html#videos-6">KHOA HỌC</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="shop.html">
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
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal">Đăng nhập</button>
                <a href="#" id="signUp" class="btn btn-light">Đăng ký</a>
            </div>
            <div class="content-menu">
                <div class="logo-menu" class="navbar-brand">
                    <img src="img/logo-head.png" class="img-responsive">
                </div>
                
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="index.html">TRANG CHỦ</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="about.html">GIỚI THIỆU</a></li>
                        <li class="dropdown nav-item">
                            <a class="nav-link" aria-expanded="false">BÀI HỌC</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-1">NGÔN NGỮ & NHẬN THỨC</a>
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-2">LOGIC & TOÁN HỌC</a>
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-3">VẬN ĐỘNG</a>
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-4">ÂM NHẠC & NGHỆ THUẬT</a>
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-5">KỸ NĂNG SỐNG</a>
                                <a class="dropdown-item" role="presentation" href="lesson.html#banner-lesson-6">KHOA HỌC</a>
                            </div>
                        </li>
                        <li class="dropdown nav-item">
                            <a class="nav-link" aria-expanded="false">VIDEOS</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-1">NGÔN NGỮ & NHẬN THỨC</a>
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-2">LOGIC & TOÁN HỌC</a>
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-3">VẬN ĐỘNG</a>
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-4">ÂM NHẠC & NGHỆ THUẬT</a>
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-5">KỸ NĂNG SỐNG</a>
                                <a class="dropdown-item" role="presentation" href="videos.html#videos-6">KHOA HỌC</a>
                            </div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="shop.html">CỬA HÀNG</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">CHIA SẺ</a></li>
                    </ul>
                </div>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        </nav>
        <div id="fixed-nav2"></div>`;
let foot = `<span id="back-to-top"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="logo-footer"><img src="img/logo-foot.png" class="img-responsive"></div>
                </div>
                <div class="col-md-5">
                    <h2>LIÊN HỆ</h2>
                    <ul>
                        <li>
                            <h3><span> </span> (+84) 963 566 129</h3>
                        </li>
                        <li>
                            <h3><span> </span> thaonguyen.gds@gmail.com</h3>
                        </li>
                        <li>
                            <h3><span> </span> Số 689, Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội</h3>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <div class="social-networks">
                        <h2>KẾT NỐI</h2>
                        <div>
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                            <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>Designed & Developed by <span>@vuongcm</span></p>
        </div>`;
let loginModal = `<div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Thành viên đăng nhập</h4>
             <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Đóng</span></button>
              
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                  <div class="col-xs-12">
                      <div class="well">
                          <form id="loginForm" method="POST" action="" novalidate="novalidate">
                              <div class="form-group">
                                  <label for="username" class="control-label">Tài khoản</label>
                                  <input type="text" class="form-control" id="username" name="username" required title="Xin vui lòng nhập tên tài khoản">
                                  <span class="help-block"></span>
                              </div>
                              <div class="form-group">
                                  <label for="password" class="control-label">Mật khẩu</label>
                                  <input type="password" class="form-control" id="password" name="password" required title="Xin vui lòng nhập mật khẩu">
                                  <span class="help-block"></span>
                              </div>
                              <div id="loginErrorMsg" class="alert alert-error hide">Sai tên tài khoản hay mật khẩu</div>
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" name="remember" id="remember"> Nhớ thông tin
                                  </label>
                                  <p class="help-block">(Nếu sử dụng máy tính cá nhân)</p>
                              </div>
                              <button type="submit" class="btn btn-success btn-block">Đăng nhập</button>
                              <a href="#">Quên mật khẩu?</a>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      </div>
  </div>`;
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
        $('#fixed-nav2').height($('#nav-2').outerHeight());
		$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
		$(window).unbind('scroll');
	}
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else { 
            $('#back-to-top').fadeOut();
        } 
    }); 
    $('#back-to-top').on('click', function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false; 
    }); 
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
            $('#fixed-nav2').height($('#nav-2').outerHeight());
			$('#navcol-1>.nav>.nav-item:nth-child(3)>a, #navcol-1>.nav>.nav-item:nth-child(4)>a').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
			$(window).unbind('scroll');
		}
	});

});
