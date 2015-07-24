angular.module('bitApp').factory('authService', function($http) {

    var baseUrl = 'http://localhost:4321';

    function login(credentials) {
        return $http.post(baseUrl + '/login', credentials);
    }

    function ping() {
        return $http.get(baseUrl + '/ping');
    }

    return {
        login: login,
        ping: ping
    };
});