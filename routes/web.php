<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

// Home
Route::get('/', HomeController::class);

// Dashboard
Route::get('/dashboard', DashboardController::class);

// Login
Route::get('/login', [LoginController::class, 'create']);
Route::post('/login', [LoginController::class, 'store']);

// Login
Route::get('/register', [RegisterController::class, 'create']);
Route::post('/register', [RegisterController::class, 'store']);
