angular.module('ramalhoexpress').controller('DadosController',
  	function( $http, $scope, $routeParams, DadosEmpresa, Admin, AcessoRestrito) {

    $scope.dados = {};
    $scope.dados = new DadosEmpresa();
    console.log("entrei");

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
    
    console.log("Ok");
    Admin.get(
    function(user) {
      DadosEmpresa.get({id: user._id},
      function(dados) {

        $scope.dados = dados;
      }, function(erro) {
        $scope.mensagem = {texto: 'Não foi possivel obter os dados.'};
        console.log(erro);
        }
      );

    }, function(erro) {
      // $scope.mensagem = {texto: 'Não foi possivel obter os dados.'};
      // console.log(erro);
      console.log("Sem id!");
      }
    );



      // DadosEmpresa.get(
      // function(dados) {
      //   console.log("Dados: "+dados.empresa);
      //   $scope.dados = dados;
      // }, function(erro) {
      //   $scope.mensagem = {texto: 'Não foi possivel obter os dados.'};
      //   console.log(erro);
      //   }
      // );

console.log("Mensagem");
$scope.salva = function () {
    console.log("clicado!");
		//Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
		// A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos

    var dados = $scope.dados;
    $http.post('/dadosdaempresa', {'dados':dados}).then(function (dados) {
        $scope.dados = dados;
				$scope.mensagem = { texto: 'Salvo com sucesso' };
				// limpa o formulário
				// $scope.dados = new DadosEmpresa();

			})
			.catch(function (err) {
        console.log(err);
				$scope.mensagem = { texto: 'Não foi possível salvar' };
			});
    // $scope.dados.$save()
		// 	.then(function () {
		// 		$scope.mensagem = { texto: 'Salvo com sucesso' };
		// 		// limpa o formulário
		// 		// $scope.dados = new DadosEmpresa();
    //
		// 	})
		// 	.catch(function (erro) {
		// 		$scope.mensagem = { texto: 'Não foi possível salvar' };
		// 	});
};
  // Contato.query(function(contatos) {
  //   $scope.contatos = contatos;
  // });


  });
