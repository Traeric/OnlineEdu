<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('lesson_name', 50)->nullable(false);
            $table->integer('course_id')->nullable(false);
            $table->integer('video_time');
            $table->string('video_addr');
            $table->integer('sort')->nullable(false)->default(0);
            $table->string('description');
            $table->timestamps();
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
        Schema::dropIfExists('lesson');
    }
}
