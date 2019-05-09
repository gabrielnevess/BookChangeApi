'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnuncioSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE anuncio (
          in_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          in_usuario_id INTEGER UNSIGNED NOT NULL,
          va_titulo_livro VARCHAR(250) NOT NULL,
          va_autor_livro VARCHAR(50) NOT NULL,
          va_ano_livro VARCHAR(4) DEFAULT NULL,
          en_estado enum('novo', 'usado') NOT NULL,
          en_tipo_anuncio enum('venda', 'troca') NOT NULL,
          en_status_anuncio enum('ativo', 'desativado') NOT NULL,
          va_descricao TEXT NOT NULL,
          dt_data_criacao DATETIME NOT NULL,
          CONSTRAINT anuncio_pkey PRIMARY KEY(in_anuncio_id),
          CONSTRAINT chk_en_estado CHECK (en_estado = 'novo' or en_estado = 'usado'),
          CONSTRAINT chk_en_tipo_anuncio CHECK (en_tipo_anuncio = 'venda' or en_tipo_anuncio = 'troca'),
          CONSTRAINT chk_en_status_anuncio CHECK (en_status_anuncio = 'ativo' or en_status_anuncio = 'desativado'),
          CONSTRAINT anuncio_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `)
  }

  down () {
    this.raw(`drop table anuncio`)
  }
}

module.exports = AnuncioSchema
