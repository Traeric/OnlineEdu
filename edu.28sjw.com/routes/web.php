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
    'middleware' => 'auth:admin',
], function () {
    Route::get("/public/logout", "Admin\PublicController@logout")->name('admin_logout');
    // 后台管理首页
    Route::get("/index/index", "Admin\IndexController@index")->name("admin_index");
    // 管理员的管理模块
    Route::get("/manager/index", 'Admin\ManagerController@index')->name('manager_index');

    // 权限管理模块
    Route::get('/auth/index', 'Admin\AuthController@index')->name('auth_index');   // 展示权限
    Route::any('/auth/add', 'Admin\AuthController@add')->name('auth_add');

    // 角色管理模块
    Route::get('/role/index', 'Admin\RoleController@index')->name('role_index');    // 展示角色
    Route::any('/role/assign', 'Admin\RoleController@assign')->name('role_assign');
});

