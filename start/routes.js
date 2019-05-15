'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/registrar', 'UsuarioController.registrar');
Route.post('/autenticar', 'UsuarioController.autenticar');
Route.get('/anuncios', 'AnuncioController.index');
Route.post('/anuncios/:id/images', 'ImageController.store');

// Route.group(() => {
//   Route.resource('anuncios', 'AnuncioController').apiOnly()
// }).middleware('auth');
