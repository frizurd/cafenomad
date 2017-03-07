app.controller('CafeDetailController', function($scope, $routeParams, $http){
  $http.get('http://coffinomad.azurewebsites.net/api/caffees/1')
    .then(function(response) {
      $scope.caffees = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;
  });
});
