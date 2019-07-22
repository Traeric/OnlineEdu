<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class PublicController extends Controller
{
    public function login()
    {
        return view("admin.public.login");
    }

    public function login_check(Request $request)
    {
        $this->validate($request, [
            // 验证规则：必填
            "account" => "required",
            // 必填，长度最少六位
            "password" => "required|min:6",
            // 必填，长度是4，必须是合法的验证码
            "captcha" => "required|size:4|captcha",
        ]);

        // 基本验证通过，继续开始身份核实
        $data = $request->only(['account', 'password']);
        // 如果填写的是邮箱
        $email_result = Auth::guard('admin')->attempt([
            'email' => $data['account'],
            'password' => $data['password'],
            'status' => '2',   // 要求状态是启用的用户
        ], $request->get('remember'));
        // 如果用户填写的是手机号码
        $mobile_result = Auth::guard('admin')->attempt([
            'mobile' => $data['account'],
            'password' => $data['password'],
            'status' => '2',   // 要求状态是启用的用户
        ], $request->get('remember'));
        // 验证成功
        if ($email_result or $mobile_result) {
            // 跳转到后台首页
            return redirect(route('admin_index'));
        } else {
            // 重定向到登陆页面
            return redirect(route('login'))->withErrors([
                'loginError' => "账号或密码错误"
            ]);
        }
    }

    public function logout()
    {
        // 退出
        Auth::guard('admin')->logout();
        // 跳转到登陆页面
        return redirect(route('login'));
    }
}
