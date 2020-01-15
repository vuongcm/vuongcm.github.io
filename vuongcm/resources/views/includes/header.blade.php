<header>
	<nav id="nav-1">
        <div class="loginBar">
        @guest
            <button type="button" class="btn btn-light btn-login" data-toggle="modal" data-target="#myModal">Đăng nhập</button>
            <a href="{{ route('register') }}" id="signUp" class="btn btn-light">Đăng ký</a>
        @else
            <div class="box-logined">
                <a href="javascript:;" class="dropdown-toggle btn btn-light">Xin chào, {{ Auth::user()->firstname }}</a>
                <ul>
                    <li><a href="javascript:;" class="btn btn-light">Thông tin tài khoản</a></li>
                    <li><a href="javascript:;" class="btn btn-light">Chỉnh sửa thông tin</a></li>
                    <li><a href="javascript:;" class="btn btn-light" onclick="document.getElementById('logout-form').submit();">Đăng xuất</a></li>
                </ul>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
                </form>
            </div>
        @endguest
        </div>
        <div class="content-menu">
            <div class="logo-menu">
                <img src="{{asset('templates/kiwimom/img/logo-head.png')}}" class="img-responsive">
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
                    <a href="share.html">
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
        @guest
            <button type="button" class="btn btn-light btn-login" data-toggle="modal" data-target="#myModal">Đăng nhập</button>
            <a href="{{ route('register') }}" id="signUp" class="btn btn-light">Đăng ký</a>
        @else
            <div class="box-logined">
                <a href="javascript:;" class="dropdown-toggle btn btn-light">Xin chào, {{ Auth::user()->firstname }}</a>
                <ul>
                    <li><a href="javascript:;" class="btn btn-light">Thông tin tài khoản</a></li>
                    <li><a href="javascript:;" class="btn btn-light">Chỉnh sửa thông tin</a></li>
                    <li><a href="javascript:;" class="btn btn-light" onclick="document.getElementById('logout-form').submit();">Đăng xuất</a></li>
                </ul>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
                </form>
            </div>
        @endguest
        </div>
        <div class="content-menu">
            <div class="logo-menu" class="navbar-brand">
                <img src="{{asset('templates/kiwimom/img/logo-head.png')}}" class="img-responsive">
            </div>
            
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">TRANG CHỦ</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">GIỚI THIỆU</a></li>
                    <li class="dropdown nav-item">
                        <a class="nav-link">BÀI HỌC</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="lesson.html#banner-lesson-1">NGÔN NGỮ & NHẬN THỨC</a>
                            <a class="dropdown-item" href="lesson.html#banner-lesson-2">LOGIC & TOÁN HỌC</a>
                            <a class="dropdown-item" href="lesson.html#banner-lesson-3">VẬN ĐỘNG</a>
                            <a class="dropdown-item" href="lesson.html#banner-lesson-4">ÂM NHẠC & NGHỆ THUẬT</a>
                            <a class="dropdown-item" href="lesson.html#banner-lesson-5">KỸ NĂNG SỐNG</a>
                            <a class="dropdown-item" href="lesson.html#banner-lesson-6">KHOA HỌC</a>
                        </div>
                    </li>
                    <li class="dropdown nav-item">
                        <a class="nav-link">VIDEOS</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="videos.html#videos-1">NGÔN NGỮ & NHẬN THỨC</a>
                            <a class="dropdown-item" href="videos.html#videos-2">LOGIC & TOÁN HỌC</a>
                            <a class="dropdown-item" href="videos.html#videos-3">VẬN ĐỘNG</a>
                            <a class="dropdown-item" href="videos.html#videos-4">ÂM NHẠC & NGHỆ THUẬT</a>
                            <a class="dropdown-item" href="videos.html#videos-5">KỸ NĂNG SỐNG</a>
                            <a class="dropdown-item" href="videos.html#videos-6">KHOA HỌC</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">CỬA HÀNG</a></li>
                    <li class="nav-item"><a class="nav-link" href="share.html">CHIA SẺ</a></li>
                </ul>
            </div>
            <button class="navbar-toggler">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    </nav>
    <div id="fixed-nav2"></div>
</header>