/**
 * Tutor_alumno.js
 *
 * @description :: The Tutor_alumno table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'tutor_alumno',


    attributes: {
        idAlumno: {

            required:false, 



            model: 'alumno'
        },
        idTutor: {

            required:false, 

            model: 'tutor'
        }
    }
};