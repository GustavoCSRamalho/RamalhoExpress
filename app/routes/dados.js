// app/routes/dados.js
module.exports = function(app){
  // var controller = app.controllers.contato;
  var dadosController = app.controllers.dados;
  // var verificaAutenticacao = require('../../config/auth');

  app.route('/dadosdaempresa')

    .post(dadosController.salvaDados);
    // .get(verificaAutenticacao, controller.listaContatos)
    // .post(verificaAutenticacao, controller.salvaContato);
  app.route('/dadosdaempresa/:id')
    .get(dadosController.obtemDados);

    // .delete(verificaAutenticacao, controller.removeContato);

  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};
