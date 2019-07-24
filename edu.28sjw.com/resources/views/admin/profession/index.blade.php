@extends('admin.index.base')

@section('title')
    专业列表
@endsection

@section('breadcrumb')
    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
        <span class="c-gray en">&gt;</span>
        专业管理
        <span class="c-gray en">&gt;</span>
        专业列表 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px"
                 href="javascript:location.replace(location.href);" title="刷新"><i class="Hui-iconfont">&#xe68f;</i></a>
    </nav>
@endsection

@section('content')
    <div class="cl pd-5 bg-1 bk-gray mt-20">
        <span class="l">
            <a href="javascript:void(0);" onclick="datadel()" class="btn btn-danger radius">
                <i class="Hui-iconfont">&#xe6e2;</i> 批量删除
            </a>
            <a href="javascript:void(0);"
               onclick="admin_add('添加管理员','admin-add.html','800','500')"
               class="btn btn-primary radius">
                <i class="Hui-iconfont">&#xe600;</i> 添加管理员
            </a>
        </span>
    </div>
    <table id="table" class="table table-border table-bordered table-bg">
        <thead>
        <tr>
            <th scope="col" colspan="11">专业列表</th>
        </tr>
        <tr class="text-c">
            <th width="15"><input type="checkbox" name="" value=""></th>
            <th width="20">ID</th>
            <th width="100">专业名</th>
            <th width="90">所属分类</th>
            <th width="100">封面图片</th>
            <th width="100">点击量</th>
            <th width="130">创建时间</th>
            <th width="30">排序</th>
            <th width="30">课时</th>
            <th width="50">价格</th>
            <th width="100">操作</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $val)
            <tr class="text-c">
                <!-- 复选框 -->
                <td><input type="checkbox" value="{{$val -> id}}" name=""></td>
                <td>{{$val->id}}</td>
                <td>{{$val->pro_name}}</td>
                <td>{{$val->protype->protype_name}}</td>
                <td><img src="{{$val->cover_img}}" alt="NO IMG" width="100"></td>
                <td>{{$val->view_count}}</td>
                <td>{{$val->created_at}}</td>
                <td>{{$val->sort}}</td>
                <td>{{$val->duration}}</td>
                <td>{{$val->price}}</td>
                <td class="td-manage">
                    <a title="编辑" href="javascript:void(0);" onclick="admin_edit('管理员编辑','admin-add.html','1','800','500')" class="ml-5" style="text-decoration:none">
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
            $("#profession_list").addClass('current');
            $("#project").css('display', 'block');

            // 实例化datatables插件
            $('#table').dataTable({
                // 禁用掉第一列的排序
                "aoColumnDefs": [{
                    "bSortable": false,
                    "aTargets": [0],
                }],
                // 指定初始化的时候按照哪一列进行排序
                "aaSorting": [[7, "asc"]],
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
        /*管理员-增加*/
        function admin_add(title,url,w,h){
            layer_show(title,url,w,h);
        }
        /*管理员-删除*/
        function admin_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……

                $(obj).parents("tr").remove();
                layer.msg('已删除!',{icon:1,time:1000});
            });
        }
        /*管理员-编辑*/
        function admin_edit(title,url,id,w,h){
            layer_show(title,url,w,h);
        }
        /*管理员-停用*/
        function admin_stop(obj,id){
            layer.confirm('确认要停用吗？',function(index){
                //此处请求后台程序，下方是成功后的前台处理……

                $(obj).parents("tr").find(".td-manage").prepend('<a onClick="admin_start(this,id)" href="javascript:;" title="启用" style="text-decoration:none"><i class="Hui-iconfont">&#xe615;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">已禁用</span>');
                $(obj).remove();
                layer.msg('已停用!',{icon: 5,time:1000});
            });
        }

        /*管理员-启用*/
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

