<!DOCTYPE html>
<!-- saved from url=(0055)http://www.boxuegu.com/web/html/order.html?courseId=172 -->
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:bd="http://www.baidu.com/2010/xbdml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--[if IE 9]>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <![endif]-->
    <meta http-equiv="X-UA-Compatible" content="IEedge">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="expires" content="0">
    <title>博学谷云课堂 - 年轻人在线IT课堂</title>
    <link rel="shortcut icon" href="http://www.boxuegu.com/favicon.ico">
    <meta name="keywords" content="Java培训,Android培训,安卓培训,PHP培训,C++培训,iOS培训,网页设计培训,平面设计培训,UI设计培训,游戏开发培训,移动开发培训,网络营销培训,web前端培训">
    <meta name="description" content="博学谷云课堂为传智播客旗下在线教育品牌，将积累10年的实体班线下课程和教学方法引到线上。课程大纲全新优化，内容有广度、有深度，顶尖讲师全程直播授课。专注整合传智优势教学资源、打造适合在线学习并能保证教学结果的优质教学产品，同时打造和运营一整套教育生态软件体系，为用户提供满足自身成长和发展要求的有效服务。">
    <link rel="stylesheet" href="/home/css/bootstrap.min.css">
    <link rel="stylesheet" href="/home/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/home/css/mylogin.css">
    <link rel="stylesheet" href="/home/css/componet.css">
    <link rel="stylesheet" href="/home/css/iconfont.css">
    <link rel="stylesheet" href="/home/css/header.css">
    <link rel="stylesheet" href="/home/css/footer.css">
    <link rel="stylesheet" href="/home/css/modal.css">
    <link rel="stylesheet" type="text/css" href="/home/css/base.css">
    <link rel="stylesheet" type="text/css" href="/home/css/order.css">
    <script src="/home/js/hm.js"></script>
    <script src="/home/js/jquery-1.12.1.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/jquery.pagination.js" type="text/javascript" charset="UTF-8"></script>
    <script type="text/javascript" src="/home/js/layer.js"></script>
    <link rel="stylesheet" href="/home/css/layer.css" id="layui_layer_skinlayercss">
    <script type="text/javascript" src="/home/js/artTemplate.js"></script>
    <script src="/home/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/jquery.form.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/ajax.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/helpers.js"></script>
    <script src="/home/js/html5.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/modal.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/jquery.dotdotdot.js"></script>
    <script type="text/javascript" src="/home/js/order.js"></script>
</head>

