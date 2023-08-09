<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\cursos>
 */
class CursosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
    {
        return [
        'title' => fake()->title(),
        'description_cursos' => fake()->paragraph(),
        'duracion_del_curso'=>fake()->randomDigit(),
        'temario_del_curso' => 'Python, Linux, Basic Programming',
        'administrador'=>fake()->sentence(1),
        'video_de_introduccion'=>fake()->sentence(),
        'language' => 'English',
        'price' => rand(100, 150),
        'level' => 'Beginner',
        'thumbnail' => 'imagen1.jpg',
        'video_url' => null,
        
       
        ];
        //'category_id' => rand(1, 10)
    }
}
