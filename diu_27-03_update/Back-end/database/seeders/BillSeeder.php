<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class BillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('bills')->insert([
        	[
                'order_id'=>1,
                'status'=>'Thành công'
        	],
        	[
                'order_id'=>2,
                'status'=>'Thành công'
            ],
        	[
                'order_id'=>3,
                'status'=>'Thất bại'
            ],
        	[
                'order_id'=>4,
                'status'=>'Thành công'
            ],
        	[
                'order_id'=>5,
                'status'=>'Thất bại'
            ]
        ]);
    }
}
