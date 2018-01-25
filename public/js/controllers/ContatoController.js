// public/js/controllers/ContatoController.js

angular.module('ramalhoexpress').controller('ContatoController',
  // function($scope, $resource, $routeParams) {
  	function($scope, $routeParams, Contato) {
    // console.log($routeParams.contatoId);
    // var Contato =  $resource('/contatos/:id');
    // var Contatos =  $resource('/contatos');
    // var ID_CONTATO_INC = 3;
    $scope.contato = {};
    if($routeParams.contatoId){
      Contato.get({id: $routeParams.contatoId},
      function(contato) {
        $scope.contato = contato;
      }, function(erro) {
        $scope.mensagem = {texto: 'Não foi possivel obter o contato.'};
        console.log(erro);
        }
      );
    }else{
      $scope.contato = new Contato();
    }

$scope.salva = function () {
		//Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
		// A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos
		$scope.contato.$save()
			.then(function () {
				$scope.mensagem = { texto: 'Salvo com sucesso' };
				// limpa o formulário
				$scope.contato = new Contato();

			})
			.catch(function (erro) {
				$scope.mensagem = { texto: 'Não foi possível salvar' };
			});
};
  Contato.query(function(contatos) {
    $scope.contatos = contatos;
  });


  });
