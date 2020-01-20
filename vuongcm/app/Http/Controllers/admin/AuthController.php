<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function check()
    {
    	if (Auth::check()) {
    		//echo Auth::user()->level;
		    if(Auth::user()->level == 1 || Auth::user()->level == 2){
		    	return view('admin/index');
		    } else{
		    	return redirect()->route('home');
		    }

		}
		else{
			return redirect()->route('login');
		}
    }
}
