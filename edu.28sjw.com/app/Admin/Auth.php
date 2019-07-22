<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{
    protected $table = "auth";
    public $timestamps = false;   // 禁用时间
    public $fillable = ["id", "auth_name", "controller", "action", "pid", "is_nav"];
}
