/**
 * DispositivoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    eliminar: function(req, res){

        Dispositivo.destroy({idDispositivo : req.param("idDispositivo")}).exec(function(err, result){
            res.send(result)
        })
    }

};

