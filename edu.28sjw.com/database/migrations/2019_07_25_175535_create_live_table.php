<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLiveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('live', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('live_name', 50)->nullable(false)->unique();
            $table->integer('profession_id')->nullable(false);
            $table->integer('stream_id')->nullable(false);
            $table->string('cover_img')->nullable(false);
            $table->integer('sort')->nullable(false)->default(0);
            $table->string('description');
            $table->integer('begin_at')->nullable(false);
            $table->integer('end_at')->nullable(false);
            $table->string('video_addr');
            $table->timestamps();
            $table->enum('status', [1, 2])->nullable(false)->default('1');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('live');
    }
}
