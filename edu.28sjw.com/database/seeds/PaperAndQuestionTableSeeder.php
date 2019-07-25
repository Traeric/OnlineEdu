<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaperAndQuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('paper') -> insert([
            'paper_name'		=>	'ThinkPHP电子商城阶段考试',
            'course_id'			=>	3,
            'created_at'		=>	date('Y-m-d H:i:s')
        ]);
        DB::table('paper') -> insert([
            'paper_name'		=>	'jQuery阶段考试',
            'course_id'			=>	2,
            'created_at'		=>	date('Y-m-d H:i:s')
        ]);
        DB::table('paper') -> insert([
            'paper_name'		=>	'linux阶段考试',
            'course_id'			=>	1,
            'created_at'		=>	date('Y-m-d H:i:s')
        ]);
        DB::table('paper') -> insert([
            'paper_name'		=>	'laravel阶段考试',
            'course_id'			=>	4,
            'created_at'		=>	date('Y-m-d H:i:s')
        ]);


        DB::table('question') -> insert([
            'question'	=>	'下列关于购物车说法错误的是？',
            'paper_id'	=>	1,
            'options'	=>	'A.购物车的本质就是有一个存储数据的载体~B.购物车的数据是可以被读取的~C.购物车的数据是可以被编辑和删除的~D.购物车只能在登录之后使用',
            'answer'	=>	'D',
            'created_at'=>	date('Y-m-d H:i:s')
        ]);
        DB::table('question') -> insert([
            'question'	=>	'支付宝接口申请不需要什么材料？',
            'paper_id'	=>	1,
            'options'	=>	'A.出身证~B.身份证~C.手机号~D.营业执照',
            'answer'	=>	'A',
            'created_at'=>	date('Y-m-d H:i:s')
        ]);
        DB::table('question') -> insert([
            'question'	=>	'如果想用navicat将sql代码在远程服务器上执行，则必须要保证远程服务器的用户表中的host字段至少有一个为？',
            'paper_id'	=>	1,
            'options'	=>	'A.%~B.::1~C.localhost~D.127.0.0.1',
            'answer'	=>	'A',
            'created_at'=>	date('Y-m-d H:i:s')
        ]);
    }
}
