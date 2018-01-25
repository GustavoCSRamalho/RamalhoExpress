angular.module('ramalhoexpress').factory('Login', function($resource) {
  return $resource('/login');
});
