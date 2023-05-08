<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
  
  // Gets All Products
  public function index(){
    $products = Product::get();
    return response()->json($products, 200);
  }
  
  // Gets Certain Product By ID
  public function show($id){
    $product = Product::findOrFail($id);
    return response()->json($product, 200);
  }
  
  // Gets List of Products by Their Type
  public function showt($type)
  {
   $product= Product::where('type', $type)->get();
   return response()->json($product);
  }

  // Creates New Product in DB
  public function store(Request $request){
    $product = Product::create([
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
    return response()->json($success, 201);
  }
  
  // Updates Existing Product in DB
  public function update(Request $request, $id)
  {
    $product = Product::findOrFail($id);
    $product->update([
        'name' => $request->name,
        'description' => $request->description,
        'price' => $request->price,
        'caliber' => $request->caliber,
        'category' => $request->category,
        'capacity' => $request->capacity,
        'Action' => $request->Action,
        'Rounds' => $request->Rounds,
      ]);
    $product->save();
    $success = 'Product Updated Successfully';
    return response()->json($success, 201);
  }
  
  // Deletes Product from DB
  public function delete($id)
  {
    $product = Product::findOrFail($id);
    $product->delete();
    $success = 'Product Deleted Successfully';
    return response()->json($success, 200);
  }
}