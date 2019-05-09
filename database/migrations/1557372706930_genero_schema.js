'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroSchema extends Schema {
  up () {
    this.raw(`
        CREATE TABLE genero (
          in_genero_id INTEGER UNSIGNED NOT NULL,
          va_genero VARCHAR(50) NOT NULL,
          CONSTRAINT genero_pkey PRIMARY KEY(in_genero_id)
        );
      `)
  }

  down () {
    this.raw(`drop table genero`)
  }
}

module.exports = GeneroSchema
