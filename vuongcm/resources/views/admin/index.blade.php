@extends('templates.all_default',['titleName' => "Quản lý nội dung"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
@endsection

@section('content')
<div class="link">
    <a href="{{ route('home') }}">Trang chủ </a>
    <span></span>
    <a href="javascript:;"> Quản lý nội dung</a>
</div>
<article class="about">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-top-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h1>QUẢN LÝ NỘI DUNG</h1>
        </div>
    </div>
    <div class="container container-admin">
        <div class="row">
            <div class="col-lg-6">
            <a class="btn btn-warning" href="{{ route('list-post') }}">Danh sách bài viết</a>
            </div>
            <div class="col-lg-6">
                <a class="btn btn-warning" href="#">Danh sách video</a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
            <a class="btn btn-warning" href="{{ route('create-post') }}">Tạo bài viết mới</a>
            </div>
            <div class="col-lg-6">
                <a class="btn btn-warning" href="#">Upload video mới</a>
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