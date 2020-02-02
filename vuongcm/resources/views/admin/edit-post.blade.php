@extends('templates.all_default',['titleName' => "Chỉnh sửa bài viết"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-topic.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.css')}}">
@endsection

@section('content')
<article class="about admin-create-post">
    <h1>Chỉnh sửa bài viết</h1>
    <div class="box-hidden-content">{!! $content !!}</div>
    <div class="container">
        <form action="/admin/update-post/{{$post->id}}" method="post">
            @method('PATCH')
            @csrf
            <input type="hidden" name="id" value="{{ $post->id }}">
            <div class="row">
                <div class="col-lg-3">
                    <h3>Group:</h3>
                </div>
                <div class="col-lg-9">
                    <select name="group" required>
                        <option value="ngon-ngu-nhan-thuc" @if($post->group == 'ngon-ngu-nhan-thuc') {{'selected'}} @endif>Ngôn ngữ & Nhận thức</option>
                        <option value="logic-toan-hoc" @if($post->group == 'logic-toan-hoc') {{'selected'}} @endif>Logic & Toán học</option>
                        <option value="van-dong" @if($post->group == 'van-dong') {{'selected'}} @endif>Vận động</option>
                        <option value="am-nhac-nghe-thuat" @if($post->group == 'am-nhac-nghe-thuat') {{'selected'}} @endif>Âm nhạc & Nghệ thuật</option>
                        <option value="ky-nang-song" @if($post->group == 'ky-nang-song') {{'selected'}} @endif>Kỹ năng sống</option>
                        <option value="khoa-hoc" @if($post->group == 'khoa-hoc') {{'selected'}} @endif>Khoa học</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Link:</h3>
                </div>
                <div class="col-lg-9">
                    <input type="text" name="link" required value="{{ $post->link }}">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Description:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea rows="5" required name="description">{{ $post->description }}</textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Keywords:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea rows="5" required name="keywords">{{ $post->keywords }}</textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Tiêu đề:</h3>
                </div>
                <div class="col-lg-9">
                    <input type="text" name="title" required value="{{ $post->title }}">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 demo-box">
                    <h3>Xem trước nội dung:</h3>
                    <div class="demo-content-box">{!! $content !!}</div>
                </div>
                <textarea rows="10" required name="content" class="box-hidden-content"></textarea>
            </div>
            <div class="row add-box">
                <div class="col-lg-3">
                    <h3>Thêm nội dung:</h3>
                </div>
                <div class="add-type col-lg-8">
                    <select>
                        <option value="h3" selected>Đầu mục 1</option>
                        <option value="h4" selected>Đầu mục 2</option>
                        <option value="h5" selected>Đầu mục 3</option>
                        <option value="h6" selected>Đầu mục 4</option>
                        <option value="para" selected>Đoạn văn</option>
                        <option value="image">Ảnh</option>
                    </select>
                </div>
                <div class="add-content col-lg-1">
                    <button type="button" class="btn" id="add-content"><i class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="btn btn-submit">Cập nhật</button>
            </div>
        </form>
    </div>
</article>
@endsection

@section('js')
<script type="text/javascript" src="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.min.js')}}"></script>
<script>
    $(document).ready(function() {
        $('.box-hidden-content').val(`${$('.demo-content-box').html()}`);
        $('.demo-content-box').children().each(function(){
            let tagName = $(this)[0].tagName.toLowerCase();
            if(tagName == 'h3'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 1:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-3" value="${$(this).html()}">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(tagName == 'h4'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 2:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-4" value="${$(this).html()}">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(tagName == 'h5'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 3:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-5" value="${$(this).html()}">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(tagName == 'h6'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 4:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-6" value="${$(this).html()}">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(tagName == 'p'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đoạn văn:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <textarea rows="12" class="content-item" data-content="para">${$(this).html()}</textarea>
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(tagName == 'img'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Chèn ảnh:</h3>
                        </div>
                        <div class="add-img col-lg-8">
                            <form action="" method="POST">
                                <label title="Upload file">
                                    <input class="upload-img" type="file" style="display:none">
                                    <i class="fas fa-paperclip"></i>
                                </label>
                                <button type="button" class="btn btn-primary btn-upload-img">Upload</button>
                                <p class="fakeUp">${$(this).attr('src')}</p>
                                <input type="text" style="display:none" class="get-url-img content-item" data-content="img" value="<img src='${$(this).attr('src')}' alt='img' class='img-responsive' title='${$(this).attr('title')}'>">
                            </form>
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            }
        });
        // Tạo ứng dụng chèn nội dung
        $('#add-content').click(function(){
            let addTypeVal = $('.add-type select').val();
            if(addTypeVal == 'para'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đoạn văn:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <textarea rows="12" class="content-item" data-content="para"></textarea>
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'image'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Chèn ảnh:</h3>
                        </div>
                        <div class="add-img col-lg-8">
                            <form action="" method="POST">
                                <label title="Upload file">
                                    <input class="upload-img" type="file" style="display:none">
                                    <i class="fas fa-paperclip"></i>
                                </label>
                                <button type="button" class="btn btn-primary btn-upload-img">Upload</button>
                                <p class="fakeUp"></p>
                                <input type="text" style="display:none" class="get-url-img content-item" data-content="img">
                            </form>
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'h3'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 1:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-3">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'h4'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 2:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-4">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'h5'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 3:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-5">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'h6'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đầu mục 4:</h3>
                        </div>
                        <div class="add-type col-lg-8">
                            <input type="text" class="content-item" data-content="head-6">
                        </div>
                        <div class="add-content col-lg-1">
                            <button type="button" class="btn btn-link btn-remove-2">Xóa</button>
                            <button type="button" class="btn btn-link btn-up-2">Thêm</button>
                        </div>
                    </div>
                    `);
            }
        });
        // upload file
        $('.admin-create-post').delegate(`.upload-img`,'change',function(){
            let numberFile = $(this)[0].files;
            $(this).closest('.add-img').find('.fakeUp').text(numberFile[0].name);
        });
        $('.admin-create-post').delegate('.btn-up-2','click',function(){
            $('.demo-content-box').html('');
            $('.content-item').each(function(){
                if($(this).attr('data-content') == 'para'){
                    $('.demo-content-box').append(`<p>${$(this).val()}</p>`);
                } else if($(this).attr('data-content') == 'img'){
                    $('.demo-content-box').append($(this).val());
                } else if($(this).attr('data-content') == 'head-3'){
                    $('.demo-content-box').append(`<h3>${$(this).val()}</h3>`);
                } else if($(this).attr('data-content') == 'head-4'){
                    $('.demo-content-box').append(`<h4>${$(this).val()}</h4>`);
                } else if($(this).attr('data-content') == 'head-5'){
                    $('.demo-content-box').append(`<h5>${$(this).val()}</h5>`);
                } else if($(this).attr('data-content') == 'head-6'){
                    $('.demo-content-box').append(`<h6>${$(this).val()}</h6>`);
                }
            });
            $('.box-hidden-content').val(`${$('.demo-content-box').html()}`);
        });
        $('.admin-create-post').delegate('.btn-remove-2','click',function(){
            $(this).closest('.row').remove();
            if($('.btn-up-2').length == 0){
                $('.demo-content-box').html('');
                $('.box-hidden-content').val('');
            } else{
                $('.btn-up-2').click();
            }
        });
        $('.admin-create-post').delegate('.btn-upload-img','click',function(){
            $('#temporary').removeAttr('id');
            $(this).next('.fakeUp').attr('id','temporary');
            let thisInput = $(this).closest('form').find('.upload-img');
            let file_data = thisInput.prop('files')[0];
            let fileName = file_data.name.split('.');
            let type = file_data.type;
            //console.log(file_data);
            var result = '';
            let match = ["image/gif", "image/png", "image/jpg","image/jpeg"];
            if (type == match[0] || type == match[1] || type == match[2] || type == match[3]) {
                var form_data = new FormData();
                form_data.append('file', file_data);
                //console.log(form_data);
                $.ajax({
                    url: `{{asset('templates/kiwimom/upload.php')}}`, // gửi đến file upload.php 
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'post',
                    success: function (res) {
                        $('#temporary').html(res);
                        $('#temporary').closest('form').find('.upload-img').val('');
                        //console.log(result);
                        if(res.search('thành công') != -1){
                            $('#temporary').next('input.get-url-img').val(`<img src="{{asset('templates/kiwimom/upload')}}/${file_data.name}" alt="img" class="img-responsive" title="${fileName[0]}">`);
                        } else{
                            $('#temporary').next('input.get-url-img').val('');
                        }
                        
                    }
                });
            } else{
                $('#temporary').text('Chỉ được upload file ảnh');
                $('#temporary').closest('form').find('.upload-img').val('');
            }
            return false;
        });
        $('.btn-submit').click(function(){
            if(confirm("Bạn chắc chắn muốn sửa bài viết này??") == true){
                return true;
            }else{
                return false;
            }
        });
    });
</script>
@endsection