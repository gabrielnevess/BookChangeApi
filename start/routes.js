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



Route.post('/usuario/imagem/:id', 'UsuarioImagemController.store');
Route.get('/anuncios/metrics', 'AnuncioController.metrics');
Route.post('/anuncios/imagens/:id', 'AnuncioImagensController.store');
Route.get('anuncio_imagens/:path', 'AnuncioImagensController.show');

Route.get('/anuncios', 'AnuncioController.index');
Route.post('/autenticar', 'UsuarioController.autenticar');
Route.post('/registrar', 'UsuarioController.registrar');


// Route.group(() => {
  
// }).middleware('auth');
