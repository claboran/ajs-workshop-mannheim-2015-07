(function(m) {

    m.directive('bookListComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/bookListComponent.html',
            scope: {},
            controller: BookListComponentController,
            controllerAs: 'bookListComponentCtrl',
            bindToController: true
        };
    });

    function BookListComponentController(bookDataService) {
        var self = this;
        bookDataService.getAll().then(function(response) {
            console.log('books', response.data);
            self.books = response.data;
        });
    }

})(angular.module('bitApp'));