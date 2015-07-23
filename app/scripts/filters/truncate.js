(function(m) {
    "use strict";

    m.filter('truncate', function() {
        return function(input, charCount, suffix) {

            if (input.length > charCount) {
                return input.substr(0, charCount) + suffix;
            }

            return input;
        };
    });

})(angular.module('bitApp'));