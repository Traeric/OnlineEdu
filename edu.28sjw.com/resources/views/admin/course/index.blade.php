@extends('admin.index.base')

@section('title')
    课程列表
@endsection

@section('breadcrumb')
    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
        <span class="c-gray en">&gt;</span>
        课程管理
        <span class="c-gray en">&gt;</span>
        课程列表
        <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px"
           href="javascript:location.replace(location.href);" title="刷新">
            <i class="Hui-iconfont">&#xe68f;</i>
        </a>
    </nav>
@endsection

@section('content')
    <div class="cl pd-5 bg-1 bk-gray mt-20">
        <span class="l">
            <a href="javascript:void(0);" onclick="datadel()" class="btn btn-danger radius">
                <i class="Hui-iconfont">&#xe6e2;</i> 批量删除
            </a>
            <a href="javascript:void(0);" onclick="admin_add('添加课程','admin-add.html','800','500')"
               class="btn btn-primary radius">
                <i class="Hui-iconfont">&#xe600;</i> 添加课程
            </a>
        </span>
    </div>
    <table id="table" class="table table-border table-bordered table-bg">
        <thead>
        <tr>
            <th scope="col" colspan="9">课程列表</th>
        </tr>
        <tr class="text-c">
            <th width="15"><input type="checkbox" name="" value=""></th>
            <th width="20">ID</th>
            <th width="100">课程名</th>
            <th width="90">所属专业</th>
            <th width="100">封面</th>
            <th width="50">排序</th>
            <th width="130">创建时间</th>
            <th width="100">状态</th>
            <th width="100">操作</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $val)
            <tr class="text-c">
                <!-- 复选框 -->
                <td><input type="checkbox" value="{{$val -> id}}" name=""></td>
                <td>{{$val->id}}</td>
                <td>{{$val->course_name}}</td>
                <td>{{$val->profession->pro_name}}</td>
                <td><img src="{{$val->cover_img}}" alt="NO IMG" width="100"></td>
                <td>{{$val->sort}}</td>
                <td>{{$val->created_at}}</td>
                <td class="td-status">
                    <!-- 判断账号的状态 -->
                    @if($val->status == '2')
                        <span class="label label-success radius">已启用</span>
                    @else
                        <span class="label radius">已停用</span>
                    @endif
                </td>
                <td class="td-manage">
                    @if($val->status == '2')
                        <a style="text-decoration:none" onClick="admin_stop(this,'10001')" href="javascript:void(0);" title="停用">
                            <i class="Hui-iconfont">&#xe631;</i>
                        </a>
                    @else
                        <a style="text-decoration:none" onClick="admin_start(this,'10001')" href="javascript:void(0);" title="启用">
                            <i class="Hui-iconfont">&#xe615;</i>
                        </a>
                    @endif

                    <a title="编辑" href="javascript:void(0);" onclick="admin_edit('课程编辑','admin-add.html','1','800','500')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6df;</i>
                    </a>
                    <a title="删除" href="javascript:void(0);" onclick="admin_del(this,'1')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6e2;</i>
                    </a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection


@section('js')
    <script type="text/javascript" src="/admin/lib/My97DatePicker/4.8/WdatePicker.js"></script>
    <script type="text/javascript" src="/admin/lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/admin/lib/laypage/1.2/laypage.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#course_list").addClass('current');
            $("#course").css('display', 'block');

            // 实例化datatables插件
            $('#table').dataTable({
                // 禁用掉第一列的排序
                "aoColumnDefs": [{
                    "bSortable": false,
                    "aTargets": [0],
                }],
                // 指定初始化的时候按照哪一列进行排序
                "aaSorting": [[5, "asc"]],
            });
        });
        /*
            参数解释：
            title	标题
            url		请求的url
            id		需要操作的数据id
            w		弹出层宽度（缺省调默认值）
            h		弹出层高度（缺省调默认值）
        */
        /*课程-增加*/
        function admin_add(title,url,w,h){
            layer_show(title,url,w,h);
        }
        /*课程-删除*/
        function admin_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……

                $(obj).parents("tr").remove();
                layer.msg('已删除!',{icon:1,time:1000});
            });
        }
        /*课程-编辑*/
        function admin_edit(title,url,id,w,h){
            layer_show(title,url,w,h);
        }
        /*课程-停用*/
        function admin_stop(obj,id){
            layer.confirm('确认要停用吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……

                $(obj).parents("tr").find(".td-manage").prepend('<a onClick="admin_start(this,id)" href="javascript:;" title="启用" style="text-decoration:none"><i class="Hui-iconfont">&#xe615;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">已禁用</span>');
                $(obj).remove();
                layer.msg('已停用!',{icon: 5,time:1000});
            });
        }

        /*课程-启用*/
        function admin_start(obj,id){
            layer.confirm('确认要启用吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……

                $(obj).parents("tr").find(".td-manage").prepend('<a onClick="admin_stop(this,id)" href="javascript:;" title="停用" style="text-decoration:none"><i class="Hui-iconfont">&#xe631;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已启用</span>');
                $(obj).remove();
                layer.msg('已启用!', {icon: 6,time:1000});
            });
        }
    </script>
@endsection


