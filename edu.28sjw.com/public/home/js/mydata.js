function createData() { //模板加载
	$(".pages").css("display", "none");
	$(".view-content-notbodys").html("");
	layer.closeAll('loading');
	var videoPage = new createVideoPage();
	videoPage.setSectionByType("good1", 4);
	//切换选项卡
	$(document).click(function(e) {
		var e = e || event;
		if($(e.target).get(0).className != "select-xiala" && $(e.target).parent().get(0).className != "select-xiala") {
			$(".xiala").css("display", "none")
		}
	})
	$(".tabbar .btn-item").each(function() {
		$(this).click(function() {
			$(this).addClass("color2cb").siblings().removeClass("color2cb");
			var aleft = $(this).offset().left - $(".my-data").offset().left;
			var awidth = $(this).css("width");
			//			$(this).css("color","#2CB82C").siblings().css("color","#333");
			$(".tabbar .pointer").animate({
				"left": aleft,
				"width": awidth
			});
			$(".warning").css("display", "none");
			if($(this).hasClass("kc")) {
				$(".zhanghu").css("display", "none");
				$(".kecheng").css("display", "block");
				$(".geren").css("display", "none");
			} else if($(this).hasClass("zh")) {
				$(".zhanghu").css("display", "block");
				$(".geren").css("display", "none");
				$(".kecheng").css("display", "none");
			} else {
				$(".geren").css("display", "block");
				$(".kecheng").css("display", "none");
				$(".zhanghu").css("display", "none");
			}
		})
	});
	addgetdata();
	$(".xiala").css("display", "none");
	//滚动条
	$(".xiala").niceScroll({
		cursorcolor: "#ccc", //#CC0071 光标颜色
		cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
		touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
		cursorwidth: "5px", //像素光标的宽度
		autohidemode: "scroll", //离开内容隐藏
		cursorborder: "0", //     游标边框css定义
		cursorborderradius: "5px", //以像素为光标边界半径
		autohidemode: true //是否隐藏滚动条
	});
	//		$(".myradio5").click(function(){
	//			$(".myradioipt").attr("disabled",false);
	//		})
	//		$(".myradio0,.myradio1,.myradio2,.myradio3,.myradio4").click(function(){
	//			$(".myradioipt").val("");
	//			$(".myradioipt").attr("disabled",true);
	//		})

	//模态单选框
	$(".cy-myprofile-myfom-dv-radio-zu label").click(function() {
		$(this).find(".radio-cover em").addClass("active").parent().parent().siblings().find(".radio-cover em").removeClass("active");
	})
	$(".cy-myprofile-myfom-dv-radio-zu2 label").click(function() {
		$(this).find(".radio-cover em").addClass("active").parent().parent().siblings().find(".radio-cover em").removeClass("active");
	})

	//下拉框模态
	$(".select-xiala").each(function() {
		$(this).on("click", function() {
			if($(this).siblings().css("display") == "none") {
				$(".xiala").css("display", "none");
				$(this).siblings().css("display", "block");
			} else {
				$(this).siblings().css("display", "none");
			}
		})
	});
	$(".xiala >span").on("click", function() {
			var text = $(this).html();

			$(this).parent().siblings().html(text);
			$(".xiala").css("display", "none");
			if($(this).attr("id") != undefined) {
				$(this).parent().siblings().attr({
					"data-id": $(this).attr("id"),
					"title": $(this).html()
				});
			}
		})
		//第一个部分的提交函数
	$("#geren").click(function() { //点击保存
		$.ajax({
			type: "get",
			url: bath + "/online/user/isAlive",
			async: false,
			success: function(data) {
				if(data.success === true) {	
					geren();
				} else {
					$('#login').modal('show');$('#login').css("display", "block");
					$(".loginGroup .logout").css("display", "block");
					$(".loginGroup .login").css("display", "none");
					return false;
				}
			}
		});
	});
	//第二个部分的提交函数
	$("#kecheng").click(function() { //点击保存
		$.ajax({
			type: "get",
			url: bath + "/online/user/isAlive",
			async: false,
			success: function(data) {
				if(data.success === true) {	
					kecheng();
				} else {
					$('#login').modal('show');$('#login').css("display", "block");
					$(".loginGroup .logout").css("display", "block");
					$(".loginGroup .login").css("display", "none");
					return false;
				}
			}
		});		
	});
	//课程大纲页职业信息的填写提交
	$("#save").click(function() {
		$.ajax({
			type: "get",
			url: bath + "/online/user/isAlive",
			async: false,
			success: function(data) {
				if(data.success === true) {	
					save();
				} else {
					$('#login').modal('show');$('#login').css("display", "block");
					$(".loginGroup .logout").css("display", "block");
					$(".loginGroup .login").css("display", "none");
					return false;
				}
			}
		});	
	});
	//取消点击函数
	$("#cancel").click(function() {
		location.reload();
	});
	$("#cancel2").click(function() {
		addgetdata();
		return $(".kc").click();
	});
	$(".mypassword-g").click(function() {
		$(".form-reset-password").css("display", "block");
		$(".good_resetPwd").css("display", "none");
		$(".form-reset-password2").css("display", "none");
	})
	$("#shengxl").on("click", function() { //修改所在地
		$("#shixl").empty();
		$("#xianxl").empty();
		$("#s_city").html("请选择");
		$("#s_county").html("请选择");
		$("#shixl").append("<span>请选择</span>");
		$("#xianxl").append("<span>请选择</span>");
		$("#shengxl span").unbind().click(function() {
			$("#s_province").html($(this).text());
			if($(this).attr("id") != undefined) {
				$("#s_province").attr("data-id", "0").attr({
					"data-id": $(this).attr("id"),
					"title": $(this).html()
				});
			} else {
				$(this).parent().siblings().attr({
					"data-id": "",
					"title": ""
				});
			};

			$("#shengxl").hide();
			RequestService("/online/user/getCityByProId", "GET", {
				proId: $("#s_province").attr("data-id")
			}, function(data) {
				$("#s_city").html("请选择").attr({
					"data-id": "",
					"title": ""
				});
				$("#s_county").html("请选择").attr({
					"data-id": "",
					"title": ""
				});
				for(var i = 0; i < data.resultObject.length; i++) {
					$("#shixl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
				}
				//省份修改专用赋值事件
				$("#shixl span").on("click", function() {
					var text = $(this).html();
					$(this).parent().siblings().html(text);
					$(".xiala").css("display", "none");
					if($(this).attr("id") != undefined) {
						$(this).parent().siblings().attr("data-id", "0").attr({
							"data-id": $(this).attr("id"),
							"title": $(this).html()
						});
					} else {
						$(this).parent().siblings().attr({
							"data-id": "",
							"title": ""
						});
					};
				})
			})
		});
	});
	$("#shixl").on("click", function() { //修改城市
		$("#xianxl").empty();
		$("#s_county").html("请选择");
		$("#xianxl").append("<span>请选择</span>")
		RequestService("/online/user/getCityByProId", "GET", {
			proId: $("#s_city").attr("data-id")
		}, function(data) {
			$("#s_county").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			for(var i = 0; i < data.resultObject.length; i++) {
				$("#xianxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
			}
			//省份修改专用赋值事件
			$("#shixl span").on("click", function() {
					var text = $(this).html();
					$(this).parent().siblings().html(text);
					$(".xiala").css("display", "none");
					if($(this).attr("id") != undefined) {
						$(this).parent().siblings().attr("data-id", "0").attr({
							"data-id": $(this).attr("id"),
							"title": $(this).html()
						});
					} else {
						$(this).parent().siblings().attr({
							"data-id": "",
							"title": ""
						});
					}
				})
				//省份修改专用赋值事件
			$("#xianxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr("data-id", "0").attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": ""
					});
				}
			})
		})
	});
}

