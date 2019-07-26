<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IEedge">
    <title>专业详情页面</title>
    <meta name="renderer" content="webkit">
    <meta name="baidu-site-verification" content="UHaAQAeAQF">
    <link rel="stylesheet" href="/home/css/bootstrap.min.css">
    <link rel="stylesheet" href="/home/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/home/css/mylogin.css">
    <link rel="stylesheet" href="/home/css/componet.css">
    <link rel="stylesheet" href="/home/css/index.css">
    <link rel="stylesheet" href="/home/css/header.css">
    <link rel="stylesheet" href="/home/css/footer.css">
    <link rel="stylesheet" href="/home/css/iconfont.css">
    <script src="/home/js/jquery-1.12.1.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/artTemplate.js"></script>
    <script type="text/javascript" src="/home/js/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/home/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/jquery.form.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/home/js/md5.js" type="text/javascript" charset="UTF-8"></script>
    <script src="/home/js/html5.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/home/js/helpers.js"></script>
    <script src="/home/js/ajax.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>
    <!--直播日历-->
    <header>
        <div class="header_body">
            <div class="header_left">
                <a href="http://www.boxuegu.com/index.html">
                    <img src="/home/img/logo.png" alt="NO IMG">
                </a>
                <div class="path">
                    <a href="http://www.boxuegu.com/index.html" class="select">云课堂</a>
                    <a href="http://www.boxuegu.com/web/html/ansAndQus.html">问答精灵</a>
                </div>
            </div>
            <div class="header_right">
                <a href="javascript:void(0);" class="studentCenterBox">
                    学习中心
                </a>
                <div class="loginGroup">
                    <div class="login" style="display: block;">
                        <div class="dropdown" id="myDropdown">
                            <div class="userPic" style="background: url(&quot;/home/img/18.png&quot;) 0% 0% / 100% 100% no-repeat;"></div>
                            <div id="dLabel" data-target="#" role="button" aria-haspopup="true">
                                <span class="name" title="admin">admin</span>
                                <span class="caret"></span>
                            </div>
                            <ul class="dropdownmenu" aria-labelledby="dLabel">
                                <div class="pointer"></div>
                                <li><a data-id="mynews"><i class="iconfont icon-ziyuan myNews" style="font-size:12px"></i>我的消息</a></li>
                                <li><a data-id="mydata"><i class="iconfont icon-xueyuan"></i>我的资料</a></li>
                                <li><a data-id="idea"><i class="iconfont icon-yijianfankui"></i>意见反馈</a></li>
                                <li><a data-exit="exit"><i class="iconfont icon-tuichu"></i>安全退出</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="logout" style="display:none;">
                        <a class="btn-login btn-link" data-toggle="modal" data-target="#login" data-backdrop="static">登录</a>
                        <a class="btn-register btn-link" href="http://www.boxuegu.com/web/html/login.html?ways=register">注册</a>
                    </div>
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
        <div class="online_consult">
            <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800146955&amp;aty=2&amp;a=2&amp;curl=&amp;ty=1" target="_blank">
                <img src="/home/img/zixun.gif" alt="NO IMG">
                <span>在线咨询</span></a>
        </div>
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
        <div class="h_top" onclick="pageScroll();" style="display: none;"><span class="wrap"><img src="/home/img/top.png" alt=""><span class="h_top_s">top</span></span>
        </div>
    </header>
    <div id="livingCalendar">
        <div class="livingCalendarBox">
            <div class="livingCalendarTitle clearfix">
                <div class="livingCalendarTitleLeft">
                    <span class="leftTitle">直播日历</span>
                    <span class="returnToady">今天：2017年1月17日</span>
                </div>
                <img class="riliClose" src="/home/img/rili_close.png" alt="">
            </div>
            <div class="livingDuring clearfix">
                <img class="subDate" src="/home/img/rili_left.png" alt="">
                <div class="dateDuring">
                    <span class="starDate" data-week="Mon Jan 16 2017 11:40:39 GMT+0800 (中国标准时间)">1月16日</span><span>至</span><span class="endDate" data-week="Sun Jan 22 2017 11:40:39 GMT+0800 (中国标准时间)">1月22日</span>
                </div>
                <img class="addDate" src="/home/img/rili_right.png" alt="">
            </div>
            <div class="livingSchedule clearfix">
                <ul class="week clearfix">
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                    <li>日</li>
                </ul>
                <div class="scheduleContent">
                    <ul class="weekDuring clearfix">
                        <li class="livingDate">16</li>
                        <li class="livingDate currentDate">17</li>
                        <li class="livingDate">18</li>
                        <li class="livingDate">19</li>
                        <li class="livingDate">20</li>
                        <li class="livingDate">21</li>
                        <li class="livingDate">22</li>
                    </ul>
                    <div class="courseScroll">
                        <ul class="weekCount clearfix">
                            <li>
                                <div class="livingContent"><span class="livingTime">20:00</span><span class="livingCourseName">Web前端3期就业班开班典礼</span></div>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--直播结束-->
    <div class="index_body">
        <!--轮播图-->
        <div id="banner" class="clearfix">
            <div class="slider-container">
                <ul id="slider" class="slider">
                    <li data-indexid="12" class="cur" data-img="/home/img/a6d4fafac4e14cc48240a2021e5f5ffa.jpg" style="display: none;"><a id="aImg0" target="_blank" href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=76&amp;free=0" style="background: url(&quot;/home/img/a6d4fafac4e14cc48240a2021e5f5ffa.jpg&quot;) center top no-repeat;"></a></li>
                    <li data-indexid="14" class="cur" data-img="/home/img/c1a1967912da4a17b239c9516ea85006.jpg" style="display: block;"><a id="aImg1" target="_blank" href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=123&amp;courseType=1&amp;free=0" style="background: url(&quot;/home/img/c1a1967912da4a17b239c9516ea85006.jpg&quot;) center top no-repeat;"></a></li>
                    <li data-indexid="10" class="cur" data-img="/home/img/3adac87ccc9e46da8628076494a3599f.jpg" style="display: none;"><a id="aImg2" target="_blank" href="http://www.boxuegu.com/web/subject/data/" style="background: url(&quot;/home/img/3adac87ccc9e46da8628076494a3599f.jpg&quot;) center top no-repeat;"></a></li>
                    <li data-indexid="9" class="cur" data-img="/home/img/9afe6cc6f7fb474081ac212ffc4fc6df.jpg" style="display: none;"><a id="aImg3" target="_blank" href="http://www.boxuegu.com/web/subject/web/" style="background: url(&quot;/home/img/9afe6cc6f7fb474081ac212ffc4fc6df.jpg&quot;) center top no-repeat;"></a></li>
                </ul>
                <div id="left"><em></em></div>
                <div id="right"><em></em></div>
                <div id="selector" class="selector" style="left: 50%; margin-left: -36px;">
                    <span class=""></span><span class="cur"></span><span class=""></span><span class=""></span></div>
            </div>
            <div class="lastest-news">
                <div class="newsTitle">
                    <img src="/home/img/icon.png" alt="">
                    <p class="biaoti">最新动态</p>
                </div>
                <ul class="newsList">
                    <li data-newsid="11"><a class="hotNews" href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=76&amp;courseType=1&amp;free=0?bxgzixun" target="_blank" title="微信APP终于来了！马上学习"><em class="hotNewsEm"></em>微信APP终于来了！马上学习</a></li>
                    <li data-newsid="4"><a href="http://www.boxuegu.com/web/subject/web/" target="_blank" title="Web前端在线实战班，不解释"><em></em>Web前端在线实战班，不解释</a></li>
                    <li data-newsid="1"><a href="http://www.boxuegu.com/web/subject/data/" target="_blank" title="云计算在线班，挑战年薪30W"><em></em>云计算在线班，挑战年薪30W</a></li>
                    <li data-newsid="2"><a href="http://www.boxuegu.com/web/html/courseIntroductionPage.html?id=82&amp;courseType=1&amp;free=0" target="_blank" title="UI设计打造会代码的全能设计师"><em></em>UI设计打造会代码的全能设计师</a></li>
                    <li data-newsid="5"><a class="hotNews" href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=2416751717" target="_blank" title="获取更多学习资料+源码+笔记"><em class="hotNewsEm"></em>获取更多学习资料+源码+笔记</a></li>
                    <li data-newsid="3"><a href="http://www.itcast.cn/subject/videohz/index.shtml?zxdt" target="_blank" title="轻松了解传智播客十大学科"><em></em>轻松了解传智播客十大学科</a></li>
                    <li data-newsid="8"><a href="http://bbs.itheima.com/thread-130723-1-1.html" target="_blank" title="一张贴看完黑马所有薪资"><em></em>一张贴看完黑马所有薪资</a></li>
                    <li data-newsid="6"><a href="http://www.itcast.cn/news/20151230/0856145780.shtml" target="_blank" title="2016年传智各学科学费价格表"><em></em>2016年传智各学科学费价格表</a></li>
                </ul>
            </div>
        </div>
        <!--课程列表-->
        <div id="bgColor">
            <!--推荐课程-->
            <div id="recommend-course" class="clearfix">
                <div class="recommend-course-image">
                    <img src="/home/img/indexHotRecommend.png" alt="">
                </div>
                <div class="recommend-course-items clearfix">
                    <ul class="clearfix recommend-course-box">
                        <li data-indexrecmmentid="4">
                            <a href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=4&amp;courseType=1&amp;free=0" target="_blank">
                                <div class="img"><img src="/home/img/3cec774e555e4003806fc4625c187bd1.jpg"></div>
                                <div class="recommend-course-items-details clearfix">
                                    <p class="recommend-courseName" title="PS基础精品班">PS基础精品班</p>
                                    <div class="teachersInfo"><span>20小时</span><i>|</i></div>
                                    <div class="courseDetails clearfix"><span class="coursePrice"><i>￥</i>98.00</span>
                                        <del><i class="price1">￥</i>398.00</del><span class="studentCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">34</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li data-indexrecmmentid="101">
                            <a href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=101&amp;courseType=1&amp;free=0" target="_blank">
                                <div class="img"><img src="/home/img/d592b77c48c54a529ff50753aa07a4d8.jpg"></div>
                                <div class="recommend-course-items-details clearfix">
                                    <p class="recommend-courseName" title="AI基础精品班">AI基础精品班</p>
                                    <div class="teachersInfo"><span>30小时</span><i>|</i></div>
                                    <div class="courseDetails clearfix"><span class="coursePrice"><i>￥</i>128.00</span>
                                        <del><i class="price1">￥</i>240.00</del><span class="studentCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">6</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li data-indexrecmmentid="102">
                            <a href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=102&amp;courseType=1&amp;free=0" target="_blank">
                                <div class="img"><img src="/home/img/85552dcc79f440929328b621d93ba70c.jpg"></div>
                                <div class="recommend-course-items-details clearfix">
                                    <p class="recommend-courseName" title="电商视觉营销设计">电商视觉营销设计</p>
                                    <div class="teachersInfo"><span>42小时</span><i>|</i></div>
                                    <div class="courseDetails clearfix"><span class="coursePrice"><i>￥</i>368.00</span>
                                        <del><i class="price1">￥</i>798.00</del><span class="studentCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">6</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li data-indexrecmmentid="109">
                            <a href="http://www.boxuegu.com/web/html/payCourseDetailPage.html?id=109&amp;courseType=1&amp;free=0" target="_blank">
                                <div class="img"><img src="/home/img/42c6b863dfb14e2f94df3aaa1df7c1f3.jpg"></div>
                                <div class="recommend-course-items-details clearfix">
                                    <p class="recommend-courseName" title="UI设计精品班">UI设计精品班</p>
                                    <div class="teachersInfo"><span>30小时</span><i>|</i></div>
                                    <div class="courseDetails clearfix"><span class="coursePrice"><i>￥</i>1500.00</span>
                                        <del><i class="price1">￥</i>2998.00</del><span class="studentCount"><img src="/home/img/studentCount.png" alt=""><span class="studentCou">0</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--公开课直播-->
            <div id="public-class-live">
                <div class="public-class-live-title clearfix">
                    <h1>公开课直播</h1>
                    <div class="calendar">
                        <img src="/home/img/rili.png" alt=""><span>直播日历</span>
                    </div>
                </div>
                <div style="width:110%;">
                    <ul class="public-class-live-content clearfix">
                        @foreach($live as $val)
                        <li>
                            <a style="cursor:pointer" href="/home/live/player?id={{$val -> id}}" target="_blank">
                                <div class="img">
                                    <img src="{{$val -> cover_img}}">
                                </div>
                                <div class="public-class-live-detail">
                                    <div class="detailCourseInfo clearfix">
                                        <div class="detailCourseName" title="{{$val -> live_name}}">
                                            {{$val -> live_name}}
                                        </div>
                                    </div>
                                    <div class="detailLiveInfo clearfix">
                                        <div class="detailLiveDate">最近直播：{{$val -> start}}</div>
                                        <div class="detailLiving">
                                            <img src="/home/img/zhiboNoStart.png" alt="">
                                            <span class="noStart">{{$val -> liveStatus}}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div id="main" class="clearfix">
                <h1>专业课程</h1>
                <div id="log" style="width: 100%;">
                    <div id="content" class="content clearfix" style="width: 110%;">
                        @foreach($profession as $val)
                        <div class="course clearfix">
                            <a href="/home/profession/detail?id={{$val -> id}}">
                                <div class="img"><img src="{{$val -> cover_img}}"></div><span class="classCategory">点播</span>
                                <div class="detail">
                                    <p class="title" data-text="{{$val -> pro_name}}" title="{{$val -> pro_name}}">{{$val -> pro_name}}</p>
                                    <p class="timeAndTeac"><span>{{$val -> duration}}小时</span><i>|</i></p>
                                    <p class="info clearfix"><span><i>￥</i><span class="price">{{$val -> price * 0.0001}}</span>
                                        <del>
                                            <i class="price1">￥</i>{{$val -> price}}
                                        </del>
                                        </span>
                                        <span class="stuCount">
                                            <img src="/home/img/studentCount.png" alt="NO IMG">
                                            <span class="studentCou">{{$val -> view_count}}</span>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </div>
                        @endforeach
                    </div>
                    <div id="emptyTitle" style="display: none;">
                        <img src="/home/img/index2.png" alt="">
                        <span>更多精彩课程正在上新中，敬请期待...</span>
                    </div>
                </div>
                <!-------------学员故事---------------->
                <div style="width:100%;overflow:hidden;position: relative;">
                    <div id="studentStore" class="slide-box">
                        <h2>学员故事</h2>
                        <div id="box" class="slideBox">
                            <a href="javascript:;" id="prev" class="prev"><em></em></a>
                            <div class="tempWrap" style="overflow:hidden; position:relative; width:1218px">
                                <ul class="clearfix boxContent" style="width: 2842px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: -812px;">
                                    <li data-storyid="2c90819156f8dc9d0156f9b446280009" class="clone" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/d987521cf094409280ad7a5674788e8a.png" alt="">
                                                <p>江航</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>李山投资</span><span class="separator">&amp;</span><span>薪资14k</span> </p>
                                                <p class="brief"><span><em>“</em>身在什么环境，就做好什么角色。我是一名普通学员，学习是我的任务。俗话说不疯魔不成活，正是对设计深深的迷恋让我用心去付出，最终成为一名专业设计师。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9d7b2d8000b" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/3d93b95365db4af387ac98fd0e56941d.png" alt="">
                                                <p>王韦达</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>闪电报销</span><span class="separator">&amp;</span><span>薪资15k</span> </p>
                                                <p class="brief"><span><em>“</em>我毕业于台湾义守大学，一次机会我接触到iOS，为了更深入学习，我独自一人来北京。在博学谷四个月的磨炼带给我的不仅是蜕变，还有成功。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9d55f81000a" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/a41e7eb77d8742ffb2a314efe3959c4a.png" alt="">
                                                <p>张曾天</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>同方鼎欣</span><span class="separator">&amp;</span><span>薪资13k</span> </p>
                                                <p class="brief"><span><em>“</em>古语云：三十而立，我却在28岁开始学习软件开发，这是我在大学毕业工作五年后做出的一个让人无法理解的选择。我鼓起勇气在28岁时从头开始一段程序人生。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9b446280009" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/d987521cf094409280ad7a5674788e8a.png" alt="">
                                                <p>江航</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>李山投资</span><span class="separator">&amp;</span><span>薪资14k</span> </p>
                                                <p class="brief"><span><em>“</em>身在什么环境，就做好什么角色。我是一名普通学员，学习是我的任务。俗话说不疯魔不成活，正是对设计深深的迷恋让我用心去付出，最终成为一名专业设计师。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9d7b2d8000b" class="clone" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/3d93b95365db4af387ac98fd0e56941d.png" alt="">
                                                <p>王韦达</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>闪电报销</span><span class="separator">&amp;</span><span>薪资15k</span> </p>
                                                <p class="brief"><span><em>“</em>我毕业于台湾义守大学，一次机会我接触到iOS，为了更深入学习，我独自一人来北京。在博学谷四个月的磨炼带给我的不仅是蜕变，还有成功。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9d55f81000a" class="clone" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/a41e7eb77d8742ffb2a314efe3959c4a.png" alt="">
                                                <p>张曾天</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>同方鼎欣</span><span class="separator">&amp;</span><span>薪资13k</span> </p>
                                                <p class="brief"><span><em>“</em>古语云：三十而立，我却在28岁开始学习软件开发，这是我在大学毕业工作五年后做出的一个让人无法理解的选择。我鼓起勇气在28岁时从头开始一段程序人生。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-storyid="2c90819156f8dc9d0156f9b446280009" class="clone" style="float: left; width: 406px;">
                                        <div class="rr">
                                            <div class="student-img"><img src="/home/img/d987521cf094409280ad7a5674788e8a.png" alt="">
                                                <p>江航</p>
                                            </div>
                                            <div class="student-info">
                                                <p class="info_top"> <span>李山投资</span><span class="separator">&amp;</span><span>薪资14k</span> </p>
                                                <p class="brief"><span><em>“</em>身在什么环境，就做好什么角色。我是一名普通学员，学习是我的任务。俗话说不疯魔不成活，正是对设计深深的迷恋让我用心去付出，最终成为一名专业设计师。<em>”</em></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="javascript:;" id="next" class="next"><em></em></a>
                        </div>
                    </div>
                </div>
                <!-------------学员故事---------------->
            </div>
        </div>
    </div>
    <hr class="bottom clearfix">
    <div class="boxueguBottomIntroduct clearfix">
        <div class="index-footer clearfix">
            <div class="index-footer-left">
                <p class="bottom-title">博学谷云课堂</p>
                <p class="bottom-content">
                    博学谷云课堂，是传智播客旗下的在线教育品牌。专注整合传智优势教学资源、打造适合在线学习并能保证教学结果的优质教学产品，同时打造和运营一整套教育生态软件体系，为用户提供满足自身成长和发展要求的有效服务。
                </p>
            </div>
            <div class="index-footer-middle clearfix">
                <p class="index-footer-title">关注我们</p>
                <div class="weibo-erweima">
                    <a href="http://weibo.com/u/5999622644?refer_flag=1001030102_&amp;is_hot=1" target="_blank">
                        <img class="weibo" src="/home/img/weibo.png" alt="" title="点击关注博学谷微博">
                    </a>
                    <div class="weibo-hover">
                        <img src="/home/img/weiboerweima.png" alt="">
                        <p>&nbsp;&nbsp;关注博学谷新浪微博获取更多行业即时资讯</p>
                        <img class="indexSanjiao" src="/home/img/index03.png" alt="">
                    </div>
                </div>
                <div class="weixin-erweima">
                    <img class="weixin" src="/home/img/weixin.png" alt="">
                    <div class="weixin-hover">
                        <img src="/home/img/weixinImg.png" alt="">
                        <p>关注博学谷微信公众号每日获取最新学习资料</p>
                        <img class="indexSanjiao" src="/home/img/index03.png" alt="">
                    </div>
                </div>
            </div>
            <div id="friendLink">
                <h3>友情链接</h3><a href="http://www.itcast.cn/" target="_blank">传智播客</a><a href="http://bbs.itcast.cn/" target="_blank">传智播客论坛</a><a href="http://open.itcast.cn/" target="_blank">传智播客公开课</a><a href="http://yx.boxuegu.com/" target="_blank">传智教材资</a><a href="http://www.csdn.net/" target="_blank">CSDN</a><a href="http://www.itheima.com/" target="_blank">黑马程序员</a><a href="http://yun.itcast.cn/" target="_blank">传智云课堂</a><a href="http://up.boxuegu.com/" target="_blank">逆袭</a><a href="http://dvd.boxuegu.com/" target="_blank">博学谷视频库</a></div>
        </div>
    </div>
    <!--友情链接下的分隔线-->
    <!--<hr class="bottom clearfix" >-->
    <script src="/home/js/jquery.pagination.js"></script>
    <script type="text/javascript" src="/home/js/footer.js"></script>
    <div class="footerDT" style="background-color:#fff;height:88px;">
        <footer class="indexFooter">
            <div class="content">
                <div class="content-item footer-bodys" style="background-color:#fff;">
                    <div class="content-item content-footer-link about-us">
                        <ul class="gate">
                            <li data-id="first" data-url="/web/html/aboutUs.html">关于我们<span>|</span></li>
                            <li data-id="two" data-url="/web/html/aboutUs.html">人才招聘<span>|</span></li>
                            <li data-id="three" data-url="/web/html/aboutUs.html">联系我们<span>|</span></li>
                            <li data-id="four" class="noline" data-url="/web/html/aboutUs.html">常见问题</li>
                        </ul>
                    </div>
                    <div class="trademark">京ICP备08001421号 京公网安备110108007702 Copyright @ 2016 博学谷 All Rights Reserved</div>
                </div>
            </div>
        </footer>
    </div>
    <script src="/home/js/placeHolder.js"></script>
    <script type="text/javascript">
    $(function() {
        $('input').placeholder();
    });
    </script>
    <div class="browserBody" style="display:none;">
        <div class="bcgop"></div>
        <div class="browserBody-text">
            <p>您目前使用的浏览器可能无法实现最佳浏览效果，建议使用Chrome(谷歌)、Firefox(火狐)、Edge、IE9及IE9以上版本浏览器。</p><a href="http://www.boxuegu.com/web/html/Download.html">立即升级</a><img src="/home/img/BWcolse.png"></div>
    </div>
</body>

</html>