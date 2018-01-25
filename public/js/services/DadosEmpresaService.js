// public/js/services/DadosEmpresaService.js

angular.module('ramalhoexpress').factory('DadosEmpresa', function($resource) {
  return $resource('/dadosdaempresa/:id');
});
