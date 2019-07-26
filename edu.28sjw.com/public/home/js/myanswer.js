template.helper('ahref', function(num) {
	if(num != "") {
		return '' + bath + '/web/qusDetail/' + num;
	} else {
		return 'javascript:;';
	}
});
var cTemplateIndex =
	"<div class='tabnavigator my-answer'>" +
	"<div class='tabbar'>" +
	"<div class='btn-item color2cb' data-type='issue'>我的提问</div>" +
	"<div class='btn-item' data-type='answer'>我的回答</div>" +
	"<div class='btn-item' data-type='favorite'>我的收藏</div>" +
	"</div>" +

	"<div class='view-stack full-content view-stack-issue'>" +
	"<div class='buttonbar'>" +
	"<div class='issue btn3 btn-jiejue' data-type='0'  data-name='issue'>未解决</div>" +
	"<div class='answerXian'>|</div>"+
	"<div class='resolve btn3' data-type='2'  data-name='issue'>已解决</div>" +
	"</div>" +
	"<div class='container-issue'>" +

	"</div>" +
	"</div>" +

	"<div class='view-stack full-content view-stack-answer'>" +
	"<div class='buttonbar'>" +
	"<div class='issue btn3  btn-jiejue' data-type='false' data-name='answer'>未采纳</div>" +
	"<div class='answerXian'>|</div>"+
	"<div class='resolve btn3' data-type='true'  data-name='answer'>已采纳</div>" +
	"</div>" +
	"<div class='container-answer'>" +

	"</div>" +
	"</div>" +

	"<div class='view-stack full-content view-stack-favorite'>" +
	"<div class='buttonbar'>" +
	"<div class='issue btn3 btn-jiejue' data-type='0' data-name='favorite'>未解决</div>" +
	"<div class='answerXian'>|</div>"+
	"<div class='resolve btn3' data-type='2'  data-name='favorite'>已解决</div>" +
	"</div>" +

	"<div class='container-favorite'>" +

	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
var issue =
	"{{each items as $issue i}}" +
	"<div class='search-item clearfix' data-qusId='{{$issue.id}}'>" +
	"<div class='pic-content'>" +
	"<div class='pic' style='background-image: url" +
	"({{#headImg($issue.create_head_img)}})" +
	"'></div>" +
	"<p class='name' title='{{$issue.create_nick_name}}'>{{$issue.create_nick_name}}</p>" +
	"</div>" +
	"<div class='content'>" +
	"<span class='from' data-mentid='{{$issue.ment_id}}'>来自学科：<span class='fromxueke'>{{$issue.name}}</span></span>" +
	"<div class='title' ><span class='play-a-lick' data-url='{{#ahref($issue.id)}}' title='{{$issue.title}}'>{{$issue.title}}" +
	"</span></div>"+
	"<p class='txt all' data-text='{{$issue.text}}'>{{change($issue.content)}}" +
	"</p>" +
	"<p class='time clearfix'>" +
	"{{#tags($issue.tags)}}" +
	"<span>{{#timeTypeChange($issue.create_time)}}</span>" +
	"<span style='' class='border'>浏览数({{$issue.browse_sum}})</span>" +
	"</p>" +
	"</div>" +

	/*<!--回复--->*/
	"{{if $issue.answer_sum!=0&&$issue.askAnswerVo!=null}}" +
	"<div class='reply clearfix'>" +
	"<div class='reply_left'>" +
	"<span>回答</span>" +
	"<span>{{$issue.answer_sum}}</span>" +
	"</div>" +
	"<div class='reply_right'>" +
	"<p class='right_name'>{{$issue.askAnswerVo.create_nick_name}}:" +
	"</p>" +
	"<div class='right_mess'>" +
	"<p class='right_content all'>{{change($issue.askAnswerVo.content)}}</p>" +
	"<div class='right_show'>" +
	"{{if $issue.askAnswerVo.praise}}" +
	"<span class='zan rezan' data-zanId='{{$issue.askAnswerVo.id}}'>已赞(<span>{{$issue.askAnswerVo.praise_sum}}</span>)</span>" +
	"{{else}}" +
	"<span class='zan' data-zanId='{{$issue.askAnswerVo.id}}'>点赞(<span>{{$issue.askAnswerVo.praise_sum}}</span>)</span>" +
	"{{/if}}" +
	"{{if $issue.askAnswerVo.copyright==true}}" +
	"<span class='baoliu'>作者保留权利</span>" +
	"<div class='baoliuTip'><img src='../images/personcenter/baoliuTip.png' class='jian'>用户在博学谷上发表的全部原创内容（包括但不限于提问，问答和评论），著作权均归用户本人所有。用户可授权第三方以任何方式使用，不需要得到博学谷的同意。</div>" +
	"{{/if}}" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"{{/if}}" +
	"</div>" +
	"{{/each}}";
