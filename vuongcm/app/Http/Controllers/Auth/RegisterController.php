<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data,
        [
            'username' => ['required', 'string', 'min:3', 'max:16', 'unique:users'],
            'lastname' => ['required', 'string', 'max:10'],
            'firstname' => ['required', 'string', 'max:10'],
            'gender' => 'required',
            'email' => ['required', 'string', 'email', 'max:30', 'unique:users'],
            'password' => 'required|string|min:6|confirmed',
        ],
        [
            'username.required' => 'Tên đăng nhập không được để trống',
            'username.min' => 'Tên đăng nhập không được ít hơn 3 ký tự',
            'username.max' => 'Tên đăng nhập không được nhiều hơn 16 ký tự',
            'username.unique' => 'Tên đăng nhập đã tồn tại',
            'lastname.required' => 'Bạn chưa điền "Họ" của mình',
            'lastname.max' => '"Họ" không được nhiều hơn 10 ký tự',
            'firstname.required' => 'Bạn chưa điền "Tên" của mình',
            'firstname.max' => '"Tên" không được nhiều hơn 10 ký tự',
            'email.unique' => 'Email đã tồn tại',
            'email.required' => 'Email không được để trống',
            'email.max' => 'Email không được nhiều hơn 30 ký tự',
            'email.email' => 'Email không đúng định dạng',
            'gender.required' => 'Bạn chưa chọn giới tính',
            'password.required' => 'Mật khẩu không được để trống',
            'password.min' => 'Mật khẩu không được ít hơn 6 ký tự',
            'password.confirmed' => 'Xác nhận Mật khẩu không khớp',
        ]);

    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'level' => '3',
            'status' => '0',
            'username' => $data['username'],
            'lastname' => $data['lastname'],
            'firstname' => $data['firstname'],
            'gender' => $data['gender'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
