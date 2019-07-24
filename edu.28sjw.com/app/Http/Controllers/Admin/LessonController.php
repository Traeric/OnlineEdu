<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class LessonController extends Controller
{
    public function index()
    {
        // 获取数据
        $data = Lesson::orderBy('sort', 'desc')->get();
        // 展示视图
        return view('admin.lesson.index', compact('data'));
    }

    public function play()
    {
        // 获取视频的id
        $id = Input::get('id');
        // 根据id获取视频地址
        $addr = Lesson::where('id', $id)->value('video_addr');
        // 播放视频
        return view('admin.lesson.play', compact('addr'));
    }
}
