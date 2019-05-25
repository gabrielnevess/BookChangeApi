'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioImagemSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE usuario_imagem (
          in_usuario_imagem_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          in_usuario_id INTEGER UNSIGNED NOT NULL UNIQUE,
          te_path TEXT NOT NULL,
          CONSTRAINT usuario_imagem_pkey PRIMARY KEY(in_usuario_imagem_id),
          CONSTRAINT usuario_imagem_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `)
  }

  down () {
    this.raw(`drop table usuario_imagem`)
  }
}

module.exports = UsuarioImagemSchema
