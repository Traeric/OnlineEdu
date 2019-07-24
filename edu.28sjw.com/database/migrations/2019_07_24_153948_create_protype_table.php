<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProtypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('protype', function (Blueprint $table) {
            $table->bigIncrements('id');
            // 专业分类名
            $table->string('protype_name', 20)->nullable(false);
            // 排序
            $table->tinyInteger('sort')->nullable(false)->default('0');
            $table->timestamps();
            // 状态
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
        Schema::dropIfExists('protype');
    }
}
