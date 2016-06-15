var gulp = require('gulp');

/**
 * This loads all plugins found in package.json with the given pattern
 * All found plugins are available into the $
 */
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});

/**
 * Deletes the dist folder
 */
gulp.task('clean', function () {
  return $.del(['dist']);
});

/**
 * Lints the js code.
 */
gulp.task('scripts', function () {
  return gulp.src(['src/**/*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

/**
 * Compiles /src into babel and outputs es5 into /dist
 */
gulp.task('babel', ['scripts', 'clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe($.babel({
      presets: ['es2015']
    }))
    .on('error', $.util.log)
    .pipe(gulp.dest('dist'));
});
