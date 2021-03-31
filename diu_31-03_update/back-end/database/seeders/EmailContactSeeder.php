<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class EmailContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('email_contact')->insert([
        	[
                'user_id'=>2,
                'content_email'=>'Đặt tiệc sinh nhật 10 mâm ',
                'status_id'=>1
        	],
        	[
                'user_id'=>4,
                'content_email'=>'Đặt tiệc về đồ hải sản ',
                'status_id'=>2
            ],
        	[
                'user_id'=>2,
                'content_email'=>'Đặt tiệc sinh nhật',
                'status_id'=>2
            ],
        	[
                'user_id'=>2,
                'content_email'=>'Đặt tiệc tân gia 10 mâm ',
                'status_id'=>1
            ],
        	[
                'user_id'=>4,
                'content_email'=>'Đặt tiệc thôi nôi',
                'status_id'=>2
            ]
        ]);
    }
}
