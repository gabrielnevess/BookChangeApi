'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioAnuncioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class UsuarioAnuncioSeeder {
  async run () {
    const usuario = await Factory.model('App/Models/Usuario').create();
    const anuncio = await Factory.model('App/Models/Anuncio').makeMany(50);
    await usuario.anuncios().saveMany(anuncio);
  }
}

module.exports = UsuarioAnuncioSeeder
