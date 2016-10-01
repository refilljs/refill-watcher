'use strict';

var proxyquire = require('proxyquire');

function shouldWatch(next, that) {

  setTimeout(check);

  function check() {
    expect(that.gulpWatchMock).toHaveBeenCalledWith(that.globs, jasmine.any(Function));
    next();
  }

}

function checkRunTaskAfterLastRun(next, that) {

  setTimeout(check);

  function check() {
    that.task.calls.reset();
    that.gulpWatchMock.calls.argsFor(0)[1]();
    expect(that.task).not.toHaveBeenCalled();
    that.task.calls.reset();
    that.resolveTask();
    setTimeout(check2);
  }

  function check2() {
    expect(that.task).toHaveBeenCalled();
    next();
  }

}

describe('zkflowWatcher.watch', function() {

  beforeEach(function() {

    var that = this;

    this.task = jasmine.createSpy('task').and.callFake(function() {
      that.promise = new Promise(function(resolve, reject) {
        that.resolveTask = resolve;
        that.rejectTask = reject;
      });
      return that.promise;
    });

    this.gulpWatchMock = jasmine.createSpy('gulpWatch');
    this.loggerMock = jasmine.createSpyObj('logger', ['changed']);

    this.watch = proxyquire('./watch', {
      'gulp-watch': this.gulpWatchMock
    });

    this.globs = 'some/globs/';

  });

  it('should run task', function() {
    this.watch(this.task, false, this.globs, this.loggerMock);
    expect(this.task).toHaveBeenCalled();
  });

  it('when we don\'t want to watch should not watch', function(next) {

    var that = this;
    this.watch(this.task, false, this.globs, this.loggerMock);
    this.resolveTask();
    this.promise.then(check, check);

    function check() {
      expect(that.gulpWatchMock).not.toHaveBeenCalled();
      next();
    }

  });

  describe('when we want to watch', function() {

    beforeEach(function() {
      this.watch(this.task, true, this.globs, this.loggerMock);

    });

    it('and task is not finished should not watch', function() {
      expect(this.gulpWatchMock).not.toHaveBeenCalled();
    });

    it('and task resolves should watch', function(next) {

      this.resolveTask();
      shouldWatch(next, this);

    });

    it('and task rejects should watch', function(next) {

      this.rejectTask();
      shouldWatch(next, this);

    });

    it('and file is changed should run task after last run resolves', function(next) {

      this.resolveTask();
      checkRunTaskAfterLastRun(next, this);

    });

    it('and file is changed should run task after last run rejects', function(next) {

      this.rejectTask();
      checkRunTaskAfterLastRun(next, this);

    });

    it('and file is changed twice should run task after last run resolves only once', function(next) {

      var that = this;

      this.resolveTask();
      setTimeout(check);

      function check() {
        that.task.calls.reset();
        that.gulpWatchMock.calls.argsFor(0)[1]();
        that.gulpWatchMock.calls.argsFor(0)[1]();
        expect(that.task).not.toHaveBeenCalled();
        that.task.calls.reset();
        setTimeout(check2);
      }

      function check2() {
        expect(that.task.calls.count()).toEqual(1);
        next();
      }

    });

    it('and file is changed resolved and then changed should run task twice', function(next) {

      var that = this;

      this.resolveTask();
      setTimeout(check);

      function check() {
        that.gulpWatchMock.calls.argsFor(0)[1]();
        setTimeout(check2);
      }

      function check2() {
        that.resolveTask();
        setTimeout(check3);
      }

      function check3() {
        that.task.calls.reset();
        that.gulpWatchMock.calls.argsFor(0)[1]();
        setTimeout(check4);
      }

      function check4() {
        expect(that.task).toHaveBeenCalled();
        next();
      }

    });

  });

});
