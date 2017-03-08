app.controller('MainController', function($scope, $routeParams, $http){
    console.log( 'test')
    var self = this;
    self.locationList = [];
    self.typeList = [];
    self.cafeList = [];
    self.cafeList.push(
        {
            "Name" : "Geen cafe gevonden"
        }
    );
    var locationString = { 'Stad' : "Een locatie selecteren"};
    self.selectedLocation = locationString;
    var typeString =  { 'Naam' : "Een type selecteren"};
    self.selectedType = typeString;


    $scope.selectedType = "Een type selecteren";


    self.didSelectComponent = function() {
        var request = 'http://coffinomad.azurewebsites.net/api/caffees/' + self.selectedLocation.LocatieID + '/' + self.selectedType.CategoryID;
        console.log(request);
        if (self.selectedLocation != locationString && self.selectedType != typeString)  {
            $http.get(request).then(function(response) {
                console.log( response.data);
                console.log( response.data.count);
                console.log( "did Return");
                if (response.data.count == 0) {
                    self.cafeList.removeAll();
                    self.cafeList.push(
                        {
                            "Name" : "Geen cafe gevonden"
                        }
                    )
                } else {
                    self.cafeList = response.data;
                }
            });

        }
    };

    self.selectType = function(type) {
        console.log(type);
        self.selectedType = type
        self.didSelectComponent();
    };

    self.selectLocation = function(location) {
        console.log(location);
        self.selectedLocation = location;
        self.didSelectComponent();
    };
    $http.get('http://coffinomad.azurewebsites.net/api/Locaties').then(function(response) {
        console.log( response.data);
        self.locationList = response.data;
    });

    $http.get('http://coffinomad.azurewebsites.net/api/Categories').then(function(response) {
        console.log( response.data);
        self.typeList = response.data;
    });

});
