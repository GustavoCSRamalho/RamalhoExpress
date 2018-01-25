angular.module('ramalhoexpress').factory('Home', function($resource) {
  return $resource('/home');
});
