// app/routes/home.js
// var controller = require('../../app/controllers/home');

module.exports = function(app){

  var evento = app.controllers.index;


  app.route('/home')
    .get(evento.listaNoticias);
  // app.get('/', controller.index);
//  app.get('/',controller.entra);
  // app.get('/index', controller.index);

};
