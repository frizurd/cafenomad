describe('Get complaint 0', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/#/complaints/0');
    });


    it('should display page id 0', function() {
      expect(element(by.binding('id')).getText()).toBe('0');
    });
  });
