// app/controllers/contato.js

// var contatos = [{
//   _id: 1, nome: 'Contato Exemplo 1',
//   email: 'cont1@empresa.com.br'},
// {_id: 2, nome: 'Contato Exemplo 2',
// email: 'cont2@empresa.com.br'},
// {_id: 3, nome: 'Contato Exemplo 3',
// email: 'cont3@empresa.com.br'},
// {_id: 4, nome: 'Contato Exemplo 4',
// email: 'cont4@empresa.com.br'}];

module.exports = function(app){
var Usuario = app.models.Usuario;
var sanitize = require('mongo-sanitize');
var bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

var controller = {

    verificaAdmin: function(req, res){

      // console.log("Vou ver se existe!");
      // var id = req.session._id;
      Usuario.findOne({"admin": true}).exec()
      .then(function(usuario) {
        // console.log("é admin ? : "+usuario.admin);

        res.json(usuario);

      }, function(erro){
        console.log(erro);
        res.status(404).json(erro);
      });

    }
};

return controller;
}
