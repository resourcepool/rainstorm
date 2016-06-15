'use strict';
var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('rainstorm', function() {
  gulp.start('watch-rainstorm');
});

gulp.task('cluster', function() {
  gulp.start('watch-cluster');
});

gulp.task('default', function() {
  gulp.start('watch');
});
