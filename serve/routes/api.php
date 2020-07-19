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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register','Api\AuthController@Register');
Route::post('/login','Api\AuthController@Login');
Route::middleware('auth:api')->get('logout','Api\AuthController@Logout');

// ------------------------------------------------------------------------
// Api Resource
// ------------------------------------------------------------------------
Route::middleware('auth:api')->prefix('resource')->group(function() {
    // Route::apiResource('accredited',    'ApiResource\AccreditedController');
    // Route::apiResource('category',      'ApiResource\CategoryController');
    // Route::apiResource('certification', 'ApiResource\CertificationController');
    // Route::apiResource('country',       'ApiResource\CountryController');
    // Route::apiResource('credential',    'ApiResource\CredentialController');
    // Route::apiResource('event',         'ApiResource\EventController');
    //Route::apiResource('guest',         'Api\GuestController');
    // Route::apiResource('image',         'ApiResource\ImageController');
    // Route::apiResource('language',      'ApiResource\LanguageController');
    // Route::apiResource('occupation',    'ApiResource\OccupationController');
    // Route::apiResource('permission',    'ApiResource\PermissionController');
    // Route::apiResource('role',          'ApiResource\RoleController');
    // Route::apiResource('sector',        'ApiResource\SectorController');
    // Route::apiResource('staff',         'ApiResource\StaffController');
    // Route::apiResource('timezone',      'ApiResource\TimezoneController');
    // Route::apiResource('user',          'ApiResource\UserController');
    // Route::apiResource('willconfirm',   'ApiResource\WillConfirmController');
    // Route::apiResource('willjoin',      'ApiResource\WillJoinController');
});

Route::middleware('auth:api')->apiResource('guest',         'Api\GuestController');