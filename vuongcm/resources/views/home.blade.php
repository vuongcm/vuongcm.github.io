@extends('templates.all_default',['titleName' => "Kiwi's mom"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-index.css')}}">
@endsection

@section('content')
<article id="article-1" class="mg-top-mobile-0"> <!--Slide-->
        <div id="mycarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
                <li data-target="#mycarousel" data-slide-to="1" class=""></li>
                <li data-target="#mycarousel" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
                <!--Slide 1 thiết lập hiện thị đầu tiên .active-->
                <div class="carousel-item active" id="slide-1">
                    <img class="d-block w-100" src="{{asset('templates/kiwimom/img/slide-1.jpg')}}">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>HÃY LUÔN ĐẶT NIỀM<br>TIN VÀO CON</h1>
                        <a href="#" class="btn btn-light">XEM THÊM</a>
                    </div>
                </div>
                <!--Slide 2-->
                <div class="carousel-item">
                    <img class="d-block w-100" src="{{asset('templates/kiwimom/img/slide-2.jpg')}}">
                </div>
                <!--Slide 3-->
                <div class="carousel-item">
                    <img class="d-block w-100" src="{{asset('templates/kiwimom/img/slide-3.jpg')}}">
                </div>
            </div>
            <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span></a>
            <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </article> <!--Kết thúc slide-->
    <div class="search-container">
        <form action="#">
            <input type="search" placeholder="Từ khóa.." name="search">
            <select name="catalogue">
                <option value="">Chọn mục..</option>
                <option value="Giới thiệu">Giới thiệu</option>
                <option value="Bài học">Bài học</option>
                <option value="Videos">Videos</option>
                <option value="Cửa hàng">Cửa hàng</option>
                <option value="Chia sẻ">Chia sẻ</option>
            </select>
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
        </form>
    </div>
    <article class="article-list" id="article-2">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">GIỚI THIỆU</h2>
            </div>
            <div class="row articles">
                <div class="col-sm-6 item">
                    <a href="about.html#about-1"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-2.jpg')}}"></a>
                    <a href="about.html#about-1"><h3 class="name">Tổng quan về giáo dục sớm</h3></a>
                    <p class="description">Chắc hẳn có rất nhiều ông bố, bà mẹ đã không còn xa lạ với thuật ngữ “Giáo dục sớm” trong quá trình tìm kiếm phương pháp giáo dục tốt nhất cho các em bé đáng yêu của mình...</p>
                </div>
                <div class="col-sm-6 item">
                    <a href="about.html#about-2"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-3.jpg')}}"></a>
                    <a href="about.html#about-2"><h3 class="name">Giới thiệu về Kiwi's mom</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
            </div>
        </div>
    </article>
    <article class="article-list" id="article-3">
        <div class="banner">
            <img src="{{asset('templates/kiwimom/img/banner.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-baby-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-language-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-logic-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-VD-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-NT-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-skill-min.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/icon-KH-min.png')}}" alt="img" class="img-responsive">
            <a href="lesson.html#lesson-1"><h2>NGÔN NGỮ & NHẬN THỨC</h2></a>
            <a href="lesson.html#lesson-2"><h2>LOGIC & TOÁN HỌC</h2></a>
            <a href="lesson.html#lesson-3"><h2>VẬN ĐỘNG</h2></a>
            <a href="lesson.html#lesson-4"><h2>ÂM NHẠC & NGHỆ THUẬT</h2></a>
            <a href="lesson.html#lesson-5"><h2>KỸ NĂNG SỐNG</h2></a>
            <a href="lesson.html#lesson-6"><h2>KHOA HỌC</h2></a>
        </div>
        <div class="container">
            <div class="intro">
                <h2 class="text-center">BÀI HỌC MỚI NHẤT</h2>
            </div>
            <div class="row articles">
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-4.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé tập bơi</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-5.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé nhận biêt hình khối</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-4.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé tập bơi</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-5.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé nhận biêt hình khối</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé nhận biêt hình ảnh</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <a href="#"><img class="img-fluid" alt="img" src="{{asset('templates/kiwimom/img/desk-6.jpg')}}"></a>
                    <a href="#"><h3 class="name">Bé nhận biêt màu sắc</h3></a>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
            </div>
            <div class="read-more">
                <a href="lesson.html" class="btn btn-light">XEM THÊM</a>
            </div>
        </div>
    </article>
    <article class="article-list" id="article-4">
        <div class="banner">
            <img src="{{asset('templates/kiwimom/img/banner.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/image-3-min.png')}}" alt="img" class="img-responsive">
            <h2>VIDEO THỰC HÀNH MẪU<br/>THEO TỪNG LĨNH VỰC</h2>
            <a href="videos.html"><span></span><h2>XEM NGAY</h2></a>
        </div>
        <div class="container">
            <div class="intro">
                <h2 class="text-center">VIDEOS MỚI</h2>
            </div>
            <div class="row articles">
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé nhận biêt hình khối</h3></a>
                    <div class="interactive">
                        <div class="date">March 22, 2019</div>
                        <div class="view">
                            <p><span></span> 200</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé nhận biết màu sắc</h3></a>
                    <div class="interactive">
                        <div class="date">March 12, 2019</div>
                        <div class="view">
                            <p><span></span> 280</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé tập bơi</h3></a>
                    <div class="interactive">
                        <div class="date">March 22, 2019</div>
                        <div class="view">
                            <p><span></span> 200</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé tập ăn dặm</h3></a>
                    <div class="interactive">
                        <div class="date">March 22, 2019</div>
                        <div class="view">
                            <p><span></span> 200</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé nhận biêt hình khối</h3></a>
                    <div class="interactive">
                        <div class="date">March 22, 2019</div>
                        <div class="view">
                            <p><span></span> 200</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 item">
                    <iframe width="100%" src="https://www.youtube.com/embed/Grg3CVl4OEg" frameborder="0" allowfullscreen></iframe>
                    <a href="#"><h3 class="name">Bé nhận biêt hình khối</h3></a>
                    <div class="interactive">
                        <div class="date">March 22, 2019</div>
                        <div class="view">
                            <p><span></span> 200</p>
                            <p><span></span> 2000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="read-more">
                <a href="videos.html" class="btn btn-light">XEM THÊM</a>
            </div>
        </div>
    </article>
    <article id="article-5" class="article-list">
        <div class="banner">
            <img src="{{asset('templates/kiwimom/img/banner.png')}}" alt="img" class="img-responsive">
            <img class="icon" src="{{asset('templates/kiwimom/img/image-4-min.png')}}" alt="img" class="img-responsive">
            <h2>MIỄN PHÍ SHIP<br/>Giảm giá mọi mặt hàng</h2>
            <a href="shop.html" class="btn btn-light">CỬA HÀNG</a>
        </div>
        <div class="container">
            <div class="intro">
                <h2 class="text-center">SẢN PHẨM BÁN CHẠY</h2>
            </div>
            <div id="myCarousel-product" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--Slide 2-->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach-vai.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Sách vải công chúa Disney</h3>
                                            <p><span class="lineThrough">175.000đ</span><span class="textColor">149.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/ghe.png')}}" alt="Sản phẩm 1">
                                        <div class="caption">
                                            <h3>Ghế ô tô Zaracos Aroma<br/>7196 Green (từ 0 đến 6 tuổi)</h3>
                                            <p><span class="lineThrough">2.185.000đ</span><span class="textColor">1.850.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                                <a href="#">
                                    <div class="thumbnail">
                                        <img src="{{asset('templates/kiwimom/img/sach.png')}}" alt="Sản phẩm 2">
                                        <div class="caption">
                                            <h3>Sách Thiên Cơ - Bìa mềm - Túng Mã Càn Khôn</h3>
                                            <p><span class="lineThrough">87.500đ</span><span class="textColor">83.000đ</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <a class="left carousel-control" href="#myCarousel-product" data-slide="prev"><span></span></a>
                <a class="right carousel-control" href="#myCarousel-product" data-slide="next"><span></span></a>

            </div>
        </div>
        <div class="read-more">
            <a href="shop.html" class="btn btn-light">XEM THÊM</a>
        </div>
    </article>
@endsection

@section('js')
<script>
    $(document).ready(function() {
        $('#myCarousel').carousel({ 
            interval:   3000    
        });
        $('#myCarousel-product').carousel({ 
            interval:   5000    
        });
        $('.search-container select').outerHeight($('.search-container input').outerHeight());
        $('#article-3 .banner .icon:nth-child(2)').css('top', `calc(46% - ${0.5 * $('#article-3 .banner .icon:nth-child(2)').outerHeight()}px)`);
        $('iframe').height($('iframe').width() * 2 /3);
        $(window).bind('resize', function(){
            $('.search-container select').outerHeight($('.search-container input').outerHeight());
            $('#article-3 .banner .icon:nth-child(2)').css('top', `calc(46% - ${0.5 * $('#article-3 .banner .icon:nth-child(2)').outerHeight()}px)`);
            $('iframe').height($('iframe').width() * 2 /3);
        });
    });
</script>
@endsection