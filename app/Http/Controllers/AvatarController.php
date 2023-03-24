<?php

namespace App\Http\Controllers;

use App\Http\Requests\AvatarRequest;
use App\Http\Resources\AvatarResources;
use App\Models\Avatar;
use Illuminate\Http\Request;

class AvatarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Avatar/Index', [
            "avatars" => Avatar::latest()->paginate(5)
        ]);
    }

    public function store(AvatarRequest $request)
    {
        $attributes = $request->toArray();

        // dd($request->file('image'));

        if ($request->file('image')) {
            $image = $request->file('image')->getClientOriginalName();
            $validateData['image'] = $request->file('image')->storeAs('avatars', $image);
        }

        $attributes['image'] = $request->file('image')->getClientOriginalName();

        Avatar::create($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Avatar has ben created!"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Avatar $avatar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Avatar $avatar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Avatar $avatar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Avatar $avatar)
    {
        //
    }
}
