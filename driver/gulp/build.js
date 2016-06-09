'use strict';
var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license']
});

gulp.task('scripts', function () {
  return gulp.src(['src/**/*.js', '!**/node_modules/**'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.size());
});

gulp.task('build', ['watch'], function() {
  gulp.start(['scripts']);
});
