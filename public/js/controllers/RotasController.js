angular.module('ramalhoexpress').controller('RotasController',
  	function($scope, $routeParams, DadosEmpresa, Admin) {



    $scope.dados = {};
    console.log("Entrei na Rota!");
    console.log("Pronto");
    Admin.get(
    function(user) {
      // console.log("Dados: "+dados.frota);
      // console.log("Hey"):
      // $scope.dados = dados;
      console.log("User id : "+user._id);

      DadosEmpresa.get({id: user._id},
      function(dados) {
        // console.log("Dados: "+dados.frota);
        // console.log("Hey"):
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



  });
