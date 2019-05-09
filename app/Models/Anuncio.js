'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Anuncio extends Model {

    static get table() {
        return 'anuncio';
    }
    static get primaryKey() {
        return 'in_anuncio_id';
    }
    static get foreignKey() {
        return 'in_usuario_id';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }

    usuario() {
        return this.belongsTo('App/Models/Usuario', 'in_usuario_id', 'in_usuario_id');
    }
}

module.exports = Anuncio
