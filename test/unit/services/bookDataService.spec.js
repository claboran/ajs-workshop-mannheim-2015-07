"use strict";

describe('Service bookDataService', function() {

    var bookDataService;

    beforeEach(module('bitApp'));

    beforeEach(inject(function(_bookDataService_) {
        bookDataService = _bookDataService_;
    }));

    it('should be defined', function() {
        expect(bookDataService).toBeDefined();
    });

    describe('getAll()', function() {
        it('should be a defined function', function() {
            expect(angular.isFunction(bookDataService.getAll)).toBe(true);
        });

        it('should return an array of book objects', function() {
            var actual = bookDataService.getAll();
            expect(angular.isArray(actual)).toBe(true);

            actual.forEach(function(b) {
                expect(isValidBook(b)).toBe(true);
            });
        });
    });

    function isValidBook(b) {
        return angular.isDefined(b)
                && angular.isString(b.title)
                && angular.isString(b.author)
                && angular.isString(b.isbn)
                && angular.isNumber(b.numPages);
    }

});