<body>
    <header>
        <div class="header_body">
            <div class="header_left"><a href="http://www.boxuegu.com/index.html"><img src="/home/img/logo.png" alt=""></a>
                <div class="path"><a href="http://www.boxuegu.com/index.html">云课堂</a><a href="http://www.boxuegu.com/web/html/ansAndQus.html">问答精灵</a><a href="http://www.boxuegu.com/web/html/forum.html">博学社</a><a href="http://www.itheima.com/" target="_blank">线下学院</a></div>
            </div>
            <div class="header_right"><a href="javascript:;" class="studentCenterBox">学习中心</a>
                <div class="loginGroup">
                    <div class="login" style="display: block;">
                        <div class="dropdown" id="myDropdown">
                            <div class="userPic" style="background: url(&quot;/web/images/defaultHead/18.png&quot;) 0% 0% / 100% 100% no-repeat;"></div>
                            <div id="dLabel" data-target="#" role="button" aria-haspopup="true"><span class="name" title="suxiaolin">suxiaolin</span><span class="caret"></span> </div>
                            <ul class="dropdownmenu" aria-labelledby="dLabel">
                                <div class="pointer"></div>
                                <li><a data-id="mynews"><i class="iconfont icon-ziyuan myNews" style="font-size:12px"></i>我的消息</a></li>
                                <li><a data-id="mydata"><i class="iconfont icon-xueyuan"></i>我的资料</a></li>
                                <li><a data-id="idea"><i class="iconfont icon-yijianfankui"></i>意见反馈</a></li>
                                <li><a data-exit="exit"><i class="iconfont icon-tuichu"></i>安全退出</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="logout" style="display:none;"><a class="btn-login btn-link" data-toggle="modal" data-target="#login" data-backdrop="static">登录</a> <a class="btn-register btn-link" href="http://www.boxuegu.com/web/html/login.html?ways=register">注册</a></div>
                </div>
            </div>
        </div>
        <div class="modal" id="login" data-backdrop="static" style="display: none;">
            <div class="modal-dialog login-module" role="document">
                <div class="cymylogin">
                    <div class="cymylogin-top clearfix">
                        <div class="cymyloginclose" data-dismiss="modal" aria-label="Close" data-backdrop="static"></div>
                        <div class="cymyloginlogo">欢迎登录&nbsp;&nbsp;博学谷云课堂</div>
                        <div class="cymyloginhint cymlogin" style="top: 221px; display: block;">请输入6-18位密码</div>
                    </div>
                    <div class="cymylogin-bottom form-login">
                        <input type="text" class="cyinput1 form-control" maxlength="30" placeholder="请输入手机号或邮箱" autocomplete="off">
                        <div class="cymyloginclose1"></div>
                        <input type="password" class="cyinput2 form-control" maxlength="18" placeholder="请输入6-18位密码" autocomplete="off" style="border: 1px solid rgb(255, 64, 18);">
                        <div class="cymyloginclose2"></div>
                        <button class="cymyloginbutton">登<em></em>录</button>
                        <div class="cymyloginpassword"><a class="atOnceRegister" href="http://www.boxuegu.com/web/html/login.html?ways=register">立即注册</a><a class="atOnceResetPassword" href="http://www.boxuegu.com/web/html/resetPassword.html">忘记密码?</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="consult_center">咨询中心</div>
        <div class="online_consult"><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800146955&amp;aty=2&amp;a=2&amp;curl=&amp;ty=1" target="_blank"><img src="/home/img/zixun.gif" alt=""><span>在线咨询</span></a></div>
        <div class="phone_consult">
            <div class="phone_consult_box"><img src="/home/img/tel.gif" alt=""><span class="dianhuazixun">电话咨询</span></div><span class="phone_number">400-618-4000</span> </div>
        <div class="sideWeixinBox">
            <div class="sideWeixin"><img src="/home/img/sideWeixinErma.png">
                <p>关注微信</p>
            </div>
        </div>
        <a class="sideWeiboBox" href="http://weibo.com/u/5999622644?refer_flag=1001030102_&amp;is_hot=1" target="_blank">
            <div class="sideWeibo"><img src="/home/img/sideWeiboErma.png">
                <p>关注微博</p>
            </div>
        </a>
        <div class="sideWeixinErma"><img src="/home/img/sideWeixin.png">
            <div class="sideSanjiao"><img src="./imgimg/float_sanjiao.png"></div>
        </div>
        <div class="sideWeiboErma"><img src="/home/img/sideWeibopng.png">
            <div class="sideSanjiao1"><img src="/home/img/float_sanjiao.png"></div>
        </div>
        <div class="h_top" onclick="pageScroll();"><span class="wrap"><img src="/home/img/top.png" alt=""><span class="h_top_s">top</span></span>
        </div>
    </header>
    <div class="main">
        <div class="main-title">
            <span>购买信息确认</span>
        </div>
        <div class="main-table">
            <div class="tr clearfix">
                <span class="td1">课程名称</span>
                <span class="td2">课程有效期</span>
                <span class="td3">原价</span>
                <span class="td4">优惠</span>
                <span class="td5">应付</span>
            </div>
            <div class="tab clearfix">
                <div class="td1"><span class="img"><img src="{{$data -> cover_img}}"></span>
                    <table border="0" cellspacing="" cellpadding="">
                        <tbody>
                            <tr>
                                <td><span class="name">{{$data -> pro_name}}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="td2">即日起至{{date('Y-m-d',strtotime('+1 year'))}}</div>
                <div class="td3">￥{{$data -> price}}</div>
                <div class="td4">-￥{{$data -> price * (1 - 0.0001)}}</div>
                <div class="td5">￥{{$data -> price * 0.0001}}</div>
            </div>
        </div>
        <div class="sub clearfix"><a style="cursor:pointer" onclick="showPayPage('{{$data -> id}}')" data-url="/web/172/saveOrder">提交订单</a>
            <p>应付金额：<span>￥{{$data -> price * 0.0001}}</span></p>
        </div>
    </div>
    <!-- <script type="text/javascript" src="/home/js/header.js" charset="utf-8"></script> -->
    <script type="text/javascript" src="/home/js/footer.js"></script>
    <div class="footerDT">
        <footer>
            <div class="content">
                <div class="content-item footer-bodys">
                    <div class="content-item content-footer-link about-us">
                        <ul class="gate">
                            <li data-id="first" data-url="../html/aboutUs.html">关于我们<span>|</span></li>
                            <li data-id="two" data-url="../html/aboutUs.html">人才招聘<span>|</span></li>
                            <li data-id="three" data-url="../html/aboutUs.html">联系我们<span>|</span></li>
                            <li data-id="four" data-url="../html/aboutUs.html" class="noline">常见问题</li>
                        </ul>
                    </div>
                    <div class="trademark">京ICP备08001421号 京公网安备110108007702 Copyright @ 2016 博学谷 All Rights Reserved<span style="margin-right:5px;"></span><span id="cnzz_stat_icon_1260713417"><a href="http://www.cnzz.com/stat/website.php?web_id=1260713417" target="_blank" title="站长统计"><img border="0" hspace="0" vspace="0" src="./order_imgfiles/pic1.gif"></a></span></div>
                </div>
            </div>
        </footer>
    </div>
    <script src="./order_files/z_stat.php" type="text/javascript"></script>
    <script src="./order_files/core.php" charset="utf-8" type="text/javascript"></script>
    <script src="/home/js/placeHolder.js"></script>
    <script type="text/javascript">
    $(function() {
        $('input').placeholder();
    });
    </script>
    <div id="modalBackground" class="hide"></div>
    <div id="tousu" class="modalFather payment-modal hide">
        <div class="modalHeader"><span>投诉理由</span><i class="iconfont icon-guanbi payment-modal-close"></i></div>
        <div class="modalBody">
            <p><span></span>我要投诉的内容涉及</p>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="广告营销等垃圾信息" id="myradio1"><span>广告营销等垃圾信息</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="抄袭内容" id="myradio2"><span>抄袭内容</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="辱骂等不文明语言的人身攻击" id="myradio3"><span>辱骂等不文明语言的人身攻击</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="色情或反动的违法信息" id="myradio4"><span>色情或反动的违法信息</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="" id="myradio4"><span>其他</span>
                <input type="text" class="comment-content">
            </label>
            <br>
        </div>
        <div class="errorInfo"><img src="/home/img/alter_14.png" alt=""><span>请选择投诉理由</span></div>
        <div class="modalFooter"><a>提交</a></div>
    </div>
    <div id="quxiaoshoucang" class="modalFather payment-modal hide">
        <div class="modalHeader"><i class="iconfont icon-guanbi payment-modal-close"></i></div>
        <div class="modalBody">
            <div><i class="iconfont icon-wenhao"></i></div>
            <p class="tipType">确定要取消收藏吗？</p>
        </div>
        <div class="modalFooter">
            <div><a class="yesBtn">确定</a></div>
            <div><a class="notBtn">取消</a></div>
        </div>
    </div>
    <div id="tousu1" class="modalFather payment-modal hide">
        <div class="modalHeader"><span>投诉理由</span><i class="iconfont icon-guanbi payment-modal-close"></i></div>
        <div class="modalBody">
            <p><span></span>我要投诉的内容涉及</p>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="广告营销等垃圾信息" id="myradio1"><span>广告营销等垃圾信息</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="抄袭内容" id="myradio2"><span>抄袭内容</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="辱骂等不文明语言的人身攻击" id="myradio3"><span>辱骂等不文明语言的人身攻击</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="色情或反动的违法信息" id="myradio4"><span>色情或反动的违法信息</span></label>
            <br>
            <label>
                <div class="radio-cover"></div>
                <input type="radio" class="cy-myprofile-myfom-dv-radio" name="gender" value="" id="myradio4"><span>其他</span>
                <input type="text" class="comment-content">
            </label>
        </div>
        <div class="errorInfo"><img src="/home/img/alter_14.png" alt=""><span>请选择投诉理由</span></div>
        <div class="modalFooter"><a>提交</a></div>
    </div>
    <div class="browserBody" style="display:none;">
        <div class="bcgop"></div>
        <div class="browserBody-text">
            <p>您目前使用的浏览器可能无法实现最佳浏览效果，建议使用Chrome(谷歌)、Firefox(火狐)、Edge、IE9及IE9以上版本浏览器。</p><a href="http://www.boxuegu.com/web/html/Download.html">立即升级</a><img src="/home/img/BWcolse.png"></div>
    </div>
</body>
<script type="text/javascript">
    //弹窗支付页面
    function showPayPage(id){
        //弹窗页面层
        layer.open({
            type: 2,
            title: '扫码支付',
            skin: 'layui-layer-rim', //加上边框
            area: ['230px', '230px'], //宽高
            content: '/home/profession/pay?id=' + id
        });
    }
</script>

</html>