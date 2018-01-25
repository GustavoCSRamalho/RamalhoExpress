module.exports = function(app){
var Noticia = app.models.Evento;
var sanitize = require('mongo-sanitize');

var controllerDados = {
    listaDados: function(req, res) {
      Noticia.find().exec()
      .then(
        function(dados) {
          res.json(dados);
        },function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
    },
    obtemDado: function(req, res){
      var _id = req.params.id;
      Noticia.findById(_id).exec()
      .then(
        function(dados) {
          if(!dados) throw new Error("Noticia não encontrado");
          res.json(dados);
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
    },
//     ,
//     removeContato: function(req, res){
//
//       var _id = sanitize(req.params.id);
//       Contato.remove({"_id": _id}).exec()
//       .then(
//         function() {
//           res.end();
//         },
//         function(erro) {
//           return console.error(erro);
//         }
//       );
//     },
    salvaDado: function(req, res) {
      console.log("ola");
      var _id = req.body._id


      // var xhr = new XMLHttpRequest();
      console.log("Recebido: "+req.body.dados.titulo);
      console.log("Recebido 2: "+req.body.dados.foto);



      // var Evento = {
      //   "titulo": req.body.titulo,
      //   "descricao": req.body.descricao,
      //   "foto": req.body.foto
      // };
      // console.log("Recebi como nome de foto: "+dados.titulo);
      // console.log("Poderia ser assim: "+dados);

      if(_id) {
        Noticia.findByIdAndUpdate(_id, Evento).exec()
        .then(
          function(dados) {
            res.json(dados);
          },
          function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
        // Falta ainda
       }else{
        Noticia.create(req.body.dados)
        .then(
          function(dados) {
            res.status(201).json(dados);
          },
          function(erro) {
             console.log(erro);
            res.status(500).json(erro);
          }
        );
      }
    }
};

return controllerDados;
}
