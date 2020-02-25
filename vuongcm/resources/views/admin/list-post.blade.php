@extends('templates.all_default',['titleName' => "Danh sách bài viết"])
@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-about.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-topic.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/css/style-admin.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('templates/kiwimom/te-editor/jquery-te-1.4.0.css')}}">
@endsection

@section('content')
@if($big_group == '1-6-tuoi')
<article class="about admin-list-post">
    <h1>Danh sách bài viết: 1-6 tuổi</h1>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Nghệ thuật</h2>
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
                @if($row->group == 'nghe-thuat')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Kỹ năng</h2>
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
                @if($row->group == 'ky-nang')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
@elseif($big_group == '0-1-tuoi')
<article class="about admin-list-post">
    <h1>Danh sách bài viết: 0-1 tuổi</h1>
    <div class="container">
        <h2 class="border-none">Vận động</h2>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Giác quan</h2>
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
                @if($row->group == 'giac-quan')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Ngôn ngữ</h2>
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
                @if($row->group == 'ngon-ngu')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Nhận thức</h2>
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
                @if($row->group == 'nhan-thuc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Tình cảm xã hội</h2>
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
                @if($row->group == 'tinh-cam-xa-hoi')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Nghệ thuật</h2>
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
                @if($row->group == 'nghe-thuat')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
@else
<article class="about admin-list-post">
    <h1>Danh sách bài viết: thai giáo</h1>
    <div class="container">
        <h2 class="border-none">Thai giáo cảm xúc</h2>
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
                @if($row->group == 'cam-xuc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo âm nhạc</h2>
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
                @if($row->group == 'am-nhac')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo ngôn ngữ</h2>
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
                @if($row->group == 'ngon-ngu')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo dinh dưỡng</h2>
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
                @if($row->group == 'dinh-duong')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo vận động</h2>
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
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo với bố</h2>
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
                @if($row->group == 'voi-bo')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo mỹ học</h2>
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
                @if($row->group == 'my-hoc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo ánh sáng</h2>
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
                @if($row->group == 'anh-sang')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo bằng ý niệm</h2>
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
                @if($row->group == 'y-niem')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
        <h2>Thai giáo tri thức</h2>
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
                @if($row->group == 'tri-thuc')
                <tr>
                    <td>{{$row->id}}</td>
                    <td>{{$row->admin}}</td>
                    <td><a href="{{ route('detail.post', ['big_group' => $big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{$row->title}}">{{$row->title}}</a></td>
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
@endif
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