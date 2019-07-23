<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Auth;
use App\Admin\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class RoleController extends Controller
{
    public function index()
    {
        $data = Role::get();
        return view('admin.role.index', compact('data'));
    }

    public function assign()
    {
        if (Input::method() == "POST") {
            // 获取数据
            $data = Input::only(['id', 'auth_id']);
            // 交给模型处理数据
            $role = new Role();
            return $role->assignAuth($data);
        } else {
            // 获取所有的权限，一级以及二级权限
            $top = Auth::where('pid', '0')->get();
            $cat = Auth::where('pid', '!=', '0')->get();
            return view('admin.role.assign', compact('top', 'cat'));
        }
    }
}
