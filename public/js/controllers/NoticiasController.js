angular.module('ramalhoexpress').controller('NoticiasController',
  // function($scope, $resource, $routeParams) {


    function($http, $scope, $routeParams, Noticia, AcessoRestrito) {


      // AcessoRestrito.get(
      //   function(mensagem){
      //     if(mensagem[0] === "n"){
      //       window.location = "/#/contatos";
      //     }
      //   });
      AcessoRestrito.get(function(mensagem){
        console.log("Acesso : "+mensagem[0]);
        if(mensagem[0] === "n"){
          window.location = "/#/contatos";
        }
      });


      console.log("Entrei : upload");
      $scope.noticia = {};
      $scope.noticia = new Noticia();
      $scope.salva = function() {
        console.log("Salva ativado!123");
        //Pegar dados da imagem e salvar ela

        // var formData = new FormData();
      	// formData.append("file", document.getElementById("arquivoInput").files[0]);
        // var xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState == 4) {
      	// 			var div = document.getElementById('menssagem');
        //       var resposta = xhr.responseText;
        //       div.innerHTML += resposta;
        //   }
      	// }

        // xhr.open("POST", "http://localhost:3000/upload");
      	// xhr.send(formData);


        //Fim
        var dados = $scope.noticia;
        dados.foto = document.getElementById('arquivoInput').files[0].name;


        $http.post('/noticia', {'dados':dados});
        console.log("Titulo: "+dados.titulo);
        console.log("Foi!");


        ///////// Fim

        ////Teste 2

        var formData = new FormData();
      	formData.append("file", document.getElementById("arquivoInput").files[0]);
        var xhr = new XMLHttpRequest();


        xhr.open("POST", "http://localhost:3000/upload");
      	xhr.send(formData);

        $scope.mensagem = {texto: 'Salvo com sucesso'};
        //// Fim teste 2

        // $scope.noticia.$save()
    		// 	.then(function () {
    		// 		$scope.mensagem = { texto: 'Salvo com sucesso' };
    		// 		// limpa o formulário
    		// 		// $scope.contato = new Contato();
        //
    		// 	})
    		// 	.catch(function (erro) {
    		// 		$scope.mensagem = { texto: 'Não foi possível salvar' };
    		// 	});

        // var dados = $scope.noticia;
        // dados.foto = document.getElementById('arquivoInput').files[0].name;
        // console.log("Titulo da noticia: "+dados.titulo);
        //
        // console.log("Nome da imagem: "+dados.foto);
      };

      $scope.salva1 = function() {
        console.log("Clicou");

        var formData = new FormData();
      	formData.append("file", document.getElementById("arquivoInput").files[0]);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
      				var div = document.getElementById('menssagem');
              var resposta = xhr.responseText;
              div.innerHTML += resposta;
          }
      	}

        xhr.open("POST", "http://localhost:3000/upload");
      	xhr.send(formData);

        var url = "http://localhost:3000/upload";
        // $http.post('/upload');
        console.log("Foi");
        console.log("Req: 1: "+document.getElementById('arquivoInput').files[0].name);

      };
    });
