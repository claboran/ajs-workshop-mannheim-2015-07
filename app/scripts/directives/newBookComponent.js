(function(m) {

    m.directive('newBookComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/newBookComponent.html',
            scope: {},
            controller: NewBookComponentController,
            controllerAs: 'newBookComponentCtrl',
            bindToController: true
        };
    });

    function NewBookComponentController() {}

})(angular.module('bitApp'));