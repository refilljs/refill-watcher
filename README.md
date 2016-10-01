Refill watcher
==============

Zkflow watcher watches files for you and runs provided asynchronous function when this files changes.
It prevents function to run more than once at a time and prevents building up run queue.

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-watcher.svg?style=flat-square)](https://www.npmjs.com/package/refill-watcher)
[![npm](https://img.shields.io/npm/l/refill-watcher.svg?style=flat-square)](https://www.npmjs.com/package/refill-watcher)
[![npm](https://img.shields.io/npm/dm/refill-watcher.svg?style=flat-square)](https://www.npmjs.com/package/refill-watcher)
[![Travis](https://img.shields.io/travis/refilljs/refill-watcher/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-watcher)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-watcher/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-watcher)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-watcher/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-watcher/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-watcher/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-watcher/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-watcher/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-watcher)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-watcher.svg?style=flat-square)](https://github.com/refilljs/refill-watcher)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-watcher.svg?style=flat-square)](https://github.com/refilljs/refill-watcher)
[![GitHub watchers](https://img.shields.io/github/watchers/refilljs/refill-watcher.svg?style=flat-square)](https://github.com/refilljs/refill-watcher)

Installation
------------

```bash
npm install --save refill-watcher
```

API
---

```javaScript
require('refill-watcher').watch(task, isWatching, globs, logger);
```

* task - asynchronous function, witch return promise;
* isWatching - true or false. When false task will be run only once and then it will exit.
* globs - globs that will be passed to [gulp-watch](https://www.npmjs.com/package/gulp-watch)
* logger - logger from [refill-logger](https://www.npmjs.com/package/refill-logger)

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-watcher/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)

