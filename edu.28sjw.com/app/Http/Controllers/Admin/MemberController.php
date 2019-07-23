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
            // 自动验证
            // 添加数据
            $result = Member::insert([
                'username' => Input::get('username'),
                'password' => bcrypt("123456"),
                'gender' => Input::get('gender'),
                'mobile' => Input::get('mobile'),
                'email' => Input::get('email'),
                'avatar' => '/static/avatar.jpg',
                'country_id' => Input::get("country_id"),
                'province_id' => Input::get("province_id"),
                'city_id' => Input::get("city_id"),
                'county_id' => Input::get("county_id"),
                'type' => Input::get('type'),
                'status' => Input::get('status'),
                'created_at' => date("Y-m-d H:i:s"),
            ]);
            return $result ? '1' : '0';
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
