<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PurposeSeeder::class);
        $this->call(VendorSeeder::class);
        $this->call(ServiceCategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(PlanSeeder::class);
        $this->call(ListOrderSeeder::class);
        $this->call(OrderSeeder::class);
        $this->call(OrderDetailSeeder::class);
        $this->call(BillSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(RateSeeder::class);
        $this->call(StatusEmailSeeder::class);
        $this->call(EmailContactSeeder::class);
    }
}
