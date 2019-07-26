$(function () {
    /**
     * Created by admin on 2016/9/14.
     */
    //==========================================================================================
    var headersIndex={
        nav:'<div class="header_left">'+
        '<a href="/index.html"><img src="img/logo.png" alt=""/></a>'+
        '<div class="path">'+
        '<a href="/index.html">云课堂</a>'+
        '<a href="/web/html/ansAndQus.html">问答精灵</a>'+
//      '<a href="/web/html/forum.html">博学社</a>'+
        '</div>'+
        ' </div>'+
        '<div class="header_right">'+
        '<a href="javascript:;" class="studentCenterBox">学习中心</a>'+
        '<div class="loginGroup">'+
        ' <div class="login" style="display:none;">'+
        '<div class="dropdown" id="myDropdown">'+
        '<div class="userPic"></div>'+
        '<div id="dLabel" data-target="#" role="button" aria-haspopup="true">'+
        '<span class="name"></span>'+
        '<span class="caret"></span>'+
        ' </div>'+
        '<ul class="dropdownmenu" aria-labelledby="dLabel">'+
        '<div class="pointer"></div>'+
        '<li><a data-id="mynews"><i class="iconfont icon-ziyuan myNews" style="font-size:12px"></i>我的消息</a></li>'+
        '<li><a data-id="mydata"><i class="iconfont icon-xueyuan"></i>我的资料</a></li>'+
        '<li><a data-id="idea"><i class="iconfont icon-yijianfankui"></i>意见反馈</a></li>'+
        '<li><a data-exit="exit"><i class="iconfont icon-tuichu"></i>安全退出</a></li>'+
        ' </ul></div></div>'+
        '<div class="logout" style="display:none;">'+
        '<a class="btn-login btn-link" data-toggle="modal" data-target="#login" data-backdrop="static">登录</a>'+
        ' <a class="btn-register btn-link" href="/web/html/login.html?ways=register">注册</a>'+
        '</div></div></div>',
        login:'<div class="modal" id="login" data-backdrop="static">'+
        '<div class="modal-dialog login-module" role="document">'+
        '<div class="cymylogin">'+
        '<div class="cymylogin-top clearfix">'+
        '<div class="cymyloginclose" data-dismiss="modal" aria-label="Close" data-backdrop="static"></div>'+
        '<div class="cymyloginlogo">欢迎登录&nbsp;&nbsp;博学谷云课堂</div>'+
        '<div class="cymyloginhint cymlogin">'+
        '</div></div>'+
        '<div class="cymylogin-bottom form-login">'+
        '<input type="text" class="cyinput1 form-control" maxlength="30" placeholder="请输入手机号或邮箱" autocomplete="off"/>'+
        '<div class="cymyloginclose1"></div>'+
        '<input type="password" class="cyinput2 form-control" maxlength="18" placeholder="请输入6-18位密码" autocomplete="off"/>'+
        '<div class="cymyloginclose2"></div>'+
        '<button class="cymyloginbutton">登<em></em>录</button>'+
        '<div class="cymyloginpassword">'+
        '<a class="atOnceRegister" href="/web/html/login.html?ways=register">立即注册</a>'+
        '<a class="atOnceResetPassword" href="/web/html/resetPassword.html">忘记密码?</a>'+
        '</div>'+
       /* ' <div class="other-login-box">'+
        ' <span>其它方式登录</span>'+
        '<div class="other-login-ways clearfix">'+
        '<div class="qq-login"></div>'+
        ' <div class="weixin-login"></div>'+
        '</div>'+
        '</div>'+*/
        '</div></div></div></div>'
    }
    var slideNavIndex={
        /* 咨询中心*/
        consult_center:'<div class="consult_center">咨询中心</div>',
        <!--在线咨询和电话咨询-->
        online_consult:'<div class="online_consult">'+
        '<a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800146955&aty=2&a=2&curl=&ty=1" target="_blank">'+
        '<img src="/web/images/zixun.gif" alt=""/><span>在线咨询</span>'+
        '</a></div>',
        phone_consult:'<div class="phone_consult">'+
        '<div class="phone_consult_box"><img src="/web/images/tel.gif" alt=""/><span class="dianhuazixun">电话咨询</span></div>' +
        '<span class="phone_number">400-618-4000</span>'+
        ' </div>',
        weixin:'<div class="sideWeixinBox">'+
            '<div class="sideWeixin">'+
            '<img src="img/sideWeixinErma.png" />'+
            '<p>关注微信</p>'+
            '</div>'+
        '</div>',
        weixinErma:'<div class="sideWeixinErma">'+
        '<img src="img/sideWeixin.png" />'+
        '<div class="sideSanjiao">'+
        '<img src="img/float_sanjiao.png" />'+
        '</div>'+
        '</div>',
        weibo:'<a class="sideWeiboBox" href="http://weibo.com/u/5999622644?refer_flag=1001030102_&amp;is_hot=1" target="_blank">' +
        '<div class="sideWeibo">'+
        '<img src="img/sideWeiboErma.png" />'+
        '<p>关注微博</p>'+
        '</div>'+
        '</a>',
        weiboErma:'<div class="sideWeiboErma">'+
        '<img src="img/sideWeibopng.png" />'+
        '<div class="sideSanjiao1">'+
        '<img src="img/float_sanjiao.png" />'+
        '</div>'+
        '</div>',
        <!--返回顶部-->
        h_top:'<div class="h_top" onclick="pageScroll();">' +
        '<span class="wrap">'+
        '<img src="img/top.png" alt=""/><span class="h_top_s">top</span>'+
        '</span></div>'
    }
    //域名切换提示
//  var friend = '<div class="friendSee"><div class="friendSee-Body">' +
//  '<div class="friendSee-Body-left"><p style="margin-top:10px;">' + 
//  '<img src="img/laba.png"/>' + 
//  '<span class="friendSee-Body-title">域名切换通知</span>' +
//  '</p>' +
//  '<p class="friendSee-Body-text">温馨提示：各位院校合作的老师请注意，当前&nbsp;www.boxuegu.com&nbsp;已切换为【博学谷云课堂】使用，【博学谷院校】请访问地址&nbsp;yx.boxuegu.com</p>' +
//  '</div><div class="friendSee-Body-right"><a href="http://yx.boxuegu.com" target="_blank">点此过去</a></div>' + 
//  '<div class="closeSee"><img src="img/close.png"></div>' +
//  '</div></div>';
    
    var header=$('<header><div class="header_body"></div></header>');
    $(header).find(".header_body").append(template.compile(headersIndex.nav));//首页头部
    $("body").children(":first").before(header);
    $(header).append(template.compile(headersIndex.login));
    $(header).append(template.compile(slideNavIndex.consult_center));
    $(header).append(template.compile(slideNavIndex.online_consult));
    $(header).append(template.compile(slideNavIndex.phone_consult));
    $(header).append(template.compile(slideNavIndex.weixin));
    $(header).append(template.compile(slideNavIndex.weibo));
    $(header).append(template.compile(slideNavIndex.weixinErma));
    $(header).append(template.compile(slideNavIndex.weiboErma));
    $(header).append(template.compile(slideNavIndex.h_top));
    if(window.location.pathname.indexOf("index") != "-1"){
    	$(".friendSee .friendSee-Body .closeSee").click(function(){
    		$(".friendSee").remove();
    	})
    }
//==========================================================================================
    //侧边栏微信，微博
    $(".sideWeixinBox").hover(function(){
        $(".sideWeixinErma").css("display","block");
        $(".sideWeixinBox").css("backgroundColor","#eef3f8");
    },function(){
        $(".sideWeixinErma").css("display","none");
        $(".sideWeixinBox").css("backgroundColor","#fff");
    });
    $(".sideWeiboBox").hover(function(){
        $(".sideWeiboErma").css("display","block");
        $(".sideWeiboBox").css("backgroundColor","#eef3f8");
    },function(){
        $(".sideWeiboErma").css("display","none");
        $(".sideWeiboBox").css("backgroundColor","#fff");
    });
    //学习中心
    $(".studentCenterBox").click(function(){
        RequestService("/online/user/isAlive","GET",null,function(data){
            if(!data.success){
                localStorage.myStudyCenter="1";
                $('#login').modal('show');
            }else{
                window.location.href="/web/html/myStudyCenter.html";
            }
        })
    });
    //返回顶部
    $(".phone_consult").hover(function(){
        $(this).animate({"width":"160px"},200);
        $(".phone_consult_box img").css("marginTop","20px");
        $(".phone_number").css("marginTop","3px");
        $(".dianhuazixun").css("display","none");
    },function(){
        $(this).animate({"width":"57px"},200);
        $(".phone_consult_box img").css("marginTop","8px");
         $(".phone_number").css("marginTop","0px");
        $(".dianhuazixun").css("display","block");
    })
//浏览器判断升级提示
	var browserUpgrade = '<div class="browserBody" style="display:none;">' +
	'<div class="bcgop"></div>' +
	'<div class="browserBody-text">' +
	'<p>您目前使用的浏览器可能无法实现最佳浏览效果，建议使用Chrome(谷歌)、Firefox(火狐)、Edge、IE9及IE9以上版本浏览器。</p>' +
	'<a href="/web/html/Download.html">立即升级</a>' +
	'<img src="img/BWcolse.png"/>' +
	'</div>' +
	'</div>';
//浏览器判断

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否谷歌浏览器
    var isQQ = userAgent.indexOf("QQBrowser") > -1 && userAgent.indexOf("Chrome") == -1; //QQ浏览器非极速模式
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    }else if(isQQ){
    	return "QQ";
    }
    
}//myBrowser() end


