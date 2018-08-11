/**
 * Tutor.js
 *
 * @description :: The Tutor table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'tutor',

    primaryKey: 'id',
    attributes: {
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