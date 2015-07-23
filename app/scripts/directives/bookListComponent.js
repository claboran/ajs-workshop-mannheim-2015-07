(function(m) {

    m.directive('bookListComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/bookListComponent.html',
            scope: {},
            controller: BookListComponentController,
            controllerAs: 'bookListComponentCtrl',
            bindToController: true
        };
    });

    function BookListComponentController() {
        this.books = [
            {
                title: 'Angular 2 for Beginners',
                author: 'foo',
                isbn: 'bit-123-123',
                numPages: 300
            },
            {
                title: 'EmberJS for Beginners',
                author: 'bar',
                isbn: 'bit-111-111',
                numPages: 250
            },
            {
                title: 'KnockoutJS for Beginners',
                author: 'baz',
                isbn: 'bit-222-222',
                numPages: 220
            }
        ];
    }

})(angular.module('bitApp'));