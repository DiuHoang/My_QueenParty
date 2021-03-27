<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
        	[
                'fullname'=>'Quan Ho',
                'phonenumber'=>'0235984521',
                'email'=>'quanho@gmail.com',
                'password'=>'quanho123',
                'role_id'=>1
        	],
        	[
                'fullname'=>'Tien Nguyen',
                'phonenumber'=>'0235984521',
                'email'=>'tiennguyen@gmail.com',
                'password'=>'tiennguyen123',
                'role_id'=>2
            ],
        	[
                'fullname'=>'Diu Hoang',
                'phonenumber'=>'0235984521',
                'email'=>'diuhoang@gmail.com',
                'password'=>'diuhoang123',
                'role_id'=>3
            ],
        	[
                'fullname'=>'Trang Tran',
                'phonenumber'=>'0235984521',
                'email'=>'trangtran@gmail.com',
                'password'=>'trangtran123',
                'role_id'=>2
            ]]);
    }
}
