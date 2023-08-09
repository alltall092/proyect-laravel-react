<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/cursos',[CursosController::class,'index']);
Route::get('/register', [RegisterController::class, 'index']);
Route::post('/store', [RegisterController::class, 'store']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout']);
Route::get('/buscar',[CursosController::class,'buscar'])->name('buscar');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});