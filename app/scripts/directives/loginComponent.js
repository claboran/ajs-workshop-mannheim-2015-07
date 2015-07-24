(function(m) {

    m.directive('loginComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/loginComponent.html',
            scope: {},
            controller: LoginComponentController,
            controllerAs: 'loginComponentCtrl',
            bindToController: true
        };
    });

    var _$location, _authService;

    function LoginComponentController($location, authService) {
        _$location = $location;
        _authService = authService;
    }

    LoginComponentController.prototype.login = function(credentials) {
        _authService.login(credentials).then(function(response) {
            console.log('auth successful', response.data.token);
            localStorage.setItem('id_token', response.data.token);
            $location.path('/books');
        }).catch(function(error) {
            console.log('error during authentication', error);
        });
    };



})(angular.module('bitApp'));