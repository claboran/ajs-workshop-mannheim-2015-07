(function(m) {

    m.directive('colorPickerComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/colorPickerComponent.html',
            scope: {
                r: '@initR',
                g: '@initG',
                b: '@initB'
            },
            controller: ColorPickerComponentController,
            controllerAs: 'cpcCtrl',
            bindToController: true
        };
    });

    function ColorPickerComponentController() {}

    ColorPickerComponentController.prototype.sayHello = function() {
        console.log('hello!');
    };

})(angular.module('bitApp'));