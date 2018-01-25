module.exports = function(app){
  var fs = require('fs');

  var updateDados = {

    updateDados: function(req, res){
      console.log("Ok");
      console.log("Valor req : "+req.files.file.name);
      var arquivo = req.files.file;
    	var temporario = req.files.file.path;
    	var novo = './public/uploads/' + req.files.file.name;
     	fs.rename(temporario, novo, function(err){
     		if(err){
     			res.status(500).json({error: err})
     		}else{
            res.json({message: "enviado com sucesso.", file: novo});
        }

     	})

      console.log("Arquivo escrito!");
    }
};

return updateDados;
}
