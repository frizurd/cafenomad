
  describe('View: Locatie detail', function() {

    beforeEach(function() {
      browser.get('#/city/3');
    });

    it('should display Amsterdam page', function() {
      expect(element(by.binding('curCity.Stad')).getText()).toBe('COFFEESHOPS IN AMSTERDAM');
    });

    it('should display 3 cafes', function() {
      expect(element.all(by.repeater('c in curCity.Caffees')).count()).toEqual(3);
    });







    // it('should display the first phone image as the main phone image', function() {
    //   var mainImage = element(by.css('img.phone.selected'));
    //
    //   expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    // });
    //
    // it('should swap the main image when clicking on a thumbnail image', function() {
    //   var mainImage = element(by.css('img.phone.selected'));
    //   var thumbnails = element.all(by.css('.phone-thumbs img'));
    //
    //   thumbnails.get(2).click();
    //   expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);
    //
    //   thumbnails.get(0).click();
    //   expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    // });

  });
