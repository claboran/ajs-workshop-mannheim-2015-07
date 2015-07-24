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

    var _$location, _bookDataService;

    function NewBookComponentController($location, bookDataService) {
        _$location = $location;
        _bookDataService = bookDataService;
    }

    NewBookComponentController.prototype.saveBook = function(book) {
        _bookDataService.storeBook(book).then(function(response) {
            if (response.data) {
                _$location.path('/books');
            }
        });
    };

})(angular.module('bitApp'));