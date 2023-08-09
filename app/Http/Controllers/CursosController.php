<?php

namespace App\Http\Controllers;

use App\Models\cursos;
use Illuminate\Http\Request;

class CursosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $p= cursos::orderBy('created_at', 'desc')->take(50)->get();

    
        
        return response()->json(['cursos'=>$p]);
    }
    public function buscar(Request $request)
    {
        $termino = $request->input('termino');

        $resultados = cursos::where('title', 'like', "%$termino%")
            ->orWhere('description_cursos', 'like', "%$termino%")
            ->get();

        return response()->json(['resultados' => $resultados]);
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
    public function show(cursos $cursos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, cursos $cursos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(cursos $cursos)
    {
        //
    }
}
