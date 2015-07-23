(function(m) {

    m.directive('bookDetailsComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/bookDetailsComponent.html',
            scope: {},
            controller: BookDetailsComponentController,
            controllerAs: 'bookDetailsComponentCtrl',
            bindToController: true
        };
    });

    function BookDetailsComponentController(bookDataService, $routeParams) {
        var self = this;

        bookDataService.getByIsbn($routeParams.isbn).then(function(response) {
            self.book = response.data;
        });
    }

})(angular.module('bitApp'));