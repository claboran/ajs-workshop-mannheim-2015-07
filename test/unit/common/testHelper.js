(function(testHelper) {

    testHelper.factory('bookDataServiceHelper', function() {

        // private impl.
        function _isValidBook(b) {
            return angular.isDefined(b)
                && angular.isString(b.title)
                && angular.isString(b.author)
                && angular.isString(b.isbn)
                && angular.isNumber(b.numPages);
        }

        function _getAllBooksSync($rootScope, bookDataService) {
            var books;

            bookDataService.getAll().then(function(response) {
                books = response.data;
            });
            $rootScope.$apply();

            return books;
        }

        // revealing module
        return {
            isValidBook: _isValidBook,
            getAllBooksSync: _getAllBooksSync
        }
    });

})(angular.module('testHelper', []));