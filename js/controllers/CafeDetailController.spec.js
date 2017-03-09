describe('cafeDetails', function() {

  beforeEach(module('cafeNomad'));

  describe('CafeDetailController', function() {
    var CafeDetailController, $httpBackend, scope;

    beforeEach(inject(function($componentController, _$httpBackend_, $controller, $rootScope, $routeParams) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('http://coffinomad.azurewebsites.net/api/caffees/' + $routeParams.id)
      .respond({Name: 'Top Secret', Straat: 'Mordor'});

      $httpBackend.expectGET('http://coffinomad.azurewebsites.net/api/Locaties/' + $routeParams.city)
      .respond({Caffees: [{CaffeeID: '8', Name: "Club cafe",Straat: "Partystraat", LocatieID: '5', Beoordelingen: null},{CaffeeID: '45',Name: "Frizky", Straat: "Kramerstreet", LocatieID: '5', Beoordelingen: null}], LocatieID: '5', Stad: "Delft"});

        scope = $rootScope.$new();
        CafeDetailController = $controller('CafeDetailController', {
          $scope: scope
        });
      }));

      it('should create cafe details', function() {
        $httpBackend.flush();
        expect(scope.caffees).toEqual({Name: 'Top Secret', Straat: 'Mordor'});
        expect(scope.location).toEqual({Caffees: [{CaffeeID: '8', Name: "Club cafe",Straat: "Partystraat", LocatieID: '5', Beoordelingen: null},{CaffeeID: '45',Name: "Frizky", Straat: "Kramerstreet", LocatieID: '5', Beoordelingen: null}], LocatieID: '5', Stad: "Delft"});
      });
    });
});
