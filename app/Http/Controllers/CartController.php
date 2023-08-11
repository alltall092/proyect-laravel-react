<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cart;
class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function carts()
    {
        $carts = Cart::getContent();

        return view('carts', compact('carts'));
    }

    public function add(Request $request)
    {
        //dd($request->all());
        Cart::add($request->course_id, $request->name, $request->price, $request->quantity, array());

        return back();
    }

    public function remove($id)
    {
        Cart::remove($id);

        return back();
    }



    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
