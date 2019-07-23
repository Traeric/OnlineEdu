<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'role';
    public $timestamps = false;


    public function assignAuth($data) {
        // 组合初auth_ids的值
        $post['auth_ids'] = implode(',', $data['auth_id']); // 鲸数组中的元素以,为连接符连接成字符串
        // 获取auth_ac
        $tmp = Auth::where('pid', '!=', '0')->whereIn('id', $data['auth_id'])->get();
        // 拼凑出controller和action
        $ac = '';
        foreach ($tmp as $value) {
            $ac .= $value->controller . "@" . $value->action . ',';
        }
        // 去除末尾逗号
        $post['auth_ac'] = strtolower(rtrim($ac, ','));
        // 修改数据
        return self::where('id', $data['id'])->update($post);
    }
}
