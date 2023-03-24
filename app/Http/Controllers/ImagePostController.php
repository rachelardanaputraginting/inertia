<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagePostController extends Controller
{
    public function index()
    {
        return inertia('Students/ImagePost');
    }
}
