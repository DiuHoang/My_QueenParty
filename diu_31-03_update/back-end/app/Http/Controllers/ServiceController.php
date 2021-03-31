<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceCategory;
use App\Models\Product;

class ServiceController extends Controller
{
    //
    function getAllCategory1(){
        $cate1 = Product::where('category_id', '=', 1)->take(4)->get();
        $category = ServiceCategory::all();
        return json_encode($cate1);
    }
    function getAllCategory2(){
        $cate2 = Product::where('category_id', '=', 2)->take(4)->get();
        $category = ServiceCategory::all();
        return json_encode($cate2);
    }
    function getAllCategory3(){
        $cate3 = Product::where('category_id', '=', 3)->take(4)->get();
        $category = ServiceCategory::all();
        return json_encode($cate3);
    }
    function getAllCategory4(){
        $cate4 = Product::where('category_id', '=', 4)->take(4)->get();
        $category = ServiceCategory::all();
        return json_encode($cate4);
    }
}