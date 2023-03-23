<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Students/Index', [
            "students" => Student::latest()->paginate(10)
        ]);
    }

    public function store(StudentRequest $request)
    {
        $attributes = $request->toArray();

        Student::create($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Student has been created!"
        ]);
    }

    public function update(StudentRequest $request, Student $student)
    {
        $attributes = $request->toArray();

        $student->update($attributes);

        return back()->with([
            "type" => "success",
            "message" => "Student has been updated!"
        ]);
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return back()->with([
            "type" => "success",
            "message" => "Student has ben deleted!"
        ]);
    }
}
