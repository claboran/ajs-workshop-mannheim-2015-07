(function(testMocks) {

    testMocks.provider('mockDataEnhancer', function() {

        var mockDataEnhancer = {
            enhance: function(book) {
                book.enhanced = 'TEST';

                return book;
            }
        };

        this.$get = function() {
            return mockDataEnhancer;
        }
    });

})(angular.module('testMocks', []));