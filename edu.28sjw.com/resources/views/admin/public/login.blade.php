<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link href="/admin/static/h-ui/css/H-ui.min.css" rel="stylesheet" type="text/css"/>
    <link href="/admin/static/h-ui.admin/css/H-ui.login.css" rel="stylesheet" type="text/css"/>
    <link href="/admin/static/h-ui.admin/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="/admin/lib/Hui-iconfont/1.0.8/iconfont.css" rel="stylesheet" type="text/css"/>
    <title>在线直播平台后台登陆</title>
</head>
<body>
<input type="hidden" id="TenantId" name="TenantId" value=""/>
<div class="header"></div>
<div class="loginWraper">
    <div id="loginform" class="loginBox">
        <form class="form form-horizontal" action="{{route('admin_login_check')}}" method="post">
            {{csrf_field()}}
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60d;</i></label>
                <div class="formControls col-xs-8">
                    <input name="account" type="text" placeholder="手机号或者邮箱" class="input-text size-L" required>
                </div>
            </div>
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60e;</i></label>
                <div class="formControls col-xs-8">
                    <input name="password" type="password" placeholder="密码" class="input-text size-L" required minlength="6">
                </div>
            </div>
            <div class="row cl">
                <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe63f;</i></label>
                <div class="formControls col-xs-8">
                    <input name="captcha" class="input-text size-L" type="text" placeholder="验证码" style="width:150px;" required maxlength="4">
                    <img id="captcha_img" src="{{captcha_src()}}" alt="NO IMG">
                    <a id="kanbuq" href="javascript:void(0);">看不清，换一张</a>
                </div>
            </div>
            <div class="row cl">
                <div class="formControls col-xs-8 col-xs-offset-3">
                    <label for="online">
                        <input type="checkbox" name="remember" id="online" value="1">
                        使我保持登录状态</label>
                </div>
            </div>
            <div class="row cl">
                <div class="formControls col-xs-8 col-xs-offset-3">
                    <input type="submit" class="btn btn-success radius size-L"
                           value="&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;">
                    <input type="reset" class="btn btn-default radius size-L"
                           value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;">
                </div>
            </div>
        </form>
    </div>
</div>
<div class="footer">Copyright Eric Jin by 在线教育直播平台</div>

<script type="text/javascript" src="/admin/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/admin/static/h-ui/js/H-ui.js"></script>
<script src="/admin/lib/layer/2.4/layer.js"></script>
<script>
    $(function () {
        let imgDom = $("#captcha_img");
        let src = imgDom.attr('src');
        $("#kanbuq").click(() => {
            imgDom.attr('src', src + '&_=' + Math.random());
        });
    });

    // 以js弹窗形式输出错误内容
    @if (count($errors) > 0)
        let errorStr = '';
        @foreach($errors->all() as $error)
            errorStr += "{{$error}}";
        @endforeach
        layer.alert(errorStr, {
            title: "登陆失败",
            icon: 5,
        });
    @endif
</script>
</body>
</html>