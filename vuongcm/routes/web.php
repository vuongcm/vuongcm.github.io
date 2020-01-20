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
Route::get('/tao-bai-viet', 'admin\AdminPostController@create')->name('tao-bai-viet');
Route::post('/tao-bai-viet', 'admin\AdminPostController@store');