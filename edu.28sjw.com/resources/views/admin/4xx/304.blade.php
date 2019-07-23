@extends('admin.index.base')

@section('title')
    权限不足
@endsection

@section('css')
    <style>
        .bk-gray {background-image: url("/admin/static/h-ui.admin/images/admin-login-bg.jpg"); padding-bottom: 450px;}
        .block {width: 100%; height: 120px; line-height: 120px; text-align: center;
            font-weight: bolder; font-size: 80px; color: #f9f9f9; text-shadow: 6px 6px 6px #000;
            margin-top: 150px;}
        .message {width: 100%; text-align: center; height: 60px; line-height: 60px}
        .message .role {font-weight: bolder; color: #f90;}
        .message .name {font-weight: bolder; color: #f00;}
        .operations {width: 100%; text-align: center; height: 40px; line-height: 40px;}
    </style>
@endsection

@section('content')
    <div class="cl pd-5 bg-1 bk-gray">
        <div class="block">权限不足</div>
        <div class="message">
            对不起
            <span class="role">{{\Illuminate\Support\Facades\Auth::guard('admin')->user()->role->role_name}}</span>
            <span class="name">{{\Illuminate\Support\Facades\Auth::guard('admin')->user()->username}}</span>，
            你没有访问该模块的权限，如果想要访问，请联系超级管理员为你添加权限
        </div>
        <div class="operations">
            <span><a href="{{route('admin_index')}}">返回首页</a></span>
            <span><a href="javascript:history.back();">返回上一页</a></span>
        </div>
    </div>
@endsection


