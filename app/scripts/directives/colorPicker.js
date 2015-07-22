// <color-picker></color-picker>
angular.module('bitApp').directive('colorPicker', function() {

    // DDO = Directive Definition Object
    return {
        restrict: 'E', // E = element
        templateUrl: 'templates/directives/colorPicker.html',
        // init-r="r" init-g="g" init-b="b"
        scope: {
            r: '=initR',
            g: '=initG',
            b: '=initB'
        }
    };

});