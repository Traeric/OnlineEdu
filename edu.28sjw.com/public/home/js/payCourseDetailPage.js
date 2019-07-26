/**
 * Created by Administrator on 2016/7/28.
 * IE只认可year/month/day格式 不认可year-month-day格式
 */

//解析url地址
var ourl = document.location.search;
var apams = ourl.substring(1).split("&");
var arr = [];
for (i = 0; i < apams.length; i++) {
    var apam = apams[i].split("=");
    arr[i] = apam[1];
    var courserId = arr[0];
    var courseType=arr[1];
    var fre=arr[2];
};
if (courserId == "undefined") {
    var courserId = 142;
}

window.onload = function () {
    $(".header_left .path a").each(function () {
        if ($(this).text() == "云课堂") {
            $(this).addClass("select");
        } else {
            $(this).removeClass("select");
        }
    });
    template.helper('href', function (num) {
        if (num != "") {
            return '' + bath + '/web/courseDetail/' + num;
        } else {
            return 'javascript:;';
        }
    });
    template.helper("stuEvluatStars",function(num){
        var start="";
        for(var i=0;i<num;i++){
            start+= '<i class="iconfont icon-shoucang"></i>';
        }
        return start;
    });
    /*相关课程*/
    var relativeCourse =
        '<div class="relative-course-top clearfix">' +
        '<span>推荐课程</span>' +
        '<span class="by-the-arrow">' +
        '<span class="curCount currentLunbo">1</span>' +
        '<span class="curCount">/</span>' +
        '<span class="curCount allLunbo">1</span>' +
        '<span class="prev" id="prev"></span>' +
        '<span class="next" id="next"></span>' +
        '</span>' +
        '</div>' +
        "<div class='relativeAnsNoData'>" +
        "<img src='../images/ansandqus/my_nodata.png'/>" +
        "<p>暂无数据</p>" +
        "</div>" +
        '<div class="relative-course-bottom slide-box clearfix">' +
        '<div id="box" class="slideBox clearfix">' +
        '<ul class="course boxContent clearfix">' +
        '{{each item as $value i}}' +
        "<li>" +
        '{{#indexHref($value.description_show,$value.free,$value.id,$value.scoreName)}}'+
        '{{#qshasImg($value.smallImgPath)}}' +
        '{{#online($value.scoreName)}}' +
        '<div class="detail">' +
        '<p class="title" data-text="{{$value.courseName}}" title="{{$value.courseName}}">{{$value.courseName}}</p>' +
        '<p class="info clearfix">' +
        '<span>' +
        '{{if $value.free == true}}' +
       		 '<span class="pricefree">免费</span>' +
        '{{else}}' +
        '<i>￥</i><span class="price">{{$value.currentPrice}}</span><del><i class="price1">￥</i>{{$value.originalCost}}</del>' +
        '{{/if}}' +
        '</span>' +
        '<span class="stuCount"><img src="img/studentCount.png" alt=""/><span class="studentCou">{{$value.learndCount}}</span></span>' +
        '</p>' +
        '</div>' +
        '</a>' +
        "</li>" +
        '{{/each}}' +
        '</ul>' +
        '</div></div>';

    var modal =
        '<div class="rTips">报名失败，请刷新页面重试</div>' +
        '<div class="sign-up-title">' +
        '<span class="sign-up-title-left">课程报名</span>' +
        '<img src="img/alter.png">' +
        '</div>' +
        '<div class="sign-up-body">' +
        '<div class="sign-up-body-top">' +
        '<img src="{{bigImgPath}}"/>' +
        '<div class="sign-up-body-top-right">' +
        '<p class="sign-up-body-top-right-name">{{courseName}}</p>' +
        '<p class="sign-up-body-top-right-body" title="{{description}}">{{description}}</p>' +
        '</div>' +
        '</div>' +
        '<div class="sign-up-body-center">' +
        '<p>系统升级中！即将进入<span>“腾讯课堂-传智博客云课堂”</span>；我们的努力，只为更好的你！</p>' +
        '</div>' +
        '<div class="sign-up-body-bottom">' +
        '{{if free == true}}' +
        	'<p>价格：<span class="mianfei">免费</span></p>' +

        '</div>' +
        '<a class="gotengxun" target="_blank">' +
        '确认报名' +
        '</a>' +
        '</div>' +
        '{{else}}' +
        '<p>价格：<span>￥{{currentPrice}}</span><del>￥{{originalCost}}</del></p>' +
        '</div>' +
        '<a class="gotengxun" target="_blank">' +
        '去购买' +
        '</a>' +
        '</div>' +
        '{{/if}}';

    var problem =
        '{{each item as p}}' +
        '<p class="questionName" style="padding-right: 30px;">{{p.questionName}}</p>' +
        '<p class="problem-answers" style="padding-right: 30px;"><span>回答：</span>{{p.answers}}</p>' +
        '{{/each}}'
    var teacher =
        '<div style="width:110%;overflow:hidden">' +
        '{{each item as i}}' +
        '<div class="teacher">' +
        '<img src="{{i.headImg}}" />' +
        '<div class="teacher-text">' +
        '<p class="teacher-name">{{i.name}}</p>' +
        '<p class="teacher-company">传智&博学谷</p>' +
        '<p class="teacher-introduction" style="height: 170px;" title="{{i.description}}">{{i.description}}</p>' +
        '</div>' +
        '</div>' +
        '{{/each}}' +
        "</div>";
    var haoping='<div class="good-reputation">'+
            '<div class="good-reputation-count">'+
            '<span>好评</span><span class="goodPing"></span>'+
            '<span class="totalPeople">(<span class="totalCount"></span>条评论，<span class="haopingCount"></span>条好评)</span>'+
            ' </div> </div>';

    var stuEvalutation= '<div class="studentEvaluate">'+
            '{{each item}}'+
            ' <div class="good-repuBox clearfix">'+
            '<div class="repuImg">'+
            '{{#hasImg($value.smallPhoto)}}' +
            '<span class="repuName" title="{{$value.userName}}">{{$value.userName}}</span>'+
            '</div>'+
            '<div class="good-detail-info">'+
            '<div class="starts">'+
            '{{#stuEvluatStars($value.starLevel)}}'+
            '</div>'+
            '<div class="reputationContent">{{$value.content}}</div>'+
                '<div class="repuationRelatInfo clearfix">'+
                    '<div class="repuTime">时间：{{dataSub($value.createTime)}}</div>'+
                    '<div class="repuOrigin">来源：{{$value.videoName}}</div>'+
                    '<div class="repuHitZan">'+
                    '<i class="iconfont icon-zan"></i><span class="repuHitZanCount">{{$value.praiseSum}}</span>'+
                    '</div>' +
                '</div>' +
            '{{if $value.response!=null && $value.response!=""}}'+
            '<div class="releaseOffice"><span class="office_a">博学谷回复：</span><p class="office_b">{{$value.response}}</p><span class="office_c">{{dataSub($value.response_time)}}</span></div>'+
            '{{/if}}'+
            '</div>' +
            '</div>' +
            '{{/each}}'+
        '</div>';

    var mytitlelist = '<div class="bigpic-img">' +
        '<img src="{{item.bigImgPath}}"/>' +
        '</div>' +
        '<div class="bigpic-body">' +
        '<span class="bigpic-body-title">' +
        '<span class="bigpic-body-title-nav">{{item.courseName}}</span>' +
        '{{if item.recommend==true}}' +
        '<i class="iconfont icon-jingpin jingpingCourse"><span>精</span></i>'+
        '{{/if}}' +
        '</span>' +
        '{{if item.currentPrice!="0.00"}}'+
        '<span id="d_clip_button" class="shareCourse" data-clipboard-target="fe_text">分享课程，赚取学费<em>>></em></span>'+
        '{{/if}}'+
        '<p class="bigpic-body-text dot-ellipsis" title="{{item.description}}">{{item.description}}</p>' +
        '<p class="bigpic-body-list">' +
        '<span class="body-list-right">主讲：{{item.teacherName}}</span>' +
        '<span class="body-list-right myTimes" title="课程时长" style="cursor:default">学习时长：{{#timeChange(item.courseLength)}}</span>' +
        '<span title="学习人数" style="cursor:default">学习人数：{{item.learndCount}}人已学习</span>' +
        '{{if item.apply==true}}'+
        '<span title="有效期" style="cursor:default;color:#333;" class="youxiaoqi">有效期：1年' +
        '<span class="yibaoming"><img src="img/baoming.png"/></span>'+
        '</span>' +
        '{{else}}' +
        '<span title="有效期" style="cursor:default;color:#333;" class="youxiaoqi">有效期：1年' +
        '<span class="yibaoming" style="display:none"><img src="img/baoming.png"/></span>'+
        '</span>' +
        '{{/if}}'+
        '</p>' +
        '{{if item.free == true}}' +
        '<p class="bigpic-body-money">' +
        	'<span class="bigpic-body-overmoney">免费</span>' +
        '</p>' +
        '</div>' +
        '{{else}}' +
        '<p class="bigpic-body-money">' +
        '<span class="bigpic-body-redmoney">￥{{item.currentPrice}}</span>' +
        '<del class="bigpic-body-notmoney">￥{{item.originalCost}}</del>' +
        '</p>' +
        '<div class="bigpic-body-btn">' +
        '{{if item.apply==false}}'+
        '<a  href="javascript:;" class="gotengxun purchase">立即报名</a>' +
        '{{if item.currentPrice!="0.00"}}' +
        '<a class="free-try-to-lean" >免费试学</a>' +
        '{{/if}}'+
        '{{else}}'+
        '<a href="/web/html/CourseDetailZhiBo.html?courseId='+courserId+'" class="purchase" >立即学习</a>' +
        '{{/if}}'+
        '</div>' +
        '</div>' +
        '{{/if}}';
    var courseList = '{{each items}}' +
        '<div class="classgrand">{{$value.name}}</div>' +
        '<div class="course-time">报名截止时间：' + '<span>{{dataSub($value.curriculumTime)}}</span>' + '</div>' +
        '{{if $value.openClass==true}}' +
        '<div class="baoming"><em></em>' +
        '<span>已报名人数：<span style="color:#ff4012">{{$value.studentCount}}人</span></span>' +
        '</div>' +
        '<div class="online"><a class="sign-up" href="javascript:;"><img src="/web/images/baoming.gif" class="bm"></a>' +
        '</div>' +
        '</div>' +
        '{{else}}' +
        '<div class="baoming"><i></i>' +
        '<span>已报名人数：<span style="color:#ff4012">{{$value.studentCount}}人</span></span>' +
        '</div>' +
        '<div class="online"><a class="sign-up a1" href="javascript:;">报名已结束</a>' +
        '<img class="onlineImg" src="img/finish.png"/>'+
        '</div>' +
        '</div>' +
        '{{/if}}' +
        '{{/each}}';
        var emptyDefaul =
            "<div class='page-no-result'>" +
            "<img src='../images/personcenter/my_nodata.png'>" +
            "<div class='no-title'>暂无数据</div>" +
            "</div>";
    var courseOutline='<div class="table-school">'+
            '<div class="table-school-body">'+
            '{{each items}}'+
                '<p class="school-chapter">'+
                '<span class="bcg"></span>'+
                '<span class="school-chapter-text"><span>{{$value.name}}</span>'+
                '</p>'+
            '<div class="details-div">'+
                '{{each $value.chapterSons as $second d}}'+
                '<p class="details-div-title">{{$second.name}}</p>'+
                '<div class="details-div-body">'+
                '{{each $second.chapterSons as $third t}}'+
                '<p title="{{t+1}}-{{$third.name}}">{{t+1}}-{{$third.name}}</p>'+
                '{{/each}}'+
                '{{if $second.chapterSons.length%2!=0}}'+
                '<p></p>'+
                '{{/if}}'+
                '</div>'+
                '{{/each}}'+
            '</div>' +
            '{{/each}}'+
            '</div>' +
            '</div>';
    function rTips(errorMessage){
        $(".rTips").text(errorMessage);
        $(".rTips").css("display","block");
        setTimeout(function(){
            $(".rTips").css("display","none");
        },2000)
    }
    $("#payCourseSlider .purchase").attr("href",'/web/html/order.html?courseId='+courserId);
    $("#payCourseSlider .studyImmed").attr("href",'/web/html/myStudyCenter.html?free='+fre);
    var free;
    RequestService("/grade/findGradeInfoByCourseId", "GET", {
        courseId: courserId
    }, function (data) {
        /*$('#detail-course').html(template.compile(courseList)({
            items:data.resultObject
        }))*/
        RequestService("/course/getCourseById", "POST", {
            courserId: courserId
        }, function (data) {
            free = data.resultObject.free;
            $(".sidebar-body-QQ-name").append("<p class='greend-QQnumber'><span>QQ号 : </span>"+
        "<a href='tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin="+data.resultObject.qqno+"' >"+ data.resultObject.qqno + "</a></p>")
            document.title = data.resultObject.courseName + " - 博学谷云课堂";
            $(".bigpic-title").html(template.compile(mytitlelist)({
                item: data.resultObject
            }));
            //面包宵导航
            if(data.resultObject.description_show==0){//不显示课程介绍页
                $("#NoShowIntroduct").css("display","block");
            }else{
                $("#showIntroduct").css("display","block");
            }
            $(".myClassName").text(data.resultObject.courseName);
            $(".myClassName").attr("href","/web/html/courseIntroductionPage.html?id="+courserId+'&courseType='+courseType+'&free='+fre);
            $(".enter-class").attr("href", data.resultObject.cloudClassroom);
            $(".course-details").click();
            $(".gotengxun").click(function(){
                RequestService("/video/findVideosByCourseId", "GET", {
                    courseId:courserId
                }, function(data) {
                    if(data.success == true){
                       window.location.href="/web/html/order.html?courseId="+courserId;
                    }else{
                        rTips(data.errorMessage);
                    }
                });
            });
            var bigHeight=$(".bigpic").outerHeight(true);
            var introHeight=$("#introductBox").outerHeight(true);
            var navHeight=$(".nav").outerHeight(true);
            var height=bigHeight+introHeight+navHeight;
            $(document).scroll(function () {
                if ($(document).scrollTop() > height+61) {
                    $("#payCourseSlider").slideDown(100);
                } else {
                    $("#payCourseSlider").slideUp(100);
                }
            });
            if(data.resultObject.apply==true){
                $("#payCourseSlider .purchase").css("display","none");
                $("#payCourseSlider .studyImmed").css("display","block");
            }else{
                $("#payCourseSlider .purchase").css("display","block");
                $("#payCourseSlider .studyImmed").css("display","none");
            }
            var pathName=location.pathname;
            var serach=location.search;
            var url=pathName+serach;
            url = url.replace(/\?/g,'--').replace(/&/g,'@@');
            RequestService("/online/user/isAlive", "GET", "", function (data) {
                    if (!data.success) {
                        $("#d_clip_button").click(function(){
                            localStorage.username = null;
                            localStorage.password = null;
                            if ($(".login").css("display") == "block") {
                                $(".login").css("display", "none");
                                $(".logout").css("display", "block");
                                $('#login').modal('show');
                            } else {
                                $('#login').modal('show');
                            }
                            return;
                        });
                    } else {
                        if(data.resultObject.shareCode==null){
                            $("#d_clip_button").click(function(){
                                $(".noShareDaShi").css("display","block");
                            });
                        } else {
                            var sUrl="http://"+window.location.hostname+"/share?usercode="+data.resultObject.shareCode+"__"+url;
                            RequestService("/short/url","POST",{url:sUrl},function(data){
                                if(data.success==true){
                                    $(".sharUrl").val(data.resultObject);
                                    // 定义一个新的复制对象
                                    var clip = new ZeroClipboard(document.getElementById("d_clip_button"), {
                                        moviePath: "/web/js/ZeroClipboard/ZeroClipboard.swf"
                                    } );
                                    // 复制内容到剪贴板成功后的操作
                                    clip.on('complete', function(client, args) {
                                        $(".shareDaShi").css("display","block");
                                    });
                                }
                            });
                        }
                    }
                });

            share();
        function share(){
            $(".shareDaShi i").click(function(){
                $(".shareDaShi").css("display","none");
            });
            $(".noShareDaShi i").click(function(){
                $(".noShareDaShi").css("display","none");
            });
            $(".shareBtn").click(function(){
                $(".shareDaShi").css("display","none");
            });
            $(".getZige").click(function(){
                $(".noShareDaShi").css("display","none");
                window.open("/web/share/share.html?shareUrl="+pathName+serach);
            });
        }

            //免费试学
            $(".free-try-to-lean").on("click", function () {
                RequestService("/online/user/isAlive", "GET", "", function (data) {
                    if (!data.success) {
                        localStorage.username = null;
                        localStorage.password = null;
                        if ($(".login").css("display") == "block") {
                            $(".login").css("display", "none");
                            $(".logout").css("display", "block");
                            $('#login').modal('show');
                        } else {
                            $('#login').modal('show');
                        }
                        return;
                    } else {
                        window.open("/web/html/freeAudition.html?courseId=" + courserId);
                    }
                }, false);
            })
        });
    });
    $(".course-problem").click(function () {
        $(".pages").css("display","none");
        RequestService("/course/getCourseById", "GET", {
            courserId: courserId
        }, function (data) {
            if(data.resultObject.commonProblem==null || data.resultObject.commonProblem==""){
                $(".table-modal").html(template.compile(emptyDefaul));
            }else {
                $(".table-modal").html(data.resultObject.commonProblem);
            }
        })
    });
    $(".course-outline").click(function () {
        $(".pages").css("display","none");
        RequestService('/course/getCourseCatalog',"GET",{courseId:courserId},function(data){
            if(data.resultObject.length==0){
                $(".table-modal").html(template.compile(emptyDefaul));
            }else{
                //获取其他数据
                $(".table-modal").html(template.compile(courseOutline)({
                    items:data.resultObject
                }));
                for (var i = 0; i < $(".details-div-body p").length; i++) {
                    var $this = $(".details-div-body p").eq(i);
                    var last = $this.text().substring($this.text().length - 3, $this.text().length);
                    if (last == ".. ") {
                        $this.attr("data-txt", $this.attr("data-text"))
                    }
                }
            }
        });
    });
    var haopingCount,totalCount,haopinglv;
    var list={
        pageNumber: 1,
        pageSize: 10
    };
    function Evalutation(){
        RequestService("/course/findStudentCriticize",'GET',{
            courseId:courserId,
            pageNumber:list.pageNumber,
            pageSize:list.pageSize
        },function(data1){
            if(data1.resultObject.items.length==0){
                $(".table-modal").html(template.compile(emptyDefaul));
            }else{
                $(".table-modal").html(template.compile(stuEvalutation)({
                    item:data1.resultObject.items
                }));
                RequestService("/course/getGoodCriticizSum","GET",{courseId:courserId},function(data2){
                    $(".good-repuBox:first-child").before(template.compile(haoping));
                    totalCount=data1.resultObject.totalCount;
                    haopingCount=data2.resultObject;
                    haopinglv=data2.resultObject/data1.resultObject.totalCount*100;
                    haopinglv=haopinglv.toFixed(1)+"%";
                    $(".haopingCount").text(haopingCount);
                    $(".totalCount").text(totalCount);
                    $(".goodPing").text(haopinglv)
                });
                if(data1.resultObject.totalPageCount>1){
                    $(".pages").css("display", "block");
                    if(data1.resultObject.currentPage==1){
                        $("#Pagination").pagination(data1.resultObject.totalPageCount, {
                            callback: function(page) { //翻页功能
                                list.pageNumber = (page + 1);
                                list.pageSize = 10;
                                Evalutation();
                            }
                        });
                    }

                    /* $(".pagination a").eq(list.pageNumber-1).addClass("current").siblings().removeClass("current");*/
                }else{
                    $(".pages").css("display", "none");
                }
            }
        })
    };

    $(".course-evaluate").click(function(){
        Evalutation();
    });
    $(".course-details").click(function () {
        RequestService("/course/getCourseById", "GET", {
            courserId: courserId
        }, function (data) {
            if(data.resultObject.courseDetail==null || data.resultObject.courseDetail==""){
                $(".table-modal").html(template.compile(emptyDefaul));
            }else {
                //获取其他数据
                $(".table-modal").html("<div class='pic'>" + data.resultObject.courseDetail + "</div>");
            }
        })
    });
    $(".course-teacher").click(function () {
        RequestService("/lecturer/list/course/" + courserId, "GET", "", function (data) {
            if(data.resultObject.length==0){
                $(".table-modal").html(template.compile(emptyDefaul));
            }else {
                $(".table-modal").html(template.compile(teacher)({
                    item: data.resultObject
                }));
                $(".teacher-introduction").dotdotdot();
                for (i = 0; i < $(".teacher-introduction").length; i++) {
                    var $this = $(".teacher-introduction").eq(i);
                    var last = $this.text().substring($this.text().length - 3, $this.text().length);
                    if (last == ".. ") {
                        $this.attr("data-txt", $this.attr("data-text"))
                    }
                }
            }
        });
    });
    RequestService("/course/getRecommendCourseByCourseId", "GET", {
        courseId: courserId
    }, function (data) {
        $(".relative-course").html(template.compile(relativeCourse)({
            item: data.resultObject
        }));
        if (data.resultObject == "" || data.resultObject == null) {
            $(".by-the-arrow").css("display", "none");
            $(".by-the-arrow").css("display", "none");
            $(".slide-box").css("display", "none");
        } else {
            $(".relativeAnsNoData").css("display", "none");
            $(".boxContent li").eq(0).addClass("diyiye");
            $(".allLunbo").html(data.resultObject.length);
            var $index = 0;
            var $exdex = 0;
            $("#next").click(function () {
                if ($index + 1 >= $(".allLunbo").text()) {
                    return false;
                } else {
                    $index++;
                }
                next();
                return $exdex = $index;
            })
            $("#prev").click(function () {
                if ($index - 1 < 0) {
                    return false;
                } else {
                    $index--;
                }
                pre();
                return $exdex = $index;
            })
        }
        function next() {
            $(".currentLunbo").html($index + 1);
            $(".boxContent li").eq($index).stop(true, true).
                css("left", "100%").animate({"left": "0"});
            $(".boxContent li").eq($exdex).stop(true, true).
                css("left", "0").animate({"left": "-100%"});
        }

        function pre() {
            $(".currentLunbo").html($index + 1);
            $(".boxContent li").eq($index).stop(true, true).
                css("left", "-100%").animate({"left": "0"});
            $(".boxContent li").eq($exdex).stop(true, true).
                css("left", "0").animate({"left": "100%"});
        }
    });
    //省略号
    var $dot5 = $('.bigpic-body-text');
    $($dot5).each(function () {
        if ($(this).height() > 80) {
            $(this).attr("data-txt", $(this).attr("data-text"));
            $(this).height(92);
        }
    });
    $('.bigpic-body-text').dotdotdot();
};

$('.online').on('click', function () {
    $('.online').css("background", "#23a523")
});
$('.enter-class').on('click', function () {
    $('.enter-class').css("background", "#23a523")
});
var bitS;
var bitS2;
$(".cu-shou").click(function(){
    if($(this).hasClass("noClick")){

    } else{
        $(".cu-shou").removeClass("noClick").addClass("notpointer");
        $(this).addClass("noClick").removeClass("notpointer");
        bitS=$(this).text();
        $("#payCourseSlider li").each(function(){
            if($(this).text()==bitS){
                $(this).addClass("noClick").removeClass("notpointer");
            }
        })
    }
});
$("#payCourseSlider li").click(function(){
    $(".cu-shou").removeClass("noClick").addClass("notpointer");
    $(this).addClass("noClick").removeClass("notpointer");
    bitS2=$(this).text();
    $(".table-title span").each(function(){
        if($(this).text()==bitS2){
            $(this).addClass("noClick").removeClass("notpointer");
        }
    })
})

/**
 * Created by admin on 2016/11/1.
 */
