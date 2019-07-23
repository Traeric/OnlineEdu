<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class CheckRbac
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard('admin')->user()->role_id != '1') {
            // 获取当前的路由下执行的控制器跟方法 即：App\Http\Controllers\Admin\RoleController@index
            $route = Route::currentRouteAction();
            // 获取当前用户对应的ac权限
            $ac = Auth::guard('admin')->user()->role->auth_ac;
            $ac .= ',indexcontroller@index';
            // 判断权限
            $routeArr = explode('\\', $route);
            if (strpos($ac, strtolower(end($routeArr))) === false) {
                // 不在权限内，不能查看
                return response()->view("admin.4xx.304");
            }
        }
        // 继续执行后续请求
        return $next($request);
    }
}
