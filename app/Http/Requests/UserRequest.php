<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => ['required'],
            "username" => ['required', 'alpha_num', 'unique:users,username,' . optional($this->user)->id,],
            "email" => ['required', 'email', 'unique:users,email,' . optional($this->user)->id,],
            "location" => ['required'],
            "password" => ['required', Password::defaults()]
        ];
    }
}
