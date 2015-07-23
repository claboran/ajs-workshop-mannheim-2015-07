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

    function BookListComponentController() {}

})(angular.module('bitApp'));