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
        <form action="{{ route('tao-bai-viet') }}" method="post">
            
            @csrf
            <div class="row">
                <div class="col-lg-3">
                    <h3>Group:</h3>
                </div>
                <div class="col-lg-9">
                    <select name="group" required>
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
                    <input type="text" name="link" required>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Tiêu đề:</h3>
                </div>
                <div class="col-lg-9">
                    <input type="text" name="title" required>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Đoạn văn:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea style="display: none;" name="content" id="content"></textarea>
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
                    <textarea rows="5" required name="description"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3>Keywords:</h3>
                </div>
                <div class="col-lg-9">
                    <textarea rows="5" required name="keywords"></textarea>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="btn btn-submit">Đăng</button>
            </div>
        </form>
    </div>
</article>
@endsection

@section('js')
<script type="text/javascript" src="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.min.js')}}"></script>
<script>
    $(document).ready(function() {
        
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
                                    <input class="upload-img" type="file" style="display:none">
                                    <i class="fas fa-paperclip"></i>
                                </label>
                                <button type="button" class="btn btn-primary btn-upload-img">Upload</button>
                                <p class="fakeUp"></p>
                                <input type="text" style="display:none" class="get-url-img">
                            </form>
                        </div>
                        <div class="add-content">
                            <button type="button" class="btn btn-remove"><i class="fa fa-minus"></i></button>
                        </div>
                    </div>
                    `);
            }
        });
        //Khởi tạo trình soạn thảo cho textarea
        $('.admin-create-post').delegate('.para-content','click',function(){
            $(this).jqte({
                fsize: false,
                formats:[
                    ["p","Para"],
                    ["h2","Head 2"],
                    ["h3","Head 3"],
                    ["h4","Head 4"],
                    ["h5","Head 5"],
                    ["h6","Head 6"],
                ]
            });
        });
        // upload file
        $('.admin-create-post').delegate(`.upload-img`,'change',function(){
            let numberFile = $(this)[0].files;
            $(this).closest('.add-img').find('.fakeUp').text(numberFile[0].name);
        });
        $('.admin-create-post').delegate('.btn-remove','click',function(){
            $(this).closest('.row').remove();
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
        //refer value vào content
        /*$('.admin-create-post').delegate('.para-content, .get-url-img','change',function(){
            let elementChild = $('.para-content, .get-url-img');
            $('#content').val('');
            for(let i=0; i<elementChild.length; i++){
                $('#content').val($('#content').val() + elementChild.eq(i).val());
            }
        });*/
        $('.btn-submit').click(function(){
            let elementChild = $('.para-content, .get-url-img');
            $('#content').val('');
            for(let i=0; i<elementChild.length; i++){
                $('#content').val($('#content').val() + elementChild.eq(i).val());
            }
        });
    });
</script>
@endsection