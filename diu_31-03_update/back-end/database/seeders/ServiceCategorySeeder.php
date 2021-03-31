<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ServiceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('service_category')->insert([
        	[
                'name_category'=>'Loa máy',
        	],
        	[
                'name_category'=>'Đồ ăn',
            ],
        	[
                'name_category'=>'Trang Trí',
            ],
        	[
                'name_category'=>'Bàn ghế',
            ],
        	[
                'name_category'=>'Bánh kem',
            ]
        ]);
    }
}
