<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'id',
        'slug',
        'title',
        'description',
        'willStart',
        'willEnd',
        'capacity',
        'category_id',
        'timezone_id',
        'country_id',
        'language_id',
        'latitud',
        'longitud',
    ];

    /**
     * Get the value of the model's route key.
     *
     * @return mixed
     */
    public function getRouteKey()
    {
        return $this->slug;
    }

    public function credential()
    {
        return $this->hasMany('App\Models\Credential');
    }

    public function people()
    {
        return $this->belongsToMany('App\Models\People', 'credentials');        
    }
}
