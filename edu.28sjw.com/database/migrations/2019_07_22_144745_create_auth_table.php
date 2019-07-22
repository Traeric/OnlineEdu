<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auth', function (Blueprint $table) {
            $table->bigIncrements('id');
            // 权限名称
            $table->string('auth_name', 20)->nullable(false);
            // 权限对应的控制器
            $table->string('controller', 40)->nullable(true);
            // 权限对应的方法
            $table->string('action', 30)->nullable(true);
            // 当前权限对应的父级权限的id
            $table->tinyInteger('pid');
            // 当前权限是否作为菜单展示
            $table->enum('is_nav', [1, 2])->nullable(false)->default('1');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auth');
    }
}
