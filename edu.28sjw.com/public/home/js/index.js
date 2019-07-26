/**
 * Created by admin on 2016/7/27.
 */

// 轮播图
function init() {
    var $sliders = $('#slider li');
    var $selector = $('#selector');
    var $selectors = $('#selector span');
    var $left = $('#left');
    var $right = $('#right');
    var arg = $selector.width() / 2;
    $selector.css("left", "50%");
    $selector.css("marginLeft", -arg);
    //自动切换
    var step =0;

    function autoChange() {
        if (step === $sliders.length) {
            step = 0;
        };
        $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
        $selectors.eq(step).addClass('cur').siblings().removeClass('cur');
        step++;
    }

    var timer = window.setInterval(autoChange, 5000);

    //点击圆圈切换
    $selector.on('click', function (e) {
        var $target = $(e.target);
        if ($target.get(0).tagName === 'SPAN') {
            window.clearInterval(timer);
            $target.addClass('cur').siblings().removeClass('cur');
            step = $target.index();
            $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
            timer = window.setInterval(autoChange, 5000);
        }
    });

    //点击左右按钮切换
    $left.on('click', function () {
        window.clearInterval(timer);
        step--;
        if (step < 0) {
            step = $sliders.length - 1;
            $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
            $selectors.eq(step).addClass('cur').siblings().removeClass('cur');
        } else {
            $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
            $selectors.eq(step).addClass('cur').siblings().removeClass('cur');
        }
        timer = window.setInterval(autoChange, 5000);
    })
    $right.on('click', function () {
        window.clearInterval(timer);
        step++;
        if (step > $sliders.length - 1) {
            step = 0;
            $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
            $selectors.eq(step).addClass('cur').siblings().removeClass('cur');
        } else {
            $sliders.eq(step).fadeIn(800).siblings().fadeOut(800);
            $selectors.eq(step).addClass('cur').siblings().removeClass('cur');
        }
        timer = window.setInterval(autoChange, 5000);
    })
}
$(function() {
    init();
})

