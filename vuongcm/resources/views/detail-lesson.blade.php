@extends('templates.all_default',['titleName' => "$post->title"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-lesson-detail.css')}}">
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')
<div class="link">
    <a href="{{ route('home') }}">Trang chủ </a>
    <span></span>
    <a href="lesson.html"> Bài học</a>
    <span></span>
    <a href="lesson.html#banner-lesson-1"> Ngôn ngữ & nhận thức</a>
    <span></span>
    <a href="#"> ...</a>
</div>
<article class="about" id="detail-lesson">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-top-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h2>
                @if($post->group == 'ngon-ngu-nhan-thuc')
                    {{ "NGÔN NGỮ & NHẬN THỨC" }}
                @elseif($post->group == 'logic-toan-hoc')
                    {{ "LOGIC & TOÁN HỌC" }}
                @elseif($post->group == 'van-dong')
                    @if($post->big_group == 'thai-giao')
                        {{ "THAI GIÁO VẬN ĐỘNG" }}
                    @else
                        {{ "VẬN ĐỘNG" }}
                    @endif
                @elseif($post->group == 'nghe-thuat')
                    {{ "NGHỆ THUẬT" }}
                @elseif($post->group == 'ky-nang')
                    {{ "KỸ NĂNG" }}
                @elseif($post->group == 'khoa-hoc')
                    {{ "KHOA HỌC" }}
                @elseif($post->group == 'cam-xuc')
                    {{ "THAI GIÁO CẢM XÚC" }}
                @elseif($post->group == 'am-nhac')
                    {{ "THAI GIÁO ÂM NHẠC" }}
                @elseif($post->group == 'ngon-ngu')
                    @if($post->big_group == 'thai-giao')
                        {{ "THAI GIÁO NGÔN NGỮ" }}
                    @else
                        {{ "NGÔN NGỮ" }}
                    @endif
                @elseif($post->group == 'dinh-duong')
                    {{ "THAI GIÁO DINH DƯỠNG" }}
                @elseif($post->group == 'voi-bo')
                    {{ "THAI GIÁO VỚI BỐ" }}
                @elseif($post->group == 'my-hoc')
                    {{ "THAI GIÁO MỸ HỌC" }}
                @elseif($post->group == 'anh-sang')
                    {{ "THAI GIÁO ÁNH SÁNG" }}
                @elseif($post->group == 'y-niem')
                    {{ "THAI GIÁO BẰNG Ý NIỆM" }}
                @elseif($post->group == 'tri-thuc')
                    {{ "THAI GIÁO TRI THỨC" }}
                @elseif($post->group == 'giac-quan')
                    {{ "GIÁC QUAN" }}
                @elseif($post->group == 'nhan-thuc')
                    {{ "NHẬN THỨC" }}
                @elseif($post->group == 'tinh-cam-xa-hoi')
                    {{ "TÌNH CẢM XÃ HỘI" }}
                @endif
            </h2>
        </div>
    </div>
    <div class="content clr">
        <div class="search-container-mini">
            <form action="">
                <input type="search" placeholder="Tìm kiếm.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        <div class="container">
            <div class="row">
                <h1 class="lesson-title">{{ $post->title }}</h1>
                <div id="text">{!! $post->content !!}</div>
            </div>
        </div>
        @include('includes.hot_posts', ['list_posts' => $list_posts, 'cmt_count' => $cmt_count])
        <div class="comment-container">
            @guest
            <h4>Bạn cần <a href="javascript:;" class="color" data-toggle="modal" data-target="#myModal">đăng nhập</a> để bình luận.</h4>
            @else
            <form class="cmt-form">
                <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                <input type="hidden" name="post_id" value="{{ $post->id }}">
                <input type="hidden" name="parent_id" value="">
                <div class="avatar">
                    @if(Auth::user()->avatar == null)
                    <div style="background-color: #{{substr(Auth::user()->id, 0, 1)}}51735">{{ substr(Auth::user()->firstname, 0, 2) }}</div>
                    @else
                    <img src="{{ Auth::user()->avatar }}" title="avatar" alt="User Avatar">
                    @endif
                </div>
                <textarea class="body-cmt inputCmt" type="text" placeholder="Mời bạn bình luận & đánh giá bài viết này" name="body" required></textarea>
            </form>
            @endguest
            <div class="comment-list">
                <h4>CÓ <font></font> BÌNH LUẬN</h4>
                @include('includes.commentsDisplay', ['comments' => $post->comments, 'post_id' => $post->id, 'time' => $time])
            </div>
        </div>
    </div>
</article>
@if(Auth::check())
<button class="hidden-open-modal" type="button" data-toggle="modal" data-target="#modal-delete-cmt">Open</button>
@include('includes.modal_true')
@endif
@endsection

@section('js')
<script type="text/javascript" src="{{asset('templates/kiwimom/js/lesson-detail.js')}}"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('.comment-list>h4>font').text($('.wrap-comments').length);
        $('.comment-list>.wrap-comments').each(function(){
            if(!$(this).children('.wrap-comments').length){
                $(this).find('.btn-show-rep').hide();
            }
        });
        $('.comment-container').delegate('.body-cmt', 'keypress', function(e){
            if( e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                let parentForm = $(this).closest('.cmt-form');
                $.ajaxSetup({
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: "POST",
                    cache: false,
                    url: "/post/comment-create",
                    data: {
                        user_id: parentForm.children(`input[name="user_id"]`).val(),
                        post_id: parentForm.children(`input[name="post_id"]`).val(),
                        parent_id: parentForm.children(`input[name="parent_id"]`).val(),
                        body: parentForm.children(`.body-cmt`).val(),
                    },
                    dataType: "json",
                    success: function(data){
                        if(data.parent_id == ''){
                            $('.comment-list>h4').after(`
                            <div class="wrap-comments" data-cmt="${data.id}" data-user="${data.user_id}">
                                <div class="comment">
                                    <div>
                                        <div class="avatar">${$('.comment-container>.cmt-form .avatar').html()}</div>
                                        <h5 class="nickName">${data.username}</h5>
                                        <div class="dateAgo">5 tháng trước</div>
                                    </div>
                                    <div>
                                        <p>${data.body}</p>
                                        <a href="javascript:;" class="btn-reply">Trả lời</a>
                                        <a href="javascript:;" class="btn-delete-cmt">Xóa</a>
                                        <a href="javascript:;" class="btn-show-rep" style="display:none;">Ẩn/Hiện phản hồi</a>
                                    </div>
                                </div>
                                <div class="reply-cmt">
                                    <form class="cmt-form">
                                        <input class="body-cmt inputCmt" type="text" name="body" />
                                        <input type="hidden" name="user_id" value="${data.user_id}">
                                        <input type="hidden" name="post_id" value="${data.post_id}" />
                                        <input type="hidden" name="parent_id" value="${data.id}" />
                                    </form>
                                </div>
                            </div>`);
                        } else{
                            $('.comment-list>.wrap-comments').each(function(){
                                if($(this).attr('data-cmt') == data.parent_id){
                                    $(this).children('.reply-cmt').before(`
                                        <div class="wrap-comments" data-cmt="${data.id}" data-user="${data.user_id}">
                                            <div class="comment" style="margin-left:40px;">
                                                <div>
                                                    <div class="avatar">${$('.comment-container>.cmt-form .avatar').html()}</div>
                                                    <h5 class="nickName">${data.username}</h5>
                                                    <div class="dateAgo">5 tháng trước</div>
                                                </div>
                                                <div>
                                                    <p>${data.body}</p>
                                                    <a href="javascript:;" class="btn-reply">Trả lời</a>
                                                    <a href="javascript:;" class="btn-delete-cmt">Xóa</a>
                                                </div>
                                            </div>
                                        </div>`);
                                    $(this).find('.btn-show-rep').show();
                                }
                                
                            });
                        }
                        $('.comment-list>h4>font').text($('.wrap-comments').length);
                        $(`.body-cmt`).val('');
                    },
                    error: function(error){
                        alert('Lỗi bình luận');
                        $(`.body-cmt`).val('');
                    }
                });
            }
        });
        $('.comment-container').delegate('.btn-reply', 'click', function(){
            $(this).closest('.wrap-comments').nextAll('.reply-cmt').slideDown(300);
            $(this).closest('.wrap-comments').children('.reply-cmt').slideDown(300);
        });
        $('.comment-container').delegate('.btn-show-rep','click',function(){
            let thisTogg = $(this).closest('.wrap-comments').children('.wrap-comments');
            thisTogg.slideToggle(300);
        });
        $('.comment-container').delegate('.btn-delete-cmt', 'click', function(){
            $('.wrap-comments').removeAttr('id','this-delete');
            $(this).closest('.wrap-comments').attr('id','this-delete');
            $('.hidden-open-modal').click();
        });
        $('#modal-delete-cmt .btn-st2').click(function(){
            $.ajaxSetup({
                headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: "POST",
                cache: false,
                url: "/post/comment-delete",
                data: {
                    user_id: $('#this-delete').attr('data-user'),
                    id: $('#this-delete').attr('data-cmt'),
                },
                dataType: "json",
                success: function(data){
                    $('#this-delete').remove();
                    $('#modal-delete-cmt .close').click();
                },
                error: function(error){
                    $('#modal-delete-cmt .close').click();
                    alert('Lỗi kết nối');
                }
            });
        });
    });

</script>
@endsection