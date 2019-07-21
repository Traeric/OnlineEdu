<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 后台路由部分
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {
    // 后台登陆页面
    Route::get("/public/login", "Admin\PublicController@login");
});

