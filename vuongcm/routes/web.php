<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('index');

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');
//route::get('login', 'Auth\LoginController@getLogin');
//route::post('login', 'Auth\LoginController@postLogin');
Route::get('/admin', 'admin\AuthController@check')->name('adminHome');
Route::get('/thong-tin-tai-khoan', function () {
    return view('user/profile');
})->middleware('auth');
Route::get('/chinh-sua-tai-khoan', function () {
    return view('user/editprofile');
})->middleware('auth');
Route::post('/chinh-sua-tai-khoan', 'user\userProfileContraller@update');
Route::get('/admin/create-post', 'admin\AdminPostController@create')->name('create-post');
Route::post('/admin/create-post', 'admin\AdminPostController@store');
Route::get('/admin/list-post/{big_group}', 'admin\AdminPostController@index')->name('list-post');
Route::DELETE('/admin/post/delete/{id}', 'admin\AdminPostController@destroy');
Route::get('/admin/edit-post/{id}', 'admin\AdminPostController@edit');
Route::PATCH('/admin/update-post/{id}', 'admin\AdminPostController@update');
Route::get('bai-hoc/{big_group}/{group}/{link}', 'admin\AdminPostController@show')->name('detail.post');

Route::post('/post/comment-create', 'comment\CommentPostController@store')->name('post-comment-create');
Route::post('/post/comment-delete', 'comment\CommentPostController@destroy');

Route::get('/gioi-thieu', function () {
    return view('about');
});