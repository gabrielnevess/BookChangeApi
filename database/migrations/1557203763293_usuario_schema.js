'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.raw(`
          create table usuario (
            in_usuario_id integer unsigned not null auto_increment,
            va_nome varchar(250) not null,
            dt_data_nascimento date,
            va_celular varchar(15) not null,
            va_telefone varchar(15) default null,
            va_email varchar(250) not null unique,
            va_password varchar(250) not null,
            va_cpf varchar(14),    
            constraint usuario_pkey primary key(in_usuario_id)
        );
    `)
  }

  down () {
    this.raw(`drop table usuario`)
  }
}

module.exports = UsuarioSchema