//时间
//(function($) {
//	$.fn.birthday = function(options) {
//		var opts = $.extend({}, $.fn.birthday.defaults, options); //整合参数
//		var $year = $("#yearxl");
//		var $month = $("#monthxl");
//		var $day = $("#dayxl");
//		MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//		return this.each(function() {
//			var y = 2010;
//			var con = "";
//			//添加年份
//			for(i = y; i >= (y - 60); i--) {
//				con += "<span value='" + i + "'>" + i + "年" + "</span>";
//			}
//
//			$year.append(con);
//			con = "";
//			//添加月份
//			for(i = 1; i <= 12; i++) {
//				con += "<span value='" + i + "'>" + i + "月" + "</span>";
//			}
//			$month.append(con);
//			con = "";
//			//添加日期
//			var n = MonHead[0]; //默认显示第一月
//			for(i = 1; i <= n; i++) {
//				con += "<span value='" + i + "'>" + i + "日" + "</span>";
//			}
//			$day.append(con);
//			$("#year").html(y + "年");
//			$.fn.birthday.change($(this));
//		});
//	};
//	$.fn.birthday.change = function(obj) {
//		obj.on("click", "#yearxl span,#monthxl span", function(e) {
//			var e=e||event;
//			var $year = $("#yearxl");
//			var $month = $("#monthxl");
//			var $day = $("#dayxl");
//			var selectedYear = parseInt($("#year").html());
//			var selectedMonth = parseInt($("#month").html());
//			if($(e.target).parent().get(0).id=="yearxl"){
//				$("#month").html("请选择");
//				$("#day").html("请选择");
//			}else if($(e.target).parent().get(0).id=="monthxl"){
//				$("#day").html("请选择");
//			}
//			if(selectedMonth == 2 && $.fn.birthday.IsRunYear(selectedYear)) { //如果是闰年
//				$day.empty();
//				var c = "";
//				for(var i = 1; i <= 29; i++) {
//					c += "<span value='" + i + "'>" + i + "日" + "</span>";
//				}
//				$day.append(c);
//			} else { //如果不是闰年也没选2月份
//				$day.empty();
//				var c = "";
//				for(var i = 1; i <= MonHead[selectedMonth - 1]; i++) {
//					c += "<span value='" + i + "'>" + i + "日" + "</span>";
//				}
//				$day.append(c);
//			}
//			$("#dayxl>span").on("click", function() {
//				var text = $(this).html();
//
//				$(this).parent().siblings().html(text);
//				$(".birthday-warn").css("display","none");
//				$(".xiala").css("display", "none");
//				if($(this).attr("id") != undefined) {
//					$(this).parent().siblings().attr({
//						"data-id": $(this).attr("id"),
//						"title": $(this).html()
//					});
//				}
//			})
//		});
//	};
//	$.fn.birthday.IsRunYear = function(selectedYear) {
//		return(0 == selectedYear % 4 && (selectedYear % 100 != 0 || selectedYear % 400 == 0));
//	};
//	$.fn.birthday.defaults = {
//		year: "year",
//		month: "month",
//		day: "day"
//	};
//})(jQuery);

function addgetdata() { //回填数据
	RequestService("/online/user/getUserData", "GET", "", function(data) {
		if(data.resultObject.nickName == undefined) {
			$(".firsname").val("博小白");
		} else {
			$(".firsname").val(data.resultObject.nickName);
		};
		if(data.resultObject.autograph == undefined) {
			$(".mycytextarea").val("");
		} else {
			$(".mycytextarea").val(data.resultObject.autograph);
		};
		//如果没数据就提示填写信息
		if(data.resultObject.realName==""||data.resultObject.realName==null){
			$(".personBack").show();
		}
		//存放appid
		$(".kc").attr("data-applyId", data.resultObject.applyId);
		$(".username").val(data.resultObject.loginName);
		$(".signature").val(data.resultObject.loginName);

		$(".truename").val(data.resultObject.realName);
		$(".emailname").val(data.resultObject.email);
		$(".phonenumber").val(data.resultObject.mobile);
		$(".QQnumber").val(data.resultObject.qq);
		if(data.resultObject.sex == 1) {
			$("#myradio1").attr("checked", true);
			$(".cy-myprofile-myfom-dv-radio-zu .radio-cover em").removeClass("active");
			$("#myradio1").parent().find(".radio-cover em").addClass("active");
		} else if(data.resultObject.sex == 0) {
			$("#myradio2").attr("checked", true);
			$(".cy-myprofile-myfom-dv-radio-zu .radio-cover em").removeClass("active");
			$("#myradio2").parent().find(".radio-cover em").addClass("active");
		} else {
			$("#myradio1,#myradio2").attr("checked", false);
			$(".cy-myprofile-myfom-dv-radio-zu .radio-cover em").removeClass("active");
		}
		//		if(data.resultObject.birthdayStr != null&&data.resultObject.birthdayStr != "") {
		//			var birth = data.resultObject.birthdayStr.split("-");
		//			$("#year").html(birth[0] + "年");
		//			$("#month").html(birth[1] + "月");
		//			$("#day").html(birth[2] + "日");
		//		}else{
		//			$("#year").html("请选择");
		//			$("#month").html("请选择");
		//			$("#day").html("请选择");
		//		}
		if(data.resultObject.occupation == "") {
			$(".cy-myprofile-myfom-dv-radio-zu2 input").attr("checked", false);
		} else {
			switch(data.resultObject.occupation) {
				case 24:
					$(".myradio5").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					$(".myradio5").parent().find(".radio-cover em").addClass("active");
					//						$(".myradioipt").attr("disabled",false).val(data.resultObject.occupationOther)
					break;
				case 23:
					$(".myradio4").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					$(".myradio4").parent().find(".radio-cover em").addClass("active");
					//						$(".myradioipt").attr("disabled",true);
					break;
				case 22:
					$(".myradio3").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					$(".myradio3").parent().find(".radio-cover em").addClass("active");
					break;
				case 21:
					$(".myradio2").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					$(".myradio2").parent().find(".radio-cover em").addClass("active");
					break;
				case 20:
					$(".myradio1").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover").removeClass("active");
					$(".myradio1").parent().find(".radio-cover").addClass("active");
					break;
				case 19:
					$(".myradio0").attr("checked", true);
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					$(".myradio0").parent().find(".radio-cover em").addClass("active");
					break;
				default:
					$(".cy-myprofile-myfom-dv-radio-zu2 .radio-cover em").removeClass("active");
					break;
			}
		}

		$(".mycompany").val(data.resultObject.company)
		switch(data.resultObject.jobyearId) {
			case 7:
				$("#food4").html("5年以上");
				break;
			case 6:
				$("#food4").html("3~5年");
				break;
			case 5:
				$("#food4").html("1~3年");
				break;
			case 4:
				$("#food4").html("1年以下");
				break;
			case 3:
				$("#food4").html("应届生");
				break;
			case 2:
				$("#food4").html("在校生");
				break;
			default:
				$("#food4").html("请选择");
				break;
		}
		$("#food5").html("请选择").attr("data-id", "0");
		$("#food5xl").html("").append("<span>请选择</span>");
		for(var i = 0; i < data.resultObject.studyTarget.length; i++) {
			$("#food5xl").append("<span id=" + data.resultObject.studyTarget[i].id + ">" + data.resultObject.studyTarget[i].value + "</span>")
		}
		if(data.resultObject.target != "") {
			$("#food5").html($("#food5xl span[id=" + data.resultObject.target + "]").html()).attr("data-id", data.resultObject.target);
		} else {}

		//学历下拉事件
		$("#record").html("请选择").attr("data-id", "0");
		$("#recordxl").html("").append("<span>请选择</span>")
		for(var i = 0; i < data.resultObject.education.length; i++) {
			$("#recordxl").append("<span id=" + data.resultObject.education[i].value + ">" + data.resultObject.education[i].name + "</span>")
		}
		if(data.resultObject.educationId != "") {
			$("#record").html($("#recordxl span[id=" + data.resultObject.educationId + "]").html()).attr("data-id", data.resultObject.educationId);
		} else {}
		$("#recordxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if(text != "请选择") {
					$(".college-warn").css("display", "none");
				} else {
					$(".college-warn").css({
						"display": "inline-block",
						"overflow": "hidden"
					});
				}
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});
				}
			})
			//专业下拉事件
		$("#majorxl").append("<span>请选择</span>");
		if(data.resultObject.major != "") {
			for(var i = 0; i < data.resultObject.major.length; i++) {
				$("#majorxl").append("<span id=" + data.resultObject.major[i].value + ">" + data.resultObject.major[i].name + "</span>")
			}
		}
		if(data.resultObject.majorId != "") {
			$("#major").html($("#majorxl span[id=" + data.resultObject.majorId + "]").html());
		} else {}
		//学习目标的下拉事件
		$("#food5xl span,#recordxl span,#majorxl span").on("click", function() {
			var text = $(this).html();
			$(this).parent().siblings().html(text);
			$(".xiala").css("display", "none");
			if($(this).attr("id") != undefined) {
				$(this).parent().siblings().attr({
					"data-id": $(this).attr("id"),
					"title": $(this).html()
				});
			} else {
				$(this).parent().siblings().attr({
					"data-id": "",
					"title": ""
				});
			}
		})
		if(data.resultObject.fullAddress != undefined) {
			$(".menpaihao").html(data.resultObject.fullAddress);
		} else {
			$(".menpaihao").html("");
		}
		//省市县三级联动
		address(data);
		college(data);
		test();
	});
}