//==========================================================================================
$("body").append(template.compile(browserUpgrade));

//以下是调用上面的函数
if (myBrowser() == "IE55") {
    $(".browserBody").css("display","block");
}else if (myBrowser() == "IE6") {
    $(".browserBody").css("display","block");
}else if (myBrowser() == "IE7") {
    $(".browserBody").css("display","block");
}else if (myBrowser() == "IE8") {
    $(".browserBody").css("display","block");
}else if(myBrowser() == "QQ"){
    $(".browserBody").css("display","block");
}
$(".browserBody .browserBody-text img").on("click",function(){
	$(".browserBody").css("display","none");
});
    $(".cyinput1").on("input", function () {
        var val = $(this).val();
        if (val == "") {
            $(".cymyloginclose1").css("display", "none");
        } else {
            $(".cymyloginclose1").css("display", "block");
        }
        return false;
    });
    $(".cyinput2").on("input", function () {
        var logPass = $(this).val();
        if (logPass == "") {
            $(".cymyloginclose2").css("display", "none");
        } else {
            $(".cymyloginclose2").css("display", "block");
        }
        return false;
    });
    /*云课堂和博问答切换*/
//  $(".path a").on('click', function () {
//      $(this).addClass('select').siblings().removeClass('select');
//  })
    /*点击头像和用户名跳转到个人中心*/
