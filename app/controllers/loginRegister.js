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

    verificaUsuario: function(req, res){

      var dados = {
        "email": req.body.email,
        "senha": req.body.senha
      };
      var senha = bcrypt.hashSync(dados.senha);

      console.log("Vou ver se existe!");

      Usuario.findOne({"email": dados.email}).exec()
      .then(function(usuario) {
        console.log("Vi: "+usuario);
        if(!usuario) throw new Error("Usuario nao cadastrado!");
        const hash = crypto.createHmac('sha256', dados.senha)
                     .update('I love programming!')
                     .digest('hex');
                     console.log(hash);
        if(usuario.email === dados.email && hash === usuario.senha){
          console.log("Email confere!");
          console.log("Id: "+usuario._id);
          console.log("Session id: "+req.session._id);
          req.session._id = usuario._id;
          console.log("Usuario ID REQ: "+req.session._id);
          console.log("ok");
          // res.json(usuario);
          // console.log("ID : "+req.session._id);
          // res.redirect("/#/contatos");
          // var mensagem = JSON.parse("entrou");
          var mensagem = "s";
          res.json(mensagem);
          // console.log("As senhas conferem!");
        }
        // res.send({"mensagem.texto":"OK"});
        // res.redirect("/#/login");
        var mensagem = "n";
        res.json(mensagem);
          // console.log("1 : "+usuario.senha);
          // console.log("2 : "+hash);


        // console.log("Achei : "+usuario);
      }, function(erro){
        console.log(erro);
        res.status(404).json(erro);
      });

    },

    salvaUsuario: function(req, res) {
      var _id = req.body._id;
      var senha = req.body.senha;

      const hash = crypto.createHmac('sha256', senha)
                   .update('I love programming!')
                   .digest('hex');
    console.log(hash);

      var dados = {
        "nome": req.body.nome,
        "email": req.body.email,
        "senha": hash,
        "telefone": req.body.telefone,
        "admin": false
      };

      Usuario.findOne({'email': dados.email}).exec()
      .then(
        function(usuario) {
          if(!usuario){
            Usuario.create(dados)
            .then(function(usuario) {
              res.redirect("/login",{"message": "Usuario criado!"});
            }, function(erro) {
              console.log(erro);
              res.status(500).json(erro);
            });
          }else{
            res.redirect("/register",{"message": "O email ja está sendo usado!","usuario":dados});
          }
        },
        function(erro) {
          console.error(erro);
          // res.status(500).json(erro);
          res.redirect("/register",{"message": "Aconteçeu um erro!","usuario":dados});
        }
      );
    }

};

return controller;
}
