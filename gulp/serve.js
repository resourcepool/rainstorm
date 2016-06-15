var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

/**
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('serve-retaliation', ['babel'], function() {
  if (node) node.kill();
  node = spawn('node', ['dist/retaliation/server.js'], {stdio: 'inherit'});
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
  gulp.start('serve-retaliation');
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill();
});
