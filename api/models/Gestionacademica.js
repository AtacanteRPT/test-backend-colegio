/**
 * Gestionacademica.js
 *
 * @description :: The Gestionacademica table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'gestionacademica',

    primaryKey: 'id',
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true,

        },
        tipo: {
            type: 'string',
            required:false, allowNull:true


        },
        fecha_inicio: {
            type: 'string',
            columnType: 'date',
            required:false, allowNull:true

        },
        fecha_fin: {
            type: 'string',
            columnType: 'date',
            required:false, allowNull:true

        },
        gestion: {
            type: 'number',
            required:false

        },
        horaEntrada: {
            type: 'string',
            required:false, allowNull:true

        },
        horaSalida: {
            type: 'string',
            required:false, allowNull:true

        },
    }

};