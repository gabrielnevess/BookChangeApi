'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesAnuncioSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE images_anuncio (
        in_images_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
        in_anuncio_id INTEGER UNSIGNED NOT NULL,
        te_path TEXT NOT NULL,
        CONSTRAINT images_anuncio PRIMARY KEY(in_images_anuncio_id),
        CONSTRAINT images_anuncio_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)
  }

  down () {
    this.raw(`drop table images_anuncio`)
  }
}

module.exports = ImagesAnuncioSchema
