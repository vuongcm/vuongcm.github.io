<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EditUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //$table->renameColumn('name', 'username');
            //$table->tinyInteger('level')->after('id');
            //$table->tinyInteger('status')->after('level');
            //$table->string('gender')->after('username');
            //$table->string('lastname')->after('username');
            //$table->string('firstname')->after('lastname');
            //$table->string('avatar')->nullable()->after('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}