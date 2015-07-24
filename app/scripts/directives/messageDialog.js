(function(m) {

    m.directive('messageDialog', function() {

        return {
            restrict: 'E',
            templateUrl: 'templates/directives/messageDialog.html',
            scope: {
                visible: '=',
                title: '=',
                onYes: '&',
                onNo: '&'
            },
            transclude: true,
            controller: MessageDialogController,
            controllerAs: 'messageDialogCtrl',
            bindToController: true
        };

    });

    function MessageDialogController() {}

})(angular.module('bitApp'));