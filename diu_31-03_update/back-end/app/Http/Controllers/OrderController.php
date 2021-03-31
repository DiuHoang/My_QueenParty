<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\ListOrder;
class OrderController extends Controller
{
    // Vendor Detail
    function getAllVendors(){
        $vendor = Vendor::all();
        return json_encode($vendor);
    }
    function detailVendor($id){
        $vendordetail = Vendor::find($id);
        return json_encode($vendordetail);
    }
    function detailProductVendor($id){
        $vendordetail = Vendor::find($id);
        $product = Product::where('vendor_id', '=', $id)->get();
        return json_encode($product);
    }
    // Add Order List
    function getProductDetail($id){
        $pro_detail = Product::find($id);
        return json_encode($pro_detail);
    }
    
    function postOrderList(Request $request){
       $product_id = $request->product_id;
        DB::table('list_order')->insert(['product_id'=>$product_id]);
    }

    // Show Cart
    function getCart(){
        $cart = ListOrder::all();
        $carts = DB::select("select p.name_product,p.price,p.picture from products as p, list_order as lo where p.id=lo.product_id");
        return json_encode($carts);
    }
    function getTotalProduct(){
        $totalProduct = DB::select("select p.price from products as p, list_order as lo where p.id=lo.product_id");
        return json_encode($totalProduct);
    }
    function getTotalPrice(){
        $totalPrice = DB::select("select sum(p.price) as sumPrice from products as p, list_order as lo where p.id=lo.product_id");
        return $totalPrice;
    }
    public function destroy($id)
	{   
		$listOrder = ListOrder::find($id);
		$listOrder->delete();
		return redirect('cart');

	}
}