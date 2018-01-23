var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var users = [
    {
        username: 'test',
        password: 'test'
    }
];
module.exports.func = function () {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        }, function (username, password, done) {
            var loggedIn = false;
            for (var i in users) {
                var user = users[i];
                if (user.username === username && user.password === password) {
                    console.log('logged in');
                    done(null, user);
                    loggedIn = true;
                }
            }
            if (!loggedIn) {
                console.log('failed to log in');
                done(null, false, {message: 'Bad password'});
            }
        }
        /*function (username, password, done) {
            var url =
                    'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.findOne({
                        username: username
                    },
                    function (err, results) {
                        if (results.password === password) {
                            var user = results;
                            done(null, user);
                        } else {
                            done(null, false, {message: 'Bad password'});
                        }

                    }
                );
            });
        }*/
        ));
};

module.exports.users = users;