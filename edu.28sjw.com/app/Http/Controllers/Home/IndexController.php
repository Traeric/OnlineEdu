<?php

namespace App\Http\Controllers\Home;

use App\Admin\Live;
use App\Admin\Profession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        // 查询直播数据
        $live = Live::orderBy('sort', 'desc')->where('status', '1')->get();
        // 处理直播列表的数据
        foreach ($live as $value) {
            // 处理最近直播开始的时间
            $value->start = date("Y-m-d H:i:s", $value->begin_at);
            // 判断当前直播的状态
            if (time() > $value->end_at) {
                $value->liveStatus = '已结束';
            } elseif (time() < $value->begin_at) {
                $value->liveStatus = '未开始';
            } else {
                $value->liveStatus = '直播中';
            }
        }
        // 查询专业数据
        $profession = Profession::orderBy('sort', 'desc')->get();
        // 展示视图
        return view('home.index.index', compact('live', 'profession'));
    }
}
