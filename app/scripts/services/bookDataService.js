(function(m) {


    m.service('bookDataService', BookDataService);

    var baseUrl = 'http://ajs-workshop.herokuapp.com/api';
    var _$http;

    function BookDataService($http) {
        _$http = $http;
    }

    BookDataService.prototype.getAll = function() {
        return _$http.get(baseUrl + '/books');
    };

    BookDataService.prototype.getByIsbn = function(isbn) {
        return _$http.get(baseUrl + '/books/' + isbn);
    };

    BookDataService.prototype.deleteByIsbn = function(isbn) {
        return _$http.delete(baseUrl + '/books/' + isbn);
    };

    BookDataService.prototype.storeBook = function(book) {
        return _$http.post(baseUrl + '/books', book);
    };





    m.service('staticBookDataService', StaticBookDataService);

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

    function StaticBookDataService($q, $filter, dataEnhancer) {
        _$q = $q;
        _filter = $filter('filter');
        _dataEnhancer = dataEnhancer;
    }

    StaticBookDataService.prototype.getAll = function() {
        return _$q.when({
            data: angular.copy(_books)
        }).then(function(response) {
            response.data.forEach(function(b) {
                _dataEnhancer.enhance(b);
            });

            return response;
        });
    };

    StaticBookDataService.prototype.getByIsbn = function(isbn) {
        var result = _filter(_books, {isbn: isbn});

        var book = null;
        if (result.length > 0) {
            book = result[0];
        }

        return _$q.when({data: book});
    };

    StaticBookDataService.prototype.getByIsbnES5ArrayFilter = function(isbn) {
        var filtered = _books.filter(function(b) {
            return b.isbn === isbn;
        });

        var result = null;
        if (filtered.length > 0) {
            result = filtered[0];
        }

        return _$q.when({data: result});
    };

    StaticBookDataService.prototype.deleteByIsbn = function(isbn) {
        var indexToDelete = -1;
        var i = _books.length;
        while (i--) {
            if (isbn === _books[i].isbn) {
                indexToDelete = i;
                break;
            }
        }

        if (indexToDelete != -1) {
            _books.splice(indexToDelete, 1);
            return _$q.when({data: true});
        } else {
            return _$q.when({data: false});
        }
    };

    StaticBookDataService.prototype.storeBook = function(book) {
        _books.push(book);
        return _$q.when({data: true});
    }

})(angular.module('bitApp'));