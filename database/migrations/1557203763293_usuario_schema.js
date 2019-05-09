'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE usuario (
          in_usuario_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
          va_nome VARCHAR(250) NOT NULL,
          dt_data_nascimento date DEFAULT NULL,
          va_celular VARCHAR(15) NOT NULL,
          va_telefone VARCHAR(15) DEFAULT NULL,
          va_email VARCHAR(250) NOT NULL UNIQUE,
          va_password VARCHAR(250) NOT NULL,
          en_genero enum('masculino', 'feminino', 'nao-informado'),
          va_cpf VARCHAR(14) DEFAULT NULL,
          CONSTRAINT usuario_pkey PRIMARY KEY(in_usuario_id),
          CONSTRAINT chk_en_genero CHECK (en_genero = 'masculino' or en_genero = 'feminino' or en_genero = 'nao-informado')
        );
    `)
  }

  down () {
    this.raw(`drop table usuario`)
  }
}

module.exports = UsuarioSchema
