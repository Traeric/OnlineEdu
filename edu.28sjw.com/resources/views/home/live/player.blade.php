<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <title>AJax课程 - 年轻人的在线IT课堂</title>
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="/home/css/bootstrap.min.css">
    <link rel="stylesheet" href="/home/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/home/css/mylogin.css">
    <link rel="stylesheet" href="/home/css/componet.css">
    <link rel="stylesheet" href="/home/css/footer.css">
    <link rel="stylesheet" href="/home/css/iconfont.css">
    <link rel="stylesheet" type="text/css" href="/home/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="/home/css/simditor.css">
    <link rel="stylesheet" type="text/css" href="/home/css/video.css">
    <script src="/home/js/jquery-1.12.1.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/artTemplate.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/jquery.pagination.js"></script>
    <script type="text/javascript" src="/home/js/jquery.dotdotdot.js"></script>
    <script type="text/javascript" src="/home/js/bootstrap.js"></script>
    <script type="text/javascript" src="/home/js/layer.js"></script>
    <link rel="stylesheet" href="/home/css/layer.css" id="layui_layer_skinlayercss">
    <script type="text/javascript" src="/home/js/jquery.form.min.js"></script>
    <script type="text/javascript" src="/home/js/module.js"></script>
    <script type="text/javascript" src="/home/js/simditor.js"></script>
    <script type="text/javascript" src="/home/js/uploader.js"></script>
    <script src="/home/js/jquery.nicescroll.js"></script>
    <script src="/home/js/ajax.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/helpers.js"></script>
    <script src="/home/js/html5.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>
<div class="rTips"></div>
<div class="mask"></div>
<div class="header">
    <div class="headerBody">
        <a><img src="/home/img/fanhui.png">返回列表</a>
        <span class="headerBody-title">使用IntelliJ开发Web项目</span>
    </div>
</div>
<div class="videoBody">
    <div class="videoBody-top" style="height: 519px;">
        <div class="videoBody-video" style="height: 519px;">
            <div class="shadowJiaZai" style="display: none;"></div>
            <img class="loadImg" src="/home/img/videoLoad.gif" alt="" style="display: none;">
            <!-- 替换之前的object标签，粘贴自己的ck播放器 -->
            <div id="a1"></div>
            <script type="text/javascript" src="/statics/ckplayer/ckplayer.js" charset="utf-8"></script>
            <script type="text/javascript">
                var flashvars = {
                    f: '{{$url}}',
                    c: 0,
                    p: 1,
                    v: 100
                };
                var params = {
                    bgcolor: '#FFF',
                    allowFullScreen: true,
                    allowScriptAccess: 'always',
                    wmode: 'transparent'
                };
                CKobject.embedSWF('/statics/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '600', '400', flashvars, params);
            </script>
        </div>
    </div>
</div>
<script src="/home/css/z_stat.php" type="text/javascript"></script>
<script src="/home/css/core.php" charset="utf-8" type="text/javascript"></script>
<script src="/home/js/jquery.placeholder.min.js"></script>
<script type="text/javascript">
    function get_cc_verification_code(video_id) {
        var verificationcode;
        $.ajax({
            url: '/online/vedio/getCcVerificationCode',
            type: 'POST',
            async: false,
            data: {
                video_id: video_id,
                id: $.getUrlParam("vId")
            },
            success: function (data) {
                if (data.success) {
                    verificationcode = data.resultObject.verificationcode;
                } else {
                    //						alert(data.errorMessage)
                    if (data.errorMessage == "请登陆！") {
                        $('#login').modal('show');
                    }
                }
            }
        });
        return verificationcode;
    };
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    };

    //验证不通过的回调
    function onlinePlayCallbak(video_id) {
        //弹出我们自己的提示框
        //						$(".videomodal1").removeClass("hide");
        //						$(".backgrounds1").removeClass("hide");
        //			window.location.href="/web/html/payCourseDetailPage.html?id="+$.getUrlParam("courseId")+"&courseType=1&free=0";
    }
    //播放失败
    //		function on_player_playerror(video_id){
    //			alert(1)
    //			alert(code)
    //		};
    function on_spark_player_start(video_id) {
        RequestService("/video/updateStudyStatus", "POST", {
            studyStatus: 2,
            videoId: $.getUrlParam("vId")
        }, function (data) {
            console.log(data);
        });
    }

    function on_spark_player_stop(video_id) {
        RequestService("/video/updateStudyStatus", "POST", {
            studyStatus: 1,
            videoId: $.getUrlParam("vId")
        }, function (data) {
            console.log(data);
        });
        if ($(".freeTable-list .hoverBorder").next().length === 0 && $(".freeTable-list .hoverBorder").parent().next().length === 0) {
            $(".videomodal3").removeClass("hide");
            $(".backgrounds2").removeClass("hide");
        } else {
            $(".videomodal2").removeClass("hide");
            $(".backgrounds2").removeClass("hide");
        }
    }

    function countChar(textareaName, spanName) {
        var num = 200 - $(".textStatus").val().length;
        if (num >= 0) {
            $("#textCounter").html(num);
        } else {
            $("#textCounter").html(0);
        }
    }

    //去掉Loding
    function on_spark_player_ready() {
        $(".loadImg").css("display", "none");
        $(".shadowJiaZai").css("display", "none");
    }
</script>
<script src="/home/js/placeHolder.js"></script>
<script type="text/javascript">
    $(function () {
        $('input').placeholder();
    });
</script>
</body>

</html>