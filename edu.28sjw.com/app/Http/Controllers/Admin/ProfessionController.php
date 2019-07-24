<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Profession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfessionController extends Controller
{
    public function index() {
        // 获取数据
        $data = Profession::orderBy('sort', 'desc')->get();
        // 展示视图
        return view('admin.profession.index', compact('data'));
    }
}
