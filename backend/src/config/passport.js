var passport = require('passport');
var localStrategy = require('./strategies/local.strategy');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.addUser = function (user) {
        localStrategy.users.push({username: user.username, password: user.password});
    };

    localStrategy.func();

};