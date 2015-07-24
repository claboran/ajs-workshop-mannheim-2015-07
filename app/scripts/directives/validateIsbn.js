angular.module('bitApp').directive('validateIsbn', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ngModelCtrl) {
            console.log('validateIsbn');

            ngModelCtrl.$parsers.push(function(viewValue) {
                console.log('value in view changed', viewValue);
                return viewValue;
            });


            ngModelCtrl.$validators.isbn = function (modelValue, viewValue) {
                if (ngModelCtrl.$isEmpty(modelValue)) {
                    // consider empty models to be invalid
                    return false;
                } else {
                    if (angular.isString(viewValue) && viewValue.length > 3) {
                        var sub = viewValue.substr(0, 3);
                        if (sub === 'bit') {
                            return true
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }

                }
            };
        }
    };
});