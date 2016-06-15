var gulp = require('gulp');

/**
 * Watcher tasks :
 * They all need a build before running
 * When the build is done, it serves the appropriate API
 */

var filesToWatch = ['src/**/*.js', 'gulp/**/*.js', 'gulpfile.js',
  'package.json'];

gulp.task('watch-rainstorm', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve-rainstorm']);
});

gulp.task('watch-cluster', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve-cluster']);
});

gulp.task('watch', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve']);
});