//测试环境只能点击ID为1
// template.helper('href', function (num) {
//     if (num != "") {
//         return '' + bath + '/web/courseDetail/' + num;
//     } else {
//         return 'javascript:;';
//     }
// });
// var strcourse =
//     '{{each item}}' +
//     '<div class="course clearfix">' +
//     '{{#indexHref($value.description_show,$value.free,$value.id,$value.courseType)}}'+
//     '{{#hasImg($value.smallImgPath)}}' +
//     '{{#online($value.courseType)}}' +
//     '<div class="detail">' +
//     '<p class="title" data-text="{{$value.gradeName}}" title="{{$value.gradeName}}">{{$value.gradeName}}</p>' +
//     '<p class="timeAndTeac">' +
//     '<span>{{#timeChange($value.courseLength)}}</span><i>|</i>' +
//     '<span>讲师：<span class="teacher">{{$value.name}}</span></span>' +
//     '</p>' +
//     '<p class="info clearfix">' +
//     '<span>' +
//     '{{if $value.free == true}}' +
//     '<span class="pricefree">免费</span>' +
//     '{{else}}' +
//     '<i>￥</i><span class="price">{{$value.currentPrice}}</span><del><i class="price1">￥</i>{{$value.originalCost}}</del>' +
//     '{{/if}}' +
//     '</span>' +
//     '<span class="stuCount"><img src="img/studentCount.png" alt=""/><span class="studentCou">{{$value.learnd_count}}</span></span>' +
//     '</p>' +
//     '</div>' +
//     '</a>' +
//     '</div>' +
//     '{{/each}}';
// var recommendCourse='{{each item}}'+
//         '<li data-indexRecmmentId="{{$value.id}}">' +
//         '{{#indexHref($value.description_show,$value.free,$value.id,$value.courseType)}}'+
//         '{{#hasImg($value.recImgPath)}}' +
//         '<div class="recommend-course-items-details clearfix">'+
//         '<p class="recommend-courseName" title="{{$value.gradeName}}">{{$value.gradeName}}</p>'+
//         '<div class="teachersInfo">'+
//         '<span>{{$value.courseLength}}小时</span><i>|</i>'+
//         '<span>讲师：{{$value.name}}</span>'+
//         '</div>'+
//         '<div class="courseDetails clearfix">'+
//         '{{if $value.free==true}}'+
//         '<span class="pricefree">免费</span>' +
//         '{{else}}'+
//         '<span class="coursePrice"><i>￥</i>{{$value.currentPrice}}</span><del><i class="price1">￥</i>{{$value.originalCost}}</del>'+
//         '{{/if}}'+
//         '<span class="studentCount"><img src="img/studentCount.png" alt=""/><span class="studentCou">{{$value.learnd_count}}</span></span>'+
//         '</div>'+
//         '</div></a>' +
//         '</li>'+
//         '{{/each}}';
// var livingCourse='{{each items}}'+
//     '<li>' +
//     '{{if $value.direct_seeding==1}}'+
//     '<a style="cursor:pointer"  data-url="/web/html/liveVideo.html?roomId={{$value.direct_id}}&courseId={{$value.id}}" >'+
//     '{{else}}'+
//     '<a style="cursor:pointer"  data-aurl="{{$value.external_links}}" >'+
//     '{{/if}}'+
//     '{{#hasImg($value.smallimg_path)}}' +
//         '<div class="public-class-live-detail">'+
//         '<div class="detailCourseInfo clearfix">'+
//         '<div class="detailCourseName" title="{{$value.courseName}}">{{$value.courseName}}</div>'+
//         '<div class="detailTeacher">讲师：{{$value.teacherName}}</div>'+
//         '</div>'+
//         '{{if $value.broadcastState==1}}'+
//         '<div class="detailLiveInfo clearfix">'+
//         '<div class="detailLiveDate">最近直播：{{$value.formatStartTime}}</div>'+
//         '<div class="detailLiving zhiboStart">'+
//         '{{if $value.direct_seeding==1}}'+
//         '<span class="enter-livingClass" href="/web/html/liveVideo.html?roomId={{$value.direct_id}}&courseId={{$value.id}}" target="_blank">进入教室</span>'+
//         '{{else}}'+
//         '<span class="enter-livingClass" href="{{$value.external_links}}" target="_blank">进入教室</span>'+
//         '{{/if}}'+
//         '<img src="/web/images/zhibo.gif" alt=""/>'+
//         '<span class="living">直播中</span>'+
//         '</div></div></div>'+
//         '{{else}}'+
//         '<div class="detailLiveInfo clearfix">'+
//         '<div class="detailLiveDate">最近直播：{{$value.formatStartTime}}</div>'+
//         '<div class="detailLiving">'+
//         '<img src="img/zhiboNoStart.png" alt=""/>'+
//         '<span class="noStart">直播未开始</span>'+
//         '{{/if}}'+
//         '</div></div></div>'+
//         '</a></li>'+
//         '{{/each}}';
// var lastestNews = '{{each items}}' +
//     '{{if $value.is_hot==true}}' +
//     '<li data-newsId="{{$value.id}}"><em class="hotNewsEm"></em><a class="hotNews" href="{{$value.href_adress}}" target="_blank" title={{$value.name}}>{{$value.name}}</a></li>' +
//     '{{else}}' +
//     '<li data-newsId="{{$value.id}}"><em></em><a  href="{{$value.href_adress}}" target="_blank" title={{$value.name}}>{{$value.name}}</a></li>' +
//     '{{/if}}' +
//     '{{/each}}';

// //加载一、二级导航
// //课程列表请求数据
// firstAjax();

// function firstAjax() {
//     RequestService("/menu/getAllMenu", "GET", "", function (data) {
//         var $container = $('#tabFirst').empty();
//         var $odiv = $('#tabSecond').empty();

