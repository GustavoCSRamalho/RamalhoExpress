// public/js/services/ContatoService.js

angular.module('ramalhoexpress').factory('Noticia', function($resource) {
  return $resource('/noticia/:id');
});
