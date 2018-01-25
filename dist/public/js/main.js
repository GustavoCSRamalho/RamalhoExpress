// public/js/main.js


// var app = angular.module('contatooh',['ngRoute']);

angular.module('contatooh',['ngRoute', 'ngResource'])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });
    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });//Ver se o erro está aqui!

    $routeProvider.when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when('/', {
      templateUrl: 'partials/auth.html',
      controller: ''
    });



    $routeProvider.otherwise({redirectTo: '/contatos'});
  }]);
