/**
 * Created by Administrator on 2016/7/29.
 */

var bath = "";

var RequestService = function(method, type, params, callBack, async) {
	$.ajax({
		url: bath + method,
		type: type,
		data: params,
		async: async === undefined ? true : async,
		cache: false, //清除缓存
		success: function(data) {
			if(callBack) {
				callBack(data);
			}
			$("*[data-txt]").hover(function(e) {
				//var eve = e || window.event;
				var string = $(this).data('txt');
				if($(this).attr("data-maxlengts")) {
					var mylength = $(this).attr("data-maxlengts");
				} else {
					var mylength = 10;
				}
				if(string.length >= mylength) {
					layer.tips(string, $(this), {
						tips: [1, '#f8f8f8'],
						area: ['auto', 'auto']
					});
				}
			}, function() {
				layer.closeAll()
			});
		}
	});
};
//日历等时间参数前面加上0
function preFix(num){
	if(num<10){
		return ""+"0"+num;
	}else{
		return ""+num;
	}
};
//获取地址栏参数
$.getUrlParam = function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		}
//判断是否在线
	function isAlive(){
		$.ajax({
			type: "get",
			url: bath + "/online/user/isAlive",
			async: false,
			success: function(data) {
				if(data.success === true) {	
				} else {
					$('#login').css("display", "block");
					$(".loginGroup .logout").css("display", "block");
					$(".loginGroup .login").css("display", "none");
					window.location.href=bath+"/index.html"
				}
			}
		});
	};
	function isAlive0(){
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
	};
	function isAlive1(){
		
	};

//创建外部链接
//function createOtherLink(data) {
//  $(data).each(function (i, item) {
//      $("<span><a href='" +
//          item.url +
//          " 'target='" + "view_window" + "'>" +
//          item.orgname +
//          "</a></span>").appendTo($(".link-content"));
//      var myheight = ($(window).height()) - 60 - ($("footer").height());
//      $(".view-container").css("min-height",myheight);
//  })
//}
var showHtml = function() { //解决加载页面问题
	$("header").css("display", "block");
	$("footer").css("display", "block");
	$(".view-container").css("display", "block");
};
var hideHtml = function() {
	$("header").css("display", "none");
	$("footer").css("display", "none");
	$(".view-container").css("display", "none");
}

function showLoding() { //loding页面
	var index = layer.load(2, {
		shade: [0.4, '#fff'], //0.1透明度的白色背景
		scrollbar: false,
		time: 8000
	});
	$("html").removeAttr("style");
}
//删除图片
function myquiz_bottom_dv(eve) {
	var class_t = $(eve.target).parent().parent().children("div:eq(0)").attr("class");
	$("." + class_t + "").text((($(eve.target).parent().parent().parent().children().length) - 1) + "/5");
	$(eve.target).parent().parent().remove();
	$("." + class_t + "").css("display", "none");
	$("." + class_t + ":last").css("display", "block");
	if($(eve.target).parent().parent().parent().children().length < 6) {
		$("." + imgz + "").css("display", "none");
	}
}

function nullInput() {
	$(".cylogo").css("display", "block");
	$(".cyinput1").css({
		"display": "block"
	}).val("");
	$(".cyResetPassword-top").css("display", "block");
	$(".form-group").children().css("display", "block");
	$(".form-reset-password").css("display", "block");
	$(".form-reset-password2").css("display", "none");
	$(".group-code").children().css("display", "block");
	$(".group-password").css("display", "block");
	$(".group-password input").val("");
}

//统计图片数量
var imgs = 0;
//上传阻止变量
var imgz;
var arreya = [];

