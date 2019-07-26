/**
 * Created by Administrator on 2016/7/28.
 * fanwenqiang
 /**  ...*/
/*友情链接*/
//==========================================================================================
var footers={
	indexFooter:'<div class="footerDT" style="background-color:#fff;height:88px;">'+
	'<footer class="indexFooter">'+
	'<div class="content">'+
	'<div class="content-item footer-bodys" style="background-color:#fff;">'+
	'<div class="content-item content-footer-link about-us">'+
	'<ul class="gate">'+
	'<li data-id="first" data-url="/web/html/aboutUs.html" >关于我们<span>|</span></li>'+
	'<li data-id="two" data-url="/web/html/aboutUs.html">人才招聘<span>|</span></li>'+
	'<li data-id="three" data-url="/web/html/aboutUs.html">联系我们<span>|</span></li>'+
	'<li data-id="four" class="noline" data-url="/web/html/aboutUs.html">常见问题</li>'+
	'</ul></div>'+
	'<div class="trademark">京ICP备08001421号 京公网安备110108007702 Copyright @ 2016 博学谷 All Rights Reserved <span style="margin-right:5px;"></span></div>'+
	'</div></div></footer></div>',
	footer:'<div class="footerDT">'+
	'<footer>'+
	'<div class="content">'+
	'<div class="content-item footer-bodys">'+
	'<div class="content-item content-footer-link about-us">'+
	'<ul class="gate">'+
	'<li data-id="first" data-url="../html/aboutUs.html">关于我们<span>|</span></li>'+
	'<li data-id="two" data-url="../html/aboutUs.html">人才招聘<span>|</span></li>'+
	'<li data-id="three" data-url="../html/aboutUs.html">联系我们<span>|</span></li>'+
	'<li data-id="four" data-url="../html/aboutUs.html" class="noline">常见问题</li>'+
	'</ul>'+
	'</div>'+
	'<div class="trademark">京ICP备08001421号 京公网安备110108007702 Copyright @ 2016 博学谷 All Rights Reserved<span style="margin-right:5px;"></span></div>'+
	'</div></div></footer></div>'
}
if(window.location.pathname.indexOf("/index.html")!=-1 || window.location.pathname=='/'){
	$("body").append(footers.indexFooter);
}else{
	$("body").append(footers.footer);
}
//window.onload=function(){
//	RequestService("/online/user/isAlive", "GET", null, function (data) {///online/user/isAlive     
// });
//})
//==========================================================================================
//左侧导航栏点击添加缓存
$(".gate li").click(function() {
	var dataId = $(this).attr("data-id");
	window.sessionStorage.aboutus = $(this).attr("data-id");
	top.document.location.href = $(this).attr("data-url");
});

//v1.1移植gongneng
//获取底部菜单
//      RequestService("/otherlink/getOtherLink", "GET", "", function (data) {
//          $(".link-content").empty();
//          createOtherLink(data.resultObject);
//      });
$("#file1").css("cursor", "pointer");

