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
            <div class="col-lg-6 col-sm-12 list-to-list">
                <h2>Bài viết</h2>
                <div class="col-lg-12">
                    <h3>Danh sách bài viết</h3>
                    <ul>
                        <li><a class="btn btn-info" href="{{ route('list-post', ['big_group' => 'thai-giao']) }}">Thai giáo</a></li>
                        <li><a class="btn btn-info" href="{{ route('list-post', ['big_group' => '0-1-tuoi']) }}">0-1 tuổi</a></li>
                        <li><a class="btn btn-info" href="{{ route('list-post', ['big_group' => '1-6-tuoi']) }}">1-6 tuổi</a></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <a class="btn btn-warning" href="{{ route('create-post') }}">Tạo bài viết mới</a>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 list-to-list">
                <h2>Videos</h2>
                <div class="col-lg-12">
                    <h3>Danh sách videos</h3>
                    <ul>
                        <li><a class="btn btn-info" href="#">Thai giáo</a></li>
                        <li><a class="btn btn-info" href="#">0-1 tuổi</a></li>
                        <li><a class="btn btn-info" href="#">1-6 tuổi</a></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <a class="btn btn-warning" href="#">Upload video mới</a>
                </div>
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