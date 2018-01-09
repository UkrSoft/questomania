var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['./backend/test/*.js'])
        .pipe(mocha({reporter: 'list'}));
});