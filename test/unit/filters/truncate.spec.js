"use strict";


describe('Filter truncate', function() {

    var truncate;

    beforeEach(module('bitApp'));

    beforeEach(inject(function($filter) {
        truncate = $filter('truncate');
    }));

    it('should be a defined function', function() {
        expect(angular.isFunction(truncate)).toBe(true);
    });

    it('should properly truncate the passed input', function() {
        var input = '123456789';
        var output = truncate(input, 3, '...');
        expect(output).toBe('123...');
    });

});