var collect =
	"{{each items as $issue i}}" +
	"<div class='search-item clearfix' data-qusId='{{$issue.id}}' style='width:940px;margin-left:-12px;padding-left:13px;border-bottom:none'>" +
	"<div class='pic-content'>" +
	"<div class='pic' style='background-image: url" +
	"({{#headImg($issue.create_head_img)}})" +
	"'></div>" +
	"<p class='name' title='{{$issue.create_nick_name}}'>{{$issue.create_nick_name}}</p>" +
	"</div>" +
	"<div class='content favor'>" +
	"<span class='from' data-mentid='{{$issue.ment_id}}'>来自学科：<span class='fromxueke'>{{$issue.name}}</span></span>" +
	'<div class="back">'+
	"<div class='qx' data-qusId='{{$issue.id}}'><span class='qx1' title='取消收藏'>x</span></div>" +
	"<div class='title' ><span class='play-a-lick' data-url='{{#ahref($issue.id)}}' title='{{$issue.title}}'>{{$issue.title}}</span>" +
	"</div>"+
	"<p class='txt all' data-text='{{$issue.text}}'>{{change($issue.content)}}" +
	"</p>" +
	"</div>"+
	"<p class='time clearfix'>" +
	"{{#tags($issue.tags)}}" +
	"<span>{{#timeTypeChange($issue.create_time)}}</span>" +
	"<span style='' class='border'>浏览数({{$issue.browse_sum}})</span>" +
	"</p>" +
	"</div>" +
	/*<!--回复--->*/
	"{{if $issue.answer_sum!=0&&$issue.askAnswerVo!=null}}" +
	"<div class='reply clearfix'>" +
	"<div class='reply_left'>" +
	"<span>回答</span>" +
	"<span>{{$issue.answer_sum}}</span>" +
	"</div>" +
	"<div class='reply_right collright'>" +
	"<p class='right_name'>{{$issue.askAnswerVo.create_nick_name}}:" +
	"</p>" +
	"<div class='right_mess'>" +
	"<p class='right_content all'>{{change($issue.askAnswerVo.content)}}</p>" +
	"<div class='right_show'>" +
	"{{if $issue.askAnswerVo.praise}}" +
	"<span class='zan rezan' data-zanId='{{$issue.askAnswerVo.id}}'>已赞(<span>{{$issue.askAnswerVo.praise_sum}}</span>)</span>" +
	"{{else}}" +
	"<span class='zan' data-zanId='{{$issue.askAnswerVo.id}}'>点赞(<span>{{$issue.askAnswerVo.praise_sum}}</span>)</span>" +
	"{{/if}}" +
	"{{if $issue.askAnswerVo.copyright==true}}" +
	"<span class='baoliu'>作者保留权利</span>" +
	"<div class='baoliuTip'><img src='../images/personcenter/baoliuTip.png' class='jian'>用户在博学谷上发表的全部原创内容(包括但不限于提问，问答和评论),著作权均归用户本人所有。用户可授权第三方以任何方式使用,不需要得到博学谷的同意。</div>" +
	"{{/if}}" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"{{/if}}" +
	"<div class='collectXian'></div>"+
	"</div>" +
	"{{/each}}";
var emptyDefaul =
	"<div class='page-no-result'>" +
	"<img src='../images/personcenter/my_nodata.png'>" +
	"<div class='no-title'>暂无数据</div>" +
	"</div>";
