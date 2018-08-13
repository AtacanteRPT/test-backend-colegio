/**
 * PersonaController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var OneSignal = require('onesignal-node');

// var generatePassword = require('password-generator');
var user = [{
    id: 1,
    nombre: "Blanco"
},
{
    id: 2,
    nombre: "Verde"
}

]

// id int AUTO_INCREMENT not null,
// email varchar(100),
// nombre varchar(100) not null,
// paterno varchar(100) not null,
// materno varchar(100) not null,
// telefono int,
// celular int,
// fechaNacimiento date,
// fechaAlta date,
// sexo varchar(20),
// primary key (id)
module.exports = {


    todo: function (req, res) {

        // Persona.find().exec(function (err, datosPersona) {


        //     datosPersona.forEach(element => {

        //         if (element.rol = "tutor") {
        //             Persona.update(element.id).set({ cedula: element.identificacion }).exec(function (err, dato) {

        //             })
        //         }
        //     });

        //     res.send("actualizando")
        // })
    }

    ,
    crear: function (req, res) {

        var nuevaPersona = {
            identificacion: req.param('cedula'),
            nombre: req.param('nombre'),
            email: req.param('email'),
            paterno: req.param('paterno'),
            materno: req.param('materno'),
            telefono: req.param('telefono'),
            celular: req.param('celular'),
            fechaNacimiento: req.param('fechaNacimiento'),
            cedula: req.param('cedula'),
            expedido: req.param('expedido'),
            sexo: req.param('sexo'),
            rol: req.param('rol'),
            nro: req.param('nro'),
            codigoFoto: req.param('codigoFoto')
        }
        // sails.log("NUEVA PERSONA", nuevaPersona)
        var rol = req.param('rol');
        Persona.create(nuevaPersona).fetch().exec(function (err, datoPersona) {
            if (err) { return res.serverError(err) };

            sails.log("CONTROLLER PERSONA  PERSONA : ", datoPersona);
            // console.log('persons : ' + datoPersona.nombre)
            switch (rol) {
                case 'alumno':
                    Alumno.create({ idPersona: datoPersona.id }).exec(function (err, creado) {
                        if (err) { return res.serverError(err); }

                        usuario = {

                            username: datoPersona.id + datoPersona.nombre,
                            password: datoPersona.id + datoPersona.nombre,
                            codigo_qr: datoPersona.nombre + " " + datoPersona.paterno + " " + datoPersona.materno,
                            rol: rol,
                            idPersona: datoPersona.id
                        }

                        Usuario.create(usuario).exec(function (err, creado) {
                            if (err) { return res.serverError(err); }
                            res.send(datoPersona);
                        })
                    })
                    break;
                case 'profesor':
                    Profesor.create({ idPersona: datoPersona.id }).exec(function (err, creado) {
                        if (err) { return res.serverError(err); }
                        usuario = {

                            username: datoPersona.id + datoPersona.nombre,
                            password: datoPersona.id + datoPersona.nombre,
                            codigo_qr: datoPersona.nombre + " " + datoPersona.paterno + " " + datoPersona.materno,
                            rol: rol,
                            idPersona: datoPersona.id
                        }

                        Usuario.create(usuario).exec(function (err, creado) {
                            if (err) { return res.serverError(err); }
                            res.send(datoPersona);
                        })
                    })
                    break;
                case 'tutor':
                    Tutor.create({ idPersona: datoPersona.id }).exec(function (err, creado) {
                        if (err) { return res.serverError(err); }

                        usuario = {

                            username: datoPersona.id + datoPersona.nombre,
                            password: datoPersona.id + datoPersona.nombre,
                            codigo_qr: datoPersona.nombre + " " + datoPersona.paterno + " " + datoPersona.materno,
                            rol: rol,
                            idPersona: datoPersona.id
                        }

                        Usuario.create(usuario).exec(function (err, creado) {
                            if (err) { return res.serverError(err); }
                            res.send(datoPersona);
                        })
                    })
                    break;
                case 'administrativo':
                    Administrador.create({ idPersona: datoPersona.id, cargo: req.param('cargo') }).exec(function (err, creado) { if (err) { return res.serverError(err); } })
                    break;
                default:
                    res.send({ mensaje: "no fue asignado ningun rol" })
                    break;
            }

            // usuario = {
            //    
            //     username: datoPersona.id + datoPersona.nombre,
            //     password: datoPersona.id + datoPersona.nombre,
            //     codigo_qr: datoPersona.nombre + " " + datoPersona.paterno + " " + datoPersona.materno,
            //     rol: rol,
            //     idPersona: datoPersona.id
            // }

            // Usuario.create(usuario).exec(function(err, creado) {
            //     if (err) { return res.serverError(err); }
            //     res.send(datoPersona);
            // })


        });

    },
    traer: function (req, res) {
        var Id = req.param('id');

        Persona.findOne({ id: Id }).exec(function (err, datoPersona) {
            if (err) { return res.serverError(err); }

            Usuario.findOne({ idPersona: datoPersona.id }).exec(function (err, datoUsuario) {
                if (err) { return res.serverError(err); }

                var todoPersona = {
                    persona: datoPersona,
                    usuario: datoUsuario
                }

                res.send(todoPersona)
            });

        });
    }
    ,
    subir: function (req, res) {

        var idPersona = req.param('id');
        req.file('avatar').upload({
            // ~10MB
            dirname: require('path').resolve(sails.config.appPath, 'assets/avatars'),
            maxBytes: 10000000
        }, function whenDone(err, uploadedFiles) {

            sails.log("UPLOAD : ", uploadedFiles)

            if (err) {
                return res.negotiate(err);
            }

            // If no files were uploaded, respond with an error.
            if (uploadedFiles.length === 0) {
                return res.badRequest('No file was uploaded');
            }

            // console.log(sails.config.appUrl)

            // var direccionBase = "http://localhost:1337"
            // // var direccionBase = "http://192.241.152.146:1337"
            // var url = direccionBase + "/avatars//" + (uploadedFiles[0].fd).substring(47);

            var urlFoto = (uploadedFiles[0].fd).split("\\");
            sails.log("fotos:", urlFoto);
            var url = "avatars//" + urlFoto[urlFoto.length - 1]


            Persona.update({ id: idPersona }, {
                img: url,
            }).fetch().exec(function (err, datoPersona) {

                if (err) { console.log(err); return res.negotiate(err) };

                return res.send(datoPersona[0]);
            });

        });

    },
    informacion: function (req, res) {
        var codigoqr = req.param('codigoqr');
        var identificacion = codigoqr.split("$");
        console.log("idntificacion", identificacion[0])
        Persona.findOne({ identificacion: identificacion[0] }).exec(function (err, datoPersona) {
            if (err) { return res.serverError(err); }
            res.send(datoPersona);
        });
    }
    ,

    notificar: (req, res) => {


        var id = req.param("id")
        var mensaje = req.param("mensaje")


        Dispositivo.find({ idPersona: id }).populate("idPersona").exec(function (err, datosDispositivos) {

            var myClient = new OneSignal.Client({
                userAuthKey: 'MGI1ODliM2QtYmU2NC00ZjgzLWIwM2EtOWYxNjI0NmI3MTVj',
                // note that "app" must have "appAuthKey" and "appId" keys    
                app: { appAuthKey: 'ZmEzNzdmNjktMzQ0Ny00Y2IxLTk2YTMtNWU3MGYwNWFjNzUz', appId: 'e338a31b-4667-471e-9a1a-4aa0c3cf6d5f' }
            });

            //             userAuthKey:'MGI1ODliM2QtYmU2NC00ZjgzLWIwM2EtOWYxNjI0NmI3MTVj',
            // app:{appAuthKey:'ZmEzNzdmNjktMzQ0Ny00Y2IxLTk2YTMtNWU3MGYwNWFjNzUz' , appId:'e338a31b-4667-471e-9a1a-4aa0c3cf6d5f'}

            sails.log("DISPOSITIVOS", datosDispositivos)

            if (datosDispositivos.length > 0) {

                var listaDispositivos = []
                datosDispositivos.forEach(element => {
                    listaDispositivos.push(element.idDispositivo)
                });
                // sails.log("dispositivos", idDispositivos)
                var firstNotification = new OneSignal.Notification({
                    contents: {
                        en: "Marcò " + datosDispositivos[0].idPersona.nombre + datosDispositivos[0].idPersona.paterno + datosDispositivos[0].idPersona.materno,
                        tr: "Test mesajı"
                    },

                    include_player_ids: listaDispositivos
                });

                // Add a new target after creating initial notification body  
                // firstNotification.postBody["include_player_ids"].push["3aa608f2-c6a1-11e3-851d-000c2940e62c"]

                myClient.sendNotification(firstNotification, function (err, httpResponse, data) {
                    if (err) {
                        console.log('Something went wrong...');
                    } else {
                        console.log(data);
                    }
                    res.send({ mensaje: "notificaciòn enviada" })
                });
            } else {
                res.send({ mensaje: "no se encontraros dispositivos para este usuario" })
            }


        })


    }

};