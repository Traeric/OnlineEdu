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

// 后台不需要权限判断的路由
Route::group(['prefix' => 'admin'], function () {
    // 后台登陆页面
    Route::get("/public/login", "Admin\PublicController@login")->name('login');
    Route::post("/public/login_check", "Admin\PublicController@login_check")->name("admin_login_check");
});
// 后台需要权限判断的路由
Route::group([
    'prefix' => 'admin',
    'middleware' => 'auth',
], function () {
    Route::get("/public/logout", "Admin\PublicController@logout")->name('admin_logout');
    Route::get("/index/index", "Admin\IndexController@index")->name("admin_index");
});

