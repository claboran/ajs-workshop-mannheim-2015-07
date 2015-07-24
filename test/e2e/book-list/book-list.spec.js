"use strict";


describe('Book list view', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/books');
    });

    it('should show the proper heading', function() {
        var h1 = element(by.css('h1'));
        expect(h1.getText()).toBe('Book List');
    });

    it('should have three book entries', function() {
        var bookList = element.all(by.repeater('book in bookListComponentCtrl.books'));
        expect(bookList.count()).toBe(3);

        var searchTextInput = element(by.model('searchText'));
        searchTextInput.sendKeys('coffeescript');

        expect(bookList.count()).toBe(1);
    });

});