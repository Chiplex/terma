<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Event::paginate(25);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {        
        $request->validate([
            'title' => 'required|max:255',
            'slug' => 'unique:events,slug,'.Str::slug($request->name, "-"),
            'description' => 'required|max:65535',
            'willStart' => 'required|date|after_or_equal:'.date('Y-m-d'),
            'willEnd' => 'required|date|after_or_equal:willStart',
        ]);
        $event = new Event();
        $event->idevents    = Str::uuid();
        $event->title       = $request->title;
        $event->slug        = Str::slug($request->name, "-");
        $event->description = $request->description;
        $event->willStart   = $request->willStart;
        $event->willEnd     = $request->willEnd;
        // $event->id_organizer= $request->user()->id;
        $event->save();        
        
        return response()->json([
            'success' => true,
            'data' => $event
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return response()->json([
            'success' => true,
            'data' => $event
        ]);        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $request->validate([
            'name' => 'max:500',
            'startdate' => 'date|after_or_equal:'.date('Y-m-d'),
            'enddate' => 'date|after_or_equal:startdate',
        ]);
        $event->update($request->all());
        return response()->json([
            'success' => true,
            'data' => $event
        ]);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json(['success' => true]);
    }
}
