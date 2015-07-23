(function(testMocks) {

    testMocks.provider('mockDataEnhancer', function() {

        function provideMockDataEnhancer() {
            return {
                enhance: function(book) {
                    book.enhanced = 'TEST';

                    return book;
                }
            };
        }

        this.get = function() {
            return provideMockDataEnhancer;
        };

        this.$get = function() {
            return provideMockDataEnhancer();
        }
    });

})(angular.module('testMocks', []));