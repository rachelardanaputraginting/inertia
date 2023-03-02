<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $request->validate([
            "email" => 'required',
            "password" => 'required'
        ]);

        if (Auth::attempt($request->only('email', 'password'), $request->remember)) {
            session()->regenerate();

            return redirect('/dashboard');
        }

        throw ValidationException::withMessages([
            'email' => 'Email tidak sama dengan data yang ada',
        ]);
    }
}
