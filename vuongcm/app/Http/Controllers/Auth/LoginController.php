<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\URL;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = "http://" . $_SERVER['SERVER_NAME'] . ":81/".$_SERVER['REQUEST_URI'];
    // protected $redirectTo = URL::current();
    //protected $redirectTo = $_SERVER['REMOTE_ADDR'];
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function username()
    {
        return 'username';
    }
    public function showLoginForm()
    {
        //dd(URL::current());
        return view('home')->with('openLogin', '1');
    }

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
