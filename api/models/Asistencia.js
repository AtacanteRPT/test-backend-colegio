/**
 * Asistencia.js
 *
 * @description :: The Asistencia table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'asistencia',
    attributes: {
        fecha: {
            type: 'string',
            columnType: 'date',
            required: false,
        },
        estado: {
            type: 'string',
            required: false,
        },
        observacion: {
            type: 'string',
            required: false,
        },
        hora_llegada: {
            type: 'string',
            required: false,
        },
        hora_salida: {
            type: 'string',
            required: false,
        },
        idGestionAcademica: {

            required: false,
            model: 'gestionacademica'
        },
        idPersona: {
            required: false,
            model: 'persona'
        }

    }

};