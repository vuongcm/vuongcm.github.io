<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Post;
use Illuminate\Support\Facades\DB;

class AdminPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            if(Auth::user()->level == 1 || Auth::user()->level == 2){
                $post = DB::table('post')->select('*');
                $post = $post->get();

                $pageName = 'Tên Trang - Posts';

                return view('admin/list-post', compact('post', 'pageName'));
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
    public function show($id)
    {
        //
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
