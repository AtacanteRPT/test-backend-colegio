// import { defaultFormatUtc } from "moment";

/**
 * UsuarioController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

const bcrypt = require('bcrypt-nodejs');


module.exports = {

    cambiarPassword: function (req, res) {

        // if(err){return res.serverError(err)}
        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(req.param('password'), salt, null, function(err, hash) {
        //         if (err) return cb(err);

        //         Usuario.update({idPersona : req.param('id')}).set({password:hash}).exec(function(err,datoUsuario){
        //             res.json({mensaje: 'cambio de password exitoso'})
        //         })

        //     });
        // });


        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.param('password'), salt, null, function (err, hash) {
                if (err) return cb(err);

                Usuario.update({ idPersona: req.user.id }).set({ password: hash }).exec(function (err, datoUsuario) {
                    res.json({ mensaje: 'cambio de password exitoso' })
                })

            });
        });


    }
    ,
    buscar: function (req, res) {

        var auxNombre = req.param("nombre").split(" ")
        sails.log("numero", parseInt(auxNombre[0], 10) + 10)

        if (isNaN(parseInt(auxNombre[0], 10))) {

            sails.log("NAN en auxNombre")
            if (auxNombre.length == 2) {
                Persona.find(
                    {
                        and: [
                            {
                                nombre: {
                                    'contains': auxNombre[0]
                                }
                            },
                            {
                                paterno: {
                                    'contains': auxNombre[1]
                                }
                            }

                        ]
                    }).exec(function (err, datoPersona) {

                        sails.log("Usuario buscado : ", datoPersona)
                        res.send(datoPersona)

                    })
            }
            else if (auxNombre.length == 3) {
                Persona.find(
                    {
                        and: [
                            {
                                nombre: {
                                    'contains': auxNombre[0]
                                }
                            },
                            {
                                paterno: {
                                    'contains': auxNombre[1]
                                }
                            },
                            {
                                materno: {
                                    'contains': auxNombre[2]
                                }
                            }
                            // ,
                            // {
                            //     cedula: {
                            //         'contains': auxNombre[0]
                            //     }
                            // }
                        ]
                    }).exec(function (err, datoPersona) {

                        sails.log("Usuario buscado : ", datoPersona)
                        res.send(datoPersona)

                    })
            } else {
                Persona.find(
                    {
                        or: [
                            {
                                nombre: {
                                    'contains': auxNombre[0]
                                }
                            },
                            {
                                paterno: {
                                    'contains': auxNombre[0]
                                }
                            },
                            {
                                materno: {
                                    'contains': auxNombre[0]
                                }
                            }
        
                        ]
        }).exec(function (err, datoPersona) {

                sails.log("Usuario buscado : ", datoPersona)
                res.send(datoPersona)

            })
        }

    } else {

        sails.log('BUSCANDO NUMERO : ' + (parseInt(auxNombre[0], 10) + 10))
    Persona.find(
            {
                cedula: { startsWith: parseFloat(auxNombre[0], 10) }

            }).exec(function (err, datoPersona) {

                sails.log("Usuario buscado : ", datoPersona)
                res.send(datoPersona)

            })
    }


}


}