function myoccupation() { //默认选中
	if($('.cy-myprofile-myfom-dv-radio-zu2 input[name="job"]:checked').val()) {
		return $('.cy-myprofile-myfom-dv-radio-zu2 input[name="job"]:checked').val();
	} else {
		return 24;
	}
}

function address(data) {
	$("#s_province").html("请选择").attr({
		"data-id": "",
		"title": ""
	});
	$("#s_city").html("请选择").attr({
		"data-id": "",
		"title": ""
	});
	$("#s_county").html("请选择").attr({
		"data-id": "",
		"title": ""
	});
	$("#shengxl").empty()
	$("#shixl").empty()
	$("#xianxl").empty();
	$("#shengxl").append("<span>请选择</span>")
	$("#shixl").append("<span>请选择</span>")
	$("#xianxl").append("<span>请选择</span>")
	if(data.resultObject.province == "" && data.resultObject.district == "") {
		RequestService("/online/user/getAllProvince", "GET", "", function(t) {
			$("#s_province").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_city").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_county").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#shengxl").empty()
			$("#shixl").empty()
			$("#xianxl").empty()
			$("#shengxl").append("<span>请选择</span>");
			$("#shixl").append("<span>请选择</span>");
			$("#xianxl").append("<span>请选择</span>");
			for(var i = 0; i < t.resultObject.length; i++) {
				$("#shengxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>")
			}
			$("#shengxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});;
				}
				RequestService("/online/user/getCityByProId", "GET", {
					proId: $("#s_province").attr("data-id")
				}, function(data) {
					$("#s_city").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					$("#s_county").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					for(var i = 0; i < data.resultObject.length; i++) {
						$("#shixl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
					}
					//省份修改专用赋值事件
					$("#shixl span").on("click", function() {
						var text = $(this).html();
						$(this).parent().siblings().html(text);
						$(".xiala").css("display", "none");
						if($(this).attr("id") != undefined) {
							$(this).parent().siblings().attr({
								"data-id": $(this).attr("id"),
								"title": $(this).html()
							});
						} else {
							$(this).parent().siblings().attr({
								"data-id": "",
								"title": ""
							});
						}
					})
				})
			})
		})
	} else if(data.resultObject.province == undefined && data.resultObject.district == undefined) {
		RequestService("/online/user/getAllProvince", "GET", "", function(t) {
			$("#s_province").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_city").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_county").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#shengxl").empty()
			$("#shixl").empty()
			$("#xianxl").empty()
			$("#shengxl").append("<span>请选择</span>")
			$("#shixl").append("<span>请选择</span>")
			$("#xianxl").append("<span>请选择</span>")
			for(var i = 0; i < t.resultObject.length; i++) {
				$("#shengxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>")
			}
			$("#shengxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});
				}
				RequestService("/online/user/getCityByProId", "GET", {
					proId: $("#s_province").attr("data-id")
				}, function(data) {
					$("#s_city").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					$("#s_county").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					for(var i = 0; i < data.resultObject.length; i++) {
						$("#shixl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
					}
					//省份修改专用赋值事件
					$("#shixl span").on("click", function() {
						var text = $(this).html();
						$(this).parent().siblings().html(text);
						$(".xiala").css("display", "none");
						if($(this).attr("id") != undefined) {
							$(this).parent().siblings().attr({
								"data-id": $(this).attr("id"),
								"title": $(this).html()
							});
						} else {
							$(this).parent().siblings().attr({
								"data-id": "",
								"title": ""
							});
						}
					})
				})
			})
		})
	} else {
		$("#s_province").html("请选择").attr({
			"data-id": "",
			"title": ""
		});
		$("#s_city").html("请选择").attr({
			"data-id": "",
			"title": ""
		});
		$("#s_county").html("请选择").attr({
			"data-id": "",
			"title": ""
		});
		$("#shengxl").empty()
		$("#shixl").empty()
		$("#xianxl").empty()
		$("#shengxl").append("<span>请选择</span>")
		$("#shixl").append("<span>请选择</span>")
		$("#xianxl").append("<span>请选择</span>")

		RequestService("/online/user/getAllProvince", "GET", "", function(t) {
			$("#s_province").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_city").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#s_county").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			for(var i = 0; i < t.resultObject.length; i++) {
				$("#shengxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>");
				if(t.resultObject[i].id == data.resultObject.province) {
					$("#s_province").html(t.resultObject[i].name).attr("data-id", "0").attr({
						"data-id": t.resultObject[i].id,
						"title": t.resultObject[i].name
					});
				}
			}
			$("#shengxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});
				};
				RequestService("/online/user/getCityByProId", "GET", {
					proId: $("#s_province").attr("data-id")
				}, function(data) {
					$("#s_city").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					$("#s_county").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					for(var i = 0; i < data.resultObject.length; i++) {
						$("#shixl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>");
						if(t.resultObject[i].id == data.resultObject.province) {
							$("#s_city").html(data.resultObject[i].name).attr("data-id", "0").attr({
								"data-id": data.resultObject[i].id,
								"title": data.resultObject[i].name
							});
						}
					}
					//省份修改专用赋值事件
					$("#shixl span").on("click", function() {
						var text = $(this).html();
						$(this).parent().siblings().html(text);
						$(".xiala").css("display", "none");
						if($(this).attr("id") != undefined) {
							$(this).parent().siblings().attr("data-id", "0").attr({
								"data-id": $(this).attr("id"),
								"title": $(this).html()
							});
						} else {
							$(this).parent().siblings().attr({
								"data-id": "",
								"title": ""
							});
						}
					})
				})
			})

			$("#shixl").append("<span>请选择</span>")
			RequestService("/online/user/getCityByProId", "GET", {
				proId: $("#s_province").attr("data-id")
			}, function(y) {
				$("#s_county").html("请选择").attr({
					"data-id": "",
					"title": ""
				});
				$("#shixl").empty()
				$("#xianxl").empty()
				for(var i = 0; i < y.resultObject.length; i++) {
					$("#shixl").append("<span id=" + y.resultObject[i].id + " title=" + y.resultObject[i].name + ">" + y.resultObject[i].name + "</span>");
					if(y.resultObject[i].id == data.resultObject.district) {
						$("#s_city").html(y.resultObject[i].name).attr("data-id", "0").
						attr({
							"data-id": y.resultObject[i].id,
							"title": y.resultObject[i].name
						});
					}
				}
				$("#shixl span").on("click", function() {
					var text = $(this).html();
					$(this).parent().siblings().html(text);
					$(".xiala").css("display", "none");
					if($(this).attr("id") != undefined) {
						$(this).parent().siblings().attr({
							"data-id": $(this).attr("id"),
							"title": $(this).html()
						});
					} else {
						$(this).parent().siblings().attr({
							"data-id": "",
							"title": ""
						});
					};
					RequestService("/online/user/getCityByProId", "GET", {
						proId: $("#s_city").attr("data-id")
					}, function(data) {
						for(var i = 0; i < data.resultObject.length; i++) {
							$("#xianxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
						}
					})
				})
				$("#xianxl").append("<span>请选择</span>")
				RequestService("/online/user/getCityByProId", "GET", {
					proId: $("#s_city").attr("data-id")
				}, function(u) {
					$("#s_county").html("请选择").attr({
						"data-id": "",
						"title": ""
					});
					$("#xianxl").empty()
					for(var i = 0; i < u.resultObject.length; i++) {
						$("#xianxl").append("<span id=" + u.resultObject[i].id + " title=" + u.resultObject[i].name + ">" + u.resultObject[i].name + "</span>");
						if(u.resultObject[i].id == data.resultObject.city) {
							$("#s_county").html(u.resultObject[i].name).attr("data-id", "0").attr({
								"data-id": u.resultObject[i].id,
								"title": u.resultObject[i].name
							});
						}
					}
					$("#xianxl span").on("click", function() {
						var text = $(this).html();
						$(this).parent().siblings().html(text);
						$(".xiala").css("display", "none");
						if($(this).attr("id") != undefined) {
							$(this).parent().siblings().attr("data-id", "0").attr({
								"data-id": $(this).attr("id"),
								"title": $(this).html()
							});
						} else {
							$(this).parent().siblings().attr({
								"data-id": ""
							});
						}
					})
				})
			});
		});
	}
}

