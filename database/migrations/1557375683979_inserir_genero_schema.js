'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InserirGeneroSchema extends Schema {
  up () {
    this.raw(`
      INSERT INTO genero VALUES (1,'romance'), (2,'drama'), (3,'comédia'), (4,'terror'), (5,'poesia'), (6,'fantasia'), (7,'ficção-cientifíca'), (8,'distopia'), (9,'infanto-juvenil'), (10,'outros');
    `)
  }

  down () {}
}

module.exports = InserirGeneroSchema
