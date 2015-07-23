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

    function BookDetailsComponentController() {}

})(angular.module('bitApp'));