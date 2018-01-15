var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
    },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
    },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    }
];

var bookController = function (bookService, nav) {
    var middleware = function (req, res, next) {
        //if (!req.user) {
        //res.redirect('/');
        //}
        next();
    };
    var getIndex = function (req, res) {

        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    };

    var getById = function (req, res) {
        var id = new ObjectId(req.params.id);
        var url =
            'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');

            collection.findOne({
                    _id: id
                },
                function (err, results) {
                    if (results.bookId) {
                        bookService
                            .getBookById(results.bookId,
                                function (err, book) {
                                    results.book = book;
                                    res.render('bookView', {
                                        title: 'Books',
                                        nav: nav,
                                        book: results
                                    });
                                });
                    } else {
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });
                    }
                }

            );

        });

    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;