app.controller('CafeDetailController', function($scope, $routeParams, $http){
  $http.get('http://coffinomad.azurewebsites.net/api/caffees/' + $routeParams.id)
    .then(function(response) {
      $scope.caffees = response.data;
      fetchLocation(response.data.LocatieID);
  });

  var fetchLocation = function(locationId) {
    $http.get('http://coffinomad.azurewebsites.net/api/Locaties/' + locationId)
      .then(function(response) {
        $scope.location = response.data;
    });
  };

});