function college(data) {
	$("#rq_province").html("请选择").attr("data-id", "");
	$("#rq_city").html("请选择").attr("data-id", "");
	$("#rq_county").html("请选择").attr("data-id", "");
	//		$("#major").html("请选择").attr("data-id","");
	$("#rqsxl").empty();
	$("#rqcxl").empty();
	$("#rqdxxl").empty();
	//		$("#majorxl").empty();
	$("#rqsxl").append("<span>请选择</span>");
	$("#rqcxl").append("<span>请选择</span>");
	$("#rqdxxl").append("<span>请选择</span>");
	//		$("#majorxl").append("<span>请选择</span>");
	if(data.resultObject.applyProvince == "" && data.resultObject.appCity == "") {
		//		RequestService("/online/user/listProvinces", "GET", "", function(t) {
		//			$("#rq_province").html("请选择");
		//			$("#rq_city").html("请选择");
		//			$("#rq_college").html("请选择");
		//			$("#rqsxl").empty()
		//			$("#rqcxl").empty()
		//			$("#rqdxxl").empty()
		//			$("#rqcxl").append("<span>请选择</span>")
		//			$("#rq_college").append("<span>请选择</span>")
		//			for(var i = 0; i < t.resultObject.length; i++) {
		//				$("#rqsxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>")
		//			}
		//			$("#rqsxl span").on("click", function() {
		//				var text = $(this).html();
		//				$(this).parent().siblings().html(text);
		//				$(".xiala").css("display", "none");
		//				if($(this).attr("id") != undefined) {
		//					$(this).parent().siblings().attr({
		//						"data-id": $(this).attr("id"),
		//						"title": $(this).html()
		//					});
		//				}
		//				RequestService("/online/user/listCities", "GET", {
		//					provinceId: $("#rq_province").attr("data-id")
		//				}, function(data) {
		//					for(var i = 0; i < data.resultObject.length; i++) {
		//						$("#rqcxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
		//					}
		//					//省份修改专用赋值事件
		//					$("#rqcxl span").on("click", function() {
		//						var text = $(this).html();
		//						$(this).parent().siblings().html(text);
		//						$(".xiala").css("display", "none");
		//						if($(this).attr("id") != undefined) {
		//							$(this).parent().siblings().attr({
		//								"data-id": $(this).attr("id"),
		//								"title": $(this).html()
		//							});
		//						}
		//					})
		//				})
		//			})
		//		})
		sheng();
	} else if(data.resultObject.applyProvince == undefined && data.resultObject.appCity == undefined) {
		//		RequestService("/online/user/listProvinces", "GET", "", function(t) {
		//			$("#rq_province").html("请选择");
		//			$("#rq_city").html("请选择");
		//			$("#rq_county").html("请选择");
		//			$("#rqsxl").empty()
		//			$("#rqcxl").empty()
		//			$("#rqdxxl").empty()
		//			$("#rqsxl").append("<span>请选择</span>")
		//			$("#rqcxl").append("<span>请选择</span>")
		//			$("#rqdxxl").append("<span>请选择</span>")
		//			for(var i = 0; i < t.resultObject.length; i++) {
		//				$("#rqsxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>")
		//			}
		//			$("#rqsxl span").on("click", function() {
		//				var text = $(this).html();
		//				$(this).parent().siblings().html(text);
		//				$(".xiala").css("display", "none");
		//				if($(this).attr("id") != undefined) {
		//					$(this).parent().siblings().attr({
		//						"data-id": $(this).attr("id"),
		//						"title": $(this).html()
		//					});
		//				}
		//				RequestService("/online/user/listCities", "GET", {
		//					provinceId: $("#rq_province").attr("data-id")
		//				}, function(data) {
		//					$("#rqcxl").empty();
		//					for(var i = 0; i < data.resultObject.length; i++) {
		//						$("#rqcxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
		//					}
		//					//省份修改专用赋值事件
		//					$("#rqcxl span").on("click", function() {
		//						var text = $(this).html();
		//						$(this).parent().siblings().html(text);
		//						$(".xiala").css("display", "none");
		//						if($(this).attr("id") != undefined) {
		//							$(this).parent().siblings().attr({
		//								"data-id": $(this).attr("id"),
		//								"title": $(this).html()
		//							});
		//						}
		//					})
		//				})
		//			})
		//		})
		sheng();
	} else {
		$("#rq_province").html("请选择").attr("data-id", "");
		$("#rq_city").html("请选择").attr("data-id", "");
		$("#rq_college").html("请选择").attr("data-id", "");
		//		$("#major").html("请选择").attr("data-id","");
		$("#rqsxl").empty();
		$("#rqcxl").empty();
		$("#rqdxxl").empty();
		//		$("#majorxl").empty();
		$("#rqsxl").append("<span>请选择</span>");
		$("#rqcxl").append("<span>请选择</span>");
		$("#rqdxxl").append("<span>请选择</span>");
		//		$("#majorxl").append("<span>请选择</span>");

		//		RequestService("/online/user/listProvinces", "GET", "", function(t) {
		//			for(var i = 0; i < t.resultObject.length; i++) {
		//				$("#rqsxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>");
		//				if(t.resultObject[i].id == data.resultObject.province) {
		//					$("#rq_province").html(t.resultObject[i].name).attr({
		//						"data-id": t.resultObject[i].id,
		//						"title": t.resultObject[i].name
		//					});
		//				}
		//			}
		//			$("#rqsxl span").on("click", function() {
		//				var text = $(this).html();
		//				$(this).parent().siblings().html(text);
		//				$(".xiala").css("display", "none");
		//				if($(this).attr("id") != undefined) {
		//					$(this).parent().siblings().attr({
		//						"data-id": $(this).attr("id"),
		//						"title": $(this).html()
		//					});
		//				};
		//				RequestService("/online/user/listCities", "GET", {
		//					provinceId: $("#rq_province").attr("data-id")
		//				}, function(data) {
		//					$("#rqcxl").empty();
		//					$("#rqcxl").append("<span>请选择</span>")
		//					$("#rqdxxl").append("<span>请选择</span>")
		//					for(var i = 0; i < data.resultObject.length; i++) {
		//						$("#rqcxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
		//					}
		//					//省份修改专用赋值事件
		//					$("#rqcxl span").on("click", function() {
		//						var text = $(this).html();
		//						$(this).parent().siblings().html(text);
		//						$(".xiala").css("display", "none");
		//						if($(this).attr("id") != undefined) {
		//							$(this).parent().siblings().attr({
		//								"data-id": $(this).attr("id"),
		//								"title": $(this).html()
		//							});
		//						}
		//						$("#rqcxl").append("<span>请选择</span>")
		//			RequestService("/online/user/listCities", "GET", {
		//				provinceId: $("#rq_province").attr("data-id")
		//			}, function(y) {
		//				$("#rqcxl").empty()
		//				$("#rqdxxl").empty()
		//				for(var i = 0; i < y.resultObject.length; i++) {
		//					$("#rqcxl").append("<span id=" + y.resultObject[i].id + " title=" + y.resultObject[i].name + ">" + y.resultObject[i].name + "</span>");
		//					if(y.resultObject[i].id == data.resultObject.district) {
		//						$("#rq_city").html(y.resultObject[i].name).
		//						attr({
		//							"data-id": y.resultObject[i].id,
		//							"title": y.resultObject[i].name
		//						});
		//					}
		//				}
		//				$("#rqcxl span").on("click", function() {
		//					var text = $(this).html();
		//					$(this).parent().siblings().html(text);
		//					$(".xiala").css("display", "none");
		//					if($(this).attr("id") != undefined) {
		//						$(this).parent().siblings().attr({
		//							"data-id": $(this).attr("id"),
		//							"title": $(this).html()
		//						});
		//					};
		//					RequestService("/online/user/listSchools", "GET", {
		//						cityId: $("#rq_city").attr("data-id")
		//					}, function(data) {
		//						for(var i = 0; i < data.resultObject.length; i++) {
		//							$("#rqdxxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
		//						}
		//					})
		//				})
		//				$("#rqdxxl").append("<span>请选择</span>")
		//				RequestService("/online/user/listSchools", "GET", {
		//					cityId: $("#rq_city").attr("data-id")
		//				}, function(u) {
		//					$("#rqdxxl").empty()
		//					for(var i = 0; i < u.resultObject.length; i++) {
		//						$("#rqdxxl").append("<span id=" + u.resultObject[i].id + " title=" + u.resultObject[i].name + ">" + u.resultObject[i].name + "</span>");
		//						if(u.resultObject[i].id == data.resultObject.city) {
		//							$("#rq_college").html(u.resultObject[i].name).attr({
		//								"data-id": u.resultObject[i].id,
		//								"title": u.resultObject[i].name
		//							});
		//						}
		//					}
		//					$("#rqdxxl span").on("click", function() {
		//						var text = $(this).html();
		//						$(this).parent().siblings().html(text);
		//						$(".xiala").css("display", "none");
		//						if($(this).attr("id") != undefined) {
		//							$(this).parent().siblings().attr({
		//								"data-id": $(this).attr("id"),
		//								"title": $(this).html()
		//							});
		//						}
		//						RequestService("/online/user/listSpecialities", "GET", {
		//							schoolId: $("#rq_college").attr("data-id")
		//						}, function(data) {
		//							$("#majorxl").html("");
		//							$("#majorxl").append("<span>请选择</span>")
		//							for(var i = 0; i < data.resultObject.length; i++) {
		//								$("#majorxl").append("<span id=" + data.resultObject[i].id + " title=" + data.resultObject[i].name + ">" + data.resultObject[i].name + "</span>")
		//							};
		//							$("#majorxl span").on("click", function() {
		//								var text = $(this).html();
		//								$(this).parent().siblings().html(text);
		//								$(".xiala").css("display", "none");
		//								if($(this).attr("id") != undefined) {
		//									$(this).parent().siblings().attr({
		//										"data-id": $(this).attr("id"),
		//										"title": $(this).html()
		//									});
		//								}
		//							});	
		//						})
		//					})
		//				})
		//			});
		//					});
		//				})
		//			})
		/////////////////////////////////////////////
		//		});
		sheng();
	}

	function sheng() {
		RequestService("/online/user/listProvinces", "GET", "", function(t) {
			for(var i = 0; i < t.resultObject.length; i++) {
				$("#rqsxl").append("<span id=" + t.resultObject[i].id + " title=" + t.resultObject[i].name + ">" + t.resultObject[i].name + "</span>");
				if(t.resultObject[i].id == data.resultObject.applyProvince) {
					$("#rq_province").html(t.resultObject[i].name).attr({
						"data-id": t.resultObject[i].id,
						"title": t.resultObject[i].name
					});
				}
			}
			shi($("#rq_province").attr("data-id"));
			$("#rqsxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});
				};
				shi($("#rq_province").attr("data-id"));
			})
		})
	}

	function shi(id) {
		RequestService("/online/user/listCities", "GET", {
			provinceId: id
		}, function(y) {
			$("#rq_city").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			$("#rq_college").html("请选择").attr({
				"data-id": "",
				"title": ""
			});
			//				$("#major").html("请选择").attr("data-id","");
			$("#rqcxl").empty()
			$("#rqdxxl").empty()
			$("#rqcxl").append("<span>请选择</span>")
			$("#rqdxxl").append("<span>请选择</span>")
			for(var i = 0; i < y.resultObject.length; i++) {
				$("#rqcxl").append("<span id=" + y.resultObject[i].id + " title=" + y.resultObject[i].name + ">" + y.resultObject[i].name + "</span>");
				if(y.resultObject[i].id == data.resultObject.appCity) {
					$("#rq_city").html(y.resultObject[i].name).
					attr({
						"data-id": y.resultObject[i].id,
						"title": y.resultObject[i].name
					});
				}
			}
			daxue($("#rq_city").attr("data-id"));
			$("#rqcxl span").on("click", function() {
				var text = $(this).html();
				$(this).parent().siblings().html(text);
				$(".xiala").css("display", "none");
				if($(this).attr("id") != undefined) {
					$(this).parent().siblings().attr({
						"data-id": $(this).attr("id"),
						"title": $(this).html()
					});
				} else {
					$(this).parent().siblings().attr({
						"data-id": "",
						"title": ""
					});
				};
				daxue($("#rq_city").attr("data-id"));
			});
		});
	}

	function daxue(id) {
		RequestService("/online/user/listSchools", "GET", {
				cityId: id
			}, function(u) {
				$("#rq_college").html("请选择").attr({
					"data-id": "",
					"title": ""
				});
				//					$("#major").html("请选择").attr("data-id","");
				$("#rqdxxl").empty();
				$("#rqdxxl").append("<span>请选择</span>")
				for(var i = 0; i < u.resultObject.length; i++) {
					$("#rqdxxl").append("<span id=" + u.resultObject[i].id + " title=" + u.resultObject[i].name + ">" + u.resultObject[i].name + "</span>");
					if(u.resultObject[i].id == data.resultObject.schoolId) {
						$("#rq_college").html(u.resultObject[i].name).attr({
							"data-id": u.resultObject[i].id,
							"title": u.resultObject[i].name
						});
					}
				}
				$("#rqdxxl span").on("click", function() {
					var text = $(this).html();
					$(this).parent().siblings().html(text);
					$(".xiala").css("display", "none");
					if($(this).attr("id") != undefined) {
						$(this).parent().siblings().attr({
							"data-id": $(this).attr("id"),
							"title": $(this).html()
						});
					} else {
						$(this).parent().siblings().attr({
							"data-id": "",
							"title": ""
						});
					};
					//专业四级联动1.2.3版本
					//						RequestService("/online/user/listSpecialities", "GET", {
					//							schoolId: $("#rq_college").attr("data-id")
					//						}, function(m) {
					//							$("#major").html("请选择").attr("data-id","");
					//							$("#majorxl").html("");
					//							$("#majorxl").append("<span>请选择</span>")
					//							for(var i = 0; i < m.resultObject.length; i++) {
					//								$("#majorxl").append("<span id=" + m.resultObject[i].id + " title=" + m.resultObject[i].name + ">" + m.resultObject[i].name + "</span>");
					//								if(m.resultObject[i].id == data.resultObject.majorId) {
					//									$("#major").html(m.resultObject[i].name).attr({
					//										"data-id": m.resultObject[i].id,
					//										"title": m.resultObject[i].name
					//									});
					//								}
					//							};
					//							$("#majorxl span").on("click", function() {
					//								var text = $(this).html();
					//								$(this).parent().siblings().html(text);
					//								$(".xiala").css("display", "none");
					//								if($(this).attr("id") != undefined) {
					//									$(this).parent().siblings().attr({
					//										"data-id": $(this).attr("id"),
					//										"title": $(this).html()
					//									});
					//								}else{
					//									$(this).parent().siblings().attr({
					//										"data-id": "",
					//										"title": ""
					//									});
					//								};
					//							});	
					//						});
				});
				//专业四级联动1.2.3版本
				//					RequestService("/online/user/listSpecialities", "GET", {
				//							schoolId: $("#rq_college").attr("data-id")
				//						}, function(m) {
				//							$("#majorxl").html("");
				//							$("#majorxl").append("<span>请选择</span>")
				//							for(var i = 0; i < m.resultObject.length; i++) {
				//								$("#majorxl").append("<span id=" + m.resultObject[i].id + " title=" + m.resultObject[i].name + ">" + m.resultObject[i].name + "</span>");
				//								if(m.resultObject[i].id == data.resultObject.majorId) {
				//									$("#major").html(m.resultObject[i].name).attr({
				//										"data-id": m.resultObject[i].id,
				//										"title": m.resultObject[i].name
				//									});
				//								}
				//							};
				//							$("#majorxl span").on("click", function() {
				//								var text = $(this).html();
				//								$(this).parent().siblings().html(text);
				//								$(".xiala").css("display", "none");
				//								if($(this).attr("id") != undefined) {
				//									$(this).parent().siblings().attr({
				//										"data-id": $(this).attr("id"),
				//										"title": $(this).html()
				//									});
				//								}else{
				//									$(this).parent().siblings().attr({
				//										"data-id": "",
				//										"title": ""
				//									});
				//								};
				//							});	
				//					});
			})
			//专业四级联动
			//		RequestService("/online/user/listSpecialities", "GET", {
			//			schoolId: $("#rq_college").attr("data-id")
			//		}, function(m) {
			//			$("#majorxl").html("");
			//			$("#majorxl").append("<span>请选择</span>")
			//			for(var i = 0; i < m.resultObject.length; i++) {
			//				$("#majorxl").append("<span id=" + m.resultObject[i].id + " title=" + m.resultObject[i].name + ">" + m.resultObject[i].name + "</span>");
			//				if(m.resultObject[i].id == data.resultObject.majorId) {
			//					$("#major").html(m.resultObject[i].name).attr({
			//						"data-id": m.resultObject[i].id,
			//						"title": m.resultObject[i].name
			//					});
			//				}
			//			};
			//			$("#majorxl span").on("click", function() {
			//				var text = $(this).html();
			//				$(this).parent().siblings().html(text);
			//				$(".xiala").css("display", "none");
			//				if($(this).attr("id") != undefined) {
			//					$(this).parent().siblings().attr({
			//						"data-id": $(this).attr("id"),
			//						"title": $(this).html()
			//					});
			//				}
			//			});	
			//		});
	}
}

