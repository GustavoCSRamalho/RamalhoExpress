// public/js/services/ContatoService.js

angular.module('ramalhoexpress').factory('Admin', function($resource) {
  return $resource('/admin');
});
