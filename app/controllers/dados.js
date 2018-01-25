module.exports = function(app){
var DadosDaEmpresa = app.models.DadosDaEmpresa;
var Usuario = app.models.Usuario;
var sanitize = require('mongo-sanitize');

var controllerDados = {
    // listaContatos: function(req, res) {
    //   Contato.find().populate('emergencia').exec()
    //   .then(
    //     function(contatos) {
    //       res.json(contatos);
    //     },function(erro) {
    //       console.error(erro);
    //       res.status(500).json(erro);
    //     }
    //   );
    // },
    obtemDados: function(req, res){

      var id = req.params.id;
      console.log("ID : "+id);
      console.log("session : "+req.session._id);


      DadosDaEmpresa.findOne({"adminID":id}).exec()
      .then(
        function(dados) {
          console.log("Teste: "+dados.empresa);
          if(!dados) throw new Error("Dados não encontrado");
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
    salvaDados: function(req, res) {
      console.log("ola");
      // console.log("ID DADOS : "+req.session._id);
      // var _id;
      var _id = req.session._id;
      console.log("salvaDados id : "+_id);
      var dadosEmpresa = {
        "adminID": req.session._id,
        "empresa": req.body.dados.empresa,
        "frota": req.body.dados.frota,
        "servicos": req.body.dados.servicos,
        "calendario": req.body.dados.calendario,
        "politicareserva":req.body.dados.politicareserva,
        "trabalheconosco":req.body.dados.trabalheconosco,
        "faleconosco": req.body.dados.faleconosco
      };
      console.log("Modf : "+dadosEmpresa.empresa);

      if(_id) {
        console.log("IF");
        DadosDaEmpresa.update({adminID:_id}, dadosEmpresa,
          {upsert: true},function(){
            console.log("Foi!");
            res.json(dadosEmpresa);
          } ,function(err){
            console.log("Erro");
            console.log(err);
            res.status(500).json(err);
          });
      }else{
        console.log("else");
        // console.log("ID AQui ! : "+req.session._id);
        var dadosEmpresa = {
          "adminID": req.session._id,
          "empresa": req.body.dados.empresa,
          "frota": req.body.dados.frota,
          "servicos": req.body.dados.servicos,
          "calendario": req.body.dados.calendario,
          "politicareserva":req.body.dados.politicareserva,
          "trabalheconosco":req.body.dados.trabalheconosco,
          "faleconosco": req.body.dados.faleconosco
        };
        // Falta ainda
        DadosDaEmpresa.create(dadosEmpresa)
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
