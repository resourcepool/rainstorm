'use strict';
var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('retaliation', function() {
  gulp.start('watch-retaliation');
});

gulp.task('cluster', function() {
  gulp.start('watch-cluster');
});

gulp.task('default', function() {
  gulp.start('watch');
});
