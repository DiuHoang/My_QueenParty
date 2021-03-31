<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('plan')->insert([
        	[
                'product_id'=>1,
                'note'=>'Kế hoạch, thời gian, bàn ghế ntn'
        	],
        	[
                'product_id'=>2,
                'note'=>'Kế hoạch, thời gian, bàn ghế ntn'
            ],
        	[
                'product_id'=>3,
                'note'=>'Kế hoạch, thời gian, bàn ghế ntn'
            ],
        	[
                'product_id'=>4,
                'note'=>'Kế hoạch, thời gian, bàn ghế ntn'
            ],
        	[
                'product_id'=>5,
                'note'=>'Kế hoạch, thời gian, bàn ghế ntn'
            ]
        ]);
    }
}
