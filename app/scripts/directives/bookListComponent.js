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

    var _bookDataService;

    function _deleteLocally(books, book) {
        books.splice(books.indexOf(book), 1);
    }

    function BookListComponentController(bookDataService) {
        var self = this;
        _bookDataService = bookDataService;
        bookDataService.getAll().then(function(response) {
            console.log('books', response.data);
            self.books = response.data;
        });
    }

    BookListComponentController.prototype.deleteBook = function(book) {
        this.bookToDelete = book;
        this.dialogVisible = true;
        this.dialogTitle = 'Wirklich löschen?';
    };

    BookListComponentController.prototype.performDeletion = function() {
        var self = this;

        _bookDataService.deleteByIsbn(this.bookToDelete.isbn).then(function(response) {
            if (response.data) {
                _deleteLocally(self.books, self.bookToDelete);
            }
        }).finally(this.cancelDeletion.bind(this));
    };

    BookListComponentController.prototype.cancelDeletion = function() {
        delete this.bookToDelete;
        delete this.dialogVisible;
        delete this.dialogTitle;
    };

})(angular.module('bitApp'));