zen.blog = function(shelfs) {
    this.booklist = [];
    this.bookmap = {};
    this.bookshelf = shelfs || [];
    var len = this.bookshelf.length;
    for (var i = 0; i < len; i++) {
        var shelf = this.bookshelf[i];
        this.add(shelf);
    }
    return this;
}
zen.blog.prototype = {
    query: function(hash) {
        if (hash && this.bookmap[hash]) {
            return this.bookmap[hash];
        }
        return false;
    },
    add: function(shelf) {
        var self = this;
        var catalog = shelf.catalog;
        var books = shelf.books;
        var len = books.length;
        for (var i = 0; i < len; i++) {
            var book = books[i];
            book.hash = "BOOK-ID-" + zen.hash(book.file);
            book.catalog = catalog.type;
            self.booklist.push(book);
            self.bookmap[book.hash] = book;
            catalog.num++;
        }
    }
}
