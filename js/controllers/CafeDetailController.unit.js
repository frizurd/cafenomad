describe('CafeDetailController', function() {
  beforeEach(module('cafeNomad'));

  var $httpBackend, ctrl;

  beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('caffees/2').respond({name: 'cafe 2'});

    $routeParams.id = '2';

    ctrl = $componentController('CafeDetailController');
  }));

  it('should fetch the cafe details', function() {
    expect(ctrl.cafe).toBeUndefined();

    $httpBackend.flush();
    expect(ctrl.cafe).toEqual({name: 'cafe 2'});
  });

});
