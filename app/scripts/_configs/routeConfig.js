angular.module('bitApp').config(function($routeProvider) {

    $routeProvider.when('/', {
        template: '<color-picker-component init-r="30" init-g="30" init-b="30"></color-picker-component>'
    }).when('/books', {
        template: '<book-list-component></book-list-component>'
    }).when('/books/:isbn', {
        template: '<book-details-component></book-details-component>'
    }).when('/new-book', {
        template: '<new-book-component></new-book-component>'
    }).otherwise({
        redirectTo: '/'
    });

});