<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditPostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('post', function (Blueprint $table) {
            //$table->text('content2')->after('title');
            //$table->dropColumn('content');
            //$table->renameColumn('content2', 'content');
            //$table->text('content2')->after('description');
            //$table->dropColumn('description');
            //$table->renameColumn('content2', 'description');
            //$table->text('content2')->after('keywords');
            //$table->dropColumn('keywords');
            //$table->renameColumn('content2', 'keywords');
            //$table->double('view', 10, 0)->after('admin')->default(0);
            //$table->dropColumn('view');
            //$table->string('big_group')->after('view');;
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