function saveReport(e) {
	var eve = e || window.event;
	var type_c = eve.target.parentNode.parentNode.parentNode.id;
	if(imgs == 5) {
		$("." + imgz + "").css("display", "block")
	}
	// 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
	if(type_c == "qusForm") {
		$(".myquiz-bottom-dv-1 .myquiz-bottom-dv-1-1-y").css("display", "none");
		//jquery 表单提交
		$("#Myform").ajaxSubmit(function(message) {
			var data = message;
				$(".myquiz-bottom-dv").append("<div class='myquiz-bottom-dv-1' data-vid=" + data.url + ">" +
					"<img src='" + data.url + "'>" +
					"<div class='myquiz-bottom-dv-1-1-y' style='display: block'>" + imgs + "/5</div>" +
					"<div class='myquiz-bottom-dv-1-1'>" +
					"<div class='myquiz-bottom-dv-1-1-x' onclick='myquiz_bottom_dv(event)'></div></div></img>");
		});
		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	} else if(type_c == "tiForm") {
		$(".tiForm-bottom-dv-1 .tiForm-bottom-dv-1-1-y").css("display", "none");
		//jquery 表单提交
		$("#Myform1").ajaxSubmit(function(message) {
			var data = message;
				$(".tiForm-bottom-dv").append("<div class='tiForm-bottom-dv-1' data-vid=" + data.url + ">" +
					"<img src='" + data.url + "'>" +
					"<div class='tiForm-bottom-dv-1-1-y' style='display: block'>" + imgs + "/5</div>" +
					"<div class='tiForm-bottom-dv-1-1'>" +
					"<div class='tiForm-bottom-dv-1-1-x' onclick='myquiz_bottom_dv(event)'></div></div></img>");
		});
		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	} else if(type_c == "answerForm") {
		$(".interlocution-bottom-dv-1 .interlocution-bottom-dv-1-1-y").css("display", "none");
		//jquery 表单提交
		$("#Myform3").ajaxSubmit(function(message) {	
			var data = message;
				$(".interlocution-bottom-1").append("<div class='interlocution-bottom-dv-1' data-vid=" + data.url + ">" +
				"<img src='" + data.url + "'>" +
				"<div class='interlocution-bottom-dv-1-1-y' style='display: block'>" + imgs + "/5</div>" +
				"<div class='interlocution-bottom-dv-1-1'>" +
				"<div class='interlocution-bottom-dv-1-1-x' onclick='myquiz_bottom_dv(event)'></div></div></img>");
		});
		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	} else if(type_c == "bzh_modal_tform") {
		$(".tiForm-bottom-f-dv-1 .tiForm-bottom-dv-1-1-y").css("display", "none");
		//jquery 表单提交
		$("#Myform4").ajaxSubmit(function(message) {
			var data = message;
				$(".tiForm-bottom-f-1").append("<div class='tiForm-bottom-f-dv-1' data-vid=" + data.url + ">" +
					"<img src='" + data.url + "'>" +
					"<div class='tiForm-bottom-dv-1-1-y' style='display: block'>" + imgs + "/5</div>" +
					"<div class='tiForm-bottom-f-dv-1-1'>" +
					"<div class='tiForm-bottom-f-dv-1-1-x' onclick='myquiz_bottom_dv(event)'></div></div></img>");
			$(".tiForm-bottom-f-dv-1-1-x").click(function(eve) {
				$(eve.target).parent().parent().remove();
			});
		});
		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	} else if(type_c == "upload") {
		//jquery 表单提交
		$("#Myform2").ajaxSubmit(function(message) {
			var data = message;
			$(".upload_pictures_bottom_upload").attr("data-id", data.url).css({
				background: "url(" + data.url + ") no-repeat",
				backgroundSize: "100% 100%"
			})
		});
		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	}else {
		layer.msg("系统繁忙", {
			icon: 2
		});
	}
}

