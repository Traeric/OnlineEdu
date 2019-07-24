<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $table = 'lesson';

    public function course()
    {
        return $this->hasOne('App\Admin\Course', 'id', 'course_id');
    }
}

