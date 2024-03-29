<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Users/Index', [
            // "users" => User::get()
            "users" => User::latest()->paginate(10),
            "addAddUser" => Auth::user()->can('add_user')
        ]);
    }

    public function store(UserRequest $request)
{
        $this->authorize('add_user', Auth::user());

        $attributes = $request->toArray();

        User::create($attributes);

        return back()->with([
            "type" => "success",
            "message" => "User was created!"
        ]);
    }

    public function show(User $user)
    {
        //
    }

    public function update(UserRequest $request, User $user)
    {
        $attributes = $request->toArray();

        $user->update($attributes);

        return back()->with([
            "type" => "success",
            "message" => "User was updated!"
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with([
            "type" => "success",
            "message" => "Users wa deleted!",
        ]);
    }
}
