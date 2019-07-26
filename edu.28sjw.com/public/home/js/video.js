/**
 * Created by fanwenqiang on 2016/11/2.
 */
$(function() {

	//目录笔记问答三模块切换
	$(".nav-menu div").off().on("click", function() {
		$(this).addClass("cGn").siblings().removeClass("cGn");
		if($(this).hasClass("menu-video")) {
			if($(".videoBody-list .nav-video").css("display") == "block") {
				sz();
			} else {
				$(".videoBody-list .nav-video").show().siblings().hide();
				if($(".videoBody-list").hasClass("wqhide")) {
					sz();
				}
			}
		} else if($(this).hasClass("menu-note")) {
			if($(".videoBody-list .nav-note").css("display") == "block") {
				sz();
			} else {
				note();
				$(".videoBody-list .nav-note").show().siblings().hide();
				if($(".videoBody-list").hasClass("wqhide")) {
					sz();
				}
			}
		} else if($(this).hasClass("menu-ask")) {
			if($(".videoBody-list .nav-ask").css("display") == "block") {
				sz();
			} else {
				wenda();
				$(".videoBody-list .nav-ask").show().siblings().hide();
				if($(".videoBody-list").hasClass("wqhide")) {
					sz();
				}
			}
		}
	});
	$(".videoBody-bottom-left-title span").off().on("click", function() {
		$(this).addClass("act").siblings().removeClass("act");
		if($(this).attr("data-md") == "pingjia") {
			$(".videoBody-bottom-left .pingjia").show().siblings().hide();
		} else if($(this).attr("data-md") == "biji") {
			$(".videoBody-bottom-left .biji .biji-title span").eq(0).addClass("act").siblings().removeClass("act");
			$(".videoBody-bottom-left .biji").show().siblings().hide();
			buttomBiji(0, 1);
			$(".videoBody-bottom-left .biji .biji-title span").off().on("click", function() {
				$(this).addClass("act").siblings().removeClass("act");
				buttomBiji($(this).attr("data-type"), 1);
			});
		} else if($(this).attr("data-md") == "wenda") {
			$(".videoBody-bottom-left .wenda").show().siblings().hide();
			$(".videoBody-bottom-left .wenda .wenda-title span").eq(0).addClass("act").siblings().removeClass("act");
			bottonWenda(1, 1);
			$(".videoBody-bottom-left .wenda .wenda-title span").off().on("click", function() {
				$(this).addClass("act").siblings().removeClass("act");
				bottonWenda($(this).attr("data-type"), 1);
			});
		}
	});

	function sz() {
		if($(".videoBody-list").hasClass("wqhide")) {
			$(".videoBody-list").removeClass("wqhide");
			$(".videoBody-menuList").animate({
				"right": "0px"
			});
			$(".rightT").animate({
				"right": "0px"
			});
			$(".videoBody-video").animate({
				"paddingRight": "290px"
			});
			$(".getNextPlay").animate({
				"right": "520px"
			});
			$(".loadImg").animate({
				"marginLeft": "-170px"
			})
		} else {
			$(".rightT").animate({
				"right": "-290px"
			});
			$(".videoBody-list").addClass("wqhide");
			$(".videoBody-menuList").animate({
				"right": "-290px"
			});
			$(".videoBody-video").animate({
				"paddingRight": "0px"
			});
			$(".getNextPlay").animate({
				"right": "230px"
			});
			$(".loadImg").animate({
				"marginLeft": "-25px"
			})
		}
	}
	//点击查看更多定位到下方列表
	$(".nav-ask .more").off("click").on("click", function() {
		var top = $(".videoBody-bottom-left").offset().top;
		$("body").animate({
			"scrollTop": top
		}, 200);
		$(".videoBody-bottom-left-title span").eq(2).addClass("act").siblings().removeClass("act");
		$(".wenda").show().siblings().hide();
		$(".videoBody-bottom-left .wenda .wenda-title span").off().on("click", function() {
			$(this).addClass("act").siblings().removeClass("act");
			bottonWenda($(this).attr("data-type"), 1);
		});
		bottonWenda(1, 1);
	});
	$(".nav-note .more").off("click").on("click", function() {
		var top = $(".videoBody-bottom-left").offset().top;
		$("body").animate({
			"scrollTop": top
		}, 200);
		$(".videoBody-bottom-left-title span").eq(1).addClass("act").siblings().removeClass("act");
		$(".biji").show().siblings().hide();
		$(".videoBody-bottom-left .biji .biji-title span").off().on("click", function() {
			$(this).addClass("act").siblings().removeClass("act");
			buttomBiji($(this).attr("data-type"), 1);
		});
		buttomBiji(0, 1);
	});
	//返回按钮
	$(".headerBody a").click(function() {
		location.href = "/web/html/CourseDetailZhiBo.html?courseId=" + courseId;
	});
	//已学习
	$(".getNextPlay").click(function() {
		RequestService("/video/ updateStudyStatus", "POST", {
			studyStatus: 1,
			videoId: $.getUrlParam("vId")
		}, function(data) {
			if(data.resultObject == "修改成功！") {
				if($(".freeTable-list .hoverBorder").next().length == 0 && $(".freeTable-list .hoverBorder").parent().next().length == 0) {
					$(".videomodal3").removeClass("hide");
					$(".backgrounds2").removeClass("hide");
				} else {
					$(".videomodal2").removeClass("hide");
					$(".backgrounds2").removeClass("hide");
				}
			}
		});
	});

	//正在学习学员
	RequestService("/video/getLearnedUser", "GET", {
		videoId: vId
	}, function(data) {
		if(data.resultObject.length == 0) {
			$(".videoBody-bottom-right").append(template.compile(haveNull));
		} else {
			$(".videoBody-bottom-right").append(template.compile(Studesing)({
				items: data.resultObject
			}));
		}
	});
	//星星模板
	var releaseStars = "{{#stars(data)}}";

	givecriticize();
	$(".videoBody-bottom-left-release textarea").focus(function() {
		$(this).css("border-color", "#2cb82c");
	});
	$(".videoBody-bottom-left-release textarea").blur(function() {
		$(this).css("border-color", "#e4e4e4");
	});
	//提交评价的星星
	$(".releaseStars").html(template.compile(releaseStars)({
		data: 5
	}));
	//星星点击
	var starLenth = 5;
	$(".releaseStars i").off().on().click(function() {
		starLenth = $(this).index() + 1;
		$(".tipRelease").hide();
		$(".getRelease").attr("star", starLenth);
		if(starLenth == 1) {
			$(".starText").text("差评！不满意，我要吐槽！");
			$(".getRelease").attr("star", starLenth);
		} else if(starLenth == 2) {
			$(".starText").text("勉强中评！授课不尽人意！");
		} else if(starLenth == 3) {
			$(".starText").text("中评！教学水平有待提高！");
		} else if(starLenth == 4) {
			$(".starText").text("好评！听课不易，讲课更难，我要点赞！");
		} else {
			$(".starText").text("五星好评！相信品牌的力量！");
		}
		$(".releaseStars i").each(function() {
			if($(this).index() < starLenth) {
				$(this).css("color", "#ffcf2e");
			} else {
				$(this).css("color", "#ddd");
			}
		});
	});
	//输入框焦点事件
	$(".videoBody-bottom-left-release textarea").off().on("click", function() {
		$(".tipRelease").hide();
	});
	//模态
	function rTips(num) {
		$(".rTips").text(num);
		$(".rTips").css("display", "block");
		setTimeout(function() {
			$(".rTips").css("display", "none");
		}, 2000)
	};
	//点击提交评价
	$(".getRelease").click(function() {
		RequestService("/online/user/isAlive", "POST", null, function(data) {
			if(!data.success) {
				$('#login').modal('show');
				$('#login').css("display", "block");
				return;
			} else {
				if($(".getRelease").attr("star") <= 3) {
					if($.trim($(".videoBody-bottom-left-release textarea").val()) != "") {
						$(".getRelease").attr("star", 5);
						$(".tipRelease").hide();
						var releaseTxt = $(".videoBody-bottom-left-release textarea").val();
					} else {
						$(".tipRelease").show();
						return false;
					}
				} else {
					if($.trim($(".videoBody-bottom-left-release textarea").val()) != "") {
						var releaseTxt = $(".videoBody-bottom-left-release textarea").val();
					} else {
						var releaseTxt = $(".starText").text();
					};
					$(".getRelease").attr("star", 5);
					$(".tipRelease").hide();
				};
				RequestService("/video/saveCriticize", "POST", {
					videoId: vId,
					chapterId: chapterId,
					content: releaseTxt,
					starLevel: starLenth,
					courseId: courseId
				}, function(data) {
					if(data.success == true) {
						givecriticize();
						$(".releaseStars").html(template.compile(releaseStars)({
							data: 5
						}));
						$("#textCounter").html("200");
						starLenth = 5;
						$(".starText").text("五星好评！相信品牌的力量！");
						$(".videoBody-bottom-left-release textarea").val("");
						$(".releaseStars i").off().on().click(function() {
							starLenth = $(this).index() + 1;
							$(".getRelease").attr("star", starLenth);
							$(".tipRelease").hide();
							if(starLenth == 1) {
								$(".starText").text("差评！不满意，我要吐槽！");
							} else if(starLenth == 2) {
								$(".starText").text("勉强中评！授课不尽人意！");
							} else if(starLenth == 3) {
								$(".starText").text("中评！教学水平有待提高！");
							} else if(starLenth == 4) {
								$(".starText").text("好评！听课不易，讲课更难，我要点赞！");
							} else {
								$(".starText").text("五星好评！相信品牌的力量！");
							};
							$(".releaseStars i").each(function() {
								if($(this).index() < starLenth) {
									$(this).css("color", "#ffcf2e");
								} else {
									$(this).css("color", "#ddd");
								}
							});
						});
					} else {
						var reg = /^[a-zA-Z]{1,}$/;
						if(!reg.test(date.errorMessage)) {
							rTips(date.errorMessage);
						} else {
							rTips("服务器异常");
						}
					};
				});
			}
		});
	});

	function givecriticize() {
		//获取评价列表
		RequestService("/video/getVideoCriticize", "GET", {
			videoId: vId,
			pageNumber: pageNumber,
			pageSize: pageSize
		}, function(data) {
			$(".videoBody-bottom-left-list").html(template.compile(evaluateList)({
				items: data.resultObject.items
			}));
			if(data.resultObject.totalPageCount > 1) { //分页判断
				/* $(".not-data").remove();*/
				$(".videoBody-bottom-left .pages").css("display", "block");
				$(".videoBody-bottom-left .pages .searchPage .allPage").text(data.resultObject.totalPageCount);
				if(data.resultObject.currentPage == 1) {
					$("#Pagination").pagination(data.resultObject.totalPageCount, {
						callback: function(page) { //翻页功能
							pageNumber = (page + 1);
							pageSize = 15;
							givecriticize();
						}
					});
				}
			} else if(data.resultObject.totalPageCount == 0) {
				$(".videoBody-bottom-left .pages").css("display", "none");
				$(".videoBody-bottom-left-list").html(template.compile(freeNull));
			} else {
				$(".videoBody-bottom-left .pages").css("display", "none");
			}

			//点赞
			$(".releaseGood .wqz").off().on("click", function() {
				var $this = $(this).parent();
				var criticizeId = $this.attr("data-criticizeId");
				RequestService("/online/user/isAlive", "GET", null, function(data) { ///online/user/isAlive
					if(data.success === true) {
						var criticizeId = $this.attr("data-criticizeId");
						if($this.attr("data-isPraise") == 0) {
							var updatePraise = true;
							RequestService("/video/updatePraise", "POST", {
								isPraise: updatePraise,
								criticizeId: criticizeId
							}, function(data) {
								$this.attr("data-isPraise", "1");
								$this.find(".wqz span").html(data.resultObject.praiseSum);
								$this.find(".wqz img").attr("src", "../../web/images/video/good_click.png");
							});
						} else {
							var updatePraise = false;
							RequestService("/video/updatePraise", "POST", {
								isPraise: updatePraise,
								criticizeId: criticizeId
							}, function(data) {
								$this.attr("data-isPraise", "0");
								$this.find(".wqz span").html(data.resultObject.praiseSum);
								$this.find(".wqz img").attr("src", "../../web/images/video/good_normal.png");
							});
						}
					} else {
						$('#login').modal("show");
						$(".loginGroup .logout").css("display", "block");
						$(".loginGroup .login").css("display", "none");
					}
				});

			});
		});
	};
	//省略号
	function shenglve(obj) {
		//省略号和富文本
		var $dot5 = $("." + obj).find(".dot5");
		$dot5.each(function() {
			if($(this).height() > 46) {
				$(this).attr("data-txt", $(this).attr("data-text"));
				$(this).height(46);
				$(this).append('<span class="qq1" style="margin-right:30px"> <a class="toggle" href="###" style="color:#2cb82c"><span class="opens">显示全部</span><span class="closes">收起</span></a></span>');
			}
			var $dot4 = $(this);

			function createDots() {
				$dot4.dotdotdot({
					after: 'span.qq1'
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
	//笔记部分
	function note() {
		$(".nav-note .note2").height($(".nav-note").height() - $(".nav-note .note1").height() - 95);
		$(".videoBody-list .nav-note").show().siblings().hide();
		//是否分享
		$(".nav-note .note1 .share").off().on("click", function() {
			if($(this).find("em").hasClass("hov")) {
				$(this).find("em").removeClass("hov");
				$(".nav-note .sub .bt").attr("isshare", "0");
			} else {
				$(this).find("em").addClass("hov");
				$(".nav-note .sub .bt").attr("isshare", "1");
			};
		});
		$(".nav-note .note1 .richText textarea").off().on("focus", function() {
			$(".nav-note .note1 .warning").hide();
		});
		//提交笔记
		$(".nav-note .sub .bt").off("click").on("click", function() {
			var $this = $(this);
			$.ajax({
				type: "get",
				url: bath + "/online/user/isAlive",
				async: false,
				success: function(data) {
					if(data.success === true) {
						if($.trim($(".nav-note .note1 .richText textarea").val()) == "") {
							$(".nav-note .note1 .warning").text("请输入笔记内容").show();
							return false;
						} else {
							$(".nav-note .note1 .warning").hide();
							RequestService("/notes/saveOrUpdate", "post", {
								course_id: courseId,
								video_id: vId,
								is_share: $this.attr("isshare"),
								content: $.trim($(".nav-note .note1 .richText textarea").val()),
								chapter_id: chapterId
							}, function(data) {
								if(data.success == true) {
									$(".nav-note .note1 .richText textarea").val("");
									$(".nav-note .share em").removeClass("hov");
									$this.attr("isshare", "0");
									note();
								}
							}, false);
						};
					} else {
						$('#login').modal('show');
						$('#login').css("display", "block");
						$(".loginGroup .logout").css("display", "block");
						$(".loginGroup .login").css("display", "none");
						return false;
					};
				}
			});

		});
		//笔记列表加载
		RequestService("/notes/findNotes", "get", {
			videoId: vId,
			type: 1,
			pageNumber: 1,
			pageSize: 4
		}, function(data) {
			$(".videoBody-list .nav-note .note2 .note2-con").html(template.compile(rightNote)({
				item: data.resultObject.items
			}));
			//删除问题
			$(".videoBody-list .nav-note .note2 .note2-con .tool .delete").off().on("click", function() {
				var $this = $(this);
				$.ajax({
					type: "get",
					url: bath + "/online/user/isAlive",
					async: false,
					success: function(data) {
						if(data.success === true) {

							$(".videoBody-list .nav-note .tips").show();
							$(".videoBody-list .nav-note .tips .no").off().on("click", function() {
								$(".videoBody-list .nav-note .tips").hide();
							});
							//删除笔记
							$(".videoBody-list .nav-note .tips .ok").off().on("click", function() {
								$(".videoBody-list .nav-note .tips").hide();
								RequestService("/notes/deleteNotes", "post", {
									notes_id: $this.attr("data-id")
								}, function(data) {
									if(data.success == true) {
										$this.parent().parent().parent().remove();
									}
								}, false);
							});
						} else {
							$('#login').modal('show');
							$('#login').css("display", "block");
							$(".loginGroup .logout").css("display", "block");
							$(".loginGroup .login").css("display", "none");
							return false;
						}
					}
				});

			});
			//修改笔记是否分享
			$(".nav-note .note2 .share").off().on("click", function() {
				if($(this).find("em").hasClass("hov")) {
					$(this).find("em").removeClass("hov");
					$(this).siblings(".sure").attr("isshare", "0");
				} else {
					$(this).find("em").addClass("hov");
					$(this).siblings(".sure").attr("isshare", "1");
				};
			});
			//切换修改笔记内容
			$(".videoBody-list .nav-note .tool .bianji").off().on("click", function() {
				var $par = $(this).parent().parent().parent();
				$.ajax({
					type: "get",
					url: bath + "/online/user/isAlive",
					async: false,
					success: function(data) {
						if(data.success === true) {
							$par.find(".con1-top").hide().siblings().show();
						} else {
							$('#login').modal('show');
							$('#login').css("display", "block");
							$(".loginGroup .logout").css("display", "block");
							$(".loginGroup .login").css("display", "none");
							return false;
						}
					}
				});

			});
			//修改编辑
			$(".videoBody-list .nav-note .con1-bottom .quit").off().on("click", function() {
				var $this = $(this);
				$.ajax({
					type: "get",
					url: bath + "/online/user/isAlive",
					async: false,
					success: function(data) {
						if(data.success === true) {
							$this.parent().parent().hide().siblings().show();
							$(".videoBody-list .nav-note .con1-bottom .warning").hide();
						} else {
							$('#login').modal('show');
							$('#login').css("display", "block");
							$(".loginGroup .logout").css("display", "block");
							$(".loginGroup .login").css("display", "none");
							return false;
						}
					}
				});

			});
			$(".videoBody-list .nav-note .con1-bottom .text").off().on("focus", function() {
				$(".videoBody-list .nav-note .con1-bottom .warning").hide();
			});
			$(".videoBody-list .nav-note .con1-bottom .sure").off().on("click", function() {
				var $par = $(this).parent().parent();
				var $this = $(this);
				if($.trim($par.find(".text").val()) != "") {
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {
								$par.find(".warning").hide();
								RequestService("/notes/saveOrUpdate", "post", {
									id: $this.attr("data-id"),
									course_id: courseId,
									video_id: vId,
									is_share: $this.attr("isshare"),
									content: $.trim($par.find(".text").val())
								}, function(m) {
									if(m.success == true) {
										$this.attr("isshare", "0");
										note();
									}
								}, false);
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				} else {
					$par.find(".warning").text("请输入笔记内容").show();
				};
			});
			$('.nav-note  .note2').niceScroll({
				cursorcolor: "#999", //#CC0071 光标颜色 
				cursoropacitymax: 0.5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
				touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
				cursorwidth: "5px", //像素光标的宽度 
				cursorborder: "0", //     游标边框css定义 
				cursorborderradius: "5px", //以像素为光标边界半径 
				autohidemode: true //是否隐藏滚动条 
			});
		});
	};
	//下面部分笔记数据
	function buttomBiji(type, num) {
		$(".pages").hide();
		RequestService("/notes/findNotes", "get", {
			videoId: vId,
			type: type ? type : 0,
			pageNumber: num ? num : 1,
			pageSize: 10
		}, function(data) {
			if(data.success == true) {
				if(data.resultObject.totalCount == 0) {
					$(".biji-content").html(emptyDefaul);
				} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount != 0) {
					$(".biji-content").html(template.compile(bottomNote)({
						item: data.resultObject.items
					}));
				} else if(data.resultObject.totalPageCount >= 1) {
					$(".biji-content").html(template.compile(bottomNote)({
						item: data.resultObject.items
					}));
					if(data.resultObject.currentPage == 1) {
						$(".pages .searchPage .allPage").text(data.resultObject.totalPageCount);
						$("#Pagination").pagination(data.resultObject.totalPageCount, {
							callback: function(page) { //翻页功能
								page = page + 1;
								buttomBiji(type, page);
							}
						});
					};
					$(".pages").show();
				};
				shenglve("biji_01");
				//点赞列表笔记
				$(".biji-content .biji_01 .zan").off().on("click", function() {
					var $this = $(this);
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {

								RequestService("/notes/updatePraise", "post", {
									notes_id: $this.attr("data-id")
								}, function(data) {
									if(data.success == true) {
										if(data.resultObject.isPraise == true) {
											$this.addClass("act");
											$this.find("em").html(data.resultObject.praise_sum);
										} else {
											$this.removeClass("act");
											$this.find("em").html(data.resultObject.praise_sum);
										}
									}
								}, false);
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
				//收藏笔记列表
				$(".biji-content .biji_01 .shoucang").off().on("click", function() {
					var $this = $(this);
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {

								RequestService("/notes/updateCollect", "post", {
									notes_id: $this.attr("data-id")
								}, function(data) {
									if(data.success == true) {
										if(data.resultObject == true) {
											$this.addClass("act");
											$this.find("em").html("已收藏");
										} else {
											$this.removeClass("act");
											$this.find("em").html("收藏");
										}
									}
								}, false);
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
				//删除列表笔记
				$(".biji-content .biji_01 .shanchu").off().on("click", function() {
					var $this = $(this);
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {

								$(".mask").show();
								$(".biji .tips").show();
								$(".biji .tips .no").off().on("click", function() {
									$(".biji .tips").hide();
									$(".mask").hide();
								});
								//删除笔记
								$(".biji .tips .ok").off().on("click", function() {
									isAlive0();
									$(".biji .tips").hide();
									$(".mask").hide();
									RequestService("/notes/deleteNotes", "post", {
										notes_id: $this.attr("data-id")
									}, function(data) {
										if(data.success == true) {
											buttomBiji(type, num);
										}
									}, false);
								});
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
				$(".biji-content .biji_01 .text").off().on("focus", function() {
					$(".biji-content .biji_01 .warning").hide();
				});
				//编辑笔记
				$(".biji-content .biji_01 .bianji").off().on("click", function() {
					var $par = $(this).parent().parent().parent();
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {

								$par.find(".reInput").show().siblings().hide();
								$par.find(".qx").off().on("click", function() {
									$par.find(".reInput").hide().siblings().show();
									$par.find(".warning").hide();
								});
								$par.find(".qd").off().on("click", function() {
									var $this = $(this);
									if($.trim($par.find(".text").val()) != "") {
										isAlive0();
										$par.find(".warning").hide();
										RequestService("/notes/saveOrUpdate", "post", {
											id: $this.attr("data-id"),
											course_id: courseId,
											video_id: vId,
											is_share: $this.attr("isshare"),
											content: $.trim($par.find(".text").val())
										}, function(m) {
											if(m.success == true) {
												buttomBiji(0, 1);
											}
										}, false);
									} else {
										$par.find(".warning").text("请输入笔记内容").show();
									};
								});
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
			}
		});
	};
	//问答部分
	function wenda() {
		//问答标签获取
		RequestService("/video/getTagsByMenuId", "get", {
			menuId: menuid
		}, function(data) {
			if(data.success == true) {
				$(".videoBody-list .nav-ask .ask1 .k2 div").html("");
				for(var i = 0; i < data.resultObject.length; i++) {
					var a = data.resultObject[i];
					var span = "<span data-tagid=" + a.id + ">" + a.name + "</span>";
					$(".videoBody-list .nav-ask .ask1 .k2 div").append(span);
				};
				$(".videoBody-list .nav-ask .ask1 .k2 div span").off().on("click", function() {
					if(!$(this).hasClass("bqact")) {
						if($(".videoBody-list .nav-ask .ask1 .k2 div .bqact").length < 2) {
							$(this).addClass("bqact");
						} else {
							return false;
						};
					} else {
						$(this).removeClass("bqact");
					};
				});
				$(".videoBody-list .nav-ask").show().siblings().hide();
				var ask1 = document.getElementsByClassName("ask1")[0].scrollHeight;
				$(".nav-ask .ask2").height($(".nav-ask").height() - ask1 - 53);
			}
		});
		$(".videoBody-list .nav-ask .ask1 .ask-title").off().on("focus", function() {
			$(".videoBody-list .nav-ask .ask1 .warning").hide();
		});
		//提问问题
		$(".videoBody-list .nav-ask .ask1 .sub span").off().on("click", function() {
			$.ajax({
				type: "get",
				url: bath + "/online/user/isAlive",
				async: false,
				success: function(data) {
					if(data.success === true) {
						if($.trim($(".videoBody-list .nav-ask .ask1 .ask-title").val()) == "") {
							$(".videoBody-list .nav-ask .ask1 .warning").text("请输入问答标题").show();
							return false;
						} else if($(".videoBody-list .nav-ask .ask1 .k2 div .bqact").length == 0) {
							$(".videoBody-list .nav-ask .ask1 .warning").text("请选择问题标签").show();
							return false;
						} else {
							$(".videoBody-list .nav-ask .ask1 .warning").hide();
							var tagname = "";
							$(".videoBody-list .nav-ask .ask1 .k2 div .bqact").each(function() {
								tagname = tagname + "," + $(this).text();
							});
							RequestService("/online/questionlist/saveQuestion", "post", {
								tags: tagname.substring(1),
								videoId: vId,
								ment_id: menuid,
								title: $.trim($(".videoBody-list .nav-ask .ask1 .ask-title").val()),
								text: $.trim($(".videoBody-list .nav-ask .ask1 .richText textarea").val()),
								content: $.trim($(".videoBody-list .nav-ask .ask1 .richText textarea").val()),
							}, function(data) {
								if(data.success == true) {
									$(".videoBody-list .nav-ask .ask1 .ask-title").val("");
									$(".videoBody-list .nav-ask .ask1 .richText textarea").val("");
									$(".videoBody-list .nav-ask .ask1 .k2 div span").removeClass("bqact");
									wenda()
								}
							}, false);
						};
					} else {
						$('#login').modal('show');
						$('#login').css("display", "block");
						$(".loginGroup .logout").css("display", "block");
						$(".loginGroup .login").css("display", "none");
						return false;
					}
				}
			});

		});
		//问答列表加载
		RequestService("/online/questionlist/findVideoQuestion", "get", {
			videoId: vId,
			type: 2,
			pageNumber: 1,
			pageSize: 3
		}, function(data) {
			$(".videoBody-list .nav-ask .ask2 .ask2-con").html(template.compile(rightAsk)({
				item: data.resultObject.items
			}));
			//删除问题
			$(".videoBody-list .nav-ask .ask2 .ask2-con .tool .delete").off().on("click", function() {
				var $this = $(this);
				$.ajax({
					type: "get",
					url: bath + "/online/user/isAlive",
					async: false,
					success: function(data) {
						if(data.success === true) {
							$(".videoBody-list .nav-ask .tips").show();
							$(".videoBody-list .nav-ask .tips .no").off().on("click", function() {
								$(".videoBody-list .nav-ask .tips").hide();
							});
						} else {
							$('#login').modal('show');
							$('#login').css("display", "block");
							$(".loginGroup .logout").css("display", "block");
							$(".loginGroup .login").css("display", "none");
							return false;
						}
					}
				});
				$(".videoBody-list .nav-ask .tips .ok").off().on("click", function() {
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {
								$(".videoBody-list .nav-ask .tips").hide();
								RequestService("/online/questionlist/deleteQuestionById", "post", {
									questionId: $this.attr("data-id")
								}, function(data) {
									if(data.success == true) {
										$this.parent().parent().parent().remove();
									}
								}, false);
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
			});
			$('.nav-ask  .ask2').niceScroll({
				cursorcolor: "#999", //#CC0071 光标颜色 
				cursoropacitymax: 0.5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
				touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
				cursorwidth: "5px", //像素光标的宽度 
				cursorborder: "0", //     游标边框css定义 
				cursorborderradius: "5px", //以像素为光标边界半径 
				autohidemode: true //是否隐藏滚动条 
			});
		});
	};
	//下面列表问答数据
	function bottonWenda(type, num) {
		$(".pages").hide();
		RequestService("/online/questionlist/findVideoQuestion", "get", {
			type: type ? type : 1,
			videoId: vId,
			pageNumber: num ? num : 1,
			pageSize: 10
		}, function(data) {
			if(data.success == true) {
				if(data.resultObject.totalCount == 0) {
					$(".wenda-content").html(emptyDefaul);
				} else if(data.resultObject.totalPageCount == 1 && data.resultObject.totalCount != 0) {
					$(".wenda-content").html(template.compile(bottomAsk)({
						item: data.resultObject.items
					}));
				} else if(data.resultObject.totalPageCount >= 1) {
					$(".wenda-content").html(template.compile(bottomAsk)({
						item: data.resultObject.items
					}));
					if(data.resultObject.currentPage == 1) {
						$(".pages .searchPage .allPage").text(data.resultObject.totalPageCount);
						$("#Pagination").pagination(data.resultObject.totalPageCount, {
							callback: function(page) { //翻页功能
								page = page + 1;
								bottonWenda(type, page);
							}
						});
					};
					$(".pages").show();
				};
				shenglve("wenda_01");
				//删除
				$(".wenda-content .wenda_01 .shanchu").off().on("click", function() {
					var $this = $(this);
					$.ajax({
						type: "get",
						url: bath + "/online/user/isAlive",
						async: false,
						success: function(data) {
							if(data.success === true) {

								$(".mask").show();
								$(".wenda .tips").show();
								$(".wenda .tips .no").off().on("click", function() {
									$(".wenda .tips").hide();
									$(".mask").hide();
								});
								$(".wenda .tips .ok").off().on("click", function() {
									$.ajax({
										type: "get",
										url: bath + "/online/user/isAlive",
										async: false,
										success: function(data) {
											if(data.success === true) {
												$(".wenda .tips").hide();
												$(".mask").hide();
												RequestService("/online/questionlist/deleteQuestionById", "post", {
													questionId: $this.attr("data-id")
												}, function(data) {
													if(data.success == true) {
														bottonWenda(type, num);
													}
												}, false);
											} else {
												$('#login').modal('show');
												$('#login').css("display", "block");
												$(".loginGroup .logout").css("display", "block");
												$(".loginGroup .login").css("display", "none");
												return false;
											}
										}
									});
								});
							} else {
								$('#login').modal('show');
								$('#login').css("display", "block");
								$(".loginGroup .logout").css("display", "block");
								$(".loginGroup .login").css("display", "none");
								return false;
							}
						}
					});

				});
			}
		});
	};
	//准备播放
	function on_player_ready() {
		$(".shadowJiaZai,.loadImg").css("display", "none");
	};
	setTimeout(function() {
		$(".shadowJiaZai,.loadImg").css("display", "none");
	}, 8000);
	//弹窗内操作
	$(".videomodal1 .nopurchase-close img").click(function() {
		$(".videomodal1").addClass("hide");
		$(".backgrounds1").addClass("hide");
	});
	$(".videomodal2 .nopurchase-close img").click(function() {
		$(".videomodal2").addClass("hide");
		$(".backgrounds2").addClass("hide");
	});
	$(".videomodal3 .nopurchase-close img").click(function() {
		$(".videomodal3").addClass("hide");
		$(".backgrounds2").addClass("hide");
	});
	$(".videomodal1 .buy").click(function() {
		window.location.href = "/web/html/payCourseDetailPage.html?id=" + courseId + "&courseType=1&free=0";
	});
	//点击返回列表
	$(".goup").click(function() {
		location.href = "/web/html/CourseDetailZhiBo.html?courseId=" + courseId;
	});
	//三种状态的关卡判断关闭
	$(".censorship-close").on("click", function() {
		$(this).parent().parent().hide();
	});
	$(".try-close").on("click", function() {
		$(".waitingTry").hide()
	});
	//点击播放下一课时
	$(".nextSchool").click(function() {
		$(".censorshipSuccess").hide();
		$(".videomodal2").addClass("hide");
		$(".backgrounds2").addClass("hide");
		$(".tj").each(function() {
			if($(this).attr("data-videoid") == video_id) {
				if($(this).nextAll(".tj").length == 0) {
					if($(this).parent(".freeTable-list").nextAll(".freeTable-list").length != 0) {
						var $m = $(this).parent(".freeTable-list").nextAll(".freeTable-list");
						$m.removeClass("hide").siblings(".freeTable-list").addClass("hide");
						$m.find(".tj").eq(0).click();
					}
				} else if($(this).nextAll(".tj").length != 0) {
					$(this).nextAll(".tj").eq(0).click();
				}
			}
		})
	});

});