<?php

use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('zh_CN');
        $data = [];
        for ($i = 0; $i < 500; $i++) {
            $data[] = [
                'username' => $faker->userName,
                "password" => bcrypt('123456'),
                "gender" => rand(1, 3),
                "mobile" => $faker->phoneNumber,
                "email" => $faker->email,
                "avatar" => '/static/avatar.jpg',
                'created_at' => date("Y-m-d H:i:s"),
                'type' => rand(1, 2),
                'status' => rand(1, 2),
            ];
        }
        // 写入数据表
        \Illuminate\Support\Facades\DB::table('member')->insert($data);
    }
}
