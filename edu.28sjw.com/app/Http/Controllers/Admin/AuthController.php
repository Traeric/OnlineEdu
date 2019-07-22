<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class AuthController extends Controller
{
    /**
     * 展示所有的权限
     */
    public function index()
    {
        return view('admin.auth.index');
    }

    public function add()
    {
        // 判断请求类型
        if (Input::method() == 'POST') {
            // 接收数据存入数据表
            $data = Input::except('_token');
            return Auth::create($data);
        } else {
            // 查询父级权限
            $parents = Auth::where('pid', '=', '0')->get();
            return view('admin.auth.add', compact('parents'));
        }
    }
}