//         $.each(data.resultObject, function (index, item) {
//             if (index === 0) {
//                 $container.append('<li class="select" data-number="' + item.id + '" ><span>' + item.name + '</span></li>');
//             } else if (index < 8) {
//                 $container.append('<li data-number="' + item.id + '"><span>' + item.name + '</span></li>');
//             }
//         })
//         $.each(data.resultObject[0].sencodMenu, function (index, item) {
//             if (index === 0) {
//                 $odiv.append('<li class="cur" data-number="' + item.menuId + '"  data-type="' + item.courseTypeId + '">' + item.name + '</li>');
//             } else if (index < 8) {
//                 $odiv.append('<li data-number="' + item.menuId + '"  data-type="' + item.courseTypeId + '">' + item.name + '</li>');
//             }
//         });
//         var param = {
//             pageNumber: 1,
//             pageSize: 1000
//         };
//         secondAjax(0, 0, param);
//         //给一级导航绑定单击事件
//         $container.find("li").on('click', function (e) {
// //      	$("html,body").scrollTop($("#main").offset().top);
//             var $target = $(e.target);
//             //			if($target.get(0).tagName === "LI") {
//             var $odiv = $('#tabSecond').empty();
//             $(this).addClass('select').siblings().removeClass('select');
//             $.each(data.resultObject[$(this).index()].sencodMenu, function (index, item) {
//                 if (index === 0) {
//                     $odiv.append('<li class="cur" data-number="' + item.menuId + '" data-type="' + item.courseTypeId + '">' + item.name + '</li>');
//                 } else {
//                     $odiv.append('<li data-number="' + item.menuId + '"  data-type="' + item.courseTypeId + '">' + item.name + '</li>');
//                 }
//             })
//             var param = {
//                 pageSize: 1000,
//                 pageNumber: 1
//             }
//             secondAjax($(this).attr("data-number"), $(this).attr("data-type"), param);
//             //			} else {
//             //			}
//         })
//     });
// }
// function secondAjax(i, a, param) {
//     RequestService("/course/getPageCourseByMenuId", "GET", {
//         menuId: i ? i : 0,
//         couseTypeId: a ? a : 0,
//         pageNumber: param.pageNumber ? param.pageNumber : 1,
//         pageSize: param.pageSize ? param.pageSize : 1000

//     }, function (data) {
//         $("#log .pages").css({"display": "none", "text-align": "right"});
//         if (data.resultObject.items.length == 0) {
//             $('#content').empty();
//             $("#emptyTitle").css("display", "block");
//         } else {
//             $("#emptyTitle").css("display", "none");
//             //课程列表
//             $("#content").html(template.compile(strcourse)({
//                 item: data.resultObject.items
//             }));
//             $(".searchPage").css("display","none");
//             if (data.resultObject.totalPageCount > 1) { //分页判断
//                 $(".not-data").remove();
//                 $("#log .pages").css({"display": "block", "text-align": "right"});
//                 $("#log .pages .searchPage .allPage").text(data.resultObject.totalPageCount);
//                 if (data.resultObject.currentPage == 1) {
//                     $("#Pagination").pagination(data.resultObject.totalPageCount, {
//                         callback: function (page) {//翻页功能
//                             var pageParam = {
//                                 pageNumber: (page + 1),
//                                 pageSize: "1000"
//                             };
//                             secondAjax(i, a, pageParam);
//                         }
//                     });
//                 }
//                 $(".view-content-notbodys").html("");
//             } else if (data.resultObject.totalPageCount = 1 && data.resultObject.totalCount > 0) {
//                 $("#log .pages").css({"display": "none", "text-align": "right"});
//                 $(".view-content-notbodys").html("");
//             }
//         }
//         //给二级导航绑定单击事件
//         $('#tabSecond').off().on('click', function (e) {
// //      	$("html,body").scrollTop($("#main").offset().top);
//             var $target = $(e.target);
//             $($target).addClass('cur').siblings().removeClass('cur');
//             if ($target.get(0).tagName == "LI") {
//                 $('#content').empty();
//                 var $odiv = $('#content');
//                 var a = $($target).index();
//                 var param = {
//                     pageSize: 1000,
//                     pageNumber: 1
//                 }
//                 secondAjax($target.attr("data-number"), $target.attr("data-type"), param);
//             } else {
//                 return false;
//             }
//         })

//     });
// }





