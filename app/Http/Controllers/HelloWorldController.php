<?php
/**
 * Created by PhpStorm.
 * User: Nelson
 * Date: 09/07/2016
 * Time: 21:02
 */

namespace App\Http\Controllers;


class HelloWorldController extends Controller
{
    public function index()
    {
        return view('helloworld');
    }
}