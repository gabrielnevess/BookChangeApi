'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
    static get table() {
        return 'images_anuncio';
    }
    static get primaryKey() {
        return 'in_images_anuncio_id';
    }
    static get foreignKey() {
        return 'in_anuncio_id';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
    static get computed() {
        return ['url']
    }

    getUrl({ path }) {
        return `${Env.get('APP_URL')}/images/${path}`
    }
}

module.exports = Image
