<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profession', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pro_name', 20)->nullable(false);
            $table->tinyInteger('protype_id')->nullable(false);
            $table->string('teachers_ids')->nullable(false);
            $table->string('description');
            $table->string('cover_img');
            $table->integer('view_count')->nullable(false)->default('500');
            $table->timestamps();
            $table->tinyinteger('sort')->nullable(false)->default('0');
            $table->tinyinteger('duration');
            $table->decimal('price', 7, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profession');
    }
}
