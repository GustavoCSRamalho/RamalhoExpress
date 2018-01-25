// app/routes/dados.js
module.exports = function(app){
  // var controller = app.controllers.contato;
  var updateController = app.controllers.upload;
  var multiparty = require('connect-multiparty');
  // var verificaAutenticacao = require('../../config/auth');

  app.route('/upload')
    .post(multiparty() ,updateController.updateDados);
    // .get(verificaAutenticacao, controller.listaContatos)
    // .post(verificaAutenticacao, controller.salvaContato);

    // .delete(verificaAutenticacao, controller.removeContato);

  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};
