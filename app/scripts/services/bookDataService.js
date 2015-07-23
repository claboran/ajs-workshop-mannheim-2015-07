angular.module('bitApp').factory('bookDataService', function() {

    // private state
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
        return angular.copy(_books);
    }

    // revealing module
    return {
        getAll: _getAll
    };
});