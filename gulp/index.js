'use strict';

require('./config');

const fs       = require('fs'),
      gulp     = require('gulp'),
      gutil    = require('gulp-util'),
      sequence = require('run-sequence'),
      tasks    = fs.readdirSync('./gulp/tasks/');

/* Populate Gulp Tasks */
tasks.forEach(function (task) {
  require('./tasks/' + task);
});

/**
 * Default Gulp Entry
 * (Refactor when Gulp 4.0 releases, with `gulp.series`)
 **/
gulp.task('default', function(callback) {
  sequence('clean', 'build', callback);
  // sequence('clean', 'build', 'watch', callback);
});