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
                    <li><a href="/thong-tin-tai-khoan" class="btn btn-light">Thông tin Tài khoản</a></li>
                    <li><a href="/chinh-sua-tai-khoan" class="btn btn-light">Chỉnh sửa Tài khoản</a></li>
                @if(Auth::user()->level == 1 || Auth::user()->level == 2)
                    <li><a href="{{ route('adminHome') }}" class="btn btn-light">Quản lý nội dung</a></li>
                @endif
                    <li><a href="javascript:;" class="btn btn-light" onclick="document.getElementById('logout-form').submit();">Đăng xuất</a></li>
                </ul>
                <form action="{{ route('logout') }}" id="logout-form" method="POST" style="display: none;">
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
                    <a href="{{ route('home') }}">
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
                        <li><a href="#">THAI GIÁO</a></li>
                        <li><a href="#">0-1 TUỔI</a></li>
                        <li><a href="#">1-6 TUỔI</a></li>
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
                        <li><a href="#">THAI GIÁO</a></li>
                        <li><a href="#">0-1 TUỔI</a></li>
                        <li><a href="#">1-6 TUỔI</a></li>
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
                    <li><a href="/thong-tin-tai-khoan" class="btn btn-light">Thông tin Tài khoản</a></li>
                    <li><a href="/chinh-sua-tai-khoan" class="btn btn-light">Chỉnh sửa Tài khoản</a></li>
                @if(Auth::user()->level == 1 || Auth::user()->level == 2)
                    <li><a href="{{ route('adminHome') }}" class="btn btn-light">Quản lý nội dung</a></li>
                @endif
                    <li><a href="javascript:;" class="btn btn-light" onclick="document.getElementById('logout-form').submit();">Đăng xuất</a></li>
                </ul>
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
                    <li class="nav-item"><a class="nav-link" href="{{ route('home') }}">TRANG CHỦ</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">GIỚI THIỆU</a></li>
                    <li class="dropdown nav-item">
                        <a class="nav-link">BÀI HỌC</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">THAI GIÁO</a>
                            <a class="dropdown-item" href="#">0-1 TUỔI</a>
                            <a class="dropdown-item" href="#">1-6 TUỔI</a>
                        </div>
                    </li>
                    <li class="dropdown nav-item">
                        <a class="nav-link">VIDEOS</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">THAI GIÁO</a>
                            <a class="dropdown-item" href="#">0-1 TUỔI</a>
                            <a class="dropdown-item" href="#">1-6 TUỔI</a>
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