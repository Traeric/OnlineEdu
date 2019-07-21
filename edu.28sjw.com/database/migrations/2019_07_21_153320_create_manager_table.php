<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateManagerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manager', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('主建');
            $table->string('username', 20)->nullable(false)->comment('用户名');
            $table->string('password')->nullable(false);
            // 性别：1-男   2-女   3-保密
            $table->enum('gender', [1, 2, 3])->nullable(false)->default('3');
            $table->string('mobile', 11);
            $table->string('email', 50);
            // 角色表中的主建id
            $table->tinyInteger('role_id');
            // 系统自己创建update_time跟create_time
            $table->timestamps();
            // 实现记住登陆的状态，用于存储Token
            $table->rememberToken();
            // 账号状态，1-禁用   2-启用
            $table->enum('status', [1, 2])->nullable(false)->default('2');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manager');
    }
}
