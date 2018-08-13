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
            required:false, 
            allowNull:true
        },
        estado: {
            type: 'string',
            required:false, allowNull:true
        },
        observacion: {
            type: 'string',
            required:false, allowNull:true
        },
        hora_llegada: {
            type: 'string',
            required:false, allowNull:true
        },
        hora_salida: {
            type: 'string',
            required:false, allowNull:true
        },
        idGestionAcademica: {

            model: 'gestionacademica'
        },
        idPersona: {
            model: 'persona'
        }

    }

};