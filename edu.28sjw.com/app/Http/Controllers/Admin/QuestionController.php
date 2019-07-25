<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Question;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class QuestionController extends Controller
{
    public function index()
    {
        // 获取数据
        $data = Question::all();
        // 展示视图
        return view('admin.question.index', compact('data'));
    }

    /**
     * 导出excel
     */
    public function export()
    {
        $cellData = [
            ['序号', '题干', '所属试卷', '分值', '选项', '正确答案', '添加时间'],
        ];
        // 查询数据
        $data = Question::all();
        foreach ($data as $val) {
            $cellData[] = [
                $val->id,
                $val->question,
                $val->paper->paper_name,
                $val->score,
                $val->options,
                $val->answer,
                $val->created_at,
            ];
        }
        return Excel::create(sha1(time() . rand(100, 999999)), function ($excel) use ($cellData) {
            $excel->sheet('题库', function ($sheet) use ($cellData) {
                $sheet->rows($cellData);
            });
        })->export('xls');
    }
}
