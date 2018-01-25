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

    verificaAuth: function(req, res){

      console.log("Verifica admin!");
      var id = req.session._id;
      console.log("ID ver: "+req.session._id);
      Usuario.findById(id).exec()
      .then(function(usuario) {
        console.log("é admin ? : "+usuario.admin);
        if(!usuario.admin){
          console.log("Não");
          var mensagem = "n";
          res.json(mensagem);
        }
        console.log("Sim");
        var mensagem = "y";
        res.json(mensagem);

      }, function(erro){
        console.log(erro);
        res.status(404).json(erro);
      });

    }
};

return controller;
}
