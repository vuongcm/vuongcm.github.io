@extends('templates.all_default',['titleName' => "Đăng ký tài khoản"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-validate.css')}}">
@endsection

@section('content')
<div class="link">
    <a href="index.html">Trang chủ </a>
    <span></span>
    <a href="#"> Đăng ký tài khoản</a>
</div>
<article class="about">
    <div class="banner">
        <img src="img/banner-top-min.png" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
        </div>
    </div>
    <div class="wrap content container">
        <div class="row">
            <div class="col-md-6">
                <h5>Đăng ký thành viên của Kiwi’s mom ngay</h5>
                <p><span></span> Để được hưởng ưu đãi, chương trình giảm giá hấp dẫn chỉ áp dụng cho thành viên</p>
                <p><span></span> Để được tham gia diễn đàn chia sẻ cách chăm sóc và nuôi dạy con</p>
            </div>
            <form class="col-md-6" action="{{ route('register') }}" method="POST">
            @csrf
                <h5>ĐĂNG KÝ</h5>
                <p>Bạn là khách hàng mới</p>
                <div class="form-group">
                    <input type="text" pattern="^[a-zA-Z0-9_-]{3,16}$" class="form-control" id="userName" placeholder="Tên đăng nhập" title="'Tên đăng nhập' chỉ nên có số và chữ cái không dấu, từ 3 đến 16 ký tự" name="username" value="{{ old('username') }}" required autocomplete="username">
                    @error('username')
                        <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="text" pattern="^[a-zA-Z]{1,10}$" class="form-control" id="lastName" placeholder="Họ" title="'Họ' chỉ nên có chữ cái, tối đa 10 ký tự" name="lastname" value="{{ old('lastname') }}" required autocomplete="lastname">
                    @error('lastname')
                        <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="text" pattern="^[a-zA-Z]{1,10}$" class="form-control" id="firstName" placeholder="Tên" title="'Tên' chỉ nên có chữ cái, tối đa 10 ký tự" name="firstname" value="{{ old('firstname') }}" required autocomplete="firstname" autofocus>
                    @error('firstname')
                        <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                    @enderror
                </div>
                <div class="form-group">
                    Giới tính: 
                    <div class="radio">
                        <label for="gender-nam">
                            <input id="gender-nam" type="radio" name="gender" required value="Nam">
                        Nam
                        </label>
                    </div>
                    <div class="radio">
                        <label for="gender-nu">
                            <input id="gender-nu" type="radio" name="gender" required value="Nữ">
                        Nữ
                        </label>
                    </div>
                    @error('gender')
                        <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" pattern="^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$" id="email" placeholder="Email" title="Oh! Địa chỉ email không hợp lệ" name="email" value="{{ old('email') }}" required autocomplete="email">
                    @error('email')
                        <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                    @enderror
                </div>

                <div class="form-inline">
                    <div class="form-group">
                        <input type="password" pattern="^[a-zA-Z0-9_-]{6,20}$" data-minlength="6" class="form-control" id="password" placeholder="Mật khẩu" title="'Mật khẩu' chỉ bao gồm các ký tự: chữ, số, '_', '-'; từ 6 đến 20 ký tự" name="password" required autocomplete="new-password">
                        @error('password')
                            <div class="error-notification" role="alert"><strong>{{ $message }}</strong></div>
                        @enderror
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="passwordConfirm" placeholder="Xác nhận mật khẩu" name="password_confirmation" required autocomplete="new-password">
                </div>

                </div>
                
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="terms" data-error="Before you wreck yourself" required>
                        Tôi đồng ý với các <a data-toggle="modal" data-target="#lawModal">điều khoản</a> của Kiwi's mom
                        </label>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group" id="wrap-submit">
                    <button disabled="disabled" type="submit" id="buttonSubmit" class="btn btn-primary">ĐĂNG KÝ</button>
                </div>
                <div>Tôi đã có tài khoản. <a href="#" data-toggle="modal" data-target="#myModal">Đăng nhập</a></div>
            </form>
            
        </div>
    </div>
</article>
<article id="lawModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div id="law-content" class="modal-content">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Đóng</span></button>
            <h4 class="modal-title">CÁC QUY ĐỊNH:</h4>
            <p><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Đăng nhập thành viên hợp lệ trước khi post bài.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Đăng tin vào đúng nhóm nội dung. Bài của bạn có thể bị xóa, di chuyển mà không được thông báo nếu bạn đăng bài không đúng nhóm.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Đặt tiêu đề topic phù hợp với nội dung: Bạn cần chọn một tiêu đề phù hợp với nội dung trao đổi. Nếu bạn đặt tiêu đề không phù hợp BQT có thể sẽ tự động sửa lại tiêu đề hoặc chuyển bài đến khu vực khác.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không post nhiều lần: Hãy chắc chắn là bạn không đăng một bài làm nhiều lần hoặc đăng lại nội dung đã có, hãy tìm kiếm trong diễn đàn những bài, câu hỏi và trả lời đã có sẵn trước. Điều này tránh cho việc một câu hỏi được xuất hiện nhiều lần và làm mất đi sự thống nhất.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không gửi tin nhắn để quảng cáo trừ trường hợp được người nhận đồng ý.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không phê phán, chỉ trích, xúc phạm, vu khống hay làm phiền người khác: Xin vui lòng không dùng những lời lẽ chỉ trích cá nhân làm phiền lòng hoặc làm cho người khác mất vui. Đặc biệt, tránh mọi hình thức quấy rối, khiêu khích, đe dọa hoặc làm tổn hại lòng tự trọng của người khác, làm ảnh hưởng đến hòa khí trên diển đàn.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không được kỳ thị vùng miền. Không được gọi người khác là "phản động", nếu BQT phát hiện một thành viên gọi một người khác là "phản động" sẽ khóa nick ngay lập tức mà không cần có cảnh báo trước.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không đăng thông tin có nội dung không lành mạnh, khiêu dâm, gây mất đoàn kết hoặc các thông tin vi phạm đạo đức.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không đăng các liên kết web đến các địa chỉ không lành mạnh hoặc các địa chỉ của các website chứa thông tin của những kẻ khủng bố, bom thư, có chứa virus.<br>Không đăng thông tin về địa chỉ, số điện thoại, địa chỉ email của một người khác trừ trường hợp được sự đồng ý.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Mỗi thành viên xin chỉ đăng ký 1 account.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Mỗi thành viên có trách nhiệm tôn trọng sự riêng tư của người khác, không gửi tin nhắn spam, không dùng thủ thuật để câu kéo bài lên.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không đăng quảng cáo vào các nội dung thảo luận của diễn đàn. Không đặt nhiều liên kết vào các từ khoá để liên kết đến một địa chỉ trang web. Khi BQT phát hiện ra những bài viết có đặt nhiều liên kết chỉ để nhằm mục đích SEO thì BQT sẽ có quyền xoá bài và khoá tài khoản của người đó. Bạn có thể đăng liên kết để giới thiệu cho thành viên biết đến các trang web, nhưng lợi dụng để SEO sẽ được coi là vi phạm quy định.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không đăng bài có nội dung liên quan đến chính trị và tôn giáo.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Tác giả của bài viết tự chịu trách nhiệm về nội dung mà mình đăng tin. Ban quản trị diễn đàn không chịu trách nhiệm về thông tin do người sử dụng đăng lên.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Sử dụng tiếng Việt: Tiếng Việt là ngôn ngữ chính để sử dụng trong diễn đàn, do vậy rất mong mọi người sử dụng chữ tiếng Việt có dấu. Tuy nhiên bạn có thể dùng tiếng Anh trong những trường hợp thật cần thiết.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Các hoạt động cộng đồng do thành viên tự lập không được sử dụng tên, biểu tượng (logo), hình ảnh của Kiwi’s mom nếu không được sự đồng ý của ban quản trị. Ban quản trị có quyền can thiệp và yêu cầu chấm dứt bất cứ hoạt động cộng đồng nào dựa trên diễn đàn mà không cần phải giải thích lý do.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Quyền sở hữu thông tin: Tất cả thông tin trên diễn đàn Kiwi’s mom bao gồm bài viết, thông tin về tài khoản, danh sách người sử dụng và những thông tin khác trên diễn đàn đều thuộc quyền sở hữu của BQT diễn đàn Kiwi’s mom.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Bạn không được quyền khai thác thông tin như danh sách thành viên, địa chỉ email, các thông tin liên lạc và nội dung bài viết, cấu trúc của diễn đàn Kiwi’s mom cho những mục đích thương mại, kinh doanh hoặc dùng cho ý định cạnh tranh lại với Kiwi’s mom.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Không được sử dụng phần mềm đăng bài tự động, dùng phần mềm khai thác thông tin thành viên tự động, hoặc đăng ký tài khoản tự động bằng phần mềm tại diễn đàn Kiwi’s mom mà không được sự đồng ý của BQT là vi phạm nghiêm trọng quy định của diễn đàn và bạn phải chịu phạt số tiền lên tới 2 tỷ đồng cho BQT diễn đàn. Điều này có nghĩa khi bạn sử dụng phần mềm đăng bài tự động, khai thác thông tin tự động, đăng ký tạo tài khoản tự động mà không được sự đồng ý của BQT là bạn cam kết nộp phạt 2 tỷ đồng cho BQT.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Việc sử dụng dịch vụ hoặc cung cấp dịch vụ nhằm lừa dối có tính hệ thống như nói xấu người khác hoặc cạnh tranh không lành mạnh, tung hứng bán hàng là vi phạm nghiêm trọng quy định của diễn đàn và người vi phạm phải chịu phạt với số tiền lên đến 1 tỷ đồng cho BQT diễn đàn. Điều này có nghĩa là nếu bạn sử dụng hoặc cung cấp dịch vụ lừa dối có tính chất hệ thống là đồng nghĩa với việc bạn cam kết sẽ nôp phạt cho BQT với số tiền 1 tỷ đồng.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Khi bạn tạo tài khoản, kích hoạt, và sử dụng các tính năng của diễn đàn là đồng nghĩa với việc bạn đã ĐỌC, HIỂU và ĐỒNG Ý với quy định này.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Ban quản trị Kiwi’s mom có toàn quyền với những nội dung, cấu trúc, và các thông tin khác trên diễn đàn.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Việc sử dụng phần mềm đồng loạt truy cập vào Kiwi’s mom một cách đồng thời với mục tiêu tấn công máy chủ của Kiwi’s mom là đồng nghĩa với việc bạn đồng ý và cam kết nộp phạt cho BQT Kiwi’s mom số tiền lên đến 100 tỷ đồng.</p>
            <h4>GIỚI HẠN TRÁCH NHIỆM</h4>
            <p><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Khi sử dụng diễn đàn này là đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý rằng đây không phải là nhà xuất bản, không phải là đơn vị báo chí mà chỉ là phương tiện để mọi người trao đổi, chia sẻ và trò chuyện. Và:<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Diễn đàn này là phương tiện giúp các thành viên trao đổi và chia sẻ thông tin. Do vậy diễn đàn và ban quản trị diễn đàn không chịu bất cứ trách nhiệm ràng buộc nào đối với thông tin của người sử dụng đưa lên. BQT diễn đàn từ chối mọi trách nhiệm liên quan đến những hành động hoặc không hành động trong việc xử lý với những thông tin do người dùng đưa lên.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>BQT diễn đàn không chịu trách nhiệm về những thiệt hại, mất mát do bị lừa đảo, thông tin sai lạc, kẻ xấu đột nhập hệ thống, hoặc những ảnh hưởng do sự cố của hệ thống, dừng hoạt động hoặc tốc độ thực hiện tại máy chủ.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Khi sử dụng diễn đàn này là bạn đã đọc, hiểu và đồng ý rằng việc bạn sử dụng thông tin từ Kiwi’s mom cho các mục đích, báo chí, sách, kiện tụng... mà không được sự đồng ý bằng văn bản của BQT là bạn đã xâm phạm quyền sở hữu thông tin và bạn chịu tất cả mọi trách nhiệm về những thiệt hại do việc sử dụng thông tin đó đối với ban quản trị của Kiwi’s mom hay bất cứ bên nào.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Việc bạn đăng ký tạo tài khoản, đăng nhập vào diễn đàn hoặc sử dụng các tính năng của diễn đàn, hoặc trích dẫn thông tin từ diễn đàn này là đồng nghĩa với việc bạn đã ĐỌC, HIỂU, và ĐỒNG Ý với quy định này.</p>
            <p><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Nếu bị phát hiện vi phạm các quy định của diễn đàn, thành viên vi phạm sẽ bị nhắc nhở, cảnh cáo, treo Nick, khóa Nick vĩnh viễn, treo IP, khóa IP vĩnh viễn tùy theo mức độ, hoặc account có thể sẽ bị xóa ngay lập tức mà không phải thông báo trước, và những thông tin về cá nhân của người bị vi phạm có thể sẽ được công khai trên diễn đàn.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>Trường hợp vi phạm quy định diễn đàn nếu nghiêm trọng hoặc có tính chất hệ thống thì BQT có quyền khởi kiện, gửi thông tin cho các cơ quan điều tra, hoặc công khai thông tin cá nhân của những người vi phạm hoặc ủng hộ sự vi phạm đó.<br><span class='icon-tuti'><img src="img/icon-tuti.png"></span>BQT có toàn quyền quyết định trong những trường hợp ngoài quy định trên đây và BQT giữ toàn quyền điều chỉnh những quy định.</p>
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

        // Khai báo và run hàm submit
        $('.content form').submit(function(){
            let pass = $('#password').val();
            let confirmPass = $('#passwordConfirm').val();
            if (pass != confirmPass) {
                alert('Xác nhận mật khẩu không khớp');
                return false;
            }
        });
        $('.checkbox #terms').click(function(){
            if (this.checked){
                $('#buttonSubmit').removeAttr('disabled');
            } else{
                $('#buttonSubmit').attr('disabled','disabled');
            }
        });
    });
</script>
@endsection
