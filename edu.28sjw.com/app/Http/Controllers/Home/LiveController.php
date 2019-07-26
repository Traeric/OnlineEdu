<?php

namespace App\Http\Controllers\Home;

use App\Admin\Live;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class LiveController extends Controller
{
    public function player()
    {
        //获取直播的地址
        //rtmp://pili-live-rtmp.28sjw.com/education-zet/qz04
        $url = 'rtmp://pili-live-rtmp.28sjw.com/education-zet/' .
            Live::find(Input::get('id'))->stream->stream_name;  // 后期追加名称
        return view('home.live.player', compact('url'));
    }
}
