	//首页判断是否有直播
	template.helper('online', function(num) {
        if(num=="直播"){
        	return '<span class="classCategory">'+num+'</span>'
        }else{
        	return '<span class="classCategory">'+num+'</span>'
//      	return false;
//      	'<span class="classCategory">点播</span>'
        }
    });
    //首页的推荐课程{
    template.helper('indexHref',function(description_show,free,id,courseType){
        courseType=(courseType=="直播")?0:1;//0：直播 1：点播
        freeSt=(free==true)?1:0;//1:免费 0：收费
        //description_show 0:不显示课程介绍页 1：显示课程介绍页
        if(description_show==0){
            //不显示课程介绍页
            if(freeSt==1){
                return '<a href="/web/html/freeCourseDetailPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
            }else{
                if(freeSt==0 && courseType==0){
                    return '<a href="/web/html/CourseDetail.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
                }else{
                    return '<a href="/web/html/payCourseDetailPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
                }
            }
        }else{
            //显示课程介绍页
            return '<a href="/web/html/courseIntroductionPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
        }
    })
    //详情页相关课程的直播判断
    template.helper('online2', function(num) {
        if(num=="直播"){
        	return '<span class="classCategory">'+num+'</span>'
        }else{
        	return false;
//      	'<span class="classCategory">点播</span>'
        }
    });
    template.helper('hasImg',function(obj){
    	if(obj!=null && obj!=""){
    		return '<div class="img"><img  src="'+obj+'" /></div>';
    	}else{
    		return '<div class="aimg" style="background-image:none;"><img   src="/web/images/load26.gif"/></div>';
    	}
    })
    //详情页相关课程
    template.helper('qshasImg',function(obj){
    	if(obj!=null){
    		return '<div class="img"><img  src="'+obj+'" /></div>';
    	}else{
    		return '<div class="aimg" style="background-image:none;"><img   src="../img/load26.gif"/></div>';
    	}
    })
    //学员故事图片判断是否存在
    template.helper('changeImg',function(num){
    	if(num!=null){
    		return num;
    	}else{
    		return '/web/images/defaultHeadImg.jpg';
    	}
    });
