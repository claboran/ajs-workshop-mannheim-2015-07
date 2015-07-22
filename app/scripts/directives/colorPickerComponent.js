(function(m) {

    m.directive('colorPickerComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/colorPickerComponent.html',
            scope: {},
            controller: ColorPickerComponentController,
            controllerAs: 'cpcCtrl'
        };
    });

    function ColorPickerComponentController() {
        this.r = 255;
        this.g = 0;
        this.b = 0;
    }

    ColorPickerComponentController.prototype.sayHello = function() {
        console.log('hello!');
    };

})(angular.module('bitApp'));