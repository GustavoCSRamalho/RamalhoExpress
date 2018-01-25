angular.module('ramalhoexpress').factory('Registrar', function($resource) {
  return $resource('/register');
});
