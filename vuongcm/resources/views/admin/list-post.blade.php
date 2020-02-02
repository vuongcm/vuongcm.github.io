@extends('templates.all_default',['titleName' => "Danh sách bài viết"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-topic.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.css')}}">
@endsection

@section('content')
<article class="about admin-list-post">
    <h1>Danh sách bài viết</h1>
    <div class="container">
        <h2 class="border-none">Ngôn ngữ & Nhận thức</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'ngon-ngu-nhan-thuc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Logic & Toán học</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'logic-toan-hoc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Vận động</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'van-dong')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Âm nhạc & Nghệ thuật</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'am-nhac-nghe-thuat')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Kỹ năng sống</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'ky-nang-song')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Khoa học</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Admin</th>
                    <th>Title</th>
                    <th>Tools</th>
                </tr>
            </thead>
            <tbody>
            @foreach($post as $row)
                @if($row->group == 'khoa-hoc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td>{{$row->title}}</td>
                    <td>
                        <a href="/admin/edit-post/{{$row->id}}">Edit</a>
                        <form method="POST" action="/admin/post/delete/{{$row->id}}" onsubmit="return ConfirmDelete( this )">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-link">Delete</button>
                        </form>
                    </td>
                </tr>
                @endif
            @endforeach
            </tbody>
        </table>
    </div>
</article>
@endsection

@section('js')
<script>
    $(document).ready(function() {
        @if (session('success'))
            alert('{{ session('success') }}');
        @endif
        $('.admin-list-post .btn-danger').click(function(){
            if(confirm("Bạn chắc chắn muốn xóa bài này??") == true){
                return true;
            }else{
                return false;
            }
        });
    });
</script>
@endsection