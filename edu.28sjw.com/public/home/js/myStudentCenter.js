/**
 * Created by admin on 2016/11/1.
 */
window.onload = function() {
	$(".studentCenterBox").addClass("select");
	var loginName = "";
//	var base = "http://teacher-test.boxuegu.com";//测试
	var base = "http://yuanxiao.boxuegu.com";//线上
	template.helper('range', function(a, b) {
		var m = a / b;
		if(b == 0) {
			m = 0;
		} else {
			m = m * 120 + "px";
		}
		return "<span class='green' style='width:" + m + "'></span>"
	})
	template.helper('hasImg', function(obj) {
		if(obj != null) {
			return '<div class="aimg"><img  src="' + obj + '" class="rr"/></div>';
		} else {
			return '<div class="aimg" style="background-image:none;"><img   src="/web/images/load26.gif"/></div>';
		}
	});
	template.helper('zhibohref', function(id) {
		return "/web/html/CourseDetailZhiBo.html?courseId=" + id;
	});
	template.helper('orderState', function(num) {
		if(num == 0) {
			num = "待支付";
			return num;
		} else if(num == 1) {
			num = "已完成";
			return num;
		} else if(num == 2) {
			num = "已失效";
			return num;
		}
	});
	template.helper('image', function(num) {
		if(num == '' || num == null) {
			var m = parseInt(Math.random() * 20) + 1;
			num = "/web/images/defaultHead/" + m + ".png";
		} else {
			num = num;
		}
		return num;
	});
	template.helper("fenji", function(num) {
		if(num == 0) {
			return "一级";
		} else if(num == 1) {
			return "二级";
		} else if(num == 2) {
			return "三级";
		}
	});
	//获取地址栏参数
$.getUrlParam = function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		}
	var mycourse = '<div class="box clearfix">' +
		'{{each items as $value i }}' +
		'<div class="course" data-url="{{#zhibohref($value.id)}}">' +
		'<a href="javascript:;"   data-videoId="{{$value.id}}">' +
		'{{#hasImg($value.smallImgPath)}}' +
		'<div class="name" title="{{$value.courseName}}">{{$value.courseName}}</div>' +
		'<div class="range clearfix">' +
		'<div class="rangelength">' +
		'<img src="img/mystudy_icon01.png"/ class="lt">' +
		'{{#range($value.learndCount,$value.count)}}' +
		'</div>' +
		'<div class="rangenum">' +
		'<span class="curr">{{$value.learndCount}}</span>/<span class="all">{{$value.count}}</span>' +
		'</div>' +
		'</div>' +
		'</a>' +
		'</div>' +
		'{{/each}}' +
		'</div>';
	var myorder =
		'{{each items as $value i}}' +
		'<div class="ord">' +
		'<p class="ord-01 clearfix">' +
		'<span class="time">{{$value.create_time}}</span>' +
		'<span class="numb">订单号：{{$value.order_no}}</span>' +
		'</p>' +
		'<div class="ord-02 clearfix">' +
		'<div class="or1 clearfix">' +
		'<span class="img"><img src="{{$value.smallimg_path}}"/></span>' +
		'<table border="0" cellspacing="" cellpadding="" class="name">' +
		'<tr><td><span >{{$value.course_name}}</span></td></tr>' +
		'</table>' +
		'</div>' +
		'<div class="or2">￥{{$value.original_cost}}</div>' +
		'<div class="or3">-￥{{$value.preferenty_money}}</div>' +
		'<div class="or4">￥{{$value.actual_pay}}</div>' +
		'<div class="or5">{{#orderState($value.order_status)}}</div>' +
		'{{if $value.order_status=="2"}}' +
		'<div class="or6"><a href="/web/html/order.html?courseId={{$value.course_id}}" target="_blank">重新购买</a></div>' +
		'{{/if}}' +
		'{{if $value.order_status=="0"}}' +
		'<div class="or6"><a href="/web/{{$value.order_no}}/findOrderByOrderNo" target="_blank">去支付</a></div>' +
		'{{/if}}' +
		'{{if $value.order_status=="1"}}' +
		'<div class="or6">-- --</div>' +
		'{{/if}}' +
		'<div class="or7">课程有效期至{{#expiry($value.create_time)}}</div>' +
		'</div>' +
		'</div>' +
		'{{/each}}';
	var emptyDefaul =
		"<div class='page-no-result'>" +
		"<img src='../images/personcenter/my_nodata.png'>" +
		"<div class='no-title'>暂无数据</div>" +
		"</div>";
	//班级信息
	var banjiMess =
		'<span class="banjiName">{{item.squad_name}}</span>' +
		'<span class="renshu">人数：</span>' +
		'<span class="renshu1">{{item.stuCount}}人</span>';
	//教师信息	
	var teacherMess =
		'{{each item as $value i}}' +
		'<div class="teach_01">' +
		'<div class="teach_img">' +
		'	<img src="{{#image($value.personal_img)}}" />' +
		'</div>' +
		'<span class="dian">' +
		'	<span class="green"></span>' +
		'</span>' +
		'<div class="teach_mess">' +
		'<p class="name">{{$value.name}}</p>' +
		'<p class="xueke" title="{{$value.courseList[0].name}}">课程：{{$value.courseList[0].name}}</p>' +
		'</div>' +
		'{{if $value.courseList.length>1}}' +
		'<div class="more clearfix">' +
		'<span class="mm">课程：</span>' +
		'<div>' +
		'{{each $value.courseList as $m m}}' +
		'<span title="{{$m.name}}">{{$m.name}}</span>' +
		'{{/each}}' +
		'</div>' +
		'<span class="sanjiao"></span>' +
		'</div>' +

		'{{/if}}' +
		'</div>' +
		'{{/each}}';
	//学生信息
	var studentMess =
		'{{each item as $value i}}' +
		'<div class="child_01">' +
		'<div class="stud_img">' +
		'<img src="{{#image($value.img_url)}}" />' +
		'</div>' +
		'<span class="dian">' +
		'	<span class="blue"></span>' +
		'</span>' +
		'<div class="stud_mess">' +
		'<p class="name">{{$value.name}}</p>' +
		'<p class="xueke">{{$value.studentNo}}</p>' +
		'</div>' +
		'<div class="more">' +
		'<p>姓名：{{$value.name}}</p>' +
		'<p>学号：{{$value.studentNo}}</p>' +
		'<p>手机号：{{$value.mobile}}</p>' +
		'<p>QQ号：{{$value.qq}}</p>' +
		'<p>邮箱：{{$value.email}}</p>' +
		'<p>小组：{{$value.group}}组</p>' +
		'<span class="sanjiao"></span>' +
		'</div>' +
		'</div>' +
		'{{/each}}';
	//当前考试内容
	var exam1 =
		'{{each item as $value i}}' +
		'<li class="clearfix">' +
		'<span class="name" title="{{$value.paperTplName}}">{{$value.paperTplName}}</span>' +
		'<span class="course" title="{{$value.courseName}}">{{$value.courseName}}</span>' +
		'<span class="starttime">{{$value.startTime}}</span>' +
		'<span class="endtime">{{$value.endTime}}</span>' +
		'<span class="timelength">{{$value.duration}}</span>' +
		'{{if $value.status==0}}' +
		'<span class="tool" data-examId="{{$value.examId}}" data-studentId="{{$value.studentId}}"><em>开始考试</em></span>' +
		'{{/if}}' +
		'{{if $value.status==1}}' +
		'<span class="tool" data-examId="{{$value.examId}}" data-studentId="{{$value.studentId}}"><em>继续考试</em></span>' +
		'{{/if}}' +
		'</li>' +
		'{{/each}}';
	//历史考试内容
	var exam2 =
		'{{each item as $value i}}' +
		'<li class="clearfix">' +
		'<span class="name" title="{{$value.paperTplName}}">{{$value.paperTplName}}</span>' +
		'<span class="course" title="{{$value.courseName}}">{{$value.courseName}}</span>' +
		'<span class="starttime">{{$value.startTime}}</span>' +
		'<span class="endtime">{{$value.endTime}}</span>' +
		'{{if $value.status==2||$value.status==3}}' +
		'<span class="state">已交卷</span>' +
		'{{/if}}' +
		'{{if $value.status==4}}' +
		'<span class="state">已批阅</span>' +
		'{{/if}}' +
		'{{if $value.status==5}}' +
		'<span class="state">未交卷</span>' +
		'{{/if}}' +
		'{{if $value.status!=4}}' +
		'<span class="score">--</span>' +
		'{{else}}' +
		'<span class="score">{{$value.score}}</span>' +
		'{{/if}}' +
		'<span class="tool" data-state="{{$value.status}}" data-studentId="{{$value.studentId}}" data-examId="{{$value.examId}}"><em>查看试卷</em></span>' +
		'</li>' +
		'{{/each}}';
	//当前作业内容
	var work1 =
		'{{each item as $value i}}' +
		'<li>' +
		'<span class="name" title="{{$value.homework_name}}">{{$value.homework_name}}</span>' +
		'<span class="course" title="{{$value.name}}">{{$value.name}}</span>' +
		'<span class="starttime">{{$value.publish_time}}</span>' +
		'<span class="endtime">{{$value.end_time}}</span>' +
		'<span class="timelength">{{$value.isAnswer}}/{{$value.total_questions}}</span>' +
		'{{if $value.status==0}}' +
		'<span class="tool" data-homeId="{{$value.homework_id}}" data-studentId="{{$value.student_id}}"><em>开始作业</em></span>' +
		'{{/if}}' +
		'{{if $value.status==1}}' +
		'<span class="tool" data-homeId="{{$value.homework_id}}" data-studentId="{{$value.student_id}}"><em>继续作业</em></span>' +
		'{{/if}}' +
		'</li>' +
		'{{/each}}';
	//历史作业内容
	var work2 =
		'{{each item as $value i}}' +
		'<li>' +
		'<span class="name" title="{{$value.homework_name}}">{{$value.homework_name}}</span>' +
		'<span class="course" title="{{$value.name}}">{{$value.name}}</span>' +
		'<span class="starttime">{{$value.publish_time}}</span>' +
		'<span class="endtime">{{$value.end_time}}</span>' +
		'{{if $value.status==2}}' +
		'<span class="state">已交卷</span>' +
		'{{/if}}' +
		'{{if $value.status==3}}' +
		'<span class="state">未交卷</span>' +
		'{{/if}}' +
		'{{if $value.correct_percent==""||$value.correct_percent==null}}' +
		'<span class="score">--</span>' +
		'{{else}}' +
		'<span class="score">{{$value.correct_percent}}%</span>' +
		'{{/if}}' +
		'<span class="tool" data-homeId="{{$value.homework_id}}" data-studentId="{{$value.student_id}}"><em>查看作业</em></span>' +
		'</li>' +
		'{{/each}}';
	//	下级用户
	var tongji =
		'<p>我的团队：<span>{{item.oneCount+item.twoCount+item.threeCount}}</span> 人</p>' +
		'<p>一级合伙人：<span>{{item.oneCount}}</span> 人</p>' +
		'<p>二级合伙人：<span>{{item.twoCount}}</span> 人</p>' +
		'<p>三级合伙人：<span>{{item.threeCount}}</span> 人</p>';
	//三级补贴
	var tongji2 =
		'<p>我的学费补贴：<span>{{item.allFee}}</span> 元</p>' +
		'	<p>一级补贴：<span>{{item.levelFee1}}</span> 元</p>' +
		'	<p>二级补贴：<span>{{item.levelFee2}}</span> 元</p>' +
		'	<p>三级补贴：<span>{{item.levelFee3}}</span> 元</p>';
	var list1 =
		'{{each item as $value i}}' +
		'<li class="clearfix">' +
		'<span title="{{$value.name}}" class="l1">' +
		'{{$value.name}}' +
		'</span>' +
		'<span class="l2" title="{{$value.login_name}}">' +
		'{{$value.login_name}}' +
		'</span>' +
		'<span class="l3" title="{{$value.create_time}}">' +
		'{{$value.create_time}}' +
		'</span>' +
		'<span class="l4" title="{{$value.buyCouseCount}}">' +
		'{{$value.buyCouseCount}}' +
		'</span>' +
		'</li>' +
		'{{/each}}';
	var list2 =
		'{{each item as $value i}}' +
		'<li class="clearfix">' +
		'	<span class="list1" title="{{$value.share_order_no}}">' +
		'{{$value.share_order_no}}' +
		'</span>' +
		'	<span class="list2" title="{{$value.course_name}}">' +
		'{{$value.course_name}}' +
		'	</span>' +
		'	<span class="list3" title="{{$value.login_name}}">' +
		'{{$value.login_name}}' +
		'</span>' +
		'<span class="list4" title="{{$value.actual_pay}}">' +
		'{{$value.actual_pay}}' +
		'</span>' +
		'<span class="list5" title="{{$value.pay_time}}">' +
		'{{$value.pay_time}}' +
		'</span>' +
		'<span class="list6" title="{{$value.subsidies}}（{{#fenji($value.level)}}）">' +
		'<i>{{$value.subsidies}}</i>（{{#fenji($value.level)}}）' +
		'</span>' +
		'</li>' +
		'{{/each}}';
	//帐号信息
	RequestService("/online/user/isAlive", "GET", null, function(data) { ///online/user/isAlive
		if(data.success === true) {
			function iFrameHeight() {

				var ifm = document.getElementById("fra");

				var subWeb = document.frames ? document.frames["iframepage"].document :

					ifm.contentDocument;

				if(ifm != null && subWeb != null) {

					ifm.height = subWeb.body.scrollHeight;

				}
			}
			var atime;
			$(".account .mess .name").html(data.resultObject.name);
			if(data.resultObject.info) {
				$(".account .mess .msg").html(data.resultObject.info);
				$(".account .mess .msg").attr("title", data.resultObject.info);
			} else {
				$(".account .mess .msg").html("说点什么来彰显你的个性吧……");
				$(".account .mess .msg").attr("title", "说点什么来彰显你的个性吧……");
			};
			loginName = data.resultObject.loginName;
			if(data.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
				path = data.resultObject.smallHeadPhoto;
				$(".account .headimg img").attr("src", path);
			} else {
				path = bath + data.resultObject.smallHeadPhoto
				$(".account .headimg img").attr("src", path);
			};
			//判断账户是否在院校存在存在返回true，打开院校班级入口
			RequestService("/api/callThirdPost", "post", {
				thirdUrl: base + "/bxg_anon/user/checkUser",
				loginName: loginName
			}, function(data) {
				if(data.resultObject == true) {
					$(".content .con-main .main-left .college").show();
					
				}
			}, false);
			//判断是否显示用户的
			if(data.resultObject.shareCode == null || data.resultObject.shareCode == "") {
				$(".myshare .share_link .cont .cont1").show().siblings().hide();
				$(".myshare .share_link .cont .cont1 .t2").off().on("click", function() {
					window.open("/web/share/share.html");
				});
			} else {
				$(".myshare .share_link .cont .cont2").show().siblings().hide();
				var acode = data.resultObject.shareCode;
				var aurl = "/web/html/login.html--ways=register";
				var url="http://" + window.location.hostname + "/share?usercode=" + acode + "__" + aurl;
				RequestService("/short/url","post",{
					url:url
				},function(data){
					if(data.success==true){
						$(".myshare .share_link .cont .cont2 .link span").html(data.resultObject);
					}else{
						alert(data.errorMessage);
					};
				});
			};
			//此处同步判断结束
			if($.getUrlParam("free") == 1) {
				//免费
				$(".content .main-right .right-title span").eq(1).addClass("act").siblings().removeClass("act");
				course(1, 1, 12);
			} else if($.getUrlParam("free") == 0) {
				$(".content .main-right .right-title span").eq(0).addClass("act").siblings().removeClass("act");
				course(0, 1, 12);
			} else if($.getUrlParam("state") == 2) {
				$(".content .con-main .main-left .college").addClass("active").siblings().removeClass("active");
				$(".content .con-main .main-right .mycourse").hide();
				$(".content .con-main .main-right .mycollege").show();
				atime=window.setInterval(iFrameHeight,300);
			} else if($.getUrlParam("share") == 0) {
				$(".content .con-main .main-left .share").addClass("active").siblings().removeClass("active");
				$(".content .con-main .main-right .mycourse").hide();
				$(".content .con-main .main-right .myshare").show();
				share(0, "");
			} else {
				//付费
				$(".content .main-right .right-title span").eq(0).addClass("act").siblings().removeClass("act");
				course(0, 1, 12);
			};
			//左侧导航
			$(".content .main-left li").on("click", function() {
				var $this=$(this);
				$.ajax({
					type: "get",
					url: bath + "/online/user/isAlive",
					async: false,
					success: function(data) {
						if(data.success === true) {	
							$(".pages").css("display", "none");
							$this.addClass("active").siblings().removeClass("active");
							$(".content .main-right .mybuy .right-title div").eq(0).addClass("act").siblings().removeClass("act");
							$(".content .main-right .mycourse .right-title span").eq(0).addClass("act").siblings().removeClass("act");
							if($this.hasClass("buy")) {
								clearInterval(atime);
								$(".all-change a").each(function() {
									$this.css("display", "block");
								});
								$(".all-change a").eq(0).css("display", "none");
								$(".allorder span").html("全部订单").attr({
									"data-timeQuantum": "0",
									"title": "全部订单"
								});
								$(".mycourse").hide();
								$(".myanswerBox").hide();
								$(".mybuy").show();
								$(".mycollege").hide();
								$(".myshare").hide();
								order(-1, 0, 1, 5);
							}else if($this.hasClass("answer")){
								$(".mycourse").hide();
								$(".myanswerBox").show();
								$(".mybuy").hide();
								$(".mycollege").hide();
								$(".myshare").hide();
								createPage();
							}else if($this.hasClass("course")) {
								clearInterval(atime);
								$(".mycourse").show();
								$(".myanswerBox").hide();
								$(".mybuy").hide();
								$(".mycollege").hide();
								$(".myshare").hide();
								course(0, 1, 12);
							} else if($this.hasClass("college")) {
								$("#fra").attr("src","/web/web_yx/html/StudentCenter.html");
								atime=window.setInterval(iFrameHeight,300);
								$(".mycourse").hide();
								$(".myanswerBox").hide();
								$(".mybuy").hide();
								$(".myshare").hide();
								$(".mycollege").show();
								$(".mycollege .right-title span").eq(0).addClass("act").siblings().removeClass("act");
								$(".mycollege .college1").show().siblings().hide();
								iFrameHeight()
			
							} else if($this.hasClass("share")) {
								clearInterval(atime);
								$(".mycourse").hide();
								$(".myanswerBox").hide();
								$(".mybuy").hide();
								$(".mycollege").hide();
								$(".myshare").show();
								$(".myshare .right-title span").eq(0).addClass("act").siblings().removeClass("act");
								$(".myshare .share0").show().siblings().hide();
								share(0, "");
							};
						} else {
							$('#login').modal('show');$('#login').css("display", "block");
							$(".loginGroup .logout").css("display", "block");
							$(".loginGroup .login").css("display", "none");
							return false;
						}
					}
				});
				
			});
			//课程切换
			function course(courseStatus, pageNumber, pageSize) {
				isAlive();
				$(".main-right .mycourse .right-course .loadrr").show().siblings().hide();
				RequestService("/userCourse/courses/" + courseStatus + "/" + pageNumber + "/" + pageSize, "get", null, function(data) {
					if(data.success == true) {
						if(data.resultObject.items == "") {
							if(data.resultObject.totalCount == 0) { //无数据
								$(".main-right .mycourse .right-course .course" + courseStatus).html(emptyDefaul);
								$(".main-right .mycourse .right-course .course" + courseStatus).show().siblings().hide();
								$(".pages").css("display", "none");
							}
						} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount > 0) {
							$(".pages").css("display", "none");
							$(".main-right .mycourse .right-course .course" + courseStatus).show().siblings().hide();
							if(courseStatus == 0) {
								$(".main-right .mycourse .right-course .course0").html(template.compile(mycourse)({
									items: data.resultObject.items
								}));
							} else if(courseStatus == 1) {
								$(".main-right .mycourse .right-course .course1").html(template.compile(mycourse)({
									items: data.resultObject.items
								}));
							}
						} else if(data.resultObject.totalPageCount > 1) {
							$(".pages").css("display", "block");
							$(".searchPage .allPage").text(data.resultObject.totalPageCount);
							$(".main-right .mycourse .right-course .course" + courseStatus).show().siblings().hide();
							if(data.resultObject.currentPage == 1) {
								$("#Pagination").pagination(data.resultObject.totalPageCount, {
									callback: function(page) { //翻页功能
										var param = {
											pageNumber: page + 1,
											pageSize: pageSize
										};
										course(courseStatus, param.pageNumber, pageSize);
									}
								});
							}
							if(courseStatus == 0) {
								$(".main-right .mycourse .right-course .course0").html(template.compile(mycourse)({
									items: data.resultObject.items
								}));
							} else if(courseStatus == 1) {
								$(".main-right .mycourse .right-course .course1").html(template.compile(mycourse)({
									items: data.resultObject.items
								}));
							}
						}
						//课程切换
						$(".content .main-right .mycourse .right-title span").off().on("click", function() {
							$(this).addClass("act").siblings().removeClass("act");
							if($(this).attr("kg") == "true") {
								course($(this).attr("data-id"), 1, pageSize);
								$(this).attr("kg", "false");
							} else {
								if($(this).attr("data-id") == 0) {
									$(".main-right .mycourse .right-course .course0").show();
									$(".main-right .mycourse .right-course .course1").hide();
								} else if($(this).attr("data-id") == 1) {
									$(".main-right .mycourse .right-course .course1").show();
									$(".main-right .mycourse .right-course .course0").hide();
								};

							};
						});
						//点击课程
						$(".right-course .course").off().on("click",function(){
							var $this=$(this);
							$.ajax({
								type: "get",
								url: bath + "/online/user/isAlive",
								async: false,
								success: function(data) {
									if(data.success === true) {	
										window.open($this.attr("data-url"),"_blank");
									} else {
										$('#login').modal('show');$('#login').css("display", "block");
										$(".loginGroup .logout").css("display", "block");
										$(".loginGroup .login").css("display", "none");
										return false;
									}
								}
							});
						});
					} else {

						$(".main-right .mycourse .right-course").html(emptyDefaul);
						$(".pages").css("display", "none");
					}
				})
			};
			//订单切换
			function order(state, time, pageNumber, pageSize) {
				RequestService("/web/getMyAllOrder", "get", {
					orderStatus: state ? state : -1,
					timeQuantum: time ? time : 0,
					pageNumber: pageNumber ? pageNumber : 1,
					pageSize: pageSize ? pageSize : 5

				}, function(data) {
					if(data.success == true) {
						if(data.resultObject.items == "") {
							if(data.resultObject.totalCount == 0) { //无数据
								$(".mybuy .right-course .ordertable").html(emptyDefaul);
								$(".pages").css("display", "none");
							}
						} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount > 0) {
							$(".pages").css("display", "none");
							$(".mybuy .right-course .ordertable").html(template.compile(myorder)({
								items: data.resultObject.items
							}))
						} else if(data.resultObject.totalPageCount > 1) {
							$(".pages").css("display", "block");
							$(".searchPage .allPage").text(data.resultObject.totalPageCount);
							if(data.resultObject.currentPage == 1) {
								$("#Pagination").pagination(data.resultObject.totalPageCount, {
									callback: function(page) { //翻页功能
										var param = {
											pageNumber: page + 1,
											pageSize: pageSize
										};
										order(state, time, param.pageNumber, pageSize);
									}
								});
							}
							$(".mybuy .right-course .ordertable").html(template.compile(myorder)({
								items: data.resultObject.items
							}));
						}
						//订单状态切换
						$(".content .main-right .mybuy .right-title div").off().on("click", function() {
							if($(this).hasClass("allorder")) {
								$(this).addClass("act").siblings().removeClass("act");
							} else {
								$(this).addClass("act").siblings().removeClass("act");
								order($(this).attr("data-orderStatus"), $(".allorder span").attr("data-timeQuantum"), 1, 5)
							}
						});
						$(".content .main-right .mybuy .right-title .allorder span").off().on("click", function() {
							order(-1, $(".allorder span").attr("data-timeQuantum"), 1, 5)
						});
						$(".all-change a").off().on("click", function() {
							var $all = $('<a data-timeQuantum="0">全部订单</a>');
							$(".all-change a").each(function() {
								$(this).css("display", "block");
							});
							$(this).css("display", "none");
							$(".allorder span").html($(this).text())
								.attr({
									"data-timeQuantum": $(this).attr("data-timeQuantum"),
									"title": $(this).attr("title")
								});
							order(-1, $(".allorder span").attr("data-timeQuantum"), 1, 5)
						});
					} else {
						$(".mybuy .right-course .ordertable").html(emptyDefaul);
						$(".pages").css("display", "none");
					}
				})
			};
			//院校班级
			var tj = {
				courseId: "",
				examName: "",
				status: "",
				startTime: "",
				endTime: "",
				pageNumber: 1,
				pageSize: 10
			};
			var wktj = {
				courseId: "",
				homeworkName: "",
				status: "",
				startTime: "",
				endTime: "",
				pageNumber: 1,
				pageSize: 10
			};
			//提示框
			function rTips(num) {
				$(".rTips").html(num).css("display", "block");
				setTimeout(function() {
					$(".rTips").css("display", "none");
				}, 1000)
			};

			function college(group) {
				$(".mycollege .right-title span").off("click").on("click", function() {
					$(this).addClass("act").siblings().removeClass("act");
					$(".allcollege").find(".college" + $(this).attr("college")).show().siblings().hide();
					if($(this).attr("college") == "2") {
						$(".allcollege .college2").find(".table").show().siblings(".history").hide();
						work(1, wktj);
					} else if($(this).attr("college") == "3") {
						$(".allcollege .college3").find(".table").show().siblings(".history").hide();
						exam(1, tj);
					}
				});
				//教师信息获取
				RequestService("/api/callThirdPost", "post", {
					thirdUrl: base + "/bxg_anon/student/findMyTeacherToCourse",
					loginName: loginName
				}, function(data) {
					$(".college1 .banji").html(template.compile(banjiMess)({
						item: data.resultObject.squadData
					}));
					$(".college1 .teach").html(template.compile(teacherMess)({
						item: data.resultObject.teacherData
					}));
				});
				//学生信息
				student(group);
				//班级同学的学生信息
				function student(group) {
					RequestService("/api/callThirdPost", "post", {
						thirdUrl: base + "/bxg_anon/student/findMyStudents",
						loginName: loginName,
						group: group ? group : ""
					}, function(data) {
						$(".college1 .stud-child").html(template.compile(studentMess)({
							item: data.resultObject
						}));
						$(".college1 .student .tab li").off().on("click", function() {
							$(this).addClass("active").siblings().removeClass("active");
							student($(this).attr("group"));
						});
					});
				};
				allcourse();
			};

			//我的考试
			function exam(type, tj) {
				$(".pages").css("display", "none");
				//1代表当前考试，2代表历史考试
				if(type == 1) {
					$(".college3 .tab3 span").eq(0).addClass("act").siblings().removeClass("act");
					$(".college3 .table").show().siblings(".history").hide();
					RequestService("/api/callThirdPost", "post", {
						thirdUrl: base + "/bxg_anon/my/exam/currentExam",
						loginName: loginName,
					}, function(data) {
						if(data.resultObject == "" || data.resultObject == null) {
							$(".college3 .table ul").html(template.compile(emptyDefaul));
						} else {
							$(".college3 .table ul").html(template.compile(exam1)({
								item: data.resultObject
							}));
						};
						$(".college3 .table ul .tool ").off().on("click", function() {
							var $this = $(this);
							RequestService("/api/callThirdPost", "post", {
								thirdUrl: base + "/bxg_anon/my/exam/checkExam",
								examId: $this.attr("data-examid"),
								studentId: $this.attr("data-studentid")
							}, function(data) {
								if(data.success == true) {
									window.open("examJuan.html?examId=" + $this.attr("data-examid") + "&studentid=" + $this.attr("data-studentid"), "_blank");
								} else {
									rTips(data.errorMessage);
								};
							}, false);
						});
					});
				} else if(type == 2) {
					$(".college3 .tab3 span").eq(1).addClass("act").siblings().removeClass("act");
					$(".college3 .history").show().siblings(".table").hide();
					//加载历史考试试卷
					RequestService("/api/callThirdPost", "post", {
						thirdUrl: base + "/bxg_anon/my/exam/hisExam",
						loginName: loginName,
						courseId: tj.courseId ? tj.courseId : "",
						examName: tj.examName ? tj.examName : "",
						status: tj.status ? tj.status : "",
						startTime: tj.startTime ? tj.startTime : "",
						endTime: tj.endTime ? tj.endTime : "",
						pageNumber: tj.pageNumber,
						pageSize: 10
					}, function(data) {
						if(data.resultObject.items == "" || data.resultObject.items == null) {
							$(".college3 .history ul").html(template.compile(emptyDefaul));
						} else {
							if(data.resultObject.items == "") {
								if(data.resultObject.totalCount == 0) { //无数据
									$(".college3 .history ul").html(template.compile(emptyDefaul));
									$(".pages").css("display", "none");
								}
							} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount > 0) {
								$(".pages").css("display", "none");
								$(".college3 .history ul").html(template.compile(exam2)({
									item: data.resultObject.items
								}));
							} else if(data.resultObject.totalPageCount > 1) {
								$(".pages").css("display", "block");
								$(".searchPage .allPage").text(data.resultObject.totalPageCount);
								if(data.resultObject.currentPage == 1) {
									$("#Pagination").pagination(data.resultObject.totalPageCount, {
										callback: function(page) { //翻页功能
											console.log(page)
											var atj = {
												courseId: tj.courseId ? tj.courseId : "",
												examName: tj.examName ? tj.examName : "",
												status: tj.status ? tj.status : "",
												startTime: tj.startTime ? tj.startTime : "",
												endTime: tj.endTime ? tj.endTime : "",
												pageNumber: parseInt(page + 1),
												pageSize: tj.pageSize ? tj.pageSize : 10
											};
											exam(2, atj)
										}
									});
								}
								$(".college3 .history ul").html(template.compile(exam2)({
									item: data.resultObject.items
								}));
							};
							$(".college3 .history ul .tool").off().on("click", function() {
								if($(this).attr("data-state") != 4) {
									window.open("weiPiyue.html?examId=" + $(this).attr("data-examid") + "&studentid=" + $(this).attr("data-studentid") + "&status=" + $(this).attr("data-state"), "_blank");
								} else {
									window.open("myExamAnswer.html?examId=" + $(this).attr("data-examid") + "&studentid=" + $(this).attr("data-studentid") + "&status=" + $(this).attr("data-state"), "_blank");
								};
							});
						}
					});				
				};

				//考试根据交卷状态筛选
				$(".college3 .filter_02 .name_01 .xiala em").off().on("click", function() {
					$(this).parent().siblings().html($(this).html()).attr("data-state", $(this).attr("data-state"));
					var tj = {
						courseId: $(".college3 .history .filter_01 .name_01 i").attr("data-courseid"),
						examName: $(".college3 .history .filter_03 input").val(),
						status: $(this).attr("data-state"),
						startTime: $(".college3 .history .filter_04 .time").val(),
						endTime: $(".college3 .history .filter_04 .time1").val(),
						pageNumber: 1,
						pageSize: 10
					};
					exam(2, tj);
				});
				//考试作业的当前和历史点击切换
				$(".college3 .tab3 span").off().on("click", function() {
					$(this).addClass("act").siblings().removeClass("act");
					first();
					exam($(this).attr("exam"), "");
				});
				//根据输入筛选内容
				$(".college3 .filter_03 .iconfont").off("click").on("click", function() {
					var tj = {
						courseId: $(".college3 .history .filter_01 .name_01 i").attr("data-courseid"),
						examName: $(".college3 .history .filter_03 input").val(),
						status: $(".college3 .filter_02 .name_01 i").attr("data-state"),
						startTime: $(".college3 .history .filter_04 .time").val(),
						endTime: $(".college3 .history .filter_04 .time1").val(),
						pageNumber: 1,
						pageSize: 10
					};
					exam(2, tj);
				});
				$(".college3 .filter_03 input").off().on("keypress", function(e) {
					if(e.keyCode == 13) {
						return $(".college3 .filter_03 .iconfont").click();
					}
				});
				//根据时间
				$(".college3 .history .filter_04 input").off().on("blur", function() {
					setTimeout(function() {
						if($(".college3 .history .filter_04 .time1").val() && $(".college3 .history .filter_04 .time").val()) {
							var tj = {
								courseId: $(".college3 .history .filter_01 .name_01 i").attr("data-courseid"),
								examName: $(".college3 .history .filter_03 input").val(),
								status: $(".college3 .filter_02 .name_01 i").attr("data-state"),
								startTime: $(".college3 .history .filter_04 .time").val(),
								endTime: $(".college3 .history .filter_04 .time1").val(),
								pageNumber: 1,
								pageSize: 10
							};
							exam(2, tj);
						}
					}, 300)
				});
				//点击开始考试和继续考试
			};
			//我的作业
			function work(type, wktj) {
				$(".pages").css("display", "none");
				//1代表当前考试，2代表历史考试
				if(type == 1) {
					$(".college2 .tab2 span").eq(0).addClass("act").siblings().removeClass("act");
					$(".college2 .table").show().siblings(".history").hide();
					RequestService("/api/callThirdPost", "post", {
						thirdUrl: base + "/bxg_anon/my/homework/currentHomework",
						loginName: loginName,
					}, function(data) {
						if(data.resultObject == "" || data.resultObject == null) {
							$(".college2 .table ul").html(template.compile(emptyDefaul));
						} else {
							$(".college2 .table ul").html(template.compile(work1)({
								item: data.resultObject
							}));
						};
						$(".college2 .table ul .tool").off().on("click", function() {
							window.open("zuoye.html?homeworkId=" + $(this).attr("data-homeid") + "&studentid=" + $(this).attr("data-studentid"), "_blank");
						});
					});
				} else if(type == 2) {
					$(".college2 .tab2 span").eq(1).addClass("act").siblings().removeClass("act");
					$(".college2 .history").show().siblings(".table").hide();
					//加载历史作业试卷
					RequestService("/api/callThirdPost", "post", {
						thirdUrl: base + "/bxg_anon/my/homework/hisHomework",
						loginName: loginName,
						courseId: wktj.courseId ? wktj.courseId : "",
						homeworkName: wktj.homeworkName ? wktj.homeworkName : "",
						status: wktj.status ? wktj.status : "",
						startTime: wktj.startTime ? wktj.startTime : "",
						endTime: wktj.endTime ? wktj.endTime : "",
						pageNumber: wktj.pageNumber,
						pageSize: 10
					}, function(data) {
						if(data.resultObject.items == "" || data.resultObject.items == null) {
							$(".college2 .history ul").html(template.compile(emptyDefaul));
						} else {
							if(data.resultObject.items == "") {
								if(data.resultObject.totalCount == 0) { //无数据
									$(".college2 .history ul").html(template.compile(emptyDefaul));
									$(".pages").css("display", "none");
								}
							} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount > 0) {
								$(".pages").css("display", "none");
								$(".college2 .history ul").html(template.compile(work2)({
									item: data.resultObject.items
								}));
							} else if(data.resultObject.totalPageCount > 1) {
								$(".pages").css("display", "block");
								$(".searchPage .allPage").text(data.resultObject.totalPageCount);
								if(data.resultObject.currentPage == 1) {
									$("#Pagination").pagination(data.resultObject.totalPageCount, {
										callback: function(page) { //翻页功能
											var awktj = {
												courseId: wktj.courseId ? wktj.courseId : "",
												homeworkName: wktj.homeworkName ? wktj.homeworkName : "",
												status: wktj.status ? wktj.status : "",
												startTime: wktj.startTime ? wktj.startTime : "",
												endTime: wktj.endTime ? wktj.endTime : "",
												pageNumber: page + 1,
												pageSize: pageSize
											};
											work(2, awktj)
										}
									});
								}
								$(".college2 .history ul").html(template.compile(work2)({
									item: data.resultObject.items
								}));
							}
						}
						$(".college2 .history ul .tool").off().on("click", function() {
							window.open("assignment.html?homeworkId=" + $(this).attr("data-homeid") + "&studentid=" + $(this).attr("data-studentid"), "_blank");
						});
					});
				}
				//考试根据交卷状态筛选
				$(".college2 .filter_02 .name_01 .xiala em").off().on("click", function() {
					$(this).parent().siblings().html($(this).html()).attr("data-state", $(this).attr("data-state"));
					var wktj = {
						courseId: $(".college2 .history .filter_01 .name_01 i").attr("data-courseid"),
						homeworkName: $(".college2 .history .filter_03 input").val(),
						status: $(this).attr("data-state"),
						startTime: $(".college2 .history .filter_04 .time").val(),
						endTime: $(".college2 .history .filter_04 .time1").val(),
						pageNumber: 1,
						pageSize: 10
					};
					work(2, wktj);
				});
				//根据输入筛选内容
				$(".college2 .filter_03 .iconfont").off("click").on("click", function() {
					var wktj = {
						courseId: $(".college2 .history .filter_01 .name_01 i").attr("data-courseid"),
						homeworkName: $(".college2 .history .filter_03 input").val(),
						status: $(".college2 .filter_02 .name_01 i").attr("data-state"),
						startTime: $(".college2 .history .filter_04 .time").val(),
						endTime: $(".college2 .history .filter_04 .time1").val(),
						pageNumber: 1,
						pageSize: 10
					};
					work(2, wktj);
				});
				$(".college2 .filter_03 input").off().on("keypress", function(e) {
					if(e.keyCode == 13) {
						return $(".college2 .filter_03 .iconfont").click();
					}
				});
				//根据时间
				$(".college2 .history .filter_04 input").off().on("blur", function() {
					setTimeout(function() {
						if($(".college2 .history .filter_04 .time1").val() && $(".college2 .history .filter_04 .time").val()) {
							var wktj = {
								courseId: $(".college2 .history .filter_01 .name_01 i").attr("data-courseid"),
								homeworkName: $(".college2 .history .filter_03 input").val(),
								status: $(".college2 .filter_02 .name_01 i").attr("data-state"),
								startTime: $(".college2 .history .filter_04 .time").val(),
								endTime: $(".college2 .history .filter_04 .time1").val(),
								pageNumber: 1,
								pageSize: 10
							};
							work(2, wktj);
						}
					}, 300)
				});
				//考试作业的当前和历史点击切换
				$(".college2 .tab2 span").off().on("click", function() {
					$(this).addClass("act").siblings().removeClass("act");
					first();
					work($(this).attr("work"), wktj);
				});
			};
			//我的分享
			function share(type, sharetj) {
				isAlive0();
				//0为分享好友，1为分享佣金
				$(".pages").css("display", "none");
				RequestService("/share/order_subsidies", "get", null, function(m) {
					var allFee;
					if(data.resultObject.allFee == "" || m.resultObject.allFee == null || m.resultObject.allFee == 0) {
						allFee = "0.00"
					} else {
						allFee = m.resultObject.allFee;
					}
					$(".myshare .share_link .cont2 .yj span").html(allFee);
				},false);
				$(".myshare .right-share .filter_04 .rili").off().on("click",function(){					
					 return $(".myshare .right-share .filter_04 .time").click()
				});
				if(type == 0) {
					$(".content .main-right .myshare .share0").show().siblings().hide();
					//获取下级用户
					RequestService("/share/findUserCount", "get", null, function(m) {
						$(".myshare .share0 .tongji").html(template.compile(tongji)({
							item: m.resultObject
						}));
					},false);
					share0(sharetj);
					//获取列表
					function share0(sharetj) {
						RequestService("/share/findOneLevelUser", "get", {
							//						搜索条件（ 0： 按照昵称搜索， 1： 按用户名搜索）；
							searchCase: sharetj.searchCase ? sharetj.searchCase : "",
							searchContent: sharetj.searchContent ? sharetj.searchContent : "",
							startTime: sharetj.startTime ? sharetj.startTime : "",
							endTime: sharetj.endTime ? sharetj.endTime : "",
							pageNumber: sharetj.pageNumber ? sharetj.pageNumber : 1,
							pageSize: sharetj.pageSize ? sharetj.pageSize : 10
						}, function(m) {
							if(m.resultObject.items == "" || m.resultObject.items == null) {
								$(".myshare .share0 .listTb").html(template.compile(emptyDefaul));
							} else {
								if(m.resultObject.items == "") {
									if(m.resultObject.totalCount == 0) { //无数据
										$(".myshare .share0 .listTb").html(template.compile(emptyDefaul));
										$(".pages").css("display", "none");
									}
								} else if(m.resultObject.totalPageCount == 1 && m.resultObject.totalCount > 0) {
									$(".pages").css("display", "none");
									$(".myshare .share0 .listTb").html(template.compile(list1)({
										item: m.resultObject.items
									}));
								} else if(m.resultObject.totalPageCount > 1) {
									$(".pages").css("display", "block");
									$(".searchPage .allPage").text(m.resultObject.totalPageCount);
									if(m.resultObject.currentPage == 1) {
										$("#Pagination").pagination(m.resultObject.totalPageCount, {
											callback: function(page) { //翻页功能
												var atj = {
													searchCase: sharetj.searchCase ? sharetj.searchCase : "",
													searchContent: sharetj.searchContent ? sharetj.searchContent : "",
													startTime: sharetj.startTime ? sharetj.startTime : "",
													endTime: sharetj.endTime ? sharetj.endTime : "",
													pageNumber: parseInt(page + 1),
													pageSize: sharetj.pageSize ? sharetj.pageSize : 10
												};
												share0(atj);
											}
										});
									}
									$(".myshare .share0 .listTb").html(template.compile(list1)({
										item: m.resultObject.items
									}));
								};
							};
							$(".myshare .share0 .filter .filter_01 .xiala em").off().on("click", function() {
								$(".myshare .share0 .filter .name_01 i").html($(this).html()).attr("data-id", $(this).attr("data-id"));
							});
							//根据条件筛选
							$(".myshare .share0 .filter .sub").off("click").on("click", function() {
								isAlive0();
								var tj = {
									searchCase: $(".myshare .share0 .filter .name_01 i").attr("data-id"),
									searchContent: $(".myshare .share0 .filter .filter_03 input").val(),
									startTime: $(".myshare .share0 .filter .filter_04 .time").val(),
									endTime: $(".myshare .share0 .filter .filter_04 .time1").val(),
									pageNumber: sharetj.pageNumber ? sharetj.pageNumber : 1,
									pageSize: sharetj.pageSize ? sharetj.pageSize : 10
								};
								share0(tj);
							});
						},false);
					}
				} else if(type == 1) {
					$(".content .main-right .myshare .share1").show().siblings().hide();
					RequestService("/share/order_subsidies", "get", null, function(m) {
						$(".myshare .share1 .tongji").html(template.compile(tongji2)({
							item: m.resultObject
						}));
						var allFee;
						if(data.resultObject.allFee == "" || m.resultObject.allFee == null || m.resultObject.allFee == 0) {
							allFee = "0.00"
						} else {
							allFee = m.resultObject.allFee;
						};
						$(".myshare .share_link .cont2 .yj span").html(allFee);
					},false);
					share1(sharetj);
					//获取列表
					function share1(sharetj) {
						RequestService("/share/order_shareOrders", "get", {
							//						搜索条件（ 0： 按照昵称搜索， 1： 按用户名搜索）；
							searchCase: sharetj.searchCase ? sharetj.searchCase : "",
							searchContent: sharetj.searchContent ? sharetj.searchContent : "",
							startTime: sharetj.startTime ? sharetj.startTime : "",
							level: sharetj.level ? sharetj.level : "",
							endTime: sharetj.endTime ? sharetj.endTime : "",
							pageNumber: sharetj.pageNumber ? sharetj.pageNumber : 1,
							pageSize: sharetj.pageSize ? sharetj.pageSize : 10
						}, function(m) {
							if(m.resultObject.items == "" || m.resultObject.items == null) {
								$(".myshare .share1 .listTb").html(template.compile(emptyDefaul));
							} else {
								if(m.resultObject.items == "") {
									if(m.resultObject.totalCount == 0) { //无数据
										$(".myshare .share1 .listTb").html(template.compile(emptyDefaul));
										$(".pages").css("display", "none");
									}
								} else if(m.resultObject.totalPageCount == 1 && m.resultObject.totalCount > 0) {
									$(".pages").css("display", "none");
									$(".myshare .share1 .listTb").html(template.compile(list2)({
										item: m.resultObject.items
									}));
								} else if(m.resultObject.totalPageCount > 1) {
									$(".pages").css("display", "block");
									$(".searchPage .allPage").text(m.resultObject.totalPageCount);
									if(m.resultObject.currentPage == 1) {
										$("#Pagination").pagination(m.resultObject.totalPageCount, {
											callback: function(page) { //翻页功能
												var atj = {
													searchCase: sharetj.searchCase ? sharetj.searchCase : "",
													searchContent: sharetj.searchContent ? sharetj.searchContent : "",
													level: sharetj.level ? sharetj.level : "",
													startTime: sharetj.startTime ? sharetj.startTime : "",
													endTime: sharetj.endTime ? sharetj.endTime : "",
													pageNumber: parseInt(page + 1),
													pageSize: sharetj.pageSize ? sharetj.pageSize : 10
												};
												share1(atj);
											}
										});
									}
									$(".myshare .share1 .listTb").html(template.compile(list2)({
										item: m.resultObject.items
									}));
								};
							};
							$(".myshare .share1 .filter .filter_01 .xiala em").off().on("click", function() {
								$(".myshare .share1 .filter_01 .name_01 i").html($(this).html()).attr("data-id", $(this).attr("data-id"));
							});
							$(".myshare .share1 .filter .filter_02 .xiala em").off().on("click", function() {
								$(".myshare .share1 .filter_02 .name_01 i").html($(this).html()).attr("data-state", $(this).attr("data-state"));
							});
							//根据条件筛选
							$(".myshare .share1 .filter .sub").off("click").on("click", function() {
								var tj = {
									searchCase: $(".myshare .share1 .filter_01 .name_01 i").attr("data-id"),
									searchContent: $(".myshare .share1 .filter .filter_03 input").val(),
									level: $(".myshare .share1 .filter_02 .name_01 i").attr("data-state"),
									startTime: $(".myshare .share1 .filter .filter_04 .time").val(),
									endTime: $(".myshare .share1 .filter .filter_04 .time1").val(),
									pageNumber: 1,
									pageSize: 10
								};
								share1(tj);
							});
						},false);
					}
				};
				//课程切换
				$(".content .main-right .myshare .right-title span").off().on("click", function() {
					$(this).addClass("act").siblings().removeClass("act");
					share($(this).attr("data-id"), "");
				});
				// 定义一个新的复制对象
				var clip = new ZeroClipboard(document.getElementById("copy"), {
					moviePath: "../js/ZeroClipboard/ZeroClipboard.swf"
				});

				// 复制内容到剪贴板成功后的操作
				clip.on('complete', function(client, args) {
					rTips("复制成功");
				});
			};
			//加载所有课程名称
			function allcourse() {
				var xiala =
					'<em data-courseId="" >请选择</em>' +
					'{{each item as $value i}}' +
					'<em data-courseId="{{$value.id}}" title="{{$value.name}}">{{$value.name}}</em>' +
					'{{/each}}';
				RequestService("/api/callThirdPost", "post", {
					thirdUrl: base + "/bxg_anon/my/exam/courseList",
					loginName: loginName,
				}, function(data) {
					if(data.resultObject != null && data.resultObject != "") {
						$(".college3 .history .filter_01 .name_01 .xiala").html(template.compile(xiala)({
							item: data.resultObject
						}));
						$(".college2 .history .filter_01 .name_01 .xiala").html(template.compile(xiala)({
							item: data.resultObject
						}));
					}
					$(".college3 .history .filter_01 .name_01 .xiala em").off().on("click", function() {
						$(this).parent().siblings().html($(this).html()).attr("data-courseId", $(this).attr("data-courseId"));
						var tj = {
							courseId: $(".college3 .history .filter_01 .name_01 i").attr("data-courseid"),
							examName: $(".college3 .history .filter_03 input").val(),
							status: $(".college3 .history .filter_02 .name_01 i").attr("data-state"),
							startTime: $(".college3 .history .filter_04 .time").val(),
							endTime: $(".college3 .history .filter_04 .time1").val(),
							pageNumber: 1,
							pageSize: 10
						};
						exam(2, tj);
					});
					$(".college2 .history .filter_01 .name_01 .xiala em").off().on("click", function() {
						$(this).parent().siblings().html($(this).html()).attr("data-courseId", $(this).attr("data-courseId"));
						var wktj = {
							courseId: $(".college2 .history .filter_01 .name_01 i").attr("data-courseid"),
							homeworkName: $(".college2 .history .filter_03 input").val(),
							status: $(".college2 .history .filter_02 .name_01 i").attr("data-state"),
							startTime: $(".college2 .history .filter_04 .time").val(),
							endTime: $(".college2 .history .filter_04 .time1").val(),
							pageNumber: 1,
							pageSize: 10
						};
						work(2, wktj);
					});
				});
			};
			//我的考试筛选条件初始化
			function first() {
				$(".college2 .history .filter_01 .name_01 i").attr("data-courseid", "").html("请选择");
				$(".college2 .history .filter_03 input").val("");
				$(".college2 .history .filter_02 .name_01 i").attr("data-state", "").html("请选择");
				$(".college2 .history .filter_04 .time").val("");
				$(".college2 .history .filter_04 .time1").val("");
				$(".college3 .history .filter_01 .name_01 i").attr("data-courseid", "").html("请选择");
				$(".college3 .history .filter_03 input").val("");
				$(".college3 .history .filter_02 .name_01 i").attr("data-state", "").html("请选择");
				$(".college3 .history .filter_04 .time").val("");
				$(".college3 .history .filter_04 .time1").val("");
			};
		} else {
			$('#login').css("display", "none");
			$(".loginGroup .logout").css("display", "block");
			$(".loginGroup .login").css("display", "none");
			location.href = "/index.html"
		}
	}, false);

}