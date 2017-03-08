describe('Admin', function() {
    beforeEach(module('cafeNomad'));
    describe('AdminController', function() {
        var scope, $location, AdminController;

        beforeEach(inject(function($rootScope, $controller, _$location_) {
            $location = _$location_;
            scope = $rootScope.$new();
            AdminController = $controller('AdminController', {
                $scope: scope
            });
        }));

        it('Checks if the path is active', function() {
            $location.path('/admin');
            expect($location.path()).toBe('/admin');
            expect(scope.isActive('/admin')).toBe(true);
            expect(scope.isActive('/cities')).toBe(false);
        });
    });
});
