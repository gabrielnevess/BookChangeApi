'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anuncio = use('App/Models/Anuncio');

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: 'AnunciosMetrics:' });

const histogram = new client.Histogram({
  name: 'AnunciosMetrics:metrics',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'status_code'],
  buckets: [0.1, 5, 15, 50, 100, 500]
});

/**
 * Resourceful controller for interacting with anuncios
 */
class AnuncioController {

  /**
   * Show metrics anuncios
   * GET metrics anuncios
   *
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async metrics({ request, response }) {
    response.header('Content-Type', client.register.contentType);
    response.send(client.register.metrics());
  }

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

    const end = histogram.startTimer();

    let pagination = request.only(['page', 'limit'])
    const page = pagination.page || 1;
    const limit = pagination.limit || 10;

    let userLogged = null;
    try {
      //pega instância do usuário logado
      const user = await auth.getUser();
      userLogged = user.in_usuario_id;
    } catch (e) { }

    //retorno anuncio, usuario e endereço
    let query = null;
    if (userLogged != null) {
      query = await Anuncio
        .query()
        .with('usuario', (builder) => builder.setHidden(['va_password']).with('endereco'))
        .with('imagens')
        .where('in_usuario_id', '<>', userLogged)
        .paginate(page, limit);
    } else {
      query = await Anuncio
        .query()
        .with('usuario', (builder) => builder.setHidden(['va_password']).with('endereco'))
        .with('imagens')
        .paginate(page, limit);
    }

    let content = query.toJSON();
    // remove o endereço do usuário do anúncio
    let anuncio = content.data.map((data) => {
      if (data.en_status_endereco_visivel === "desativado") {
        delete data.usuario.endereco;
      }
      return data;
    });

    content.data = anuncio;
    response.send({ content });
    end({ method: request.method, 'status_code': 200 });

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
    const anuncio = await Anuncio.findOrFail(params.id);
    await anuncio.load('imagens');
    await anuncio.load('usuario', (builder) => builder.setHidden(['va_password']).with('endereco'))
    return anuncio;
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
