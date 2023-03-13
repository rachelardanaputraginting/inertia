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
            "username" => ['unique:users', 'required', 'alpha_num'],
            "email" => ['unique:users', 'required', 'email'],
            "location" => ['required'],
            "password" => ['required', Password::defaults()]
        ];
    }
}
