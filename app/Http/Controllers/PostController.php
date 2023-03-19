<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Posts/Index', [
            "posts" => Post::latest()->paginate(10)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostRequest $request)
    {

        $attributes = $request->toArray();

        Post::create($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Post has been created!"
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $attributes = $request->toArray();

        $post->update($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Post has been updatet!"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return back()->with([
            "type" => "success",
            "message" => "User has ben deleted!"
        ]);
    }
}
