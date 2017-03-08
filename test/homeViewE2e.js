
describe('Select location and type', function() {

    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('should go to detail cafe', function() {
        element(by.buttonText("Een locatie selecteren")).click();
        element(by.buttonText("Leiden")).click();

        element(by.buttonText("Een type selecteren")).click();
        element(by.buttonText("Beste koffie")).click();

        element(by.buttonText("Start up caffee")).click();

        it('should display Start up caffee street', function() {
            expect(element(by.binding('caffees.Straat')).getText()).toBe('Zigzaglaan');
        });

        element(by.binding('location.Stad')).click();

        // browser.pause()

        it('should display 3 cafes', function() {
            expect(element.all(by.repeater('c in curCity.Caffees')).count()).toEqual(2);
        });

    });
});


