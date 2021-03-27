<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PurposeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('purposes')->insert([
        	[
                'title'=>'Tiệc sinh nhật',
        	],
        	[
                'title'=>'Tiệc tân gia',
            ],
        	[
                'title'=>'Tiệc đám giỗ chạp',
            ],
        	[
                'title'=>'Tiệc thôi nôi',
            ],
            [
                'title'=>'Tiệc cuối năm',
            ]
        ]);
    }
}
