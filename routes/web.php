<?php
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function(){
  Route::post('/test_session/write', 'api\TestSessionController@write');
  Route::get('/test_session/read', 'api\TestSessionController@read');
  Route::get('/test_session/test', 'api\TestSessionController@test');
  /* users */
  Route::post('/users/add', 'api\UsersController@add');
  Route::post('/users/login', 'api\UsersController@login');  
  Route::get('/users/get_session', 'api\UsersController@get_session');
  Route::post('/users/logout', 'api\UsersController@logout');
});

Route::get('/{any}', function(){
  return view('App');
})->where('any', '.*');
