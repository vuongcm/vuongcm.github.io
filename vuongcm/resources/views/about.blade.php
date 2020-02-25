@extends('templates.all_default',['titleName' => "Giới thiệu"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
@endsection

@section('content')
<div class="link">
    <a href="{{ route('home') }}">Trang chủ </a>
    <span></span>
    <a href="javascript:;"> Giới thiệu</a>
</div>
<article class="about" id="about-1">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-top-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h2>TỔNG QUAN VỀ "GIÁO DỤC SỚM"</h2>
        </div>
    </div>
    <div id="content-about-1" class="content">
        <p>Chắc hẳn có rất nhiều ông bố, bà mẹ đã không còn xa lạ với thuật ngữ “Giáo dục sớm” trong quá trình tìm kiếm phương pháp giáo dục tốt nhất cho các em bé đáng yêu của mình, mẹ Kiwi sẽ chia sẻ đầy đủ và súc tích nhất về khái niệm, nguyên lý, mục đích, nguyên tắc,… của Giáo dục sớm trong bài dưới đây. Hi vọng sẽ mang đến cái nhìn tổng quan nhất cho các bố mẹ.</p>
        <h5>1. “Giáo dục sớm” là gì?</h5>
        <p>Giáo dục sớm (GDS): là phương pháp giáo dục cho trẻ từ 0 đến 6 hoặc 8 tuổi bằng cách khích thích chức năng của não bộ phát triển trong thời kỳ sinh trưởng của não.</p>
        <h5>2. Mục đích của việc “giáo dục sớm” là gì?</h5>
        <p>Mẹ Kiwi đã áp dụng GDS cho Kiwi từ khi còn trong bụng (Thai giáo), thậm trí là nghĩ đến con và tâm niệm về những gì mẹ có thể làm cho Kiwi từ rất lâu trước khi có bầu. Mục đích của Mẹ Kiwi không phải là để biến con mình trở thành thiên tài hay thần đồng mà là để hiện thực hóa tình yêu của mẹ với con qua việc việc nuôi dạy con từ sớm, hiểu con, làm bạn với con, phát huy tối đa những khả năng và tố chất của con, giúp có nền tảng vững chắc về sức khỏe, trí tuệ, nhân cách và sau này vững bước trong cuộc đời, an nhiên, vui vẻ.</p>
        <h5>3. Nguyên lý của “giáo dục sớm” như thế nào?</h5>
        <p>Theo thuyết tài năng thuyên giảm và phát triển của não trẻ, 6 năm đầu tiên của bé có thể được chia ra làm 4 giai đoạn như sau:</p>
        <img src="{{asset('templates/kiwimom/img/thap-shichida.jpg')}}" alt="Tháp shichida" title="Tháp Shichida" class="img-responsive">
        <p>-Giai đoạn thai kỳ: là thời điểm các tế bào thần kinh được hình thành. Ở giai đoạn này các tế bào thần kinh sẽ phát triển bùng nổ với số lượng cực lớn. GDS trong giai đoạn này giúp tăng số lượng tế bào thần kinh của bào thai trong bụng mẹ, giúp não bộ phát triển một cách tối ưu.</p>
        <p>-Giai đoạn 0-3 tuổi: Do cơ chế tự cắt tỉa của não bộ nên những kết nối thần kinh nào được tác động sẽ được giữ lại còn những kết nối nào không được tác động đến sẽ mất đi. GDS tạo ra các xúc tác phong phú giúp các kết nối thần kinh được tác động liên tục, giữ lại tối đa các kết nối sẵn có và tăng cường các kết nối thần kinh, tạo ra các cửa sổ cơ hội để trẻ phát triển toàn diện.</p>
        <p>-Giai đoạn 3-6 tuổi: Não trái sẽ phát triển, GDS giúp tăng cường sự kết nối giữa bán cầu não phải và bán cầu não trái. GDS còn đóng vai trò quan trọng trong sự hình thành tính cách của trẻ, là nền tẳng để phát triển nhân cách, đạo đức và lối sống của trẻ sau này.</p>
        <h5>4. Nguyên tắc của “giáo dục sớm”</h5>
        <p>Để áp dụng thành công GDS cho bất kỳ em bé nào thì các bố mẹ cũng cần tuân thủ các nguyên tắc vàng sau, để GDS đạt kết quả tốt nhất và tạo ra niềm vui, hạnh phúc trong chính mỗi gia đình.</p>
        <p>- Bắt đầu càng sớm càng tốt: đừng ngần ngại mà chờ đợi để mất đi thời gian quý báu của bạn và con bạn. Hãy GDS cho con càng sớm càng tốt, từ những điều tự nhiên, đơn giản và trân thành nhất như trò chuyện, chơi với con, ôm con…. và thể hiện tình yêu thương vô bờ bến của bạn.</p>
        <p>- Luôn cổ vũ, khích lệ, động viên trẻ: Hãy nhớ rằng con bạn chưa từng làm bất kỳ việc gì trước đây, tất cả những gì con làm đều là lần đầu, nên hãy bỏ những kỳ vọng hay so sánh sang một bên, tận hưởng từng khoảng khắc bên con và vui vẻ làm những gì con và bạn đều thích, quá trình quan trọng hơn kết quả nên hãy luôn khen ngợi khi con đã cố gắng trong suốt quá trình nhé.</p>
        <p>- Luôn vui vẻ, tự nhiên và tự phát: Đừng gò bó vào bất kỳ khuôn khổ hay chuẩn mực nào. Khi GDS điều quan trọng nhất là tâm lý yêu thích khám phá của trẻ. Hãy làm theo cảm hứng để cả mình và trẻ thăng hoa, tìm hiểu sâu để dạy những gì trẻ thích.</p>
        <p>- Học trong cuộc sống: Khám phá cuộc sống luôn là đề tài khiến trẻ ham mê và yêu thích nhất, còn trần trừ gì nữa mà bạn và con không cùng khám phá cuộc sống muôn màu, những điều đơn giản nhất đôi khi lại là những điều kỳ diệu nhất trong mắt con trẻ. Gắn liền mọi bài học vào cuộc sống là cách thực hành kiến thức tốt nhất và cho trẻ nhiều trải nghiệm chân thực nhất.</p>
        <p>- Không kiểm tra: Không kiểm tra ngay khi bạn vừa dạy con một kiến thức nào đó mà hãy cho trẻ được thực hành qua các trò chơi và áp dụng vào cuộc sống kiến thức đó. Như vậy những kiến thức sẽ được ghi nhớ tự nhiên và chính trẻ sẽ khai thác kiến thức đó theo nhu cầu của trẻ.</p>
        <p>- Không ép buộc hay đe dọa trẻ học: Mọi em bé đều thích được chơi, khám phá và trải nghiệm nhưng khi trẻ ốm, buồn ngủ, căng thẳng hay lo lắng thì dạy trẻ sẽ phản tác dụng, trẻ không những không tiếp thu mà còn sinh ra tâm lý lo sợ, phản kháng. Hãy bắt đầu khi trẻ thoải mái nhất, thực sự muốn khám phá và bố mẹ hãy kích thích sự tò mò của con để tạo hứng thú cho trẻ.</p>
        <p>- Dừng lại trước khi trẻ muốn dừng: Đây là nguyên tắc quan trọng nhất và cũng khó nhất khi GDS cho trẻ. Dừng lại đúng lúc sẽ vẫn thỏa mãn được nhu cầu khám phá và niềm vui của trẻ mà không làm mất đi sự tò mò, hứng khởi trong những hoạt động tiếp theo. Mỗi em bé lại có những khả năng, sở thích, sở trường riêng và thời gian tập trung khác nhau nên các bố mẹ hãy quan sát và tôn trọng con để giúp con kéo dài thời gian tập trung, khám phá sâu hoạt động mà không bị nhàm chán nhé ạ.</p>
        <p>Mẹ Kiwi sẽ cụ thể các nguyên tắc qua từng hoạt động bằng các clip để các bố mẹ hiểu rõ hơn và áp dụng dễ hơn nhé. Nắm chắc các nguyên tắc đảm bảo các bố mẹ có GDS bằng phương pháp nào đi chăng nữa thì cũng sẽ thành công</p>
        <h5>5. Một số phương pháp giáo dục sớm:</h5>
        <p>Hiện nay có rất nhiều các phương pháp GDS của các quốc gia phát triển trên thế giới đã được nhiều bố mẹ áp dụng thành công:</p>
        <p>– Phương pháp 0 tuổi - Trung Quốc</p>
        <p>– Giáo dục sớm theo phương pháp Glenn Doman</p>
        <p>– Phương pháp giáo dục Shichida – Nhật Bản</p>
        <p>– Phương pháp Montessori - Ý</p>
        <p>– Người Do thái<br/>...</p>
        <p>Mỗi phương pháp đều có ưu điểm và nhược điểm riêng, các bố mẹ cần tìm hiểu thật kỹ từng phương pháp trước khi áp dụng cho con mình. Mẹ Kiwi thấy mỗi phương pháp đều rất hay và chú trọng những yếu tố riêng, nhưng trong điều kiện một gia đình bình thường ở Việt Nam và muốn Kiwi được giáo dục trong môi trường văn hóa của người Việt Nam nên Mẹ Kiwi đã kết hợp các phương pháp và thay đổi một chút cho phú hợp với đại đa số gia đình Việt Nam để vẫn lĩnh hội được những ưu tú trong các phương pháp giáo dục sớm mà không làm mất đi bản sắc văn hóa.</p>
        <p>Nội dung GDS là tất cả những gì bé có thể học được từ 0-6 tuổi, rất rộng và phong phú. Nhưng để các bố mẹ dễ thực hiện và có hệ thống Mẹ Kiwi sẽ chia làm 6 nội dung chính: Ngôn ngữ và Nhận thức; Toán học và Logic; Vận động; Khoa học; Âm nhạc và Nghệ thuật; Kỹ năng sống. Trong từng phần sẽ có những hoạt động và bài học cụ thể được xây dựng từ dễ đến khó, từ cơ bản đến mở rộng. Các clip hướng dẫn đều là hoạt động trực tiếp mẹ và Kiwi cùng thực hiện sẽ giúp các bố mẹ có ví dụ trực quan và dễ thực hành với các con yêu ở nhà hơn nhé.</p>
        <p>Mong rằng chia sẻ trên đây của Mẹ Kiwi đã giúp các bố mẹ hiểu hơn phần nào về GDS và tự tin để bước cùng con khám phá mọi điều trong cuộc sống.</p>
    </div>
</article>
<article class="about" id="about-2">
    <div class="banner">
        <img src="{{asset('templates/kiwimom/img/banner-bot-min.png')}}" alt="img" class="img-responsive">
        <div>
            <button class="navbar-toggler togg">
                <span class="plus"></span>
                <span class="minus"></span>
            </button>
            <h2>ĐÔI NÉT VỀ "KIWI'S MOM"</h2>
        </div>
    </div>
    <div class="content" id="content-about-2">
        <p>Kiwi’s mom ra đời trong hoàn cảnh các phương pháp Giáo dục sớm đang nở rộ ở các thành phố lớn ở Việt Nam và bắt đầu nhen nhóm ở khắp các tỉnh thành trong cả nước, nhưng lại không hề có một trang web nào cung cấp đầy đủ kiến thức Giáo dục sớm (GDS) và hướng dẫn kỹ năng giúp các cha mẹ GDS cho con hiệu quả. Chính vì vậy mẹ Kiwi ấp ủ muốn đưa đến cho các bố mẹ ở khắp mọi nơi trên đất nước Việt Nam, không phân biệt giàu nghèo, chỉ cần muốn tìm tòi và áp dụng đúng đắn nhất GDS cho con một trang web GDS chất lượng. Kiwi’s mom sẽ cung cấp đầy đủ các kiến thức, kỹ năng và công cụ để bất kỳ bậc làm cha làm mẹ nào cũng dễ dàng áp dụng GDS cho em bé nhà mình.</p>
        <p>Mẹ Kiwi may mắn được tiếp xúc với GDS từ năm 2014, và trở thành thành viên của Viện nghiên cứu và phát triển tiềm năng con người IPD năm 2015. Viện IPD là đơn vị đầu tiên nghiên cứu và chuyển giao các phương pháp GDS tại Việt Nam. Với kinh nghiệm 5 năm trực tiếp dạy GDS cho rất nhiều các bạn nhỏ từ 0 - 6 tuổi và sẽ tiếp tục nghiên cứu, học hỏi nhiều hơn nữa, mẹ Kiwi hi vọng sẽ cung cấp cho bố mẹ những kiến thức GDS đầy đủ và chi tiết nhất thông qua 6 lĩnh vực: Ngôn ngữ và nhận thức; Toán học và logic; Vận động; Khoa học; Âm nhạc và nghệ thuật; Kỹ năng sống. Các kiến thức này sẽ được cụ thể hóa bằng các clip hoạt động trực tiếp của mẹ Kiwi với Kiwi. Thông qua các clip này bố mẹ sẽ có cái nhìn trực quan và sinh động nhất cách GDS cho con như thế nào. Các bài học và clip sẽ được đội ngũ Kiwi’s mom cập nhật liên tục trên trang web cũng như kênh youtube của Kiwi’s mom. Rất mong nhận được sự góp ý và ủng hộ của các bố mẹ để Kiwi’s mom có những bài đăng và clip chất lượng hơn nữa. Góp phần đưa GDS đến với nhiều em bé trên khắp Việt Nam, xây dựng thế hệ tương lai người Việt phát triển toàn diện cả thể chất lẫn tinh thần, cả trí tuệ và trí lực.</p>
        <p>Ngoài ra mẹ Kiwi cũng ấp ủ giới thiệu các sản phẩm sách, đồ chơi GDS chất lượng, của các nhà sản xuất uy tín đến với bố mẹ. Hiện nay các sản phẩm sách mà Kiwi’s mom cung cấp đều được nhập từ nhà xuất bản với chất lượng tốt nhất. Các sản phẩm đồ chơi cũng như các sản phẩm khác đều do mẹ Kiwi lựa chọn và sử dụng để dạy GDS cho Kiwi cũng như rất nhiều bạn nhỏ khác. Nên bố mẹ có thể hoàn toàn yên tâm sử dụng các sản phẩm này.</p>
    </div>
</article>
@endsection

@section('js')
<script type="text/javascript">
    $(document).ready(function() {
       let a, b;
        $('.about').css('--height',`${$('.about img').height()}px`);
        for (let i=0; i < $('.about').length; i++) {
            b = '#about-' + (i+1);
            a = $('.about').eq(i);
            if ($(location).attr('hash') != b && $(location).attr('hash') != '') {
                a.toggleClass('lego');
                a.children('.content').toggle();
            } else if ($(location).attr('hash') == '') {
                $('.content').toggle();
            }
        }
        for (let i=0; i < $('.togg').length; i++) {
            a = $('.togg').eq(i);
            if (a.closest('.about').children('.content').css('display') == 'none') {
                a.children(".minus").css('display', 'block');
                a.children(".plus").css('display', 'none');
            } else {
                a.children(".minus").css('display', 'none');
                a.children(".plus").css('display', 'block');
            }
        }
        $('.togg').bind('click', function(){
            $(this).closest('.about').children('.content').slideToggle(600,'linear');
            $(this).closest('.about').toggleClass('lego');
            $(this).children(".minus").toggle();
            $(this).children(".plus").toggle();
        });
    });

</script>
@endsection