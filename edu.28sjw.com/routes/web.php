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
    Route::get("/public/logout", "Admin\PublicController@logout")->name('admin_logout');
});
// 后台需要权限判断的路由
Route::group([
    'prefix' => 'admin',
    'middleware' => ['auth:admin', 'checkrbac'],
], function () {
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

    // 会员管理模块
    Route::get('/member/index', 'Admin\MemberController@index')->name('member_list');  // 展示列表
    Route::any('/member/add', 'Admin\MemberController@add')->name("member_add");   // 添加会员
    Route::post('/uploader/webuploader', 'Admin\UploaderController@webuploader');  // 异步上传头像
    Route::post('/uploader/qiniu', 'Admin\UploaderController@qiniu');  // 将图片上传到七牛云服务去
    Route::get('/member/getareabyid', 'Admin\MemberController@getAreaById')->name("get_area");   // ajax四级联动

    // 专业分类与专业管理
    Route::get('/protype/index', 'Admin\ProtypeController@index')->name('protype_list');
    Route::get('/profession/index', 'Admin\ProfessionController@index')->name('profession_list');

    // 课程与点播课程的管理
    Route::get('/course/index', 'Admin\CourseController@index')->name('course_list');
    Route::get('/lesson/index', 'Admin\LessonController@index')->name('lesson_list');
    Route::get('/lesson/play', 'Admin\LessonController@play')->name('lesson_play');  // 播放视频

    // 试卷试题的管理
    Route::get('/paper/index', 'Admin\PaperController@index')->name('paper_list');   // 试卷展示列表
    Route::get('/question/index', 'Admin\QuestionController@index')->name('question_list');   // 试题展示列表
    Route::get('/question/export', 'Admin\QuestionController@export')->name('question_export');   // 试题导出
    Route::any('/question/import', 'Admin\QuestionController@import')->name('question_import');   // 试题导入

    // 直播管理
    Route::get('/live/index', 'Admin\LiveController@index')->name('live_list');
    Route::get('/stream/index', 'Admin\StreamController@index')->name('stream_list');
    Route::post('/stream/add', 'Admin\StreamController@add')->name('stream_add');
});

