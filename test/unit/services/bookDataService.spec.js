"use strict";

describe('Service bookDataService', function() {

    var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

    var $httpBackend,
        bookDataService;

    beforeEach(module('bitApp'));


    beforeEach(inject(function(_$httpBackend_, _bookDataService_) {
        $httpBackend = _$httpBackend_;
        bookDataService = _bookDataService_;
    }));

    beforeEach(function() {
        $httpBackend.when('GET', baseUrl + '/books').respond([]);
        $httpBackend.when('GET', baseUrl + '/books/bit-123-123').respond({});
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function() {
        expect(bookDataService).toBeDefined();
    });

    describe('getAll()', function() {
        it('should be a defined function', function() {
            expect(angular.isFunction(bookDataService.getAll)).toBe(true);
        });

        it('should perform the corresponding http request', function() {
            $httpBackend.expectGET(baseUrl + '/books');
            bookDataService.getAll();
            $httpBackend.flush();
        });

    });

    describe('getByIsbn()', function() {
        it('should be a defined function', function() {
            expect(angular.isFunction(bookDataService.getByIsbn)).toBe(true);
        });

        it('should perform the corresponding http request', function() {
            var isbn = 'bit-123-123';
            $httpBackend.expectGET(baseUrl + '/books/' + isbn);
            bookDataService.getByIsbn(isbn);
            $httpBackend.flush();
        });
    });

});