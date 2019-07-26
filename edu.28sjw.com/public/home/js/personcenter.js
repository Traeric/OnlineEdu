/**
 * Created by Administrator on 2016/8/13.
 */
$(function() {
	$(".path a").removeClass("select");
	//意见反馈模板
	window.onload = function() {
		RequestService("/online/user/isAlive", "get", null, function(data) {
			if(data.success == true) {
				var result = data.resultObject;
				localStorage.userid = result.id;
				var path;
				//头像预览
				if(data.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
					path = data.resultObject.smallHeadPhoto;
				} else {
					path = bath + data.resultObject.smallHeadPhoto
				}
				$(".intro").html(template('namePic', {
					img: path,
					name: result.name ? result.name : "博小白",
					info: result.info ? result.info : "说点什么来彰显你的个性吧……"
				}));
				if(window.localStorage.personcenter!=""&&window.localStorage.personcenter!="undefined") {
					$(".personcenterPage .left-nav ." + window.localStorage.personcenter).click();
					document.title = $(".left-nav ." + window.localStorage.personcenter).text() + " - 博学谷云课堂";
				} else {
					//先打开课程
					$(".left-nav .mynews").parent().addClass("selected");
					$(".left-nav .mynews").parent().find(".yes-click").show();
					$(".left-nav .mynews").parent().find(".not-click").hide();
					document.title = "我的消息" + " - 博学谷云课堂";
					$(".my-personcenter-nav-2 a").text("我的消息");
					$(".view-content-content").empty();
					$(".personcenterPage .left-nav .mynews").click();
				};
				//面包屑导航的个人中心按钮
				$(".hehe").click(function() {
					return $(".personcenterPage .left-nav .mynews").click();
				});
//				$(".left-nav .intro .pic").hover(function() { //头像hover效果
//					$(".left-nav .intro .picModal").show();
//				}, function() {
//					$(".left-nav .intro .picModal").hide();
//				});
//				$(".left-nav .intro .picModal").hover(function() { //头像hover效果
//					$(".left-nav .intro .picModal").show();
//				}, function() {
//					$(this).hide();
//				});
				//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓更换头像↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓//

				$(".left-nav .intro .picModal,.left-nav .intro .pic").on("click", function() {
					$(".mask").css("display", "block");
					$("#headImg").css("display", "block");
					$("body").css("overflow", "hidden");
					//清空右侧小图片
					//						$('.cropped-con').html('');
					RequestService("/online/user/isAlive", "get", null, function(data) {
						var path;
						//头像预览
						if(data.resultObject.smallHeadPhoto) {
							if(data.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
								path = data.resultObject.smallHeadPhoto;
							} else {
								path = bath + data.resultObject.smallHeadPhoto
							}
						};
						$('.cropped-con').html('');
						$('.cropped-con').append('<img src="' + path + '" align="absmiddle" style="width:80px;height:80px;margin-top:28px;border-radius:80px;" class="img01"><p style="font-size:12px;color:#666;margin-top:6px;">80px*80px</p>');
						$('.cropped-con').append('<img src="' + path + '" align="absmiddle" style="width:40px;height:40px;margin-top:28px;border-radius:40px;"><p style="font-size:12px;color:#666;margin-top:6px;">40px*40px</p>');
						img()
							//新插件
					});
				})

				function img() {
					//清空文件
					function clearFileInput(file) {
						var form = document.createElement('form');
						document.body.appendChild(form);
						//记住file在旧表单中的的位置
						var pos = file.nextSibling;
						form.appendChild(file);
						form.reset();
						pos.parentNode.insertBefore(file, pos);
						document.body.removeChild(form);
					}
					$(".imgClose,.btn-quit").click(function() {
						$('.cropped-con').html('');
						$(".img-box1").css("display", "block");
						$(".imageBox").css("display", "none");
						$(".tc").css("display", "none");
						$(".mask").css("display", "none");
						$("#headImg").css("display", "none");
						$("body").css("overflow", "auto");
						var file = document.getElementById("upload-file");
						clearFileInput(file);
						$(".btn-upload").attr("data-img","");
						$(".imageBox").css("background-image", "");
					})
					var options = {
						thumbBox: '.thumbBox',
						spinner: '.spinner',
						imgSrc: ""
					}
					var cropper = $('.imageBox').cropbox(options);
					var img = "";
					$('#upload-file').on('change', function() {
						var filepath = $(this).val();
						if(filepath==""){
							return false;
						}
						var extStart = filepath.lastIndexOf(".");
						var ext = filepath.substring(extStart, filepath.length).toUpperCase();
						if(ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
							//							layer.msg("图片限于bmp,png,gif,jpeg,jpg格式", {
							//								icon: 2
							//							});
							$(".rrrrTips").text("图片限于bmp,png,gif,jpeg,jpg格式").css("display", "block");
							var file = document.getElementById("upload-file");
							clearFileInput(file);
							setTimeout(function() {
								$(".rrrrTips").css("display", "none");
							}, 1500);
						} else if(($("#upload-file").get(0).files[0].size / 1024 / 1024) > 1) {
							$(".rrrrTips").text("图片大小不超过1M").css("display", "block");
							var file = document.getElementById("upload-file")
							clearFileInput(file);
							setTimeout(function() {
								$(".rrrrTips").css("display", "none");
							}, 1500);
						} else {
							if(filepath) {
								$(".img-box1").css("display", "none");
								$(".imageBox").css("display", "block");
								$(".tc").css("display", "block");
								var reader = new FileReader();
								reader.onload = function(e) {
									options.imgSrc = e.target.result;
									cropper = $('.imageBox').cropbox(options);
									getImg();
								}
								reader.readAsDataURL(this.files[0]);
								this.files = [];
								getImg();
								//								return $(".imageBox").click(function() {
								//									getImg();
								//								});
							}
						}
					})

					function getImg() {
						img = cropper.getDataURL();
						$('.cropped-con').html('');
						$('.cropped-con').append('<img src="' + img + '" align="absmiddle" style="width:80px;height:80px;margin-top:28px;border-radius:80px;" class="img01"><p style="font-size:12px;color:#666;margin-top:6px;">80px*80px</p>');
						$('.cropped-con').append('<img src="' + img + '" align="absmiddle" style="width:40px;height:40px;margin-top:28px;border-radius:40px;"><p style="font-size:12px;color:#666;margin-top:6px;">40px*40px</p>');
						$(".btn-upload").attr("data-img",img);
					}
					$(".imageBox").on("mousemove mouseup", function() {
						getImg()
					})

					//							$('#btnZoomIn').on('click', function() {
					//								cropper.zoomIn();
					//							})
					//							$('#btnZoomOut').on('click', function() {
					//									cropper.zoomOut();
					//							})
				}
				//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑更换头像↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//

			} else {
				location.href = "../../index.html";
				localStorage.username = null;
				localStorage.password = null;
				$(".login").css("display", "none");
				$(".logout").css("display", "block");
			}
		});
		$(".left-nav  img").click(function() {
			var aa = $(this).parent().find("a").get(0).className;
			window.localStorage.personcenter = aa;
			return $(this).parent().find("a").click();
		})
		$(".left-nav ul").click(function(evt) {
			window.localStorage.personcenter = $(evt.target).parent().find("a").attr("class");
			if(evt.target.tagName !== "A") {
				return;
			}
			document.title = $(".left-nav ." + window.localStorage.personcenter).text() + " - 博学谷云课堂";
			$(".view-content-notbodys").html("");
			$(".left-nav ul li").removeClass("selected");
			var li = $(evt.target).parent();
			li.addClass("selected").siblings().removeClass("selected");
			$(".left-nav ul li .not-click").show();
			$(".left-nav ul li .yes-click").hide();
			li.find(".yes-click").show();
			li.find(".not-click").hide();
			var currentViewName = $(evt.target).attr("class");
			$(".pages").css("display", "block");
			$(".pages").css("display", li.data("pages") === "none" ? "none" : "block");
			//意见反馈功能及模板加载
			if($(evt.target).hasClass("idea")) {
				$(".my-personcenter-nav-2 a").text("意见反馈");
				$(".view-content-content").html(template.compile(ideaModal));
				$(".view-stack-idea").css("display", "block");
				$(".idea-title").focus(function() {
					$(".text-title").css("border-color", "#ccc");
					$(".error-msg").hide();
				});
				$(".idea-title").blur(function() {
					var title = $(".text-title").val().trim();
					if(title.length > 50) {
						$(".text-title").css("border-color", "red");
						$(".error-msg").show();
						return false;
					} else if(title == "") {
						$(".text-title").css("border-color", "red");
						$(".error-msg span").text("请输入标题");
						$(".error-msg").show();
						return false;
					} else if(title.length < 5) {
						$(".text-title").css("border-color", "red");
						$(".error-msg span").text("标题5~50字之间");
						$(".error-msg").show();
						return false;
					}
				});
				$(".textarea-miaoshu").focus(function() {
					$(".textarea-miaoshu").css("border-color", "#2cb82c");
					$(".error-msg2").hide();
				});
				$(".textarea-miaoshu").blur(function() {
					var miaoshu = $(".textarea-miaoshu").val().trim();
					if(miaoshu.length > 1000) {
						$(".textarea-miaoshu").css("border-color", "red");
						$(".error-msg2").show();
					} else {
						$(".textarea-miaoshu").css("border-color", "#eee");
					}
				})
				$(".feedback-icon .btn").click(function(evt) {
					RequestService("/online/user/isAlive", "get", null, function(data) {
						if(!data.success) { //登陆判断
							$('#login').modal('show');$('#login').css("display", "block");
							localStorage.username = null;
							localStorage.password = null;
							$(".login").css("display", "none");
							$(".logout").css("display", "block");
						} else { //验证
							var title = $(".text-title").val().trim(),
								miaoshu = $(".textarea-miaoshu").val().trim();
							if(title == "") {
								$(".text-title").css("border-color", "red");
								$(".error-msg span").text("请输入标题");
								$(".error-msg").show();
								return false;
							} else if(title.length < 5) {
								$(".text-title").css("border-color", "red");
								$(".error-msg span").text("标题5~50字之间");
								$(".error-msg").show();
								return false;
							} else if(title.length > 4 && title.length < 51) {
								var data = {
									userId: localStorage.id,
									title: title,
									describe: miaoshu
								};
								$.post(bath + "/online/user/addFeedBack", data, function(data) {
									$(".mask,#ideaColl").css("display", "block");
									$("#ideaColl .ideaCloser").click(function() {
										$(".mask,#ideaColl").css("display", "none");
										$(".left-nav .idea").click();
									});
									$(".ideaGo").click(function() {
										$(".mask,#ideaColl").css("display", "none");
										$(".left-nav .idea").click();
									});
								})
							}
						}
					});

				});
			}

			if($(evt.target).hasClass("mydata")) {
				$(".my-personcenter-nav-2 a").text("我的资料");
				$(".view-content-content").empty();
				$(".view-content-content").html(template.compile(mydata));
				RequestService("/online/user/isAlive", "get", null, function(data) {
					if(data.success == true) {
						if(data.resultObject.apply == true) {
							$(".kc").css("display", "inline-block");
						} else {
							$(".kc").css("display", "none");
						}
						createData();
					}
				});
			}
			if($(evt.target).hasClass("mynews")) {
				$(".view-content-content").empty();
				$(".view-content-content").html(template.compile(mynews));
				$(".my-personcenter-nav-2 a").text("我的消息");
				createNews();
			}
			if($(evt.target).hasClass("mylesson")) {
				$(".my-personcenter-nav-2 a").text("我的课程");
				$(".view-content-content").empty();
				createLesson();
			}
		});
	};
	$(".view-content-notbodys").html("");


	var ideaModal = "<div class='tabnavigator idea'>" +
		"<div class='tabbar'>" +
		"<div class='btn-item color2cb' data-type='view-stack-idea'>意见反馈</div>" +
//		"<div class='pointer'></div>" +
		"</div>" +
		"<div class='form-horizontal view-stack view-stack-idea'>" +
		"<div class='form-group '>" +
		"<label class='fl control-label'><span class='required_01'>*</span>标题</label>" +
		"<div class='col-sm-7'>" +
		"<input  type='text' class='view_01 text-title  require idea-title' placeholder='5-50字之间' maxlength='50'  id='title'>" +
		"</div>" +
		"<label for='miaoshu' class='control-label error-msg'><img src='../images/tanhao.png'><span>标题5~50字之间</span></label>" +
		"</div>" +
		"<div class='form-group'>" +
		"<label for='miaoshu' class='control-label fl'><span class='required_01' style='padding: 0px 13px;'></span>描述</label>" +
		"<div class='col-sm-9'>" +
		"<textarea class='view_01 textarea-miaoshu'   maxlength='1000' rows='13' id='miaoshu' placeholder='1000字以内'></textarea>" +
		"<div class='feedback-icon'>" +
		"<button class='btn'>提交</button>" +
		"</div></div>" +
		"<label for='miaoshu' class='control-label error-msg2'><img src='../images/tanhao.png'>描述不能为空</label>" +
		"</div></div>" +
		"<div class='mask'></div>" +
		"<div class='ideaColl' id='ideaColl'>" +
		"<div class='ideaCloser'></div>" +
		"<div class='ideaSure'>提交成功，感谢您的反馈！</div>" +
		"<a class='ideaGo' style='cursor:pointer'>确定</a>" +
		"</div></div><div id='rqj-idea'></div>" +
		"<script type='text/javascript'>" +
		"$('input').placeholder(); $('textarea').placeholder();" +
		"</script>";

	//name = "mynote";
	$(".view-container").empty();

	var mydata =
		'<div class="tabnavigator my-data">' +
		'<div class="tabbar">' +
		'<div class="btn-item color2cb">个人信息</div>' +
//		'<div class="btn-item zh" style="display:none">账户信息</div>' +
		'<div class="btn-item kc"  style="display:none">课程报名信息</div>' +
		'</div>' +
		'<div class="my-data-1">' +
		'<div class="geren">' +
		'<div class="cy-myprofile-myfom-dv-1">' +
		'<div class="buer"><span class="red">*</span>用户名:</div>' +
		'<input type="text" maxlength="20" class="firsname ipt"/>' +
		'<span class="nick-warn warning">昵称不能为空</span>' +
		'</div>' +
		'<div>' +
		'<div class="buer cy-myprofile-myfom-dv-span">个性签名:</div>' +
		'<textarea class="mycytextarea" style="overflow:hidden" maxlength="30" placeholder="说点什么来彰显你的个性吧……" onchange="this.value=this.value.substring(0, 30)" onkeydown="this.value=this.value.substring(0, 30)" onkeyup="this.value=this.value.substring(0, 30)"></textarea>' +
		'<span class="text-warn warning">个性签名不得超过30个字符</span>' +
		'</div>' +
		'<div>' +
		'<div class="buer">帐号:</div>' +
		'<input type="text" disabled="disabled" readonly="readonly"  class="username ipt"/>' +
		'<a href="/web/html/resetPassword.html" class="mypassword-g">修改密码&nbsp;></a>' +
		' </div>' +
		' <div class="cy-myprofile-myfom-dv-radio-zu2">' +
		'    <div class="buer">职业:</div>' +
		'   <label style="margin-left:-3px"><div class="radio-cover"><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio myradio0" name="job" value="19"/><span>学生</span></input></label>' +
		'  <label><div class="radio-cover "><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio myradio1" name="job" value="20"/><span>程序员</span></input></label>' +
		' <label><div class="radio-cover "><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio myradio2" name="job" value="21"/><span>创业者</span></input></label>' +
		'<label><div class="radio-cover "><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio myradio3" name="job" value="22"/><span>待业者</span></input></label>' +
		'<label><div class="radio-cover "><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio myradio4" name="job" value="23"/><span>讲师</span></input></label>' +
		'<label><div class="radio-cover "><em></em></div><input type="radio" class="cy-myprofile-myfom-dv-radio myradio5" name="job" value="24"/><span>其他</span></input>' +
		'  <!--<input type="text" maxlength="15" class="myjob ipt1 myradioipt"/>-->' +
		' </label>' +
		'</div>' +
		'<div>' +
		'<div class="buer" style="margin-top:10px">工作年限:</div>' +
		'<span name="food2" class="cy-myprofile-myfom-dv-select-4" >' +
		'	<p class="select-xiala" id="food4">请选择</p>' +
		'<div class="xiala q-1">' +
		'<span>请选择</span>' +
		'<span>在校生</span>' +
		'<span>应届生</span>' +
		'<span>1年以下</span>' +
		'<span>1~3年</span>' +
		'<span>3~5年</span>' +
		'<span>5年以上</span>' +
		'</div>' +
		'</span>' +
		'</div>' +
		//                  '<div>'+
		//                      '<div class="buer">公司/学校</div>'+
		//                      '<input type="text" maxlength="30" class="mycompany ipt"/>'+
		//                  '</div>'+
		'<div>' +
		'<div class="buer">学习方向:</div>' +
		'<span name="food2" class="cy-myprofile-myfom-dv-select-5" >' +
		'<p class="select-xiala" id="food5">请选择</p>' +
		'<div class="xiala q-1" id="food5xl">' +
		'</div>' +
		'  </span>' +
		'</div>' +
		'<div class="address">' +
		'<div class="buer">现居住地:</div>     ' +
		'<div class="address-right">' +
		'<div>' +
		'	<p  id="s_province" class="select-xiala">请选择</p>' +
		'	<div class="xiala yearxl" id="shengxl">                ' +
		'	</div>' +
		'</div>' +
		'<div>' +
		'	<p id="s_city" class="select-xiala">请选择</p>' +
		'	<div class="xiala monthxl" id="shixl"> ' +
		'	</div>' +
		'</div>' +
		'<div>' +
		'<p id="s_county" class="select-xiala">请选择</p>' +
		'<div class="xiala dayxl" id="xianxl">        ' +
		'</div>' +
		'</div>' +
		' </div>' +
		'</div>' +

		'<div>' +
		'<div class="buer"></div>' +
		'<textarea class="menpaihao" maxlength="29" onchange="this.value=this.value.substring(0, 29)" onkeydown="this.value=this.value.substring(0, 29)" onkeyup="this.value=this.value.substring(0, 29)" placeholder="请填写详细地址，例如街道名称等"></textarea>' +
		'</div>' +
		'<div>' +
		'  <div class="buer"></div>' +
		' <button class="btn1" id="geren">保存</button>' +
		//		'<button class="btn2" id="cancel">取消</button>' +
		'</div>' +
		'</div>' +
		//第二模块
		'<div class="zhanghu">'+
			'<div class="account name">'+
				'<div class="tl">'+
				'</div>'+
			'</div>'+
		'</div>'+
		//第三模块
		'<div class="kecheng">' +
		'<p class="warn">职业课程需要填写报名信息，只需填写一次，适应于其他所有课程；<br>此信息不公开显示，只是为了方便老师通知课程信息，提供优质课程服务；</p>' +
		'<div class="cy-myprofile-myfom-dv-1" style="margin-bottom:12px">' +
		'<div class="buer"><i class="red">*</i>真实姓名:</div>' +
		'<input type="text" maxlength="7" class="truename ipt"/>' +
		'<span class="true-warn warning">真实姓名不能为空</span>' +
		'</div>' +
		'<div class="cy-myprofile-myfom-dv-radio-zu">' +
		'<div class="buer"><i class="red">*</i>性别:</div>' +
		'<label><div class="radio-cover"><em class="active"></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="1" id="myradio1"/></input><span>男</span></label>' +
		'<label><div class="radio-cover"><em></em></div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="0" id="myradio2"/></input><span>女</span></label>' +
		'<span class="sex-warn warning" style="display:none">请选择性别</span>' +
		'</div>' +
//		'<div id="birthday_container">' +
//		'<div class="buer"><i class="red">*</i>出生年月:</div>' +
//		'<div class="birth-right">' +
//		'<div>' +
//		'<p name="year" id="year" class="select-xiala"></p>' +
//		'<div class="xiala yearxl" id="yearxl">' +
//		'</div>' +
//		'</div>' +
//		'<div>' +
//		'<p name="month" id="month" class="select-xiala">1月</p>' +
//		'<div class="xiala monthxl" id="monthxl">' +
//		'</div>' +
//		'</div>' +
//		'<div>' +
//		'<p name="day" id="day" class="select-xiala">1日</p>' +
//		'<div class="xiala dayxl" id="dayxl">' +
//		'</div>' +
//		'</div>' +
//		'</div>' +
//		'<span class="birthday-warn warning" style="float:right;margin-right:210px">请选择出生年月</span>' +
//		'<script>$("#birthday_container").birthday();</script>' +
//		'</div>' +
		'<div>' +
		'<div class="buer"><i class="red">*</i>手机号:</div>' +
		'<input type="text" maxlength="18" class="phonenumber ipt"/>' +
		'<span class="phone-warn warning">手机号不得为空</span>' +
		'</div>' +
		'<div>' +
		'<div class="buer"><i class="red">*</i>邮箱:</div>' +
		'<input type="text"  class="emailname ipt"/>' +
		'<span class="email-warn warning">邮箱不得为空</span>' +
		'</div>' +
		'<div class="333">' +
		'<div class="buer"><i class="red">*</i>QQ号:</div>' +
		'<input type="text" maxlength="15" class="QQnumber ipt"/>' +
		'<span class="QQ-warn warning">QQ不得为空</span>' +
		'</div>' +

		'<div class="111">' +
		'<div class="bue"><i class="red">*</i>学历:</div>' +
		'<span name="food2" class="rq-college" >' +
		'<p class="select-xiala" id="record">请选择</p>' +
		'<div class="xiala" id="recordxl" style="top:37px">' +

		'</div>' +
		'</span>' +
		'<span class="college-warn warning">请选择学历</span>' +
		'</div>' +

		'<div class="222">' +
		'<div class="buer">毕业院校:</div>' +
		//      		'<input type="text" maxlength="18" class="daxue ipt"/>'+
		'<div class="address-right">' +
		'<div>' +
		'	<p  id="rq_province" class="select-xiala">请选择</p>' +
		'	<div class="xiala yearxl" id="rqsxl">                ' +
		'	</div>' +
		'</div>' +
		'<div>' +
		'	<p id="rq_city" class="select-xiala">请选择</p>' +
		'	<div class="xiala monthxl" id="rqcxl"> ' +
		'	</div>' +
		'</div>' +
		'<div>' +
		'<p id="rq_college" class="select-xiala">请选择</p>' +
		'<div class="xiala dayxl" id="rqdxxl">        ' +
		'</div>' +
		'</div>' +
		' </div>' +
		'</div>' +

		'<div class="000">' +
		'<div class="bue">专业:</div>' +
		'<span name="food2" class="rq-college" >' +
		'<p class="select-xiala" id="major">请选择</p>' +
		'<div class="xiala" id="majorxl" style="top:37px">' +
		'</div>' +
		'</span>' +
		'</div>' +

		'<div>' +
		'<div class="buer"></div>' +
		'<button class="btn1" id="kecheng">保存</button>' +
		//		'<button class="btn2" id="cancel2">取消</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		"<div class='mask'></div>" +
		"<div class='ideaColl' id='personMess'>" +
		"<div class='ideaCloser'></div>" +
		"<div class='ideaSure'>保存成功</div>" +
		"<span class='ideaGo' style='cursor:pointer'>确定</span>" +
		"</div></div><div id='rqj-idea'></div>" +
		'<div class="rrTips">系统繁忙，请稍候再试!</div>' +
		'<div class="rrrTips">保存成功</div>' +
		"<script type='text/javascript'>" +
		"$('input').placeholder(); $('textarea').placeholder();" +
		"</script>";

	var mynews = '<div class="rTips">未选中任何消息</div>' +
		'<div class="mask"></div>' +
		'<div class="del-sure">' +
		'<div class="del-header"><i class="iconfont icon-guanbi qxCloser"></i></div>' +
		'<p class="qxIntro"><i class="iconfont icon-tanhao"></i><span>你确定要删除消息?</span></p>' +
		'<div class="qxBtn">' +
		'<span class="qxQuit" id="qxQuit">取消</span>' +
		'<span class="qxSure" id="qxSure">确定</span>' +
		'</div>' +
		'</div>' +
		'<div class="tabnavigator my-news">' +
		'<div class="tabbar">' +
		'<div class="btn-item color2cb"><span>我的消息</span></div>' +
		'<span class="re-bt re-mark">标为已读</span> <span class="re-bt re-del">删除</span>' +
		'</div>' +
		'<div>' +
		'<ul class="cy-data">' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'<script type="text/javascript" src="../js/mynews.js" ></script>';
});

