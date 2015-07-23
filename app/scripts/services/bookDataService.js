angular.module('bitApp').factory('bookDataService', function($q, $filter) {

    // private state

    var filter = $filter('filter');

    var _books = [
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

    // private impl.
    function _getAll() {
        return $q.when({
            data: angular.copy(_books)
        });
    }

    function _getByIsbnES5ArrayFilter(isbn) {
        var filtered = _books.filter(function(b) {
            return b.isbn === isbn;
        });

        var result = null;
        if (filtered.length > 0) {
            result = filtered[0];
        }

        return $q.when({data: result});
    }

    function _getByIsbn(isbn) {
        var result = filter(_books, {isbn: isbn});

        var book = null;
        if (result.length > 0) {
            book = result[0];
        }

        return $q.when({data: book});
    }

    // revealing module
    return {
        getAll: _getAll,
        getByIsbn: _getByIsbn
    };
});