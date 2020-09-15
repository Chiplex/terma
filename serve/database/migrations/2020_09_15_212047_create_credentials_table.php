<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCredentialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credentials', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->bigInteger('people_id')->unsigned()->nullable();
            $table->bigInteger('event_id')->unsigned()->nullable();
            $table->bigInteger('level_id')->unsigned()->nullable();
            $table->integer('courtesy')->unsigned()->nullable()->default(1);
            $table->dateTime('registered_at');            
            $table->dateTime('confirmed_at')->nullable();            
            $table->dateTime('wasPresent_at')->nullable();            
            $table->foreign('people_id')->references('id')->on('people')->onDelete('cascade');
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credentials');
    }
}
