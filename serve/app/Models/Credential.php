<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Credential extends Model
{
    // 
    protected $keyType = 'string';

    // 
    public $incrementing = false;

    public function people()
    {
        return $this->belongsTo('App\Models\People');
    }

    public function event()
    {
        return $this->belongsTo('App\Models\Event');
    }
}
