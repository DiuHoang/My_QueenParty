<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ListOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('list_order')->insert([
        	[
                'product_id'=>1
            ],
        	[
                'product_id'=>2
            ],
        	[
                'product_id'=>3
            ],
        	[
                'product_id'=>4
            ],
        	[
                'product_id'=>5
            ]
        ]);
    }
}