//  $(".userPic,#dLabel").on('click', function () {
//      var id = "personcenter";
//      window.localStorage.personcenter = "myanswer";
//      location.href = "/web/html/personcenter.html";
//  });
    /*个人中心点击立即登录后，当前用户退出登录*/
    $(".pLogin").on("click", function () {
        $(".loginGroup .logout").css("display", "block");
        $(".loginGroup .login").css("display", "none");
    });

    var flag = false;
    function errorMessage(info) {
        flag = false;
        var errorReg = /[a-zA-z]+/g;
        if (errorReg.test(info)) {
            layer.alert("系统繁忙，请稍候再试!", {icon: 2});
            return flag = true;
        }
    }

    /*登录注册字体颜色和箭头方向的改变*/
    $("#myDropdown").hover(function () {
        $("#myDropdown").addClass("open");
//      $("#dLabel span:first-child").toggleClass("select");
//      $("#dLabel span:last-child").toggleClass("select1");
    }, function () {
        $("#myDropdown").removeClass("open");
//      $("#dLabel span:first-child").toggleClass("select");
//      $("#dLabel span:last-child").toggleClass("select1");
    });
    initLogin();
    /*按回车键进行登录*/
    $(".cymylogin .cyinput2,.cymylogin .cyinput1").bind("keyup", function (evt) {
        if (evt.keyCode == "13") {
            $(".cymylogin .cymyloginbutton").trigger("click");
        }
    });
    function initLogin() {
        //清空登录
        var cymyLogin = document.getElementsByClassName("cymlogin")[0];
        $("#login").on('shown.bs.modal', function () {
            $(".cymylogin-bottom input").css("border","");
            cymyLogin.style.display = "none";
        });
        RequestService("/online/user/isAlive", "GET", null, function (data) {///online/user/isAlive
            if (data.success === true) {
                var path;
                localStorage.username = data.loginName;
                //头像预览
                if (data.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
                    path = data.resultObject.smallHeadPhoto;
                } else {
                    path = bath + data.resultObject.smallHeadPhoto
                }
                $(".userPic").css({
                    background: "url(" + path + ") no-repeat",
                    backgroundSize: "100% 100%"
                });
                $('#login').css("display", "none");
                $(".loginGroup .logout").css("display", "none");
                $(".loginGroup .login").css("display", "block");
                $(".dropdown .name").text(data.resultObject.name).attr("title", data.resultObject.name);
            }
            else {
                $('#login').css("display", "none");
                $(".loginGroup .logout").css("display", "block");
                $(".loginGroup .login").css("display", "none");
            }
        });
        $(".form-login .cymyloginclose1").on("click", function () {
            $(".cymyloginclose1").css("display","none");
            $(".cyinput1").css({"border":"1px solid #2cb82c"});
            $(".cyinput1").val("");
        });
        $(".form-login .cymyloginclose2").on("click",function(){
            $(".cymyloginclose2").css("display","none");
            $(".cyinput2").css({"border":"1px solid #2cb82c"});
            $(".cyinput2").val("");
        });
        var isCliclLogin = false;
        $(".form-login .cyinput1").focus(function () {
            if (cymyLogin.innerText == "请输入手机号或邮箱" || cymyLogin.innerText == "手机号格式不正确!" || cymyLogin.innerText == "邮箱格式不正确!" || cymyLogin.innerText=="用户名或密码不正确!") {
                cymyLogin.style.display="none";
            }
            $(".cyinput1").css("border","1px solid #2cb82c");
        });

        $(".form-login .cyinput1").blur(function () {
            var cymyLogin = document.getElementsByClassName("cymlogin")[0];
            var regPhone = /^1[3-578]\d{9}$/;
            var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w{2,})*\.\w{2,}([-.]\w{2,})*$/;
            if ($(".form-login .cyinput1").val().trim().length === 0) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "请输入手机号或邮箱";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            } else if ($(".form-login .cyinput1").val().trim().indexOf("@") == "-1" && !(regPhone.test($(".form-login .cyinput1").val().trim()))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "手机号格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            } else if ($(".form-login .cyinput1").val().trim().indexOf("@") != "-1" && !(regEmail.test($(".form-login .cyinput1").val().trim()))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "邮箱格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            }else{
                $(".cyinput1").css("border", "");
            }
        });
        $(".form-login .cyinput2").focus(function () {
            if (cymyLogin.innerText == "请输入6-18位密码") {
                cymyLogin.style.display="none";
            }
            $(".cyinput2").css("border", "1px solid #2cb82c");
        });
        $(".form-login .cyinput2").blur(function () {
            var cymyLogin = document.getElementsByClassName("cymlogin")[0];
            var cyinput2Length=$(".form-login .cyinput2").val().trim().length;
            if(cyinput2Length==0){
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
            }else if (cyinput2Length<6&&cyinput2Length>18) {
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
            }else{
                $(".cyinput2").css("border"," ");
            }
        });
        $(".form-login .cyinput2").focus().blur();
        $(".form-login .cymyloginbutton").click(function (evt) { //登录验证
            var regPhone = /^1[3-578]\d{9}$/;
            var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w{2,})*\.\w{2,}([-.]\w{2,})*$/;
            var passwordReg = /^(?!\s+)[\w\W]{6,18}$/;//密码格式验证
            $(".cyinput1").css("border", "");
            $(".cyinput2").css("border", "");
            var data = {
                username: $(".form-login .cyinput1").val().trim(),
                password: $(".form-login .cyinput2").val()
            };
            if (data.username.length === 0) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "请输入手机号或邮箱";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.username.indexOf("@") == "-1" && !(regPhone.test(data.username))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "手机号格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.username.indexOf("@") != "-1" && !(regEmail.test(data.username))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "邮箱格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.password.length === 0) {
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cyinput2").val("");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
                return;
            }
            isCliclLogin = true;
            login(data);
        });

        function login(data, autoLogin) {
            RequestService("/online/user/login", "POST", data, function (result) { //登陆/index.html   /online/user/login
                if (result.success === true || result.success == undefined) {
                    window.localStorage.userName=data.username;
                    window.location.reload();
                    var myStudent=window.localStorage.myStudyCenter;
                    if(myStudent==1){
                        window.location.href="/web/html/myStudyCenter.html";
                        window.localStorage.myStudyCenter=null;
                    }
                } else { //登陆错误提示
                    $(".loginGroup .logout").css("display", "block");
                    errorMessage(result.errorMessage);
                    if (!flag) {
                        if (result.errorMessage == "用户名密码错误！") {
                            cymyLogin.innerText = "用户名或密码不正确!";
                            $(".cymlogin").css("top", " 154px");
                            cymyLogin.style.display = "block";
                        } else {
                            cymyLogin.innerText = result.errorMessage;
                            $(".cymlogin").css("top", " 154px");
                            cymyLogin.style.display = "block";
                        }
                    }

                }
            });
        }
        $(".dropdownmenu li a").click(function (evt) {
            $(".top-item").removeClass("selected");
            var btn = $(evt.target);
            var id = "personcenter";
            window.localStorage.personcenter = $(evt.target).attr("data-id");
            if (window.location.pathname == "/web/html/personcenter.html") {
                if ($(this).attr("data-exit")) {
                    RequestService("/online/user/logout", "GET", {}, function () {
                        location.href = "/index.html";
                        $(".loginGroup .logout").css("display", "block");
                        $(".loginGroup .login").css("display", "none");
                    });
                } else {
                    $(".left-nav ." + window.localStorage.personcenter).click();
                }
            } else {
                if ($(this).attr("data-exit")) {
                    RequestService("/online/user/logout", "GET", {}, function () {
                        location.href = "/index.html";
                        $(".loginGroup .logout").css("display", "block");
                        $(".loginGroup .login").css("display", "none");
                    });
                } else {
                    location.href = "/web/html/personcenter.html";
                    RequestService("/online/user/isAlive", "GET", null, function (data) {///online/user/isAlive
                        if (data.success) {
                            if (data.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
                                path = data.resultObject.smallHeadPhoto;
                            } else {
                                path = bath + data.resultObject.smallHeadPhoto
                            }
                            //头像预览
                            $(".userPic").css({
                                background: "url(" + path + ") no-repeat",
                                backgroundSize: "100% 100%"
                            });
                            $('#login').modal('hide');
                            $("html").css({"overflow-x": "hidden", "overflow-y": "auto"});
                            $(".loginGroup .logout").hide();
                            $(".loginGroup .login").show();
                            $(".dropdown .name").text(data.resultObject.name).attr("title", data.resultObject.name);
                            localStorage.username = data.resultObject.loginName;
                            localStorage.userid = data.resultObject.id;
                            if ($(btn.parent().hasClass('selected'))) {

                            } else {
                                hideHtml();
                            }
                        } else {
                            location.href = "/index.html";
                            localStorage.username = null;
                            localStorage.password = null;
                            $(".login").css("display", "none");
                            $(".logout").css("display", "block");
//                          }
                        }
                    });
                }
            }

        });
    }
});
