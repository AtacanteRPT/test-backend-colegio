/**
 * Persona.js
 *
 * @description :: The Persona table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'persona',
    primaryKey: 'id',
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true,
        },
        email: {
            type: 'string',
            required: false,
        },
        dispositivo: {
            type: 'string',
            required: false
        },
        identificacion: {
            type: 'string',
            required: false,


        },
        nombre: {
            type: 'string',
            required: false,

        },
        img: {
            type: 'string',
            required: false,

        },
        paterno: {
            type: 'string',
            required: false,

        },
        materno: {
            type: 'string',
            required: false,

        },
        telefono: {
            type: 'number',
            required: false,


        },
        celular: {
            type: 'number',
            required: false,


        },
        cedula: {
            type: 'number',
            required: false,


        },
        expedido: {
            type: 'string',
            required: false,


        },
        fechaNacimiento: {
            type: 'string',
            columnType: 'date',
            required: false,

        },
        fechaAlta: {
            type: 'string',
            columnType: 'date',
            required: false,

        },
        sexo: {
            type: 'string',
            required: false,


        },
        nro: {
            type: 'string',
            required: false,

        },
        codigoFoto: {
            type: 'string',
            required: false,

        },
        rol: {
            type: 'string',


        }

    }

};