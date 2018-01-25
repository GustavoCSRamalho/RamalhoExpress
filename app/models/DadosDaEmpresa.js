// app/models/DadosDaEmpresa.js

var mongoose = require('mongoose');
module.exports = function() {
  var schema = mongoose.Schema({
    empresa : {
      type: String,
      required: true
    },
    frota: {
      type: String,
      required: true
    },
    servicos: {
      type: String,
      required: true
    },
    calendario: {
      type: String,
      required: true
    },
    politicareserva: {
      type: String,
      required: true
    },
    trabalheconosco: {
      type: String,
      required: true
    },
    faleconosco : {
      type: String,
      required: true
    },
    adminID: {
      type: String,
      required: true
    }
  });

  return  mongoose.model('DadosDaEmpresa',schema);
};
