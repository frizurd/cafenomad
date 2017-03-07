
app.controller('AdminController', function($scope, $routeParams, $http){

function activate(){

$http.get('https://coffinomad.azurewebsites.net/api/caffees').
    success(function(data, status, headers, config) {
      $scope.cafes = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });

$http.get('https://coffinomad.azurewebsites.net/api/locaties').
    success(function(data, status, headers, config) {
      $scope.locations = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });

}

activate();

 function deleteData(CaffeeID) {
  $http.delete("https://coffinomad.azurewebsites.net/api/caffees/" + CaffeeID).success(function(result) {
      console.log(result);
      $scope.resultDelete = result;
  }).error(function() {
      console.log("error");
  });
}


$scope.insertData = function insertData(){   
var Indata = {"Name": $scope.Name, "Straat": $scope.Straat, "Lokatie": $scope.Lokatie};
    $http({
    url: "https://coffinomad.azurewebsites.net/api/caffees",
    method: "POST",
    params: Indata
    })
}

});
