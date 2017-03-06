describe('MainController', function() {
  beforeEach(module('cafeNomad'));

  var $controller;

  beforeEach(inject(function(_$httpBackend_, $rootScope,_$controller_){
    $controller = _$controller_;

	$httpBackend = _$httpBackend_;
    $httpBackend.expectGET('json/words.json').
    respond([{name: 'Sukkel'}, {name: 'Dombo'}]);

    scope = $rootScope.$new();
    ctrl = $controller('MainController', {$scope: scope});
  }));

  describe('$scope lastId test', function() {
    it('adds 1 to the the last id', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });

	  $scope.add();

      expect($scope.lastId).toEqual(3);

    });
  });

   describe('$scope lastId test', function() {
	it('should create "phones" model with 2 phones fetched from xhr', function() {
	  expect(scope.woorden).toBeUndefined();
	  $httpBackend.flush();

	  expect(scope.woorden).toEqual([{name: 'Sukkel'},
								   {name: 'Dombo'}]);
	});
   });

});
