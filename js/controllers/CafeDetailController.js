app.controller('CafeDetailController', function($scope, $routeParams, $http){
  $http.get('http://coffinomad.azurewebsites.net/api/caffees/' + $routeParams.id)
    .then(function(response) {
      $scope.caffees = response.data;

  });
});
