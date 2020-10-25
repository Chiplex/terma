<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Str;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Event::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {        
        $slug = Str::slug($request->title, "-");
        $request->validate([
            'title' => 'required|max:255',
            'slug' => 'unique:events,slug,'.$slug,
            'willStart' => 'required|date_format:Y-m-d H:i|after:+1 now',
            'willEnd' => 'required|date_format:Y-m-d H:i|after_or_equal:willStart',
        ]);

        $event = new Event();
        $event->title       = $request->title;
        $event->slug        = $slug;
        $event->description = $request->description ?? "El mejor evento del mundo";
        $event->willStart   = $request->willStart;
        $event->willEnd     = $request->willEnd;
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
