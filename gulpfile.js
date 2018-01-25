var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

var jsFiles = ['*.js', 'backend/src/**/*.js'];

gulp.task('mocha', function () {
    return gulp.src(['./backend/test/*.js'])
        .pipe(mocha({reporter: 'list'}));
});

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./frontend/public/css/*.css',
        './frontend/public/js/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/frontend/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './frontend/public/lib',
        ignorePath: '../../../frontend/public'
    };

    return gulp.src('./backend/src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./backend/src/views'));

});

gulp.task('serve', ['mocha', 'style', 'inject', 'watch'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting....');
        });
});

gulp.task('watch', function () {
    gulp.watch(jsFiles,['mocha']);
});
