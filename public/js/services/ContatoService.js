// public/js/services/ContatoService.js

angular.module('ramalhoexpress').factory('Contato', function($resource) {
  return $resource('/contatos/:id');
});
