angular.module('ramalhoexpress').controller('IndexController',
  	function( $http, $scope, $routeParams, Home) {


    console.log("entrei home");

    Home.query(
			function (eventos) {
				$scope.eventos = eventos.reverse();
			},
			function (erro) {
				console.log("Não foi possível obter a lista de eventos");
				console.log(erro);
			});


  });
