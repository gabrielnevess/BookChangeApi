'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers');
const Usuario = use('App/Models/Usuario');

/**
 * Resourceful controller for interacting with usuarioimagems
 */
class UsuarioImagemController {
  /**
   * Show a list of all usuarioimagems.
   * GET usuarioimagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new usuarioimagem.
   * GET usuarioimagems/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new usuarioimagem.
   * POST usuarioimagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params }) {
    const usuario = await Usuario.findOrFail(params.id);

    const images = request.file('image', {
      types: ['image'],
      size: ['2mb']
    });

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `usuario-imagem-${Date.now()}-${file.clientName}`
    }));

    if (!images.movedAll()) {
      return images.errors()
    }

    await Promise.all(
      images
        .movedList()
        .map(image => usuario.images().create({ te_path: image.fileName }))
    );
  }

  /**
   * Display a single usuarioimagem.
   * GET usuarioimagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing usuarioimagem.
   * GET usuarioimagems/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update usuarioimagem details.
   * PUT or PATCH usuarioimagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a usuarioimagem with id.
   * DELETE usuarioimagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = UsuarioImagemController
