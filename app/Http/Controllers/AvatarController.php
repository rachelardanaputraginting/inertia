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
        $picture = $request->file('image');

        Avatar::create([
            'name' => $request->name,
            'image' => $request->hasFile('image') ? $picture->storeAs(
                'images/avatars',
                $request->file('image')->getClientOriginalName()
            ) : null,   
        ]);

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
