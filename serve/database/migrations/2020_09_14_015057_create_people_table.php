<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id('id');
            $table->string('name', 20);
            $table->string('otherName', 20)->nullable();
            $table->string('lastName', 20);
            $table->string('otherLastName', 20)->nullable();
            $table->string('country', 20);
            $table->string('gender', 10);
            $table->date('dateBirth');
            $table->boolean('gdpr_consent')->nullable();
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
