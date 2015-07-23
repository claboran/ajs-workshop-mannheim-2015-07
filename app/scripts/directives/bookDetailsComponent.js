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

    function BookDetailsComponentController() {
        this.book = {
            title: 'Angular 2 for Beginners',
            author: 'foo',
            isbn: 'bit-123-123',
            numPages: 300
        };
    }

})(angular.module('bitApp'));