<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function Register(Request $request)
    {
        $requestValidated = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed'
        ]);

        $requestValidated['password'] = \bcrypt($request->password);
        $user = User::create($requestValidated);
        $accessToken = $user->createToken('authToken')->accessToken;
        return response(['user' => $user, 'access_token' => $accessToken]);
    }

    public function Login(Request $request)
    {
        $requestValidated = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($requestValidated)) {
            return response(['message'=> 'Invalid credentials']);
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        
        return response(['user' => auth()->user(), 'access_token' => $accessToken]);
    }

    public function Logout() {
        $user = auth()->user()->token();
        $user->revoke();
        return response()->json(null, 204);
    }
}