//  //点赞
//  template.helper("zanOrno",function(num,a,b){
//  	if(num.indexOf(me)!=-1){
//  		return "<span class='zan' data-zanId='"+a+"'>点赞(<span>"+b+"</span>)</span>";
//  	}else{
//  		return "<span class='zan rezan' data-zanId='"+a+"'>已赞(<span>"+b+"</span>)</span>" ;
//  	}
//  })
    //问答学科标签分割
    template.helper('tags',function(num){
    	var m="";
    	if(num.indexOf(","!=-1)){
    		var n=num.split(",");
	    	for(i=0;i<n.length;i++){
	    		var $span="<span class='knowlege-type biaoqian'>"+n[i]+"</span>";
	    		m=m+$span
	    	}
    	}else{
    		m="<span class='knowlege-type biaoqian'>"+num+"</span>";
    	}
    	return m;
    });
    //计算订单有效期
    template.helper('expiry',function(data){
        var data=data.split(" ");
    	var arr=data[0].split("-");
    	arr[0]=parseInt(arr[0])+1;
    	return ''+arr[0]+'-'+arr[1]+'-'+arr[2];
    });
	//时间转换格式
	template.helper('timeChange', function(num) {
  /*      if(num<60){
        	return ''+num+'分钟';
        }else{
        	var a=parseInt(num/60);
        	var b=num%60;
        	if(b==0){
        		num=a
        	}else{
        		b=(b/60).toFixed(1);
        		if(b=="0.0"){
        			num=a;
        		}else{
        			num=parseFloat(a)+parseFloat(b);
        		}
        	}
        	return ''+num+'小时';
        }*/
        return ''+num+'小时';
    });
    //头像
    template.helper("headImg",function(num){
    	if(num== "/web/images/defaultHeadImg.jpg"||num==null) {		
			return  bath + "/web/images/defaultHeadImg.jpg"
		} else {
			return num;
		}
    })
    //日期时分秒只取日期
    template.helper("dataSub",function(num){
    	num=num.split(" ");
    	return num[0]
    })
    //返回星星号的热度值
    template.helper('stars', function( num) {
        var stars = "";
        for(var i = 0; i < num; i ++) {
            stars += "<span class='glyphicon glyphicon-star-empty'></span>";
        }
        return stars;
    });
    //排行索引
    template.helper('searchpageaddone', function(num) {
        return num+1;
    });
    //判断咨询的type
    template.helper('haveType', function(obj) {
        if(obj.type == 2){
            return "<li><a href='"+ obj.href + "' target='view_window' title='" + obj.title + "'> " + obj.title + "</a></li>";
        }
    });

    template.helper('getAnswerStatus', function( num) {
        if(num!=7){
            return "<span>[最新回答]</span>";
        }
        return "<span>[已采纳答案]</span>";
    });
    //判断老师
    template.helper('hasTeacher', function(type) {
        if(type == 2){
            return " <span class='gab'>老师</span></div>";
        }else{
            return "";
        }

    });
    //判断视频播放面包屑
    template.helper('vedioscrumbs', function(obj) {
        if(obj.type == 2){
            return "<span>" + obj.text + "</span>"
        }else if(obj.type == 1){
            return "<a href='#/mymoveexploit' data-id='" + obj.id + "'>" + obj.text + "</a>"
        }
    });
    template.helper('getAcceptButton', function(obj) {
        if(obj.forumType!=7){ //提问未解决,每条回答都可以采纳
            if(obj.iForum){
                return "<span class='glyphicon my-glyphicon-zj "+obj.type+"' aria-hidden='true'  data-id='"+obj.id+"'></span><span class='gap good_answer' data-id='"+obj.id+"'> 采纳为最佳答案</span>" ;
            }
            return "";
        }
        if(obj.type!="6"){ //已解决,那么只找到被采纳的那条回答
            if(obj.iForum&&obj.forumType!=7) {
                return "<span class='glyphicon my-glyphicon-zj' aria-hidden='true'  data-id='" + obj.id + "'></span><span class='gap' data-id='" + obj.id + "'> 采纳为最佳答案</span>";
            }
        }else{
            return "<span class='glyphicon my-glyphicon-zj  selected ' aria-hidden='true'  data-id='"+obj.id+"'></span><span class='gap' data-id='"+obj.id+"' style='color:rgb(44, 184, 44);'> 已采纳答案</span>" ;
        }
    });

    template.helper('getAcceptiLaud', function(obj) {

        if(obj.iLaud == false){
            return "<span class='glyphicon my-glyphicon-zt' aria-hidden='true'></span><span class='gap laud' data-id='" + obj.id + "'> 赞同"+obj.laudNumber+"</span>";
        }else if(obj.iLaud == true){
            return "<span class='glyphicon my-glyphicon-zt1'  aria-hidden='true'></span><span class='gap laud' data-id='" + obj.id + "'> 赞同" + obj.laudNumber + "</span>";
        }

    });
    template.helper('getAcceptiOppose', function(obj) {
        if(obj.iOppose == false){
            return "<span class='glyphicon my-glyphicon-fd' aria-hidden='true'></span><span class='gap oppose' data-id='" + obj.id + "'> 反对" + obj.opposeNumber + "</span>";
        }else if(obj.iOppose == true){
            return "<span class='glyphicon my-glyphicon-fd1' aria-hidden='true'></span><span class='gap oppose' data-id='" + obj.id + "'> 反对" + obj.opposeNumber + "</span>";
        }

    });
    template.helper('getAnswerButton', function(obj) {
		if(obj.iAccpetAnswer){
            return "";
        }else if(obj.myselfForum){ //我的提问
            return "";
        }else if(obj.iAnswer){
            return "<div class='btn-answer'  data-modalzt='博问答修改答案' data-answer='"+obj.iAnswerContext+"' data-id='"+obj.iAnswerId+"'>修改答案</div>" ;
        }
        return "<div class='btn-answer'   data-modalzt='博问答回答' data-id='"+obj.id+"'>我来回答</div>";
    });
    template.helper('getAnswerButton_t', function(obj) {
         if(obj.iAccpetAnswer){
            return "";
        }
        if(obj.myselfForum){ //我的提问
            return "";
        }
        if(obj.forumAnswer!=null&&obj.forumAnswer.type=="6"&&obj.forumAnswer.iForumAnswer==true){ //我的回答被采纳了
            return "<div class='btn-answer' data-self='"+obj.forumAnswer.iForumAnswer+"' data-type='" +obj.forumAnswer.type+ "'  data-modalzt='博问答修改答案' data-id='"+obj.forumAnswer.id+"'>已被采纳</div>";
        }
        if(obj.iAnswer){
            return "<div class='btn-answer' data-self='"+obj.forumAnswer.iForumAnswer+"' data-type='" +obj.forumAnswer.type+ "'  data-modalzt='博问答修改答案' data-id='"+obj.forumAnswer.id+"'>修改答案</div>" ;
        }
        return "<div class='btn-answer'   data-modalzt='博问答回答' data-id='"+obj.id+"'>我来回答</div>";
    });

    template.helper('myanswerNum', function(obj) {
        if(obj == 0){
            return "<div class='control-content-item right' style='margin-right: 20px;'><p>"+obj+"</p><p>回答</p></div>";
        }else {
            return "<div class='control-content-item left'><p>"+obj+"</p><p>回答</p></div>";
        }
    });
    template.helper('myanswerNum', function(obj) {
        if(obj == 0){
            return "<div class='control-content-item right' style='margin-right: 20px;'><p>"+obj+"</p><p>回答</p></div>";
        }else {
            return "<div class='control-content-item left'><p>"+obj+"</p><p>回答</p></div>";
        }
    });

    template.helper('myimgurl', function(obj) {
        var psth;
        if(obj.iAccpetAnswer){
            return "";
        }
        if(obj.forumAnswer!=null&&obj.forumAnswer.type=="6"&&obj.forumAnswer.iForumAnswer==true){ //我的回答被采纳了
            return "<div class='btn-answer'  data-modalzt='博问答修改答案' data-id='"+obj.forumAnswer.id+"'>已被采纳</div>";
        }
        if(obj.myselfForum){ //我的提问
            return "";
        }
        if(obj.iAnswer){
            return "<div class='btn-answer' data-type='" +obj.forumAnswer.type+ "' data-self='"+obj.forumAnswer.iForumAnswer+"' data-modalzt='博问答修改答案' data-answer='"+obj.iAnswerContext+"' data-id='"+obj.iAnswerId+"'>修改答案</div>" ;
        }
        return "<div class='btn-answer' data-self='"+obj.forumAnswer.iForumAnswer+"' data-type='" +obj.forumAnswer.type+ "' data-modalzt='博问答回答' data-id='"+obj.id+"'>我来回答</div>";
    });

    template.helper('getVideoAnswerButton', function(obj) {
        if(obj.forumAnswer!=null&&obj.forumAnswer.type=="6"&&obj.forumAnswer.iForumAnswer==true){
            return "<div class='btn-answer rqj-bt addy' data-type='"+ obj.forumAnswer.type +"' data-self='"+obj.forumAnswer.iForumAnswer+"' data-modalzt='视频回答' data-id='"+obj.id+"'>已被采纳</div>";
        }else if(obj.myselfForum == true){ //我的提问
            return ""
        }else  if(obj.forumAnswer.type == 6&&obj.forumAnswer.iForumAnswer!=true){
            return "";
        }else{
            if(obj.iAnswer){
                return "<div class='btn-answer rqj-bt addy' data-modalzt='视频修改' data-type='"+ obj.forumAnswer.type +"' data-self='"+obj.forumAnswer.iForumAnswer+"' data-zid='"+obj.iAnswerId+"' data-id='"+obj.id+"'>修改答案</div>" ;
            }else{
                return "<div class='btn-answer rqj-bt addy' data-modalzt='视频回答' data-type='"+ obj.forumAnswer.type +"' data-self='"+obj.forumAnswer.iForumAnswer+"' data-id='"+obj.id+"'>我来回答</div>";
            }

        }
    });


    /**
     * 返回问题修改或者问题补充按钮
     */
    template.helper('getUpdateForumOrAddDetailButton', function(obj) {
    	if(obj.iAccpetForumAnswer){
    		return "";
    	}
        if(!obj.iForum){ //当前人不是提问人
            if (obj.iForumAnswer){
                return " <span class='btn-qus-xg2 pointer' data-modalzt='博问答修改答案' data-id='"+obj.iForumAnswerId+"'><span class='glyphicon my-glyphicon-bc' aria-hidden='true'></span><span class='btn-item btn-qus-assist-add'>修改答案 </span></span><span class='gap' style='color: #999;font-size: 12px;font-weight: 100;'>|</span>";
            }
            return " <span class='btn-qus-hd pointer' data-modalzt='详情回答' data-id='"+obj.id+"'><span class='glyphicon my-glyphicon-huida' aria-hidden='true'></span><span class='btn-item btn-qus-assist-add'>我来回答 </span></span><span class='gap' style='color: #999;font-size: 12px;font-weight: 100;'>|</span>";
        }
        if(obj.type==7){
            return ;
        }
        if(obj.existsAnswer){ //已经有人回答了,那么按钮返回问题补充
            return " <span class='btn-qus-bc pointer'><span class='glyphicon my-glyphicon-bc' aria-hidden='true'></span><span class='btn-item gap btn-qus-assist-add'>问题补充 </span></span><span class='gap' style='color: #999;font-size: 12px;font-weight: 100;'>|</span>";
        }
        return " <span class='btn-qus-xg pointer'><span class='glyphicon my-glyphicon-xg' aria-hidden='true'></span><span class='btn-item gap btn-qus-add'>问题修改 </span></span><span class='gap' style='color: #999;font-size: 12px;font-weight: 100;'>|</span>";
    });

    //投诉判断
    template.helper('getUpdateForumOrAddDetailButtons', function(obj) {
        if(!obj.iForum){ //当前人不是提问人
            return " <span class='gap' style='color: #999;font-size: 12px;font-weight: 100;'>|</span><span class='btn-qus-hd pointer' data-modalzt='投诉'><span class='glyphicon my-glyphicon-tousu' aria-hidden='true'></span><span class='btn-item tousu'>投诉 </span></span>";
        }
        else{
            return ""
        }
    });

    template.helper('getMyselfForm', function(obj) { //我的收藏
        if(obj.myselfForum == true){ //我的提问
            return ""
        }else{
            if(obj.iAnswer){
                return "<div class='btn btn-answer rqj-bt addy' data-zid='" + obj.forumAnswer.id + "' data-modalzt='修改答案' data-type='"+ obj.forumAnswer.type +"' data-self='"+obj.forumAnswer.iForumAnswer+"' data-id='"+obj.iAnswerId+"'>修改答案</div>" ;
            }else{
                return "<div class='btn btn-answer rqj-bt addy' data-modalzt='博问答回答' data-type='"+ obj.forumAnswer.type +"' data-self='"+obj.forumAnswer.iForumAnswer+"' data-id='"+obj.id+"'>我来回答</div>";
            }

        }


    });
    template.helper('isForumAnswerAccept', function(num) {
        if(num==6){ //已采纳
            return "<span class='a_0' style='color:rgb(44, 184, 44);'>[已采纳答案]</span>";
        }else{
            return "<span class='a_0'><img src='../images/ansandqus/huida1.png' style='margin-right: 5px;'/>[最新回答]</span>";
        }

    });

    template.helper('ifStars', function( data) {
        var data = parseInt(data);
        if(data < 11) {
            data = 1;
        } else if (data < 31) {
            data = 2;
        } else if (data < 61) {
            data = 3;
        } else if (data < 101) {
            data = 4;
        } else {
            data = 5;
        }
        var star = "<span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span>";
        var result = "";
        for(var i = 0; i < data; i ++) {
            result += star;
        }
        return result;
    });

    //毫秒变日期
    template.helper('timeToDate', function( num) {
        var date = new Date(num);
        var dateStr = date.getMinutes() + ":" + date.getSeconds();
        return dateStr;
    });
    //后台时间日期年月日+时分秒截取
    template.helper("timeSplit",function(num){
    	var arr=num.split(" ");
    	return arr[0];
    });
	//博问答周排行榜头像
    template.helper('pic', function(obj) {
        if(obj=="/web/images/defaultHeadImg.jpg"){       
            return bath+obj;
        }else{
        	return obj;
        }
    });
    //头像
    template.helper('pictures', function(obj) {
        var path;
        if(obj){
            if (obj!="/web/images/defaultHeadImg.jpg") {
                path =obj;
                return path;
            } else {
                path =bath+obj
                return path;
            }
        }
    });

    //判断是否等于0
    template.helper('whether0', function(obj) {
        if(obj == 0){
            return "此问题暂无人回答";
        }else{
            return ""
        }
    });
    //已采纳
    template.helper('great', function(type) {
        if(type == "6") {
            return "selected";
        }
        return "";

    });
