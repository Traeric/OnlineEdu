<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Protype;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProtypeController extends Controller
{
    public function index()
    {
        // 获取数据
        $data = Protype::orderBy('sort', 'desc')->get();
        // 展示视图
        return view('admin.protype.index', compact('data'));
    }
}
