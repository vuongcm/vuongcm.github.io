<!DOCTYPE html>
<html lang="vi">
<head>
    <title>{{$titleName}}</title>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/ico" href="{{asset('templates/kiwimom/img/favicon.ico')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/bootstrap.min.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-header.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-footer.css')}}">
	@yield('css')
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Charm:700|Dancing+Script:700&display=swap" rel="stylesheet"> 
</head>
<body>
@include('includes.header')

@yield('content')

@include('includes.footer')
@include('includes.login_box')

<script type="text/javascript" src="{{asset('templates/kiwimom/js/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('templates/kiwimom/js/bootstrap.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('templates/kiwimom/js/script-header-footer.js')}}"></script>
@yield('js')
@if (session('openLogin'))
<script type="text/javascript">
	$('.btn-login').click();
</script>
@endif
</body>
</html>