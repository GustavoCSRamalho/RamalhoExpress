// public/js/controllers/ContatoController.js

angular.module('ramalhoexpress').controller('RegistrarController',
  // function($scope, $resource, $routeParams) {
  	function($scope, $routeParams, Registrar) {

    $scope.usuario = {};
    $scope.usuario = new Registrar();

    $scope.salva = function () {
		//Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
		// A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos
    $scope.usuario.$save()
			.then(function () {
				$scope.mensagem = { texto: 'Salvo com sucesso' };
				// limpa o formulário
				$scope.usuario = new Registrar();

			})
			.catch(function (erro) {
				$scope.mensagem = { texto: 'Não foi possível salvar' };
			});
};


  });
