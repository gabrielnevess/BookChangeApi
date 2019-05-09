'use strict'

const Model = use('Model');

class Genero extends Model {
    static get table() {
        return 'genero';
    }
    static get primaryKey() {
        return 'in_genero_id';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
}

module.exports = Genero
