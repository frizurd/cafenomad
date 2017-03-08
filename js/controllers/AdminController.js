
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

$scope.refresh = function(){
   $http.get('https://coffinomad.azurewebsites.net/api/caffees').
    success(function(data) {
      $scope.cafes = data;
    }).
    error(function(data) {
      // log error
    });
}

 $scope.deleteData = function (CaffeeID) {
  $http.delete("https://coffinomad.azurewebsites.net/api/caffees/" + CaffeeID).success(function(result) {     
      $scope.resultDelete = result;
       $scope.refresh();        
  }).error(function() {     
  });
}

$scope.insertData = function insertData(){   
var Indata = {"naam": $scope.name, "straat": $scope.straat, "locatieID": $scope.stad};
var Indatalocal = {"CaffeeID": $scope.cafes.length + 1,"Name": $scope.name, "Straat": $scope.straat, "LocatieID": $scope.stad};
    $http({
    url: "https://coffinomad.azurewebsites.net/api/caffees",
    method: "POST",
    params: Indata
})
$scope.cafes.push(Indatalocal);
}

$scope.updateData = function updateData(CaffeeID){  
    var Indata = {"caffeeID":$scope.caffeeID, "naam": $scope.name, "straat": $scope.straat, "locatieID": $scope.stad};
    $http({
    url: "https://coffinomad.azurewebsites.net/api/caffees?caffeeID=" + CaffeeID,
    method: "PUT",
    params: Indata
})
 $scope.refresh();
}

});
