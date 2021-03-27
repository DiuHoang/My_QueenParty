<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('rates')->insert([
        	[
                'user_id'=>1,
                'vendor_id'=>1,
                'quantity'=>5
        	],
        	[
                'user_id'=>2,
                'vendor_id'=>2,
                'quantity'=>4
            ],
        	[
                'user_id'=>3,
                'vendor_id'=>3,
                'quantity'=>5
            ],
        	[
                'user_id'=>4,
                'vendor_id'=>4,
                'quantity'=>4
            ],
        	[
                'user_id'=>1,
                'vendor_id'=>5,
                'quantity'=>5
            ]
        ]);
    }
}
