<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Students/Index', [
            "students" => Students::latest()->paginate(10)
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            "name" => ['required', 'min:3'],
            "nim" => ['numeric', 'required'],
            "address" => ['min:8']
        ]);

        Students::create($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Student has been created!"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Students $students)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Students $students)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Students $students)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Students $students)
    {
        //
    }
}
