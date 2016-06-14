'use strict';
var gulp = require('gulp');

var filesToWatch = ['src/**/*.js', 'gulp/**/*.js', 'gulpfile.js',
  'package.json', '!**/node_modules/**'];

gulp.task('watch-retaliation', ['copy-db'], function() {
  gulp.watch(filesToWatch, ['serve-retaliation']);
});

gulp.task('watch-cluster', ['copy-db'], function() {
  gulp.watch(filesToWatch, ['serve-cluster']);
});

gulp.task('watch', ['copy-db'], function() {
  gulp.watch(filesToWatch, ['serve']);
});
