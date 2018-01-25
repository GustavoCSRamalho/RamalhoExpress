// app/routes/contato.js
module.exports = function(app){
  var controller = app.controllers.contato;
  var verificaAutenticacao = require('../../config/auth');

  app.route('/contatos')
    .get(verificaAutenticacao, controller.listaContatos)
    .post(verificaAutenticacao, controller.salvaContato);
  app.route('/contatos/:id')
    .get(verificaAutenticacao, controller.obtemContato)
    .delete(verificaAutenticacao, controller.removeContato);

  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};
