'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnuncioImagensSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE anuncio_imagens (
        in_anuncio_imagens_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
        in_anuncio_id INTEGER UNSIGNED NOT NULL,
        te_path TEXT NOT NULL,
        CONSTRAINT anuncio_imagens_pkey PRIMARY KEY(in_anuncio_imagens_id),
        CONSTRAINT anuncio_imagens_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)
  }

  down () {
    this.raw(`drop table anuncio_imagens`)
  }
}

module.exports = AnuncioImagensSchema
