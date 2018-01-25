// app/models/Informacoes.js

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
    img: {
      type: String,
      required: true
    }
  });

  return  mongoose.model('Informacoes',schema);
};
