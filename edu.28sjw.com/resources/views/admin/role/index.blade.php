@extends('admin.index.base')

@section('title')
    角色管理
@endsection

@section('breadcrumb')
    <nav class="breadcrumb">
        <i class="Hui-iconfont">&#xe67f;</i> 首页
        <span class="c-gray en">&gt;</span> 管理员管理
        <span class="c-gray en">&gt;</span> 角色管理
        <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" >
            <i class="Hui-iconfont">&#xe68f;</i>
        </a>
    </nav>
@endsection

@section('content')
    <div class="cl pd-5 bg-1 bk-gray">
        <span class="l">
            <a href="javascript:void(0);" onclick="datadel()" class="btn btn-danger radius">
                <i class="Hui-iconfont">&#xe6e2;</i> 批量删除
            </a>
            <a class="btn btn-primary radius" href="javascript:void(0);" onclick="admin_role_add('添加角色','admin-role-add.html','800')">
                <i class="Hui-iconfont">&#xe600;</i> 添加角色
            </a>
        </span>
    <div class="mt-10">
        <table class="table table-border table-bordered table-hover table-bg">
            <thead>
            <tr>
                <th scope="col" colspan="6">角色管理</th>
            </tr>
            <tr class="text-c">
                <th width="25"><input type="checkbox" value="" name=""></th>
                <th width="40">ID</th>
                <th>角色名</th>
                <th>权限id集合</th>
                <th>权限ac集合</th>
                <th width="70">操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach($data as $val)
                <tr class="text-c">
                    <td><input type="checkbox" value="{{$val->id}}" name=""></td>
                    <td>{{$val->id}}</td>
                    <td>{{$val->role_name}}</td>
                    <td>{{$val->auth_ids}}</td>
                    <td>{{$val->auth_ac}}</td>
                    <td class="f-14">
                        <a title="分派权限" href="javascript:void(0);"
                           onclick="admin_role_assign('分派权限','{{route("role_assign")}}','{{$val->id}}', '', '400')"
                           style="text-decoration:none">
                            <i class="Hui-iconfont">&#xe603;</i>
                        </a>
                        <a title="编辑" href="javascript:void(0);"
                           onclick="admin_role_edit('角色编辑','admin-role-add.html','1')"
                           style="text-decoration:none">
                            <i class="Hui-iconfont">&#xe6df;</i>
                        </a>
                        <a title="删除" href="javascript:void(0);" onclick="admin_role_del(this,'1')" class="ml-5" style="text-decoration:none">
                            <i class="Hui-iconfont">&#xe6e2;</i>
                        </a>
                    </td>
                </tr>s
            @endforeach
            </tbody>
        </table>
    </div>
@endsection


@section('js')
    <script type="text/javascript" src="/admin/lib/My97DatePicker/4.8/WdatePicker.js"></script>
    <script type="text/javascript" src="/admin/lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/admin/lib/laypage/1.2/laypage.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#role_manager").addClass('current');
            $("#manager").css('display', 'block');
        });


        /*管理员-角色-添加*/
        function admin_role_add(title,url,w,h){
            layer_show(title,url,w,h);
        }
        /*管理员-角色-编辑*/
        function admin_role_edit(title,url,id,w,h){
            layer_show(title,url,w,h);
        }
        /*管理员-角色-删除*/
        function admin_role_del(obj,id){
            layer.confirm('角色删除须谨慎，确认要删除吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……


                $(obj).parents("tr").remove();
                layer.msg('已删除!',{icon:1,time:1000});
            });
        }

        /* 分派权限 */
        function admin_role_assign(title, url, id, w, h) {
            layer_show(title, `${url}?id=${id}`, w, h);
        }
    </script>
@endsection

