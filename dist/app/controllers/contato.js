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
var Contato = app.models.contato;
var sanitize = require('mongo-sanitize');

var controller = {
    listaContatos: function(req, res) {
      Contato.find().populate('emergencia').exec()
      .then(
        function(contatos) {
          res.json(contatos);
        },function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
      // res.json(contatos);
    },
    obtemContato: function(req, res){
      var _id = req.params.id;
      Contato.findById(_id).exec()
      .then(
        function(contato) {
          if(!contato) throw new Error("Contato não encontrado");
          res.json(contato);
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
      // console.log("Entrei!");
      // var idContato = req.params.id;
      // var contato = contatos.filter(function (contato) {
      //   return contato._id == idContato;(
      // })[0];
      // contato ?
      //   res.json(contato) :
      //   res.status(404).send('Contato nao encontrado!');
    },
    removeContato: function(req, res){

      var _id = sanitize(req.params.id);
      Contato.remove({"_id": _id}).exec()
      .then(
        function() {
          res.end();
        },
        function(erro) {
          return console.error(erro);
        }
      );
      // var idContato = req.params.id;
      //
      // contatos = contatos.filter(function(contato){
      //   return contato._id != idContato;
      // });
      // console.log("API: removeContato: " + idContato);
      // res.send(204).end();

    },
    salvaContato: function(req, res) {
      var _id = req.body._id;

      // req.body.emergencia = req.body.emergencia || null;

      var dados = {
        "nome": req.body.nome,
        "email": req.body.email,
        "emergencia": req.body.emergencia || null
      };

      if(_id) {
        Contato.findByIdAndUpdate(_id, dados).exec()
        .then(
          function(contato) {
            res.json(contato);
          },
          function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
      }else{
        // Falta ainda
        Contato.create(req.body)
        .then(
          function(contato) {
            res.status(201).json(contato);
          },
          function(erro) {
            console.log(erro);
            res.status(500).json(erro);
          }
        );
      }
      // console.log("1 - salvaContato");
      // var contato = req.body;
      // contato = contato._id ? atualiza(contato) :
      // adiciona(contato);
      // res.json(contato);
    }
    // ,
    // verificaAutenticacao : function(req, res, next) {
    //   if(req.isAuthenticated()) {
    //     return next();
    //   }else{
    //     res.status(401).json('Não Autorizado!');
    //   }
    // }
};

return controller;
// function adiciona(contatoNovo) {
//     contatoNovo._id = ++ID_CONTATO_INC;;
//     contatos.push(contatoNovo);
//     return contatoNovo;
// };
//
// function atualiza(contatoAlterar) {
//   contatos = contatos.map(function(contato) {
//     if(contato._id == contatoAlterar._id){
//       contato =   contatoAlterar;
//     }
//     return contato;
//   });
//   return contatoAlterar;
// };

}
// module.exports = controller;
