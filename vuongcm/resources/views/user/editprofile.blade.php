@extends('templates.all_default',['titleName' => "Chỉnh sửa Tài khoản"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
@endsection

@section('content')
<div class="link">
    <a href="{{ route('home') }}">Trang chủ </a>
    <span></span>
    <a href="javascript:;"> Chỉnh sửa Tài khoản</a>
</div>
<article class="about">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-top-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h1>CHỈNH SỬA TÀI KHOẢN</h1>
        </div>
    </div>
    <div class="container container-user container-edit-user">
        <form action="/chinh-sua-tai-khoan" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{ Auth::user()->id }}">
            <div class="row">
                <div class="col-lg-4">
                    <h3>Tên đăng nhập:</h3>
                </div>
                <div class="col-lg-8">
                    <p><b>{{ Auth::user()->username }}</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <h3>Họ:</h3>
                </div>
                <div class="col-lg-8">
                    <p>{{ Auth::user()->lastname }}</p>
                    <input type="text" class="edit-profile" value="{{ Auth::user()->lastname }}" name="lastname" required pattern="^[^\\p{L}\\s]{1,10}$" title="'Họ' chỉ nên có chữ cái, tối đa 10 ký tự">
                    <button type="button" class="btn btn-link"><i class="fa fa-edit"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <h3>Tên:</h3>
                </div>
                <div class="col-lg-8">
                    <p>{{ Auth::user()->firstname }}</p>
                    <input type="text" class="edit-profile" value="{{ Auth::user()->firstname }}" name="firstname" required title="'Tên' chỉ nên có chữ cái, tối đa 10 ký tự" pattern="^[^\\p{L}\\s]{1,10}$">
                    <button type="button" class="btn btn-link"><i class="fa fa-edit"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <h3>Giới tính:</h3>
                </div>
                <div class="col-lg-8">
                    <p>{{ Auth::user()->gender }}</p>
                    <select name="gender" required>
                        <option value="{{ Auth::user()->gender }}" selected>{{ Auth::user()->gender }}</option>
                    @if(Auth::user()->gender == 'Nam')
                        <option value="Nữ">Nữ</option>
                    @else
                        <option value="Nam">Nam</option>
                    @endif
                    </select>
                    <button type="button" class="btn btn-link"><i class="fa fa-edit"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <h3>Email:</h3>
                </div>
                <div class="col-lg-8">
                    <p><b>{{ Auth::user()->email }}</b></p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-8">
                    <button type="submit" class="btn btn-primary">CẬP NHẬT</button>
                </div>
            </div>
            
        </form>
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
        //Cập nhật thông tin
        $('.container-edit-user .btn-link').click(function(){
            $(this).prevAll('p').hide();
            $(this).prevAll('.edit-profile,select').fadeIn(300);
            $(this).hide();
        });
    });
</script>
@endsection