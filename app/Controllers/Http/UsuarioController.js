'use strict'

const Usuario = use('App/Models/Usuario');

class UsuarioController {

  async registrar({ request }) {
    const data = request.only([
      'va_nome',
      'va_celular',
      'va_email',
      'va_password',
      'en_genero'
    ]);
    const usuario = await Usuario.create(data);
    return usuario;
  }

  async autenticar({ request, auth }) {
    const { va_email, va_password } = request.all();
    const token = auth.attempt(va_email, va_password);
    return token;
  }

}

module.exports = UsuarioController
