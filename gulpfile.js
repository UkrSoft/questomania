var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['./wp-content/plugins/quests-city/backend_nodejs/test/*.js'])
        .pipe(mocha({reporter: 'list'}));
});