function shijian() { //调用时间
	switch($("#food4").text()) {
		case "5年以上":
			return 7;
			break;
		case "3~5年":
			return 6;
			break;
		case "1~3年":
			return 5;
			break;
		case "1年以下":
			return 4;
			break;
		case "应届生":
			return 3;
			break;
		case "在校生":
			return 2;
			break;
		default:
			return 1;
			break;
	}
}

function test() {
	//昵称
	$(".firsname").on("blur", function() {
		var value = $(".firsname").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		//昵称不能能有空格
		var pattern = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
		var numberReg = /^\d{4,20}$/; //纯数字验证
		//昵称不能为空
		RequestService("/online/user/checkNickName", "get", {
			nickName: value
		}, function(data) {
			if(value == "") {
				$(".nick-warn").text("用户名不能为空").css("display", "inline-block");
				return false;
			} else if(!pattern.test(value)) {
				$(".nick-warn").text('格式错误,仅支持汉字、字母、数字、"-"、"_"的组合').css("display", "inline-block");
				return false;
			} else if(numberReg.test(value)) {
				$(".nick-warn").text('用户名不能是纯数字，请重新输入！').css("display", "inline-block");
				return false;
			} else if(nickName() < 4 || nickName() > 20) {
				$(".nick-warn").text("支持中文、字母、数字、'-'、'_'的组合，4-20个字符").css("display", "inline-block");
				return false;
			} else if(data.resultObject == true) {
				$(".nick-warn").text("用户名已存在").css("display", "inline-block");
				return false;
			} else {
				$(".nick-warn").css("display", "none");
			}
		})
	})
	$(".firsname").on("focus", function() {
		$(".nick-warn").css("display", "none");
	});
	//	姓名不能为空
	$(".truename").on("blur", function() {
		var value = $(".truename").val();
		if($.trim(value) == "") {
			$(".true-warn").text("真实姓名不能为空").css("display", "inline-block");
			return false;
		} //昵称大于4位
		else if(value.length < 2) {
			$(".true-warn").text("真实姓名请输入2-7个汉字").css("display", "inline-block");
			return false;
		} else {
			$(".true-warn").css("display", "none");
		}
	});
	$(".truename").on("focus", function() {
		$(".true-warn").css("display", "none");
	});
	//性别
	$('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]').click(function() {
			$(".sex-warn").css("display", "none");
		})
		//手机号验证
	$(".phonenumber").on("blur", function() {
		var phonePatt = /^1[3,4,5,7,8]\d{9}$/gi;
		var value = $.trim($(".phonenumber").val());
		if(value == "") {
			$(".phone-warn").text("手机号不能为空").css("display", "inline-block");
			return false;
		} else if(!phonePatt.test($(".phonenumber").val())) {
			$(".phone-warn").text("手机号格式不正确").css("display", "inline-block");
			return false;
		} else {
			$(".phone-warn").css("display", "none");
		}
	});
	$(".phonenumber").on("focus", function() {
		$(".phone-warn").css("display", "none");
	});
	//email号验证
	$(".emailname").on("blur", function() {
		var emailPatt = /^(\w-*\_*)+@(\w-?)+(\.[a-zA-Z]{2,})+$/;
		var value = $.trim($(".emailname").val());
		if(value == "") {
			$(".email-warn").text("邮箱不能为空").css("display", "inline-block");
			return false;
		} else if(!emailPatt.test($(".emailname").val())) {
			$(".email-warn").text("邮箱格式不正确").css("display", "inline-block");
			return false;
		} else {
			$(".email-warn").css("display", "none");
		}
	})
	$(".emailname").on("focus", function() {
		$(".email-warn").css("display", "none");
	});
	//	QQ号验证
	$(".QQnumber").on("blur", function() {
		var QQPatt = /^[1-9]\d{4,14}$/gi;
		var value = $.trim($(".QQnumber").val());
		if(value == "") {
			$(".QQ-warn").text("QQ号不能为空").css("display", "inline-block");
			return false;
		} else if(!QQPatt.test($(".QQnumber").val())) {
			$(".QQ-warn").text("QQ号格式不正确").css("display", "inline-block");
			return false;
		} else {
			$(".QQ-warn").css("display", "none");
		}
	})
	$(".QQnumber").on("focus", function() {
		$(".QQ-warn").css("display", "none");
	});
};
//用户名长度
function nickName() {
	var yonghuReg = /([\u4e00-\u9fa5]+)|(\w+)|([-]+)/g;
	var yonghuNameLength = 0;
	var yonghuName = $(".firsname").val().trim();
	var arr = [];
	yonghuName.replace(yonghuReg, function(a, hanzi, number, zXian) {
		if(hanzi != undefined) {
			var hanziL = hanzi.length * 2;
			arr.push(hanziL);
		}
		if(number != undefined) {
			var numberL = number.length;
			arr.push(numberL);
		}
		if(zXian != undefined) {
			var zXianL = zXian.length;
			arr.push(zXianL);
		}
	});
	for(var i = 0; i < arr.length; i++) {
		yonghuNameLength += arr[i];
	}
	return yonghuNameLength;

}

