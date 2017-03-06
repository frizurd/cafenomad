describe('Add a complaint to the list', function() {

     beforeEach(function() {
      browser.get('http://192.168.178.12:8000/');
    });

    it('list should be 3', function() {
	  var complaints = element.all(by.repeater('complaint in complaints'));

		element(by.model('complaint')).sendKeys('asjdjajsdjajkdjajdjkasd');
    var enter = browser.actions().sendKeys(protractor.Key.ENTER);
    enter.perform();

		expect(complaints.count()).toBe(4);
    });
  });
