/**
 * Created by Administrator on 2016/9/14.
 * fanwenqiang
 */
$(function () {
    var backgroundModal = "<div id='modalBackground' class='hide'></div>";
    var tousu = "<div id='tousu' class='modalFather payment-modal hide'>" +
        "<div class='modalHeader'>" +
        "<span>投诉理由</span>" +
        "<i class='iconfont icon-guanbi payment-modal-close'></i>"+
        "</div>" +
        "<div class='modalBody'>" +
        "<p><span></span>我要投诉的内容涉及</p>" +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="广告营销等垃圾信息" id="myradio1"/>' +
        '<span>广告营销等垃圾信息</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="抄袭内容" id="myradio2"/>' +
        '<span>抄袭内容</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="辱骂等不文明语言的人身攻击" id="myradio3"/>' +
        '<span>辱骂等不文明语言的人身攻击</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="色情或反动的违法信息" id="myradio4"/>' +
        '<span>色情或反动的违法信息</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="" id="myradio4"/>' +
        '<span>其他</span>' +
        '<input type="text" class="comment-content"/>' +
        '</label></br>' +
        "</div >" +
        '<div class="errorInfo"><img src="img/alter_14.png" alt=""/><span>请选择投诉理由</span></div>' +
        "<div class='modalFooter'>" +
        "<a>提交</a>" +
        "</div>" +
        "</div>";
    var tousu1 = "<div id='tousu1' class='modalFather payment-modal hide'>" +
        "<div class='modalHeader'>" +
        "<span>投诉理由</span>" +
        "<i class='iconfont icon-guanbi payment-modal-close'></i>"+
        "</div>" +
        "<div class='modalBody'>" +
        "<p><span></span>我要投诉的内容涉及</p>" +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="广告营销等垃圾信息" id="myradio1"/>' +
        '<span>广告营销等垃圾信息</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="抄袭内容" id="myradio2"/>' +
        '<span>抄袭内容</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="辱骂等不文明语言的人身攻击" id="myradio3"/>' +
        '<span>辱骂等不文明语言的人身攻击</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="色情或反动的违法信息" id="myradio4"/>' +
        '<span>色情或反动的违法信息</span>' +
        '</label></br>' +
        '<label><div class="radio-cover">' +
        '</div><input type="radio"  class="cy-myprofile-myfom-dv-radio" name="gender" value="" id="myradio4"/>' +
        '<span>其他</span>' +
        '<input type="text" class="comment-content"/>' +
        '</label>' +
        "</div >" +
        '<div class="errorInfo"><img src="img/alter_14.png" alt=""/><span>请选择投诉理由</span></div>' +
        "<div class='modalFooter'>" +
        "<a>提交</a>" +
        "</div>" +
        "</div>";
    var quxiaoshoucang = "<div id='quxiaoshoucang' class='modalFather payment-modal hide'>" +
        "<div class='modalHeader'>" +
        "<i class='iconfont icon-guanbi payment-modal-close'></i>"+
        "</div>" +
        "<div class='modalBody'>" +
        "<div><i class='iconfont icon-wenhao'></i></div>" +
        "<p class='tipType'>确定要取消收藏吗？</p>" +
        "</div>" +
        "<div class='modalFooter'>" +
        "<div>" +
        "<a class='yesBtn'>确定</a>" +
        "</div>" +
        "<div>" +
        "<a class='notBtn'>取消</a>" +
        "</div>" +
        "</div>" +
        "</div>";
    $("body").append(template.compile(backgroundModal)).append(template.compile(tousu)).append(template.compile(quxiaoshoucang)).append(template.compile(tousu1));
    $.fn.extend({
        paymentModal: function (id) {
            var obj = this;

            $(".payment-modal .payment-modal-close").click(function () {	//点击关闭按钮关闭模态
                $(".payment-modal").addClass('hide');
                $('#modalBackground').addClass('hide');
                $(".payment-modal-body input").val('');
                $(".payment-modal-body textarea").val('');
                $("#addAccount1Text").html("");
                $("#addAccount1Text1").html("");
                $("#pay_code_r").html("");
            });

            $("." + id).bind("myclick", function () { //点击显示模态
                $('#modalBackground').removeClass('hide');
                $(obj).removeClass('hide');
                $(obj).css({"top": "50%", "left": "50%"});
                $(obj).css("margin-left", "-" + ($(obj).width() / 2) + "px");	//模态水平居中
                $(obj).css("margin-top", "-" + ($(obj).height() / 2) + "px");	//模态垂直居中
            }).trigger("myclick");
        },
    });
});






