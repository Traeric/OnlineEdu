<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="stylesheet" type="text/css" href="/admin/static/h-ui/css/H-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="/admin/static/h-ui.admin/css/H-ui.admin.css"/>
    <link rel="stylesheet" type="text/css" href="/admin/lib/Hui-iconfont/1.0.8/iconfont.css"/>
    <link rel="stylesheet" type="text/css" href="/admin/static/h-ui.admin/skin/default/skin.css" id="skin"/>
    <link rel="stylesheet" type="text/css" href="/admin/static/h-ui.admin/css/style.css"/>
    <title>添加会员用户</title>
</head>
<body>
<article class="page-container">
    <form action="" method="post" class="form form-horizontal" id="form-member-add">
        {{csrf_field()}}
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>用户名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="username" id="username" name="username">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">
                <span class="c-red">*</span>性别：
            </label>
            <div class="formControls col-xs-8 col-sm-9 skin-minimal">
                <div class="radio-box">
                    <input name="gender" type="radio" id="sex-1" value="0">
                    <label for="sex-1">男</label>
                </div>
                <div class="radio-box">
                    <input type="radio" id="sex-2" name="gender" value="1">
                    <label for="sex-2">女</label>
                </div>
                <div class="radio-box">
                    <input type="radio" id="sex-3" name="gender" checked value="2">
                    <label for="sex-3">保密</label>
                </div>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">
                <span class="c-red">*</span>手机：
            </label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="mobile" id="mobile" name="mobile">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">
                <span class="c-red">*</span>邮箱：
            </label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="email" class="input-text" placeholder="email" name="email" id="email">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>所属地区：</label>
            <!-- 国家 -->
            <div class="formControls col-xs-2 col-sm-2"> <span class="select-box">
				<select class="select" size="1" name="country_id">
					<option value="0">国家</option>
                    @foreach($countrys as $val)
                        <option value="{{$val->id}}">{{$val->area}}</option>
                    @endforeach
				</select>
				</span></div>
            <!-- 省份 -->
            <div class="formControls col-xs-2 col-sm-2"> <span class="select-box">
				<select class="select" size="1" name="province_id">
					<option value="0">省份/州</option>
				</select>
				</span></div>
            <!-- 城市 -->
            <div class="formControls col-xs-2 col-sm-2"> <span class="select-box">
				<select class="select" size="1" name="city_id">
					<option value="0">城市</option>
				</select>
				</span></div>
            <!-- 县区 -->
            <div class="formControls col-xs-2 col-sm-2"> <span class="select-box">
				<select class="select" size="1" name="county_id">
					<option value="0">县区</option>
				</select>
				</span></div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>账号类型：</label>
            <div class="formControls col-xs-8 col-sm-9 skin-minimal">
                <div class="radio-box">
                    <input name="type" type="radio" id="sex-1" checked>
                    <label for="sex-1">学生</label>
                </div>
                <div class="radio-box">
                    <input type="radio" id="sex-2" name="type">
                    <label for="sex-2">老师</label>
                </div>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>账号状态：</label>
            <div class="formControls col-xs-8 col-sm-9 skin-minimal">
                <div class="radio-box">
                    <input name="status" type="radio" id="sex-1">
                    <label for="sex-1">禁用</label>
                </div>
                <div class="radio-box">
                    <input type="radio" id="sex-2" name="status" checked>
                    <label for="sex-2">启用</label>
                </div>
            </div>
        </div>
        <div class="row cl">
            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
                <input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;提交&nbsp;&nbsp;">
            </div>
        </div>
    </form>
</article>

<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="/admin/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/admin/lib/layer/2.4/layer.js"></script>
<script type="text/javascript" src="/admin/static/h-ui/js/H-ui.min.js"></script>
<script type="text/javascript" src="/admin/static/h-ui.admin/js/H-ui.admin.js"></script> <!--/_footer 作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="/admin/lib/My97DatePicker/4.8/WdatePicker.js"></script>
<script type="text/javascript" src="/admin/lib/jquery.validation/1.14.0/jquery.validate.js"></script>
<script type="text/javascript" src="/admin/lib/jquery.validation/1.14.0/validate-methods.js"></script>
<script type="text/javascript" src="/admin/lib/jquery.validation/1.14.0/messages_zh.js"></script>
<script type="text/javascript">
    $(function () {
        $('.skin-minimal input').iCheck({
            checkboxClass: 'icheckbox-blue',
            radioClass: 'iradio-blue',
            increaseArea: '20%'
        });

        $("#form-member-add").validate({
            rules: {
                username: {
                    required: true,
                },
                gender: {
                    required: true,
                },
                mobile: {
                    required: true,
                    isMobile: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                type: {
                    required: true,
                },
                status: {
                    required: true,
                },
            },
            onkeyup: false,
            focusCleanup: true,
            success: "valid",
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: 'post',
                    success: function(data){
                        if (data) {
                            layer.msg('添加成功!',{icon:1,time:2000}, () => {
                                let index = parent.layer.getFrameIndex(window.name);
                                // parent.$('.btn-refresh').click();
                                parent.window.location.reload();
                                parent.layer.close(index);
                            });
                        } else {
                            layer.msg('添加失败!',{icon:2,time:2000});
                        }
                    },
                    error: function(XmlHttpRequest, textStatus, errorThrown){
                        layer.msg('error!',{icon:2,time:1000});
                    }
                });
            }
        });


        /**
         * 四级联动
         */
        // 国家选中后触发
        $("select[name=country_id]").change(function () {
            // 获取当前选中的国家的id
            let id = $(this).val();
            $.ajax({
                url: "{{route('get_area')}}",
                type: "get",
                data: {id: id},
                dataType: "JSON",
                success(data) {
                    let str = '';
                    $.each(data, function (index, item) {
                        str += `<option value="${item.id}">${item.area}</option>`;
                    });
                    // 追加之前清除二级下的数据
                    $("select[name=province_id]").find('option:gt(0)').remove();
                    // 将数据添加
                    $("select[name=province_id]").append(str);
                },
            });
        });
        // 省份选中后触发
        $("select[name=province_id]").change(function () {
            // 获取当前选中的国家的id
            let id = $(this).val();
            $.ajax({
                url: "{{route('get_area')}}",
                type: "get",
                data: {id: id},
                dataType: "JSON",
                success(data) {
                    let str = '';
                    $.each(data, function (index, item) {
                        str += `<option value="${item.id}">${item.area}</option>`;
                    });
                    // 追加之前清除二级下的数据
                    $("select[name=city_id]").find('option:gt(0)').remove();
                    // 将数据添加
                    $("select[name=city_id]").append(str);
                },
            });
        });
        // 省份选中后触发
        $("select[name=city_id]").change(function () {
            // 获取当前选中的国家的id
            let id = $(this).val();
            $.ajax({
                url: "{{route('get_area')}}",
                type: "get",
                data: {id: id},
                dataType: "JSON",
                success(data) {
                    let str = '';
                    $.each(data, function (index, item) {
                        str += `<option value="${item.id}">${item.area}</option>`;
                    });
                    // 追加之前清除二级下的数据
                    $("select[name=county_id]").find('option:gt(0)').remove();
                    // 将数据添加
                    $("select[name=county_id]").append(str);
                },
            });
        });
    });
</script>
<!--/请在上方写此页面业务相关的脚本-->
</body>
</html>
