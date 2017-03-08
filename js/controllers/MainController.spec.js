
describe("No shop found", function() {

    beforeEach(module("cafeNomad"));

    var MainController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        MainController = $controller('MainController', {
            $scope: scope
        });
    }));
    it('length array', function () {
        expect(MainController.cafeList.length).toEqual(1);
    });

});