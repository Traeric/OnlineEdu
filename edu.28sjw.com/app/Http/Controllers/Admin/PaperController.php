<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Paper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaperController extends Controller
{
    public function index()
    {
        // 查询数据
        $data = Paper::get();
        // 展示视图
        return view('admin.paper.index', compact('data'));
    }
}
