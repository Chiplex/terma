<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register','Api\AuthController@Register');
Route::post('/login','Api\AuthController@Login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('logout','Api\AuthController@Logout');
Route::middleware('auth:api')->apiResource('people','Api\PeopleController');
Route::middleware('auth:api')->group(function ()
{
    Route::match(['options', 'get'],    'guest/{event}',                'APIv2\OrganizeController@Guest')           ->middleware(['cors', 'jwt']);
    Route::match(['options', 'get'],    'certification/{event}',        'APIv2\OrganizeController@Certification')   ->middleware(['cors', 'jwt']);
    Route::match(['options', 'post'],   'invitation',                   'APIv2\OrganizeController@Invitation')      ->middleware(['cors', 'jwt']);
    Route::match(['options', 'get'],    'accept/{token}',               'APIv2\OrganizeController@Accept')          ->middleware(['cors']);
    Route::match(['options', 'post'],   'join',                         'APIv2\OrganizeController@Join')            ->middleware(['cors']);
    Route::match(['options', 'post'],   'link',                         'APIv2\OrganizeController@Link')            ->middleware(['cors']);
    Route::match(['options', 'get'],    'event',                        'Resource\EventController@index')           ->middleware(['cors', 'jwt']);
    Route::match(['options', 'post'],   'event/',                       'Resource\EventController@store')           ->middleware(['cors', 'jwt']);
    Route::match(['options', 'get'],    'event/{event}',                'Resource\EventController@show')            ->middleware(['cors', 'jwt']);
    Route::match(['options', 'put'],    'event/{event}',                'Resource\EventController@update')          ->middleware(['cors', 'jwt']);        
    Route::match(['options', 'delete'], 'event/{event}',                'Resource\EventController@destroy')         ->middleware(['cors', 'jwt']);
    Route::match(['options', 'post'],   'event/bg/{event}',             'Resource\EventController@update')          ->middleware(['cors', 'jwt']);
});