<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use App\Notifications\ContactFormNotification;

class ContactController extends Controller
{
    public function submitForm(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        // E-posta gönderimi için Notification kullanımı
        Notification::route('mail', 'arsaylik25@gmail.com')
            ->notify(new ContactFormNotification($data));

        return response()->json(['message' => 'Form başarıyla gönderildi.']);
    }

}