/*});*/
function fileClick() {
	return $("#upload-file").click();
}
$(".btn-upload").click(function(evt) {
		evt.preventDefault();
		if($(".btn-upload").attr("data-img")!=undefined&&$(".btn-upload").attr("data-img")!=""){			
		}else{
			$(".rrrrrTips").text("请选择图片").css("display", "block");
			setTimeout(function() {
				$(".rrrrrTips").css("display", "none");
			}, 1500);
			return false;
		}
		$(".btn-upload").css("color", "white");
		//	if($(".upload_pictures_bottom_upload").attr("data-id") && $(".upload_pictures_bottom_upload").attr("data-id") != '/webview/images/usershow/defaultHeadImg.jpg') {
		RequestService("/online/user/updateHeadPhoto", "post", {
				image: $(".btn-upload").attr("data-img"),
			}, function(data) {
				if(data.success == true) {
					RequestService("/online/user/isAlive", "get", null, function(t) {
						var path;
						if(t.resultObject.smallHeadPhoto) {
							if(t.resultObject.smallHeadPhoto != "/web/images/defaultHeadImg.jpg") {
								path = t.resultObject.smallHeadPhoto;
							} else {
								path = bath + t.resultObject.smallHeadPhoto
							}
							$(".userPic").css({
								background: "url(" + path + ") no-repeat",
								backgroundSize: "100% 100%"
							});
							$(".personcenterPage .left-nav .intro .pic").css({
								background: "url(" + path + ") no-repeat",
								backgroundSize: "100% 100%"
							});
							var file = document.getElementById("upload-file")
								//清空文件
							function clearFileInput(file) {
								var form = document.createElement('form');
								document.body.appendChild(form);
								//记住file在旧表单中的的位置
								var pos = file.nextSibling;
								form.appendChild(file);
								form.reset();
								pos.parentNode.insertBefore(file, pos);
								document.body.removeChild(form);
							}
							clearFileInput(file);
							$('.cropped-con').html('');
							$(".img-box1").css("display", "block");
							$(".imageBox").css("display", "none");
							$(".tc").css("display", "none");
							$(".mask").css("display", "none");
							$("#headImg").css("display", "none");
							location.reload();
						}

					})

				}
			})
			//	} else {
			//
			//		layer.msg("请上传头像", {
			//			icon: 2
			//		});
			//	}
		$(".btn-upload").css("color", "white");
	})
	//function addEvent(obj,xEvent,fn) {
	//  if(obj.attachEvent){
	//    obj.attachEvent('on'+xEvent,fn);
	//  }else{
	//    obj.addEventListener(xEvent,fn,false);
	//  }
	//}