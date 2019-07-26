<?php

namespace App\Http\Controllers\Home;

use App\Admin\Profession;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use NativePay;
use WxPayUnifiedOrder;

class ProfessionController extends Controller
{
    public function detail()
    {
        $data = Profession::find(Input::get('id'));
        // 展示视图
        return view('home.profession.detail', compact('data'));
    }

    public function makeOrder()
    {
        // 查询数据
        $data = Profession::find(Input::get('id'));
        // 展示视图
        return view('home.profession.makeOrder', compact('data'));
    }

    //微信支付方法
    public function pay()
    {
        //获取商品的基本信息
        $info = Profession::find(Input::get('id'));
        //引入需要的文件
        require_once "./static/wx/lib/WxPay.Api.php";
        require_once "./static/wx/example/WxPay.NativePay.php";
        require_once './static/wx/example/log.php';
        //交易数据的初始化
        $notify = new NativePay();
        $input = new WxPayUnifiedOrder();
        //商品描述（必填）
        $input->SetBody("全栈04期在线教育平台专业课程购买 - " . $info->pro_name);
        //附加数据（选填）
        $input->SetAttach("test");
        //商户订单号，网站自己内部的订单编号，当前站点表中唯一（必填）
        $input->SetOut_trade_no(\WxPayConfig::MCHID . date("YmdHis") . rand(1000, 9999));
        //订单的总价（必填），单位是分
        $input->SetTotal_fee($info->price * 0.0001 * 100);
        //交易起始时间（选填）
        $input->SetTime_start(date("YmdHis"));
        //交易结束时间（选填）
        $input->SetTime_expire(date("YmdHis", time() + 1800));
        //订单优惠标记（选填）
        $input->SetGoods_tag("test");
        //通知地址，交易结果的返回地址，必须要求外网可以访问（必填）
        $input->SetNotify_url("http://edu.28sjw.com/statics/wx/example/notify.php");
        //交易类型（必填）
        $input->SetTrade_type("NATIVE");
        //商品id（选填，但是交易类型是扫码支付则必填）
        $input->SetProduct_id("123456789");
        //获取支付地址
        $result = $notify->GetPayUrl($input);
        $url2 = $result["code_url"];
        //输出二维码
        return "<img alt='模式二扫码支付' src='http://paysdk.weixin.qq.com/example/qrcode.php?data=" . urlencode($url2) . "' style='width:150px;height:150px;'/>";
    }
}
