"use strict";

describe('Service bookDataService', function() {

    var $rootScope,
        bookDataService;

    beforeEach(module('bitApp'));

    beforeEach(inject(function(_$rootScope_, _bookDataService_) {
        $rootScope = _$rootScope_;
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
            var actual;

            bookDataService.getAll().then(function(response) {
                actual = response.data;
            });
            $rootScope.$apply();

            expect(angular.isArray(actual)).toBe(true);

            if (actual.length > 0) {
                actual.forEach(function(b) {
                    expect(isValidBook(b)).toBe(true);
                });
            }
        });

        it('should return a copy of the internal array', function() {
            var array1 = bookDataService.getAll(),
                array2 = bookDataService.getAll();

            expect(array1).not.toBe(array2);
            expect(array1).toEqual(array2);
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