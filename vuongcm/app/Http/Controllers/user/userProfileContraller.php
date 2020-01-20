<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Session;

class userProfileContraller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected function validator(array $data)
    {
        return Validator::make($data,
        [
            'lastname' => ['required', 'string', 'max:10'],
            'firstname' => ['required', 'string', 'max:10'],
            'gender' => 'required',
        ]);

    }
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
        //
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
    public function update(Request $request)
    {
        /*$news = User::find($request->id);
            $news->lastname = $request->lastname;
            $news->firstname = $request->firstname;
            $news->gender = $request->gender;

            $news->save();
            return redirect('/thong-tin-tai-khoan');*/
        // Kiểm tra dữ liệu vào
        $allRequest  = $request->all(); 
        $validator = $this->validator($allRequest);
        if ($validator->fails()){
            return redirect('/thong-tin-tai-khoan');
        } else{
            $news = User::find($request->id);
            $news->lastname = $request->lastname;
            $news->firstname = $request->firstname;
            $news->gender = $request->gender;

            $news->save();
            return redirect('/thong-tin-tai-khoan');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
