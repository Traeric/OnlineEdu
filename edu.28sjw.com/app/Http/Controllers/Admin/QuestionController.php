<?php

namespace App\Http\Controllers\Admin;

use App\Admin\Paper;
use App\Admin\Question;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
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
            ['序号', '题干', '所属试卷', '分值', '选项', '正确答案', '说明', '添加时间'],
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
                $val->remark,
                $val->created_at,
            ];
        }
        return Excel::create(sha1(time() . rand(100, 999999)), function ($excel) use ($cellData) {
            $excel->sheet('题库', function ($sheet) use ($cellData) {
                $sheet->rows($cellData);
            });
        })->export('xls');
    }

    /**
     * 导入excel
     */
    public function import()
    {
        if (Input::method() === "POST") {
            // 数据导入操作
            // 获取文件路径
            $filepath = '.' . Input::get('excel_path');
            Excel::load($filepath, function ($reader) {
                $data = $reader->getSheet(0)->toArray();
                // 读取全部数据
                $temp = [];
                foreach ($data as $key => $val) {
                    // 排除表头
                    if ($key == '0') {
                        continue;
                    }
                    $temp[] = [
                        'question' => $val[0],
                        'paper_id' => Input::get('paper_id'),
                        'score' => $val[3],
                        'options' => $val[1],
                        'answer' => $val[2],
                        'created_at' => date("Y-m-d H:i:s"),
                    ];
                }
                // 写入数据
                $result = Question::insert($temp);
                echo $result ? '1' : '0';
            });
        } else {
            // 查询试卷的列表
            $list = Paper::all();
            // 展示视图
            return view('admin.question.import', compact('list'));
        }
        return '';
    }
}
