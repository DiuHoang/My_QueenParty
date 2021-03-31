<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('vendors')->insert([
        	[
                'fullname'=>'Nhà hàng Cua Biển',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'nhahangcuabien@gmail.com',
                'avatar'=>'image/logonhahang.jpg',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'nhahangcuabien',
                'role_id'=>3,
                'purpose_id'=>1,
        	],
        	[
                'fullname'=>'Nhà hàng Hồng Phúc',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'hongphuc@gmail.com',
                'avatar'=>'image/hongphuc.jpg',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'hongphuc',
                'role_id'=>3,
                'purpose_id'=>2,
            ],
        	[
                'fullname'=>'Nhà hàng Lê Gia 3',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'legia3@gmail.com',
                'avatar'=>'image/legia3.jpg',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'legia3',
                'role_id'=>3,
                'purpose_id'=>3,
            ],
        	[
                'fullname'=>'Nhà hàng Cơm Niêu Nồi Đất',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'comnieunoidat@gmail.com',
                'avatar'=>'image/nieu.jpg',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'comnieunoidat',
                'role_id'=>3,
                'purpose_id'=>4,
            ],
        	[
                'fullname'=>'Nhà hàng Ớt Xanh',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'otxanh@gmail.com',
                'avatar'=>'image/otxanh.jpg',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'otxanh',
                'role_id'=>3,
                'purpose_id'=>5,
            ],
        	[
                'fullname'=>'Nhà hàng Phú Gia 3',
                'phonenumber'=>'0998289355',
                'address'=>'99 To Hien Thanh, Da Nang',
                'email'=>'phugia3@gmail.com',
                'avatar'=>'image/phugia3.jfif',
                'open_time'=>'10 AM:22 PM',
                'description'=>'Phục vụ tận nơi - thân thiện',
                'password'=>'phugia3',
                'role_id'=>3,
                'purpose_id'=>1,
            ]]);
    }
}
