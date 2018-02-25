// app/models/DadosDaEmpresa.js

var mongoose = require('mongoose');
module.exports = function() {
  var schema = mongoose.Schema({
    titulo : {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    data:{
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    }
  });

  return  mongoose.model('Evento',schema);
};
