/**
 * Periodo.js
 *
 * @description :: The Periodo table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'periodo',

    primaryKey: 'id',
    attributes: {
        id: {
            type: 'number',

            autoIncrement: true,


        },
        nombre: {
            type: 'string',
            required: false,


        },
        hora_ini: {
            type: 'string',
            columnType: 'time',
            required: false,

        },
        hora_fin: {
            type: 'string',
            columnType: 'time',
            required: false,

        }

    }

};