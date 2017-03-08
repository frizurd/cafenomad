app.controller('MainController', function($scope, $routeParams, $http){
    var self = this;
    self.locationList = [];
    self.typeList = [];
    self.cafeList = [];
    var geenCafe = {
        "Name" : "Geen cafe gevonden"
    }
    self.cafeList.push(
        geenCafe
    );
    var locationString = { 'Stad' : "Een locatie selecteren"};
    self.selectedLocation = locationString;
    var typeString =  { 'Naam' : "Een type selecteren"};
    self.selectedType = typeString;


    $scope.selectedType = "Een type selecteren";


    self.didSelectComponent = function() {
        var request = 'http://coffinomad.azurewebsites.net/api/caffees/' + self.selectedLocation.LocatieID + '/' + self.selectedType.CategoryID;
        if (self.selectedLocation != locationString && self.selectedType != typeString)  {
            while (self.cafeList.length) { self.cafeList.pop(); }
            $http.get(request).then(function(response) {
                if (response.data.length == 0) {
                    self.cafeList.push(geenCafe)
                } else {
                    for (i = 0; i < response.data.length; i++) {
                        console.log(response.data[i]);
                        if (response.data[i].Beoordelingen != undefined) {
                            if (response.data[i].Beoordelingen.length > 0) {
                                self.cafeList.push(response.data[i])
                            }
                        }
                    }
                    if (self.cafeList.length == 0) {
                        self.cafeList.push(geenCafe)
                    }
                }
            });

        }
    };

    self.selectType = function(type) {
        self.selectedType = type
        self.didSelectComponent();
    };

    self.selectLocation = function(location) {
        self.selectedLocation = location;
        self.didSelectComponent();
    };
    $http.get('http://coffinomad.azurewebsites.net/api/Locaties').then(function(response) {
        self.locationList = response.data;
    });

    $http.get('http://coffinomad.azurewebsites.net/api/Categories').then(function(response) {
        self.typeList = response.data;
    });

});
