<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('orders')->insert([
        	[
                'user_id'=>1,
                'vendor_id'=>1,
                'username' => "Nguyễn Thị Tiên",
                'phone_number' => '039587356',
                'address'=>'101 Lê Hữu Trác',
                'order_time'=>'2021-02-25 08:00',
                'quantity_mam'=>10,
                'note' => 'Giao hàng trước 30 phút ạ!'
        	],
        	[
                'user_id'=>2,
                'vendor_id'=>2,
                'username' => "Trang Trần",
                'phone_number' => '039587356',
                'address'=>'101 Lê Hữu Trác',
                'order_time'=>'2021-01-12 08:00',
                'quantity_mam'=>5,
                'note' => 'Giao hàng trước 30 phút ạ!'
            ],
        	[
                'user_id'=>3,
                'vendor_id'=>3,
                'username' => "Hoàng Hưng",
                'phone_number' => '039587356',
                'address'=>'101 Lê Hữu Trác',
                'order_time'=>'2020-12-25 08:00',
                'quantity_mam'=>7,
                'note' => 'Giao hàng trước 30 phút ạ!'
            ],
        	[
                'user_id'=>4,
                'vendor_id'=>4,
                'username' => "Ngô Giang",
                'phone_number' => '039587356',
                'address'=>'101 Lê Hữu Trác',
                'order_time'=>'2020-11-20 08:00',
                'quantity_mam'=>20,
                'note' => 'Giao hàng trước 30 phút ạ!'
            ],
        	[
                'user_id'=>1,
                'vendor_id'=>5,
                'username' => "Nguyễn Tú",
                'phone_number' => '039587356',
                'address'=>'101 Lê Hữu Trác',
                'order_time'=>'2020-10-20 08:00',
                'quantity_mam'=>10,
                'note' => 'Giao hàng trước 30 phút ạ!'
            ]
        ]);
    }
}