function createQusPage() {
	var paginOpts = {
		num_edge_entries: 1,
		num_display_entries: 5,
		items_per_page: 1,
		show_if_single_page: true
	};

	var urlParam = {};

	this.setSectionData = function(requstUrl, data, type) {
		urlParam = data;
		paginOpts.callback = pageselectCallback;
		var defaultParam = {
			pageNumber: "1",
			pageSize: "15"
		};
		var param = $.extend(defaultParam, urlParam);
		RequestService(requstUrl, "GET", param, function(data) {
			var result = data.resultObject;
			if(result.totalPageCount > 1) {
				$(".searchPage .allPage").text(result.totalPageCount);
				$("#Pagination").pagination(result.totalPageCount, paginOpts);
			}
			createSection(type, result.items);
		});

		function pageselectCallback(data) {
			var pageParam = {
				currentPage: (data + 1),
				pageSize: "15"
			};
			var param = $.extend(pageParam, urlParam);
			RequestService(requstUrl, "GET", param, function(data) {
				createSection(type, data.resultObject.items);
			});
		};
	};

	function createSection(type, data) {
		var content = $(".container-" + type).empty();
		$(data).each(function(i, data) {
			createCourseItem(type)(content, data);
		});
	};

	function createCourseItem(type) {
		return {
			video: function(parent, data) {
				$("<div class='search-item' data-index='" +
					data.videoId + "' " +
					"data-url='" +
					data.path +
					"'>" +
					"<div class='container-icon'>" +
					"<span class='glyphicon glyphicon-play-circle'></span></div>" +
					"<div class='container-content'>" +
					"<div class='container-title'>" +
					"<span class='title'>" +
					data.title +
					"</span>" +
					"<span class='rd'>热度：</span>" +
					"<span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span>" +
					"<span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span>" +
					"<span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span>" +
					"<span class='glyphicon glyphicon-star-empty ' aria-hidden='true'></span>" +
					"</div>" +
					"<p class='txt'>本课通过UIView,ios,story,等ios空间进行讲解本课通过UIView,ios,story,等ios空间进行讲解本课通过UIView,ios,story,等ios空间进行讲解本课通过UIView,ios,story,等ios空间进行讲解</p>" +
					"<div class='container-footer'>" +
					"<span class='glyphicon glyphicon-user' aria-hidden='true'></span> <span class='name'>" +
					data.teacherName +
					"</span>" +
					"<span class='glyphicon glyphicon-time' aria-hidden='true'></span> <span class='time'>12:00</span>" +
					"</div></div></div>").appendTo(parent);
			},
			issue: function(parent, data) {
				if(data.forumAnswer.userName == undefined) {
					data.forumAnswer.userName = " 此问题暂时无人回答";
					data.forumAnswer.context = "";
				} else {
					data.forumAnswer.userName = data.forumAnswer.userName + "：";
				}
				var dom = $("<div class='search-item'>" +
					"<div class='pic-content'>" +
					"<div class='pic'></div>" +
					"<p class='name'>" +
					data.userName +
					"</p>" +
					"</div>" +
					"<div class='content'>" +
					"<p class='title'><span class='glyphicon glyphicon-question-sign'></span> <span>" +
					data.title +
					"</span></p>" +
					"<p class='txt'><span class='glyphicon glyphicon-envelope'></span> <span>[最新回答]</span>" +
					"<span class='photo'></span><span class='photoName'>" +
					data.forumAnswer.userName +
					"</span>" +
					"<span class='msg'>" +
					data.forumAnswer.context +
					"</span></p>" +
					"<p class='time'><span>" +
					data.day +
					"天前</span><span class='knowlege-type'>" +
					data.label +
					"</span></p>" +
					"</div>" +
					"<div class='control'>" +
					"<div class='control-content'>" +
					"<div class='control-content-item left'><p>" +
					data.answerNum +
					"</p><p>回答</p></div>" +
					"<div class='control-content-item'><p>" +
					data.pv +
					"</p><p>浏览</p></div>" +
					"</div>" +
					"</div>" +
					"</div>").appendTo(parent);
				dom.find(".pic").css("background-image", "url(" +
					data.forumHeadImg +
					")");
				if(data.forumAnswer.answerHeadImg) {
					dom.find(".photo").css("background-image", "url(" +
						data.forumAnswer.answerHeadImg +
						")");
				} else {
					dom.find(".photo").css("display", "none");
				}
			},
			answer: function(parent, data) {
				if(data.forumAnswer.userName === undefined) {
					data.forumAnswer.userName = "此问题暂时无人回答";
					data.forumAnswer.context = "";
				} else {
					data.forumAnswer.userName = data.forumAnswer.userName + "：";
				}
				var dom = $("<div class='search-item'>" +
					"<div class='pic-content'>" +
					"<div class='pic'></div>" +
					"<p class='name'>" +
					data.userName +
					"</p>" +
					"</div>" +
					"<div class='content'>" +
					"<p class='title'><span class='glyphicon glyphicon-ok-sign'></span> <span>" +
					data.title +
					"</span></p>" +
					"<p class='txt'><span class='glyphicon glyphicon-envelope'></span> <span>[最新回答]</span>" +
					"<span class='photo'></span><span class='photoName'>" +
					data.forumAnswer.userName +
					"</span>" +
					"<span class='msg'>" +
					data.forumAnswer.context +
					"</span></p>" +
					"<p class='time'><span>" +
					data.day +
					"天前</span><span class='knowlege-type'>" +
					data.label +
					"</span></p>" +
					"</div>" +
					"<div class='control'>" +
					"<div class='control-content'>" +
					"<div class='control-content-item left'><p>" +
					data.answerNum +
					"</p><p>回答</p></div>" +
					"<div class='control-content-item'><p>" +
					data.pv +
					"</p><p>浏览</p></div>" +
					"<div class='btn btn-default btn-answer'>修改答案</div>" +
					"</div>" +
					"</div>" +
					"</div>").appendTo(parent);
				dom.find(".pic").css("background-image", "url(" +
					data.forumHeadImg +
					")");
				dom.find(".photo").css("background-image", "url(" +
					data.forumAnswer.answerHeadImg +
					")");
			},
			favorite: function(parent, data) {
				$("<div class='search-item'>" +
					"<div class='pic-content'>" +
					"<div class='pic'></div>" +
					"<p class='name'>" +
					"高圆圆" +
					"</p>" +
					"</div>" +
					"<div class='content'>" +
					"<p class='title'><span class='glyphicon glyphicon-ok-sign'></span> <span>" +
					"怎么提示错误代码" +
					"</span></p>" +
					"<p class='txt'><span class='glyphicon glyphicon-envelope'></span> <span>[最新回答]</span>" +
					"<span class='photo'></span><span class='photoName'>" +
					"包子睡不醒：" +
					"</span>" +
					"<span class='msg'>" +
					"字符串错误，undefind" +
					"</span></p>" +
					"<p class='time'><span>1天前</span><span class='knowlege-type'>Html/css</span></p>" +
					"</div>" +
					"<div class='control'>" +
					"<div class='control-content'>" +
					"<div class='control-content-item left'><p>" +
					"1" +
					"</p><p>回答</p></div>" +
					"<div class='control-content-item'><p>" +
					"60" +
					"</p><p>浏览</p></div>" +
					"<div class='btn btn-default btn-answer'>我来回答</div>" +
					"</div>" +
					"</div>" +
					"</div>").appendTo(parent);
			}
		}[type];
	};
}

