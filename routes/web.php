<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

// Home
Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {

    // Dashboard
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    // Logout
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');


    // Users
    Route::apiResource('users', UserController::class);

    // Posts
    Route::apiResource('posts', PostController::class);

    // Students
    Route::apiResource('students', StudentController::class);
});

Route::middleware('guest')->group(function () {

    // Login
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    // Register
    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);
});
