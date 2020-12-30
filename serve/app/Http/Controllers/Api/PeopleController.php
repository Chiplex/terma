<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\People;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  People::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $requestValidated = $request->validate([
            'name' => 'required|max:20',
            'otherName' => 'max:20',
            'lastName' => 'required|max:20',
            'otherLastName' => 'required|max:20',
            'country' => 'required|max:20',
            'gender' => 'required|max:20',
            'dateBirth' => 'required|date_format:Y-m-d',
            'gdpr_consent' => 'required|boolean',
        ]);
        
        $people = People::create($requestValidated);
        return response()->json([
            'success' => true,
            'data' => $people
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\People  $guest
     * @return \Illuminate\Http\Response
     */
    public function show(People $guest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\People  $people
     * @return \Illuminate\Http\Response
     */
    public function edit(People $people)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\People  $people
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, People $people)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\People  $people
     * @return \Illuminate\Http\Response
     */
    public function destroy(People $people)
    {
        //
    }
}
