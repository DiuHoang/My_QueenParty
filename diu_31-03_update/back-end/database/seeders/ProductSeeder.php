<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->insert([
        	[
                'name_product'=>'Loa Jamo C93 (Bookshelf)',
                'picture'=>'image/Speaker/Loa Jamo C93 (Bookshelf).PNG',
                'price'=>100000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>1,
                'vendor_id'=> 1
        	],
        	[
                'name_product'=>'Bạch tuộc cay',
                'picture'=>'image/food_content/bachtuotcay.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>2,
                'vendor_id'=> 1
            ],
        	[
                'name_product'=>'Đồ trang trí cấp 1',
                'picture'=>'image/trangtri/tri1.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>3,
                'vendor_id'=> 1
            ],
        	[
                'name_product'=>'Bàn ghế loại 1',
                'picture'=>'image/Table/ban1.jpeg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>4,
                'vendor_id'=> 1
            ],
        	[
                'name_product'=>'Bánh kem loại 1',
                'picture'=>'image/Cake/cake1.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>5,
                'vendor_id'=> 1
            ],
            [
                'name_product'=>'Loa Jamo C93',
                'picture'=>'image/Speaker/Loa Jamo C93.PNG',
                'price'=>100000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>1,
                'vendor_id'=> 2
        	],
        	[
                'name_product'=>'Chân gà sốt Thái',
                'picture'=>'image/food_content/changasotthai.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>2,
                'vendor_id'=> 2
            ],
        	[
                'name_product'=>'Đồ trang trí cấp 2',
                'picture'=>'image/trangtri/tri2.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>3,
                'vendor_id'=> 2
            ],
        	[
                'name_product'=>'Bàn ghế loại 2',
                'picture'=>'image/Table/ban2.jpeg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>4,
                'vendor_id'=> 2
            ],
        	[
                'name_product'=>'Bánh kem loại 2',
                'picture'=>'image/Cake/cake3.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>5,
                'vendor_id'=> 2
            ],
            [
                'name_product'=>'Loa Jamo C100 ',
                'picture'=>'image/Speaker/loa1.jpg',
                'price'=>100000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>1,
                'vendor_id'=> 3
        	],
        	[
                'name_product'=>'Tôm hấp xa lá chanh',
                'picture'=>'image/food_content/tom-hap-xa-la-chanh.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>2,
                'vendor_id'=> 3
            ],
        	[
                'name_product'=>'Đồ trang trí cấp 3',
                'picture'=>'image/trangtri/tri4.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>3,
                'vendor_id'=> 3
            ],
        	[
                'name_product'=>'Bàn ghế loại 3',
                'picture'=>'image/Table/ban5.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>4,
                'vendor_id'=> 3
            ],
        	[
                'name_product'=>'Bánh kem loại 3',
                'picture'=>'image/Cake/cake5.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>5,
                'vendor_id'=> 3
            ],
            [
                'name_product'=>'Loa Klipsch RB 81II (bookshelf)',
                'picture'=>'image/Speaker/Loa Klipsch RB 81II (bookshelf).PNG',
                'price'=>100000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>1,
                'vendor_id'=> 4
        	],
        	[
                'name_product'=>'Gỏi ngô sen hoa chuối tai heo',
                'picture'=>'image/food_content/goi_ngo_sen_hoa_chuoi-tai_heo.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>2,
                'vendor_id'=> 4
            ],
        	[
                'name_product'=>'Đồ trang trí cấp 4',
                'picture'=>'image/trangtri/tri3.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>3,
                'vendor_id'=> 4
            ],
        	[
                'name_product'=>'Bàn ghế loại 4',
                'picture'=>'image/Table/ban4.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>4,
                'vendor_id'=> 4
            ],
        	[
                'name_product'=>'Bánh kem loại 4',
                'picture'=>'image/Cake/cake4.jpg',
                'price'=>200000,
                'discount'=>0,
                'description'=>'Great',
                'category_id'=>5,
                'vendor_id'=> 4
            ]
        ]);
    }
}