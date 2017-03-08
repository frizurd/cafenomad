describe('Add a complaint to the list', function() {

     beforeEach(function() {
      browser.get('http://localhost:8000/#/cities');
    });

    it('list should be 3', function() {
	  var cafes = element.all(by.repeater('cafe in cafes'));

		element(by.model('complaint')).sendKeys('asjdjajsdjajkdjajdjkasd');
    var enter = browser.actions().sendKeys(protractor.Key.ENTER);
    enter.perform();

		expect(complaints.count()).toBe(4);

    });
  });
