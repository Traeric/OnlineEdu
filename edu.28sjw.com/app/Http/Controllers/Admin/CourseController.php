<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    public function index()
    {
        $data = Course::orderBy('sort', 'desc')->get();
        // 展示视频
        return view('admin.course.index', compact('data'));
    }
}
