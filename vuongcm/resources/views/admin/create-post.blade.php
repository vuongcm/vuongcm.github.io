@extends('templates.all_default',['titleName' => "Tạo bài viết mới"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-topic.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.css')}}">
@endsection

@section('content')
<article class="about admin-create-post">
    <h1>Tạo bài viết mới</h1>
    <div class="container">
        <form action="">
            <div class="row">
                <div class="col-lg-3">
                    <h3>Group:</h3>
                </div>
                <div class="col-lg-9">
                    <select name="" required>
                        <option value="ngon-ngu-nhan-thuc">Ngôn ngữ & Nhận thức</option>
                        <option value="logic-toan-hoc">Logic & Toán học</option>
                        <option value="van-dong">Vận động</option>
                        <option value="am-nhac-nghe-thuat">Âm nhạc & Nghệ thuật</option>
                        <option value="ky-nang-song">Kỹ năng sống</option>
                        <option value="khoa-hoc">Khoa học</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Link:</h3>
                </div>
                <div class="col-lg-9">
                    <input type="text" name="" required>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Tiêu đề:</h3>
                </div>
                <div class="col-lg-9">
                    <input type="text" name="" required>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Đoạn văn:</h3>
                </div>
                <div class="col-lg-9">
                    <input style="display: none;" type="text" name="content" id="content" required>
                    <textarea rows="12" class="para-content"></textarea>
                </div>
            </div>
            <div class="row add-box">
                <div class="col-lg-3">
                    <h3>Thêm nội dung:</h3>
                </div>
                <div class="add-type">
                    <select>
                        <option value="para" selected>Đoạn văn</option>
                        <option value="image">Ảnh</option>
                    </select>
                </div>
                <div class="add-content">
                    <button type="button" class="btn" id="add-content"><i class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Description:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea rows="5" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Keyword:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea rows="5" required></textarea>
                </div>
            </div>
        </form>
    </div>
</article>
@endsection

@section('js')
<script type="text/javascript" src="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.min.js')}}"></script>
<script>
    $(document).ready(function() {
        
        // tạo tynymce cho textarea
        $("#cmt").jqte();
        // Tạo ứng dụng chèn nội dung
        $('#add-content').click(function(){
            let addTypeVal = $('.add-type select').val();
            if(addTypeVal == 'para'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Đoạn văn:</h3>
                        </div>
                        <div class="add-type">
                            <textarea rows="12" class="para-content"></textarea>
                        </div>
                        <div class="add-content">
                            <button type="button" class="btn btn-remove"><i class="fa fa-minus"></i></button>
                        </div>
                    </div>
                    `);
            } else if(addTypeVal == 'image'){
                $('.add-box').before(`
                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Chèn ảnh:</h3>
                        </div>
                        <div class="add-img">
                            <form action="" method="POST">
                                <label title="Upload file">
                                    <input class="upload-img" type="file" style="display:none" name="sortpic">
                                    <i class="fas fa-paperclip"></i>
                                </label>
                                <button type="button" class="btn btn-primary btn-upload-img">Upload</button>
                                <p class="fakeUp"></p>
                            </form>
                        </div>
                        <div class="add-content">
                            <button type="button" class="btn btn-remove"><i class="fa fa-minus"></i></button>
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
        $('.admin-create-post').delegate('.btn-remove','click',function(){
            $(this).closest('.row').remove();
        });
        $('.admin-create-post').delegate('.btn-remove','click',function(){
            $(this).closest('.row').remove();
        });
        $('.admin-create-post').delegate('.btn-upload-img','click',function(){
            let file_data = $(this).closest('form').find('.upload-img').prop('files')[0];
            let type = file_data.type;
            console.log(file_data);
            let match = ["image/gif", "image/png", "image/jpg","image/jpeg"];
            if (type == match[0] || type == match[1] || type == match[2] || type == match[3]) {
                var form_data = new FormData();
                form_data.append('file', file_data);
                console.log(form_data);
                $.ajax({
                    url: `{{asset('templates/kiwimom/upload.php')}}`, // gửi đến file upload.php 
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'post'})
                .done(function(res){
                    $(this).next('.fakeUp').text(res);
                    $(this).closest('form').find('.upload-img').val('');
                });
            } else{
                $(this).next('.fakeUp').text('Chỉ được upload file ảnh');
                $(this).closest('form').find('.upload-img').val('');
            }
            return false;
        });
    });
</script>
@endsection