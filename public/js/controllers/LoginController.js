// public/js/controllers/ContatoController.js

angular.module('ramalhoexpress').controller('LoginController',
  // function($scope, $resource, $routeParams) {
  	function($http, $scope, $routeParams, Login, Registrar, AcessoRestrito) {
      console.log("entrei login");

      AcessoRestrito.get(function(mensagem){
        console.log("Acesso : "+mensagem[0]);
        if(mensagem[0] === "y"){
          window.location = "/#/opcoes";
        }
      });


    $scope.usuario = {};
    $scope.usuario = new Login();
    console.log("1");

    $scope.entra = function () {
      console.log("cliclei");
		//Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
		// A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos
// window.location = "/#/contatos";
    var usuario = $scope.usuario;
    $scope.usuario.$save()
    .then(function (mensagem) {
      console.log("Mensagem : "+mensagem[0]);
      if(mensagem[0] === "s"){
        window.location = "/#/";
      }
      $scope.mensagem = {texto: 'Usuario ou senha não conferem!'};
      $scope.usuario = usuario;
    })
    // xhr.send(formData);
    // $scope.usuario.$save()
		// 	.then(function (usuario) {
    //
    //     console.log("Usuario: "+usuario.email);
    //
    //     // Registrar.get();
    //
		// 	})
		// 	.catch(function (erro) {
		// 		$scope.mensagem = { texto: 'Não foi possível salvar' };

};


  });
