// import { defaultFormatUtc } from "moment";

/**
 * UsuarioController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

const bcrypt = require('bcrypt-nodejs');


module.exports = {

cambiarPassword:function (req,res) { 

        // if(err){return res.serverError(err)}
        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(req.param('password'), salt, null, function(err, hash) {
        //         if (err) return cb(err);
                
        //         Usuario.update({idPersona : req.param('id')}).set({password:hash}).exec(function(err,datoUsuario){
        //             res.json({mensaje: 'cambio de password exitoso'})
        //         })
                
        //     });
        // });


        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.param('password'), salt, null, function(err, hash) {
                if (err) return cb(err);
                
                Usuario.update({idPersona : req.user.id}).set({password:hash}).exec(function(err,datoUsuario){
                    res.json({mensaje: 'cambio de password exitoso'})
                })
                
            });
        });


}

    
};