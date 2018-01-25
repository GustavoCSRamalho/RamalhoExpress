 angular.module('ramalhoexpress').factory('$message', ['$http',
// angular.module('ramalhoexpress').factory('Upload', function($resource) {
  function($http) {
      return {
          create: function(params) {
              var method = 'POST';
              var url = "http://localhost:3000/#/upload";
              console.log($.param(params));
              return $http({
                  method: method,
                  url : url,
                  data: $.param(params),
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
              });
          }
      };
  }
]);
