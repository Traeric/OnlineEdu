<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStreamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stream', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('stream_name', 200)->nullable(false);
            $table->enum('status', [1, 2, 3])->nullable(false)->default('1');
            $table->integer('permited_at')->nullable(false)->default(0);
            $table->integer('sort')->nullable(false)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stream');
    }
}
