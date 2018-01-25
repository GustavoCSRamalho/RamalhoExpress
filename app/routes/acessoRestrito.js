// app/routes/loginRegister.js

var passport = require('passport');
var verificaAutenticacao = require('../../config/auth');

module.exports = function(app){
  var acessoRestrito = app.controllers.acessoRestrito;
  // var verificaAutenticacao = require('../../config/auth');

  app.route('/acessoRestrito')
    .get(acessoRestrito.verificaAuth);
    // .post(loginRegister.verificaUsuario);
  // app.route('/register')
  //   // .get(noticia.obtemDado)
  //   .post(loginRegister.salvaUsuario);
    // .delete( controller.removeContato);

  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};
