// import { defaultFormatUtc } from "moment";

/**
 * UsuarioController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

const bcrypt = require('bcrypt-nodejs');
var moment = require('moment')

module.exports = {

  cambiarMiPassword: function (req, res) {
    var actualPassword = req.param("actualPassword"),
      nuevoPassword = req.param("nuevoPassword")

    Usuario.findOne({
      idPersona: req.user.id
    }, function (err, user) {
      if (err) return cb(err);
      if (!user) return cb(null, false, {
        message: 'Usuario No encontrado'
      });
      bcrypt.compare(actualPassword, user.password, function (err, res) {
        if (!res) {
          res.json({
            mensaje: "password actual incorrecto "
          })
        }
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(nuevoPassword, salt, null, function (err, hash) {
            Usuario.update({
              idPersona: id
            }).set({
              password: hash
            }).exec(function (err, datoUsuario) {
              res.json({
                mensaje: 'cambio de password exitoso'
              })
            })
          });
        });


        // sails.log("Passport.js - userDetails", userDetails)

      });
    });
  },
  cambiarPassword: function (req, res) {
    var id = req.param("id"),
      nuevoPassword = req.param("nuevoPassword")

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(nuevoPassword, salt, null, function (err, hash) {
        Usuario.update({
          idPersona: id
        }).set({
          password: hash
        }).exec(function (err, datoUsuario) {
          res.json({
            mensaje: 'cambio de password exitoso'
          })
        })
      });
    });


  },

  otro: function (req, res) {
    var horaActual = moment().format('LTS')

    Asistencia.update({
        idPersona: 1
      }).set({
        hora_salida: horaActual
      })
      .fecth().exec((err, datoAsistencia2) => {
        console.log('actualizado', datoAsistencia2)

        auxAlumno = {
          identificacion: actualIdentificacion,
          materno: resultado.materno,
          paterno: resultado.paterno,
          nombre: resultado.nombre,
          curso: resultado.grupo + " " + resultado.paralelo,
          turno: resultado.turno,
          img: resultado.img,
          hora_llegada: datoAsistencia2[0].hora_llegada,
          hora_salida: datoAsistencia2[0].hora_salida
        }

        // rest.postJson(DOMINIO + 'persona/notificar', { id: datoPersona.id, mensaje: " Hora Salida : " + datoAsistencia.hora_salida }).on('complete', function (data3, response3) {
        //     // handle response
        //     sails.log("se enviò una notificaciòn")
        // });

        res.send(auxAlumno);
      })
  }


}
