<!DOCTYPE html>
<html lang="en">
<head>
    <title>在线教育平台后台登陆页面</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>

    <!-- Bootstrap -->
    <link href="/admin/css/vendor/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="/admin/css/vendor/bootstrap-checkbox.css">

    <link href="/admin/css/minimal.css" rel="stylesheet">
</head>
<body class="bg-1">


<!-- Wrap all page content here -->
<div id="wrap">
    <!-- Make page fluid -->
    <div class="row">
        <!-- Page content -->
        <div id="content" class="col-md-12 full-page login">


            <div class="inside-block">
                <img src="/admin/images/logo-big.png" alt class="logo">
                <h1><strong>Welcome</strong> Stranger</h1>
                <h5>在线教育平台后台登陆</h5>

                <form id="form-signin" class="form-signin" action="{{route('admin_login_check')}}" method="post">
                    {{csrf_field()}}
                    <section>
                        <div class="input-group">
                            <input type="text" class="form-control" name="account" placeholder="手机号码或邮箱">
                            <div class="input-group-addon"><i class="fa fa-user"></i></div>
                        </div>
                        <div class="input-group">
                            <input type="password" class="form-control" name="password" placeholder="密码">
                            <div class="input-group-addon"><i class="fa fa-key"></i></div>
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" name="captcha" placeholder="验证码">
                            <div class="input-group-addon" onclick="changeCaptcha()" style="cursor: pointer;">
                                <img id="captcha_img" src="{{captcha_src()}}" alt="NO IMG" style="margin-top: 0;">
                            </div>
                        </div>
                    </section>
                    <section class="controls">
                        <div class="checkbox check-transparent">
                            <input type="checkbox" name="remember" value="1" id="remember">
                            <label for="remember">一个月内免登录</label>
                        </div>
                        <a href="#">忘记密码?</a>
                    </section>
                    <section class="log-in">
                        <button class="btn btn-greensea">登陆</button>
                        <span>or</span>
                        <button class="btn btn-slategray">创建账号</button>
                    </section>
                </form>
            </div>


        </div>
        <!-- /Page content -->
    </div>
</div>
<!-- Wrap all page content end -->
<script src="/admin/js/jquery.js"></script>
<script src="/admin/plugins/layer/layer.js"></script>
<script>
    $(function () {

    });

    let imgDom = $("#captcha_img");
    let src = imgDom.attr('src');
    function changeCaptcha() {
        imgDom.attr('src', src + '&_=' + Math.random());
    }

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

