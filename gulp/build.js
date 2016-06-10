'use strict';
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license', 'del']
});

gulp.task('clean', function () {
  return $.del(['dist']);
});

gulp.task('scripts', function () {
  return gulp.src(['src/**/*.js', '!src/client/**/*.js', '!**/node_modules/**'])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('babel', ['scripts', 'clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe($.babel({
      presets: ['es2015']
    }))
    .on('error', $.util.log)
    .pipe(gulp.dest('dist'));
});
