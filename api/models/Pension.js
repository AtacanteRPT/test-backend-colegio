/**
 * Pension.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'pension',


    attributes: {
        idAlumno: {

            required: false,

            model: 'alumno'
        },
        gestion: {
            type: 'string',
            required: false,


        },
        enero: {
            type: 'boolean',
            required: false,


        },
        febrero: {
            type: 'boolean',
            required: false,


        },
        marzo: {
            type: 'boolean',
            required: false,


        },
        abril: {
            type: 'boolean',
            required: false,


        },
        mayo: {
            type: 'boolean',
            required: false,


        },
        junio: {
            type: 'boolean',
            required: false,


        },
        julio: {
            type: 'boolean',
            required: false,


        },
        agosto: {
            type: 'boolean',
            required: false,


        },
        septiembre: {
            type: 'boolean',
            required: false,


        },
        octubre: {
            type: 'boolean',
            required: false,


        },
        noviembre: {
            type: 'boolean',
            required: false,


        },
        diciembre: {
            type: 'boolean',
            required: false,


        }

    }

};