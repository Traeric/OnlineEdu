<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'course';

    public function profession() {
        return $this->hasOne('App\Admin\Profession', 'id', 'profession_id');
    }
}
