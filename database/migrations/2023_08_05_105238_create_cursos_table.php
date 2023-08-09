<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description_cursos');
            $table->integer('duracion_del_curso');
            $table->string('temario_del_curso');
            $table->string('administrador');
            $table->string('video_de_introduccion');
            $table->string('language');
            $table->double('price');
            $table->string('level', 50);
            $table->string('thumbnail')->nullable();
            $table->string('video_url')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursos');
    }
};
