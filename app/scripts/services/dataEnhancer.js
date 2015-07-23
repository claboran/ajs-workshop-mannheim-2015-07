angular.module('bitApp').factory('dataEnhancer', function() {

    function enhance(book) {
        book.enhanced = 'p0wned!';
        return book;
    }

    return {
        enhance: enhance
    };
});