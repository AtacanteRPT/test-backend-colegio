/**
 * Calificacion.js
 *
 * @description :: The Calificacion table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'calificacion',

    attributes: {
        examen_a: {
            type: 'number',
            required: false,


        },
        examen_b: {
            type: 'number',
            required: false,


        },
        examen_c: {
            type: 'number',
            required: false,


        },
        dps: {
            type: 'number',
            required: false,


        },
        idGestionAcademica: {

            required: false,

            model: 'gestionacademica'
        },
        idAsignatura: {

            required: false,



            model: 'asignatura'
        },
        idProfesor: {

            required: false,



            model: 'profesor'
        },
        idAlumno: {

            required: false,



            model: 'alumno'
        }
    }
};