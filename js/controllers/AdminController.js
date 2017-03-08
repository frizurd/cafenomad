
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
$scope.openForm = function (cafe){

    $scope.cafe = cafe;

}

 $scope.deleteData = function (CaffeeID) {
  $http.delete("https://coffinomad.azurewebsites.net/api/caffees/" + CaffeeID).success(function(result) {
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

$scope.updateData = function updateData(CaffeeID){  
    var Indata = {"caffeeID":$scope.caffeeID, "naam": $scope.name, "straat": $scope.straat, "locatieID": $scope.stad};
    $http({
    url: "https://coffinomad.azurewebsites.net/api/caffees?caffeeID=" + CaffeeID,
    method: "PUT",
    params: Indata
    })
}

});
