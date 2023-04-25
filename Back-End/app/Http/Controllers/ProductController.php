<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    public function index ()
    {
      $products =Product::get();
      return response()->json($products);
    }
    public function show($id)
    {
      $product =Product::findOrFail($id);
      return response()->json($product);
    }


    public function store(Request $request){
        $product= Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'caliber' => $request->caliber,
            'type' => $request->type,
            'category' => $request->category,
            'capacity' => $request->capacity,
            'action' => $request->action,
            'rounds' => $request->rounds,
        ]);
        $product->save();
        $success = 'Product Created Successfully';
        return response($success);
    }
    public function update(Request $request,$id)
    {
      $product =Product::findOrFail($id)->update(
        [
            'name'=> $request->name,
            'description'=>$request->description,
            'price'=>$request->price,
            'caliber'=>$request->caliber,
            'category'=>$request->category,
            'capacity'=>$request->capacity,
            'Action'=>$request->Action,
            'Rounds'=>$request->Rounds,
         ]
      );
      $suss='product updated successfully';
      return response()->json($suss);
    }
    public function delete($id)
    {
      Product::findOrFail($id)->delete();
      $suss='product deleted successfully';
      return response()->json($suss);
    }



}