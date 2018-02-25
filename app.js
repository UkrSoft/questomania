var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongodb = require('mongodb').MongoClient;

var app = express();

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];
var bookRouter = require('./backend/src/routes/bookRoutes')(nav);
var adminRouter = require('./backend/src/routes/adminRoutes')(nav);
var authRouter = require('./backend/src/routes/authRoutes')(nav);

app.use(express.static('./frontend/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'library', resave: true, saveUninitialized: true}));
require('./backend/src/config/passport')(app);

app.set('views', './backend/src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.post('/saveQuestion', function (req, res) {
    console.error(req.body);
    var insertedId = null;
    //res.send(req.body);
    var url =
        'mongodb://localhost:27017/web_forms';

    mongodb.connect(url, function (err, db) {
        if (err) {
            console.log(err);
            throw err;
        }
        var collection = db.collection('questions');
        var obj = req.body;
        collection.insert(obj,
            function (err, results) {
                //res.send(results.insertedIds[0].id);
                insertedId = obj._id;
                console.log(insertedId);
                db.close();

                mongodb.connect(url, function (err, db) {
                    if (err) {
                        throw err;
                    }

                    db.collection('questions').findOne({
                            _id: insertedId
                        },
                        function (err, result) {
                            if (err) {
                                throw err;
                            }
                            //res.send(req.body);
                            res.send(result);
                            console.log('SEnd result', result);
                            db.close();
                        });
                });

            });
    });

});

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });

});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});