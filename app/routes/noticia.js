// app/routes/contato.js
module.exports = function(app){
  var noticia = app.controllers.noticia;
  // var verificaAutenticacao = require('../../config/auth');

  app.route('/noticia')
    .get(noticia.listaDados)
    .post( noticia.salvaDado);
  app.route('/noticia/:id')
    .get(noticia.obtemDado);
    // .delete( controller.removeContato);

  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);
};
