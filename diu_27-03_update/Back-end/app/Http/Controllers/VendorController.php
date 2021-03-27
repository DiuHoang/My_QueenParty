<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Users;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    //
    public function getCountOrder(){
        $count_order = Order::all()->count(); 
        return view('dashboard', compact('count_order'));
        // return $count_order;
    } 
    public function getCountCustomer(){
        $count_cus = Users::all()->count();
        return $count_cus;
    }
    public function getCountProfit(){
        $count_profit = ListOrder::all()->sum('total_price');
        return $count_profit;
    }
}
