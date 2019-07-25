<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Live extends Model
{
    protected $table = 'live';

    public function profession()
    {
        return $this->hasOne('App\Admin\Profession', 'id', 'profession_id');
    }

    public function stream()
    {
        return $this->hasOne('App\Admin\Stream', 'id', 'stream_id');
    }
}
