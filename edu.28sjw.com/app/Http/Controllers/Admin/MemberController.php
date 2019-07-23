<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

class MemberController extends Controller
{
    public function index()
    {
        $data = Member::get();
        return view('admin.member.index', compact('data'));
    }

    public function add()
    {
        if (Input::method() == "POST") {

        } else {
            // 四级联动，查询顶级的国家
            $countrys = DB::table('area')->where('pid', '0')->get();
            return view('admin.member.add', compact('countrys'));
        }
    }

    public function getAreaById() {
        // 接收id
        $id = Input::get('id');
        // 根据id查询下一个地区
        $data = DB::table('area')->where('pid', $id)->get();
        // 返回查到的json数据
        return response()->json($data);
    }
}
