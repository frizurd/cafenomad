
app.controller('AdminController', function($scope, $routeParams, $http, $location){

    function activate(){
        $http.get('https://coffinomad.azurewebsites.net/api/caffees')
            .then(function(response){
                $scope.cafes = response.data;
                $scope.responseError = response.error;
            });

        $http.get('https://coffinomad.azurewebsites.net/api/locaties')
            .then(function(response){
                $scope.locations = response.data;
            });

    }

    activate();

    $scope.openForm = function (cafe){
        $scope.cafe = cafe;
    };

    $scope.refresh = function(){
        $http.get('https://coffinomad.azurewebsites.net/api/caffees')
            .then(function(response){
                console.log("didFetch");
                console.log(response);
                if (response.data.length > 0 ) {
                    $scope.cafes = response.data
                }
            });
    };

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
        }).then(function (response) {
            $scope.refresh();
        });
    }

    $scope.isActive = function(route) {
        return route === $location.path();
    };

});
