<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class StatusEmailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('status_email')->insert([
        	[
                'status_name'=>'Chờ phê duyệt',
        	],
        	[
                'status_name'=>'Đã phê duyệt',
            ]
        ]);
    }
}
