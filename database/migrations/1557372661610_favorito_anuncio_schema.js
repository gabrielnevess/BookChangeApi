'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritoAnuncioSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE favorito_anuncio (
          in_favorito_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          in_usuario_id INTEGER UNSIGNED NOT NULL,
          in_anuncio_id INTEGER UNSIGNED NOT NULL,
          en_status_favorito_anuncio enum('like','deslike') NOT NULL,
          CONSTRAINT favorito_anuncio_pkey PRIMARY KEY (in_favorito_anuncio_id),
          CONSTRAINT chk_en_status_favorito_anuncio CHECK (en_status_favorito_anuncio = 'like' or en_status_favorito_anuncio = 'deslike'),
          CONSTRAINT favorito_anuncio_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE,
          CONSTRAINT favorito_anuncio_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `)
  }

  down () {
    this.raw(`drop table favorito_anuncio`)
  }
}

module.exports = FavoritoAnuncioSchema
