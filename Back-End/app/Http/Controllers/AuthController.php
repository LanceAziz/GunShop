<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    //Register Function
    public function register(Request $request){

        // //Data Validation
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|string|max:50',
        //     'birthdate' => 'required|date',
        //     'password' => 'required|string|min:5|max:50',
        //     'license' => 'required|string|min:15|max:15',
        // ]);

        // //Error Response For Invalid Data
        // if ($validator->fails()){
        //     $errors = $validator->errors();
        //     return response()->json($errors);
        // }

        // Storing New Registered User In Database
        $user = User::create([
            'name' => $request->name,
            'birthdate' => $request->birthdate,
            'license' => $request->license,
            'password' => Hash::make($request->password),
            'access_token' => Str::random(64)
        ]);
        $user->save();
        
        // Returning User in Json Respone with Status code 201
        return response()->json($user, 201);
    }


    //Login Function
    public function login(Request $request){

        // //Data Validation
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|string|max:50',
        //     'password' => 'required|string|min:5|max:50',
        // ]);

        // //Error Response For Invalid Data
        // if ($validator->fails()){
        //     $errors = $validator->errors();
        //     return response()->json($errors);
        // }

        // Checking For User Existance In Database
        $is_user = Auth::attempt(['name' => $request->name, 'password' => $request->password]);

        // Returning Error Json Response For Invalid User With Status Code 404
        if (! $is_user){
            $error = "Invalid User";
            return response()->json($error, 404);
        }

        // Retrieving The User From Database By Name
        $user = User::where('name', '=', $request->name)->first();

        // Generating New Access Token
        $new_access_token = Str::random(64);
        $user->update([
            'access_token' => $new_access_token
        ]);
        $user->save();
        
        // Returning User Json Respone with Status code 200
        return response()->json($user, 200);
    }


    // Logout Function
    public function logout(Request $request){

        // Retrieving User By Access Token
        $access_token = $request->access_token;
        $user = User::where('access_token', '=', $access_token)->first();

        // Returning Error Json Response If Access Token Didnt Retrieve a Certain User With Status Code 404
        if($user == null){
            $error = 'Token Not Correct';
            return response()->json($error, 404);
        }

        // Remove Access Token On Logout
        $user->update([
            'access_token' => null
        ]);

        // Returning Success Json Response For Logout With Status code 200
        $success = 'Logged Out Successfully';
        return response()->json($success, 200);
    }
}