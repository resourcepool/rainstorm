var gulp = require('gulp');

/**
 * Load all the tasks inside the gulp folder
 */
require('require-dir')('./gulp');

/**
 * Here are the main tasks that should be used for dev/prod
 */

/**
 * Watches for changes and serves rainstorm API
 */
gulp.task('rainstorm', function() {
  gulp.start('watch-rainstorm');
});

/**
 * Watches for changes and serves cluster API
 */
gulp.task('cluster', function() {
  gulp.start('watch-cluster');
});

/**
 * Watches for changes and serves rainstorm & cluster API
 */
gulp.task('default', function() {
  gulp.start('watch');
});
