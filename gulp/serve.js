var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

/**
 * Launches the server. If there's a server already running, kill it.
 */
gulp.task('serve-rainstorm', ['babel'], function() {
  if (node) node.kill();
  node = spawn('node', ['dist/rainstorm/server.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('serve-cluster', ['babel'], function() {
  if (node) node.kill();
  node = spawn('node', ['dist/cluster/server.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('serve', function() {
  gulp.start('serve-cluster');
  gulp.start('serve-rainstorm');
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill();
});
