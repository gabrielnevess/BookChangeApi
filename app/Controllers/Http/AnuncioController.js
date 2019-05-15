'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anuncio = use('App/Models/Anuncio');

/**
 * Resourceful controller for interacting with anuncios
 */
class AnuncioController {

  /**
   * Show a list of all anuncios.
   * GET anuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {

    //retorno anuncio, usuario e endereço
    const query = await Anuncio
      .query()
      .with('usuario', (builder) => {
        builder
          .setHidden(['va_password'])
          .with('endereco')
      })
      .with('images')
      .fetch();
    const data = query.toJSON();

    // remove o endereço do usuário do anúncio
    let anuncio = data.map((data) => {
      if(data.en_status_endereco_visivel === "desativado"){
        delete data.usuario.endereco;
      }
      return data;
    });

    return anuncio;
  }

  /**
   * Create/save a new anuncio.
   * POST anuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
  * Display a single anuncio.
  * GET todos/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show({ params, request, response, view }) {
  }

  /**
   * Update anuncio details.
   * PUT or PATCH anuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a anuncio with id.
   * DELETE anuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = AnuncioController
