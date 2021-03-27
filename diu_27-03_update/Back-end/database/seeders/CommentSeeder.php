<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('comments')->insert([
        	[
                'user_id'=>1,
                'vendor_id'=>1,
                'content'=>'Nhà hàng thân thiện, phục vụ tốt, và dịch vụ đồ ăn ngon miệng'
        	],
        	[
                'user_id'=>2,
                'vendor_id'=>2,
                'content'=>'Nhà hàng thân thiện, phục vụ tốt, và dịch vụ đồ ăn ngon miệng'
            ],
        	[
                'user_id'=>3,
                'vendor_id'=>3,
                'content'=>'Nhà hàng thân thiện, phục vụ tốt, và dịch vụ đồ ăn ngon miệng'
            ],
        	[
                'user_id'=>4,
                'vendor_id'=>4,
                'content'=>'Nhà hàng thân thiện, phục vụ tốt, và dịch vụ đồ ăn ngon miệng'
            ],
        	[
                'user_id'=>1,
                'vendor_id'=>5,
                'content'=>'Nhà hàng thân thiện, phục vụ tốt, và dịch vụ đồ ăn ngon miệng'
            ]
        ]);
    }
}