//头像预览部分
$("#upload").on('shown.bs.modal', function(e) {
	RequestService("/online/user/isAlive", "POST", null, function(data) {
		var path;
		//头像预览
		if(data.resultObject.smallHeadPhoto) {
			if(data.resultObject.smallHeadPhoto!="/web/images/defaultHeadImg.jpg"){
                	path =data.resultObject.smallHeadPhoto;
                }else{
                	path=bath+data.resultObject.smallHeadPhoto
                }
			if(path) {
				$(".upload_pictures_bottom_upload").attr("data-id", data.resultObject.smallHeadPhoto).css({
					background: "url(" + path + ") no-repeat",
					backgroundSize: "100% 100%"
				})
			}
		};
	})
});
$("#tiForm #file0").change(function(e) { //上传图片
	if($(".tiForm-bottom-dv .tiForm-bottom-dv-1").length < 5) {
		imgs = ($(".tiForm-bottom-dv .tiForm-bottom-dv-1").length) + 1;
		imgz = $(e.target).next().attr("class");
		var filepath = $(this).val();
		var extStart = filepath.lastIndexOf(".");
		var ext = filepath.substring(extStart, filepath.length).toUpperCase();
		if(ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
			layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {
				icon: 2
			});
		} else {
			if(filepath) {
				$("#Myform1").attr("action", bath+"/attachmentCenter/upload")
				$("#Myform1").submit();
			}
		}

	} else {
		layer.msg("最多5张图", {
			icon: 2
		});
	}
});

        $("#qusForm #file1").change(function (e) { //修改图片
            if (0<$(".myquiz-bottom-dv .myquiz-bottom-dv-1").length < 5) {
                imgs = ($(".myquiz-bottom-dv .myquiz-bottom-dv-1").length)+1;
                imgz = $(e.target).next().attr("class");
                var filepath = $(this).val();
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                    layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {icon: 2});
                } else {
                    if (filepath) {
                        $("#Myform").attr("action",bath+"/attachmentCenter/upload");
                        $("#Myform").submit();
                    }
                }
            } else {
                layer.msg("最多5张图", {icon: 2});
            }
        });

        $("#answerForm #file2").change(function (e) { //上传图片到服务器
        	
            if ($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length < 5) {
                imgs = ($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length)+1;
                imgz = $(e.target).next().attr("class");
                var filepath = $(this).val();
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                    layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {icon: 2});
                } else {
                    if (filepath) {
                        $("#Myform3").attr("action",bath+"/attachmentCenter/upload")
                        $("#Myform3").submit();
                    }
                }
            } else {
                layer.msg("最多5张图", {icon: 2});
            }
        });
$("#bzh_modal_tform #file3").change(function(e) { //修改图片到服务器
	if(0<$(".tiForm-bottom-f-1 .tiForm-bottom-f-dv-1").length < 5) {
		imgs = ($(".tiForm-bottom-f-1 .tiForm-bottom-f-dv-1").length) + 1;
		imgz = $(e.target).next().attr("class");
		var filepath = $(this).val();
		var extStart = filepath.lastIndexOf(".");
		var ext = filepath.substring(extStart, filepath.length).toUpperCase();
		if(ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
			layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {
				icon: 2
			});
		} else {
			if(filepath) {
				$("#Myform4").attr("action", bath+"/attachmentCenter/upload")
				$("#Myform4").submit();
			}
		}

	} else {
		layer.msg("最多5张图", {
			icon: 2
		});
	}
});
$("#upload #file4").change(function() { //修改图片到服务器
	var filepath = $(this).val();
	var extStart = filepath.lastIndexOf(".");
	var ext = filepath.substring(extStart, filepath.length).toUpperCase();
	if(ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
		layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {
			icon: 2
		});
	} else {
		if(filepath) {
			$("#Myform2").attr("action", bath+"/attachmentCenter/upload")
			$("#Myform2").submit();
		}
	}

});


//上传头像
$(".upload_pictures_bottom_btn").click(function(evt) {
	evt.preventDefault();
	if($(".upload_pictures_bottom_upload").attr("data-id") && $(".upload_pictures_bottom_upload").attr("data-id") != '/webview/images/usershow/defaultHeadImg.jpg') {
		RequestService("/online/user/updateUserHeadImg", "POST", {
			img: $(".upload_pictures_bottom_upload").attr("data-id")
		}, function(data) {
			if(data.success == true) {
				RequestService("/online/user/isAlive", "POST", null, function(t) {

					var path;
					if(t.resultObject.smallHeadPhoto) {
						if(t.resultObject.smallHeadPhoto!="/web/images/defaultHeadImg.jpg"){
                			path =t.resultObject.smallHeadPhoto;
               			 }else{
                			path=bath+t.resultObject.smallHeadPhoto
               			 }
						$(".userPic").css({
							background: "url(" + path + ") no-repeat",
							backgroundSize: "100% 100%"
						});
						$(".personcenterPage .left-nav .intro .pic").css({
							background: "url(" + path + ") no-repeat",
							backgroundSize: "100% 100%"
						});
					}

				})
				$("#upload").modal("hide");

			}
		})
	} else {

		layer.msg("请上传头像", {
			icon: 2
		});
	}

})

