'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioImagem extends Model {
    
    static get table(){
        return 'usuario_imagem';
    }
    static get primaryKey() {
        return 'in_usuario_imagem_id';
    }
    static get createdAtColumn(){
        return null;
    }
    static get updatedAtColumn(){
        return null;
    }

}

module.exports = UsuarioImagem
