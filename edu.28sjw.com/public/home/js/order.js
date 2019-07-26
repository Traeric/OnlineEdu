window.onload = function() {
	var courseId=$.getUrlParam("courseId");
	if(courseId==undefined){
		courseId=138;
	}else{
		courseId=courseId;
	}
	var order = '<div class="td1">' +
		'<span class="img"><img src="{{data.smallImgPath}}"/></span>' +
		'<table border="0" cellspacing="" cellpadding="">' +
		'<tr><td><span class="name">{{data.courseName}}</span></td></tr>' +
		'</table>' +
		'</div>' +
		'<div class="td2">即日起至{{#expiry(data.create_time)}}</div>' +
		'<div class="td3">￥{{data.originalCost}}</div>' +
		'<div class="td4">-￥{{data.preferentyMoney}}</div>' +
		'<div class="td5">￥{{data.currentPrice}}</div>';
	var step='<a style="cursor:pointer"  data-url="/web/{{item.id}}/saveOrder">提交订单</a>'+
			'<p>应付金额：<span>￥{{item.currentPrice}}</span></p>';	
	RequestService("/course/findCourseOrderById","get",{
		courseId:courseId
	},function(data){
		if(data.success==true){
			$(".main-table .tab").html(template.compile(order)({
				data:data.resultObject
			}))
			$(".sub").html(template.compile(step)({
				item:data.resultObject
			}));
			$(".sub a").off().on("click",function(){
				var $this=$(this);
				RequestService("/online/user/isAlive", "GET", null, function(data) { 
					if(data.success === true) {
						location.href=$this.attr("data-url");
					}else{
						$('#login').modal('show');
						$(".loginGroup .logout").css("display", "block");
						$(".loginGroup .login").css("display", "none");
						return false;
					}
				},false)
			})
		}
	})
}