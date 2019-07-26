window.onload = function() {
	"use strict"
	var courseID;
	courseID = $.getUrlParam("courseId");
	if(courseID == undefined) {
		courseID = 197;
	};
	$(".studentCenterBox").addClass("select");
	
	$(".personBack .kecheng .warn a").click(function(){
		window.localStorage.personcenter="mydata";
		window.open("/web/html/personcenter.html","_blank");
	});
	template.helper('range', function(a, b) {
		var m = a / b;
		if(b != 0) {
			m = m * 580 + "px";
		} else {
			m = 0;
		}
		return '<div class="blue" style="width:' + m + '">';
	});
	template.helper('ppt', function(file) {
		for(var i = 0; i < file.length; i++) {
			if(file[i].type == 0) {
				var fi = file[i].file_url.replace("11310", "11311")
				return fi;
			}
		}
	});
	template.helper('jiaoan', function(file) {
		for(var i = 0; i < file.length; i++) {
			if(file[i].type == 1) {
				var fi = file[i].file_url.replace("11310", "11311")
				return fi;
			}
		}
	});
	template.helper('askTags', function(tags) {
		tags = tags.substring(0, tags.length);
		tags = tags.split(",");
		var str = "";
		for(var i = 0; i < tags.length; i++) {
			str += '<span>' + tags[i] + '</span>';
		}
		return str;
	});
	template.helper('noteImg',function(obj){
		if(obj!=null && obj!=""){
			return '<div class="img"><img  src="'+obj+'" /></div>';
		}else{
			return '<div class="aimg" style="background-image:none;"><img   src="/web/images/defaultHeadImg.jpg"/></div>';
		}
	})
	//课程信息
	var courseMess =
		'<div class="mess-left">' +
		'<p class="mess-title" data-courseid="{{items.id}}">{{items.courseName}}</p>' +
		'</div>' +
		'<div class="mess-right clearfix">' +
		'<div class="right1">' +
		'<p>学习人数：<span>{{items.learndCount}}</span></p>' +
		'</div>' +
		'<div class="right2">' +
		'<p>课程时长：<span>{{items.courseLength}}</span>小时</p>' +
		'</div>' +
		'<div class="right2">' +
		'<p>课时长度：<span>{{items.count}}</span>课时</p>' +
		'</div>' +
		'</div>';
	//课程进度条	
	var courserange =
		'<div class="l2">' +
		'{{#range(result.learndVideo,result.count)}}' +
		'<img src="../images/zhiboCourse/icon-range.png" class="range"/>' +
		'<img src="../images/zhiboCourse/kc_detail_sanjiao.png" class="sanjiao"/>' +
		'<div class="xuanfu">' +
		'<span>{{result.learndVideo}}</span>/<span>{{result.count}}</span>' +
		'</div>' +
		'</div>' +
		'<p class="tip">人不能太懒，后有追兵，快加油往前冲吧~~</p>' +
		'</div>' +
		'{{if result.learndVideo!=result.count}}' +
		'{{if result.unStudy==result.count}}' +
		'<a  class="l3 start" style="cursor:pointer">开始学习</a>' +
		'{{else}}' +
		'<a  class="l3" style="cursor:pointer">继续学习</a>' +
		'{{/if}}' +
		'{{/if}}' +
		'{{if result.learndVideo==result.count}}' +
		'<a  class="l3 stop" style="cursor:pointer">已学完</a>' +
		'{{/if}}';
	//视频目录导航
	var coursenav =
		'<ul class="allvideo">' +
		'{{each result as $value i}}' +
		'{{if i==0}}' +
		'<li class="active" data-id="{{$value.id}}" title="{{$value.name}}"><a href="javascript:;">第{{i+1}}章  {{$value.name}} </a><span><img src="../images/zhiboCourse/kc_title_right.png"/></span></li>' +
		'{{else}}' +
		'<li data-id="{{$value.id}}" title="{{$value.name}}"><a href="javascript:;" >第{{i+1}}章  {{$value.name}} </a><span><img src="../images/zhiboCourse/kc_title_right.png"/></span></li>' +
		'{{/if}}' +
		'{{/each}}' +
		'</ul>';
	//课程资料列表
	var infonav =
		'<div class="allinfo">' +
		'{{each result as $value i}}' +
		'{{if i==0}}' +
		'<p class="info1-name act" data-id="{{$value.id}}" title="{{$value.name}}"><span></span>{{$value.name}}</p>' +
		'<div class="info1 clearfix act">' +
		'{{each $value.chapterSons as $a a}}' +
		'{{if a==0}}' +
		'<p class="info2-name act" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="">' +
		'{{each $a.chapterSons as $b b}}' +
		'<div class="info2" title="{{$b.name}}" data-id="{{$b.id}}" data-ppt="{{#ppt($b.files)}}" data-jiaoan="{{#jiaoan($b.files)}}">' +
		'{{$b.name}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{else}}' +
		'<p class="info2-name unact" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="hide">' +
		'{{each $a.chapterSons as $b b}}' +
		'<div class="info2" title="{{$b.name}}" data-id="{{$b.id}}" data-ppt="{{#ppt($b.files)}}" data-jiaoan="{{#jiaoan($b.files)}}">' +
		'{{$b.name}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/if}}' +
		'{{/each}}' +
		'</div>' +
		'{{else}}' +
		'<p class="info1-name unact" data-id="{{$value.id}}" title="{{$value.name}}"><span></span>{{$value.name}}</p>' +
		'<div class="info1 hide unact">' +
		'{{each $value.chapterSons as $a a}}' +
		'<p class="info2-name" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="hide">' +
		'{{each $a.chapterSons as $b b}}' +
		'<div class="info2" title="{{$b.name}}" data-id="{{$b.id}}" data-ppt="{{#ppt($b.files)}}" data-jiaoan="{{#jiaoan($b.files)}}">' +
		'{{$b.name}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/if}}' +
		'{{/each}}' +
		'</div>';
	//课程列表表格信息
	var coursetable =
		'{{each items as value i}}' + //循环节
		'<div class="con1">' +
		'<p class="con-title" data-id="{{value.id}}">第{{i+1}}节  {{value.name}}</p>' +
		'<div class="kechengAll clearfix">' +
		'{{each value.chapterSons as $issue m}}' +
		'{{if $issue.type=="0"}}' + //判断类型知识点
		'{{if $issue.study_status==2}}' + //已学完判断
		'<a href="javascript:;" data-sectionid="{{value.id}}" data-zhishidianid="{{$issue.pointId}}" data-vid="{{$issue.id}}" data-videoid="{{$issue.ccvideoId}}" class="kecheng studyed" >' +
		'<span title="{{$issue.name}}"><i class="iconfont icon-shipin"></i><em class="index"></em>{{$issue.name}}</span>' +
		'{{if $issue.lock_status=="1"}}' +
		'<i class="iconfont icon-xiaowancheng tb pd" lock_status={{$issue.lock_status}}></i>' +
		'{{else}}' +
		'<i class="iconfont icon-weikaishi1 lock pd" lock_status={{$issue.lock_status}}></i>' +
		'{{/if}}' +
		'</a>' +
		'{{/if}}' +
		'{{if $issue.study_status!=2}}' +
		'{{if  $issue.study_status==0}}' + //未学习
		'<a href="javascript:;" data-sectionid="{{value.id}}" data-zhishidianid="{{$issue.pointId}}" data-vid="{{$issue.id}}" data-videoid="{{$issue.ccvideoId}}" class="kecheng">' +
		'<span title="{{$issue.name}}"><i class="iconfont icon-shipin"></i><em class="index"></em>{{$issue.name}}</span>' +

		'{{if $issue.lock_status=="1"}}' +
		'<i class="iconfont icon-jiesuo tb pd" lock_status={{$issue.lock_status}}></i>' +
		'{{else}}' +
		'<i class="iconfont icon-weikaishi1 lock pd" lock_status={{$issue.lock_status}}></i>' +
		'{{/if}}' +
		'</a>' +
		'{{else}}' + //正在学习
		'<a href="javascript:;" data-sectionid="{{value.id}}" data-zhishidianid="{{$issue.pointId}}"  data-vid="{{$issue.id}}" data-videoid="{{$issue.ccvideoId}}" class="kecheng studying">' +
		'<span title="{{$issue.name}}"><i class="iconfont icon-shipin"></i><em class="index"></em>{{$issue.name}}</span>' +

		'{{if $issue.lock_status=="1"}}' +
		'<i class="iconfont icon-xuexizhong tb pd" lock_status={{$issue.lock_status}}></i>' +
		'{{else}}' +
		'<i class="iconfont icon-weikaishi1 lock pd" lock_status={{$issue.lock_status}}></i>' +
		'{{/if}}' +
		'</a>' +
		'{{/if}}' +

		'{{/if}}' +
		'{{/if}}' +
		'{{if $issue.type=="1"}}' + //这里判断为关卡
		'<a href="javascript:;" barrier_status="{{$issue.barrier_status}}" data-examId="{{$issue.id}}"  class="guanqia" lock_status="{{$issue.lock_status}}">' +
		'<span title="{{$issue.name}}"><i class="iconfont icon-shijuan"></i>{{$issue.name}}</span>' +
		'{{if $issue.barrier_status=="1"}}' +
		'<i class="tongguo  tb"><img src="../images/tg1.png"/></i>' +
		'{{else}}' +
		'{{if $issue.lock_status=="1"}}' +
		'<i class="iconfont  icon-jiesuo tb" lock_status={{$issue.lock_status}}></i>' +
		'{{else}}' +
		'<i class="iconfont icon-weikaishi1 lock" lock_status={{$issue.lock_status}}></i>' +
		'{{/if}}' +
		'{{/if}}' +
		'</a>' +
		'{{/if}}' +
		'{{/each}}' +
		'</div>' +
		'{{if value.chapterSons.length>10}}' +
		'<div class="kai clearfix but"><a href="javascript:;">展开</a></div>' +
		'{{/if}}' +
		'</div>' +
		'{{/each}}';
	//笔记列表
	var notes =
		'<div class="allinfo">' +
		'{{each result as $value i}}' +
		'{{if i==0}}' +
		'<p class="info1-name act" data-id="{{$value.id}}" title="{{$value.name}}"><span></span>{{$value.name}}</p>' +
		'<div class="info1 clearfix act">' +
		'{{each $value.chapterSons as $a a}}' +
		'{{if a==0}}' +
		'<p class="info2-name act" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="">' +
		'{{each $a.chapterSons as $c c}}' +
		'<p class="info3-name act" data-id="{{$c.id}}" title="{{$c.name}}"><span></span>{{$c.name}}</p>' +
		'<div class="">' +
		'{{each $c.videos as $d d}}' +
		'<div class="info2" title="{{$d.videoName}}" data-id="{{$d.id}}">{{$d.videoName}}</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{else}}' +
		'<p class="info2-name unact" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="hide">' +
		'{{each $a.chapterSons as $c c}}' +
		'<p class="info3-name unact" data-id="{{$c.id}}" title="{{$c.name}}"><span></span>{{$c.name}}</p>' +
		'<div class="hide">' +
		'{{each $c.videos as $d d}}' +
		'<div class="info2" title="{{$d.videoName}}" data-id="{{$d.id}}">{{$d.videoName}}</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/if}}' +
		'{{/each}}' +
		'</div>' +
		'{{else}}' +
		'<p class="info1-name unact" data-id="{{$value.id}}" title="{{$value.name}}"><span></span>{{$value.name}}</p>' +
		'<div class="info1 hide unact">' +
		'{{each $value.chapterSons as $a a}}' +
		'<p class="info2-name" data-id="{{$a.id}}" title="{{$a.name}}"><span></span>{{$a.name}}</p>' +
		'<div class="hide">' +
		'{{each $a.chapterSons as $c c}}' +
		'<p class="info3-name" data-id="{{$c.id}}" title="{{$c.name}}"><span></span>{{$c.name}}</p>' +
		'<div class="hide">' +
		'{{each $c.videos as $d d}}' +
		'<div class="info2" title="{{$d.videoName}}" data-id="{{$d.id}}">{{$d.videoName}}</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'{{/if}}' +
		'{{/each}}' +
		'</div>';
	var noteContent = '{{each items}}' +
		'<div class="right-noteInfo clearfix">' +
		'<div class="right-noteImg">' +
		'{{#noteImg($value.small_head_photo)}}' +
		'<p class="note-username" title="{{$value.user_name}}">{{$value.user_name}}</p>' +
		'</div>' +
		'<div class="right-noteContent">' +
		'<p class="note-content dot5" data-noteId={{$value.id}}>{{$value.content}}</p>' +
		'<div class="right-note-others">' +
		'<span class="noteTime">{{$value.create_time}}</span>' +
		'{{if $value.praise==true}}' +
		'<span class="noteHitZan"><i class="iconfont icon-zan select"></i><span class="praise_Count select">{{$value.praise_sum}}</span></span>' +
		'{{else}}' +
		'<span class="noteHitZan"><i class="iconfont icon-zan"></i><span class="praise_Count">{{$value.praise_sum}}</span></span>' +
		'{{/if}}' +
		'<span class="rightPinglun"><i class="iconfont icon-pinglun"></i><span class="comment_Count">{{$value.comment_sum}}</span></span>' +
		'{{if $value.deleteButton==false}}' +
		'{{if $value.collect==true}}' +
		'<span class="rightShoucang"><i class="iconfont icon-shoucang select"></i><span class="shoucang select">已收藏</span></span>' +
		'{{else}}' +
		'<span class="rightShoucang"><i class="iconfont icon-shoucang"></i><span class="shoucang">收藏</span></span>' +
		'{{/if}}' +
		'{{/if}}' +
		'{{if $value.deleteButton==true}}' +
		'<span class="rightShanchu"><i class="iconfont icon-shanchu"></i>删除</span>' +
		'{{/if}}' +
		'</div>' +
		'<div class="pinglunBox"></div>' +
		'</div>' +
		'</div>' +
		'{{/each}}';
	var comments =
		'<img class="pinglunSanjiao" src="../images/ansandqus/sanjiao02.png">' +
		'<div class="comment-top">' +
		'{{each items as $val j}}' +
		'<div data-commentId="{{$val.id}}" class="commentId clearfix">' +
		'<div  class="replyComments wrapComment">' +
		'{{if $val.target_nike_name!=null}}' +
		'<span class="user-nickname">{{$val.create_nick_name}}</span><span class="a1">回复</span>' +
		'<span class="user-nickname">{{$val.target_nike_name}}</span><span class="a1">:</span>' +
		'<span class="user-content">{{$val.content}}</span>' +
		'{{else}}' +
		'<span class="user-nickname">{{$val.create_nick_name}}</span><span class="a1">:</span>' +
		'<span class="user-content">{{#$val.content}}</span>' +
		'{{/if}}' +
		'<p class="user-content-line">' +
		'<span class="comment-time">{{$val.create_time}}</span>' +
		'<span class="reply-btn" data-targetId="{{$val.user_id}}" data-create_nick_name="{{$val.create_nick_name}}">' +
		'<i class="iconfont icon-huifu"></i>' +
		'回复' +
		'</span>' +
		'{{if $val.deleteButton==true}}' +
		'<span class="reply-delete" data-deleteId="{{$val.id}}" data-create="{{$val.create_person}}">删除</span>' +
		'{{/if}}' +
		'</p>' +
		'<div class="reply clearfix">' +
		'<p class="replyTipNohidden">回复 {{$val.create_nick_name}}：</p>' +
		'<input class="writeReply" type="text"/>' +
		'<span class="reply-ok" data-praise_login_names="{{$val.praise_login_names}}"  data-targetId="{{$val.user_id}}" data-answer_id="{{$val.id}}" data-target_person="{{$val.create_person}}" data-target_nick_name="{{$val.create_nick_name}}">回复</span>' +
		'<span class="reply-cancle">取消</span>' +
		'<img class="sanjiaoInput" src="../images/ansandqus/sanjia01.png"/>' +
		'<div class="emptyHit1"><i class="iconfont icon-tanhao"></i>请输入内容</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'{{/each}}' +
		'</div>' +
		'<div class="comment-bottom clearfix">' +
		'<input class="writeComment" type="text" placeholder="写下你的评论..."/>' +
		'<div class="emptyHit"><i class="iconfont icon-tanhao"></i>请输入内容</div>' +
		'<div class="comment-btn">评论</div>' +
		'</div>';

	var askContent = '{{each items}}' +
		'<div class="right-askInfo clearfix">' +
		'<div class="right-askImg">' +
		'{{#noteImg($value.create_head_img)}}' +
		'<p class="ask-username" title="{{$value.create_nick_name}}">{{$value.create_nick_name}}</p>' +
		'</div>' +
		'<div class="right-askContent">' +
		'<a href="/web/qusDetail/{{$value.id}}" class="ask-title" target="_blank" title="{{$value.title}}">{{$value.title}}</a>' +
		'<p class="ask-content dot5">{{$value.content}}</p>' +
		'<div class="right-ask-others clearfix">' +
		'<div class="right-ask-tags">' +
		'{{#askTags($value.tags)}}' +
		'</div>' +
		'<div class="right-ask-otherInfo">' +
		'{{if $value.myself==true}}' +
		'<span class="askShanchu" data-askId={{$value.id}}><i class="iconfont icon-shanchu"></i>删除</span>' +
		'{{/if}}' +
		'<em>|</em>' +
		'<span>回答({{$value.answer_sum}})</span>' +
		'<em>|</em>' +
		'<span>{{dataSub($value.create_time)}}</span>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'{{/each}}';
	var emptyDefaul =
		"<div class='page-no-result'>" +
		"<img src='../images/personcenter/my_nodata.png'>" +
		"<div class='no-title'>暂无数据</div>" +
		"</div>";
	var emptyDefaul2 =
		"<div class='page-no-result' style='width:300px;'>" +
		"<img src='../images/study_nodata.png' style='margin-top:70px'>" +
		"<div class='no-title'>老师正在加班加点制定学习计划，敬请期待~</div>" +
		"</div>";
	//学习计划右侧目录
	template.helper("zhishidian",function(num){
		var str="";
		if(num!=""){
			for(var i=0;i<num.length;i++){
				str+=""+"、"+num[i].name;
			}
			str=str.substring(1);
		}else{
			str=""
		}
		return str;
	});
	template.helper("startEnd",function(num){
		var arr=num.split(" ");
		return arr[1];
	});
	template.helper("planB",function(num){
		var arr=num.replace("-","/");
		return new Date(arr).getTime();
	});
	var planMess =
	'{{each items as $value i}}'+
		'<li planB={{#planB($value.plan_date)}}><span class="td1">{{$value.plan_date}}</span><span class="td2">{{$value.week}}</span>' +
		'<div class="td3">'+
		'{{if $value.rest_has==0}}'+
		'<span class="clearfix" style="display:block">{{#zhishidian($value.point)}}</span>'+
		'{{else}}'+
		'<span class="clearfix" style="display:block">休息</span>'+
		'{{/if}}'+
		'{{if $value.chuanjiang_has==1}}'+
			'{{if $value.chuanjiang_mode==0}}'+
			'<a href="/web/livepage/'+courseID+'/{{$value.chuanjiang_room_id}}/{{$value.id}}" target="_blank"><i class="iconfont icon-zhibo"></i>'+
			'{{else}}'+
			'<a href="{{$value.chuanjiang_room_link}}" target="_blank"><i class="iconfont icon-zhibo"></i>'+
			'{{/if}}'+
			'<span>串讲：{{$value.chuanjiang_name}}</span>'+
			'<em>{{#startEnd($value.chuanjiang_start_time)}}-{{#startEnd($value.chuanjiang_end_time)}}</em>'+
			'</a>'+
		'{{/if}}'+
	'</div>'+
	'</li>'+
	'{{/each}}';
	//课程基本信息接口数据
	//帐号信息
	RequestService("/online/user/isAlive", "GET", null, function(data) { ///online/user/isAlive
		if(data.success === true) {
			RequestService("/course/findEnterCourseDetail", "get", {
				courseId: courseID
			}, function(data) {
				if(data.success == true) {
					$(".content .bread .cur").html(data.resultObject.courseName);
					$(".content .course-mess").html(template.compile(courseMess)({
						items: data.resultObject
					}));
					$(".content .course-range").append(template.compile(courserange)({
						result: data.resultObject
					}));
					document.title = data.resultObject.courseName + " - 博学谷云课堂";
					//0职业课，1微课
					if(data.resultObject.course_type==0){
						$(".course-nav .jihua").show();
						$(".course-main .main1").show().siblings().hide();
						plan();
					}else{
						$(".course-nav .jihua").hide();
						$(".course-nav .video").addClass("active");
						$(".course-main .main").show().siblings().hide();
						nav();
					};
					//免费课程没有学习计划
					if(data.resultObject.free==true){
						$(".course-nav .jihua").hide();
						$(".course-nav .video").addClass("active");
						$(".course-main .main").show().siblings().hide();
						nav();
					}else{
						//判断是否登录
						$.ajax({
							type: "get",
							url: bath + "/online/user/isAlive",
							async: false,
							success: function(data) {
								if(data.success === true) {	
									localStorage.userid = data.resultObject.id;
									if(data.resultObject.perfectInformation==false){
										$(".personBack").show();
										createData();
									}
								};
							}
						});
					};
					//继续学习
					$(".content .course-range .l3").off("click").on("click", function() {
						$.ajax({
							type: "get",
							url: bath + "/online/user/isAlive",
							async: false,
							success: function(data) {
								if(data.success === true) {	
								} else {
									$('#login').modal('show');$('#login').css("display", "block");
									$(".loginGroup .logout").css("display", "block");
									$(".loginGroup .login").css("display", "none");
									return false;
								}
							}
						});
//						if($(this).hasClass("start")) {
//							var sectionId = $(this).attr("data-sectionid");
//							var chapterId = $(this).attr("data-zhishidianid");
//							var videoId = $(this).attr("data-videoid");
//							var vId = $(this).attr("data-vid");
//							if(videoId != "" && videoId != undefined && vId != "" && vId != undefined) {
//								location.href = bath + "/web/html/video.html?courseId=" + courseID + "&sectionId=" + sectionId + "&chapterId=" + chapterId + "&vId=" + vId + "&videoId=" + videoId;
//							}
//							return true;
//						} else 
						if($(this).hasClass("stop")) {
							return false;
						} else {
							$.ajax({
								type: "get",
								url: bath + "/online/chapter/findLastPayVideo?courseId=" + courseID,
								async: false,
								success: function(m) {
									if(m.success == true) {
										var sectionId = m.resultObject.sectionId;
										var zhishidianId = m.resultObject.pointId;
										var ccvideoId = m.resultObject.ccvideoId;
										var vId = m.resultObject.id;
										location.href = bath + "/web/html/video.html?courseId=" + courseID + "&sectionId=" + sectionId + "&chapterId=" + zhishidianId + "&vId=" + vId + "&videoId=" + ccvideoId;
									}
								}
							});
						}
					});
				} else {
					$('#login').css("display", "none");
					$(".loginGroup .logout").css("display", "block");
					$(".loginGroup .login").css("display", "none");
				}

			}, false);
			//目录评价导航切换
			$(".course-nav li").on("click", function() {
				isAlive();
				$(this).addClass("active").siblings().removeClass("active");
				if($(this).hasClass("video")) {
					$(".course-main .main").show().siblings().hide();
					nav();
				} else if($(this).hasClass("info")) {
					$(".course-main .main").show().siblings().hide();
					info();
				} else if($(this).hasClass("notes")) {
					$(".course-main .main").show().siblings().hide();
					Notes();
				} else if($(this).hasClass("wenda")) {
					$(".course-main .main").show().siblings().hide();
					wenda();
				} else if($(this).hasClass("jihua")) {
					$(".course-main .main1").show().siblings().hide();
					plan();
				}
			});
			//学习计划
			function plan() {
				RequestService("/bxs/plan/getUserLearPlan", "get", {
					courseId: courseID
				}, function(data) {
					if(data.success == true) {
						if(data.resultObject!=""&&data.resultObject!=null){
							$(".calder").css("display","block");
							$(".main1 .myplan ul").html(template.compile(planMess)({
								items:data.resultObject
							}));
							calder(0, 0, data.resultObject);
						}else{
							$(".main1").html(emptyDefaul2);
						}
					}
				});
				//日历部分
				//计算每个月多少天
				function getCountDays(num) {
					var curDate = new Date(num);
					/* 获取当前月份 */
					var curMonth = curDate.getMonth();
					/*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
					curDate.setMonth(curMonth + 1);
					/* 将日期设置为0, 取上一个月的第一天*/
					curDate.setDate(0);
					/* 返回当月的天数 */
					return curDate.getDate();
				};

				function calder(year, num, rest) {
					var length = rest.length;
					//返回信息的起止时间
					var startDate = rest[0].plan_date.split("-");
					var endDate = rest[length - 1].plan_date.split("-");
					var start = new Date(rest[0].plan_date.replace("-", "/")).getTime();
					var end = new Date(rest[length - 1].plan_date.replace("-", "/")).getTime();
					//获取当天日期
					var data = new Date();
					//当天日期几号,设定变量记录后期调用
					var dD = data.getDate();
					var dD1 = dD;
					//当天日期周几
					var dW = data.getDay();
					//当天所属年份,设定变量记录后期调用
					var dY = data.getFullYear();
					var dY1 = dY;
					//当天所在月
					var dM = data.getMonth() + 1;
					var dM1 = dM;
					if(year == "" || year == undefined || year == 0) {
						dY = dY
					} else {
						dY = year
					};
					if(num == "" || num == undefined || num == 0) {
						dM = dM
					} else {
						dM = num
					};
					$(".calder .year").html(dY).attr("year", dY);
					$(".calder .month").html(dM).attr("month", dM);
					var data1 = new Date(dY + '/' + dM + "/" + 1);
					$(".calder ul").html("");
					//计算第一天是周几,前面置空
					for(var i = 0; i < data1.getDay(); i++) {
						var space = "<li class='kong'></li>";
						$(".calder ul").append(space)
					};
					//增加日历
					for(var i = 0; i < getCountDays(data1); i++) {
						var a = parseInt(i) + 1;
						var $space = $("<li class='noban' year='" + dY1 + "' date='" + a + "'>" + preFix(a) + "<span></span><i>休</i></li>");
						var day = new Date(dY + '/' + dM + "/" + a).getTime();
						var now = new Date(dY1 + '/' + dM1 + "/" + dD1).getTime();
						for(var m = 0; m < rest.length; m++) {
							if(rest[m].rest_has == 1 && rest[m].plan_date.split("-")[2] == a && day == new Date(rest[m].plan_date.replace("-", "/")).getTime()) { //判断是否是休息日								
								$space.addClass("xiu");
							} else {};
							if(a == dD1 && dY == dY1 && dM == dM1) {
								$space.addClass("today");
							} else {};
							if(now < start) {
								if(rest[0].plan_date.split("-")[2] == a && day == new Date(rest[0].plan_date.replace("-", "/")).getTime()) {
									$(".calder .calder-data").attr("pick",day);
									$space.addClass("pick");
								}
							} else if(now > end) {
								if(rest[rest.length - 1].plan_date.split("-")[2] == a && day == new Date(rest[rest.length - 1].plan_date.replace("-", "/")).getTime()) {
									$(".calder .calder-data").attr("pick",day);
									$space.addClass("pick");
								}
							} else {
								if(rest[m].plan_date.split("-")[2] == dD1 && dD1 == a && day == new Date(rest[m].plan_date.replace("-", "/")).getTime()) {
									$(".calder .calder-data").attr("pick",day);
									$space.addClass("pick");
								}
							}
						};
						if(day < start) {
							$space.removeClass("noban").addClass("ban");
						} else if(day > end) {
							$space.removeClass("noban").addClass("ban");
						} else {
							$space.attr("plan",day);
						}
						$(".calder ul").append($space);
					};
					//初始化右侧定位，定位到选中的位置
					$(".myplan ul li[planB="+$(".calder .calder-data").attr("pick")+"]").addClass("active").siblings().removeClass("active");
					$(".myplan ul").scrollTop($(".myplan ul li[planB="+$(".calder .calder-data").attr("pick")+"]").get(0).offsetTop);
					//绑定点击切换学习知识点
					$(".calder ul .noban").off().on("click", function() {
						if(!$(this).hasClass("ban")) {
							$(this).addClass("pick").siblings().removeClass("pick");
							$(".myplan ul li[planB="+$(this).attr("plan")+"]").addClass("active").siblings().removeClass("active");
							var oTop=$(".myplan ul li[planB="+$(this).attr("plan")+"]").get(0).offsetTop;
							$(".myplan ul").scrollTop(oTop);
							$("body").animate({"scrollTop":$(".course-nav").get(0).offsetTop},200);
						}
					});
					$(".calder .tool .calder-up").attr("year", parseInt(startDate[0]));
					$(".calder .tool .calder-up").attr("month", parseInt(startDate[1]));
					$(".calder .tool .calder-down").attr("year", parseInt(endDate[0]));
					$(".calder .tool .calder-down").attr("month", parseInt(endDate[1]));
					//此处判断学习计划是否跨月
					if(parseInt(startDate[0]) == parseInt(endDate[0]) && parseInt(startDate[1]) == parseInt(endDate[1])) {
						$(".calder .tool .calder-up,.calder-down").addClass("forbidden");
					} else {
						if(parseInt(startDate[0]) < $(".calder .year").attr("year")) {
							$(".calder .tool .calder-up").removeClass("forbidden");
						} else if(parseInt(startDate[1]) < $(".calder .month").attr("month")) {
							$(".calder .tool .calder-up").removeClass("forbidden");
						} else if(parseInt(startDate[1]) == $(".calder .month").attr("month")) {
							$(".calder .tool .calder-up").addClass("forbidden");
						};
						if(parseInt(endDate[0]) > $(".calder .year").attr("year")) {
							$(".calder .tool .calder-down").removeClass("forbidden");
						} else if(parseInt(endDate[1]) > $(".calder .month").attr("month")) {
							$(".calder .tool .calder-down").removeClass("forbidden");
						} else if(parseInt(endDate[1]) == $(".calder .month").attr("month")) {
							$(".calder .tool .calder-down").addClass("forbidden");
						};
					};
					//上个月和下个月
					$(".calder-up").off().click(function() {
						if(!$(this).hasClass("forbidden")) {
							var a = $(".calder .month").attr("month");
							var b = $(".calder .year").attr("year");
							a--;
							if(a < 1) {
								a = 12;
								b--;
							}
							calder(b, a, rest);
						}
					});
					$(".calder-down").off().click(function() {
						if(!$(this).hasClass("forbidden")) {
							var a = $(".calder .month").attr("month");
							var b = $(".calder .year").attr("year");
							a++;
							if(a > 12) {
								a = 1;
								b++;
							}
							calder(b, a, rest);
						}
					});
				};
			};
			//左侧视频列表导航信息
			function nav() {
				RequestService("/online/chapter/findChapterInfo", "get", {
					courseId: courseID
				}, function(data) {
					if(data.success == true) {
						$(".course-main .main-left").html(template.compile(coursenav)({
							result: data.resultObject
						}));
						$(".course-main .main-right .main-video").show().siblings().hide();
						$(".main-left .allvideo li").off().on("click", function() {
							isAlive();
							$(this).addClass("active").siblings().removeClass("active");
							course($(this).attr("data-id"));
						});
						course($(".main-left li").eq(0).attr("data-id"));
					}
				});
			};
			//课程表格列表接口函数				
			function course(id) {
				$(".course-main .main-right .main-video .right-con").html('<div class="con-wait">' +
					'<img class="loadingImg" src="/web/images/ansandqus/loading.gif" alt=""/>' +
					'<p class="loadingWord">加载中</p>' +
					'</div>');
				RequestService("/online/chapter/findChapterByChapterId", "get", {
					courseId: courseID,
					chapterId: id
				}, function(data) {
					$(".course-main .main-right .main-video .right-con").html(template.compile(coursetable)({
						items: data.resultObject
					}));
					for(var a = 0; a < $(".kechengAll").length; a++) {
						for(var i = 0; i < $(".kechengAll").eq(a).find(".kecheng").length; i++) {
							$(".kechengAll").eq(a).find(".kecheng").eq(i).find(".index").html(i + 1 + "-");
						};
					};
					var sectionId0 = $(".right-con .kecheng").eq(0).attr("data-sectionid");
					var chapterId0 = $(".right-con .kecheng").eq(0).attr("data-zhishidianid");
					var videoId0 = $(".right-con .kecheng").eq(0).attr("data-videoid");
					var vId0 = $(".right-con .kecheng").eq(0).attr("data-vid");
					$(".l3").attr({
						"data-sectionid": sectionId0,
						"data-zhishidianid": chapterId0,
						"data-videoid": videoId0,
						"data-vid": vId0
					});

					//课程列表的下拉
					$(".but").off().on("click", function() {
						if($(this).hasClass("kai")) {
							$(this).find("a").html("收起");
							$(this).removeClass("kai").addClass("guan");
							$(this).parent().find(".kechengAll").css("max-height", "none");
						} else {
							$(this).find("a").html("展开");
							$(this).removeClass("guan").addClass("kai");
							$(this).parent().find(".kechengAll").css({
								"max-height": "225px"
							});
						}
					});
					//跳转视频播放页
					$(".kechengAll .kecheng").off().click(function() {
						var $this=$(this);
						$.ajax({
							type: "get",
							url: bath + "/online/user/isAlive",
							async: false,
							success: function(data) {
								if(data.success === true) {	
									if($this.find(".pd").attr("lock_status") == 1) {
										var sectionId = $this.attr("data-sectionid");
										var chapterId = $this.attr("data-zhishidianid");
										var videoId = $this.attr("data-videoid");
										var vId = $this.attr("data-vid");
										location.href = bath + "/web/html/video.html?courseId=" + courseID + "&sectionId=" + sectionId + "&chapterId=" + chapterId + "&vId=" + vId + "&videoId=" + videoId;
									} else {
										//								alert("未解锁")
									}
								} else {
									$('#login').modal('show');$('#login').css("display", "block");
									$(".loginGroup .logout").css("display", "block");
									$(".loginGroup .login").css("display", "none");
									return false;
								}
							}
						});						
					});
					//关卡跳转
					$(".kechengAll .guanqia").off().click(function() {
						var examId = $(this).attr("data-examid");
						var $this=$(this);
						$.ajax({
							type: "get",
							url: bath + "/online/user/isAlive",
							async: false,
							success: function(data) {
								if(data.success === true) {	
									//获取关卡信息
									if($this.attr("lock_status")!=0){
										RequestService("/barrier/getNewBarrierBasicInfo", "get", {
											id: examId
										}, function(data) {
											if(data.success == true) {
												//1为成功0为失败2为还未闯过3为正在闯关
												if(data.resultObject.result == 1) {
													window.open("/web/html/censorshipResult.html?gqid=" + examId + "&examStatu=1");
												} else if(data.resultObject.result == 0) {
													window.open("/web/html/censorship.html?gqid=" + examId + "&examStatu=0", examId);
												} else if(data.resultObject.result == 2 || data.resultObject.result == 3) {
													window.open("/web/html/censorship.html?gqid=" + examId + "&examStatu=0", examId);
												};
											}else{
												return false;
											};
										}, false);	
									}
								} else {
									$('#login').modal('show');$('#login').css("display", "block");
									$(".loginGroup .logout").css("display", "block");
									$(".loginGroup .login").css("display", "none");
									return false;
								}
							}
						});						
					});
				})
			}
			//课程资料加载
			function info() {
				$(".main-ppt .right-con .con-wait").hide();
				RequestService("/course/resource/getChapterTree", "get", {
					courseId: courseID
				}, function(data) {
					if(data.success == true) {
						$(".course-main .main-left").html(template.compile(infonav)({
							result: data.resultObject
						}));
						$(".course-main .main-right .main-ppt").show().siblings().hide();
						//伸缩效果加载
						$(".main-left .allinfo .info1-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						$(".main-left .allinfo .info2-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						//点击知识点加载课程资料
						$(".main-left .allinfo .info2").off().on("click", function() {
							$(".info2").removeClass("active");
							$(this).addClass("active");
							$(".main-ppt .right-ppt span").eq(0).addClass("act").siblings().removeClass("act");
							$(".main-ppt .right-ppt span").eq(0).attr("data-ppt", $(this).attr("data-ppt"));
							$(".main-ppt .right-ppt span").eq(1).attr("data-ppt", $(this).attr("data-jiaoan"));
							if($(this).attr("data-ppt") != "" && $(this).attr("data-ppt") != null) {
								$(".page-no-result").hide();
								$(".main-ppt .right-con #frame").attr("src", $(this).attr("data-ppt")).show();
							} else {
								$(".main-ppt .right-con #frame").hide();
								$(".page-no-result").show();
							}
						});
						//ppt和教案切换
						$(".main-ppt .right-ppt span").off().on("click", function() {
							$(this).addClass("act").siblings().removeClass("act");
							if($(this).attr("data-ppt") != "" && $(this).attr("data-ppt") != null) {
								$(".page-no-result").hide();
								$(".main-ppt .right-con #frame").attr("src", $(this).attr("data-ppt")).show();
							} else if($(this).attr("data-jiaoan") != "" && $(this).attr("data-jiaoan") != null) {
								$(".page-no-result").hide();
								$(".main-ppt .right-con #frame").attr("src", $(this).attr("data-jiaoan")).show();
							} else {
								$(".main-ppt .right-con #frame").hide();
								$(".page-no-result").show();
							}
						});
						return $(".main-left .allinfo .info2").eq(0).click();
					};
				});
			};

			function Notes() {
				var noteId;
				var maxcengter;
				var pinglunList = {
					pageNumber: 1,
					pageSize: 5
				};
				var findNote = {
					type: 0,
					pageNumber: 1,
					pageSize: 6
				};
				$(".main-note .right-con .con-wait").hide();
				RequestService("/video/getvideos", "get", {
					courseId: courseID,
					isTryLearn: 0
				}, function(data) {
					if(data.success == true) {
						$(".course-main .main-left").html(template.compile(notes)({
							result: data.resultObject
						}));
						$(".course-main .main-right .main-note").show().siblings().hide();
						//伸缩效果加载
						$(".main-left .allinfo .info1-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						$(".main-left .allinfo .info2-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						$(".main-left .allinfo .info3-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});

						//点击知识点加载笔记
						$(".main-left .allinfo .info2").off().on("click", function() {
							$(".info2").removeClass("active");
							$(this).addClass("active");
							findNote.videoId = $(this).attr("data-id");

							$(".right-note span").each(function() {
								$(this).click(function() {
									$(this).addClass("act").siblings().removeClass("act");
									if($(this).text() == "全部") {
										findNote.type = 0;
										findNotes();
									} else if($(this).text() == "我的笔记") {
										findNote.type = 1;
										findNote.pageNumber = 1;
										findNotes();
									} else if($(this).text() == "我的收藏") {
										findNote.type = 2;
										findNote.pageNumber = 1;
										findNotes();
									}
								})
							});
							findNotes();

							function findNotes() {
								RequestService("/notes/findNotes", 'GET', {
									videoId: findNote.videoId,
									type: findNote.type,
									pageNumber: findNote.pageNumber,
									pageSize: findNote.pageSize
								}, function(data) {
									if(data.resultObject.items.length == 0) {
										$(".course-main .main-right .main-note .right-con").html(template.compile(emptyDefaul));
										$(".page-no-result").show();
									} else {
										$(".course-main .main-right .main-note .right-con").html(template.compile(noteContent)({
											items: data.resultObject.items
										}));
									}
									showAndHide();
									//评论
									$(".rightPinglun").off().each(function() {
										$(this).click(function() {
											var _this = $(this);
											RequestService("/online/user/isAlive", "GET", null, function(data) {
												if(data.success == false) {
													$('#login').modal('show');
												} else {
													//分页
													function mypage(maxPageNumber, thisPage) {
														if(maxPageNumber > 1) {
															$(".pinglunPage").append("<a class='shangyiye'>上一页</a><div class='zhongjianye'></div><a class='xiayiye'>下一页</a>");

															$(".xiayiye").on("click", function() {
																if(thisPage != maxPageNumber) {
																	pinglunList.pageNumber = thisPage + 1;
																	notepingLun();
																} else {
																	pinglunList.pageNumber = maxPageNumber;
																}
															});

															$(".shangyiye").on("click", function() {
																if(thisPage != 1) {
																	pinglunList.pageNumber = thisPage - 1;
																	notepingLun();
																} else {
																	pinglunList.pageNumber = 1;
																}
															});
															if(thisPage < 6 && maxPageNumber < 6) {
																for(var i = 1; i < maxPageNumber + 1; i++) {
																	$(".pinglunPage .zhongjianye").append("<a>" + i + "</a>");
																}
															} else if(thisPage > maxPageNumber - 3) {
																$(".pinglunPage .zhongjianye").append("<span style='cursor: auto'>...</span>");
																for(i = maxPageNumber - 5; i < maxPageNumber + 1; i++) {
																	$(".pinglunPage .zhongjianye").append("<a>" + i + "</a>");
																}
															} else if(thisPage < 4 && maxPageNumber > 6) {
																for(i = 1; i < maxPageNumber + 1; i++) {
																	if(i < 6) {
																		$(".pinglunPage .zhongjianye").append("<a>" + i + "</a>");
																	}
																}
																$(".pinglunPage .zhongjianye").append("<span style='cursor: auto'>...</span>");
															} else {
																$(".pinglunPage .zhongjianye").append("<span style='cursor: auto'>...</span>");
																for(i = 1; i < maxPageNumber + 1; i++) {
																	if(i > thisPage - 3 && i < thisPage + 3) {
																		$(".pinglunPage .zhongjianye").append("<a>" + i + "</a>");
																	}
																}
																$(".pinglunPage .zhongjianye").append("<span style='cursor: auto'>...</span>");
															}
															$(".zhongjianye a").each(function() {
																if($(this).text() == thisPage) {
																	$(this).addClass("current");
																} else {
																	$(this).hover(function() {
																		$(this).addClass("current");
																	}, function() {
																		$(this).removeClass("current");
																	});
																}
															});
															$(".zhongjianye a").on("click", function() {
																if(thisPage != $(this).text()) {
																	pinglunList.pageNumber = $(this).text();
																	notepingLun();
																} else {
																	pinglunList.pageNumber = $(this).text();
																}
															});
														}
													}
													if(_this.parent().next().css("display") == "block") {
														_this.parent().next().css("display", "none");
													} else {
														$(".pinglunBox").css("display", "none");
														_this.parent().next().toggle();
													}
													noteId = _this.parent().prev(".note-content").attr("data-noteid");
													notepingLun();

													function notepingLun() {
														RequestService('/notes/findComments', 'GET', {
															notes_id: noteId,
															pageNumber: pinglunList.pageNumber,
															pageSize: 5
														}, function(data) {
															_this.parent().parent().find(".pinglunBox").html(template.compile(comments)({
																items: data.resultObject.items
															}));
															_this.parent().next(".pinglunBox").find(".comment-top").append("<div class='pinglunPage'></div>");
															var maxPageNumber = data.resultObject.totalPageCount;
															maxcengter = data.resultObject.totalCount;
															var thisPage = data.resultObject.currentPage;
															mypage(maxPageNumber, thisPage);
															//回复
															$(".reply-btn").off().each(function() {
																	$(this).click(function() {
																		$(".emptyHit1").css("display", "none");
																		var _rThis = $(this);
																		if(_rThis.parent().next(".reply").css("display") == "block") {
																			_rThis.parent().next(".reply").css("display", "none");
																		} else {
																			$(".reply").css("display", "none");
																			_rThis.parent().next(".reply").toggle();
																		}
																		var writeReply = _rThis.parent().next().find(".writeReply").val();
																		$(".writeReply").focus(function() {
																			var replyNoHiddenLength = _rThis.parent().next().find(".writeReply").prev().innerWidth() + 10;
																			$(".emptyHit1").css("display", "none");
																			_rThis.parent().next().find(".writeReply").css("paddingLeft", replyNoHiddenLength + "px");
																			$(this).parent("").siblings(".user-content-line").find(".sanjiaoInput").css("display", "block");
																			$(this).parent("").find(".sanjiaoInput").attr("src", "../images/ansandqus/sanjia03.png");
																		});
																		$(".writeReply").blur(function() {
																			$(this).parent("").find(".sanjiaoInput").attr("src", "../images/ansandqus/sanjia01.png");
																		});
																		$(this).parent().next(".reply").find(".reply-ok").click(function() {
																			var _reThis = $(this);
																			var target_person = $(this).attr("data-target_person");
																			var target_nick_name = $(this).attr("data-target_nick_name");
																			var praise_login_names = $(this).attr("data-praise_login_names");
																			var writeReply = $(this).prev().val();
																			var target_user_id = $(this).attr("data-targetId");
																			var note_id = $(this).parent().parent().parent().parent().parent().parent().find(".note-content").attr("data-noteid");
																			var content = $(this).prev(".writeReply").val();
																			var replyCount = $(this).parent().parent().parent().parent().parent().prev('.right-note-others').find(".comment_Count").text();
																			$(this).parent().next(".reply").find(".reply-cancle").click(function() {
																				$(".reply ").css("display", "none");
																			});
																			if(writeReply == "") {
																				_reThis.parent().find(".emptyHit1").css("display", "block");
																			} else {
																				_reThis.parent().find(".emptyHit1").css("display", "none");
																				RequestService("/notes/saveComment", "POST", {
																					content: content,
																					target_person: target_person,
																					target_nike_name: target_nick_name,
																					notes_id: note_id,
																					target_user_id: target_user_id
																				}, function(data) {
																					if(data.success == true) {
																						$(".writeReply").val("");
																						var replyCon = _reThis.parent().parent().parent().parent().parent().prev('.right-note-others');
																						replyCon.find(".comment_Count").text(++replyCount);
																						if(maxcengter % 5 == 0) {
																							pinglunList.pageNumber = maxPageNumber + 1;
																						} else {
																							pinglunList.pageNumber = maxPageNumber;
																						}
																						notepingLun();
																					}
																				})
																			}
																		});
																		$(".reply-cancle").click(function() {
																			$(this).parent().css("display", "none");
																		})
																	});
																})
																//评论
															$(".comment-btn").off().each(function() {
																var commentCount = $(this).parent().parent().prev('.right-note-others').find(".comment_Count").text();
																$(this).click(function() {
																	var _cThis = $(this);
																	var cont = $(this).prev().prev(".writeComment").val();
																	var noId = $(this).parent().parent().parent().find(".note-content").attr("data-noteid");
																	if(cont == "") {
																		$(".writeComment").focus(function() {
																			$(".emptyHit").css("display", "none");
																		});
																		$(".emptyHit").css("display", "block");
																	} else {
																		$(".emptyHit").css("display", "none");
																		RequestService("/notes/saveComment", "POST", {
																			content: cont,
																			notes_id: noId
																		}, function(data) {
																			if(data.success == true) {
																				var com = _cThis.parent().parent().prev('.right-note-others').find(".comment_Count");
																				com.text(++commentCount);
																				if(maxcengter % 5 == 0) {
																					pinglunList.pageNumber = maxPageNumber + 1;
																				} else {
																					pinglunList.pageNumber = maxPageNumber;
																				}
																				notepingLun();
																			}
																		})
																	}
																})
															});
															//删除
															$(".reply-delete").off().each(function() {
																$(this).click(function() {
																	$("#quxiaoshoucang").paymentModal("rightShanchu");
																	$(".tipType").text("确定要删除吗？");
																	var dnoteId = $(this).parent().parent().parent().attr("data-commentid");
																	$("#quxiaoshoucang .modalFooter .yesBtn").click(function() {
																		RequestService('/notes/deleteComment', "POST", {
																			commentId: dnoteId
																		}, function(data) {
																			if(data.success == true) {
																				$(".payment-modal-close").trigger("click");
																				findNotes();
																			}
																		});
																	});
																	$("#quxiaoshoucang .modalFooter .notBtn").click(function() {
																		$(".payment-modal-close").trigger("click");
																	})
																})
															})
														})
													}
												}
											});
										})
									});
									//点赞
									$(".noteHitZan").off().each(function() {
											$(this).click(function() {
												var hitC_This = $(this);
												RequestService("/online/user/isAlive", "GET", null, function(data) {
													if(data.success == false) {
														$('#login').modal('show');
													} else {
														var hitNodeID = hitC_This.parent().prev().attr("data-noteid");
														RequestService('/notes/updatePraise', 'POST', {
															notes_id: hitNodeID
														}, function(data) {
															if(data.success == true) {
																hitC_This.find(".praise_Count").text(data.resultObject.praise_sum);
															}
															if(data.resultObject.isPraise == true) {
																hitC_This.addClass("select");
																hitC_This.find("i").addClass("select");
															} else {
																hitC_This.removeClass("select");
																hitC_This.find("i").removeClass("select");
																hitC_This.find(".praise_Count").removeClass("select");
															}
														})
													}
												});
											})
										})
										//收藏
									$(".rightShoucang").each(function() {
										$(this).click(function() {
											var shouThis = $(this);
											RequestService("/online/user/isAlive", "GET", null, function(data) {
												if(data.success == false) {
													$('#login').modal('show');
												} else {
													var sc = shouThis.find(".shoucang");
													var shouNoteId = shouThis.parent().prev(".note-content").attr("data-noteid");
													if(sc.text() == "已收藏") {
														$("#quxiaoshoucang").paymentModal("rightShoucang");
														$(".tipType").text("确定要取消收藏吗？");
														$("#quxiaoshoucang .modalFooter .yesBtn").unbind("click").click(function() {
															RequestService('/notes/updateCollect', "POST", {
																notes_id: shouNoteId
															}, function(data) {
																if(data.resultObject == false) {
																	sc.text("收藏");
																	sc.removeClass("select");
																	shouThis.find("i").removeClass("select");
																	$(".payment-modal-close").trigger("click");
																	findNotes();
																}
															});
														});
														$("#quxiaoshoucang .modalFooter .notBtn").click(function() {
															$(".payment-modal-close").trigger("click");
														})
													} else {
														RequestService('/notes/updateCollect', "POST", {
															notes_id: shouNoteId
														}, function(data) {
															if(data.resultObject == true) {
																sc.text("已收藏");
																sc.addClass("select");
																shouThis.find("i").addClass("select");
																findNotes();
															}
														});
													}
												}
											});
										});
									});
									//删除
									$(".rightShanchu").off().each(function() {
											$(this).click(function() {
												var _delThis = $(this);
												RequestService("/online/user/isAlive", "GET", null, function(data) {
													if(data.success == false) {
														$('#login').modal('show');
													} else {
														$("#quxiaoshoucang").paymentModal("rightShanchu");
														$(".tipType").text("确定要删除吗？");
														var dnoteId = _delThis.parent().prev().attr("data-noteid");
														$("#quxiaoshoucang .modalFooter .yesBtn").click(function() {
															RequestService('/notes/deleteNotes', "POST", {
																notes_id: dnoteId
															}, function(data) {
																if(data.success == true) {
																	$(".payment-modal-close").trigger("click");
																	findNotes();
																}
															});
														});
														$("#quxiaoshoucang .modalFooter .notBtn").click(function() {
															$(".payment-modal-close").trigger("click");
														})
													}
												});
											})
										})
										//计算总页数
									if(data.resultObject.totalPageCount > 1) { //分页判断
										$(".pages").css("display", "block");
										$(".pages .searchPage .allPage").text(data.resultObject.totalPageCount);
										if(data.resultObject.currentPage == 1) {
											$("#Pagination").pagination(data.resultObject.totalPageCount, {
												callback: function(page) { //翻页功能
													findNote.pageNumber = (page + 1);
													findNotes();
												}
											});
										}
									} else {
										$(".pages").css("display", "none");
									}
								});
							}
						});
						return $(".main-left .allinfo .info2").eq(0).click();
					}
				})
			}

			function wenda() {
				$(".main-ask .right-con .con-wait").hide();
				RequestService("/video/getvideos", "get", {
					courseId: courseID,
					isTryLearn: 0
				}, function(data) {
					if(data.success == true) {
						$(".course-main .main-left").html(template.compile(notes)({
							result: data.resultObject
						}));
						$(".course-main .main-right .main-ask").show().siblings().hide();
						//伸缩效果加载
						$(".main-left .allinfo .info1-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						$(".main-left .allinfo .info2-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						$(".main-left .allinfo .info3-name").off().on("click", function() {
							if($(this).hasClass("act")) {
								$(this).removeClass("act").next().addClass("hide");
							} else {
								$(this).addClass("act").next().removeClass("hide");
							}
						});
						var askList = {
							type: 1,
							pageNumber: 1,
							pageSize: 6
						};

						//点击知识点加载笔记
						$(".main-left .allinfo .info2").off().on("click", function() {
							$(".info2").removeClass("active");
							$(this).addClass("active");
							askList.videoId = $(this).attr("data-id");
							$(".right-ask span").each(function() {
								$(this).click(function() {
									$(this).addClass("act").siblings().removeClass("act");
									if($(this).text() == "全部") {
										askList.type = 1;
										askAndQus();
									} else if($(this).text() == "我提的问题") {
										askList.type = 2;
										askList.pageNumber = 1;
										askAndQus();
									}
								})
							});
							askAndQus();

							function askAndQus() {
								RequestService('/online/questionlist/findVideoQuestion', 'GET', {
									videoId: askList.videoId,
									type: askList.type,
									pageNumber: askList.pageNumber,
									pageSize: askList.pageSize
								}, function(data) {
									if(data.resultObject.items.length == 0) {
										$(".course-main .main-right .main-ask .right-con").html(template.compile(emptyDefaul));
										$(".page-no-result").show();
									} else {
										$(".course-main .main-right .main-ask .right-con").html(template.compile(askContent)({
											items: data.resultObject.items
										}));
									}
									showAndHide();
									//删除
									$(".askShanchu").off().each(function() {
										$(this).click(function() {
											var _askThis = $(this);
											RequestService("/online/user/isAlive", "GET", null, function(data) {
												if(data.success == false) {
													$('#login').modal('show');
												} else {
													$("#quxiaoshoucang").paymentModal("askShanchu");
													$(".tipType").text("确定要删除吗？");
													var delaskId = _askThis.attr("data-askid");
													$("#quxiaoshoucang .modalFooter .yesBtn").click(function() {
														RequestService('/online/questionlist/deleteQuestionById', "POST", {
															questionId: delaskId
														}, function(data) {
															if(data.success == true) {
																$(".payment-modal-close").trigger("click");
																askAndQus();
															}
														});
													});
													$("#quxiaoshoucang .modalFooter .notBtn").click(function() {
														$(".payment-modal-close").trigger("click");
													})
												}
											});
										})
									});
									//计算总页数
									if(data.resultObject.totalPageCount > 1) { //分页判断
										$(".pages").css("display", "block");
										$(".pages .searchPage .allPage").text(data.resultObject.totalPageCount);
										if(data.resultObject.currentPage == 1) {
											$("#Pagination").pagination(data.resultObject.totalPageCount, {
												callback: function(page) { //翻页功能
													askList.pageNumber = (page + 1);
													askAndQus();
												}
											});
										}
									} else {
										$(".pages").css("display", "none");
									}
								})
							}

						})
						return $(".main-left .allinfo .info2").eq(0).click();
					}
				})
			}
		} else {
			$('#login').css("display", "none");
			$(".loginGroup .logout").css("display", "block");
			$(".loginGroup .login").css("display", "none");
			location.href = "/index.html"
		}
	}, false);
	//显示，收起
	function showAndHide() {
		var $dot5 = $('.dot5');
		$dot5.each(function() {
			if($(this).height() > 46) {
				$(this).attr("data-txt", $(this).attr("data-text"));
				$(this).height(46);
				$(this).append('<span class="qq" style="margin-right:60px"> <a class="toggle" href="###" style="color:#2cb82c"><span class="opens">显示全部</span><span class="closes">收起</span></a></span>');
			}
			var $dot4 = $(this);

			function createDots() {
				$dot4.dotdotdot({
					after: 'span.qq'
				});
			}

			function destroyDots() {
				$dot4.trigger('destroy');
			}

			createDots();
			$dot4.on(
				'click',
				'a.toggle',
				function() {
					$dot4.toggleClass('opened');

					if($dot4.hasClass('opened')) {
						destroyDots();
					} else {
						createDots();
					}
					return false;
				}
			);
		});
	}
}