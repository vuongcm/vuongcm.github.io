<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Post;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($big_group)
    {
        if (Auth::check()) {
            if(Auth::user()->level == 1 || Auth::user()->level == 2){
                $post = Post::where('big_group', '=', $big_group)->select('id','admin','group','link','title',)->get();
                return view('admin/list-post', compact('post','big_group'));
            } else{
                return redirect()->route('home');
            }

        }
        else{
            return redirect()->route('login');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::check()) {
            if(Auth::user()->level == 1 || Auth::user()->level == 2){
                return view('admin/create-post');
            } else{
                return redirect()->route('home');
            }

        }
        else{
            return redirect()->route('login');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new Post;
        $post->admin = Auth::user()->username;
        $post->big_group = $request->big_group; 
        $post->group = $request->group; 
        $post->link = $request->link;
        $post->title = $request->title;
        $post->content = $request->content; 
        $post->description = $request->description;
        $post->keywords = $request->keywords;

        $post->save();
        return redirect()->action('admin\AdminPostController@create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$big_group,$group,$link)
    {
        $post = Post::where([['link', '=', $link],['group', '=', $group],['big_group', '=', $big_group],])->select('*')->first();
        if(!$request->session()->has($big_group . $group . $link)){
            $post->view += 1;
            $request->session()->put($big_group . $group . $link, true);
            $post->save();
        }
        $list_posts = Post::where('id', '<>', $post->id)->orderBy('view', 'desc')->limit(5)->select('id','view','big_group','group','link','title',)->get();
        foreach ($list_posts as $key) {
            $cmt_count[$key->id] = DB::table('comments')->where([['post_id', '=', $key->id],['deleted_at', '=', null],])->count();
        }
        $comment_2 = DB::table('comments')->where([['post_id', '=', $post->id],['deleted_at', '=', null],])->select('id','updated_at',)->get();
        Carbon::setLocale('vi');
        $now = Carbon::now('Asia/Ho_Chi_Minh');
        $time[0]='0';
        foreach ($comment_2 as $row){
            $dt = Carbon::create($row->updated_at);
            $time[$row->id] = $dt->diffForHumans($now);
            //$time[$row->id] = $dt;
        }
        return view('detail-lesson', compact('post','list_posts','cmt_count','time',));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::check()) {
            if(Auth::user()->level == 1 || Auth::user()->level == 2){
                $post = Post::findOrFail($id);
                $pageName = 'Post - Update';
                $content = $post->content;
                $a = substr_count($content, "<img");
                //$content_array = explode('<img', $content);
                //$b = count($content_array);
                return view('/admin/edit-post', compact('post', 'a', 'content', 'pageName'));
            } else{
                return redirect()->route('home');
            }

        }
        else{
            return redirect()->route('login');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->admin = Auth::user()->username;
        $post->group = $request->group;
        $post->link = $request->link;
        $post->title = $request->title;
        $post->content = $request->content;
        $post->description = $request->description;
        $post->keywords  = $request->keywords;

        $post->save();
        return redirect()->route('list-post');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);

        $post->delete();
        return redirect()->action('admin\AdminPostController@index')->with('success','Dữ liệu xóa thành công.');
    }
}