function createVideoPage() {

	var paginOpts = {
		num_edge_entries: 1,
		num_display_entries: 5,
		items_per_page: 1,
		show_if_single_page: true
	};

	this.setSectionByType = function(type, colNum) {
		switch(type) {
			case "good":
				setSectionData("/online/home/getBoutiqueVideo", "good", colNum);
				break;
			case "new":
				setSectionData("/online/home/getNewVideo", "new", colNum);
				break;
			case "hot":
				setSectionData("/online/home/getPopularityVideo", "hot", colNum);
				break;
			case "studying":
				setSectionData("/online/home/getBoutiqueVideo", "studying", colNum);
				break;
			case "studyed":
				setSectionData("/online/home/getBoutiqueVideo", "studyed", colNum);
				break;
		}
	};

	function setSectionData(requstUrl, type, colNum) {
		var pageSize = 15;
		if(colNum === undefined) {
			colNum = 5
		} else {
			pageSize = 12
		};
		paginOpts.callback = pageselectCallback;
		RequestService(requstUrl, "GET", {
			currentPage: "1",
			pageSize: pageSize
		}, function(data) {
			var result = data.resultObject;
			if(result.totalPageCount > 1) {

				$(".searchPage .allPage").text(result.totalPageCount);
				$("#Pagination").pagination(result.totalPageCount, paginOpts);
			}
			createSection(type, result.items, colNum);
		});

		function pageselectCallback(data) {
			RequestService(requstUrl, "GET", {
				currentPage: (data + 1),
				pageSize: pageSize
			}, function(data) {
				createSection(type, data.resultObject.items, colNum);
			});
		};
	};

	function createSection(type, data, colNum) {
		var content = $(".container-video-" + type).empty()
			.click(function(evt) {
				var target = $(evt.target);
				if(target.attr("class") === "cover") {
					window.open("#playvideo/" +
						target.data("vid") +
						"/" + encodeURIComponent(target.data("url")));
				}
			});
		var currentRow;

		$(data).each(function(i, data) {
			if(i === 0 || i % colNum === 0) {
				var row = $("<div class='row'>");
				row.appendTo(content);
				currentRow = row;
			};
			createVideoItem(type)(currentRow, data);
		});
	};

	function createVideoItem(type) {
		if(type === "new" || type === "hot") {
			type = "good"
		};
		if(type === "studyed") {
			type = "studying"
		};
		return {
			good: function(parent, data) {
				$("<div class='col-sm-3'>" +
						"<div class='video-item'>" +
						"<div class='content'>" +
						"<div class='pic'></div>" +
						"<p class='title'>" +
						data.title +
						"</p>" +
						"<div class='bottom-control'>" +
						"<span class='glyphicon my-glyphicon-user' ></span>  " +
						"<span class='num-person'>" +
						data.pv +
						"</span>" +
						"<span class='glyphicon my-glyphicon-time' aria-hidden='true'></span>  " +
						"<span class='name'>" +
						data.timeLong +
						"</span>" +
						"</div></div>" +
						"<div class='cover' data-url='" +
						data.path +
						"'" +
						" data-vid = " +
						data.videoId +
						"" +
						" >" +
						"<span class='glyphicon icon'></span>" +
						"</div></div></div>").appendTo(parent).find(".pic")
					.css("background-image", "url('" +
						data.vimg +
						"')");
			},
			studying: function(parent, data) {
				$("<div class='col-sm-3'>" +
						"<div class='video-item'>" +
						"<div class='content'>" +
						"<div class='pic'></div>" +
						"<p class='title'>" +
						data.title +
						"</p>" +
						"<div class='bottom-control'>" +
						"<span class='glyphicon my-glyphicon-user' ></span>  " +
						"<span class='num-person'>" +
						data.pv +
						"</span>" +
						"<span class='glyphicon my-glyphicon-time' aria-hidden='true'></span>  " +
						"<span class='name'>" +
						data.timeLong +
						"</span>" +
						"</div></div>" +
						"<div class='cover' data-url='" +
						data.path +
						"'" +
						" data-vid = " +
						data.videoId +
						"" +
						" >" +
						"<span class='glyphicon icon'></span>" +
						"<span class='glyphicon glyphicon-trash'></span>" +
						"</div></div></div>").appendTo(parent).find(".pic")
					.css("background-image", "url('" +
						data.vimg +
						"')");
			},
			knowlege: function(parent, data) {},
			students: function(parent, data) {}
		}[type];
	};

};

