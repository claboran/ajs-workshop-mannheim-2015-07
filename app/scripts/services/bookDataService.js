(function(m) {

    m.service('bookDataService', BookDataService);

    var _$q,
        _dataEnhancer,
        _filter,
        _books = [
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

    function BookDataService($q, $filter, dataEnhancer) {
        _$q = $q;
        _filter = $filter('filter');
        _dataEnhancer = dataEnhancer;
    }

    BookDataService.prototype.getAll = function() {
        return _$q.when({
            data: angular.copy(_books)
        }).then(function(response) {
            response.data.forEach(function(b) {
                _dataEnhancer.enhance(b);
            });

            return response;
        });
    };

    BookDataService.prototype.getByIsbn = function(isbn) {
        var result = _filter(_books, {isbn: isbn});

        var book = null;
        if (result.length > 0) {
            book = result[0];
        }

        return _$q.when({data: book});
    };

    BookDataService.prototype.getByIsbnES5ArrayFilter = function(isbn) {
        var filtered = _books.filter(function(b) {
            return b.isbn === isbn;
        });

        var result = null;
        if (filtered.length > 0) {
            result = filtered[0];
        }

        return _$q.when({data: result});
    };

})(angular.module('bitApp'));