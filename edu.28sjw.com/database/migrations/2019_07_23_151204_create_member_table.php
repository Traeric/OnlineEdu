<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username', 20)->nullable(false);
            $table->string('password')->nullable(false);
            $table->enum('gender', [1, 2, 3])->nullable(false)->default('3');
            $table->string('mobile', 11);
            $table->string('email', 40);
            $table->string('avatar');
            $table->timestamps();
            $table->rememberToken();
            $table->enum('type', [1, 2])->nullable(false)->default('1');
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
        Schema::dropIfExists('member');
    }
}
