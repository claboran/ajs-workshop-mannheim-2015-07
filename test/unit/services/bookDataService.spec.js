"use strict";

describe('Service bookDataService', function() {

    var $rootScope,
        bookDataService,
        isValidBook,
        getAllBooksSync,
        getBookByIsbnSync;

    beforeEach(module('bitApp'));
    beforeEach(module('testHelper'));

    beforeEach(inject(function(_$rootScope_, _bookDataService_, bookDataServiceHelper) {
        $rootScope = _$rootScope_;
        bookDataService = _bookDataService_;
        isValidBook = bookDataServiceHelper.isValidBook;
        getAllBooksSync = bookDataServiceHelper.getAllBooksSync;
        getBookByIsbnSync = bookDataServiceHelper.getBookByIsbnSync;
    }));

    it('should be defined', function() {
        expect(bookDataService).toBeDefined();
    });

    describe('getAll()', function() {
        it('should be a defined function', function() {
            expect(angular.isFunction(bookDataService.getAll)).toBe(true);
        });

        it('should return an array of book objects', function() {
            var actual = getAllBooksSync($rootScope, bookDataService);

            expect(angular.isArray(actual)).toBe(true);

            if (actual.length > 0) {
                actual.forEach(function(b) {
                    expect(isValidBook(b)).toBe(true);
                });
            }
        });

        it('should return a copy of the internal array', function() {
            var array1 = getAllBooksSync($rootScope, bookDataService),
                array2 = getAllBooksSync($rootScope, bookDataService);

            expect(angular.isArray(array1)).toBe(true);
            expect(angular.isArray(array2)).toBe(true);
            expect(array1).not.toBe(array2);
            expect(array1).toEqual(array2);
        });
    });

    describe('getByIsbn()', function() {
        it('should be a defined function', function() {
            expect(angular.isFunction(bookDataService.getByIsbn)).toBe(true);
        });

        it('should return a valid book object if an available isbn is passed', function() {
            var isbn = 'bit-123-123';
            var book = getBookByIsbnSync($rootScope, bookDataService, isbn);
            expect(isValidBook(book)).toBe(true);
            expect(book.isbn).toBe(isbn);
        });

        it('should return null if a not available isbn is passed', function() {
            var isbn = 'test';
            var book = getBookByIsbnSync($rootScope, bookDataService, isbn);
            expect(book).toBeNull();
        });
    });

});