'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroAnuncioSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE genero_anuncio (
          in_genero_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          in_anuncio_id INTEGER UNSIGNED NOT NULL,
          in_genero_id INTEGER UNSIGNED NOT NULL,
          CONSTRAINT genero_anuncio_pkey PRIMARY KEY (in_genero_anuncio_id),
          CONSTRAINT genero_anuncio_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE,
          CONSTRAINT genero_anuncio_in_genero_fkey FOREIGN KEY (in_genero_id) REFERENCES genero (in_genero_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `)
  }

  down () {
    this.raw(`drop table genero_anuncio`)
  }
}

module.exports = GeneroAnuncioSchema