function initFormModel(txt, title) {
	$("#bzh_modal_form .cymyanswerlogo").text(title ? title : "回答");
	$("#bzh_modal_form .txt").val(txt);
	$("#bzh_modal_form .txt").attr("maxlength", "300");
	$("#bzh_modal_form .txt").attr("placeholder", "笔记内容不超过300字");
	$("#bzh_modal_form .txt").after("<span style='color: #ccc;'>笔记内容不超过300字</span>");

};

function initTFormModal(title, txt) {
	$("#bzh_modal_tform .title").val(title);
	$("#bzh_modal_tform .txt").val($.trim(txt));
}

$(function($) {
	$.fn.Tabnavigator = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof method === 'object' || method == null) {
			return methods.init.apply(this, arguments);
		};
	}

	var methods = {
		init: function(options) {
			var defaultVar = {};
			var opts = $.extend(defaultVar, options);
			return this.each(function() {
				$(this).click(function(evt) {
					var target = evt.target;
					if($(target).hasClass("btn-item")) {
						$(this).find(".pointer").animate({
							"left": $(target).position().left,
							"width": $(target).width() + 20
						}, 300);
						$(this).parent().find(".view-stack").css("display", "none");
						$(this).trigger("tabChange", {
							data: $(target).data("type")
						});
					}
				});
			})
		},
		otherFunction: function(index) {}
	}
}(jQuery));

$(function($) {
	$.fn.ButtonBar = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof method === 'object' || method == null) {
			return methods.init.apply(this, arguments);
		};
	}

	var methods = {
		init: function(options) {
			var defaultVar = {};
			var opts = $.extend(defaultVar, options);
			return this.each(function() {
				$(this).click(function(evt) {
					if(!$(evt.target).hasClass("btn")) {
						return
					};
					$(this).find(".btn").removeClass("btn-success");
					$(evt.target).addClass("btn-success");
					$(this).trigger("btnBarChange", {
						type: $(evt.target).data("type"),
						name: $(evt.target).data("name")
					});
				});
			})
		},

		otherFunction: function(index) {}
	}
}(jQuery));
$(function($) {
	$.fn.SlideNav = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof method === 'object' || method == null) {
			return methods.init.apply(this, arguments);
		};
	}

	var methods = {
		init: function(options) {
			var defaultVar = {};
			var opts = $.extend(defaultVar, options);
			return this.each(function() {

			})
		},

		otherFunction: function(index) {}
	}
}(jQuery));



if(window.location.hash != "Careerpathindetail.html") { //判断地址不是职业路径详情页面
	$(window).scroll(function() { //返回顶部
		if($(window).scrollTop() > 10) {
			$(".h_top").show(300);
		} else {
			$(".h_top").hide(400);
		}
	});
}

