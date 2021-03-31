<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
                'status'=>'Thành công',
                'created_at' => "2020-04-21 10:10:10",
                'updated_at' => "2020-04-21 10:10:10"
        	],
        	[
                'order_id'=>2,
                'status'=>'Thành công',
                'created_at' => "2020-03-21 10:10:10",
                'updated_at' => "2020-03-21 10:10:10"
            ],
        	[
                'order_id'=>3,
                'status'=>'Thất bại',
                'created_at' => "2020-08-21 10:10:10",
                'updated_at' => "2020-08-21 10:10:10"
            ],
        	[
                'order_id'=>4,
                'status'=>'Thành công',
                'created_at' => "2020-01-21 10:10:10",
                'updated_at' => "2020-01-21 10:10:10"
            ],
        	[
                'order_id'=>5,
                'status'=>'Thất bại',
                'created_at' => "2020-05-21 10:10:10",
                'updated_at' => "2020-05-21 10:10:10"
            ],
        	[
                'order_id'=>5,
                'status'=>'Thành công',
                'created_at' => "2021-01-21 10:10:10",
                'updated_at' => "2021-01-21 10:10:10"
            ],
        	[
                'order_id'=>2,
                'status'=>'Thành công',
                'created_at' => "2020-03-16 10:10:10",
                'updated_at' => "2020-03-16 10:10:10"
            ],
        	[
                'order_id'=>4,
                'status'=>'Thành công',
                'created_at' => "2020-01-12 10:10:10",
                'updated_at' => "2020-01-12 10:10:10"
            ]
        ]);
    }
}