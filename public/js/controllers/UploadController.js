angular.module('ramalhoexpress').controller('UploadController',
  // function($scope, $resource, $routeParams) {


    function($http, $scope, $routeParams) {


      console.log("Entrei : upload");

      $scope.upload = function() {
        console.log("Clicou");

        var formData = new FormData();
      	formData.append("file", document.getElementById("arquivoInput").files[0]);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
      				var div = document.getElementById('menssagem');
              var resposta = xhr.responseText;
              div.innerHTML += resposta;
          }
      	}

        xhr.open("POST", "http://localhost:3000/upload");
      	xhr.send(formData);

        var url = "http://localhost:3000/upload";
        // $http.post('/upload');
        console.log("Foi");
        console.log("Req: 1: "+document.getElementById('arquivoInput').files[0].name);

      };
    });
