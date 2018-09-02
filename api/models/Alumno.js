/**
 * Alumno.js
 *
 * @description :: The Alumno table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'alumno',
    primaryKey: 'id',
    attributes: {
        updatedAt: false,
        createdAt:false,
        id: {
            type: 'number',

            autoIncrement: true,
        },
        idPersona: {
            required:false, 
            model: 'persona'
        }
    }
};