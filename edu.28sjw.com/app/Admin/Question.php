<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = 'question';

    // 关联试卷
    public function paper()
    {
        return $this->hasOne('App\Admin\Paper', 'id', 'paper_id');
    }
}