//白智辉模态框提交表单
$("#bzh_modal_form .myanswer-btn").click(function(evt) {
	$("#bzh_modal_form").trigger("modal_commit", {
		a: $("#bzh_modal_form .txt").val()
	});
	$("#bzh_modal_form").modal("hide");
})

//白智辉模态框提交表单
$("#bzh_modal_tform .tiForm-btn").click(function(evt) {
	$("#bzh_modal_tform").trigger("modal.t.commit", {
		result: {
			title: $("#bzh_modal_tform .title").val(),
			txt: $("#bzh_modal_tform .txt").val()
		}
	});
	if($("#bzh_modal_tform .txt").val() != "null" && $("#bzh_modal_tform .txt").val() != "" && $.trim($("#bzh_modal_tform .txt").val())) {
		$("#bzh_modal_tform").modal("hide");
	}

})

//投诉模态关闭恢复上传图片
$("#answerForm .close").click(function() {
	$(".interlocution-bottom").css("display", "block");
	$(".myanswer-lo1").text("问题描述");
});

$("#answerForm .myanswer-btn").click(function(evt) { //根据data-modalzt弹出模态
	if($("#answerForm").attr("data-modalzt") == "博问答回答") {
		$("#answerForm .myanswer-lo1").text("答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				$("#answerForm").modal("hide");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-tid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").removeAttr("data-tid");
						$("#answerForm").modal("hide");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "none") {
							if(window.location.pathname == "/web/html/personcenter.html"){
								$(".tabnavigator .tabbar").trigger("tabChange", {
									data: "view-stack-answer"
								});
							}else{
								location.reload();
							}
						} else {
							$(".pagination .current").click();
						}
					}
				})
			} else {
				$("#answerForm").removeAttr("data-modalzt");
				var arr2 = [];
				for(var k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				RequestService("/online/forum/saveForumAnswer", "POST", { //提问
					forumId: $("#answerForm").attr("data-tid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").removeAttr("data-tid");
						$("#answerForm").modal("hide");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "none") {
							location.reload();
						} else {
							$(".pagination .current").click();
						}
					}
				})
			}
			//省略号
			$(".msg").each(function() {
				$(this).dotdotdot();
			})
			for(i = 0; i < $(".rqj-answer").length; i++) {
				var $this = $(".rqj-answer").eq(i);
				var last = $this.text().substring($this.text().length - 3, $this.text().length);
				if(last == ".. ") {
					$this.attr("data-txt", $this.attr("data-text"))
				}
			}
			//省略号
			$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}
	} else if($("#answerForm").attr("data-modalzt") == "详情回答") {
		$("#answerForm .myanswer-lo1").text("答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-vid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						location.reload();
					}

				})
			} else {
				$("#answerForm").removeAttr("data-modalzt");
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-vid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$("#tiForm").trigger("modal_commit", {
							txt: $(".tiForm-bottom .txt").html()
						});
						location.reload();
					}

				})
			}
		$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "视频修改") {
		$("#answerForm .myanswer-lo1").text("修改答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-vid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$("#tiForm").trigger("modal_commit", {
							txt: $(".tiForm-bottom .txt").html()
						});
					}

				})
			} else {
				$("#answerForm").removeAttr("data-modalzt");
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-vid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$("#tiForm").trigger("modal_commit", {
							txt: $(".tiForm-bottom .txt").html()
						});
					}

				})
			}
		$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "修改答案1") {
		$("#answerForm .myanswer-lo1").text("修改答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-zid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$(".tabnavigator .tabbar").trigger("tabChange", {
							data: "view-stack-favorite"
						});
					}

				})
			} else {
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-zid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$(".tabnavigator .tabbar").trigger("tabChange", {
							data: "view-stack-favorite"
						});
					}
				})
			}
			$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "修改答案") {
		$("#answerForm .myanswer-lo1").text("修改答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-formid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "block"){
							$(".pagination .current").click();
						}else{
							$(".tabbar-check").click();
						}
					}
				})
			} else {
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-formid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "block"){
							$(".pagination .current").click();
						}else{
							$(".tabbar-check").click();
						}
					}
				})
			}
			$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "博问答修改答案") {
		$("#answerForm .myanswer-lo1").text("修改答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-tid"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
//						alert(data)
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "none") {
							window.location.reload();
						} else {
							$(".pagination .current").click();
						}
					}
				})
			} else {
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/updateForum", "POST", {
					forumId: $("#answerForm").attr("data-tid"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						if($(".pages").css("display") == "none") {
							window.location.reload();
						} else {
							$(".pagination .current").click();
						}
					}
				})
			}
			//省略号
			$(".msg").each(function() {
				$(this).dotdotdot();
			})
			for(i = 0; i < $(".rqj-answer").length; i++) {
				var $this = $(".rqj-answer").eq(i);
				var last = $this.text().substring($this.text().length - 3, $this.text().length);
				if(last == ".. ") {
					$this.attr("data-txt", $this.attr("data-text"))
				}
			}
			//省略号
			$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "回答答案") {
		$("#answerForm .myanswer-lo1").text("答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-zid"),
					context: value
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$(".tabnavigator .tabbar").trigger("tabChange", {
							data: "view-stack-favorite"
						});
					}
				})
			} else {
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-zid"),
					context: value,
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-formid");
						$(".file2_t").css("display", "none");
						$(".tabnavigator .tabbar").trigger("tabChange", {
							data: "view-stack-favorite"
						});
					}
				})
			}
			$("#answerForm form").attr("action","");
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}

	} else if($("#answerForm").attr("data-modalzt") == "投诉") {
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value) {
			$("#answerForm").removeAttr("data-modalzt");
			RequestService("/online/complain/save", "POST", {
				forumId: $("#answerForm").attr("data-zid"),
				content: value
			}, function(data) {
				if(data.success == true) {
					layer.msg("感谢您的投诉,我们将会在工作日期间对您投诉的信息进行处理!", {
						icon: 1
					});
					$("#answerForm").modal("hide");
					$(".interlocution-bottom").css("display", "block");
					$("#answerForm textarea").val("");
				}
			})

		} else {
			layer.msg("请输入投诉内容", {
				icon: 2
			});
		}
	} else if($("#answerForm").attr("data-modalzt") == "视频回答") {
		$("#answerForm .myanswer-lo1").text("答案内容");
		var value = $("#answerForm textarea").val(); // 获取值
		value = $.trim(value); // 用jQuery的trim方法删除前后空格
		if(value.length != 0 || $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length != 0) {
			if($(".interlocution-bottom-1 .interlocution-bottom-dv-1").length == 0) {
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-id"),
					context: $("#answerForm textarea").val()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-id");
						$(".file2_t").css("display", "none");
						$("#tiForm").trigger("modal_commit", {
							txt: $(".tiForm-bottom .txt").html()
						});
					}
				})
			} else {
				arr2 = [];
				for(k = 0; k < $(".interlocution-bottom-1 .interlocution-bottom-dv-1").length; k++) {
					arr2.push($(".interlocution-bottom-1 .interlocution-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				$("#answerForm").removeAttr("data-modalzt");
				RequestService("/online/forum/saveForumAnswer", "POST", {
					forumId: $("#answerForm").attr("data-id"),
					context: $("#answerForm textarea").val(),
					imgIds: arr2.join()
				}, function(data) {
					if(data.success == true) {
						$("#answerForm").modal("hide");
						$("#answerForm").removeAttr("data-id");
						$(".file2_t").css("display", "none");
						$("#tiForm").trigger("modal_commit", {
							txt: $(".tiForm-bottom .txt").html()
						});
					}
				})
			}
		} else {
			layer.msg("请输入" + $("#answerForm .myanswer-lo1").text() + "或上传图片", {
				icon: 2
			});
		}
		$("#answerForm form").attr("action","");
	} else {
		layer.msg("系统繁忙", {
			icon: 2
		});
	}
	//RequestService("/online/forum/updateForum", "POST",
	//    {forumId: forumId, title: "这是标题", context: $("#answerForm .txt").val()},
	//    function(data) {
	//        $("#answerForm").modal('hide');
	//        $(".tabnavigator .view-stack").css("display", "none");
	//        $(".tabnavigator .tabbar").trigger("tabChange", {data: "view-stack-" + currentTheme});
	//    });
});
$("#qusForm .myquiz-btn").click(function(evt) {
	//      	console.log("在footer里面的提问函数")
	evt.preventDefault();
	var value = $(".myquiz-bottom .title").val(); // 获取值
	value = $.trim(value); // 用jQuery的trim方法删除前后空格
	var value1 = $(".myquiz-bottom .txt").val(); // 获取值
	value1 = $.trim(value1); // 用jQuery的trim方法删除前后空格
	if(value) {
		if($(".myquiz-bottom .title").val().length >= 5 && $(".myquiz-bottom .title").val().length <= 50) {
			//if (value1 || value1.length < 1000) {
			if(zhuangtai()) {
				var arr = [];
				if($(".myquiz-bottom-dv .myquiz-bottom-dv-1").length == 0) {
					for(var l = 0; l < $(".myquiz-bottom-select-dv div").length; l++) {
						if($(".myquiz-bottom-select-dv div:eq(" + l + ")").attr("data-biao") == "1") {
							arr.push($(".myquiz-bottom-select-dv div:eq(" + l + ")").attr("data-ansmenuid"))
						}
					}
					RequestService("/online/forum/saveForumNotVideo", "POST", {
						title: $(".myquiz-bottom .title").val(),
						context: $(".myquiz-bottom .txt").val(),
						menuId: arr.join()
					}, function(data) {
						$("#qusForm").modal("hide");
						location.reload();
					})
				} else {
					arr = [];
					var arr2 = [];
					for(l = 0; l < $(".myquiz-bottom-select-dv div").length; l++) {
						if($(".myquiz-bottom-select-dv div:eq(" + l + ")").attr("data-biao") == "1") {
							arr.push($(".myquiz-bottom-select-dv div:eq(" + l + ")").attr("data-ansmenuid"))
						}
					}
					for(var k = 0; k < $(".myquiz-bottom-dv .myquiz-bottom-dv-1").length; k++) {
						arr2.push($(".myquiz-bottom-dv  .myquiz-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
					}
					RequestService("/online/forum/saveForumNotVideo", "POST", {
						title: $(".myquiz-bottom .title").val(),
						context: $(".myquiz-bottom .txt").val(),
						menuId: arr.join(),
						imgIds: arr2.join()
					}, function(data) {
//						console.log(data)
						$("#qusForm").modal("hide");
						location.reload();
					})

				}
			} else {
				$(".myquiz_bottom_title_s").css({
					"visibility": "visible"
				});
				$(".myquiz-bottom .myquiz-bottom-select_ul").click(function() {
					$(".myquiz_bottom_title_s").css({
						"visibility": "hidden",
						height: "20px"
					});
				});
			}
			//}
			/**
			 * 问题描述非必填项
			 else {
			    layer.msg('请输入1000字以内的问题描述哦!', icon: 2});
			}
			 *
			 */
		} else {
			$(".myquiz_bottom_title_m").css({
				"visibility": "visible",
				height: "30px"
			}).text("只能是5-50的字符");
			$(".myquiz-bottom .title").focus(function() {
				$(".myquiz_bottom_title_m").css({
					"visibility": "hidden",
					height: "20px"
				});
			});
		}
	} else {
		$(".myquiz_bottom_title_m").css({
			"visibility": "visible",
			height: "30px"
		}).text("请填写标题");
		$(".myquiz-bottom .title").focus(function() {
			$(".myquiz_bottom_title_m").css({
				"visibility": "hidden",
				height: "20px"
			});
		});
	}

});
$("#tiForm .tiForm-btn").click(function(evt) { //提交模态表单
	debugger;
	evt.preventDefault();
	var value = $("#tiForm .title").val(); // 获取值
	value = $.trim(value); // 用jQuery的trim方法删除前后空格
	var value1 = $("#tiForm .txt").val(); // 获取值
	value1 = $.trim(value1); // 用jQuery的trim方法删除前后空格
	if(value1) {
		if(value.length > 4 && value.length < 51) {
			/*if (value1) {*/
			if($(".tiForm-bottom-dv .tiForm-bottom-dv-1").length == 0) {
				RequestService("/online/forum/saveForum", "POST", {
					title: $("#tiForm .title").val(),
					context: $("#tiForm .txt").val(),
					videoId: $("#tiForm").attr("data-vid")
				}, function(data) {
					$("#tiForm").removeAttr("data-vid");
					$("#tiForm").modal("hide");
					$("#tiForm").trigger("modal_commit", {
						txt: $(".tiForm-bottom .txt").html()
					});
				})
			} else {
				var arr2 = [];
				for(var k = 0; k < $(".tiForm-bottom-dv .tiForm-bottom-dv-1").length; k++) {
					arr2.push($(".tiForm-bottom-dv  .tiForm-bottom-dv-1:eq(" + k + ")").attr("data-vid"))
				}
				RequestService("/online/forum/saveForum", "POST", {
					title: $("#tiForm .title").val(),
					context: $("#tiForm .txt").val(),
					videoId: $("#tiForm").attr("data-vid"),
					imgIds: arr2.join()
				}, function(data) {
					$("#tiForm").removeAttr("data-vid");
					$("#tiForm").modal("hide");
					$("#tiForm").trigger("modal_commit", {
						txt: $(".tiForm-bottom .txt").html()
					});
				})
			}
			/*

			 } else {
			 layer.msg("问题描述不能为空", {icon: 2});
			 }*/
		} else {
			$(".tiForm_bottom_title_m").css({
				"visibility": "visible",
				height: "30px"
			}).text("标题只能是5-50的字符");
			setTimeout(function() {
				$(".tiForm_bottom_title_m").css({
					"visibility": "hidden",
					height: "20px"
				});
			}, 2000)
		}
	} else {
		$(".tiForm_bottom_title_m").css({
			"visibility": "visible",
			height: "30px"
		}).text("请填写标题");
		setTimeout(function() {
			$(".tiForm_bottom_title_m").css({
				"visibility": "hidden",
				height: "20px"
			});
		}, 2000)
	}
});

/*function ajaxFileUpload(id) {
 $.ajaxFileUpload(
 {
 url: bath + '/online/attachment/upload?type=question&fid=9', //用于文件上传的服务器端请求地址
 secureuri: false, //是否需要安全协议，一般设置为false
 fileElementId: id, //文件上传域的ID
 dataType: "text", //返回值类型 一般设置为json
 success: function (data)  //服务器成功响应处理函数
 {console.log("=666===" + data)
 debugger;
 //alert(typeof data)
 //if (typeof (data.error) != 'undefined') {
 //    if (data.error != '') {
 //        alert(data.error);
 //    } else {
 //        alert(data.msg);
 //    }
 //}
 //$("#answerForm .img-content").append(Handlebars.compile(imgTl)({url: data.imgurl}));
 //if($("#answerForm .img-content").children().length > 4) {
 //    $("#answerForm .myanswer-bottom-dv-2").hide();
 //}
 },
 error: function (data)//服务器响应失败处理函数
 {
 debugger;

 console.log(data);
 }
 }
 );

 return false;
 }*/

function zhuangtai() { //状态判断
	var a = 0;
	for(var l = 0; l < $(".myquiz-bottom-select-dv div").length; l++) {
		if($(".myquiz-bottom-select-dv div:eq(" + l + ")").attr("data-biao") == "1") {
			a++;
		}
	}
	if(a == 1) {
		return true;
	} else {
		return false;
	}
}