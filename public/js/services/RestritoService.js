// public/js/services/ContatoService.js

angular.module('ramalhoexpress').factory('AcessoRestrito', function($resource) {
  return $resource('/acessoRestrito');
});
