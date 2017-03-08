
describe("Array length", function() {

    beforeEach(module("cafeNomad"));

    var MainController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        MainController = $controller('MainController', {
            $scope: scope
        });
    }));
    it('should have 1 for the length of the array', function () {
        expect(MainController.cafeList.length).toEqual(1);
    });
});

describe('locationList', function() {

    beforeEach(module('cafeNomad'));

    describe('MainController', function() {
        var $httpBackend, MainController;

        beforeEach(inject(function($componentController, _$httpBackend_, $controller, $rootScope) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('http://coffinomad.azurewebsites.net/api/Locaties')
                .respond([{Stad: 'Den Haag', Beoordelingen: [{id: '1'}, {id: '2'}] } , {Stad: 'Amsterdam', Beoordelingen: [{id: '1'}, {id: '2'}]  } ]);

            $httpBackend.expectGET('http://coffinomad.azurewebsites.net/api/Categories')
                .respond([{Stad: 'Den Haag'}, {Stad: 'Amsterdam'}]);

            var scope = $rootScope.$new();
            MainController = $controller('MainController', {
                $scope: scope
            });
        }));

        it('should create `location` list with 2 location fetched with `$http`', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(MainController.cafeList).toEqual([ {
                "Name" : "Geen cafe gevonden"
            }]);

            expect(MainController.locationList).toEqual([]);

            $httpBackend.flush();
            expect(MainController.locationList).toEqual( [{Stad: 'Den Haag', Beoordelingen: [{id: '1'}, {id: '2'}] } , {Stad: 'Amsterdam', Beoordelingen: [{id: '1'}, {id: '2'}]  } ]);
        });

    });

});