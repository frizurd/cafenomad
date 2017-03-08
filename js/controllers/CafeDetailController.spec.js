describe('cafeDetails', function() {

  beforeEach(module('cafeNomad'));

  describe('CafeDetailController', function() {
    var CafeDetailController, $httpBackend, scope;

    beforeEach(inject(function($componentController, _$httpBackend_, $controller, $rootScope, $routeParams) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('http://coffinomad.azurewebsites.net/api/caffees/' + $routeParams.id).respond({Name: 'Top Secret', Straat: 'Mordor'});

        scope = $rootScope.$new();
        CafeDetailController = $controller('CafeDetailController', {
          $scope: scope
        });
      }));

      it('should create cafe details', function() {
        $httpBackend.flush();
        expect(scope.caffees).toEqual({Name: 'Top Secret', Straat: 'Mordor'});
      });
    });
});
