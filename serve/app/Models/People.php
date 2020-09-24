<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    public function credential()
    {
        return $this->hasMany('App\Models\Credential');
    }
}