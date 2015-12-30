'use strict';

var gulpWatch = require('gulp-watch');

module.exports = watch;

function watch(task, isWatching, globs, logger) {

  var taskPromise = task();
  var runPlanned = false;

  if (!isWatching) {
    return;
  }

  taskPromise.then(monitor, monitor);

  function monitor() {
    gulpWatch(globs, function(path) {
      logger.changed(path);
      if (runPlanned) {
        return;
      }
      runPlanned = true;
      taskPromise = taskPromise
        .then(runned, runned)
        .then(task, task);
    });
  }

  function runned() {
    runPlanned = false;
  }

}