//博部答时间显示
    template.helper("timeTypeChange",function(time){
            var d_minutes,d_hours,d_days;
            var timeNow = parseInt(new Date().getTime()/1000);
            var time=parseInt(new Date(time.replace(/-/g,"/")).getTime()/1000);
            var d;
            d = timeNow - time;
            d_days = parseInt(d/86400);
            d_hours = parseInt(d/3600);
            d_minutes = parseInt(d/60);

        if(d_days==0 && d_hours==0 && d_minutes==0){
                return "刚刚";
            }else if(d_days==0 && d_hours<1 && d_minutes>0){
               return d_minutes+"分钟前";
            }else if(d_days==0 && d_hours<=5){
                return d_hours+"小时前";
            }else if(d_days==0 ){
                return "今天";
            }else if(d_days>0 && d_days<=1){
                return "昨天";
            }else if(d_days>1 && d_days<=2){
                return "前天";
            } else{
                var s = new Date(time*1000);
                // s.getFullYear()+"年";
                var month=s.getMonth()+1;
                var day=s.getDate();
                day=(day<10?"0"+day:day);
                month =(month<10 ? "0"+month:month);
                return (s.getFullYear()+"-"+month+"-"+day+"");
            }
    })
    //测试环境只能点击ID为1
    template.helper('href', function (num) {
        if (num != "") {
            return ''+bath+'/web/courseDetail/' + num;
        } else {
            return 'javascript:;';
        }
    });

//处理空格变问号
    template.helper('change',function(num){
//      if($(num).text()!=""&&$(num).text()){
//			var reg=/ */g;
//	        num=num.replace(reg,"");
//	        return $(num).text();	
//		}else{
//			return num;
//		}
		num="<p>"+num+"</p>";
		value=$(num).text()
	    value=value.replace(/\s/g,"");
		return  value;
   });
    

