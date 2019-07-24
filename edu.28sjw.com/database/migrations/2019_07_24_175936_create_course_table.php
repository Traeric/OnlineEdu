<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('course_name', 30)->nullable(false);
            $table->integer('profession_id')->nullable(false);
            $table->string('cover_img');
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
        Schema::dropIfExists('course');
    }
}
