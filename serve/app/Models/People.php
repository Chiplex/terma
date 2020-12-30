<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    protected $fillable = [
        'id',
        'name',
        'otherName',
        'lastName',
        'otherLastName',
        'country',
        'gender',
        'dateBirth',
        'gdpr_consent',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function credential()
    {
        return $this->hasMany('App\Models\Credential');
    }

    public function event()
    {
        return $this->belongsToMany('App\Models\Event', 'events');        
    }
}