<?php

namespace App\Http\Controllers\comment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Comment;

class CommentPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = empty($request->body) ? true : false;
        if($validator){
            return response()->json([
                'error'    => true,
            ], 422);
        }
        $parent_id = empty($request->parent_id) ? '' : $request->parent_id;
        $input = $request->all();
  
        $newCmt = Comment::create($input);
        return response()->json([
            'error' => false,
            'body' => $newCmt->body,
            'parent_id' => $parent_id,
            'username' => Auth::user()->username,
            'avatar' => Auth::user()->avatar,
            'id' => $newCmt->id,
            'user_id' => $newCmt->user_id,
            'post_id' => $newCmt->post_id,
        ], 200);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if(Auth::user()->id != $request->user_id){
            return redirect()->route('home');
        }
        Comment::where('id', '=', $request->id)->orWhere('parent_id', '=', $request->id)->delete();
        return response()->json([
            'error' => false,
        ], 200);
    }
}