function geren() {
	RequestService("/online/user/checkNickName", "get", {
		nickName: $.trim($(".firsname").val())
	}, function(data) {
		$(".warning").css("display", "none");
		var value = $(".firsname").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		//昵称不能为空
		if(value == "") {
			$(".nick-warn").text("用户名不能为空").css("display", "inline-block");
			return false;
		}
		//昵称不能能有空格
		var pattern = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
		var numberReg = /^\d{4,20}$/; //纯数字验证
		if(!pattern.test(value)) {
			$(".nick-warn").text('格式错误,仅支持汉字、字母、数字、"-"、"_"的组合').css("display", "inline-block");
			return false;
		} else if(numberReg.test(value)) {
			$(".nick-warn").text('用户名不能是纯数字，请重新输入！').css("display", "inline-block");
			return false;
		} else if(nickName() < 4 || nickName() > 20) {
			$(".nick-warn").text("支持中文、字母、数字、'-'、'_'的组合，4-20个字符").css("display", "inline-block");
			return false;
		} else if(data.resultObject == true) {
			$(".nick-warn").text("用户名已存在").css("display", "inline-block");
			return false;
		} else {
			$(".nick-warn").css("display", "none");
		}
		var value1 = $(".mycytextarea").val(); // 获取值
		value1 = $.trim(value1); // 用jQuery的trim方法删除前后空格
		//	if($('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]:checked').val() && value && value1 && Number(myoccupation())) {
		if($("#s_province").text() == "请选择") { //判断省
			$("#s_province").attr("data-id", "0");
		}
		if($("#s_city").text() == "请选择") { //判断市
			$("#s_city").attr("data-id", "0");
		}
		if($("#s_county").text() == "请选择") { //判断区
			$("#s_county").attr("data-id", "0");
		}
		if($("#food5").text() == "请选择") { //判断学习目标
			$("#food5").attr("data-id", "0");
		}
		RequestService("/online/user/updateUser", "POST", {
			userId: localStorage.userid,
			nickName: $(".firsname").val(),
			autograph: $(".mycytextarea").val(),
			loginName: $(".username").val(),
			occupation: Number(myoccupation()),
			//						occupationOther: $(".myradioipt").val(),
			jobyearId: shijian(),
			target: $("#food5").attr("data-id"),
			province: $("#s_province").attr("data-id"),
			district: $("#s_city").attr("data-id"),
			city: $("#s_county").attr("data-id"),
			fullAddress: $(".menpaihao").val()
		}, function(data) {

			if(data.resultObject == "修改成功") {
				$(".intro .msg").remove();
				$(".intro").append("<div class='msg' data-maxlengts='11'></div>");
				//				$(".my-data-1").css("display", "none");
				//				$(".view-stack-idea-suc").css("display", "block");
				$(".intro .name").text($(".firsname").val()).attr("title", $(".firsname").val())
				if($.trim($(".mycytextarea").val()) != "") {
					$(".intro .msg0").text($.trim($(".mycytextarea").val())).attr("title", $.trim($(".mycytextarea").val()))
				} else {
					$(".intro .msg0").text("说点什么来彰显你的个性吧……").attr("title", "说点什么来彰显你的个性吧……")
				}

				$(".block-center:eq(1)").text("保存成功");
				$(".loginGroup .name").text($(".firsname").val()).attr("title", $(".firsname").val())
				$(".view-content .view-content-notbodys").html("");
				$(".rrrTips").html("保存成功").css("display", "block");
				setTimeout(function() {
					$(".rrrTips").css("display", "none");
				}, 1500)
			} else {
				//				layer.msg("系统繁忙，请稍后再试 !", {
				//					icon: 2
				//				});
				$(".rrTips").html("系统繁忙，请稍后再试 !").css("display", "block");
				setTimeout(function() {
					$(".rrTips").css("display", "none");
				}, 1500)
			}
		});
		//	} else {
		//		layer.msg("信息不完整", {
		//			icon: 2
		//		});
		//	}
	})
};
//职业大纲的信息提交
function save() {
	var name = true;
	var sex = true;
	//	var birthday=true;
	var phone = true;
	var email = true;
	var QQ = true;
	var college = true;
	var value = $(".truename").val(); // 获取值
	//昵称不能能有空格
	$(".warning").css("display", "none");
	//	昵称不能为空
	if($.trim(value) == "") {
		$(".true-warn").text("真实姓名不能为空").css("display", "inline-block");
		name = false;
	} //昵称大于4位
	else if(value.length < 2) {
		$(".true-warn").text("真实姓名请输入2-7个汉字").css("display", "inline-block");
		name = false;
	}
	//性别验证
	if(!$('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]:checked').val()) {
		$(".sex-warn").css("display", "inline-block");
		sex = false;
	}
	//出生年月日判断
	//	if($("#year").html() == "请选择"||$("#month").html() == "请选择"||$("#day").html() == "请选择") { //判断年
	//		$(".birthday-warn").css("display","inline-block");
	//		birthday=false;
	//	} 

	//手机号验证
	var phonePatt = /^1[3,4,5,7,8]\d{9}$/gi;
	if($.trim($(".phonenumber").val()) == "") {
		$(".phone-warn").text("手机号不能为空").css("display", "inline-block");
		phone = false;
	} else if(!phonePatt.test($(".phonenumber").val())) {
		$(".phone-warn").text("手机号格式不正确").css("display", "inline-block");
		phone = false;
	}
	//email号验证
	var emailPatt = /^(\w-*\_*)+@(\w-?)+(\.[a-zA-Z]{2,})+$/;
	if($.trim($(".emailname").val()) == "") {
		$(".email-warn").text("邮箱不能为空").css("display", "inline-block");
		email = false;
	} else if(!emailPatt.test($(".emailname").val())) {
		$(".email-warn").text("邮箱格式不正确").css("display", "inline-block");
		email = false;
	}
	//	QQ号验证
	var QQPatt = /^[1-9]\d{4,14}$/gi;
	if($.trim($(".QQnumber").val()) == "") {
		$(".QQ-warn").text("QQ号不能为空").css("display", "inline-block");
		QQ = false;
	} else if(!QQPatt.test($(".QQnumber").val())) {
		$(".QQ-warn").text("QQ号格式不正确").css("display", "inline-block");
		QQ = false;
	}
	//学历验证
	if($("#record").text() == "请选择") {
		$(".college-warn").text("请选择学历").css({
			"display": "inline-block",
			"overflow": "hidden"
		});
		college = false;
	}
//	var year = $("#year").html();
//	var month = $("#month").html();
//	var day = $("#day").html();
	if(name && sex && phone && email && QQ && college) {
		RequestService("/online/user/updateApply", "POST", {
			userId: localStorage.userid,
			realName: $.trim($(".truename").val()),
			sex: Number($('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]:checked').val()),
			//			birthday: "" + parseInt(year) + "-" + parseInt(month) + "-" + parseInt(day)+" "+"00:00:00",
			//真实手机      
			mobile: $(".phonenumber").val(),
			//真实email 
			email: $(".emailname").val(),
			//真实QQ 
			qq: $(".QQnumber").val(),
			province: $("#rq_province").attr("data-id"),
			city: $("#rq_city").attr("data-id"),
			schoolId: $("#rq_college").attr("data-id"),
			educationId: $("#record").attr("data-id"),
			majorId: $("#major").attr("data-id")
		}, function(data) {

			if(data.resultObject == "修改成功") {
				$(".personBack").hide();
				$(".rrrTips").html("保存成功").css("display", "block");
				setTimeout(function() {
					$(".rrrTips").css("display", "none");
				}, 1500)
			} else {
				$(".rrTips").html("系统繁忙，请稍后再试 !").css("display", "block");
				setTimeout(function() {
					$(".rrTips").css("display", "none");
				}, 1500)
			}
		})
	} else {
		return false;
	}

}

