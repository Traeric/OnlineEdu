@extends('admin.index.base')

@section('title')
    试卷管理
@endsection

@section('breadcrumb')
    <nav class="breadcrumb">
        <i class="Hui-iconfont">&#xe67f;</i>
        首页
        <span class="c-gray en">&gt;</span>
        试卷试题管理
        <span class="c-gray en">&gt;</span>
        试卷管理
        <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" >
            <i class="Hui-iconfont">&#xe68f;</i>
        </a>
    </nav>
@endsection

@section('content')
    <div class="page-container">
        <div class="cl pd-5 bg-1 bk-gray mt-20">
            <span class="l">
                <a href="javascript:void(0);" onclick="datadel()" class="btn btn-danger radius">
                    <i class="Hui-iconfont">&#xe6e2;</i> 批量删除
                </a>
                <a href="javascript:void(0);" onclick="admin_permission_add('添加试卷节点','{{route("auth_add")}}','','400')" class="btn btn-primary radius">
                    <i class="Hui-iconfont">&#xe600;</i> 添加试卷节点
                </a>
            </span>
        </div>
        <table class="table table-border table-bordered table-bg">
            <thead>
            <tr>
                <th scope="col" colspan="7">试卷节点</th>
            </tr>
            <tr class="text-c">
                <th width="25"><input type="checkbox" name="" value=""></th>
                <th width="40">ID</th>
                <th width="200">试卷名称</th>
                <th width="200">所属课程</th>
                <th width="200">试卷满分</th>
                <th width="200">创建时间</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach($data as $val)
                <tr class="text-c">
                    <td><input type="checkbox" value="{{$val->id}}" name=""></td>
                    <td>{{$val->id}}</td>
                    <td>{{$val->paper_name}}</td>
                    <td>{{$val->course->course_name}}</td>
                    <td>{{$val->score}}</td>
                    <td>{{$val->created_at}}</td>
                    <td>
                        <a title="编辑" href="javascript:void(0);"
                           onclick="admin_permission_edit('角色编辑','admin-permission-add.html','1','','310')"
                           class="ml-5" style="text-decoration:none">
                            <i class="Hui-iconfont">&#xe6df;</i>
                        </a>
                        <a title="删除" href="javascript:void(0);"
                           onclick="admin_permission_del(this,'1')" class="ml-5" style="text-decoration:none">
                            <i class="Hui-iconfont">&#xe6e2;</i>
                        </a>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection


@section('js')
    <script type="text/javascript" src="/admin/lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#paper_list").addClass('current');
            $("#paper").css('display', 'block');

            // 使用datatables实现分页
            $('table').dataTable({
                // 禁用掉第一列的排序
                "aoColumnDefs": [{
                    "bSortable": false,
                    "aTargets": [0],
                }],
                // 指定初始化的时候按照哪一列进行排序
                "aaSorting": [[1, "asc"]],
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
        /*管理员-试卷-添加*/
        function admin_permission_add(title, url, w, h){
            layer_show(title, url, w, h);
        }
        /*管理员-试卷-编辑*/
        function admin_permission_edit(title,url,id,w,h){
            layer_show(title, url, w, h);
        }

        /*管理员-试卷-删除*/
        function admin_permission_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
                $.ajax({
                    type: 'POST',
                    url: '',
                    dataType: 'json',
                    success: function(data){
                        $(obj).parents("tr").remove();
                        layer.msg('已删除!',{icon:1,time:1000});
                    },
                    error:function(data) {
                        console.log(data.msg);
                    },
                });
            });
        }
    </script>
@endsection


