module.exports = function(app){
var Evento = app.models.Evento;
var sanitize = require('mongo-sanitize');

var controller = {
    listaNoticias: function(req, res) {
      Evento.find().exec()
      .then(
        function(eventos) {
          res.json(eventos);
        },function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
    }

};

return controller;

}
