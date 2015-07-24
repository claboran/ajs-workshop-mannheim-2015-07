"use strict";

var BookListPage = require('../page-objects/book-list');

describe('Book list view', function() {

    var bookListPage;

    beforeEach(function() {
        bookListPage = new BookListPage();
        bookListPage.open();
    });

    it('should show the proper heading', function() {
        var h1 = bookListPage.getHeading();
        expect(h1.getText()).toBe('Book List');
    });

    it('should have three book entries', function() {
        expect(bookListPage.getBookCount()).toBe(3);

        bookListPage.search('coffeescript');

        expect(bookListPage.getBookCount()).toBe(1);
    });

});