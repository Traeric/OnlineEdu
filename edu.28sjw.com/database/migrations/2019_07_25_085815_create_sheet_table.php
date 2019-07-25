<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSheetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sheet', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('paper_id')->nullable(false);
            $table->tinyInteger('question_id')->nullable(false);
            $table->tinyInteger('member_id')->nullable(false);
            // 是否正确 默认不正确
            $table->enum('is_correct', [1, 2])->nullable(false)->default('1');
            $table->tinyInteger('score')->nullable(false)->default(0);
            $table->string('answer', 1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sheet');
    }
}
