@extends('templates.all_default',['titleName' => "Thông tin tài khoản"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
@endsection

@section('content')
<div class="link">
    <a href="{{ route('home') }}">Trang chủ </a>
    <span></span>
    <a href="javascript:;"> Thông tin Tài khoản</a>
</div>
<article class="about">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-top-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h1>THÔNG TIN TÀI KHOẢN</h1>
        </div>
    </div>
    <div class="container container-user">
        <h2 class="text-center">Xin chào {{ Auth::user()->firstname }}, đây là thông tin tài khoản của bạn</h2>
        <div class="row">
            <div class="col-lg-4">
                <h3>Tên đăng nhập:</h3>
            </div>
            <div class="col-lg-8">
                <p>{{ Auth::user()->username }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h3>Họ:</h3>
            </div>
            <div class="col-lg-8">
                <p>{{ Auth::user()->lastname }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h3>Tên:</h3>
            </div>
            <div class="col-lg-8">
                <p>{{ Auth::user()->firstname }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h3>Giới tính:</h3>
            </div>
            <div class="col-lg-8">
                <p>{{ Auth::user()->gender }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h3>Email:</h3>
            </div>
            <div class="col-lg-8">
                <p>{{ Auth::user()->email }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h3>Vai trò cá nhân:</h3>
            </div>
            <div class="col-lg-8">
                <p>
                @if(Auth::user()->level == 1)
                    {{ "SuperAdmin" }}
                @elseif(Auth::user()->level == 2)
                    {{ "Admin" }}
                @elseif(Auth::user()->level == 3)
                    {{ "Thành viên" }}
                @else
                    {{ "Khách" }}
                @endif
                </p>
            </div>
        </div>
    </div>
</article>
@endsection

@section('js')
<script>
    $(document).ready(function() {
        // Hiệu ứng + - slide
        $('.about').css('min-height','25vh');
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
    });
</script>
@endsection