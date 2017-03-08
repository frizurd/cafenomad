app.controller('CityController', function($scope, $routeParams, $http){

  $scope.cityID = $routeParams.city;

  $http.get("http://coffinomad.azurewebsites.net/api/locaties")
      .then(function (response) {
        $scope.cities = response.data;
  });

  $http.get("http://coffinomad.azurewebsites.net/api/caffees")
      .then(function (response) {
        $scope.cafes = response.data;
  });

  $http.get("http://coffinomad.azurewebsites.net/api/locaties/"+$scope.cityID)
      .then(function (response) {
        $scope.curCity = response.data;
  });

});
