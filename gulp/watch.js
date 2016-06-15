var gulp = require('gulp');

var filesToWatch = ['src/**/*.js', 'gulp/**/*.js', 'gulpfile.js',
  'package.json', '!**/node_modules/**'];

gulp.task('watch-retaliation', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve-retaliation']);
});

gulp.task('watch-cluster', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve-cluster']);
});

gulp.task('watch', ['babel'], function() {
  gulp.watch(filesToWatch, ['serve']);
});