function pageScroll() { //返回顶部
	window.scrollBy(0, -500);
	scrolldelay = setTimeout('pageScroll()', 10);
	if($(window).scrollTop() == 0) {
		$(".h_top").show(300);
		clearTimeout(scrolldelay);
		$(".h_top").hide(400);
	}
}
function headershow() {
	$(document).ready(function() {
		$(document).scroll(function() {
			var top = $(document).scrollTop();
			if(top > 100) {
				$(".other-page").show();
				$(".other-page").css({
					"position": "fixed",
					"top": "0px"
				})
			} else {
				$(".other-page").css({
					"position": "inherit"
				});
				if(window.location.hash == "#/index") {
					$(".other-page").hide();
				}
			}
		});
	});
}

function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

function isnull(data) { //判空
	if(data == null || data == undefined || data == "") {
		return true;
	} else {
		return false;
	}
}

/**
 * 异步文件上传
 * @param fileId  input的ID
 * @param url     请求的后台地址
 * @param callback  回调方法
 */
function ajaxFileUpload(fileId, url, callback) {
	$.ajaxFileUpload({
		url: url, // 需要链接到服务器地址
		secureuri: false, //一般设置为false
		fileElementId: fileId, // 上传文件的id、name属性名
		dataType: 'text', //返回值类型，一般设置为json、application/json
		success: function(data) {
			//callback(JSON.parse(data));
			if(data.indexOf("failure") > -1) {
				layer.msg("" + data + "", {
					icon: 2
				});
			} else if(!isnull(callback)) {
				callback(JSON.parse(data));
			}
		},
		error: function(data) {
			layer.msg("" + data + "", {
				icon: 2
			});
		}
	});
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if(r != null) return unescape(r[2]);
	return null; //返回参数值
}

//图片缩放
$(function() {
	$.fn.extend({
		showlargeimg: function() {
			var obj = $(this).attr("src"); //获取src
			var window_height = $(window).height(); //判断可视区域高度
			var window_width = $(window).width(); //判断可视区域宽度
			$("body").append("<div class='background_img' style='width:100%;height: 100%;position: fixed;top:0px;left: 0px;z-index: 99;background-color: #000;opacity: 0.5'></div>" +
					"<div id='largeimg' style='position: fixed;z-index: 100;'></div>") //添加模态大图
			$("#largeimg").html("<div><img src='" + obj + "'/></div>"); //添加大图
			var thisheight = parseInt($("#largeimg div img").height()); //原图高度number类型
			var thiswidth = parseInt($("#largeimg div img").width()); //原图宽度number类型
			//判断是否超宽
			if(($("#largeimg div img").width()) >= window_width && ($("#largeimg div img").height()) < window_height) { //图片超宽，不超高
				$("#largeimg div img").css("width", (window_width * 0.8) + "px");
			} else if(($("#largeimg div img").width()) >= window_width && ($("#largeimg div img").height()) >= window_height) { //图片超高超宽
				if(($("#largeimg div img").width() - window_width) < ($("#largeimg div img").height() - window_height)) { //图片超高比例大于超宽比例
					var h = thisheight / thiswidth;
					$("#largeimg div img").css("height", (window_height * 0.8) + "px");
					$("#largeimg div img").css("width", $("#largeimg div img").width() * h + "px");
				} else { //推按超高比例小于超宽比例
					$("#largeimg div img").css("width", (window_width * 0.8) + "px");
				}
			} else if(($("#largeimg div img").width()) < window_width && ($("#largeimg div img").height()) >= window_height) { //图片超高不超宽
				var h = thisheight / thiswidth;
				$("#largeimg div img").css("heigth", (window_height * 0.8) + "px");
				$("#largeimg div img").css("width", $("#largeimg div img").width() * h + "px");
			}
			$(document.body).css("overflow", "hidden");
			$("body").css("padding-right", "17px");
			$(".other-page").css("padding-right", "17px");
			var heights = (window_height - $("#largeimg").height()) / 2;
			var widths = (window_width - $("#largeimg").width()) / 2;
			$("#largeimg").css("left", widths + "px"); //模态水平居中
			$("#largeimg").css("top", heights + "px"); //模态垂直居中
			//关闭
			$(".background_img").click(function() {
				$(this).remove();
				$("#largeimg").remove();
				$(document.body).css("overflow", "");
				$("body").css("padding-right", "0px");
				$(".other-page").css("padding-right", "0px");
			});
			$("#largeimg").click(function() {
				$(this).remove();
				$(".background_img").remove();
				$(document.body).css("overflow", "");
				$("body").css("padding-right", "0px");
				$(".other-page").css("padding-right", "0px");
			})
		}
	});
});