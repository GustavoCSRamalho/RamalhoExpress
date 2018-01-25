// public/js/main.js


// var app = angular.module('contatooh',['ngRoute']);

angular.module('ramalhoexpress',['ngRoute', 'ngResource', 'meusComponentes'])
  .config(function($routeProvider) {
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

    $routeProvider.when('/dadosdaempresa/:userId',{
      templateUrl: 'partials/dadosempresa.html',
      controller: 'DadosController'
    });
    $routeProvider.when('/dadosdaempresa',{
      templateUrl: 'partials/dadosempresa.html',
      controller: 'DadosController'
    });

    $routeProvider.when('/frota', {
      templateUrl: 'partials/frota.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/servicos', {
      templateUrl: 'partials/servicos.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/calendario', {
      templateUrl: 'partials/calendario.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/politicadereserva', {
      templateUrl: 'partials/politicareserva.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/trabalheconosco', {
      templateUrl: 'partials/trabalheconosco.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/faleconosco', {
      templateUrl: 'partials/faleconosco.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/empresa', {
      templateUrl: 'partials/empresa.html',
      controller: 'RotasController'
    });

    $routeProvider.when('/controlenoticias', {
      templateUrl: 'partials/controlenoticias.html',
      controller: 'NoticiasController'
    });

    $routeProvider.when('/', {
      templateUrl: 'partials/index.html',
      controller: 'IndexController'
    });

    $routeProvider.when('/upload', {
      templateUrl: 'partials/upload.html',
      controller: 'UploadController'
    });

    $routeProvider.when('/entrar', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    });

    $routeProvider.when('/registrar', {
      templateUrl: 'partials/register.html',
      controller: 'RegistrarController'
    });
    $routeProvider.when('/opcoes', {
      templateUrl: 'partials/opcoes.html',
      controller: ''
    });


    $routeProvider.otherwise({redirectTo: '/contatos'});
  });
