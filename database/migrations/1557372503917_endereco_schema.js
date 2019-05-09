'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE endereco (
          in_endereco_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          in_usuario_id INTEGER UNSIGNED NOT NULL UNIQUE,
          logradouro VARCHAR(250) NOT NULL,
          bairro VARCHAR(250) NOT NULL,
          cidade VARCHAR(250) NOT NULL,
          estado VARCHAR(2) NOT NULL,
          numero int(11) NOT NULL,
          complemento VARCHAR(50) DEFAULT NULL,
          ponto_referencia VARCHAR(250) DEFAULT NULL,
          CONSTRAINT endereco_pkey PRIMARY KEY(in_endereco_id),
          CONSTRAINT endereco_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `)
  }

  down () {
    this.raw(`drop table endereco`)
  }
}

module.exports = EnderecoSchema
