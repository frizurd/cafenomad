
app.controller('AdminController', function($scope, $routeParams, $http){

function activate(){

$http.get('https://coffinomad.azurewebsites.net/api/caffees').
    success(function(data) {
      $scope.cafes = data;
    }).
    error(function(data) {
      // log error
    });

$http.get('https://coffinomad.azurewebsites.net/api/locaties').
    success(function(data) {
      $scope.locations = data;
    }).
    error(function(data) {
      // log error
    });

}

activate();

 $scope.deleteData = function (CaffeeID) {
  $http.delete("https://coffinomad.azurewebsites.net/api/caffees" + CaffeeID).success(function(result) {
      console.log(result);
      $scope.resultDelete = result;
  }).error(function() {
      console.log("error");
  });
}

$scope.insertData = function insertData(){   
var Indata = {"naam": $scope.name, "straat": $scope.straat, "locatieID": $scope.stad};
    $http({
    url: "https://coffinomad.azurewebsites.net/api/caffees",
    method: "POST",
    params: Indata
    })
}

});
