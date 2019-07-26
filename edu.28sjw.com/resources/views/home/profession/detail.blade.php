<!DOCTYPE html>
<!-- saved from url=(0070)https://www.boxuegu.com/web/html/payCourseDetailPage.html?id=76&free=0 -->
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:bd="http://www.baidu.com/2010/xbdml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--[if IE 9]>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
    <![endif]-->
    <meta http-equiv="X-UA-Compatible" content="IEedge">
    <title>{{$data -> pro_name}} - 博学谷云课堂</title>
    <link rel="shortcut icon" href="https://www.boxuegu.com/favicon.ico">
    <meta name="keywords" content="Java培训,Android培训,安卓培训,PHP培训,C++培训,iOS培训,网页设计培训,平面设计培训,UI设计培训,游戏开发培训,移动开发培训,网络营销培训,web前端培训">
    <meta name="description" content="博学谷云课堂为传智播客旗下在线教育品牌，将积累10年的实体班线下课程和教学方法引到线上。课程大纲全新优化，内容有广度、有深度，顶尖讲师全程直播授课。专注整合传智优势教学资源、打造适合在线学习并能保证教学结果的优质教学产品，同时打造和运营一整套教育生态软件体系，为用户提供满足自身成长和发展要求的有效服务。">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="/home/css/bootstrap.min.css">
    <link rel="stylesheet" href="/home/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/home/css/mylogin.css">
    <link rel="stylesheet" href="/home/css/myprofile.css">
    <link rel="stylesheet" href="/home/css/componet.css">
    <link rel="stylesheet" href="/home/css/header.css">
    <link rel="stylesheet" href="/home/css/iconfont.css">
    <link rel="stylesheet" href="/home/css/payCourseDetailPage.css">
    <link rel="stylesheet" href="/home/css/footer.css">
    <link rel="stylesheet" href="/home/css/iconfont.css">
    <script src="/home/js/hm.js"></script>
    <script src="/home/js/jquery-1.12.1.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/ZeroClipboard.js"></script>
    <script src="/home/js/ajax.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/artTemplate.js"></script>
    <script type="text/javascript" src="/home/js/jquery.dotdotdot.js"></script>
    <script type="text/javascript" src="/home/js/layer.js"></script>
    <link rel="stylesheet" href="/home/css/layer.css" id="layui_layer_skinlayercss">
    <script src="/home/js/jquery.pagination.js"></script>
    <script src="/home/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/jquery.form.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/helpers.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/html5.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>
    <div class="webSiteNotice" style="display:none;">
        <div class="innerBox clearfix"><i class="iconfont icon-xiaoxilaba xiaoxilaba"></i><span class="noticeInfo"></span><i class="iconfont icon-guanbi noticeClose"></i></div>
    </div>
    <header>
        <div class="header_body">
            <div class="header_left"><a href="https://www.boxuegu.com/index.html"><img src="/home/img/logo.png" alt=""></a>
                <div class="path"><a href="https://www.boxuegu.com/index.html" class="select">云课堂</a><a href="https://www.boxuegu.com/web/html/ansAndQus.html">问答精灵</a><a href="https://www.boxuegu.com/web/html/forum.html">博学社</a><a href="http://www.itheima.com/" target="_blank">线下学院</a></div>
            </div>
            <div class="header_right"><a href="javascript:;" class="studentCenterBox">学习中心</a>
                <div class="messageBox"><a href="javascript:;" data-id="mynews" class="message">消息</a><span class="messageCount"><em></em></span></div><span class="lineBetween">|</span>
                <div class="loginGroup">
                    <div class="login" style="display:none;">
                        <div class="dropdown" id="myDropdown">
                            <div class="userPic"></div>
                            <div id="dLabel" data-target="#" role="button" aria-haspopup="true"><span class="name"></span><span class="caret"></span> </div>
                            <ul class="dropdownmenu" aria-labelledby="dLabel">
                                <div class="pointer"></div>
                                <li><a data-id="mydata"><i class="iconfont icon-xueyuan"></i>我的资料</a></li>
                                <li><a data-id="idea"><i class="iconfont icon-yijianfankui"></i>意见反馈</a></li>
                                <li><a data-exit="exit"><i class="iconfont icon-tuichu"></i>安全退出</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="logout" style="display: block;"><a class="btn-login btn-link" data-toggle="modal" data-target="#login" data-backdrop="static">登录</a> <a class="btn-register btn-link" href="https://www.boxuegu.com/web/html/login.html?ways=register">注册</a></div>
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
                        <div class="cymyloginpassword"><a class="atOnceRegister" href="https://www.boxuegu.com/web/html/login.html?ways=register">立即注册</a><a class="atOnceResetPassword" href="https://www.boxuegu.com/web/html/resetPassword.html">忘记密码?</a></div>
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
            <div class="sideSanjiao"><img src="/home/img/float_sanjiao.png"></div>
        </div>
        <div class="sideWeiboErma"><img src="/home/img/sideWeibopng.png">
            <div class="sideSanjiao1"><img src="/home/img/float_sanjiao.png"></div>
        </div>
        <div class="h_top" onclick="pageScroll();" style="display: block;"><span class="wrap"><img src="/home/img/top.png" alt=""><span class="h_top_s">top</span></span>
        </div>
    </header>
    <input type="hidden" id="fe_text" class="sharUrl" value="">
    <div class="shareDaShi">
        <div class="shareDaShiBox">
            <div class="shareTop">
                <span>提示</span>
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div class="shareBottom">
                <span>课程链接复制成功，快分享给你的好友吧！</span>
                <div class="shareBtn">确定</div>
            </div>
        </div>
    </div>
    <div class="noShareDaShi">
        <div class="noShareDaShiBox">
            <div class="shareTop">
                <span>提示</span>
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div class="shareBottom">
                <span>你现在还不是分享大使，点击</span>
                <span class="getZige">获取资格</span>
            </div>
        </div>
    </div>
    <div class="rTips"></div>
    <div id="payCourseSlider" style="">
        <div class="payCourseItems clearfix">
            <ul class="clearfix" style="display:inline-block">
                <li class="cu-shou course-details notpointer">课程详情</li>
                <li class="cu-shou course-outline noClick">课程大纲</li>
                <li class="cu-shou course-teacher notpointer">授课老师</li>
                <li class="cu-shou course-problem notpointer">常见问题</li>
                <li class="cu-shou course-evaluate notpointer">学员评价</li>
            </ul>
            <a href="https://www.boxuegu.com/web/html/order.html?courseId=76" class="purchase" style="display: block;">立即报名</a>
            <a href="https://www.boxuegu.com/web/html/myStudyCenter.html?free=undefined" class="studyImmed" style="display: none;">立即学习</a>
        </div>
    </div>
    <div id="course-list">
        <div class="nav" id="NoShowIntroduct" style="display: block;">
            <a href="https://www.boxuegu.com/index.html">云课堂</a><span> &gt; </span><span class="myClassName" style="margin-left:0px" href="/web/html/courseIntroductionPage.html?id=76&amp;courseType=0&amp;free=undefined">{{$data -> pro_name}}</span>
        </div>
        <div class="nav" id="showIntroduct">
            <a href="https://www.boxuegu.com/index.html">云课堂</a><span> &gt; </span><a class="myClassName" href="https://www.boxuegu.com/web/html/courseIntroductionPage.html?id=76&amp;courseType=0&amp;free=undefined">{{$data -> pro_name}}</a><span> &gt; </span><span style="margin-left:0px">课程详情</span>
        </div>
        <div class="bigpic">
            <div class="bigpic-title">
                <div class="bigpic-img"><img src="{{$data -> cover_img}}"></div>
                <div class="bigpic-body"><span class="bigpic-body-title"><span class="bigpic-body-title-nav">{{$data -> pro_name}}</span></span><span id="d_clip_button" class="shareCourse" data-clipboard-target="fe_text">分享课程，赚取学费<em>&gt;&gt;</em></span>
                    <p class="bigpic-body-text dot-ellipsis" title="{{$data -> description}}">{{$data -> description}}</p>
                    <p class="bigpic-body-list"><span class="body-list-right">主讲：汪老师、邹老师</span><span class="body-list-right myTimes" title="课程时长" style="cursor:default">学习时长：{{$data -> duration}}小时</span><span title="学习人数" style="cursor:default">学习人数：{{$data -> view_count}}人已学习</span><span title="有效期" style="cursor:default;color:#333;" class="youxiaoqi">有效期：1年<span class="yibaoming" style="display:none"><img src="/home/css/baoming.png"></span></span>
                    </p>
                    <p class="bigpic-body-money"><span class="bigpic-body-redmoney">￥{{$data -> price * 0.0001}}</span>
                        <del class="bigpic-body-notmoney">￥{{$data -> price}}</del>
                    </p>
                    <div class="bigpic-body-btn"><a href="/home/profession/makeOrder?id={{$data -> id}}" class="gotengxun purchase">立即报名</a><a class="free-try-to-lean">免费试学</a></div>
                </div>
            </div>
        </div>
        <div id="introductBox">
            <div id="introduct">
                <div class="course" id="detail-course">
                    <!--<div class="classgrand"></div>
                <div class="course-time">开课时间：<span>11111</span></div>
                 <div class="baoming storpHot"><em></em><span style="color:#333;">报名已结束</span></div>
                 <div class="daojishi daojishi' + index + '">距离开班<span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒</div>
                <div class="online"><a style="background-color: #ccc;">在线报名</a></div>-->
                </div>
            </div>
        </div>
        <div class="zhanwei">
        </div>
        <div class="background-big"></div>
        <div id="sign-up-modal">
        </div>
        <div class="table-body clearfix">
            <div class="sidebar-body">
                <div class="sidebar-body-details">
                    <div class="details-title">
                        <!--<div class="shu"></div>-->
                        <p class="sidebar-body-details-title">博学谷云课堂</p>
                    </div>
                    <p class="details-body">
                        博学谷是传智播客旗下的在线教育平台。整合线下优质课程和纯熟的教学经验，开展在线教育，突破空间、地域、时间、费用的限制，让优质教育资源平等化。
                    </p>
                </div>
                <div class="sidebar-body-QQ">
                    <div class="details-title">
                        <!--<div class="shu"></div>-->
                        <p class="sidebar-body-details-title">资料申领</p>
                        <p style="color:#333;margin-left: 20px;font-size: 14px;margin-top: 58px;">更多课程视频资料免费领取</p>
                    </div>
                    <div class="sidebar-body-QQ-name">
                        <p class="greend-QQnumber"><span>QQ号 : </span><a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=2416751717">2416751717</a></p>
                    </div>
                </div>
                <div class="relative-course">
                    <div class="relative-course-top clearfix"><span>推荐课程</span><span class="by-the-arrow"><span class="curCount currentLunbo">1</span><span class="curCount">/</span><span class="curCount allLunbo">4</span><span class="prev" id="prev"></span><span class="next" id="next"></span></span>
                    </div>
                    <div class="relativeAnsNoData" style="display: none;"><img src="/home/img/my_nodata.png">
                        <p>暂无数据</p>
                    </div>
                    <div class="relative-course-bottom slide-box clearfix">
                        <div id="box" class="slideBox clearfix">
                            <ul class="course boxContent clearfix">
                                <li class="diyiye">
                                    <a href="https://www.boxuegu.com/web/html/payCourseDetailPage.html?id=77&amp;courseType=1&amp;free=0" target="_blank">
                                        <div class="img"><img src="/home/img/336eb94512234e20b26490661f666cf2.jpg"></div><span class="classCategory">点播</span>
                                        <div class="detail">
                                            <p class="title" data-text="Web前端开发就业班" title="Web前端开发就业班">Web前端开发就业班</p>
                                            <p class="info clearfix"><span><i>￥</i><span class="price">7000.00</span>
                                                <del><i class="price1">￥</i>9900.00</del>
                                                </span><span class="stuCount"><img src="/home/css/studentCount.png" alt=""><span class="studentCou">62</span></span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.boxuegu.com/web/html/payCourseDetailPage.html?id=125&amp;courseType=1&amp;free=0" target="_blank">
                                        <div class="img"><img src="/home/img/035ff49cca614aa5ad1c61358efe98ae.png"></div><span class="classCategory">点播</span>
                                        <div class="detail">
                                            <p class="title" data-text="HTML5 + CSS3" title="HTML5 + CSS3">HTML5 + CSS3</p>
                                            <p class="info clearfix"><span><i>￥</i><span class="price">299.00</span>
                                                <del><i class="price1">￥</i>499.00</del>
                                                </span><span class="stuCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">44</span></span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.boxuegu.com/web/html/payCourseDetailPage.html?id=124&amp;courseType=1&amp;free=0" target="_blank">
                                        <div class="img"><img src="/home/img/9a7a45f22f4c4dd19752a486cc8a57ec.png"></div><span class="classCategory">点播</span>
                                        <div class="detail">
                                            <p class="title" data-text="AngularJS" title="AngularJS">AngularJS</p>
                                            <p class="info clearfix"><span><i>￥</i><span class="price">299.00</span>
                                                <del><i class="price1">￥</i>499.00</del>
                                                </span><span class="stuCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">44</span></span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.boxuegu.com/web/html/payCourseDetailPage.html?id=123&amp;courseType=1&amp;free=0" target="_blank">
                                        <div class="img"><img src="/home/img/ebfa979d098848b6bd3c7b0bd9317568.jpg"></div><span class="classCategory">点播</span>
                                        <div class="detail">
                                            <p class="title" data-text="Web前端开发基础班" title="Web前端开发基础班">Web前端开发基础班</p>
                                            <p class="info clearfix"><span><i>￥</i><span class="price">299.00</span>
                                                <del><i class="price1">￥</i>800.00</del>
                                                </span><span class="stuCount"><img src="/home/css/studentCount.png" alt=""><span class="studentCou">1275</span></span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-title">
                <div class="table-title-inset">
                    <span class="cu-shou course-details notpointer">课程详情</span>
                    <span class="cu-shou course-outline noClick">课程大纲</span>
                    <span class="cu-shou course-teacher notpointer">授课老师</span>
                    <span class="cu-shou course-problem notpointer">常见问题</span>
                    <span class="cu-shou course-evaluate notpointer">学员评价</span>
                    <span class="table-zhanwei"></span>
                </div>
            </div>
            <div class="pagesBox clearfix">
                <div class="table-modal">
                    <div class="table-school">
                        <div class="table-school-body">
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>微信小程序背景介绍</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">微信小程序背景介绍</p>
                                <div class="details-div-body">
                                    <p title="1-课程说明">1-课程说明</p>
                                    <p title="2-微信小程序简介">2-微信小程序简介</p>
                                    <p title="3-微信小程序可以做什么">3-微信小程序可以做什么</p>
                                    <p></p>
                                </div>
                            </div>
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>准备工作</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">微信小程序开发准备工作</p>
                                <div class="details-div-body">
                                    <p title="1-开发环境的搭建">1-开发环境的搭建</p>
                                    <p title="2-微信web开发者工具更新说明">2-微信web开发者工具更新说明</p>
                                </div>
                            </div>
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>开发初体验</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">微信小程序项目结构</p>
                                <div class="details-div-body">
                                    <p title="1-快速起步">1-快速起步</p>
                                    <p title="2-小程序项目结构1">2-小程序项目结构1</p>
                                    <p title="3-小程序项目结构2">3-小程序项目结构2</p>
                                    <p></p>
                                </div>
                                <p class="details-div-title">应用程序配置详解</p>
                                <div class="details-div-body">
                                    <p title="1-小程序配置说明">1-小程序配置说明</p>
                                    <p title="2-应用程序配置">2-应用程序配置</p>
                                    <p title="3-页面配置文件">3-页面配置文件</p>
                                    <p title="4-标签栏配置">4-标签栏配置</p>
                                </div>
                                <p class="details-div-title">逻辑与界面分离架构</p>
                                <div class="details-div-body">
                                    <p title="1-逻辑与界面分离结构">1-逻辑与界面分离结构</p>
                                    <p title="2-逻辑层的javascript">2-逻辑层的javascript</p>
                                    <p title="3-界面层的数据绑定1">3-界面层的数据绑定1</p>
                                    <p title="4-界面层的数据绑定2">4-界面层的数据绑定2</p>
                                    <p title="5-界面层的列表渲染">5-界面层的列表渲染</p>
                                    <p title="6-界面层的事件处理">6-界面层的事件处理</p>
                                    <p title="7-界面层的事件冒泡">7-界面层的事件冒泡</p>
                                    <p title="8-界面层的事件传参">8-界面层的事件传参</p>
                                    <p title="9-单向数据流">9-单向数据流</p>
                                    <p title="10-登陆页面案例">10-登陆页面案例</p>
                                    <p title="11-登陆页面案例补充和表单">11-登陆页面案例补充和表单</p>
                                    <p title="12-界面层的条件渲染">12-界面层的条件渲染</p>
                                    <p title="13-wxss和css之间的差异">13-wxss和css之间的差异</p>
                                    <p></p>
                                </div>
                            </div>
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>应用程序UI编程</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">微信小程序组件使用介绍</p>
                                <div class="details-div-body">
                                    <p title="1-ui组件走马观花">1-ui组件走马观花</p>
                                    <p title="2-基础内容组件">2-基础内容组件</p>
                                    <p title="3-表单组件">3-表单组件</p>
                                    <p title="4-操作反馈组件">4-操作反馈组件</p>
                                    <p title="5-基础组件总结">5-基础组件总结</p>
                                    <p></p>
                                </div>
                                <p class="details-div-title">微信小程序伸缩布局</p>
                                <div class="details-div-body">
                                    <p title="1-伸缩布局介绍">1-伸缩布局介绍</p>
                                    <p title="2-伸缩布局案例1">2-伸缩布局案例1</p>
                                    <p title="3-伸缩布局案例2">3-伸缩布局案例2</p>
                                    <p title="4-伸缩布局案例3">4-伸缩布局案例3</p>
                                    <p title="5-伸缩布局案例4">5-伸缩布局案例4</p>
                                    <p title="6-伸缩布局案例5">6-伸缩布局案例5</p>
                                </div>
                            </div>
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>页面之间的转换</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">页面跳转的实现方式</p>
                                <div class="details-div-body">
                                    <p title="1-页面间跳转（导航）、快速创建页面、空白配置文件的影响">1-页面间跳转（导航）、快速创建页面、空白配置文件的影响</p>
                                    <p></p>
                                </div>
                                <p class="details-div-title">页面间传值方式</p>
                                <div class="details-div-body">
                                    <p title="1-页面间传值">1-页面间传值</p>
                                    <p></p>
                                </div>
                                <p class="details-div-title">导航条控制</p>
                                <div class="details-div-body">
                                    <p title="1-页面导航模式">1-页面导航模式</p>
                                    <p title="2-导航元素点击高亮">2-导航元素点击高亮</p>
                                    <p title="3-页面导航api">3-页面导航api</p>
                                    <p></p>
                                </div>
                            </div>
                            <p class="school-chapter"><span class="bcg"></span><span class="school-chapter-text"><span>TODOS综合案例</span></span>
                            </p>
                            <div class="details-div">
                                <p class="details-div-title">TODOS综合案例</p>
                                <div class="details-div-body">
                                    <p title="1-TODOS案例（介绍）">1-TODOS案例（介绍）</p>
                                    <p title="2-TODOS案例（界面结构）">2-TODOS案例（界面结构）</p>
                                    <p title="3-TODOS案例（界面样式）">3-TODOS案例（界面样式）</p>
                                    <p title="4-TODOS案例（抽象数据模型）">4-TODOS案例（抽象数据模型）</p>
                                    <p title="5-TODOS案例（界面数据绑定）">5-TODOS案例（界面数据绑定）</p>
                                    <p title="6-TODOS案例（界面交互操作）">6-TODOS案例（界面交互操作）</p>
                                    <p title="7-TODOS案例（新增逻辑优化）">7-TODOS案例（新增逻辑优化）</p>
                                    <p title="8-TODOS案例（切换任务完成状态）">8-TODOS案例（切换任务完成状态）</p>
                                    <p title="9-TODOS案例（剩余任务数量展示）">9-TODOS案例（剩余任务数量展示）</p>
                                    <p title="10-TODOS案例（删除任务）">10-TODOS案例（删除任务）</p>
                                    <p title="11-TODOS案例（切换全部任务完成状态）">11-TODOS案例（切换全部任务完成状态）</p>
                                    <p title="12-TODOS案例（清空已完成任务）">12-TODOS案例（清空已完成任务）</p>
                                    <p title="13-TODOS案例（细节优化及总结）">13-TODOS案例（细节优化及总结）</p>
                                    <p title="14-TODOS案例（真机演示及发散）">14-TODOS案例（真机演示及发散）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pages" style="display: none;">
                    <div id="Pagination"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/home/js/payCourseDetailPage.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/footer.js" type="text/javascript"></script>
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
                    <div class="trademark">京ICP备08001421号 京公网安备110108007702 Copyright @ 2016 博学谷 All Rights Reserved<span style="margin-right:5px;"></span><span id="cnzz_stat_icon_1260713417"><a href="http://www.cnzz.com/stat/website.php?web_id=1260713417" target="_blank" title="站长统计"><img border="0" hspace="0" vspace="0" src="/home/img/pic1.gif"></a></span></div>
                </div>
            </div>
        </footer>
    </div>
    <script src="/home/css/z_stat.php" type="text/javascript"></script>
    <script src="/home/css/core.php" charset="utf-8" type="text/javascript"></script>
    <script src="/home/js/placeHolder.js"></script>
    <script type="text/javascript">
    $(function() { $('input').placeholder(); });
    </script>
    <div class="browserBody" style="display:none;">
        <div class="bcgop"></div>
        <div class="browserBody-text">
            <p>您目前使用的浏览器可能无法实现最佳浏览效果，建议使用Chrome(谷歌)、Firefox(火狐)、Edge、IE9及IE9以上版本浏览器。</p><a href="https://www.boxuegu.com/web/html/Download.html">立即升级</a><img src="/home/img/BWcolse.png"></div>
    </div>
</body>

</html>