'use strict';
var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch(['**/*.js', 'gulpfile.js', 'package.json', '!**/node_modules/**'], ['scripts', 'serve']);
});
