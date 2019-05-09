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
Route.get('/generos', 'GeneroController.index');
Route.get('/anuncios', 'AnuncioController.index');

// Route.group(() => {
//   Route
//     .resource('generos', 'GeneroController')
//     .apiOnly() //retira as rotas de formulário
// }).middleware('auth');
