<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(50)->create();

        \App\Models\User::factory()->create([
            'name' => 'Dinda Indriana',
            'email' => 'dinda@gmail.com',
            'password' => bcrypt('password'),
        ]);
    }
}
