describe('Get 2 Cafes', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/#/city/2');
    });


    it('should display 2 elements', function() {
      expect(element(by.binding('id')).getText()).toBe('0');
    });

  });
