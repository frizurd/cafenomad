describe('Admin add cafe', function() {

it("should've added a new cafe", function() {
      browser.get('http://localhost:8000/#/admin');

        var cafesBefore = element.all(by.css('.caphes'));
        element(by.className('btn-success')).click();
        element(by.name('name')).sendKeys('Smexy Cafe');
        var tab = browser.actions().sendKeys(protractor.Key.TAB);
        element(by.name('street')).sendKeys('2 Smexy 4 U');
        var tab2 = browser.actions().sendKeys(protractor.Key.TAB);
        element(by.cssContainingText('option', 'Leiden')).click();
        browser.wait(function() {
            console.log('1 - wait pls');

        }, 1000);
        element(by.id('capheAdd')).click();

        browser.wait(function() {
            console.log('1 - wait more pls');

        }, 5000);
        var cafesAfter = element.all(by.css('.caphes'));
        expect(cafesAfter.count()).toBeGreaterThan(cafesBefore);

    });
  });