function kecheng() {
	var name = true;
	var sex = true;
	//	var birthday=true;
	var phone = true;
	var email = true;
	var QQ = true;
	var college = true;
	var value = $(".truename").val(); // 获取值
	//昵称不能能有空格
	$(".warning").css("display", "none");
	//	昵称不能为空
	if($.trim(value) == "") {
		$(".true-warn").text("真实姓名不能为空").css("display", "inline-block");
		name = false;
	} //昵称大于4位
	else if(value.length < 2) {
		$(".true-warn").text("真实姓名请输入2-7个汉字").css("display", "inline-block");
		name = false;
	}
	//性别验证
	if(!$('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]:checked').val()) {
		$(".sex-warn").css("display", "inline-block");
		sex = false;
	}
	//出生年月日判断
	//	if($("#year").html() == "请选择"||$("#month").html() == "请选择"||$("#day").html() == "请选择") { //判断年
	//		$(".birthday-warn").css("display","inline-block");
	//		birthday=false;
	//	} 

	//手机号验证
	var phonePatt = /^1[3,4,5,7,8]\d{9}$/gi;
	if($.trim($(".phonenumber").val()) == "") {
		$(".phone-warn").text("手机号不能为空").css("display", "inline-block");
		phone = false;
	} else if(!phonePatt.test($(".phonenumber").val())) {
		$(".phone-warn").text("手机号格式不正确").css("display", "inline-block");
		phone = false;
	}
	//email号验证
	var emailPatt = /^(\w-*\_*)+@(\w-?)+(\.[a-zA-Z]{2,})+$/;
	if($.trim($(".emailname").val()) == "") {
		$(".email-warn").text("邮箱不能为空").css("display", "inline-block");
		email = false;
	} else if(!emailPatt.test($(".emailname").val())) {
		$(".email-warn").text("邮箱格式不正确").css("display", "inline-block");
		email = false;
	}
	//	QQ号验证
	var QQPatt = /^[1-9]\d{4,14}$/gi;
	if($.trim($(".QQnumber").val()) == "") {
		$(".QQ-warn").text("QQ号不能为空").css("display", "inline-block");
		QQ = false;
	} else if(!QQPatt.test($(".QQnumber").val())) {
		$(".QQ-warn").text("QQ号格式不正确").css("display", "inline-block");
		QQ = false;
	}
	//学历验证
	if($("#record").text() == "请选择") {
		$(".college-warn").text("请选择学历").css({
			"display": "inline-block",
			"overflow": "hidden"
		});
		college = false;
	}
	var year = $("#year").html();
	var month = $("#month").html();
	var day = $("#day").html();
	if(name && sex && phone && email && QQ && college) {
		RequestService("/online/user/updateApply", "POST", {
			userId: localStorage.userid,
			realName: $.trim($(".truename").val()),
			sex: Number($('.cy-myprofile-myfom-dv-radio-zu input[name="gender"]:checked').val()),
			//			birthday: "" + parseInt(year) + "-" + parseInt(month) + "-" + parseInt(day)+" "+"00:00:00",
			//真实手机      
			mobile: $(".phonenumber").val(),
			//真实email 
			email: $(".emailname").val(),
			//真实QQ 
			qq: $(".QQnumber").val(),
			province: $("#rq_province").attr("data-id"),
			city: $("#rq_city").attr("data-id"),
			schoolId: $("#rq_college").attr("data-id"),
			educationId: $("#record").attr("data-id"),
			majorId: $("#major").attr("data-id")
		}, function(data) {

			if(data.resultObject == "修改成功") {
				$(".intro .msg").remove();
				$(".intro").append("<div class='msg' data-maxlengts='11'></div>");
				//				$(".my-data-1").css("display", "none");
				//				$(".view-stack-idea-suc").css("display", "block");
				//				$(".intro .name").text($(".firsname").val()).attr("title", $(".firsname").val());
				//				if($.trim($(".mycytextarea").val())!=""){
				//					$(".intro .msg0").text($.trim($(".mycytextarea").val())).attr("title", $.trim($(".mycytextarea").val()))
				//				}else{
				//					$(".intro .msg0").text("说点什么来彰显你的个性吧……").attr("title", "说点什么来彰显你的个性吧……")
				//				};
				$(".block-center:eq(1)").text("保存成功");
				$(".loginGroup .name").text($(".firsname").val()).attr("title", $(".firsname").val())
				$(".view-content .view-content-notbodys").html("");
				$(".rrrTips").html("保存成功").css("display", "block");
				setTimeout(function() {
					$(".rrrTips").css("display", "none");
				}, 1500)
			} else {
				//				layer.msg("不是本人操作", {
				//					icon: 2
				//				});
				$(".rrTips").html("系统繁忙，请稍后再试 !").css("display", "block");
				setTimeout(function() {
					$(".rrTips").css("display", "none");
				}, 1500)
			}
		})
	} else {
		return false;
	}
}