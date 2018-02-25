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

        var dados = $scope.noticia;
        dados.foto = document.getElementById('arquivoInput').files[0].name;
        var dataMDD = dados.data;

        dataMDD = dataMDD.toISOString().substring(0, 10).split('-').reverse();
        dataMDD = dataMDD[0]+"-"+dataMDD[1]+"-"+dataMDD[2];
        console.log("Data  : "+dataMDD);
        // dados.data = data;

        var dadosEnviar = {
          titulo : dados.titulo,
          descricao : dados.descricao,
          data: dataMDD,
          foto: dados.foto
        };

        $http.post('/noticia', {'dados':dadosEnviar});
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
        var data = $scope.noticia.data;
        data = data.toISOString().substring(0, 10).split('-').reverse();
        data = data[0]+"-"+data[1]+"-"+data[2];
        // data = new Date(data);
        console.log("DATE : "+data);
    }
  });