function createPage() {
	var me = null;
	RequestService("/online/user/isAlive", "get", null, function(data) {
		if(data.success == true) {
			me = data.resultObject.loginName;
		}
	})
	$(".myanswerBox").html(template.compile(cTemplateIndex));
	$(".view-stack").css("display", "none");
	$(".view-stack-issue").css("display", "block");
	var param = {
		status: 0,
		pageNumber: 1,
		pageSize: 5
	};
	createCon("/ask/my/findMyQuestions", param, "issue");
	//一级导航的点击部分
	$(".btn-item").click(function() {
		$(this).addClass("color2cb").siblings().removeClass("color2cb");
			if($(this).attr("data-type") == "issue") {
				$(".view-stack-issue").show();
				$(".view-stack-favorite").hide();
				$(".view-stack-answer").hide();
				var aleft = $(this).offset().left - $(".myanswerBox").offset().left;
				var awidth = $(this).css("width");
				$(".pointer").animate({
					"left": aleft,
					"width": awidth
				});
				$(".view-stack-issue .buttonbar div").eq(0).addClass("btn-jiejue").siblings().removeClass("btn-jiejue");
				var param = {
					status: 0,
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyQuestions", param, "issue");
			} else if($(this).attr("data-type") == "answer") {
				$(".view-stack-issue").hide();
				$(".view-stack-favorite").hide();
				$(".view-stack-answer").show();
				var aleft = $(this).offset().left - $(".myanswerBox").offset().left;
				var awidth = $(this).css("width");
				$(".pointer").animate({
					"left": aleft,
					"width": awidth
				});
				$(".view-stack-answer .buttonbar div").eq(0).addClass("btn-jiejue").siblings().removeClass("btn-jiejue");
				var param = {
					accepted: false,
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyAnswers", param, "answer");
			} else if($(this).attr("data-type") == "favorite") {
				$(".view-stack-issue").hide();
				$(".view-stack-favorite").show();
				$(".view-stack-answer").hide();
				var aleft = $(this).offset().left - $(".myanswerBox").offset().left;
				var awidth = $(this).css("width");
				$(".pointer").animate({
					"left": aleft,
					"width": awidth
				});
				$(".view-stack-favorite .buttonbar div").eq(0).addClass("btn-jiejue").siblings().removeClass("btn-jiejue");
				var param = {
					status: 0,
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyCollections", param, "favorite");
			}
		})
		//二级导航的点击事件
	$(".buttonbar div").on("click", function() {
			$(this).addClass("btn-jiejue").siblings().removeClass("btn-jiejue");
			if($(this).attr("data-name") == "answer") {
				var param = {
					accepted: $(this).attr("data-type"),
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyAnswers", param, "answer");
			} else if($(this).attr("data-name") == "issue") {
				var param = {
					status: $(this).attr("data-type"),
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyQuestions", param, "issue");
			} else if($(this).attr("data-name") == "favorite") {
				var param = {
					status: $(this).attr("data-type"),
					pageNumber: 1,
					pageSize: 5
				};
				createCon("/ask/my/findMyCollections", param, "favorite");
			}
		})
		//页面创建函数
	function createCon(url, param, module) {
		RequestService(url, "get", param, function(data) {
			if(data.resultObject.items == "") {
				$(".not-data").remove();
				if(data.resultObject.totalCount == 0) { //无数据
					$(".container-" + module).html(emptyDefaul);
					$(".pages").css("display", "none");
				}
			} else {
				if(module != "favorite") {
					$(".container-" + module).html(template.compile(issue)({
						items: data.resultObject.items
					}));
					$(".search-item").hover(function() {
						$(this).find(".qx").css("display", "block");
						$(".collectXian").css("visibility","hidden");
					}, function() {
						$(this).find(".qx").css("display", "none");
						$(".collectXian").css("visibility","visible");
					})
				} else {
					$(".container-" + module).html(template.compile(collect)({
						items: data.resultObject.items
					}));
					$(".search-item").hover(function() {
						$(this).find(".qx").css("display", "block");
						$(".collectXian").css("visibility","hidden");
					}, function() {
						$(this).find(".qx").css("display", "none");
						$(".collectXian").css("visibility","visible");
					});
					$(".search-item").hover(function(){
						$(this).css("background","rgb(250,250,250)");
					},function(){
						$(this).css("background","#fff");
					})
				}
				$(".container-" + module).css("display", "block");
				if(data.resultObject.totalPageCount > 1) { //分页判断
					$(".not-data").remove();
					$(".pages").css("display", "block");
					$(".searchPage .allPage").text(data.resultObject.totalPageCount);
					if(data.resultObject.currentPage == 1) {
						$("#Pagination").pagination(data.resultObject.totalPageCount, {
							callback: function(page) { //翻页功能
								var param = {
									pageNumber: page + 1,
									pageSize: 5
								};
								createCon(url, param, module)
							}
						});
					}
					$(".view-content-notbodys").html("");
				} else if(data.resultObject.totalPageCount = 1 && data.resultObject.totalCount > 0) {
					$(".pages").css("display", "none");
					$(".view-content-notbodys").html("");
				}
				shenglve();
				zan();
				step();
			}
		})

	}
	//标签学科跳转
	function step(){
		$(".fromxueke").on("click",function(){
			var tag=$(this).html();
			window.localStorage.xueke=tag;
			window.localStorage.xuekeid=$(this).parent().attr("data-mentid");
			window.open(bath+"/web/html/ansAndQus.html");
		})
		$(".biaoqian").click(function(){
			var tag=$(this).html();
			window.localStorage.biaoqian=tag;
			window.open(bath+"/web/html/ansAndQus.html");
		})
		$(".title .play-a-lick").click(function(){
			var url=$(this).attr("data-url");
			window.open(url);
		})
		$(".play-a-click").hover(function(){
			$(this).css("color","#2cb82c")
		},function(){
			$(this).css("color","#333")
		})
	}
	//省略号
	function shenglve() {
		//		$(".all").dotdotdot()
		$(".all").each(function() {
			var $dot5 = $(this);
			if($dot5.height() >40) {
				$dot5.css("height", "40");
				$dot5.append('<span class="qq" style="margin-right:50px"><a class="toggle" href="#" ><span class="opens">显示全部</span><span class="closes">收起</span></a></span>');
			}

			function createDots() {
				$dot5.dotdotdot({
					after: 'span.qq'
				});
			}

			function destroyDots() {
				$dot5.trigger('destroy');
			}
			createDots();

			$dot5.on(
				'click',
				'a.toggle',
				function() {
					$dot5.toggleClass('opened');

					if($dot5.hasClass('opened')) {
						destroyDots();
					} else {
						createDots();
					}
					return false;
				}
			);
		})
	}

	function zan() {
		//点赞
		$(".zan").each(function() {
				$(this).click(function() {
					var sum = $(this).find("span").html();
					var $zan = $(this)
					RequestService("/ask/answer/praiseAnswer", "post", {
						answer_id: $(this).attr("data-zanId")
					}, function(data) {
						if(data.resultObject.praise == false) {
							sum--;
							$zan.removeClass("rezan").html("点赞(<span>" + data.resultObject.sum + "</span>)");
						} else {
							sum++;
							$zan.addClass("rezan").html("已赞(<span>" + data.resultObject.sum + "</span>)");
						}
					})
				})
			})
			//保留用户权利
		$(".baoliu").click(function() {
			if($(this).parent().find(".baoliuTip").css("display") == "none") {
				$(this).parent().find(".baoliuTip").css("display", "block");
			} else {
				$(this).parent().find(".baoliuTip").css("display", "none");
			}
		});
		$(document).click(function(e) {
				if(e.target.className != "baoliu") {
					$(".baoliuTip").css("display", "none");
				}
			})
			//取消收藏
			$(".qx").click(function() {
				var $this=$(this);
				$("#quxiaoshoucang").paymentModal("qx");
				$("#quxiaoshoucang .modalFooter .yesBtn").click(function(){
					$this.parent().parent().parent().remove();				
					RequestService("/ask/answer/collection", "post", {
						question_id: $this.attr("data-qusId")
					}, function(data) {
						if(data.success == true) {
							if($(".container-favorite .search-item").length <= 0) {
								$(".not-data").remove();
								$(".container-favorite").html(emptyDefaul);
								$(".pages").css("display", "none");
							};
						}
						$(".payment-modal .payment-modal-close").trigger("click");
					})
				});
				$("#quxiaoshoucang .modalFooter .notBtn").click(function(){
					$(".payment-modal .payment-modal-close").trigger("click");
				})
			});
	}
}